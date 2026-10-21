export const delegacionesNavLabel = {
  es: '/Red',
  en: '/Network',
} as const;

// `description` e `icon` solo los usa el desplegable del menú. Un separador con `title` se pinta como
// cabecera de grupo («Sede», «Delegaciones»); sin `title`, como una línea.
type Sublink =
  | { separator: true; title?: string }
  | { separator?: false; label: string; path: string; highlight?: boolean; description?: string; icon?: 'sede' | 'mapa' | 'nueva' };

export const delegacionesSublinks: Record<'es' | 'en', Sublink[]> = {
  es: [
    { separator: true, title: 'Sede' },
    { label: 'iaS Madrid (Sede, España)', path: '/delegaciones/madrid', icon: 'sede', description: 'Donde nace iaS y desde donde se coordina la red.' },
    { separator: true, title: 'Delegaciones' },
    { label: 'iaS Valencia (España)', path: '/delegaciones/valencia', icon: 'mapa', description: 'Delegación local de iaS: eventos, programas y contacto.' },
    { separator: true },
    { label: 'Crear una delegación', path: '/delegaciones/crear-una-delegacion', highlight: true, icon: 'nueva', description: 'Lleva iaS a tu ciudad.' },
  ],
  en: [
    { separator: true, title: 'Headquarters' },
    { label: 'iaS Madrid (Headquarters, Spain)', path: '/delegaciones/madrid', icon: 'sede', description: 'Where iaS began and where the network is coordinated.' },
    { separator: true, title: 'Chapters' },
    { label: 'iaS Valencia (Spain)', path: '/delegaciones/valencia', icon: 'mapa', description: 'Local iaS chapter: events, programs and contact.' },
    { separator: true },
    { label: 'Start a chapter', path: '/delegaciones/crear-una-delegacion', highlight: true, icon: 'nueva', description: 'Bring iaS to your city.' },
  ],
};

export const crearDelegacionContent = {
  es: {
    eyebrow: 'Crear una delegación',
    titleDark: 'Lleva iaS',
    titleAccent: 'a tu ciudad',
    subtitle:
      'Crear una delegación local de iaS es una de las formas más efectivas de multiplicar el impacto de la seguridad de la IA en el mundo hispanohablante.',
    subtitleHighlight: 'Ponemos a tu disposición todo lo necesario para empezar.',
    imageAlt:
      'Ilustración de un grupo diverso de personas que comen, charlan y ríen alrededor de una mesa en una sala de reuniones.',
    aportesTitle: 'Lo que iaS aporta a las nuevas delegaciones',
    aportes: [
      'La marca iaS y su reconocimiento en la organización hispanohablante de seguridad de la IA',
      'Manuales operativos y guías de referencia',
      'Currículo del AGI Strategy Course en castellano y material de facilitación',
      'Infraestructura digital compartida',
      'Mentoría directa de organizadoras y organizadores con experiencia',
      'Plantillas de difusión y apoyo de comunicación',
      'Sin necesidad de constituir entidad legal propia',
      'Conexión con la red nacional',
    ],
    pasosTitle: 'Cómo empezar',
    pasos: [
      'Ponte en contacto con iaS expresando tu interés en montar una delegación',
      'El equipo de iaS te acompaña en el arranque de la delegación',
      'Te incorporamos al Discord de iaS',
      'Haz la difusión inicial en tu ciudad',
      'Organiza tu primer encuentro o evento',
      'Valora impartir el AGI Strategy Course en castellano',
    ],
    ctaLabel: 'Expresar interés',
  },
  en: {
    eyebrow: 'Start a chapter',
    titleDark: 'Bring iaS',
    titleAccent: 'to your city',
    subtitle:
      'Starting a local iaS chapter is one of the most effective ways to multiply the impact of AI safety across the Spanish-speaking world.',
    subtitleHighlight: 'We give you everything you need to get started.',
    imageAlt:
      'Illustration of a diverse group of people eating, chatting and laughing around a table in a meeting room.',
    aportesTitle: 'What iaS brings to new chapters',
    aportes: [
      'The iaS brand and its recognition in the Spanish-speaking AI safety organization',
      'Operating manuals and reference guides',
      'AGI Strategy Course curriculum in Spanish and facilitation material',
      'Shared digital infrastructure',
      'Direct mentorship from experienced organizers',
      'Outreach templates and communications support',
      'No need to set up your own legal entity',
      'Connection to the national network',
    ],
    pasosTitle: 'How to get started',
    pasos: [
      'Reach out to us expressing your interest in starting a chapter',
      'The iaS team supports you through the chapter launch',
      'We add you to the iaS Discord',
      'Do the initial outreach in your city',
      'Organize your first meetup or event',
      'Consider running the AGI Strategy Course in Spanish',
    ],
    ctaLabel: 'Express interest',
  },
} as const;

export const crearDelegacionMailto =
  'mailto:hola@aisafety.es?subject=Quiero%20crear%20una%20delegación%20de%20iaS&body=Hola%2C%0A%0AMe%20gustaría%20crear%20una%20delegación%20de%20iaS%20en%20mi%20ciudad.%0A%0ACiudad%3A%20%0ANombre%3A%20%0A%C2%BFC%C3%B3mo%20nos%20has%20conocido%3F%3A%20%0A%C2%BFPor%20qu%C3%A9%20quieres%20crear%20una%20delegaci%C3%B3n%3F%3A%20';

export const delegacionValenciaContent = {
  es: {
    eyebrow: 'Delegación de iaS · Valencia, España',
    titleDark: 'El punto de encuentro de la seguridad de la IA',
    titleAccent: 'en Valencia',
    imageAlt: 'Ilustración: una figura blanca escribe «Valencia» sobre un fondo naranja.',
    discordCtaLabel: 'Únete al Discord de iaS',
    formCtaLabel: 'Regístrate y contacta',
    newsletterCtaLabel: 'Boletín de iaS',
    anchorsAriaLabel: 'Secciones de la página',
    anchors: {
      eventos: 'Eventos',
      programas: 'Programas',
      sobreNosotros: 'Sobre nosotros',
      unete: 'Únete y contacto',
    },
    eventsTitle: 'Próximos eventos',
    eventsArchiveLabel: 'Ver archivo completo',
    eventsContactText: '¿Dudas sobre un evento? Escríbenos a',
    programsTitle: 'Programas',
    programsIntro: 'Formación y recursos de seguridad de la IA en español.',
    programCtaLabel: 'Más información',
    libraryTitle: 'Biblioteca abierta',
    aboutTitle: 'Sobre nosotros',
    aboutTeamLabel: 'Conoce al equipo',
    aboutMissionLabel: 'Qué hacemos',
    aboutHqText: 'iaS Valencia forma parte de la red de iaS, con sede en Madrid.',
    aboutHqLabel: 'Conoce la sede',
    joinTitle: 'Únete y contacto',
    joinIntro: 'Entra en la red de iaS, sigue nuestras novedades o escríbenos.',
    contactCardTitle: 'Escríbenos',
  },
  en: {
    eyebrow: 'iaS chapter · Valencia, Spain',
    titleDark: 'The meeting point for AI safety',
    titleAccent: 'in Valencia',
    imageAlt: 'Illustration: a white figure writes “Valencia” on an orange background.',
    discordCtaLabel: 'Join the iaS Discord',
    formCtaLabel: 'Sign up and get in touch',
    newsletterCtaLabel: 'iaS newsletter',
    anchorsAriaLabel: 'Page sections',
    anchors: {
      eventos: 'Events',
      programas: 'Programs',
      sobreNosotros: 'About us',
      unete: 'Join and contact',
    },
    eventsTitle: 'Upcoming events',
    eventsArchiveLabel: 'See the full archive',
    eventsContactText: 'Questions about an event? Write to us at',
    programsTitle: 'Programs',
    programsIntro: 'AI safety training and resources in Spanish.',
    programCtaLabel: 'Learn more',
    libraryTitle: 'Open library',
    aboutTitle: 'About us',
    aboutTeamLabel: 'Meet the team',
    aboutMissionLabel: 'What we do',
    aboutHqText: 'iaS Valencia is part of the iaS network, headquartered in Madrid.',
    aboutHqLabel: 'Visit the headquarters',
    joinTitle: 'Join and contact',
    joinIntro: 'Join the iaS network, follow our news or write to us.',
    contactCardTitle: 'Write to us',
  },
} as const;

// Página de la sede. Comparte estructura con la de Valencia y añade la red y el equipo,
// que solo tienen sentido en la sede.
export const delegacionMadridContent = {
  es: {
    eyebrow: 'Sede de iaS · Madrid, España',
    titleDark: 'Donde nace la red de iaS',
    titleAccent: 'en Madrid',
    intro:
      'Madrid es la sede de iaS: aquí trabaja el equipo, se coordinan los programas y se acompaña a cada nueva delegación.',
    imageAlt: 'Ilustración: una figura azul celebra haciendo el signo de la victoria junto al texto «Hola Madrid», un guiño al «Hello, world» de la programación.',
    discordCtaLabel: 'Únete al Discord de iaS',
    formCtaLabel: 'Regístrate y contacta',
    newsletterCtaLabel: 'Boletín de iaS',
    anchorsAriaLabel: 'Secciones de la página',
    anchors: {
      red: 'La red',
      eventos: 'Eventos',
      programas: 'Programas',
      equipo: 'Equipo',
      unete: 'Únete y contacto',
    },
    networkTitle: 'La red de iaS',
    networkIntro:
      'Desde Madrid coordinamos la red y damos a cada delegación la marca, los materiales y la mentoría que necesita para arrancar.',
    hqBadge: 'Sede',
    hqText: 'Equipo, programas y coordinación de la red.',
    chaptersTitle: 'Delegaciones',
    hubsTitle: 'Hubs con los que trabajamos estrechamente',
    eventsTitle: 'Próximos eventos',
    eventsText: 'Los encuentros de la sede se publican en la agenda de iaS en Luma.',
    eventsArchiveLabel: 'Ver la agenda en Luma',
    eventsContactText: '¿Dudas sobre un evento? Escríbenos a',
    galleryTitle: 'Así fue nuestro primer evento presencial',
    galleryMeta: 'iaS × BlueDot Impact · 28 de abril de 2026 · Celonis, Madrid',
    galleryLead: '70 personas en el primer evento presencial de iaS, organizado con BlueDot Impact.',
    galleryHighlights: [
      { label: 'Madrid + Barcelona', text: 'David Bravo Comas, de AI Safety Barcelona, habló de los riesgos de crear algo más inteligente que nosotros.' },
      { label: 'Ponente', text: 'Guillem Bas, del Observatorio de Riesgos Catastróficos Globales, repasó las señales tempranas de riesgo.' },
      { label: 'Sorteo', text: '«Si alguien la crea, todos moriremos», de Yudkowsky y Soares, cortesía de Editorial Destino (Grupo Planeta).' },
    ],
    galleryPhotos: {
      publico: 'El público en Celonis, durante la presentación del encuentro.',
      bluedot: 'Osmani Redondo, directora de iaS, presenta el encuentro, organizado con BlueDot Impact.',
      david: 'David Bravo Comas, de AI Safety Barcelona: «Cuidado con lo que deseas: los riesgos de crear algo más inteligente que nosotros».',
      guillem: 'Guillem Bas, del Observatorio de Riesgos Catastróficos Globales: «Riesgos en el radar: señales tempranas desde la evidencia».',
      sorteo: 'Sorteo de «Si alguien la crea, todos moriremos», de Eliezer Yudkowsky y Nate Soares, cortesía de Editorial Destino (Grupo Planeta).',
      grupo: 'Foto de grupo a la salida de Celonis, al terminar el encuentro.',
    },
    programsTitle: 'Programas',
    programsIntro:
      'Formación y recursos de seguridad de la IA en español. La primera cohorte del AGI Strategy Course es presencial, en Madrid.',
    programCtaLabel: 'Más información',
    libraryTitle: 'Biblioteca abierta',
    teamTitle: 'El equipo de la sede',
    teamCtaLabel: 'Conoce al equipo',
    aboutMissionLabel: 'Qué hacemos',
    joinTitle: 'Únete y contacto',
    joinIntro: 'Entra en la red de iaS, sigue nuestras novedades o escríbenos.',
    contactCardTitle: 'Escríbenos',
  },
  en: {
    eyebrow: 'iaS headquarters · Madrid, Spain',
    titleDark: 'Where the iaS network began',
    titleAccent: 'in Madrid',
    intro:
      'Madrid is the headquarters of iaS: this is where the team works, the programs are coordinated and every new chapter gets its support.',
    imageAlt: 'Illustration: a blue figure celebrates with victory signs next to the words “Hola Madrid”, a nod to programming’s “Hello, world”.',
    discordCtaLabel: 'Join the iaS Discord',
    formCtaLabel: 'Sign up and get in touch',
    newsletterCtaLabel: 'iaS newsletter',
    anchorsAriaLabel: 'Page sections',
    anchors: {
      red: 'The network',
      eventos: 'Events',
      programas: 'Programs',
      equipo: 'Team',
      unete: 'Join and contact',
    },
    networkTitle: 'The iaS network',
    networkIntro:
      'From Madrid we coordinate the network and give each chapter the brand, materials and mentorship it needs to get started.',
    hqBadge: 'Headquarters',
    hqText: 'Team, programs and network coordination.',
    chaptersTitle: 'Chapters',
    hubsTitle: 'Hubs we work closely with',
    eventsTitle: 'Upcoming events',
    eventsText: 'Headquarters events are published on the iaS calendar on Luma.',
    eventsArchiveLabel: 'See the calendar on Luma',
    eventsContactText: 'Questions about an event? Write to us at',
    galleryTitle: 'How our first in-person event went',
    galleryMeta: 'iaS × BlueDot Impact · 28 April 2026 · Celonis, Madrid',
    galleryLead: '70 people at the first in-person iaS event, co-hosted with BlueDot Impact.',
    galleryHighlights: [
      { label: 'Madrid + Barcelona', text: 'David Bravo Comas, from AI Safety Barcelona, spoke about the risks of creating something smarter than us.' },
      { label: 'Speaker', text: 'Guillem Bas, from the Observatorio de Riesgos Catastróficos Globales, reviewed the early warning signs of risk.' },
      { label: 'Raffle', text: '«Si alguien la crea, todos moriremos» (If Anyone Builds It, Everyone Dies), by Yudkowsky and Soares, courtesy of Editorial Destino (Grupo Planeta).' },
    ],
    galleryPhotos: {
      publico: 'The audience at Celonis during the opening of the event.',
      bluedot: 'Osmani Redondo, director of iaS, opens the event, co-hosted with BlueDot Impact.',
      david: 'David Bravo Comas, from AI Safety Barcelona: “Cuidado con lo que deseas” (Be careful what you wish for: the risks of creating something smarter than us).',
      guillem: 'Guillem Bas, from the Observatorio de Riesgos Catastróficos Globales: “Riesgos en el radar” (Risks on the radar: early signals from the evidence).',
      sorteo: 'Raffle of «Si alguien la crea, todos moriremos» (If Anyone Builds It, Everyone Dies), by Eliezer Yudkowsky and Nate Soares, courtesy of Editorial Destino (Grupo Planeta).',
      grupo: 'Group photo outside Celonis after the event.',
    },
    programsTitle: 'Programs',
    programsIntro:
      'AI safety training and resources in Spanish. The first cohort of the AGI Strategy Course is in person, in Madrid.',
    programCtaLabel: 'Learn more',
    libraryTitle: 'Open library',
    teamTitle: 'The headquarters team',
    teamCtaLabel: 'Meet the team',
    aboutMissionLabel: 'What we do',
    joinTitle: 'Join and contact',
    joinIntro: 'Join the iaS network, follow our news or write to us.',
    contactCardTitle: 'Write to us',
  },
} as const;

// Hubs con los que trabaja iaS (mismos enlaces que la portada). BAISH se sitúa en Buenos Aires, no en «Argentina».
export const hubsAliados = [
  { name: 'AI Safety México', place: { es: 'México', en: 'Mexico' }, href: 'https://www.aismx.org/' },
  { name: 'AI Safety Colombia', place: { es: 'Bogotá', en: 'Bogotá' }, href: 'https://aisafetycolombia.org/' },
  { name: 'BAISH', place: { es: 'Buenos Aires', en: 'Buenos Aires' }, href: 'https://www.baish.com.ar/es' },
] as const;

// Correo propio de la delegación de Valencia: es el único que aparece en su página (cuerpo y pie).
export const valenciaContactEmail = 'ias.valencia@aisafety.es';

// Correo propio de la sede de Madrid: es el único que aparece en su página (cuerpo y pie).
export const madridContactEmail = 'ias.madrid@aisafety.es';

export const discordInviteUrl = 'https://discord.gg/gm6v9Cwa58';

// Formulario de la red en Airtable. Cada página preselecciona su opción del campo «Sede o delegación»
// (desplegable: «Madrid», «Valencia»); el nombre del campo y la opción tienen que coincidir exactamente con Airtable.
const joinFormBaseUrl = 'https://airtable.com/appjg7pwM6YVmobZ6/pag9cKugiX3fC5pK0/form';
const joinFormUrlFor = (sedeODelegacion: string) =>
  `${joinFormBaseUrl}?prefill_${encodeURIComponent('Sede o delegación')}=${encodeURIComponent(sedeODelegacion)}`;

export const valenciaJoinFormUrl = joinFormUrlFor('Valencia');
export const madridJoinFormUrl = joinFormUrlFor('Madrid');

// Boletín de iaS (Substack). Mismo enlace que usan el pie y la portada del sitio.
export const substackUrl = 'https://seguridaddelaia.substack.com';

// Calendario de Luma propio de la delegación de Valencia, embebido en la página (?lt=light = tema claro).
export const valenciaLumaCalendarEmbedUrl = 'https://luma.com/embed/calendar/cal-F2GQeMRijaLsJDp/events?lt=light';

// Calendario general de iaS en Luma: el de Valencia solo existe como embed, sin página pública.
export const lumaAgendaUrl = 'https://luma.com/iaS-SeguridadelaIA';

export const linkedinUrl = 'https://www.linkedin.com/company/seguridad-de-la-ia/';
export const instagramUrl = 'https://www.instagram.com/seguridad_de_la_ia';
export const youtubeUrl = 'https://www.youtube.com/@seguridad-de-la-ia';

type FooterLink = { label: string; href: string; external?: boolean };

export type FooterColumns = Record<'es' | 'en', { title: string; links: FooterLink[] }[]>;

// Pie de las páginas de la red (sede y delegaciones). Solo cambia el correo de contacto de cada una.
// Las rutas internas (que empiezan por "/") reciben el prefijo de idioma al pintarlas.
const buildFooterColumns = (contactEmail: string): FooterColumns => ({
  es: [
    {
      title: 'Organización',
      links: [
        { label: 'Qué hacemos', href: '/que-hacemos' },
        { label: 'Equipo', href: '/equipo' },
      ],
    },
    {
      title: 'Red',
      links: delegacionesSublinks.es.flatMap((l) => (l.separator ? [] : [{ label: l.label, href: l.path }])),
    },
    {
      title: 'Conectar',
      links: [
        { label: 'Discord', href: discordInviteUrl, external: true },
        { label: 'Boletín en Substack', href: substackUrl, external: true },
        { label: 'Agenda en Luma', href: lumaAgendaUrl, external: true },
        { label: 'LinkedIn', href: linkedinUrl, external: true },
        { label: 'Instagram', href: instagramUrl, external: true },
        { label: 'YouTube', href: youtubeUrl, external: true },
        { label: contactEmail, href: `mailto:${contactEmail}`, external: true },
      ],
    },
    {
      title: 'Documentos',
      links: [
        { label: 'Misión', href: '/mision' },
        { label: 'Visión', href: '/vision' },
        { label: 'Teoría del Cambio', href: '/teoria-del-cambio' },
        { label: 'Biblioteca abierta', href: '/biblioteca-papers' },
      ],
    },
  ],
  en: [
    {
      title: 'Organization',
      links: [
        { label: 'What we do', href: '/que-hacemos' },
        { label: 'Team', href: '/equipo' },
      ],
    },
    {
      title: 'Network',
      links: delegacionesSublinks.en.flatMap((l) => (l.separator ? [] : [{ label: l.label, href: l.path }])),
    },
    {
      title: 'Connect',
      links: [
        { label: 'Discord', href: discordInviteUrl, external: true },
        { label: 'Newsletter on Substack', href: substackUrl, external: true },
        { label: 'Luma calendar', href: lumaAgendaUrl, external: true },
        { label: 'LinkedIn', href: linkedinUrl, external: true },
        { label: 'Instagram', href: instagramUrl, external: true },
        { label: 'YouTube', href: youtubeUrl, external: true },
        { label: contactEmail, href: `mailto:${contactEmail}`, external: true },
      ],
    },
    {
      title: 'Documents',
      links: [
        { label: 'Mission', href: '/mision' },
        { label: 'Vision', href: '/vision' },
        { label: 'Theory of Change', href: '/theory-of-change' },
        { label: 'Open library', href: '/biblioteca-papers' },
      ],
    },
  ],
});

export const valenciaFooterColumns = buildFooterColumns(valenciaContactEmail);
export const madridFooterColumns = buildFooterColumns(madridContactEmail);
