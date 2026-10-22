// Página «Red» (/red y /en/network): la red de hubs aliados, como ENAIS. La portada muestra un resumen
// (bloque «Red iaS») con los mismos logos; los textos compartidos están en `translations.collaborators`.
// Sin imports de imágenes: astro.config.mjs lee los canonicals de aquí. Los logos están en red-hubs.ts.
export const redContent = {
  es: {
    seoTitle: 'Red | iaS',
    description:
      'La red de iaS: grupos locales donde conocer, en español, a personas que trabajan en seguridad de la IA, y nodos y redes aliados en el resto del mundo.',
    canonical: 'https://aisafety.es/red',
    mapTitle: 'El español en el mundo',
    joinTitle: '¿No hay un grupo en tu ciudad?',
    joinText: 'Lleva iaS a tu ciudad.',
    joinButton: 'Crear una delegación',
    joinHref: '/delegaciones/crear-una-delegacion',
  },
  en: {
    seoTitle: 'Network | iaS',
    description:
      'The iaS network: local groups where you can meet, in Spanish, people working on AI safety, and partner hubs and networks around the world.',
    canonical: 'https://aisafety.es/en/network',
    mapTitle: 'Spanish in the world',
    joinTitle: 'No group in your city?',
    joinText: 'Bring iaS to your city.',
    joinButton: 'Start a chapter',
    joinHref: '/en/delegaciones/crear-una-delegacion',
  },
} as const;
