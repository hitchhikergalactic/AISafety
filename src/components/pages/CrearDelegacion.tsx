import React from 'react';
import { Check } from 'lucide-react';
import Navbar from '@components/Navbar';
import Footer from '@components/Footer';
import { crearDelegacionContent, crearDelegacionFormUrl } from '@data/delegaciones';

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
          <h5 className="mb-4 uppercase text-principal">{content.eyebrow}</h5>
          <h2 className="mb-6 leading-tight tracking-tight text-balance">
            <span className="text-secundarios-dark dark:text-secundarios-light">{content.titleDark}</span>{' '}
            <span className="text-principal">{content.titleAccent}</span>
          </h2>
          <p className="max-w-2xl mx-auto text-secundarios-dark/70 dark:text-secundarios-light/70 text-lg md:text-xl leading-relaxed">
            {content.subtitle}
          </p>
          <p className="max-w-2xl mx-auto text-principal font-bold text-lg md:text-xl leading-relaxed">
            {content.subtitleHighlight}
          </p>

          <div className="mt-12 bg-secundarios-gray dark:bg-white/5 rounded-anthro p-6 md:p-12 text-left">
            <div className="mb-10 md:mb-12">
              <div className="font-sans font-bold text-xl md:text-2xl text-secundarios-dark dark:text-secundarios-light mb-6">
                {content.aportesTitle}
              </div>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4">
                {content.aportes.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <Check className="mt-1 shrink-0 text-principal" size={20} />
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
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-principal/15 text-principal font-bold text-sm">
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
              href={crearDelegacionFormUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-xl bg-principal px-8 py-4 text-white font-bold hover:bg-principal/90 transition-all shadow-md"
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
