export interface Expositor {
  id: string; // slug para URL: nombre-apellido
  nombre: string;
  apellido: string;
  tituloEs: string; // Título/puesto en Español
  tituloEn: string; // Título/puesto en Inglés
  descripcionEs: string;
  descripcionEn: string;
  imagen: string;
  bioEs: string;
  bioEn: string;
  linkedin: string;
  email: string;
  web: string;
}

export interface Charla {
  tagEs: string;
  tagEn: string;
  id: string; // slug: nombre-charla
  tituloEs: string;
  tituloEn: string;
  descripcionEs: string; // Contenido largo ES
  descripcionEn: string; // Contenido largo EN
  descripcionCortaEs: string; // Versión corta para tarjetas ES
  descripcionCortaEn: string; // Versión corta para tarjetas EN
  imagen: string; // URL de imagen para la tarjeta
  expositor: Expositor;
  fecha: string;
  tags: string[]; // Si los tags son palabras clave fijas, podés traducirlos en el componente o duplicarlos
  presentacion: string; // URL de las diapositivas / PDF
}

// EJEMPLO DE CÓMO LLENAR LOS DATOS:
export const listaDeCharlas: Charla[] = [
  {
    id: "introduccion-ai-safety",
    tagEs: "Fundamentos",
    tagEn: "Fundamentals",
    tituloEs: "INTRODUCCIÓN A AI SAFETY",
    tituloEn: "INTRODUCTION TO AI SAFETY",
    descripcionCortaEs: "Una visión general de los principales desafíos en la seguridad de la inteligencia artificial.",
    descripcionCortaEn: "An overview of the main challenges in artificial intelligence security.",
    descripcionEs: "En esta charla exploraremos los fundamentos de AI Safety, incluyendo alineación de valores, control de sistemas complejos y gobernanza de IA. Perfecto para principiantes.",
    descripcionEn: "In this talk we will explore the fundamentals of AI Safety, including value alignment, control of complex systems, and AI governance. Perfect for beginners.",
    imagen: "https://i.imgur.com/wqT4oET.png",
    fecha: "2026-05-20",
    tags: ["AI Safety", "Principiantes"],
    presentacion: "https://example.com/slides",
    expositor: {
      id: "juan-perez",
      nombre: "Juan",
      apellido: "Pérez",
      tituloEs: "Researcher en AI Safety",
      tituloEn: "AI Safety Researcher",
      descripcionEs: "Especialista en alineación de modelos de lenguaje con +5 años de experiencia.",
      descripcionEn: "Specialist in language model alignment with +5 years of experience.",
      bioEs: "Juan es investigador con amplia experiencia en AI Safety, enfocado en técnicas de alineación y control de sistemas.",
      bioEn: "Juan is a researcher with extensive experience in AI Safety, focused on alignment techniques and system control.",
      imagen: "https://i.imgur.com/rodrigo.jpg",
      linkedin: "https://linkedin.com/in/juan-perez",
      email: "juan@aisafety.com",
      web: "https://juan.aisafety.com"
    }
  },
  {
    id: "gobernanza-ia-sistemas-complejos",
    tagEs: "Gobernanza",
    tagEn: "Governance",
    tituloEs: "GOBERNANZA DE IA Y SISTEMAS COMPLEJOS",
    tituloEn: "AI GOVERNANCE AND COMPLEX SYSTEMS",
    descripcionCortaEs: "Estrategias para asegurar el control de sistemas de IA avanzados mediante marcos regulatorios.",
    descripcionCortaEn: "Strategies to ensure control of advanced AI systems through regulatory frameworks.",
    descripcionEs: "Exploraremos marcos de gobernanza, políticas públicas y mejores prácticas para controlar sistemas de IA complejos. Incluye casos de estudio reales.",
    descripcionEn: "We will explore governance frameworks, public policies and best practices for controlling complex AI systems. Includes real case studies.",
    imagen: "https://i.imgur.com/vF4Dz3Z.jpeg",
    fecha: "2026-05-27",
    tags: ["Gobernanza", "Políticas"],
    presentacion: "https://example.com/slides",
    expositor: {
      id: "maria-garcia",
      nombre: "María",
      apellido: "García",
      tituloEs: "Policy Expert en AI Governance",
      tituloEn: "AI Governance Policy Expert",
      descripcionEs: "Experta en políticas y marcos regulatorios de inteligencia artificial a nivel europeo.",
      descripcionEn: "Expert in artificial intelligence policies and regulatory frameworks at European level.",
      bioEs: "María trabaja en políticas de IA con organismos internacionales y gobiernos europeos.",
      bioEn: "María works on AI policies with international organizations and European governments.",
      imagen: "https://i.imgur.com/rodrigo.jpg",
      linkedin: "https://linkedin.com/in/maria-garcia",
      email: "maria@aisafety.com",
      web: "https://maria.aisafety.com"
    }
  },
  {
    id: "alineacion-valores-modelos-lenguaje",
    tagEs: "Investigación",
    tagEn: "Research",
    tituloEs: "ALINEACIÓN DE VALORES EN MODELOS DE LENGUAJE",
    tituloEn: "VALUE ALIGNMENT IN LANGUAGE MODELS",
    descripcionCortaEs: "Técnicas avanzadas para alinear los objetivos de los modelos de IA con valores humanos.",
    descripcionCortaEn: "Advanced techniques for aligning AI model objectives with human values.",
    descripcionEs: "Esta charla profundiza en metodologías técnicas para lograr alineación de valores, incluyendo RLHF, Constitutional AI y otros enfoques innovadores.",
    descripcionEn: "This talk delves into technical methodologies for achieving value alignment, including RLHF, Constitutional AI and other innovative approaches.",
    imagen: "https://i.imgur.com/wqT4oET.png",
    fecha: "2026-06-03",
    tags: ["Alineación", "Técnica"],
    presentacion: "https://example.com/slides",
    expositor: {
      id: "carlos-lopez",
      nombre: "Carlos",
      apellido: "López",
      tituloEs: "ML Engineer en AI Alignment",
      tituloEn: "ML Engineer in AI Alignment",
      descripcionEs: "Ingeniero de machine learning especializado en técnicas de alineación y seguridad.",
      descripcionEn: "Machine learning engineer specialized in alignment and safety techniques.",
      bioEs: "Carlos tiene experiencia implementando sistemas de alineación en modelos de lenguaje de gran escala.",
      bioEn: "Carlos has experience implementing alignment systems in large-scale language models.",
      imagen: "https://i.imgur.com/rodrigo.jpg",
      linkedin: "https://linkedin.com/in/carlos-lopez",
      email: "carlos@aisafety.com",
      web: "https://carlos.aisafety.com"
    }
  }
];