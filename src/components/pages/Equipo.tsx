import React, { useState } from 'react';
import Navbar from '@components/Navbar';
import Footer from '@components/Footer';
import JoinModal from '@components/JoinModal';
import { translations } from '@locales/translations';
import { equipoContent, miembrosEquipo } from '@data/equipo';
import { parseText } from '@utils/parseText';
import { FaLinkedin } from "react-icons/fa";

type Language = 'es' | 'en';

interface EquipoProps {
  lang: Language;
}

const coordinacion = miembrosEquipo.filter((m) => m.grupo === 'coordinacion');

const iniciales = (nombre: string) =>
  nombre.split(' ').map((p) => p[0]).slice(0, 2).join('');

const Equipo: React.FC<EquipoProps> = ({ lang }) => {
  const t = translations[lang];
  const content = equipoContent[lang];
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <Navbar lang={lang} />
      
      <main className="pt-36 md:pt-44 px-8 md:px-20 lg:px-40 bg-secundarios-light dark:bg-secundarios-dark min-h-screen transition-colors duration-300">
        <div className="max-w-5xl mx-auto text-left w-full">
          
          <h1 className="como-h4 text-secundarios-dark dark:text-white mb-6 text-balance font-bold">
            {content.heroTitle}
          </h1>
          <p className="text-small text-secundarios-dark dark:text-secundarios-light leading-relaxed">
            {parseText(content.heroSubtitle)}
          </p>
          <p className="mt-6 text-small text-secundarios-dark dark:text-secundarios-light leading-relaxed">
            {parseText(content.bridge)}
          </p>

          {/* Equipo de coordinación */}
          <ul className="mt-12 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-x-6 gap-y-10">
            {coordinacion.map((persona) => (
              <li key={persona.nombre} className="flex flex-col">
                <div className="aspect-square w-full rounded-anthro overflow-hidden shadow-anthro-subtle bg-secundarios-gray dark:bg-white/10">
                  {persona.foto ? (
                    <img
                      src={persona.foto.src}
                      alt={persona.nombre}
                      width={persona.foto.width}
                      height={persona.foto.height}
                      loading="lazy"
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <span
                      aria-hidden="true"
                      className="w-full h-full flex items-center justify-center font-sans font-bold text-3xl text-secundarios-dark/50 dark:text-secundarios-light/50"
                    >
                      {iniciales(persona.nombre)}
                    </span>
                  )}
                </div>
                <h2 className="mt-4 !font-sans !text-lg !font-bold !leading-snug text-secundarios-dark dark:text-white">
                  {persona.nombre}
                </h2>
                <p className="mt-1 text-sm leading-snug text-secundarios-dark/80 dark:text-secundarios-light/80">
                  {persona.cargo[lang]}
                </p>
                <a
                  href={persona.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`LinkedIn · ${persona.nombre}`}
                  className="mt-2 -ml-1 p-1 self-start text-secundarios-dark/70 dark:text-secundarios-light/70 hover:text-principal dark:hover:text-principal transition-colors"
                >
                  <FaLinkedin className="w-5 h-5" />
                </a>
              </li>
            ))}
          </ul>

          <p className="mt-12 text-small text-secundarios-dark dark:text-secundarios-light leading-relaxed">
            {parseText(content.governance)}
          </p>

          <section className="mb-24 md:mb-32"></section>

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
            <div className="mt-6 flex justify-center">
              <a
                href={content.linkBoton}
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