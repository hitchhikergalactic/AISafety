export interface Pilar {
  title: string;
  description: string;
}

export interface QueHacemosContent {
  es: {
    heroTitle: string;
    heroSubtitle: string;
    pillarsTitle: string;
    pillars: Pilar[];
    impactTitle: string;
    impactDescription: string;
    ctaTitle: string;
    ctaDescription: string;
    ctaButton: string;
  };
  en: {
    heroTitle: string;
    heroSubtitle: string;
    pillarsTitle: string;
    pillars: Pilar[];
    impactTitle: string;
    impactDescription: string;
    ctaTitle: string;
    ctaDescription: string;
    ctaButton: string;
  };
}

export const queHacemosContent: QueHacemosContent = {
  es: {
    heroTitle: "Qué hacemos",
    heroSubtitle: "Trabajamos para construir una comunidad de hispanohablantes comprometida con la seguridad de la inteligencia artificial. Nuestras iniciativas abarcan educación, investigación, eventos y colaboración con expertos globales.",
    pillarsTitle: "Nuestras principales iniciativas",
    pillars: [
      {
        title: "Educación y Recursos",
        description: "Generamos contenido accesible sobre IA Safety traducido al español. Ofrecemos guías, papers y recursos para personas en todos los niveles de expertise."
      },
      {
        title: "Eventos y Seminarios",
        description: "Organizamos meetups mensuales, seminarios especializados y conferencias con investigadores de primera línea en seguridad de IA."
      },
      {
        title: "Investigación Colaborativa",
        description: "Conectamos talentos hispanohablantes con oportunidades de investigación en IA Safety y gobernanza de sistemas de IA avanzada."
      },
      {
        title: "Comunidad Global",
        description: "Formamos parte de redes internacionales como Women4AIS, ampliando la representación hispanohablante en la conversación global de IA Safety."
      },
      {
        title: "Policy y Gobernanza",
        description: "Contribuimos a la formulación de políticas públicas y marcos de gobernanza adaptados al contexto hispanohablante."
      },
      {
        title: "Mentoría y Carrera",
        description: "Acompañamos a profesionales que desean orientar su carrera hacia la seguridad de la IA, conectándolos con mentores y oportunidades."
      }
    ],
    impactTitle: "Por qué importa",
    impactDescription: "La IA más poderosa de la historia se construye ahora. Los 636 millones de hispanohablantes merecemos estar en esa conversación. Sin voz propia, nuestros idiomas serán menos seguros, menos representados, menos considerados. Nuestra misión es cambiar eso.",
    ctaTitle: "Únete a la comunidad",
    ctaDescription: "Que seas investigador, estudiante, profesional o simplemente curioso sobre el futuro de la IA, aquí tienes un lugar.",
    ctaButton: "Contacta con nosotros"
  },
  en: {
    heroTitle: "What we do",
    heroSubtitle: "We work to build a community of Spanish speakers committed to the safety of artificial intelligence. Our initiatives span education, research, events, and collaboration with global experts.",
    pillarsTitle: "Our main initiatives",
    pillars: [
      {
        title: "Education and Resources",
        description: "We generate accessible content about AI Safety translated to Spanish. We offer guides, papers, and resources for people at all levels of expertise."
      },
      {
        title: "Events and Seminars",
        description: "We organize monthly meetups, specialized seminars, and conferences with leading researchers in AI Safety."
      },
      {
        title: "Collaborative Research",
        description: "We connect Spanish-speaking talent with research opportunities in AI Safety and governance of advanced AI systems."
      },
      {
        title: "Global Community",
        description: "We are part of international networks like Women4AIS, expanding Spanish-speaking representation in the global AI Safety conversation."
      },
      {
        title: "Policy and Governance",
        description: "We contribute to the formulation of public policies and governance frameworks adapted to the Spanish-speaking context."
      },
      {
        title: "Mentorship and Career",
        description: "We guide professionals who want to orient their careers towards AI Safety, connecting them with mentors and opportunities."
      }
    ],
    impactTitle: "Why it matters",
    impactDescription: "The most powerful AI systems in history are being built right now. The 636 million Spanish speakers deserve to be part of that conversation. Without our own voice, our languages will be less safe, less represented, less considered. Our mission is to change that.",
    ctaTitle: "Join the community",
    ctaDescription: "Whether you're a researcher, student, professional, or simply curious about the future of AI, you have a place here.",
    ctaButton: "Contact us"
  }
};
