import React from 'react';
import { 
  FaInstagram, 
  FaDiscord, 
  FaLinkedin,
  FaYoutube
} from "react-icons/fa";
import { FaRegCalendar } from "react-icons/fa6";
import { SiSubstack } from "react-icons/si";

const SocialFooter = () => {
  return (
    <div className="flex items-center gap-6 text-3xl">
      <a href="https://www.linkedin.com/company/aisafetyspanish/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors" aria-label="LinkedIn">
        <FaLinkedin />
      </a>
      <a href="https://discord.gg/gm6v9Cwa58" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors" aria-label="Discord">
        <FaDiscord />
      </a>
      <a href="https://substack.com/@osmaniredondo" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors" aria-label="Substack">
        <SiSubstack />
      </a>
      <a href="https://luma.com/user/osmaniredondo" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors" aria-label="Luma">
        <FaRegCalendar />
      </a>
      <a href="https://www.youtube.com/@aisafetyspanish" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors" aria-label="YouTube">
        <FaYoutube />
      </a>
      <a href="https://www.instagram.com/aisafetyspanish" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors" aria-label="Instagram">
        <FaInstagram />
      </a>
    </div>
  );
};

export default SocialFooter;
