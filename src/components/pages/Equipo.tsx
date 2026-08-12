import React, { useState } from 'react';
import Navbar from '@components/Navbar';
import Footer from '@components/Footer';
import JoinModal from '@components/JoinModal';
import { translations } from '@locales/translations';
import { equipoContent } from '@data/equipo';
import { parseText } from '@utils/parseText';
import osmaniImg from '@assets/osmani.jpeg'; 
import { FaLinkedin } from "react-icons/fa";

type Language = 'es' | 'en';

interface EquipoProps {
  lang: Language;
}

const Equipo: React.FC<EquipoProps> = ({ lang }) => {
  const t = translations[lang];
  const content = equipoContent[lang];
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <Navbar lang={lang} />
      
      <main className="pt-36 md:pt-44 px-8 md:px-20 lg:px-40 bg-secundarios-light dark:bg-secundarios-dark min-h-screen transition-colors duration-300">
        <div className="max-w-3xl mx-auto text-left w-full">
          
          {/* Foto y Bio */}
          <div className="flex flex-col-reverse md:flex-row gap-8 md:gap-12 items-start">
            
            {/* Foto */}
            <div className="flex flex-col items-center shrink-0 w-full md:w-auto mt-6 md:mt-12">
              <div className="w-32 h-32 md:w-40 md:h-40 rounded-md overflow-hidden shadow-lg mb-4">
                <img 
                  src={osmaniImg.src || osmaniImg} 
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

            {/* Texto */}
            <div className="w-full md:flex-1">
              <h4 className="text-secundarios-dark dark:text-white mb-6 text-balance font-bold">
                {content.heroTitle}
              </h4>
              <p className="text-small text-secundarios-dark dark:text-secundarios-light leading-relaxed">
                {parseText(content.heroSubtitle)}
              </p>
            </div>
          </div>

          <section className="mb-50 md:mb-52"></section>

          {/* Sección de Contribución */}
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
                className="inline-block bg-principal text-white font-sans font-bold text-xl py-3 px-6 rounded-xl transition-all duration-300 shadow-md hover:shadow-lg hover:-translate-y-1 inline-flex shadow-sm cursor-pointer"
              >
                {content.boton}
              </a>
            </div>
          </section>
        </div>
      </main>

      <JoinModal
        isOpen={showModal}
        onClose={() => setShowModal(false)}
        lang={lang}
        title={t.subscribe.title}
        subtitle={t.subscribe.subtitle}
        action="https://formsubmit.co/aisafetymadrid@gmail.com"
        subject="Nuevo suscriptor desde Equipo"
        successMessage={lang === 'es' ? 'Te hemos registrado correctamente.' : 'You have been successfully registered.'}
      />

      <Footer 
        lang={lang} 
        onSubscribeClick={() => setShowModal(true)}
      />
    </>
  );
};

export default Equipo;