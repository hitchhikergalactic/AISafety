// Textos de la página "Visión" (cabecera y SEO). El cuerpo del documento está en src/content/vision/{es,en}.md.
// `subtitle` es también la meta description y la descripción de la tarjeta de "Qué hacemos": una sola fuente.
export const visionContent = {
  es: {
    seoTitle: 'Visión | iaS',
    breadcrumbParent: 'Sobre iaS',
    breadcrumbCurrent: 'Visión',
    eyebrow: 'Hacia dónde va iaS',
    title: 'Visión',
    subtitle:
      'Visión y resumen de Inteligencia Artificial Segura (iaS): conocimiento de referencia en español sobre los riesgos más graves de la IA avanzada.',
    canonical: 'https://aisafety.es/vision',
  },
  en: {
    seoTitle: 'Vision | iaS',
    breadcrumbParent: 'About iaS',
    breadcrumbCurrent: 'Vision',
    eyebrow: 'Where iaS is heading',
    title: 'Vision',
    subtitle:
      'Vision and summary of Inteligencia Artificial Segura (iaS): reference knowledge in Spanish on the most serious risks of advanced AI.',
    canonical: 'https://aisafety.es/en/vision',
  },
} as const;
