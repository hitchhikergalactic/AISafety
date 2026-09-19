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
      'Misión, alcance en el mundo hispanohablante, pilares estratégicos y ambición a largo plazo de Inteligencia Artificial Segura (iaS) en materia de seguridad de la IA.',
    canonical: 'https://aisafety.es/vision',
  },
  en: {
    seoTitle: 'Vision | iaS',
    breadcrumbParent: 'About iaS',
    breadcrumbCurrent: 'Vision',
    eyebrow: 'Where iaS is heading',
    title: 'Vision',
    subtitle:
      'Mission, reach across the Spanish-speaking world, strategic pillars and long-term ambition of Inteligencia Artificial Segura (iaS) on AI safety.',
    canonical: 'https://aisafety.es/en/vision',
  },
} as const;
