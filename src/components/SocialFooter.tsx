import React from 'react';
import { 
  FaInstagram, 
  FaDiscord, 
  FaLinkedin 
} from "react-icons/fa";
import { SiSubstack } from "react-icons/si";

const SocialFooter = () => {
  return (
    <div className="flex items-center gap-6 text-3xl">
      <a href="https://www.linkedin.com/company/aisafetyspain/" className="hover:text-white transition-colors" aria-label="LinkedIn">
        <FaLinkedin />
      </a>
      <a href="https://discord.gg/z7uhQKhZKW" className="hover:text-white transition-colors" aria-label="Discord">
        <FaDiscord />
      </a>
      <a href="https://substack.com/@osmaniredondo" className="hover:text-white transition-colors" aria-label="Substack">
        <SiSubstack />
      </a>
      <a href="https://instagram.com/aisafetyspain" className="hover:text-white transition-colors" aria-label="Instagram">
        <FaInstagram />
      </a>
    </div>
  );
};

export default SocialFooter;
