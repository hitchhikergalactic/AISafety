import React, { useState } from 'react';
import Navbar from '@components/Navbar';
import Footer from '@components/Footer';
import JoinModal from '@components/JoinModal';
import { GrupoHubs, MapaEspanol } from '@components/RedHubs';
import { translations } from '@locales/translations';
import { redContent } from '@data/red';
import { parseText } from '@utils/parseText';

type Language = 'es' | 'en';

interface RedProps {
  lang: Language;
}

// Página «Red», como la de ENAIS: a quién puedes conocer y dónde. Los textos de los grupos y del mapa
// son los mismos que los del resumen de la portada (`translations.collaborators`).
const Red: React.FC<RedProps> = ({ lang }) => {
  const t = translations[lang];
  const c = t.collaborators;
  const content = redContent[lang];
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <Navbar lang={lang} />

      <main className="pt-36 md:pt-44 px-8 md:px-20 lg:px-24 pb-20 md:pb-32 bg-secundarios-light dark:bg-secundarios-dark min-h-screen transition-colors duration-300 text-secundarios-dark dark:text-secundarios-light">
        <div className="max-w-[1100px] mx-auto">
          <header className="max-w-2xl mx-auto text-center">
            <h1 className="como-h2 text-secundarios-dark dark:text-white !mb-6">{c.title}</h1>
            <p className="text-balance">{parseText(c.text)}</p>
          </header>

          <section className="mt-12 md:mt-20">
            <h2 className="sr-only">{content.mapTitle}</h2>
            <MapaEspanol lang={lang} />
          </section>

          {/* Dos grupos, contados desde la persona (a quién puedes conocer): hubs en español y resto del mundo */}
          {([
            ['espanol', c.spanishSpeaking, c.spanishSpeakingText],
            ['mundo', c.international, c.internationalText],
          ] as const).map(([grupo, titulo, texto]) => (
            <section key={grupo} className="mt-16 md:mt-28">
              <div className="mx-auto max-w-xl text-center mb-4 md:mb-6">
                <h2 className="!text-2xl md:!text-3xl !leading-tight mb-3 text-balance">{titulo}</h2>
                <p className="text-balance">{texto}</p>
              </div>
              <GrupoHubs grupo={grupo} />
            </section>
          ))}

          {/* Si no hay grupo cerca, la salida es crear una delegación de iaS */}
          <section className="mt-16 md:mt-28 mx-auto max-w-2xl text-center bg-white/30 dark:bg-white/5 px-5 py-8 md:p-10 rounded-anthro border border-secundarios-dark/10 dark:border-white/10">
            <h2 className="!text-xl md:!text-3xl !leading-tight mb-3 text-balance">{content.joinTitle}</h2>
            <p>{content.joinText}</p>
            <a
              href={content.joinHref}
              className="inline-flex bg-principal text-white font-sans font-bold text-lg py-3 px-6 rounded-xl no-underline transition-all duration-300 shadow-md hover:shadow-lg hover:-translate-y-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-principal focus-visible:ring-offset-2"
            >
              {content.joinButton}
            </a>
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
        subject="Nuevo suscriptor desde Red"
        successMessage={lang === 'es' ? 'Te hemos registrado correctamente.' : 'You have been successfully registered.'}
      />

      <Footer lang={lang} onSubscribeClick={() => setShowModal(true)} />
    </>
  );
};

export default Red;
