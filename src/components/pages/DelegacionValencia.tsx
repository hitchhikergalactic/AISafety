import React from 'react';
import Navbar from '@components/Navbar';
import Footer from '@components/Footer';
import { delegacionValenciaContent, discordInviteUrl, valenciaLumaCalendarEmbedUrl, valenciaJoinFormUrl } from '@data/delegaciones';

type Language = 'es' | 'en';

interface DelegacionValenciaProps {
  lang: Language;
}

const DelegacionValencia: React.FC<DelegacionValenciaProps> = ({ lang }) => {
  const content = delegacionValenciaContent[lang];
  const langPrefix = lang === 'es' ? '' : '/en';

  return (
    <>
      <Navbar lang={lang} />

      <main className="pt-36 md:pt-44 px-6 md:px-12 bg-secundarios-light dark:bg-secundarios-dark min-h-screen transition-colors duration-300">
        <section className="w-full max-w-5xl mx-auto text-center">
          <nav aria-label="breadcrumb" className="mb-6 flex items-center justify-center gap-2 font-sans text-sm font-semibold text-secundarios-dark/50 dark:text-secundarios-light/50">
            <a href={langPrefix || '/'} className="hover:text-principal transition-colors">iaS</a>
            <span>/</span>
            <span className="text-secundarios-dark dark:text-secundarios-light">{content.breadcrumbCurrent}</span>
          </nav>

          <h2 className="mb-4 leading-tight tracking-tight text-balance text-secundarios-dark dark:text-secundarios-light">
            {content.title}
          </h2>
          <p className="max-w-2xl mx-auto mb-3 text-secundarios-dark/70 dark:text-secundarios-light/70 text-lg md:text-xl leading-relaxed">
            {content.subtitle}
          </p>

          <a
            href={discordInviteUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mb-8 inline-block font-sans text-sm font-semibold text-secundarios-dark/70 dark:text-secundarios-light/70 underline underline-offset-2 hover:text-principal transition-colors"
          >
            {content.discordLinkLabel}
          </a>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={valenciaJoinFormUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-xl bg-principal px-10 py-5 text-lg text-white font-bold hover:bg-principal/90 transition-all shadow-md w-full sm:w-auto"
            >
              {content.formCtaLabel}
            </a>
            <a
              href={discordInviteUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-xl border border-secundarios-dark/20 px-6 py-3 text-sm font-sans font-bold text-secundarios-dark dark:text-secundarios-light hover:border-principal hover:text-principal transition-all duration-300 w-full sm:w-auto"
            >
              {content.discordCtaLabel}
            </a>
          </div>
        </section>

        <section className="w-full max-w-3xl mx-auto pb-20 md:pb-32 pt-20 md:pt-28 text-center">
          <div className="font-sans font-bold text-xl md:text-2xl text-secundarios-dark dark:text-secundarios-light mb-6">
            {content.eventsTitle}
          </div>
          <div className="bg-secundarios-gray dark:bg-white/5 rounded-anthro p-6 md:p-10 flex justify-center">
            <iframe
              src={valenciaLumaCalendarEmbedUrl}
              width="600"
              height="450"
              frameBorder="0"
              style={{ border: '1px solid #bfcbda88', borderRadius: '4px' }}
              allowFullScreen
              aria-hidden="false"
              tabIndex={0}
              title={content.eventsTitle}
              className="w-full max-w-[600px] h-[450px]"
            />
          </div>
        </section>
      </main>

      <Footer lang={lang} />
    </>
  );
};

export default DelegacionValencia;
