import React from 'react';
import Navbar from '@components/Navbar';
import Footer from '@components/Footer';
import { cursoEstrategiaAgiContent } from '@data/cursoEstrategiaAgi';
import { parseText } from '@utils/parseText';

type Language = 'es' | 'en';

interface CursoEstrategiaAgiProps {
  lang: Language;
}

const CursoEstrategiaAgi: React.FC<CursoEstrategiaAgiProps> = ({ lang }) => {
  const content = cursoEstrategiaAgiContent[lang];

  return (
    <>
      <Navbar lang={lang} />

      <main className="pt-36 md:pt-44 px-6 md:px-12 lg:px-8 bg-secundarios-light dark:bg-secundarios-dark min-h-screen transition-colors duration-300">
        <section className="w-full max-w-7xl mx-auto pt-30 md:pt-0 pb-20 md:pb-32">
          <div className="max-w-3xl text-left">
            <h5 className="mb-4 uppercase text-principal">{content.eyebrow}</h5>
            <h2 className="mb-8 leading-tight tracking-tight text-balance">
              {content.pageTitle}
            </h2>
            <p className="bajadapages mb-8 text-secundarios-dark/80 dark:text-secundarios-light/80 leading-relaxed">
              {parseText(content.heroText)}
            </p>

            <div className="mb-8">
              <h5 className="!text-principal texto-medium !font-bold mb-3">{content.whyTitle}</h5>
              <p className="text-secundarios-dark/80 dark:text-secundarios-light/80 leading-relaxed">
                {parseText(content.whyText)}
              </p>
            </div>

            <div className="mb-8">
              <h5 className="!text-principal texto-medium !font-bold mb-3">{content.listTitle}</h5>
              <ul className="space-y-3 text-secundarios-dark/80 dark:text-secundarios-light/80 leading-relaxed font-serif">
                {content.items.map((item) => (
                  <li key={item}>• {item}</li>
                ))}
              </ul>
            </div>

            <p className="text-secundarios-dark/80 dark:text-secundarios-light/80 leading-relaxed">
              {parseText(content.note)}
            </p>

            <div className="mt-10 rounded-xl border border-secundarios-dark/10 bg-white/70 p-6 shadow-sm dark:border-white/10 dark:bg-white/5">
              <h5 className="!text-principal texto-medium !font-bold mb-3">{content.formTitle}</h5>
              <p className="mb-2 text-sm text-secundarios-dark/80 dark:text-secundarios-light/80 leading-relaxed">
                {content.formDescription}
              </p>
              <a
                href="https://form.jotform.com/262144003863046"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-xl bg-principal px-6 py-4 text-sm font-semibold text-white transition hover:-translate-y-0.5"
              >
                {content.formButtonLabel}
              </a>

            </div>

          </div>
        </section>
      </main>

      <Footer lang={lang} />
    </>
  );
};

export default CursoEstrategiaAgi;