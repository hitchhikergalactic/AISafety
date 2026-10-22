// Página «Red» (/red y /en/network): la red de hubs aliados, como ENAIS. La portada muestra un resumen
// (bloque «Red iaS») con los mismos logos; los textos compartidos están en `translations.collaborators`.
// Sin imports de imágenes: astro.config.mjs lee los canonicals de aquí. Los logos están en red-hubs.ts.
// Formulario del directorio de la red (Airtable). Funciona por reciprocidad: quien hace público su perfil ve los de los demás.
// En la web solo se enlaza el formulario; el directorio se comparte después de apuntarse.
export const directorioFormUrl = 'https://airtable.com/appjg7pwM6YVmobZ6/pagaXjWme216UK4rV/form';

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
    directoryButton: 'Únete al directorio',
    directoryTitle: 'Únete al directorio de la red',
    directoryText: 'Comparte tu perfil y encuentra a personas con quienes colaborar. Si lo haces público, podrás ver los perfiles públicos de los demás.',
    directoryNote: 'Formulario de Airtable. Se abrirá en una nueva pestaña.',
    joinTitle: '¿No hay un nodo en tu ciudad?',
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
    directoryButton: 'Join the directory',
    directoryTitle: 'Join the network directory',
    directoryText: "Share your profile and find people to collaborate with. If you make it public, you'll be able to see other people's public profiles.",
    directoryNote: 'Airtable form. Opens in a new tab.',
    joinTitle: 'No node in your city?',
    joinText: 'Bring iaS to your city.',
    joinButton: 'Start a chapter',
    joinHref: '/en/delegaciones/crear-una-delegacion',
  },
} as const;
