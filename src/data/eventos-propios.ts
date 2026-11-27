import type { Evento } from '@components/ProximosEventos';
import { empezarYaCurso } from '@data/cursoEstrategiaAgi';

// Eventos de iaS que NO están en el calendario de Luma de iaS (por ejemplo, un curso con formulario propio, o un
// evento que coorganizamos y que vive en otro calendario). Se juntan con los de Luma (src/data/eventos.json) en la portada y en /eventos. Si un evento se crea también en Luma, hay que quitarlo de aquí
// para que no salga dos veces.
//
// - `porFechas`: se muestra el intervalo de días, sin hora.
// - `visibleHasta`: hasta cuándo se anuncia (por defecto, hasta que termina). Para un curso, hasta que empieza.
// - `sinDatosEstructurados`: no se publica como `Event` de schema.org (el curso ya tiene su `Course` en su página).
export const eventosPropios: Evento[] = [
  // Preguntas y respuestas del curso AGI Strategy: lo presentan Osmani y Dani, pero está en el calendario de BlueDot Impact
  {
    id: 'evt-ioU95fxGqRjA9gd',
    nombre: 'AGI Strategy Course · Preguntas y respuestas',
    nombreEn: 'AGI Strategy Course · Q&A',
    url: 'https://luma.com/etu8pslk',
    inicio: '2026-12-02T18:00:00+01:00',
    fin: '2026-12-02T19:00:00+01:00',
    zona: 'Europe/Madrid',
    modalidad: 'en-linea',
    ciudad: null,
    lugar: null,
    direccion: null,
    imagen: 'https://images.lumacdn.com/uploads/o5/0f9990d7-00a5-4b23-a200-c1e58a3aef35.png',
  },
  // Women4AISafety en Madrid: lo coorganiza iaS (Osmani es anfitrión), pero está en el calendario rediaS
  {
    id: 'evt-BcpEAcooXiDOpWJ',
    nombre: 'Seguridad de la IA: cómo entrar en el campo · Primer encuentro Women4AISafety en Madrid',
    nombreEn: 'AI safety: how to get into the field · First Women4AISafety meetup in Madrid',
    url: 'https://luma.com/w4ais-spain',
    inicio: '2026-11-24T19:00:00+01:00',
    fin: '2026-11-24T21:30:00+01:00',
    zona: 'Europe/Madrid',
    modalidad: 'presencial',
    ciudad: 'Madrid',
    lugar: 'Celonis',
    direccion: 'Celonis SL, Pl. de Manuel Gómez-Moreno, 2, Tetuán, 28020 Madrid, España',
    imagen: 'https://images.lumacdn.com/uploads/hx/b9862cdf-1476-41db-919b-b6166cdbfb50.png',
  },
  {
    id: 'curso-estrategia-agi-2027-1',
    nombre: 'Curso de Estrategia ante la IA General',
    nombreEn: 'AGI Strategy Course',
    url: 'https://form.jotform.com/262144003863046',
    inicio: '2027-01-11T00:00:00+01:00',
    fin: '2027-02-14T23:59:00+01:00',
    visibleHasta: '2027-01-11T00:00:00+01:00',
    porFechas: true,
    sinDatosEstructurados: true,
    extraEs: empezarYaCurso,
    zona: 'Europe/Madrid',
    modalidad: 'en-linea',
    ciudad: null,
    lugar: null,
    direccion: null,
    imagen: null,
  },
];
