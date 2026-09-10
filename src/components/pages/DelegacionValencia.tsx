import React from 'react';
import Navbar from '@components/Navbar';
import Footer from '@components/Footer';
import { delegacionValenciaContent, discordInviteUrl } from '@data/delegaciones';

type Language = 'es' | 'en';

interface DelegacionValenciaProps {
  lang: Language;
}

const DelegacionValencia: React.FC<DelegacionValenciaProps> = ({ lang }) => {
  const content = delegacionValenciaContent[lang];

  return (
    <>
      <Navbar lang={lang} />

      <main className="pt-36 md:pt-44 px-6 md:px-12 bg-secundarios-light dark:bg-secundarios-dark min-h-screen transition-colors duration-300">
        <section className="w-full max-w-5xl mx-auto pb-20 md:pb-32 text-center">
          <h2 className="mb-10 leading-tight tracking-tight text-balance text-secundarios-dark dark:text-secundarios-light">
            {content.title}
          </h2>

          <a
            href={discordInviteUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-xl bg-principal px-8 py-4 text-white font-bold hover:bg-principal/90 transition-all shadow-md"
          >
            {content.ctaLabel}
          </a>
        </section>
      </main>

      <Footer lang={lang} />
    </>
  );
};

export default DelegacionValencia;
