import React, { useState } from 'react';
import { ArrowDown, ArrowUpRight } from 'lucide-react';
import Navbar from '@components/Navbar';
import Footer from '@components/Footer';
import JoinModal from '@components/JoinModal';
import { GrupoHubs, MapaEspanol } from '@components/RedHubs';
import { translations } from '@locales/translations';
import EmbedAlPulsar from '@components/EmbedAlPulsar';
import { redContent, directorioFormUrl, directorioEmbedUrl } from '@data/red';
import { parseText } from '@utils/parseText';

type Language = 'es' | 'en';

const botonPrincipal = 'inline-flex items-center gap-2 bg-principal text-white font-sans font-bold text-base md:text-lg py-3 px-5 md:px-6 rounded-xl no-underline transition-all duration-300 shadow-md hover:shadow-lg hover:-translate-y-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-principal focus-visible:ring-offset-2';
const etiqueta = 'mb-3 font-sans text-xs font-bold uppercase tracking-widest text-label-gray';
const tituloTarjeta = '!text-xl md:!text-2xl !leading-tight mb-3 text-balance';
const botonSecundario = 'inline-flex items-center gap-2 py-3 px-5 md:px-6 rounded-xl border-2 border-principal text-principal-texto font-sans font-bold text-base md:text-lg no-underline hover:bg-principal/10 dark:hover:bg-principal/15 transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-principal focus-visible:ring-offset-2';

interface RedProps {
  lang: Language;
}

// Esbozo abstracto del directorio (filas de perfil sin datos), difuminado detrás del botón «Mostrar el directorio»
const EsbozoDirectorio: React.FC = () => (
  <div className="h-full w-full p-6 md:p-8 blur-[3px] opacity-60">
    <div className="mb-6 h-8 w-1/3 rounded-lg bg-secundarios-dark/10 dark:bg-white/10" />
    {Array.from({ length: 8 }, (_, i) => (
      <div key={i} className="flex items-center gap-4 py-3 border-b border-secundarios-dark/10 dark:border-white/10">
        <div className="h-10 w-10 shrink-0 rounded-full bg-principal/25" />
        <div className={`h-3 rounded bg-secundarios-dark/15 dark:bg-white/15 ${['w-32', 'w-40', 'w-28', 'w-36'][i % 4]}`} />
        <div className="hidden md:block h-3 w-24 rounded bg-secundarios-dark/10 dark:bg-white/10" />
        <div className="hidden md:block h-6 w-20 rounded-full bg-principal/15" />
        <div className="ml-auto h-3 w-16 rounded bg-secundarios-dark/10 dark:bg-white/10" />
      </div>
    ))}
  </div>
);

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
            {/* Acción principal de la página: apuntarse al directorio; la secundaria baja a ver quién está */}
            <div className="flex flex-wrap items-center justify-center gap-3 md:gap-4">
              <a href={directorioFormUrl} target="_blank" rel="noopener noreferrer" className={botonPrincipal}>
                {content.heroButton}
                <ArrowUpRight size={20} aria-hidden="true" />
              </a>
              <a href="#personas" className={botonSecundario}>
                {content.heroSecondaryButton}
                <ArrowDown size={20} aria-hidden="true" />
              </a>
            </div>
          </header>

          {/* Directorio público de personas (vista compartida de Airtable), justo tras la cabecera: ver a otras personas es lo que más
              anima a apuntarse. Se carga al pulsar (Airtable guarda cookies); mientras tanto, un esbozo difuminado y la llamada a registrarse */}
          <section id="personas" className="scroll-mt-navbar mt-12 md:mt-20">
            <div className="mx-auto max-w-xl text-center mb-6 md:mb-8">
              <h2 className="!text-2xl md:!text-3xl !leading-tight mb-3 text-balance">{content.membersTitle}</h2>
              <p className="text-balance">{content.membersText}</p>
            </div>
            <div className="mb-4 md:mb-6 flex flex-col md:flex-row items-center justify-between gap-4 md:gap-6 rounded-anthro border-2 border-principal/40 bg-principal/5 dark:bg-principal/10 px-5 py-5 md:px-8 text-center md:text-left">
              <div>
                <p className="!mb-1 font-sans font-bold text-lg md:text-xl text-secundarios-dark dark:text-white text-balance">{content.membersCtaTitle}</p>
                <p className="!mb-0 text-balance">{content.membersCtaText}</p>
              </div>
              <a href={directorioFormUrl} target="_blank" rel="noopener noreferrer" className={`${botonPrincipal} shrink-0`}>
                {content.membersCtaButton}
                <ArrowUpRight size={20} aria-hidden="true" />
              </a>
            </div>
            <EmbedAlPulsar
              lang={lang}
              proveedor="airtable"
              src={directorioEmbedUrl}
              title={content.membersFrameTitle}
              className="h-[533px] md:h-[640px] rounded-anthro border border-secundarios-dark/15 dark:border-white/10 bg-white/30 dark:bg-white/5 overflow-hidden"
              previa={<EsbozoDirectorio />}
            />
          </section>

          <section className="mt-16 md:mt-28">
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

          {/* Cierre: tres formas de entrar en la red, diferenciadas por quién eres. Personas → directorio (acción principal);
              organizaciones → pedir que las añadamos; si no hay nodo cerca → crear una delegación */}
          <section className="mt-16 md:mt-28 grid xl:grid-cols-3 gap-6 max-w-xl mx-auto xl:max-w-none [&>div]:flex [&>div]:flex-col [&>div]:items-center [&>div]:text-center [&>div]:px-5 [&>div]:py-8 md:[&>div]:px-6 [&>div]:rounded-anthro [&>div]:border [&>div]:border-secundarios-dark/10 dark:[&>div]:border-white/10 [&>div]:bg-white/30 dark:[&>div]:bg-white/5">
            <div>
              <span className={etiqueta}>{content.peopleLabel}</span>
              <h2 className={tituloTarjeta}>{content.directoryTitle}</h2>
              <p className="text-balance flex-grow">{content.directoryText}</p>
              <a href={directorioFormUrl} target="_blank" rel="noopener noreferrer" className={botonPrincipal}>
                {content.directoryButton}
                <ArrowUpRight size={20} aria-hidden="true" />
              </a>
              <small className="block mt-3 text-xs font-sans opacity-70 text-balance">
                {content.directoryNote}{' '}
                <a href={content.privacyHref} className="underline underline-offset-2 hover:no-underline">{content.privacyLink}</a>
              </small>
            </div>
            <div>
              <span className={etiqueta}>{content.orgsLabel}</span>
              <h2 className={tituloTarjeta}>{content.orgTitle}</h2>
              <p className="text-balance flex-grow">{content.orgText}</p>
              <a href={content.orgHref} className={botonSecundario}>
                {content.orgButton}
              </a>
              <small className="block mt-3 text-xs font-sans opacity-70 text-balance">{content.orgNote}</small>
            </div>
            <div>
              <span className={etiqueta}>{content.cityLabel}</span>
              <h2 className={tituloTarjeta}>{content.joinTitle}</h2>
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
