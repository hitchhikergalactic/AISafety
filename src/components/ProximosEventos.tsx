import React, { useEffect, useMemo, useState } from 'react';
import { ArrowUpRight, MapPin, Monitor } from 'lucide-react';
import eventosJson from '../data/eventos.json';
import { eventosPropios } from '../data/eventos-propios';

// Próximos eventos de iaS, leídos de src/data/eventos.json (lo actualiza cada día scripts/actualizar-eventos.mjs).
// Pensado para llegar a la inscripción con un solo clic: cada tarjeta entera es el enlace al evento en Luma.
// En el HTML las horas salen en la zona del evento; al cargar, las de los eventos en línea pasan a la hora de quien visita.

export type Evento = {
  id: string;
  nombre: string;
  url: string;
  inicio: string;
  fin: string | null;
  zona: string;
  modalidad: 'en-linea' | 'presencial' | 'hibrido';
  ciudad: string | null;
  lugar: string | null;
  direccion: string | null;
  imagen: string | null;
  // Solo en los eventos propios (src/data/eventos-propios.ts)
  nombreEn?: string;
  porFechas?: boolean;
  visibleHasta?: string;
  sinDatosEstructurados?: boolean;
};

// Los de Luma y los propios, por orden de fecha
export const eventos: Evento[] = [...(eventosJson as Evento[]), ...eventosPropios]
  .sort((a, b) => new Date(a.inicio).getTime() - new Date(b.inicio).getTime());
export const CALENDARIO_LUMA = 'https://luma.com/iaS-SeguridadelaIA';

// UTM para saber desde qué página llegan las inscripciones (solo en Luma; un formulario externo se deja tal cual)
export const conUtm = (url: string, campana: string) =>
  url.startsWith('https://luma.com/')
    ? `${url}${url.includes('?') ? '&' : '?'}utm_source=aisafety.es&utm_medium=web&utm_campaign=${campana}`
    : url;

const vigentes = (lista: Evento[], ahora: number) =>
  lista.filter((e) => new Date(e.visibleHasta ?? e.fin ?? e.inicio).getTime() > ahora);

// Próxima sesión del seminario en línea (los meetups en español con BlueDot)
export const esSeminario = (e: Evento) => e.modalidad !== 'presencial' && /meet\s*-?\s*up|seminario|seminar/i.test(e.nombre);

const textos = {
  es: {
    enLinea: 'En línea',
    hibrido: 'Presencial y en línea',
    apuntate: 'Apúntate',
    tuHora: 'tu hora',
    horaDe: (ciudad: string) => `hora de ${ciudad}`,
    todos: 'Todos',
    presencial: 'Presencial',
    vacio: 'Ahora mismo no hay eventos anunciados. Sigue el calendario y te avisamos del próximo.',
    seguir: 'Seguir el calendario en Luma',
    aviso: 'Los eventos en línea aparecen en tu hora local; los presenciales, en la hora del lugar.',
    filtro: 'Filtrar eventos',
  },
  en: {
    enLinea: 'Online',
    hibrido: 'In person and online',
    apuntate: 'Register',
    tuHora: 'your time',
    horaDe: (ciudad: string) => `${ciudad} time`,
    todos: 'All',
    presencial: 'In person',
    vacio: 'There are no events announced right now. Follow the calendar and we will let you know about the next one.',
    seguir: 'Follow the calendar on Luma',
    aviso: 'Online events show in your local time; in-person events, in the local time of the venue.',
    filtro: 'Filter events',
  },
} as const;

// «iaS - Valencia: AI Safety Session.» → sin el punto final; «Sprint | Madrid | iaS» → «Sprint – Madrid» (el «·» de la tipografía se pega a la palabra siguiente)
const limpiarNombre = (nombre: string) =>
  nombre.replace(/\s*\|\s*iaS\s*$/i, '').replace(/\.\s*$/, '').replace(/\s*\|\s*/g, ' – ').trim();

const ciudadDeZona = (zona: string) => zona.split('/').pop()?.replace(/_/g, ' ') ?? zona;

type Filtro = 'todos' | 'en-linea' | 'presencial' | `ciudad:${string}`;

const ProximosEventos: React.FC<{
  lang: 'es' | 'en';
  campana: string;
  limite?: number;
  filtros?: boolean;
  datosEstructurados?: boolean;
  lista?: Evento[];
}> = ({ lang, campana, limite, filtros = false, datosEstructurados = false, lista = eventos }) => {
  const tx = textos[lang];
  const locale = lang === 'es' ? 'es-ES' : 'en-GB';

  // En el servidor: zona del evento. En el navegador: la zona de quien visita (solo para los eventos en línea).
  const [zonaVisitante, setZonaVisitante] = useState<string | null>(null);
  // `ahora` empieza en 0 en el servidor y en el navegador (así la hidratación coincide) y se fija al cargar:
  // el script diario ya quita los eventos pasados, y lo que haya terminado desde entonces desaparece aquí.
  const [ahora, setAhora] = useState(0);
  const [filtro, setFiltro] = useState<Filtro>('todos');
  useEffect(() => {
    try { setZonaVisitante(Intl.DateTimeFormat().resolvedOptions().timeZone); } catch {}
    setAhora(Date.now());
  }, []);

  const proximos = useMemo(() => vigentes(lista, ahora), [lista, ahora]);
  const ciudades = useMemo(
    () => [...new Set(proximos.filter((e) => e.modalidad !== 'en-linea' && e.ciudad).map((e) => e.ciudad as string))].sort(),
    [proximos],
  );
  const filtrados = proximos.filter((e) => {
    if (filtro === 'todos') return true;
    if (filtro === 'en-linea') return e.modalidad !== 'presencial';
    if (filtro === 'presencial') return e.modalidad !== 'en-linea';
    return e.ciudad === filtro.slice('ciudad:'.length);
  });
  const visibles = limite ? filtrados.slice(0, limite) : filtrados;

  const formatear = (e: Evento) => {
    const local = !e.porFechas && e.modalidad !== 'presencial' && zonaVisitante;
    const zona = local ? zonaVisitante : e.zona;
    const fecha = new Date(e.inicio);
    const parte = (opciones: Intl.DateTimeFormatOptions) => new Intl.DateTimeFormat(locale, { timeZone: zona, ...opciones }).format(fecha);
    const varios = e.fin && new Date(e.fin).getTime() - fecha.getTime() > 24 * 3600 * 1000;
    const finTexto = varios && e.fin
      ? new Intl.DateTimeFormat(locale, { timeZone: zona, day: 'numeric', month: 'short' }).format(new Date(e.fin))
      : null;
    return {
      dia: parte({ day: 'numeric' }),
      mes: parte({ month: 'short' }).replace('.', ''),
      semana: parte({ weekday: 'long' }),
      hora: parte({ hour: '2-digit', minute: '2-digit' }),
      hasta: finTexto,
      desde: parte({ day: 'numeric', month: 'short' }),
      etiquetaZona: local ? tx.tuHora : tx.horaDe(e.ciudad && e.modalidad !== 'en-linea' ? e.ciudad : ciudadDeZona(e.zona)),
    };
  };

  const paraBuscadores = datosEstructurados ? vigentes(lista, Date.now()).filter((e) => !e.sinDatosEstructurados) : [];
  const jsonLd = paraBuscadores.length > 0 ? paraBuscadores.map((e) => ({
    '@context': 'https://schema.org',
    '@type': 'Event',
    name: limpiarNombre(e.nombre),
    startDate: e.inicio,
    ...(e.fin ? { endDate: e.fin } : {}),
    eventStatus: 'https://schema.org/EventScheduled',
    eventAttendanceMode: {
      'en-linea': 'https://schema.org/OnlineEventAttendanceMode',
      presencial: 'https://schema.org/OfflineEventAttendanceMode',
      hibrido: 'https://schema.org/MixedEventAttendanceMode',
    }[e.modalidad],
    location: e.modalidad === 'en-linea'
      ? { '@type': 'VirtualLocation', url: e.url }
      : { '@type': 'Place', name: e.lugar ?? e.ciudad ?? '', address: e.direccion ?? e.ciudad ?? '' },
    ...(e.imagen ? { image: [e.imagen] } : {}),
    url: e.url,
    organizer: { '@type': 'Organization', name: 'iaS', url: 'https://www.aisafety.es' },
  })) : null;

  const chip = (valor: Filtro, texto: string) => (
    <button
      key={valor}
      type="button"
      onClick={() => setFiltro(valor)}
      aria-pressed={filtro === valor}
      className={`px-4 py-1.5 rounded-full border font-sans text-sm font-semibold transition-colors cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-principal ${
        filtro === valor
          ? 'bg-secundarios-dark text-secundarios-light border-secundarios-dark dark:bg-secundarios-light dark:text-secundarios-dark dark:border-secundarios-light'
          : 'border-secundarios-dark/20 dark:border-secundarios-light/30 text-secundarios-dark dark:text-secundarios-light hover:border-principal'
      }`}
    >
      {texto}
    </button>
  );

  return (
    <div>
      {jsonLd && <script type="application/ld+json" suppressHydrationWarning dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />}

      {filtros && proximos.length > 1 && (
        <div role="group" aria-label={tx.filtro} className="flex flex-wrap gap-2 mb-6">
          {chip('todos', tx.todos)}
          {proximos.some((e) => e.modalidad !== 'presencial') && chip('en-linea', tx.enLinea)}
          {proximos.some((e) => e.modalidad !== 'en-linea') && chip('presencial', tx.presencial)}
          {ciudades.length > 1 && ciudades.map((c) => chip(`ciudad:${c}`, c))}
        </div>
      )}

      {visibles.length === 0 ? (
        <div className="rounded-anthro border border-secundarios-dark/15 dark:border-secundarios-light/15 p-6 md:p-8 text-center">
          <p className="!mb-4">{tx.vacio}</p>
          <a href={conUtm(CALENDARIO_LUMA, campana)} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 py-3 px-6 rounded-xl bg-principal text-white font-sans font-bold no-underline hover:bg-principal/90 transition-all">
            {tx.seguir} <ArrowUpRight size={18} aria-hidden="true" />
          </a>
        </div>
      ) : (
        <ul className="grid gap-3 md:gap-4 list-none !p-0 !m-0">
          {visibles.map((e) => {
            const f = formatear(e);
            const Icono = e.modalidad === 'en-linea' ? Monitor : MapPin;
            const donde = e.modalidad === 'en-linea' ? tx.enLinea : e.modalidad === 'hibrido' ? `${e.ciudad ?? ''} · ${tx.hibrido}` : (e.ciudad ?? '');
            return (
              <li key={e.id} className="!m-0">
                <a
                  href={conUtm(e.url, campana)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-4 md:gap-6 p-4 md:p-5 rounded-anthro border border-secundarios-dark/15 dark:border-secundarios-light/15 bg-white dark:bg-white/5 no-underline text-secundarios-dark dark:text-secundarios-light hover:border-principal hover:shadow-anthro-card transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-principal"
                >
                  <span className="shrink-0 w-16 md:w-20 text-center rounded-xl bg-principal/10 py-2 md:py-3">
                    <span className="block font-sans text-2xl md:text-3xl font-bold leading-none text-principal-texto" suppressHydrationWarning>{f.dia}</span>
                    <span className="block mt-1 font-sans text-xs md:text-sm font-bold uppercase tracking-wider text-principal-texto" suppressHydrationWarning>{f.mes}</span>
                  </span>
                  <span className="min-w-0 flex-1">
                    <span className="block font-sans text-base md:text-lg font-bold leading-snug">{limpiarNombre(lang === 'en' && e.nombreEn ? e.nombreEn : e.nombre)}</span>
                    <span className="mt-1 flex flex-wrap items-center gap-x-3 gap-y-1 font-sans text-sm text-secundarios-dark/75 dark:text-secundarios-light/75">
                      <span className="inline-flex items-center gap-1"><Icono size={14} aria-hidden="true" />{donde}</span>
                      <span suppressHydrationWarning>
                        {e.porFechas
                          ? <>{f.desde}{f.hasta ? ` – ${f.hasta}` : ''}</>
                          : <><span className="capitalize">{f.semana}</span>, {f.hora}{f.hasta ? ` – ${f.hasta}` : ''} <span className="opacity-80">({f.etiquetaZona})</span></>}
                      </span>
                    </span>
                  </span>
                  <span className="hidden sm:inline-flex shrink-0 items-center gap-1 py-2 px-4 rounded-xl bg-principal text-white font-sans font-bold text-sm shadow-md group-hover:-translate-y-0.5 transition-transform">
                    {tx.apuntate} <ArrowUpRight size={16} aria-hidden="true" />
                  </span>
                  <ArrowUpRight size={20} aria-hidden="true" className="sm:hidden shrink-0 text-principal-texto" />
                </a>
              </li>
            );
          })}
        </ul>
      )}

      {filtros && proximos.length > 0 && (
        <p className="!mt-4 !mb-0 font-sans text-sm text-secundarios-dark/70 dark:text-secundarios-light/70">{tx.aviso}</p>
      )}
    </div>
  );
};

export default ProximosEventos;
