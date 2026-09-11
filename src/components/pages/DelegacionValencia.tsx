import React from 'react';
import { Calendar } from 'lucide-react';
import Navbar from '@components/Navbar';
import Footer from '@components/Footer';
import { delegacionValenciaContent, discordInviteUrl, lumaCalendarUrl, valenciaJoinFormUrl } from '@data/delegaciones';

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
          <p className="max-w-2xl mx-auto mb-8 text-secundarios-dark/70 dark:text-secundarios-light/70 text-lg md:text-xl leading-relaxed">
            {content.subtitle}
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={discordInviteUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-xl bg-principal px-8 py-4 text-white font-bold hover:bg-principal/90 transition-all shadow-md w-full sm:w-auto"
            >
              {content.ctaLabel}
            </a>
            <a
              href={valenciaJoinFormUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-full border border-secundarios-dark/20 px-8 py-4 font-sans font-bold text-secundarios-dark dark:text-secundarios-light hover:border-principal hover:text-principal transition-all duration-300 w-full sm:w-auto"
            >
              {content.pillJoin}
            </a>
          </div>
        </section>

        <section className="w-full max-w-3xl mx-auto pb-20 md:pb-32 pt-20 md:pt-28 text-center">
          <div className="font-sans font-bold text-xl md:text-2xl text-secundarios-dark dark:text-secundarios-light mb-6">
            {content.eventsTitle}
          </div>
          <div className="bg-secundarios-gray dark:bg-white/5 rounded-anthro p-10 md:p-14">
            <Calendar className="mx-auto mb-4 text-principal" size={32} />
            <p className="font-serif text-secundarios-dark/80 dark:text-secundarios-light/80 text-lg leading-relaxed mb-4">
              {content.eventsPlaceholder}
            </p>
            <a
              href={lumaCalendarUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="font-sans font-bold text-principal hover:text-principal/80 transition-colors"
            >
              {content.eventsLinkLabel}
            </a>
          </div>
        </section>
      </main>

      <Footer lang={lang} />
    </>
  );
};

export default DelegacionValencia;
