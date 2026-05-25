export interface QueHacemosContent {
  es: {
    heroTitle: string;
    heroSubtitle: string;
    impactTitle: string;
    impactDescription: string;
  };
  en: {
    heroTitle: string;
    heroSubtitle: string;
    impactTitle: string;
    impactDescription: string;
  };
}

export const queHacemosContent: QueHacemosContent = {
  es: {
    heroTitle: "Qué hacemos",
    heroSubtitle:"**Talento y carreras**\nImpulsamos la especialización en IA safety a través de seminarios, conferencias, círculos de análisis técnico y programas de formación. Eliminamos la barrera del idioma, democratizando el acceso a recursos y oportunidades críticas que, hasta ahora, solo estaban disponibles en inglés.\n**Evaluación e investigación**\nMapeamos la investigación existente y construimos alianzas institucionales para testar el comportamiento de los modelos actuales en español: sesgos, desinformación y fallos de seguridad. Producimos estudios orientados a la toma de decisiones para laboratorios, reguladores e investigadores.\n**Interfaz institucional**\nDesde España, colaboramos con universidades, equipos de investigación y sociedad civil para comunicar los riesgos de la inteligencia artificial avanzada. Traducimos la evidencia técnica global a un lenguaje comprensible y trabajamos para que la voz del mundo hispanohablante influya en los debates internacionales de gobernanza.",
    impactTitle: "Hacia dónde vamos",
    impactDescription: "**iaS** construye el nodo de evidencia e incidencia que el español necesita:\n\t**∙ Evidencia aplicada:** *benchmarks* de modelos y campañas de *red-teaming* para documentar fallos de seguridad específicos de nuestra lengua y cultura.\n\t**∙ Política y gobernanza: **formamos el talento hispanohablante que el campo de AI Safety necesita y trabajamos para que el mundo hispanohablante tenga voz en las decisiones que van a determinar la trayectoria de la IA avanzada.\n\t**∙ Talento técnico: **impulsamos a más hispanohablantes hacia roles de seguridad, alineamiento y política pública a nivel global.",
  },
  en: {
    heroTitle: "What we do",
    heroSubtitle: "Train, connect, and work on governance. We foster the skills that the AI Safety field demands, integrating the Spanish-speaking world into the global ecosystem by collaborating with universities, regulators, and international networks like BlueDot Impact.",
    impactTitle: "Where we are heading (Vision)",
    impactDescription: "IAS is building the evidence and advocacy hub that the Spanish language needs through three key pillars: 1) Applied evidence via model benchmarks and red-teaming campaigns to document safety flaws specific to our language and culture. 2) Policy and governance to ensure the Spanish-speaking world has a voice in the decisions shaping the trajectory of advanced AI. 3) Technical talent by guiding more Spanish speakers into safety, alignment, and public policy roles globally.",
  }
};