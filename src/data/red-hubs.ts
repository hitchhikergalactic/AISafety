// Logos de la red de hubs aliados (página «Red» y resumen de la portada)
import logoENAIS from '@assets/logos__european_network_for_AI_safety.svg';
import logoENAISWhite from '@assets/logos__european_network_for_AI_safety_white.svg';
import logoAISafetyCom from '@assets/logos__aisafety_com.svg';
import logoAISafetyComWhite from '@assets/logos__aisafety_com_white.svg';
import logoBAISH from '@assets/logos__buenos_aires_AI_safety_hub.svg';
import logoBAISHWhite from '@assets/logos__buenos_aires_AI_safety_hub_white.svg';
import logoMEXICO from '@assets/ai_safety_mexico.svg';
import logoMEXICOWhite from '@assets/ai_safety_mexico_byn.svg';
import logow4ias from '@assets/logos__w4ais.svg';
import logow4iaswhite from '@assets/logos__w4ais-white.svg';
import logoColombia from '@assets/logos__ai-safety-colombia.svg';
import logoColombiawhite from '@assets/logos__ai-safaty-colombia-white.svg';
import logoLisboa from '@assets/logos__lisbon_ai_safety_hub.svg';
import logoLisboaWhite from '@assets/logos__lisbon_ai_safety_hub_white.svg';
import logoSAIN from '@assets/logos__safe_ai_netherlands.svg';
import logoSAINWhite from '@assets/logos__safe_ai_netherlands_white.svg';
import logoCeSIA from '@assets/logos__cesia.svg';
import logoCeSIAWhite from '@assets/logos__cesia_white.svg';
import logoCEGIA from '@assets/logos__cegia.svg';
import logoCEGIAWhite from '@assets/logos__cegia_white.svg';

export type GrupoHub = 'espanol' | 'mundo';

// `text` es también el texto alternativo del logo. BlueDot no está: aparece como patrocinador en la portada.
export const hubs: { grupo: GrupoHub; href: string; text: string; logo: any; logoWhite: any }[] = [
  { grupo: 'espanol', href: 'https://www.aismx.org/', text: 'AI Safety México', logo: logoMEXICO, logoWhite: logoMEXICOWhite },
  { grupo: 'espanol', href: 'https://aisafetycolombia.org/', text: 'AI Safety Colombia', logo: logoColombia, logoWhite: logoColombiawhite },
  { grupo: 'espanol', href: 'https://www.baish.com.ar/es', text: 'Buenos Aires AI Safety Hub', logo: logoBAISH, logoWhite: logoBAISHWhite },
  { grupo: 'mundo', href: 'https://www.enais.co/', text: 'European Network for AI Safety', logo: logoENAIS, logoWhite: logoENAISWhite },
  { grupo: 'mundo', href: 'https://www.aisafety.com/', text: 'AISafety.com', logo: logoAISafetyCom, logoWhite: logoAISafetyComWhite },
  { grupo: 'mundo', href: 'https://www.women4aisafety.com/', text: 'Women4AISafety', logo: logow4ias, logoWhite: logow4iaswhite },
  { grupo: 'mundo', href: 'https://www.lisbonaisafetyhub.org/', text: 'Lisbon AI Safety Hub', logo: logoLisboa, logoWhite: logoLisboaWhite },
  { grupo: 'mundo', href: 'https://safeainetherlands.org/', text: 'SAIN (Safe AI Netherlands)', logo: logoSAIN, logoWhite: logoSAINWhite },
  { grupo: 'mundo', href: 'https://cesia.org/en/', text: "CeSIA (Centre pour la Sécurité de l'IA)", logo: logoCeSIA, logoWhite: logoCeSIAWhite },
  { grupo: 'mundo', href: 'https://cegia.org.br/', text: 'CEGIA (Centro de Estudos em Governança de IA)', logo: logoCEGIA, logoWhite: logoCEGIAWhite },
];
