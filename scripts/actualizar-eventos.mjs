// Guarda los próximos eventos de dos calendarios de Luma. Lo ejecuta cada día .github/workflows/actualizar-eventos.yml;
// si un calendario falla, su archivo se queda como estaba.
//
// - iaS (src/data/eventos.json): solo los eventos CREADOS en el calendario de iaS; los que otros hubs envían o destacan se descartan.
// - rediaS (src/data/eventos-red.json, página /red): todos los eventos públicos que muestra el calendario, también los de otros hubs.
//
// Se lee la página pública del calendario (no hace falta la API de pago de Luma).
import { readFileSync, writeFileSync } from 'node:fs';

const CALENDARIOS = [
  { nombre: 'iaS', id: 'cal-F2GQeMRijaLsJDp', pagina: 'https://luma.com/iaS-SeguridadelaIA', destino: '../src/data/eventos.json', soloPropios: true },
  { nombre: 'rediaS', id: 'cal-0smJtNYwjDUsHJD', pagina: 'https://luma.com/rediaS', destino: '../src/data/eventos-red.json', soloPropios: false },
];

// Modalidad de los eventos de iaS según las etiquetas de su calendario: en rediaS no llevan esas etiquetas,
// así que se reutiliza para que un mismo evento no salga «en línea» en la portada y «presencial» en /red.
const modalidadIas = new Map();

let fallos = 0;
for (const cal of CALENDARIOS) {
  try {
    await actualizar(cal);
  } catch (error) {
    fallos++;
    console.error(`${cal.nombre}: ${error.message}`);
  }
}
if (fallos) process.exitCode = 1;

async function actualizar({ nombre, id: CALENDARIO, pagina: PAGINA, destino, soloPropios }) {
const DESTINO = new URL(destino, import.meta.url);

const respuesta = await fetch(PAGINA, { headers: { 'User-Agent': 'Mozilla/5.0 (aisafety.es)' } });
if (!respuesta.ok) throw new Error(`Luma respondió ${respuesta.status}`);
const html = await respuesta.text();
const json = html.match(/<script id="__NEXT_DATA__"[^>]*>([\s\S]*?)<\/script>/)?.[1];
if (!json) throw new Error('La página de Luma no trae los datos del calendario');
const datos = JSON.parse(json)?.props?.pageProps?.initialData?.data;
if (datos?.calendar?.api_id !== CALENDARIO) throw new Error(`La página no corresponde al calendario de ${nombre}`);

// Los eventos están repartidos en varias listas (próximos, destacados…): se recorren todas y se quitan duplicados.
// Cada evento va envuelto en un objeto que trae también las etiquetas del calendario («En Linea», «En Persona»).
const vistos = new Map();
const etiquetas = new Map();
const recorrer = (nodo) => {
  if (Array.isArray(nodo)) return nodo.forEach(recorrer);
  if (!nodo || typeof nodo !== 'object') return;
  const ev = nodo.event;
  if (ev && typeof ev === 'object' && ev.start_at && ev.api_id) {
    if (!vistos.has(ev.api_id)) vistos.set(ev.api_id, ev);
    const nombres = (Array.isArray(nodo.tags) ? nodo.tags : []).map((t) => t?.name).filter(Boolean);
    if (nombres.length) etiquetas.set(ev.api_id, nombres);
  }
  Object.values(nodo).forEach(recorrer);
};

// Manda la etiqueta que se pone a mano en el calendario; si no hay, se deduce del tipo de ubicación de Luma.
const normalizar = (texto) => texto.normalize('NFD').replace(/\p{M}/gu, '').toLowerCase();
const modalidadDe = (ev) => {
  const tags = (etiquetas.get(ev.api_id) ?? []).map(normalizar);
  const enLinea = tags.some((t) => t.includes('linea') || t.includes('online'));
  const presencial = tags.some((t) => t.includes('persona') || t.includes('presencial'));
  if (enLinea && presencial) return 'hibrido';
  if (enLinea) return 'en-linea';
  if (presencial) return 'presencial';
  // Luma usa «offline» para un lugar físico y «online», «zoom», «meet»… para los virtuales
  return ev.location_type === 'offline' ? 'presencial' : 'en-linea';
};
recorrer(datos);

const ahora = Date.now();
const eventos = [...vistos.values()]
  .filter((ev) => (!soloPropios || ev.calendar_api_id === CALENDARIO) && ev.visibility === 'public')
  .filter((ev) => new Date(ev.end_at ?? ev.start_at).getTime() > ahora)
  .map((ev) => {
    const lugar = ev.geo_address_info ?? {};
    const es = lugar.localized?.es ?? {};
    const modalidad = soloPropios ? modalidadDe(ev) : (modalidadIas.get(ev.api_id) ?? modalidadDe(ev));
    if (soloPropios) modalidadIas.set(ev.api_id, modalidad);
    const conLugar = ev.location_type === 'offline';
    return {
      id: ev.api_id,
      nombre: ev.name.trim(),
      url: `https://luma.com/${ev.url}`,
      inicio: ev.start_at,
      fin: ev.end_at ?? null,
      zona: ev.timezone ?? 'Europe/Madrid',
      modalidad,
      ciudad: conLugar ? (es.city ?? lugar.city ?? null) : null,
      lugar: conLugar ? (es.address ?? lugar.address ?? null) : null,
      direccion: conLugar ? (es.full_address ?? lugar.full_address ?? null) : null,
      imagen: ev.cover_url ?? null,
    };
  })
  .sort((a, b) => a.inicio.localeCompare(b.inicio));

const nuevo = `${JSON.stringify(eventos, null, 2)}\n`;
let actual = '';
try { actual = readFileSync(DESTINO, 'utf8'); } catch {}
if (nuevo === actual) {
  console.log(`${nombre}: sin cambios en los eventos.`);
} else {
  writeFileSync(DESTINO, nuevo);
  console.log(`Próximos eventos de ${nombre}: ${eventos.length}`);
  eventos.forEach((e) => console.log(`- ${e.inicio} ${e.nombre}`));
}
}
