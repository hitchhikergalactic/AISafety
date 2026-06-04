import React, { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { translations } from '../locales/translations';
import { queHacemosContent } from '../data/quehacemos';
import { parseText } from '../utils/parseText';
import { X } from 'lucide-react';

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
  const [showModal, setShowModal] = useState(false);
  const [modalType, setModalType] = useState<'event' | 'subscribe'>('subscribe');

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
              <input type="hidden" name="_subject" value="Nuevo suscriptor desde QueHacemos" />
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

export default QueHacemos;