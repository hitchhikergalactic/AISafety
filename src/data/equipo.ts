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
    heroSubtitle: "Al frente de **iaS** está **Osmani Redondo**, quien ha pasado la última década desarrollando teorías del cambio, estrategias de impacto, marcos de comunicación, construcción de coaliciones y sistemas de gestión, primero en la práctica clínica de la odontología, después en la gestión cultural, luego en la arquitectura cloud, tras reconvertirse al desarrollo de software y obtener la certificación profesional de arquitectura cloud para trabajar con AWS y GCP en Telefónica Tech, y hoy en la seguridad de la IA, en **iaS** y en los únicos seminarios de **BlueDot Impact** en habla hispana, que dirige. Es miembro de **OdiseIA**, el Observatorio del Impacto Social y Ético de la IA reconocido por la UNESCO, y de la **Red de Mentores de Madrid Emprende**, y ha formado parte del jurado del **Global South AI Safety Hackathon** de **Apart Research**.",
    coordinacionTitle: "Coordinación",
    governance: "Las decisiones estratégicas de iaS las toma el equipo de coordinación, formado por quien dirige iaS y las personas responsables de cada área. En cada ciudad, las delegaciones, como iaS Valencia, y los grupos que forman parte de iaS, como AI Safety Barcelona, organizan sus propios eventos, programas y red local dentro del marco común de iaS.",
    voluntariadoTitle: "Voluntariado",
    joinTitle: "¿Quieres construir el futuro de la seguridad de la IA en español?",
    joinSubtitle: "**iaS** lleva funcionando solo unos meses, y ya sostiene los únicos seminarios de BlueDot Impact en habla hispana, la puerta de entrada a un campo que en español está casi entero por construir; unirte ahora es levantar esa infraestructura desde la base, no encajar en una ya terminada.",
    joinContribute: "• Si te interesa la **investigación**, puedes comprobar si una evaluación de riesgo de un modelo funciona igual en español que en inglés.\n• Si te interesa lo **institucional**, puedes sentar las bases de un acuerdo con una universidad o un organismo regulador que todavía no sabe cuánto importa la seguridad de la IA en español.\n• Si te interesa la **comunicación**, puedes poner en marcha y moderar los grupos de iaS en Signal y WhatsApp, y animar el Discord, para que quien llega encuentre conversación y respuestas en su idioma.",
    boton: "Escríbenos",
    linkBoton: "mailto:hola@aisafety.es?subject=Me%20quiero%20unir%20a%20iaS%21&body=%C2%A1Hola%21%0A%0AiaS%20es%20el%20primer%20hub%20en%20espa%C3%B1ol%20dedicado%20a%20la%20seguridad%20de%20la%20IA.%20Buscamos%20personas%20para%20varias%20%C3%A1reas%20a%20la%20vez%2C%20cada%20una%20resuelve%20algo%20distinto%20que%20hoy%20nos%20falta%3A%0A%0A-%20Moderaci%C3%B3n%20de%20grupos%3A%20poner%20en%20marcha%20y%20moderar%20los%20grupos%20de%20iaS%20en%20Signal%20y%20WhatsApp%2C%20y%20animar%20el%20Discord%2C%20para%20que%20quien%20llega%20encuentre%20conversaci%C3%B3n%20en%20su%20idioma.%0A-%20Investigaci%C3%B3n%3A%20evaluar%20si%20lo%20que%20sabemos%20sobre%20riesgos%20de%20modelos%20se%20sostiene%20igual%20en%20espa%C3%B1ol%20que%20en%20ingl%C3%A9s.%0A-%20Relaciones%20institucionales%3A%20abrir%20la%20conversaci%C3%B3n%20con%20universidades%20u%20organismos%20que%20todav%C3%ADa%20no%20saben%20cu%C3%A1nto%20importa%20esto%20en%20espa%C3%B1ol.%0A-%20Redes%20sociales%20y%20edici%C3%B3n%20de%20v%C3%ADdeo%2Ffotograf%C3%ADa%3A%20dar%20forma%20y%20visibilidad%20a%20lo%20que%20ya%20producimos.%0A-%20Grabaci%C3%B3n%20presencial%20en%20Madrid%3A%20cubrir%20nuestros%20eventos%20en%20persona.%0A%0ASi%20lo%20tuyo%20no%20est%C3%A1%20en%20esta%20lista%2C%20escr%C3%ADbenos%20igual%20y%20cu%C3%A9ntanos%20qu%C3%A9%20te%20gustar%C3%ADa%20aportar.%0A%0ACu%C3%A9ntanos%20en%20este%20mail%3A%0A%0A-%20Tu%20nombre%20y%20tu%20LinkedIn%20%28o%20portfolio%2C%20si%20lo%20tienes%29.%0A-%20En%20cu%C3%A1l%20de%20estas%20%C3%A1reas%20encajas%2C%20o%20cu%C3%A1l%20te%20gustar%C3%ADa%20proponer.%0A-%20Por%20qu%C3%A9%20te%20interesa%20la%20seguridad%20de%20la%20IA%2C%20en%20un%20par%20de%20frases.%0A%0ACon%20eso%20te%20respondemos%20de%20forma%20personal.%0A%0AUn%20saludo%2C%0AOsmani"
  },
  en: {
    heroTitle: "Team",
    heroSubtitle: "Leading **iaS** is **Osmani Redondo**, who has spent the last decade developing theories of change, impact strategies, communication frameworks, coalition building and management systems, first in clinical dental practice, then in cultural management, then in cloud architecture, after retraining as a software developer and becoming a certified professional cloud architect working with AWS and GCP at Telefónica Tech, and today in AI safety, at **iaS** and in the only **BlueDot Impact** seminars in Spanish, which Osmani directs. Osmani is a member of **OdiseIA**, the UNESCO-recognised Observatory for the Social and Ethical Impact of AI, and of the **Madrid Emprende Mentor Network**, and has served on the judging panel of the **Global South AI Safety Hackathon** by **Apart Research**.",
    coordinacionTitle: "Coordination",
    governance: "iaS's strategic decisions are made by its coordination team, made up of the director and the lead of each area. In each city, chapters such as iaS Valencia and groups that are part of iaS such as AI Safety Barcelona run their own events, programmes and local network within the shared iaS framework.",
    voluntariadoTitle: "Volunteers",
    joinTitle: "Do you want to build the future of AI safety in Spanish?",
    joinSubtitle: "**iaS** has only been running for a few months, and it already sustains BlueDot Impact's only Spanish-speaking seminars, the entry point to a field that is almost entirely unbuilt in Spanish; joining now means building that infrastructure from the ground up, not fitting into one that's already finished.",
    joinContribute: "• If you're interested in **research**, you can check whether a model's risk evaluation works the same in Spanish as it does in English.\n• If you're interested in **institutional** work, you can lay the groundwork for an agreement with a university or a regulator that doesn't yet know how much AI safety in Spanish matters.\n• If you're interested in **communication**, you can set up and moderate iaS's Signal and WhatsApp groups and keep the Discord lively, so that whoever arrives finds conversation and answers in their own language.",
    boton: "Write to us",
    linkBoton: "mailto:hola@aisafety.es?subject=I%20want%20to%20join%20iaS%21&body=Hi%21%0A%0AiaS%20is%20the%20first%20Spanish-language%20hub%20dedicated%20to%20AI%20safety.%20We%27re%20looking%20for%20people%20across%20several%20areas%20at%20once%2C%20each%20one%20solving%20something%20different%20we%27re%20missing%20right%20now%3A%0A%0A-%20Group%20moderation%3A%20setting%20up%20and%20moderating%20iaS%27s%20Signal%20and%20WhatsApp%20groups%20and%20keeping%20the%20Discord%20lively%2C%20so%20that%20whoever%20arrives%20finds%20conversation%20in%20their%20own%20language.%0A-%20Research%3A%20evaluating%20whether%20what%20we%20know%20about%20model%20risks%20holds%20up%20the%20same%20in%20Spanish%20as%20in%20English.%0A-%20Institutional%20relations%3A%20opening%20the%20conversation%20with%20universities%20or%20organizations%20that%20don%27t%20yet%20know%20how%20much%20this%20matters%20in%20Spanish.%0A-%20Social%20media%20and%20video%2Fphoto%20editing%3A%20giving%20shape%20and%20visibility%20to%20what%20we%20already%20produce.%0A-%20In-person%20filming%20in%20Madrid%3A%20covering%20our%20events%20live.%0A%0AIf%20what%20you%20do%20isn%27t%20on%20this%20list%2C%20write%20to%20us%20anyway%20and%20tell%20us%20what%20you%27d%20like%20to%20contribute.%0A%0ATell%20us%20in%20this%20email%3A%0A%0A-%20Your%20name%20and%20your%20LinkedIn%20%28or%20portfolio%2C%20if%20you%20have%20one%29.%0A-%20Which%20of%20these%20areas%20fits%20you%2C%20or%20one%20you%27d%20like%20to%20propose.%0A-%20Why%20AI%20safety%20interests%20you%2C%20in%20a%20couple%20of%20sentences.%0A%0AWith%20that%2C%20we%27ll%20get%20back%20to%20you%20personally.%0A%0ABest%2C%0AOsmani"
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
