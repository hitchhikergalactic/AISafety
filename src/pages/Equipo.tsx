import React, { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { translations } from '../locales/translations';
import { equipoContent } from '../data/equipo';
import { parseText } from '../utils/parseText';
import osmaniImg from '../assets/osmani.jpeg'; 
import { X } from 'lucide-react';

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
  const [showModal, setShowModal] = useState(false);
  const [modalType, setModalType] = useState<'event' | 'subscribe'>('subscribe');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Navbar lang={lang} setLang={setLang} theme={theme} setTheme={setTheme} t={t} />
      
      <main className="pt-36 md:pt-44 px-8 md:px-20 lg:px-40 bg-secundarios-light dark:bg-secundarios-dark min-h-screen transition-colors duration-300">
        
        {/* CONTENEDOR MAESTRO: Limita el ancho de TODO el contenido a max-w-3xl */}
        <div className="max-w-3xl mx-auto text-left w-full">
          
          {/* Primera Parte: Foto y Bio */}
          <div className="flex flex-col-reverse md:flex-row gap-8 md:gap-12 items-start">
            
            {/* COLUMNA DE LA FOTO */}
            <div className="flex flex-col items-center shrink-0 w-full md:w-auto mt-6 md:mt-12">
              <div className="w-32 h-32 md:w-40 md:h-40 rounded-md overflow-hidden border-1 dark:border shadow-lg mb-4">
                <img 
                  src={osmaniImg} 
                  alt="Osmani Redondo" 
                  className="w-full h-full object-cover"
                />
              </div>
              <a 
                href="https://www.linkedin.com/in/osmani/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-secundarios-dark/70 dark:text-secundarios-light/70 hover:text-blue-600 dark:hover:text-blue-400 transition-colors p-2"
              >
                <FaLinkedin className="w-7 h-7" />
              </a>
            </div>

            {/* COLUMNA DEL TEXTO */}
            <div className="w-full md:flex-1">
              <h4 className="text-secundarios-dark dark:text-white mb-6 text-balance font-bold">
                {content.heroTitle}
              </h4>
              <p className="text-small text-secundarios-dark dark:text-secundarios-light leading-relaxed">
                {parseText(content.heroSubtitle)}
              </p>
            </div>
          </div>

          {/* Impact Section */}
          <section className="mb-50 md:mb-52"></section>

          {/* Sección de Contribución (Ahora alineada dentro del max-w-3xl) */}
          <section className="mt-10 mb-20 md:mb-52 bg-white/30 dark:bg-white/5 p-8 rounded-md border border-secundarios-dark/10 dark:border-white/10">
            <h4 className="text-xl md:text-2xl font-bold text-secundarios-dark dark:text-white mb-4 text-balance">
              {content.joinTitle}
            </h4>
            <p className="text-small text-secundarios-dark dark:text-secundarios-light mb-4 leading-relaxed">
              {parseText(content.joinSubtitle)}
            </p>
            <p className="text-small text-secundarios-dark dark:text-secundarios-light leading-relaxed font-light">
              {parseText(content.joinContribute)}
            </p>
            <div className="mt-6">
            <a
              href={content.linkBoton}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-principal text-white font-sans font-bold text-xl py-3 px-6 rounded-xl transition-all duration-300 shadow-md hover:shadow-lg hover:-translate-y-1 inline-flex shadow-sm"
            >
              {content.boton}
            </a>
          </div>
          </section>

        </div> 
        
      </main>
      {/* MODAL DE SUSCRIPCIÓN */}
      {showModal && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center px-4" onClick={() => setShowModal(false)}>
          <div className="absolute inset-0 bg-black/60 backdrop-blur-sm"></div>
          <div className="relative bg-secundarios-light dark:bg-secundarios-dark rounded-[32px] p-8 md:p-14 max-w-2xl w-full shadow-anthro-elevated border border-secundarios-dark/20 z-10" onClick={e => e.stopPropagation()}>
            <button onClick={() => setShowModal(false)} className="absolute top-6 right-6 text-secundarios-dark hover:text-principal transition-colors">
              <X size={24} />
            </button>
            <h3 className="mb-2 md:mb-4">{t.subscribe.title}</h3>
            <p className="text-secundarios-dark/60 dark:text-secundarios-light/60 font-serif mb-6 text-lg text-balance">{t.subscribe.subtitle}</p>

            <form action="https://formsubmit.co/aisafetymadrid@gmail.com" method="POST" className="space-y-4">
              <input type="hidden" name="_subject" value="Nuevo suscriptor desde Equipo" />
              <input type="hidden" name="_captcha" value="false" />
              <input 
                type="email" 
                name="email" 
                placeholder={lang === 'es' ? 'tu@email.com' : 'your@email.com'} 
                required 
                className="w-full px-4 py-3 rounded-xl border border-secundarios-dark/20 dark:border-white/10 bg-white dark:bg-white/5 text-secundarios-dark dark:text-white placeholder-secundarios-dark/40 focus:outline-none focus:ring-2 focus:ring-principal"
              />
              <button type="submit" className="w-full py-3 rounded-xl bg-principal text-white font-bold hover:bg-principal/80 transition-colors">
                {t.subscribe.button}
              </button>
            </form>
          </div>
        </div>
      )}

      <Footer lang={lang} theme={theme} onSubscribeClick={() => { setModalType('subscribe'); setShowModal(true); }} />
    </>
  );
};

export default Equipo;