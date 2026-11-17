// Textos de la página "Qué es la seguridad de la IA" (cabecera y SEO). El cuerpo del artículo está en
// src/content/que-es-la-seguridad-de-la-ia/es.md. `title`, `subtitle` y `canonical` deben coincidir con el
// frontmatter de ese archivo (la página lo comprueba al compilar). Solo existe en español.
export const queEsLaSeguridadDeLaIaContent = {
  es: {
    seoTitle: 'Por qué importa la seguridad de la IA | iaS',
    breadcrumbParent: 'Aprender',
    breadcrumbParentHref: '/#eventos',
    breadcrumbCurrent: 'Qué es la seguridad de la IA',
    eyebrow: 'Qué es la seguridad de la IA',
    title: 'Por qué importa la seguridad de la IA',
    subtitle: 'Estamos construyendo máquinas que podrían superar a los humanos en casi todo. Hacerlo bien puede ser el reto más importante de nuestro siglo.',
    path: '/que-es-la-seguridad-de-la-ia',
    canonical: 'https://aisafety.es/que-es-la-seguridad-de-la-ia',
    // Fecha de publicación del artículo (datos estructurados y Open Graph)
    datePublished: '2026-11-18',
    // Autoría del texto original (traducción de iaS con licencia CC BY 4.0)
    autor: { nombre: 'David Williams-King', url: 'https://safetyapprentice.com/why-ai-safety.html' },
    // Palabras clave para buscadores: todas aparecen en el propio artículo
    keywords: [
      'seguridad de la IA',
      'riesgos de la IA',
      'riesgo existencial',
      'alineación',
      'desalineación',
      'uso malintencionado',
      'riesgo sistémico',
      'pérdida de control',
      'interpretabilidad',
      'concentración de poder',
      'superinteligencia',
      'inteligencia artificial general',
      'jailbreak',
      'gobernanza',
      'potencias medias',
      'Instituto de Seguridad de la IA',
    ],
  },
} as const;
