export const delegacionesNavLabel = {
  es: 'Delegaciones',
  en: 'Chapters',
} as const;

type Sublink = { separator: true } | { separator?: false; label: string; path: string };

export const delegacionesSublinks: Record<'es' | 'en', Sublink[]> = {
  es: [
    { label: 'iaS Valencia (España)', path: '/delegaciones/valencia' },
    { separator: true },
    { label: 'Crear una delegación', path: '/delegaciones/crear-una-delegacion' },
  ],
  en: [
    { label: 'iaS Valencia (Spain)', path: '/delegaciones/valencia' },
    { separator: true },
    { label: 'Start a chapter', path: '/delegaciones/crear-una-delegacion' },
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
    eventsTitle: 'Próximos eventos',
  },
  en: {
    breadcrumbCurrent: 'Valencia',
    title: 'iaS Valencia (Spain)',
    subtitle: 'The meeting point for AI safety in Valencia.',
    discordCtaLabel: 'Join the iaS Discord',
    formCtaLabel: 'Sign up and get in touch',
    eventsTitle: 'Upcoming events',
  },
} as const;

export const discordInviteUrl = 'https://discord.com/invite/gm6v9Cwa58';

export const valenciaJoinFormUrl =
  'https://airtable.com/appjg7pwM6YVmobZ6/pag9cKugiX3fC5pK0/form?prefill_City=Valencia';

// Calendario de Luma propio de la delegación de Valencia, embebido en la página.
export const valenciaLumaCalendarEmbedUrl = 'https://luma.com/embed/calendar/cal-F2GQeMRijaLsJDp/events';
