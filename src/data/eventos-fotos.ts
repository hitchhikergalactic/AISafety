// Fotos de las tarjetas de «Próximos eventos»: personas reales, para que se vea quién habla.
// Se buscan por el `id` del evento (el de Luma, `evt-…`, o el de src/data/eventos-propios.ts).
// Un evento de iaS sin foto propia lleva la de Osmani hablando; los de otros hubs (calendario rediaS) van sin foto.
import anaCastillo from '@assets/eventos/ana-castillo.webp';
import osmaniHablando from '@assets/eventos/osmani-hablando.webp';
import cursoVideollamada from '@assets/eventos/curso-videollamada.webp';
import osmaniDani from '@assets/eventos/osmani-dani-agi-strategy.webp';

// `ponente`: si se pone, sale «Con …» bajo el título.
export type FotoEvento = { src: string; alt: { es: string; en: string }; ponente?: string | { es: string; en: string } };

export const fotoPorDefecto: FotoEvento = {
  src: osmaniHablando.src,
  alt: { es: 'Osmani Redondo, que dirige iaS, durante una charla.', en: 'Osmani Redondo, director of iaS, giving a talk.' },
};

export const fotosEventos: Record<string, FotoEvento> = {
  // Spanish Speaking AI Safety Meet up, 18 nov 2026
  'evt-rF6C65CGPhp2DTX': {
    src: anaCastillo.src,
    alt: { es: 'Ana Castillo, ponente del encuentro.', en: 'Ana Castillo, the speaker.' },
    ponente: 'Ana Castillo',
  },
  // AGI Strategy Course · Preguntas y respuestas, 2 dic 2026
  'evt-ioU95fxGqRjA9gd': {
    src: osmaniDani.src,
    alt: { es: 'Osmani Redondo y Dani Lupión.', en: 'Osmani Redondo and Dani Lupión.' },
    ponente: { es: 'Osmani Redondo y Dani Lupión', en: 'Osmani Redondo and Dani Lupión' },
  },
  'curso-estrategia-agi-2027-1': {
    src: cursoVideollamada.src,
    alt: { es: 'Videollamada con participantes de un curso en línea de iaS.', en: 'Video call with participants in an online iaS course.' },
  },
};
