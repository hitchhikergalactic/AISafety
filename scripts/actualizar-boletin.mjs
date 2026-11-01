// Guarda en src/data/ultimo-boletin.json el titular y el enlace de la última entrega del boletín.
// Lo ejecuta cada día .github/workflows/actualizar-boletin.yml; si falla, el archivo se queda como estaba.
import { readFileSync, writeFileSync } from 'node:fs';

const FEED = 'https://seguridaddelaia.substack.com/feed';
const BASE_ENTREGA = 'https://seguridaddelaia.substack.com/p/';
const DESTINO = new URL('../src/data/ultimo-boletin.json', import.meta.url);

const respuesta = await fetch(FEED, { headers: { 'User-Agent': 'aisafety.es (actualizar boletín)' } });
if (!respuesta.ok) throw new Error(`El feed respondió ${respuesta.status}`);
const xml = await respuesta.text();

const entrega = xml.match(/<item>[\s\S]*?<\/item>/)?.[0];
const leer = (etiqueta) =>
  entrega?.match(new RegExp(`<${etiqueta}>(?:<!\\[CDATA\\[)?([\\s\\S]*?)(?:\\]\\]>)?</${etiqueta}>`))?.[1].trim();

const tituloOriginal = leer('title');
const url = leer('link');
if (!tituloOriginal || !url?.startsWith(BASE_ENTREGA)) throw new Error('El feed no trae una entrega válida');

// «Semana iaS: la confianza…» o «Semana iaS · quién avisa…» pasa a ser solo el titular, con mayúscula inicial.
const sinPrefijo = tituloOriginal.replace(/^Semana iaS\s*[:·|.-]\s*/i, '').replace(/\.$/, '').trim();
const titulo = sinPrefijo.replace(/^[¿¡«"]*\p{L}/u, (inicio) => inicio.toLocaleUpperCase('es'));

const nuevo = `${JSON.stringify({ titulo, url }, null, 2)}\n`;
let actual = '';
try { actual = readFileSync(DESTINO, 'utf8'); } catch {}
if (nuevo === actual) {
  console.log('Sin entregas nuevas.');
} else {
  writeFileSync(DESTINO, nuevo);
  console.log(`Última entrega: ${titulo}`);
}
