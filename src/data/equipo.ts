export interface EquipoContent {
  es: {
    heroTitle: string;
    heroSubtitle: string;
    joinTitle: string;      
    joinSubtitle: string;   
    joinContribute: string; 
  };
  en: {
    heroTitle: string;
    heroSubtitle: string;
    joinTitle: string;      
    joinSubtitle: string;  
    joinContribute: string; 
  };
}

export const equipoContent: EquipoContent = {
  es: {
    heroTitle: "Equipo",
    heroSubtitle: "Al frente de **iaS** está **Osmani Redondo**, ingeniera de software y arquitecta cloud certificada con experiencia en Telefónica Tech. Desde hace cinco meses, colidera el desarrollo del primer hub de AI safety en español. Compagina esta labor con la dirección del seminario mensual de BlueDot Impact en habla hispana y su rol como profesora invitada en instituciones de prestigio como la UNAM México y la Fundación SEPI Madrid",
    joinTitle: "¿Quieres construir el futuro de IA safety en español?",
    joinSubtitle: "**iaS** es una infraestructura en construcción. Necesitamos personas que vean el problema y quieran ser parte de la solución.",
    joinContribute: "Puedes contribuir en: traducción y adaptación de contenido técnico, facilitación de seminarios y grupos de lectura, comunicación y redes, desarrollo web, investigación y documentación, relaciones institucionales."
  },
  en: {
    heroTitle: "Team",
    heroSubtitle: "Leading **iaS** is **Osmani Redondo**, software engineer and certified cloud architect with experience at Telefónica Tech. For the past five months, she has been co-leading the development of the first AI safety hub in the Spanish-speaking world. She combines this work with directing BlueDot Impact's monthly seminar for Spanish-speaking communities and her role as guest professor at prestigious institutions such as UNAM México and the SEPI Foundation Madrid.",
        joinTitle: "Do you want to build the future of AI safety in Spanish?",
    joinSubtitle: "**iaS** is an infrastructure under construction. We need people who see the problem and want to be part of the solution.",
    joinContribute: "You can contribute in: translation and adaptation of technical content, seminar and reading group facilitation, communication and social media, web development, research and documentation, and institutional relations."
  }
};