import React from 'react';
import { Check } from 'lucide-react';
import Navbar from '@components/Navbar';
import Footer from '@components/Footer';
import { crearDelegacionContent, crearDelegacionMailto } from '@data/delegaciones';
import ilustracionReunion from '../../assets/delegacion-reunion.webp';
import ilustracionReunionMovil from '../../assets/delegacion-reunion-movil.webp';

type Language = 'es' | 'en';

interface CrearDelegacionProps {
  lang: Language;
}

const CrearDelegacion: React.FC<CrearDelegacionProps> = ({ lang }) => {
  const content = crearDelegacionContent[lang];

  return (
    <>
      <Navbar lang={lang} />

      <main className="pt-36 md:pt-44 px-6 md:px-12 bg-secundarios-light dark:bg-secundarios-dark min-h-screen transition-colors duration-300">
        <section className="w-full max-w-5xl mx-auto pb-20 md:pb-32 text-center">
          <h5 className="mb-4 uppercase text-principal-texto">{content.eyebrow}</h5>
          <h1 className="como-h2 mb-6 leading-tight tracking-tight text-balance">
            <span className="text-secundarios-dark dark:text-secundarios-light">{content.titleDark}</span>{' '}
            <span className="text-principal">{content.titleAccent}</span>
          </h1>
          <p className="max-w-2xl mx-auto text-secundarios-dark/80 dark:text-secundarios-light/80 text-lg md:text-xl leading-relaxed">
            {content.subtitle}
          </p>
          <p className="max-w-2xl mx-auto text-principal-texto font-bold text-lg md:text-xl leading-relaxed">
            {content.subtitleHighlight}
          </p>

          {/* En móvil, recorte más cerrado sobre la mesa para que las personas no queden diminutas */}
          <picture>
            <source
              media="(max-width: 767px)"
              srcSet={ilustracionReunionMovil.src}
              width={ilustracionReunionMovil.width}
              height={ilustracionReunionMovil.height}
            />
            <img
              src={ilustracionReunion.src}
              width={ilustracionReunion.width}
              height={ilustracionReunion.height}
              alt={content.imageAlt}
              loading="lazy"
              decoding="async"
              className="mt-12 w-full h-auto rounded-anthro shadow-anthro-card"
            />
          </picture>

          <div className="mt-12 bg-secundarios-gray dark:bg-white/5 rounded-anthro p-6 md:p-12 text-left">
            <div className="mb-10 md:mb-12">
              <div className="font-sans font-bold text-xl md:text-2xl text-secundarios-dark dark:text-secundarios-light mb-6">
                {content.aportesTitle}
              </div>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4">
                {content.aportes.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <Check className="mt-1 shrink-0 text-principal-texto" size={20} />
                    <span className="font-serif text-secundarios-dark/90 dark:text-secundarios-light/90">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <div className="font-sans font-bold text-xl md:text-2xl text-secundarios-dark dark:text-secundarios-light mb-6">
                {content.pasosTitle}
              </div>
              <ol className="space-y-4">
                {content.pasos.map((item, idx) => (
                  <li key={item} className="flex items-start gap-4">
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-principal/15 text-principal-texto font-bold text-sm">
                      {idx + 1}
                    </span>
                    <span className="font-serif pt-0.5 text-secundarios-dark/90 dark:text-secundarios-light/90">
                      {item}
                    </span>
                  </li>
                ))}
              </ol>
            </div>
          </div>

          <div className="mt-12">
            <a
              href={crearDelegacionMailto}
              className="inline-flex items-center justify-center rounded-xl bg-principal px-8 py-4 text-[1.1875rem] text-white font-bold hover:bg-principal/90 transition-all shadow-md"
            >
              {content.ctaLabel}
            </a>
          </div>
        </section>
      </main>

      <Footer lang={lang} />
    </>
  );
};

export default CrearDelegacion;
