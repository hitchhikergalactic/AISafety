import osmaniImg from '@assets/osmani.jpeg';
import luciaImg from '@assets/equipo/lucia-kubusch.webp';
import arantxaImg from '@assets/equipo/arantxa-amezua.webp';
import andresImg from '@assets/equipo/andres-casas.webp';
import gretelImg from '@assets/equipo/gretel-schaj.webp';
import francaImg from '@assets/equipo/franca-velasco.webp';
import eduardoImg from '@assets/equipo/eduardo-mignot.webp';

export interface EquipoContent {
  es: {
    heroTitle: string;
    heroSubtitle: string;
    coordinacionTitle: string;
    governance: string;
    voluntariadoTitle: string;
    joinTitle: string;      
    joinSubtitle: string;   
    joinContribute: string;
    boton: string;
    linkBoton: string;
  };
  en: {
    heroTitle: string;
    heroSubtitle: string;
    coordinacionTitle: string;
    governance: string;
    voluntariadoTitle: string;
    joinTitle: string;      
    joinSubtitle: string;  
    joinContribute: string;
    boton: string;
    linkBoton: string;
  };
}

export const equipoContent: EquipoContent = {
  es: {
    heroTitle: "Equipo",
    heroSubtitle: "Al frente de **iaS** está **Osmani Redondo**, quien ha pasado la última década desarrollando teorías del cambio, estrategias de impacto, marcos de comunicación, construcción de coaliciones y sistemas de gestión, primero en la práctica clínica de la odontología, después en la gestión cultural, luego en Telefónica Tech, tras reconvertirse al desarrollo de software y obtener la certificación profesional de arquitectura cloud para trabajar con AWS y GCP, y hoy en la seguridad de la IA, en **iaS** y en los únicos seminarios de **BlueDot Impact** en habla hispana, que dirige. Es miembro de **OdiseIA**, el Observatorio del Impacto Social y Ético de la IA reconocido por la UNESCO, y de la **Red de Mentores de Madrid Emprende**, y ha formado parte del jurado del **Global South AI Safety Hackathon** de **Apart Research**.",
    coordinacionTitle: "Coordinación",
    governance: "Las decisiones estratégicas de iaS las toma el equipo de coordinación, formado por quien dirige iaS y las personas responsables de cada área. En cada ciudad, las delegaciones, como iaS Valencia, y los grupos que forman parte de iaS, como AI Safety Barcelona, organizan sus propios eventos, programas y red local dentro del marco común de iaS.",
    voluntariadoTitle: "Voluntariado",
    joinTitle: "¿Quieres construir el futuro de la seguridad de la IA en español?",
    joinSubtitle: "**iaS** lleva funcionando solo unos meses, y ya sostiene los únicos seminarios de BlueDot Impact en habla hispana, la puerta de entrada a un campo que en español está casi entero por construir; unirte ahora es levantar esa infraestructura desde la base, no encajar en una ya terminada.",
    joinContribute: "• Si te interesa la **investigación**, puedes comprobar si una evaluación de riesgo de un modelo funciona igual en español que en inglés.\n• Si te interesa lo **institucional**, puedes sentar las bases de un acuerdo con una universidad o un organismo regulador que todavía no sabe cuánto importa la seguridad de la IA en español.\n• Si te interesa la **comunicación**, puedes poner en marcha y moderar los grupos de iaS en Signal y WhatsApp, y animar el Discord, para que quien llega encuentre conversación y respuestas en su idioma.",
    boton: "Únete al voluntariado",
    linkBoton: "https://airtable.com/appjg7pwM6YVmobZ6/pagwSR5eXQrXJoz4e/form"
  },
  en: {
    heroTitle: "Team",
    heroSubtitle: "Leading **iaS** is **Osmani Redondo**, who has spent the last decade developing theories of change, impact strategies, communication frameworks, coalition building and management systems, first in clinical dental practice, then in cultural management, then at Telefónica Tech, after retraining as a software developer and becoming a certified professional cloud architect working with AWS and GCP, and today in AI safety, at **iaS** and in the only **BlueDot Impact** seminars in Spanish, which Osmani directs. Osmani is a member of **OdiseIA**, the UNESCO-recognised Observatory for the Social and Ethical Impact of AI, and of the **Madrid Emprende Mentor Network**, and has served on the judging panel of the **Global South AI Safety Hackathon** by **Apart Research**.",
    coordinacionTitle: "Coordination",
    governance: "iaS's strategic decisions are made by its coordination team, made up of the director and the lead of each area. In each city, chapters such as iaS Valencia and groups that are part of iaS such as AI Safety Barcelona run their own events, programmes and local network within the shared iaS framework.",
    voluntariadoTitle: "Volunteers",
    joinTitle: "Do you want to build the future of AI safety in Spanish?",
    joinSubtitle: "**iaS** has only been running for a few months, and it already sustains BlueDot Impact's only Spanish-speaking seminars, the entry point to a field that is almost entirely unbuilt in Spanish; joining now means building that infrastructure from the ground up, not fitting into one that's already finished.",
    joinContribute: "• If you're interested in **research**, you can check whether a model's risk evaluation works the same in Spanish as it does in English.\n• If you're interested in **institutional** work, you can lay the groundwork for an agreement with a university or a regulator that doesn't yet know how much AI safety in Spanish matters.\n• If you're interested in **communication**, you can set up and moderate iaS's Signal and WhatsApp groups and keep the Discord lively, so that whoever arrives finds conversation and answers in their own language.",
    boton: "Volunteer with us",
    linkBoton: "https://airtable.com/appjg7pwM6YVmobZ6/pagwSR5eXQrXJoz4e/form"
  }
};

// Personas que aparecen en /equipo. Para añadir a alguien basta con una entrada nueva;
// `grupo: 'direccion'` se muestra arriba, junto a la biografía; el resto, en la cuadrícula.
// `grupo: 'voluntariado'` se muestra debajo de coordinación, con su propio título, solo si hay alguien.
// `grupo` permite sumar más adelante asesores (con su `area`) o delegaciones sin tocar el componente.
// La foto se importa desde src/assets/equipo (cuadrada); si falta, la ficha muestra las iniciales.

export type GrupoEquipo = 'direccion' | 'coordinacion' | 'voluntariado' | 'asesores' | 'delegaciones';

export interface MiembroEquipo {
  nombre: string;
  cargo: { es: string; en: string };
  linkedin: string;
  web?: string;
  foto?: ImageMetadata;
  grupo: GrupoEquipo;
  area?: { es: string; en: string };
}

export const miembrosEquipo: MiembroEquipo[] = [
  {
    nombre: 'Osmani Redondo',
    cargo: { es: 'Dirige iaS', en: 'Director of iaS' },
    linkedin: 'https://www.linkedin.com/in/osmani/',
    foto: osmaniImg,
    grupo: 'direccion',
  },
  {
    nombre: 'Lucía Kubusch',
    cargo: { es: 'Legal y Gobernanza de IA', en: 'Legal & AI Governance' },
    linkedin: 'https://www.linkedin.com/in/lucia-kubusch/',
    foto: luciaImg,
    grupo: 'coordinacion',
  },
  {
    nombre: 'Arantxa Amezua',
    cargo: { es: 'Operaciones', en: 'Operations' },
    linkedin: 'https://www.linkedin.com/in/arantxa-amezua-809137162/',
    foto: arantxaImg,
    grupo: 'coordinacion',
  },
  {
    nombre: 'Andrés Casas',
    cargo: { es: 'Voluntario', en: 'Volunteer' },
    linkedin: 'https://www.linkedin.com/in/andrescasass/',
    foto: andresImg,
    grupo: 'voluntariado',
  },
  {
    nombre: 'Gretel Schaj',
    cargo: { es: 'Proyectos Especiales', en: 'Special Projects' },
    linkedin: 'https://www.linkedin.com/in/gretel-schaj/',
    foto: gretelImg,
    grupo: 'coordinacion',
  },
  {
    nombre: 'Eduardo Mignot',
    cargo: { es: 'Comunicación', en: 'Communications' },
    linkedin: 'https://www.linkedin.com/in/eduardomignot/',
    foto: eduardoImg,
    grupo: 'coordinacion',
  },
  {
    nombre: 'Franca Velasco',
    cargo: { es: 'Redacción y Edición', en: 'Copywriting & Editing' },
    linkedin: 'https://www.linkedin.com/in/francavelasco/',
    web: 'https://francavelasco.es/',
    foto: francaImg,
    grupo: 'coordinacion',
  },
];
