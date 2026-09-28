// Página "Cookies" (cabecera y SEO) y avisos de los contenidos de terceros que se cargan al pulsar (EmbedAlPulsar).
// El cuerpo de la política está en src/content/cookies/{es,en}.md: si cambia lo que se carga de terceros, hay que
// actualizar a la vez esos textos y los avisos de aquí.
export const cookiesContent = {
  es: {
    seoTitle: 'Política de cookies | iaS',
    breadcrumbParent: 'Inicio',
    breadcrumbParentHref: '/',
    breadcrumbCurrent: 'Cookies',
    eyebrow: 'Información legal',
    title: 'Política de cookies',
    subtitle: 'Qué guarda este sitio en tu dispositivo, qué contenidos de terceros se cargan y cómo decides tú.',
  },
  en: {
    seoTitle: 'Cookie policy | iaS',
    breadcrumbParent: 'Home',
    breadcrumbParentHref: '/',
    breadcrumbCurrent: 'Cookies',
    eyebrow: 'Legal information',
    title: 'Cookie policy',
    subtitle: 'What this site stores on your device, which third-party content it loads and how you decide.',
  },
} as const;

export const embedsAlPulsar = {
  youtube: {
    es: {
      boton: 'Reproducir vídeo de YouTube',
      miniaturaAlt: 'Miniatura del vídeo de YouTube',
      aviso: 'Al reproducir el vídeo, se carga desde YouTube (Google), que guarda datos en tu dispositivo.',
    },
    en: {
      boton: 'Play YouTube video',
      miniaturaAlt: 'YouTube video thumbnail',
      aviso: 'Playing the video loads it from YouTube (Google), which stores data on your device.',
    },
  },
  luma: {
    es: {
      boton: 'Mostrar calendario',
      miniaturaAlt: '',
      aviso: 'Al mostrar el calendario, se carga desde Luma, que guarda cookies en tu dispositivo.',
    },
    en: {
      boton: 'Show calendar',
      miniaturaAlt: '',
      aviso: 'Showing the calendar loads it from Luma, which stores cookies on your device.',
    },
  },
  masInfo: { es: 'Más información', en: 'More information' },
} as const;
