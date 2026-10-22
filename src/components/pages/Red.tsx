import React, { useState } from 'react';
import { ArrowUpRight } from 'lucide-react';
import Navbar from '@components/Navbar';
import Footer from '@components/Footer';
import JoinModal from '@components/JoinModal';
import { GrupoHubs, MapaEspanol } from '@components/RedHubs';
import { translations } from '@locales/translations';
import { redContent, directorioFormUrl } from '@data/red';
import { parseText } from '@utils/parseText';

type Language = 'es' | 'en';

const botonPrincipal = 'inline-flex items-center gap-2 bg-principal text-white font-sans font-bold text-base md:text-lg py-3 px-5 md:px-6 rounded-xl no-underline transition-all duration-300 shadow-md hover:shadow-lg hover:-translate-y-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-principal focus-visible:ring-offset-2';
const botonSecundario = 'inline-flex items-center gap-2 py-3 px-5 md:px-6 rounded-xl border-2 border-principal text-principal-texto font-sans font-bold text-base md:text-lg no-underline hover:bg-principal/10 dark:hover:bg-principal/15 transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-principal focus-visible:ring-offset-2';

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
            {/* Acción principal de la página: apuntarse al directorio */}
            <a href={directorioFormUrl} target="_blank" rel="noopener noreferrer" className={botonPrincipal}>
              {content.directoryButton}
              <ArrowUpRight size={20} aria-hidden="true" />
            </a>
          </header>

          <section className="mt-12 md:mt-20">
            <h2 className="sr-only">{content.mapTitle}</h2>
            <MapaEspanol lang={lang} />
            {/* Contexto con fuentes: por qué importa el mundo hispanohablante en el debate sobre la IA */}
            <p className="max-w-2xl mx-auto mt-10 md:mt-14 text-center text-balance">
              {content.context.map((parte, i) =>
                'href' in parte ? (
                  <a key={i} href={parte.href} target="_blank" rel="noopener noreferrer" className="text-principal-texto underline underline-offset-4 hover:no-underline">
                    {parte.text}
                  </a>
                ) : (
                  <React.Fragment key={i}>{parte.text}</React.Fragment>
                )
              )}
            </p>
          </section>

          {/* Dos grupos, contados desde la persona (a quién puedes conocer): nodos en español y resto del mundo */}
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

          {/* Cierre: las dos formas de entrar en la red. Apuntarse al directorio (principal) o crear un nodo si no hay ninguno cerca */}
          <section className="mt-16 md:mt-28 grid md:grid-cols-2 gap-6 md:gap-8 [&>div]:flex [&>div]:flex-col [&>div]:items-center [&>div]:text-center [&>div]:px-5 [&>div]:py-8 md:[&>div]:p-10 [&>div]:rounded-anthro [&>div]:border [&>div]:border-secundarios-dark/10 dark:[&>div]:border-white/10 [&>div]:bg-white/30 dark:[&>div]:bg-white/5">
            <div>
              <h2 className="!text-xl md:!text-3xl !leading-tight mb-3 text-balance">{content.directoryTitle}</h2>
              <p className="text-balance flex-grow">{content.directoryText}</p>
              <a href={directorioFormUrl} target="_blank" rel="noopener noreferrer" className={botonPrincipal}>
                {content.directoryButton}
                <ArrowUpRight size={20} aria-hidden="true" />
              </a>
              <small className="block mt-3 text-xs font-sans opacity-70">{content.directoryNote}</small>
            </div>
            <div>
              <h2 className="!text-xl md:!text-3xl !leading-tight mb-3 text-balance">{content.joinTitle}</h2>
              <p className="text-balance flex-grow">{content.joinText}</p>
              <a href={content.joinHref} className={botonSecundario}>
                {content.joinButton}
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
        subject="Nuevo suscriptor desde Red"
        successMessage={lang === 'es' ? 'Te hemos registrado correctamente.' : 'You have been successfully registered.'}
      />

      <Footer lang={lang} onSubscribeClick={() => setShowModal(true)} />
    </>
  );
};

export default Red;
