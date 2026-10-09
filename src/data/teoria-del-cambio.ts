// Textos de la página "Teoría del Cambio" (cabecera y SEO). El cuerpo del documento está en
// src/content/teoria-del-cambio/{es,en}.md. `title`, `subtitle` y `canonical` deben coincidir con el frontmatter de
// esos archivos (las páginas lo comprueban al compilar). `path` es la ruta sin el prefijo de idioma, que cambia
// entre español e inglés.
export const teoriaDelCambioContent = {
  es: {
    seoTitle: 'Teoría del Cambio | iaS',
    breadcrumbParent: 'Sobre iaS',
    breadcrumbCurrent: 'Teoría del Cambio',
    eyebrow: 'Cómo se produce el cambio',
    title: 'Teoría del Cambio',
    subtitle:
      'Cómo y por qué el trabajo de iaS reduce los riesgos más graves de la IA avanzada: el problema, lo que hacemos, el cambio que buscamos y nuestros próximos hitos.',
    path: '/teoria-del-cambio',
    canonical: 'https://aisafety.es/teoria-del-cambio',
  },
  en: {
    seoTitle: 'Theory of Change | iaS',
    breadcrumbParent: 'About iaS',
    breadcrumbCurrent: 'Theory of Change',
    eyebrow: 'How change happens',
    title: 'Theory of Change',
    subtitle:
      'How and why the work of iaS reduces the most serious risks of advanced AI: the problem, what we do, the change we seek and our next milestones.',
    path: '/theory-of-change',
    canonical: 'https://aisafety.es/en/theory-of-change',
  },
} as const;
