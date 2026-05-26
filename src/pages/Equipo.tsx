import React, { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { translations } from '../locales/translations';
import { equipoContent } from '../data/equipo';
import { parseText } from '../utils/parseText';
import osmaniImg from '../assets/osmani.jpeg'; 

// Importamos tus iconos listos para usar
import { FaLinkedin } from "react-icons/fa";

type Language = 'es' | 'en';
type Theme = 'light' | 'dark';

interface EquipoProps {
  lang: Language;
  setLang: (lang: Language) => void;
  theme: Theme;
  setTheme: (theme: Theme) => void;
}

const Equipo: React.FC<EquipoProps> = ({ lang, setLang, theme, setTheme }) => {
  const t = translations[lang];
  const content = equipoContent[lang];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Navbar lang={lang} setLang={setLang} theme={theme} setTheme={setTheme} t={t} />
      
      <main className="pt-36 md:pt-44 px-8 md:px-20 lg:px-40 bg-secundarios-light dark:bg-secundarios-dark min-h-screen transition-colors duration-300">
        <div className="max-w-3xl mx-auto text-left w-full">
          
          {/* 1. Usamos flex-col-reverse para que en móvil el primer hijo (foto) baje y el segundo (texto) suba */}
          <div className="flex flex-col-reverse md:flex-row gap-8 md:gap-12 items-start">
            
            {/* COLUMNA DE LA FOTO: En móvil abajo, en escritorio a la izquierda */}
            <div className="flex flex-col items-center shrink-0 w-full md:w-auto mt-6 md:mt-12">
              {/* Foto de Osmani */}
              <div className="w-32 h-32 md:w-40 md:h-40 rounded-md overflow-hidden border-1 dark:border shadow-lg mb-4">
                <img 
                  src={osmaniImg} 
                  alt="Osmani Redondo" 
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Icono de LinkedIn justo debajo de la foto */}
              <a 
                href="https://www.linkedin.com/in/osmani/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-secundarios-dark/70 dark:text-secundarios-light/70 hover:text-blue-600 dark:hover:text-blue-400 transition-colors p-2"
              >
                <FaLinkedin className="w-7 h-7" />
              </a>
            </div>

            {/* COLUMNA DEL TEXTO: En movile arriba, en escritorio a la derecha */}
            <div className="w-full md:flex-1">
              {/* Título (Hero Title) */}
              <h4 className="text-secundarios-dark dark:text-white mb-6 text-balance font-bold">
                {content.heroTitle}
              </h4>
              
              {/* Subtítulo / Bio completa */}
              <p className="text-small text-secundarios-dark dark:text-secundarios-light leading-relaxed">
                {parseText(content.heroSubtitle)}
              </p>
            </div>
          </div>

          {/* Impact Section */}
          <section className="mb-20 md:mb-52"></section>
        </div>
        {/* Sección de Contribución / Llamada a la acción */}
<section className="mt-20 mb-20 md:mb-52 bg-white/30 dark:bg-white/5 p-8 rounded-2xl border border-secundarios-dark/10 dark:border-white/10">
  <h3 className="text-xl md:text-2xl font-bold text-secundarios-dark dark:text-white mb-4 text-balance">
    {content.joinTitle}
  </h3>
  <p className="text-small text-secundarios-dark dark:text-secundarios-light mb-4 leading-relaxed">
    {parseText(content.joinSubtitle)}
  </p>
  <p className="text-small text-secundarios-dark/90 dark:text-secundarios-light/90 leading-relaxed font-light">
    {content.joinContribute}
  </p>
</section>
      </main>
      <Footer lang={lang} theme={theme} onSubscribeClick={() => {}} />
    </>
  );
};

export default Equipo;