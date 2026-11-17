import React from 'react';
import { 
  FaInstagram, 
  FaDiscord, 
  FaLinkedin,
  FaYoutube
} from "react-icons/fa";
import { FaRegCalendar } from "react-icons/fa6";
import { SiSubstack } from "react-icons/si";

// Cada icono ocupa 44×44 px: zona táctil mínima recomendada en el móvil (antes, 30×30 y fácil de fallar)
const SocialFooter = () => {
  return (
    <div className="flex flex-wrap items-center justify-center gap-1 md:gap-2 text-3xl">
      <a href="https://www.linkedin.com/company/seguridad-de-la-ia/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center w-11 h-11 rounded-lg hover:text-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-principal" aria-label="LinkedIn">
        <FaLinkedin />
      </a>
      <a href="https://discord.com/invite/gm6v9Cwa58" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center w-11 h-11 rounded-lg hover:text-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-principal" aria-label="Discord">
        <FaDiscord />
      </a>
      <a href="https://seguridaddelaia.substack.com" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center w-11 h-11 rounded-lg hover:text-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-principal" aria-label="Substack">
        <SiSubstack />
      </a>
      <a href="https://luma.com/iaS-SeguridadelaIA" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center w-11 h-11 rounded-lg hover:text-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-principal" aria-label="Luma">
        <FaRegCalendar />
      </a>
      <a href="https://www.youtube.com/@seguridad-de-la-ia" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center w-11 h-11 rounded-lg hover:text-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-principal" aria-label="YouTube">
        <FaYoutube />
      </a>
      <a href="https://www.instagram.com/seguridad_de_la_ia" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center w-11 h-11 rounded-lg hover:text-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-principal" aria-label="Instagram">
        <FaInstagram />
      </a>
    </div>
  );
};

export default SocialFooter;
