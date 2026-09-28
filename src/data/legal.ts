// Páginas "Política de privacidad" y "Aviso legal" (cabecera y SEO). El cuerpo está en
// src/content/privacidad/{es,en}.md y src/content/aviso-legal/{es,en}.md. `subtitle` es también la meta description.
export const privacidadContent = {
  es: {
    seoTitle: 'Política de privacidad | iaS',
    breadcrumbParent: 'Inicio',
    breadcrumbParentHref: '/',
    breadcrumbCurrent: 'Privacidad',
    eyebrow: 'Información legal',
    title: 'Política de privacidad',
    subtitle: 'Qué datos personales recoge aisafety.es, para qué los usamos, con quién los compartimos y cómo ejercer tus derechos.',
  },
  en: {
    seoTitle: 'Privacy policy | iaS',
    breadcrumbParent: 'Home',
    breadcrumbParentHref: '/',
    breadcrumbCurrent: 'Privacy',
    eyebrow: 'Legal information',
    title: 'Privacy policy',
    subtitle: 'What personal data aisafety.es collects, what we use it for, who we share it with and how to exercise your rights.',
  },
} as const;

export const avisoLegalContent = {
  es: {
    seoTitle: 'Aviso legal | iaS',
    breadcrumbParent: 'Inicio',
    breadcrumbParentHref: '/',
    breadcrumbCurrent: 'Aviso legal',
    eyebrow: 'Información legal',
    title: 'Aviso legal',
    subtitle: 'Quién está detrás de aisafety.es y en qué condiciones puedes usar este sitio.',
  },
  en: {
    seoTitle: 'Legal notice | iaS',
    breadcrumbParent: 'Home',
    breadcrumbParentHref: '/',
    breadcrumbCurrent: 'Legal notice',
    eyebrow: 'Legal information',
    title: 'Legal notice',
    subtitle: 'Who is behind aisafety.es and the terms on which you can use this site.',
  },
} as const;
