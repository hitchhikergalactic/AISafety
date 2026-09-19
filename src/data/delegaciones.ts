export const delegacionesNavLabel = {
  es: '/Delegaciones',
  en: '/Chapters',
} as const;

type Sublink = { separator: true } | { separator?: false; label: string; path: string; highlight?: boolean };

export const delegacionesSublinks: Record<'es' | 'en', Sublink[]> = {
  es: [
    { label: 'iaS Valencia (España)', path: '/delegaciones/valencia' },
    { separator: true },
    { label: 'Crear una delegación', path: '/delegaciones/crear-una-delegacion', highlight: true },
  ],
  en: [
    { label: 'iaS Valencia (Spain)', path: '/delegaciones/valencia' },
    { separator: true },
    { label: 'Start a chapter', path: '/delegaciones/crear-una-delegacion', highlight: true },
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
    breadcrumbCurrent: 'Valencia',
    title: 'iaS Valencia (España)',
    subtitle: 'El punto de encuentro de la seguridad de la IA en Valencia.',
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
    joinTitle: 'Únete y contacto',
    joinIntro: 'Entra en la red de iaS, sigue nuestras novedades o escríbenos.',
    contactCardTitle: 'Escríbenos',
    contactCardText: 'Preguntas, propuestas o colaboraciones.',
  },
  en: {
    breadcrumbCurrent: 'Valencia',
    title: 'iaS Valencia (Spain)',
    subtitle: 'The meeting point for AI safety in Valencia.',
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
    joinTitle: 'Join and contact',
    joinIntro: 'Join the iaS network, follow our news or write to us.',
    contactCardTitle: 'Write to us',
    contactCardText: 'Questions, proposals or collaborations.',
  },
} as const;

export const contactEmail = 'hola@aisafety.es';

export const discordInviteUrl = 'https://discord.gg/gm6v9Cwa58';

export const valenciaJoinFormUrl =
  'https://airtable.com/appjg7pwM6YVmobZ6/pag9cKugiX3fC5pK0/form?prefill_City=Valencia';

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

// Pie de la página de Valencia. Las rutas internas (que empiezan por "/") reciben el prefijo de idioma al pintarlas.
export const valenciaFooterColumns: Record<
  'es' | 'en',
  { title: string; links: FooterLink[] }[]
> = {
  es: [
    {
      title: 'Organización',
      links: [
        { label: 'Qué hacemos', href: '/que-hacemos' },
        { label: 'Equipo', href: '/equipo' },
      ],
    },
    {
      title: 'Nodos',
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
      links: [{ label: 'Biblioteca abierta', href: '/biblioteca-papers' }],
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
      title: 'Chapters',
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
      links: [{ label: 'Open library', href: '/biblioteca-papers' }],
    },
  ],
};
