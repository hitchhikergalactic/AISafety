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
  };
  en: {
    heroTitle: string;
    heroSubtitle: string;
    pillarsTitle: string;
    pillars: Pilar[];
    impactTitle: string;
    impactDescription: string;
  };
}

export const queHacemosContent: QueHacemosContent = {
  es: {
    heroTitle: "Qué hacemos",
    heroSubtitle: "**Talento y carreras**\nImpulsamos la especialización en IA Safety a través de seminarios, conferencias, círculos de análisis técnico y programas de formación avanzada. Eliminamos la barrera del idioma, democratizando el acceso a recursos y oportunidades críticas que, hasta ahora, solo estaban disponibles en inglés.\n\n**Evaluación e investigación**\nMapeamos la investigación existente y construimos alianzas institucionales para testar el comportamiento de los modelos actuales en español: sesgos, desinformación y fallos de seguridad. Producimos estudios orientados a la toma de decisiones para laboratorios, reguladores e investigadores.\n\n**Interfaz institucional**\nDesde España, colaboramos con universidades, reguladores y sociedad civil para comunicar los riesgos de la IA avanzada. Traducimos la evidencia técnica global a un lenguaje comprensible y trabajamos para que la voz del mundo hispanohablante influya en los debates internacionales de gobernanza.",
    pillarsTitle: "Nuestras líneas de acción",
    pillars: [
      {
        title: "Formar",
        description: "Seminarios, grupos de lectura y programas estructurados para desarrollar las competencias que el campo de IA Safety necesita, en español"
      },
      {
        title: "Conectar",
        description: "Parte del ecosistema global de IA Safety. Colaboramos con BlueDot Impact y la red internacional de hubs locales."
      },
      {
        title: "Gobernanza",
        description: "Trabajamos con universidades, reguladores y sociedad civil para que el mundo hispanohablante influya en los debates internacionales sobre gobernanza de IA"
      }
    ],
    impactTitle: "Hacia dónde vamos",
    impactDescription: "IAS construye el nodo de evidencia e incidencia que el español necesita:\n**Evidencia aplicada:** benchmarks de modelos y campañas de red-teaming para documentar fallos de seguridad específicos de nuestra lengua y cultura.\n**Política y gobernanza:** formamos el talento hispanohablante que el campo de AI Safety necesita y trabajamos para que el mundo hispanohablante tenga voz en las decisiones que van a determinar la trayectoria de la IA avanzada.\n**Talento técnico:** impulsamos a más hispanohablantes hacia roles de seguridad, alineamiento y política pública a nivel global.",
  
  },
  en: {
    heroTitle: "What we do",
    heroSubtitle: "Train, connect, and work on governance. We foster the skills that the AI Safety field demands, integrating the Spanish-speaking world into the global ecosystem by collaborating with universities, regulators, and international networks like BlueDot Impact.",
    pillarsTitle: "Our lines of action",
    pillars: [
      {
        title: "Talent and Careers",
        description: "We drive specialization in AI Safety through seminars, conferences, technical analysis circles, and advanced training programs. We break down the language barrier, democratizing access to critical resources and opportunities that, until now, were only available in English."
      },
      {
        title: "Evaluation and Research",
        description: "We map existing research and build institutional alliances to test the behavior of current models in Spanish regarding biases, misinformation, and safety failures. We produce decision-oriented studies for labs, regulators, and researchers."
      },
      {
        title: "Institutional Interface",
        description: "Based in Spain, we collaborate with universities, regulators, and civil society to communicate the risks of advanced AI. We translate global technical evidence into accessible language and work to ensure the voice of the Spanish-speaking world influences international governance debates."
      }
    ],
    impactTitle: "Where we are heading (Vision)",
    impactDescription: "IAS is building the evidence and advocacy hub that the Spanish language needs through three key pillars: 1) Applied evidence via model benchmarks and red-teaming campaigns to document safety flaws specific to our language and culture. 2) Policy and governance to ensure the Spanish-speaking world has a voice in the decisions shaping the trajectory of advanced AI. 3) Technical talent by guiding more Spanish speakers into safety, alignment, and public policy roles globally.",
  }
};