import React from 'react';
import { LuMail, LuMapPin } from 'react-icons/lu';
import SocialFooter from './SocialFooter';
import { translations } from '../locales/translations';
import logo from '../assets/safety_id_logo_white_leyenda.svg';
import logoWhite from '../assets/ias_logo_white.svg';

type Language = 'es' | 'en';
type Theme = 'light' | 'dark';

interface FooterProps {
  lang: Language;
  theme: Theme;
  onSubscribeClick?: () => void;
}

const Footer: React.FC<FooterProps> = ({ lang, theme, onSubscribeClick }) => {
  const t = translations[lang];

  return (
    <footer className="px-4 md:px-8 bg-secundarios-dark text-secundarios-light/40 py-12 border-t border-white/5">
      <div className="max-w-7xl mx-auto text-center md:text-left">
        <div className="flex flex-col-reverse md:flex-row justify-between items-center gap-12">
          <div className="flex flex-col items-center md:items-start w-full md:w-auto">
            <div className="bajada !text-secundarios-light max-w-xs mb-6">
              {t.footer.tagline}
            </div>
            <button 
              onClick={onSubscribeClick}
              className="px-10 py-4 rounded-xl bg-principal text-white font-sans font-bold text-xl transition-all duration-300 shadow-md hover:shadow-lg hover:-translate-y-1 inline-flex items-center gap-3 mb-8"
            >
              {t.hero.ctaSecondary}
            </button>
            <div className="mb-6">
              <SocialFooter />
            </div>
            <div className="whitespace-pre-wrap mb-4">
              <h5 className="!text-secundarios-light !mb-0">{t.footer.text1}</h5>
            </div>
            <a 
              href={`mailto:${t.footer.email}`} 
              className="inline-flex items-center gap-2 hover:!text-secundarios-light/80 transition-colors mb-1"
            >
              <h5 className="!text-secundarios-light !mb-0 inline-flex items-center gap-2">
                <LuMail size={18} />
                {t.footer.email}
              </h5>
            </a>
            <a 
              href={t.footer.dirUrl} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="inline-flex items-center gap-2 hover:!text-secundarios-light/80 transition-colors mb-4"
            >
              <h5 className="!text-secundarios-light !mb-0 inline-flex items-center gap-2">
                <LuMapPin size={18} />
                {t.footer.dir}
              </h5>
            </a>
          </div>
          <div className="w-full md:w-auto flex justify-center md:justify-end mb-8 md:mb-0">
            <img 
              src={theme === 'dark' ? logoWhite : logo} 
              alt="IA Safety España" 
              className="h-16 md:h-20" 
            />
          </div>
        </div>
        <div className="pt-8 mt-8 border-t border-white/5 text-center text-xs tracking-widest uppercase text-white/60 font-medium">
          © {t.footer.copyright}.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
