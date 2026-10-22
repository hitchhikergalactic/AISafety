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
    // Párrafo de contexto bajo el mapa. Cada trozo con `href` es un enlace a la fuente
    context: [
      { text: 'El mundo hispanohablante tiene peso propio en el debate internacional sobre la IA: el Gobierno de España impulsa una alianza de «potencias medias» a la que ' },
      { text: 'ya se ha sumado México', href: 'https://www.eldiario.es/tecnologia/gobierno-suma-mexico-alianza-potencias-medias-impulsar-ia-alternativa-eeuu-china_1_13488471.html' },
      { text: ', y ha propuesto una ' },
      { text: 'Alianza Iberoamericana de Inteligencia Artificial', href: 'https://www.infobae.com/america/agencias/2026/10/01/espana-impulsa-una-alianza-iberoamericana-sobre-ia-en-la-cumbre-regional-de-la-ocde-para-latinoamerica/' },
      { text: '.' },
    ],
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
    context: [
      { text: "The Spanish-speaking world carries its own weight in the international AI debate: Spain's Government is promoting an alliance of AI \"middle powers\" that " },
      { text: 'Mexico has already joined', href: 'https://www.eldiario.es/tecnologia/gobierno-suma-mexico-alianza-potencias-medias-impulsar-ia-alternativa-eeuu-china_1_13488471.html' },
      { text: ', and has proposed an ' },
      { text: 'Ibero-American Artificial Intelligence Alliance', href: 'https://www.infobae.com/america/agencias/2026/10/01/espana-impulsa-una-alianza-iberoamericana-sobre-ia-en-la-cumbre-regional-de-la-ocde-para-latinoamerica/' },
      { text: ' (sources in Spanish).' },
    ],
    joinTitle: 'No group in your city?',
    joinText: 'Bring iaS to your city.',
    joinButton: 'Start a chapter',
    joinHref: '/en/delegaciones/crear-una-delegacion',
  },
} as const;
