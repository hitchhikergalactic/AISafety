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
      'Montar una delegación local de iaS es una de las formas más efectivas de multiplicar el impacto de la seguridad de la IA en el mundo hispanohablante. Ponemos a tu disposición todo lo necesario para empezar.',
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
      'Starting a local iaS chapter is one of the most effective ways to multiply the impact of AI safety across the Spanish-speaking world. We give you everything you need to get started.',
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

export const crearDelegacionFormUrl = 'https://airtable.com/PENDIENTE-sustituir-por-formulario-real';

export const delegacionValenciaContent = {
  es: {
    title: 'iaS Valencia (España)',
    ctaLabel: 'Únete al Discord de iaS',
  },
  en: {
    title: 'iaS Valencia (Spain)',
    ctaLabel: 'Join the iaS Discord',
  },
} as const;

export const discordInviteUrl = 'https://discord.com/invite/gm6v9Cwa58';
