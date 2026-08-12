import React, { useState, useEffect } from 'react';
import { translations } from '@locales/translations';
import Navbar from '@components/Navbar';
import SeminarioHero from '@components/SeminarioHero';
import GrillaSeminario from '@components/GrillaSeminario';
import Footer from '@components/Footer';
import JoinModal from '@components/JoinModal';
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
  const headerImageSrc = typeof headerImg === 'string' ? headerImg : headerImg.src;

  const openModal = () => {
    setShowModal(true);
  };

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
          src={headerImageSrc}
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

      <JoinModal
        isOpen={showModal}
        onClose={() => setShowModal(false)}
        lang={lang}
        title={t.subscribe.title}
        subtitle={t.subscribe.subtitle}
        action="https://script.google.com/macros/s/AKfycbwYyiRXPZdeFNO1ybtrnd5xa9ndfNvIfXr-e7rF0HsfKcz4eWckOsswSD9yoEO_87w63g/exec"
        subject="Nuevo suscriptor desde Seminario"
        successMessage={lang === 'es' ? 'Te hemos registrado correctamente.' : 'You have been successfully registered.'}
      />

      <div id="footer">
        <Footer 
          lang={lang} 
          onSubscribeClick={openModal}
        />
      </div>
    </>
  );
};

export default SeminarioHub;