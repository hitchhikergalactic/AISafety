// Páginas cuyo nombre de ruta cambia entre idiomas. Para el resto, la versión en inglés es la misma ruta con el prefijo /en.
// Las rutas van sin barra final.
export const rutasEsEn: Record<string, string> = {
  '/teoria-del-cambio': '/en/theory-of-change',
};

const rutasEnEs: Record<string, string> = Object.fromEntries(Object.entries(rutasEsEn).map(([es, en]) => [en, es]));

// Ruta equivalente en el otro idioma, para el selector ES/EN. `lang` es el idioma de la página actual.
export function rutaEnOtroIdioma(pathname: string, lang: 'es' | 'en'): string {
  const barraFinal = pathname.length > 1 && pathname.endsWith('/') ? '/' : '';
  const limpia = pathname.length > 1 ? pathname.replace(/\/+$/, '') : pathname;

  if (lang === 'es') {
    const traducida = rutasEsEn[limpia];
    if (traducida) return traducida + barraFinal;
    return pathname === '/' ? '/en/' : `/en${pathname}`;
  }

  const traducida = rutasEnEs[limpia];
  if (traducida) return traducida + barraFinal;
  return pathname === '/en' || pathname === '/en/' ? '/' : pathname.replace(/^\/en/, '');
}
