import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import Navbar from '@components/Navbar';
import Footer from '@components/Footer';
import JoinModal from '@components/JoinModal';
import { translations } from '@locales/translations';
import { queHacemosContent } from '@data/quehacemos';
import { parseText } from '@utils/parseText';

type Language = 'es' | 'en';

interface QueHacemosProps {
  lang: Language;
}

const QueHacemos: React.FC<QueHacemosProps> = ({ lang }) => {
  const t = translations[lang];
  const content = queHacemosContent[lang];
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <Navbar lang={lang} />
      
      <main className="pt-36 md:pt-44 px-8 md:px-20 lg:px-40 bg-secundarios-light dark:bg-secundarios-dark min-h-screen transition-colors duration-300">
        {/* Misión: primer bloque de la página, a pantalla completa y con el texto centrado (misma estructura que Safe AI Netherlands).
            Los márgenes negativos anulan el relleno de <main> para que el bloque empiece arriba del todo y ocupe todo el ancho;
            el margen inferior devuelve al contenido de debajo el espacio que tenía. */}
        <section
          id="mision"
          className="relative -mx-8 md:-mx-20 lg:-mx-40 -mt-36 md:-mt-44 mb-36 md:mb-44 flex min-h-[100svh] items-center overflow-hidden"
        >
          <div
            aria-hidden="true"
            className="absolute inset-0 opacity-[0.04] text-secundarios-dark dark:text-secundarios-light"
            style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, currentColor 1px, transparent 0)', backgroundSize: '40px 40px' }}
          />
          <div
            aria-hidden="true"
            className="absolute bottom-0 left-0 h-px w-full bg-linear-to-r from-transparent via-secundarios-dark/15 to-transparent dark:via-secundarios-light/20"
          />
          <div className="relative z-10 mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
            <p className="mx-auto max-w-4xl text-center !mb-0 !font-sans !text-xl !font-bold !leading-relaxed md:!text-2xl md:!leading-8 text-secundarios-dark dark:text-secundarios-light">
              {content.missionText}
            </p>
          </div>
          <a
            href="#contenido"
            aria-label={content.scrollHintLabel}
            className="absolute bottom-8 left-1/2 z-20 -translate-x-1/2 animate-bounce motion-reduce:animate-none rounded-full border p-3 transition-colors border-secundarios-dark/15 text-secundarios-dark/45 hover:border-principal/50 hover:text-principal dark:border-secundarios-light/20 dark:text-secundarios-light/50 dark:hover:border-principal/50 dark:hover:text-principal"
          >
            <ChevronDown size={20} aria-hidden="true" />
          </a>
        </section>
        <div id="contenido" className="scroll-mt-navbar" />

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
      
      <JoinModal
        isOpen={showModal}
        onClose={() => setShowModal(false)}
        lang={lang}
        title={t.subscribe.title}
        subtitle={t.subscribe.subtitle}
        action="https://script.google.com/macros/s/AKfycbwYyiRXPZdeFNO1ybtrnd5xa9ndfNvIfXr-e7rF0HsfKcz4eWckOsswSD9yoEO_87w63g/exec"
        subject="Nuevo suscriptor desde QueHacemos"
        successMessage={lang === 'es' ? 'Te hemos registrado correctamente.' : 'You have been successfully registered.'}
      />

      <Footer 
        lang={lang} 
        onSubscribeClick={() => {
          setShowModal(true);
        }}
      />
    </>
  );
};

export default QueHacemos;