// Ancla de un encabezado sin tildes ni signos, con guiones: «¿Por qué dedicarse a la seguridad de la IA?»
// → «por-que-dedicarse-a-la-seguridad-de-la-ia». La usan el plugin de Markdown (id del encabezado) y la página
// (enlaces del índice), así que siempre coinciden.
export const slugSinTildes = (texto) =>
  texto
    .normalize('NFD')
    .replace(/[̀-ͯ]/g, '')
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');
