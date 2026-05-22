import React, { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { translations } from '../locales/translations';
import { queHacemosContent } from '../data/quehacemos';
import { parseText } from '../utils/parseText';

type Language = 'es' | 'en';
type Theme = 'light' | 'dark';

interface QueHacemosProps {
  lang: Language;
  setLang: (lang: Language) => void;
  theme: Theme;
  setTheme: (theme: Theme) => void;
}

const QueHacemos: React.FC<QueHacemosProps> = ({ lang, setLang, theme, setTheme }) => {
  const t = translations[lang];
  const content = queHacemosContent[lang];

  // Scroll al inicio cuando se carga la página
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Navbar lang={lang} setLang={setLang} theme={theme} setTheme={setTheme} t={t} />
      
      <main className="pt-36 md:pt-44 px-8 md:px-20 lg:px-40 bg-secundarios-light dark:bg-secundarios-dark min-h-screen transition-colors duration-300">
        {/* Esta es la caja única contenedora que alinea todo al mismo ancho máximo */}
        <div className="max-w-3xl mx-auto text-left w-full">
          
          {/* Hero Section */}
          <section className="mb-20 md:mb-16">
            <h4 className="text-secundarios-dark dark:text-white mb-6 text-balance">
              {content.heroTitle}
            </h4>
            <p className="text-small text-secundarios-dark dark:text-secundarios-light">
              {parseText(content.heroSubtitle)}
            </p>
          </section>

          {/* Pillars Section */}
          <section className="mb-20 md:mb-16 w-full">
            {/* Grid ajustado a 1 o 2 columnas para que quepa estéticamente en el max-w-4xl */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
              {content.pillars.map((pillar, idx) => (
                <div 
                  key={idx} 
                  className="p-8 rounded-md border border-secundarios-dark/10 dark:border-white/10 dark:bg-white/5 anthro-hover flex flex-col justify-start"
                >
                  <h5 className="mb-4 text-principal text-balance">
                    {pillar.title}
                  </h5>
                  <p className="text-secundarios-dark dark:text-white mb-0">
                    {pillar.description}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* Impact Section */}
          <section className="mb-20 md:mb-16">
            <h4 className="text-secundarios-dark dark:text-secundarios-light mb-6 text-balance">
              {content.impactTitle}
            </h4>
            <p className="text-small text-secundarios-dark dark:text-secundarios-light">
              {parseText(content.impactDescription)}
            </p>
          </section>
          <section className="mb-20 md:mb-52"></section>
        </div>
      </main>
      <Footer lang={lang} theme={theme} onSubscribeClick={() => {}} />
    </>
  );
};

export default QueHacemos;