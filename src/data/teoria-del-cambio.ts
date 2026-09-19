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
      'La lógica causal del trabajo de iaS: problema, teoría, insumos, actividades, resultados, evidencia y dinámica de escala.',
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
      'The causal logic behind the work of iaS: problem, theory, inputs, activities, outcomes, evidence and scaling dynamics.',
    path: '/theory-of-change',
    canonical: 'https://aisafety.es/en/theory-of-change',
  },
} as const;
