// Organizaciones en las que han trabajado, estudiado o con las que han colaborado los ponentes de iaS
// (biografías de src/data/charlas.ts y ponentes del encuentro presencial de Madrid). Las usa la franja de logos
// del Seminario y de la portada. Los logos son el símbolo de cada organización, recortado y encajado en 160×160.
// Fuera a propósito: el Barcelona Supercomputing Center (su web no deja descargar el logo) y The Workshop.
import logoApart from '@assets/ponentes/apart.webp';
import logoDeepMind from '@assets/ponentes/deepmind.webp';
import logoOpenAI from '@assets/ponentes/openai.webp';
import logoMIRI from '@assets/ponentes/miri.webp';
import logoFLI from '@assets/ponentes/fli.webp';
import logoCAIS from '@assets/ponentes/cais.webp';
import logoLASR from '@assets/ponentes/lasr.webp';
import logoSaferAI from '@assets/ponentes/saferai.webp';
import logoPourDemain from '@assets/ponentes/pourdemain.webp';
import logoBlueDot from '@assets/ponentes/bluedot.webp';
import logoCAISH from '@assets/ponentes/caish.webp';
import logoML4G from '@assets/ponentes/ml4g.webp';
import logoKairos from '@assets/ponentes/kairos.webp';
import logoAIRE from '@assets/ponentes/aire.webp';
import logoORCG from '@assets/ponentes/orcg.webp';
import logoPauseAI from '@assets/ponentes/pauseai.webp';
import logoBAISH from '@assets/ponentes/baish.webp';
import logoMexico from '@assets/ponentes/mexico.webp';
import logoColombia from '@assets/ponentes/colombia.webp';
import logoBarcelona from '@assets/ponentes/barcelona.webp';
import logoDLR from '@assets/ponentes/dlr.webp';
import logoMPG from '@assets/ponentes/mpg.webp';
import logoIIT from '@assets/ponentes/iit.webp';
import logoPrinceton from '@assets/ponentes/princeton.webp';
import logoTUM from '@assets/ponentes/tum.webp';
import logoUPM from '@assets/ponentes/upm.webp';
import logoUPC from '@assets/ponentes/upc.webp';
import logoUPV from '@assets/ponentes/upv.webp';
import logoUBA from '@assets/ponentes/uba.webp';
import logoUniandes from '@assets/ponentes/uniandes.webp';
import logoUNAM from '@assets/ponentes/unam.webp';
import logoUPY from '@assets/ponentes/upy.webp';
import logoITK from '@assets/ponentes/itk.webp';
import logoMercadoLibre from '@assets/ponentes/mercadolibre.webp';
import logoSezzle from '@assets/ponentes/sezzle.webp';
import logoTShaped from '@assets/ponentes/tshaped.webp';

// `enPortada: false` en las que la portada ya muestra (patrocinio y franja de la Red), para no repetirlas.
export const organizacionesPonentes: { nombre: string; logo: ImageMetadata; enPortada?: boolean }[] = [
  { nombre: 'Apart Research', logo: logoApart },
  { nombre: 'Google DeepMind', logo: logoDeepMind },
  { nombre: 'OpenAI', logo: logoOpenAI },
  { nombre: 'MIRI', logo: logoMIRI },
  { nombre: 'Future of Life Institute', logo: logoFLI },
  { nombre: 'Center for AI Safety', logo: logoCAIS },
  { nombre: 'LASR Labs', logo: logoLASR },
  { nombre: 'SaferAI', logo: logoSaferAI },
  { nombre: 'Pour Demain', logo: logoPourDemain },
  { nombre: 'BlueDot Impact', logo: logoBlueDot, enPortada: false },
  { nombre: 'Cambridge AI Safety Hub', logo: logoCAISH },
  { nombre: 'ML4Good', logo: logoML4G },
  { nombre: 'Kairos', logo: logoKairos },
  { nombre: 'AI Risk Explorer', logo: logoAIRE },
  { nombre: 'ORCG', logo: logoORCG },
  { nombre: 'PauseAI', logo: logoPauseAI },
  { nombre: 'BAISH', logo: logoBAISH, enPortada: false },
  { nombre: 'AI Safety México', logo: logoMexico, enPortada: false },
  { nombre: 'AI Safety Colombia', logo: logoColombia, enPortada: false },
  { nombre: 'AI Safety Barcelona', logo: logoBarcelona },
  { nombre: 'DLR', logo: logoDLR },
  { nombre: 'Max Planck', logo: logoMPG },
  { nombre: 'IIT', logo: logoIIT },
  { nombre: 'Princeton', logo: logoPrinceton },
  { nombre: 'TUM', logo: logoTUM },
  { nombre: 'UPM', logo: logoUPM },
  { nombre: 'UPC', logo: logoUPC },
  { nombre: 'UPV', logo: logoUPV },
  { nombre: 'UBA', logo: logoUBA },
  { nombre: 'Universidad de los Andes', logo: logoUniandes },
  { nombre: 'UNAM', logo: logoUNAM },
  { nombre: 'Universidad Politécnica de Yucatán', logo: logoUPY },
  { nombre: 'ITK Engineering', logo: logoITK },
  { nombre: 'Mercado Libre', logo: logoMercadoLibre },
  { nombre: 'Sezzle', logo: logoSezzle },
  { nombre: 'TShaped', logo: logoTShaped },
];
