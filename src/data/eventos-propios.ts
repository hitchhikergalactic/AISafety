import type { Evento } from '@components/ProximosEventos';

// Eventos de iaS que NO están en Luma (por ejemplo, un curso con formulario propio). Se juntan con los de Luma
// (src/data/eventos.json) en la portada y en /eventos. Si un evento se crea también en Luma, hay que quitarlo de aquí
// para que no salga dos veces.
//
// - `porFechas`: se muestra el intervalo de días, sin hora.
// - `visibleHasta`: hasta cuándo se anuncia (por defecto, hasta que termina). Para un curso, hasta que empieza.
// - `sinDatosEstructurados`: no se publica como `Event` de schema.org (el curso ya tiene su `Course` en su página).
export const eventosPropios: Evento[] = [
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
    zona: 'Europe/Madrid',
    modalidad: 'en-linea',
    ciudad: null,
    lugar: null,
    direccion: null,
    imagen: null,
  },
];
