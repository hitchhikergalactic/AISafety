import React, { useState, useEffect } from 'react';
import { translations } from '@locales/translations';
import { X } from 'lucide-react';
import Navbar from '@components/Navbar';
import SeminarioHero from '@components/SeminarioHero';
import GrillaSeminario from '@components/GrillaSeminario';
import Footer from '@components/Footer';
import { listaDeCharlas } from '@data/charlas';
import headerImg from '@assets/header_bluedot_meetup.jpg';

type Language = 'es' | 'en';

interface SeminarioHubProps {
  lang: Language;
}

/**
 * Página: aisafety.es/seminario-bluedot-spain
 * Muestra la grilla principal de charlas del seminario con soporte multi-idioma.
 */
const SeminarioHub: React.FC<SeminarioHubProps> = ({ lang }) => {
  const t = translations[lang];
  const [showModal, setShowModal] = useState(false);

  // Cargar script de Luma
  useEffect(() => {
    const scriptId = 'luma-checkout';
    if (!document.getElementById(scriptId)) {
      const script = document.createElement('script');
      script.id = scriptId;
      script.src = 'https://embed.lu.ma/checkout-button.js';
      script.async = true;
      document.body.appendChild(script);
    }
  }, []);

  return (
    <>
      {/* Barra de navegación global */}
      <Navbar lang={lang} />
      
      {/* Header con imagen responsiva */}
      <section className="w-full h-[280px] md:h-[375px] lg:h-[375px] overflow-hidden mt-24">
        <img 
          src={headerImg.src || headerImg} 
          alt="Bluedot Meetup Header" 
          className="w-full h-full object-cover"
        />
      </section>
      
      {/* Contenedor principal */}
      <div className="pt-28 md:pt-32 px-4 md:px-8">
        
        {/* Sección Hero con traducciones */}
        <SeminarioHero t={t} />

        {/* Botón de Inscripciones */}
        <div className="max-w-2xl mx-auto">
          <div className="flex flex-col md:flex-row gap-4 pt-2 text-center">
            <a 
              href="https://luma.com/event/evt-dT1lSi0z1O5U80k"
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 py-4 rounded-2xl bg-principal text-white font-bold hover:bg-principal/90 transition-all shadow-md cursor-pointer"
            >
              {lang === 'es' ? 'Inscribirse al seminario' : 'Register for the seminar'}
            </a>
            <a 
              href="https://docs.google.com/forms/d/e/1FAIpQLSetVjkN1vyT4IlbAvPh7Xplas1a7RnecWA6o2QFmq17XP5-oA/viewform"
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 py-4 rounded-2xl bg-principal text-white font-bold hover:bg-principal/90 transition-all shadow-md cursor-pointer"
            >
              {lang === 'es' ? 'Proponer charla' : 'Submit a proposal'}
            </a>
          </div>
        </div>

        {/* Sección de la Grilla pasando el listado de datos real y el idioma activo */}
        <section className="mb-10 md:mb-16">
          <GrillaSeminario 
            charlas={listaDeCharlas}
            lang={lang} 
          />
        </section>

        {/* Espacio reservado para secciones inferiores (CTA / Newsletter) */}
        <section className="mb-12 md:mb-16 py-12 text-center">
          {/* Newsletter CTA opcional */}
        </section>
      </div>

      {/* MODAL DE SUSCRIPCIÓN */}
      {showModal && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center px-4" onClick={() => setShowModal(false)}>
          <div className="absolute inset-0 bg-black/60 backdrop-blur-sm"></div>
          <div className="relative bg-secundarios-light dark:bg-secundarios-dark rounded-[32px] p-8 md:p-14 max-w-2xl w-full shadow-anthro-elevated border border-secundarios-dark/20 z-10" onClick={e => e.stopPropagation()}>
            <button onClick={() => setShowModal(false)} className="absolute top-6 right-6 text-secundarios-dark hover:text-principal transition-colors cursor-pointer">
              <X size={24} />
            </button>
            <h3 className="mb-2 md:mb-4">{t.subscribe.title}</h3>
            <p className="text-secundarios-dark/60 dark:text-secundarios-light/60 font-serif mb-6 text-lg text-balance">{t.subscribe.subtitle}</p>

            <form action="https://formsubmit.co/aisafetymadrid@gmail.com" method="POST" className="space-y-4">
              <input type="hidden" name="_subject" value="Nuevo suscriptor desde Seminario" />
              <input type="hidden" name="_captcha" value="false" />
              <input 
                type="email" 
                name="email" 
                placeholder={lang === 'es' ? 'tu@email.com' : 'your@email.com'} 
                required 
                className="w-full px-4 py-3 rounded-xl border border-secundarios-dark/20 dark:border-white/10 bg-white dark:bg-white/5 text-secundarios-dark dark:text-white placeholder-secundarios-dark/40 focus:outline-none focus:ring-2 focus:ring-principal"
              />
              <button type="submit" className="w-full py-3 rounded-xl bg-principal text-white font-bold hover:bg-principal/80 transition-colors cursor-pointer">
                {t.subscribe.button}
              </button>
            </form>
          </div>
        </div>
      )}

      {/* FOOTER */}
      <Footer 
        lang={lang} 
        onSubscribeClick={() => setShowModal(true)}
      />
    </>
  );
};

export default SeminarioHub;