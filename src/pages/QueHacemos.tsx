import React, { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { translations } from '../locales/translations';
import { queHacemosContent } from '../data/quehacemos';

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
      
      <main className="pt-28 md:pt-32 px-4 md:px-8 bg-secundarios-light dark:bg-secundarios-dark min-h-screen transition-colors duration-300">
        <div className="max-w-7xl mx-auto">
          
          {/* Hero Section */}
          <section className="mb-20 md:mb-32">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight text-balance text-secundarios-dark dark:text-secundarios-light">
              {content.heroTitle}
            </h1>
            <p className="text-lg md:text-xl text-secundarios-dark/70 dark:text-secundarios-light/70 font-serif max-w-3xl leading-relaxed">
              {content.heroSubtitle}
            </p>
          </section>

          {/* Pillars Section */}
          <section className="mb-20 md:mb-32">
            <h2 className="text-2xl md:text-3xl font-bold mb-12 text-secundarios-dark dark:text-secundarios-light">
              {content.pillarsTitle}
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {content.pillars.map((pillar, idx) => (
                <div 
                  key={idx} 
                  className="p-8 rounded-lg border border-secundarios-dark/10 dark:border-white/10 bg-white dark:bg-white/5 hover:shadow-lg transition-all duration-300"
                >
                  <h3 className="text-xl font-bold mb-4 text-principal">
                    {pillar.title}
                  </h3>
                  <p className="text-secundarios-dark/70 dark:text-secundarios-light/70 leading-relaxed">
                    {pillar.description}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* Impact Section */}
          <section className="mb-20 md:mb-32 py-12 md:py-16 bg-principal/10 dark:bg-principal/5 rounded-lg p-8 md:p-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-8 text-secundarios-dark dark:text-secundarios-light">
              {content.impactTitle}
            </h2>
            <p className="text-lg text-secundarios-dark/70 dark:text-secundarios-light/70 font-serif leading-relaxed max-w-3xl">
              {content.impactDescription}
            </p>
          </section>

          {/* CTA Section */}
          <section className="mb-20 py-12 md:py-16 text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-secundarios-dark dark:text-secundarios-light">
              {content.ctaTitle}
            </h2>
            <p className="text-lg text-secundarios-dark/70 dark:text-secundarios-light/70 font-serif mb-8 max-w-2xl mx-auto">
              {content.ctaDescription}
            </p>
            <button className="px-8 py-3 rounded-lg bg-principal text-white font-bold hover:bg-principal/90 transition-colors duration-300">
              {content.ctaButton}
            </button>
          </section>

        </div>
      </main>

      <Footer lang={lang} theme={theme} onSubscribeClick={() => {}} />
    </>
  );
};

export default QueHacemos;
