import React, { useState } from 'react';
import Navbar from '@components/Navbar';
import Footer from '@components/Footer';
import JoinModal from '@components/JoinModal';
import { translations } from '@locales/translations';
import { visionContent } from '@data/vision';
import { keepBrandCase } from '@utils/keepBrandCase';

type Language = 'es' | 'en';

interface VisionPageProps {
  lang: Language;
  children: React.ReactNode;
}

// Página de un documento fundacional (aisafety.es/vision). Cabecera con migas, sobretítulo, H1 y subtítulo; debajo,
// el documento en Markdown (children, ya renderizado en la compilación) en una columna centrada. Misma estructura
// que la página de visión de Safe AI Netherlands, con los tokens de diseño de iaS.
const VisionPage: React.FC<VisionPageProps> = ({ lang, children }) => {
  const t = translations[lang];
  const content = visionContent[lang];
  const langPrefix = lang === 'es' ? '' : '/en';
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <Navbar lang={lang} />

      <main className="bg-secundarios-light dark:bg-secundarios-dark min-h-screen transition-colors duration-300">
        <header className="pt-36 pb-16 md:pt-44 md:pb-20 px-6 md:px-12 lg:px-8 bg-secundarios-gray/50 dark:bg-white/5">
          <div className="mx-auto w-full max-w-7xl">
            <div className="max-w-3xl">
              <nav
                aria-label="breadcrumb"
                className="mb-6 flex items-center gap-2 font-sans text-sm font-semibold text-secundarios-dark/50 dark:text-secundarios-light/50"
              >
                <a href={`${langPrefix}/que-hacemos`} className="hover:text-principal transition-colors">
                  {content.breadcrumbParent}
                </a>
                <span>/</span>
                <span className="text-secundarios-dark dark:text-secundarios-light">{content.breadcrumbCurrent}</span>
              </nav>

              <p className="!mb-3 !font-sans !text-sm !font-semibold uppercase tracking-widest text-principal">
                {keepBrandCase(content.eyebrow)}
              </p>
              <h1 className="!mb-6 !text-5xl !leading-none !font-extrabold text-secundarios-dark dark:text-secundarios-light">
                {content.title}
              </h1>
              <p className="!mb-0 max-w-2xl !text-lg !leading-relaxed text-secundarios-dark/70 dark:text-secundarios-light/70">
                {content.subtitle}
              </p>
            </div>
          </div>
        </header>

        <div className="px-6 md:px-12 lg:px-8 py-20">
          <div className="mx-auto max-w-3xl">
            <article className="doc-prose">{children}</article>
          </div>
        </div>
      </main>

      <JoinModal
        isOpen={showModal}
        onClose={() => setShowModal(false)}
        lang={lang}
        title={t.subscribe.title}
        subtitle={t.subscribe.subtitle}
        action="https://script.google.com/macros/s/AKfycbwYyiRXPZdeFNO1ybtrnd5xa9ndfNvIfXr-e7rF0HsfKcz4eWckOsswSD9yoEO_87w63g/exec"
        subject="Nuevo suscriptor desde Visión"
        successMessage={lang === 'es' ? 'Te hemos registrado correctamente.' : 'You have been successfully registered.'}
      />

      <Footer lang={lang} onSubscribeClick={() => setShowModal(true)} />
    </>
  );
};

export default VisionPage;
