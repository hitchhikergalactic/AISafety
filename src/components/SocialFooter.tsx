import React from 'react';
import { 
  FaInstagram, 
  FaFacebookSquare, 
  FaYoutube, 
  FaLinkedin 
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const SocialFooter = () => {
  return (
    <div className="flex items-center gap-6 text-3xl">
      <a href="https://instagram.com/aisafetyspain" className="hover:text-white transition-colors" aria-label="Instagram">
        <FaInstagram />
      </a>
      <a href="#" className="hover:text-white transition-colors" aria-label="Facebook">
        <FaFacebookSquare />
      </a>
      <a href="#" className="hover:text-white transition-colors" aria-label="YouTube">
        <FaYoutube />
      </a>
      <a href="https://twitter.com/aisafetyspain" className="hover:text-white transition-colors" aria-label="X (Twitter)">
        <FaXTwitter />
      </a>
      <a href="https://linkedin.com" className="hover:text-white transition-colors" aria-label="LinkedIn">
        <FaLinkedin />
      </a>
    </div>
  );
};

export default SocialFooter;
