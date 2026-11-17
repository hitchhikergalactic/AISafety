// Textos de la página "Mapa conceptual de la seguridad de la IA" (cabecera y SEO). El cuerpo está en
// src/content/mapa-conceptual/es.md. `title`, `subtitle` y `canonical` deben coincidir con el frontmatter de ese
// archivo (la página lo comprueba al compilar). Solo existe en español.
export const mapaConceptualContent = {
  es: {
    seoTitle: 'Mapa conceptual de la seguridad de la IA | iaS',
    breadcrumbParent: 'Aprender',
    breadcrumbParentHref: '/que-es-la-seguridad-de-la-ia',
    breadcrumbCurrent: 'Mapa conceptual',
    eyebrow: 'Aprender',
    title: 'Mapa conceptual de la seguridad de la IA',
    subtitle: 'Los conceptos clave del campo, ordenados: qué puede salir mal, por qué, qué hace la investigación al respecto y cómo comprobamos si funciona.',
    path: '/mapa-conceptual',
    canonical: 'https://aisafety.es/mapa-conceptual',
    datePublished: '2026-11-18',
    // Autoría del texto original (adaptación de iaS con licencia CC BY 4.0)
    autor: { nombre: 'David Williams-King', url: 'https://safetyapprentice.com/concept-map.html' },
    keywords: [
      'seguridad de la IA',
      'mapa conceptual',
      'alineación',
      'corregibilidad',
      'convergencia instrumental',
      'manipulación de la recompensa',
      'alineación engañosa',
      'fingir alineación',
      'pérdida de control',
      'supervisión escalable',
      'interpretabilidad',
      'control de la IA',
      'evaluaciones de capacidades peligrosas',
      'gobernanza del cómputo',
    ],
  },
} as const;
