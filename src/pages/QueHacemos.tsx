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

          {/* Impact Section */}
          <section className="mb-20 md:mb-16">
            <h4 className="text-secundarios-dark dark:text-secundarios-light mb-6 text-balance">
              {content.impactTitle}
            </h4>
            <p className="text-small text-secundarios-dark dark:text-secundarios-light">
              {parseText(content.impactDescription)}
            </p>
          </section>

          {/* Video Section */}
          <section className="mb-20 md:mb-16">
            <div className="relative w-full aspect-video rounded-md overflow-hidden">
              <iframe
                className="absolute top-0 left-0 w-full h-full"
                src="https://www.youtube.com/embed/SCLpMS6f1CE?si=CHZd9bh_TECN4exW"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              />
            </div>
          </section>

          <section className="mb-20 md:mb-52"></section>
        </div>
      </main>
      <Footer lang={lang} theme={theme} onSubscribeClick={() => {}} />
    </>
  );
};

export default QueHacemos;