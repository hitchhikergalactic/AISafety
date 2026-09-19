import React from 'react';
import { LuMail } from 'react-icons/lu';
import Navbar from '@components/Navbar';
import ProgramDetails from '@components/ProgramDetails';
import ValenciaAnchorBar from '@components/valencia/ValenciaAnchorBar';
import ValenciaFooter from '@components/valencia/ValenciaFooter';
import { translations } from '@locales/translations';
import { parseText } from '@utils/parseText';
import {
  contactEmail,
  delegacionValenciaContent,
  discordInviteUrl,
  lumaAgendaUrl,
  substackUrl,
  valenciaJoinFormUrl,
  valenciaLumaCalendarEmbedUrl,
} from '@data/delegaciones';

type Language = 'es' | 'en';

interface DelegacionValenciaProps {
  lang: Language;
}

const primaryButton =
  'inline-flex items-center justify-center rounded-xl bg-principal px-8 py-4 text-lg text-white font-bold hover:bg-principal/90 transition-all shadow-md w-full md:w-auto md:whitespace-nowrap';

const secondaryButton =
  'inline-flex items-center justify-center rounded-xl border border-secundarios-dark/20 dark:border-secundarios-light/30 px-6 py-2.5 text-sm font-sans font-semibold text-secundarios-dark dark:text-secundarios-light hover:border-principal hover:text-principal transition-all duration-300 w-full md:w-auto md:whitespace-nowrap';

const card =
  'bg-white dark:bg-white/5 rounded-anthro border border-secundarios-dark/15 dark:border-secundarios-light/15 shadow-anthro-subtle';

const sectionTitle = '!font-bold mb-4 text-secundarios-dark dark:text-secundarios-light';

const DelegacionValencia: React.FC<DelegacionValenciaProps> = ({ lang }) => {
  const content = delegacionValenciaContent[lang];
  const t = translations[lang];
  const langPrefix = lang === 'es' ? '' : '/en';

  const anchors = [
    { id: 'eventos', label: content.anchors.eventos },
    { id: 'programas', label: content.anchors.programas },
    { id: 'sobre-nosotros', label: content.anchors.sobreNosotros },
    { id: 'unete', label: content.anchors.unete },
  ];

  const detailRows = [
    content.programDetailLabels.duration,
    content.programDetailLabels.workload,
    content.programDetailLabels.format,
    content.programDetailLabels.certification,
    content.programDetailLabels.selection,
  ].map((label) => ({ label, value: content.programDetailPending }));

  // Cada programa reutiliza el texto ya publicado en el resto del sitio.
  // Los detalles (duración, carga...) solo se muestran en los programas con cohorte o calendario propio.
  const programs = [
    {
      id: 'seminario',
      title: t.seminario.title,
      description: t.upcoming.bluedot.description,
      href: `${langPrefix}/seminario-bluedot-spain`,
      hasDetails: true,
    },
    {
      id: 'curso',
      title: t.upcoming.innovation.title,
      description: t.upcoming.innovation.description,
      href: `${langPrefix}/curso-estrategia-agi`,
      hasDetails: true,
    },
    {
      id: 'biblioteca',
      title: content.libraryTitle,
      description: t.biblioteca.subtitle,
      href: `${langPrefix}/biblioteca-papers`,
      hasDetails: false,
    },
  ];

  const actionButtons = (
    <div className="flex flex-col md:flex-row items-center justify-center gap-3 md:gap-4 w-full max-w-sm md:max-w-none mx-auto">
      <a href={discordInviteUrl} target="_blank" rel="noopener noreferrer" className={primaryButton}>
        {content.discordCtaLabel}
      </a>
      <a href={valenciaJoinFormUrl} target="_blank" rel="noopener noreferrer" className={secondaryButton}>
        {content.formCtaLabel}
      </a>
      <a href={substackUrl} target="_blank" rel="noopener noreferrer" className={secondaryButton}>
        {content.newsletterCtaLabel}
      </a>
    </div>
  );

  return (
    <>
      <Navbar lang={lang} />

      <main className="pt-36 md:pt-44 px-6 md:px-12 bg-secundarios-light dark:bg-secundarios-dark min-h-screen transition-colors duration-300">
        <section className="w-full max-w-5xl mx-auto text-center pb-10 md:pb-14">
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

          {actionButtons}
        </section>

        <ValenciaAnchorBar items={anchors} ariaLabel={content.anchorsAriaLabel} />

        {/* Eventos */}
        <section id="eventos" className="scroll-mt-anchorbar w-full max-w-3xl mx-auto pt-16 md:pt-24 text-center">
          <h3 className={sectionTitle}>{content.eventsTitle}</h3>
          <div className="bg-secundarios-gray dark:bg-white/5 rounded-anthro p-4 md:p-10 flex justify-center">
            <iframe
              src={valenciaLumaCalendarEmbedUrl}
              width="600"
              height="450"
              frameBorder="0"
              allowFullScreen
              aria-hidden="false"
              tabIndex={0}
              title={content.eventsTitle}
              className="w-full max-w-[600px] h-[450px] rounded-anthro border border-secundarios-dark/15"
            />
          </div>
          <div className="mt-6 flex flex-col items-center gap-3">
            <a href={lumaAgendaUrl} target="_blank" rel="noopener noreferrer" className={`${secondaryButton} md:w-auto`}>
              {content.eventsArchiveLabel}
            </a>
            <p className="!mb-0 text-secundarios-dark/70 dark:text-secundarios-light/70">
              {content.eventsContactText}{' '}
              <a href={`mailto:${contactEmail}`} className="font-sans font-semibold text-principal hover:underline">
                {contactEmail}
              </a>
            </p>
          </div>
        </section>

        {/* Programas */}
        <section id="programas" className="scroll-mt-anchorbar w-full max-w-5xl mx-auto pt-20 md:pt-32 text-center">
          <h3 className={sectionTitle}>{content.programsTitle}</h3>
          <p className="max-w-2xl mx-auto mb-10 text-secundarios-dark/70 dark:text-secundarios-light/70">
            {content.programsIntro}
          </p>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 text-left">
            {programs.map((program) => (
              <article key={program.id} className={`${card} flex flex-col p-6 md:p-8 hover:shadow-anthro-card transition-all duration-300`}>
                <h4>{program.title}</h4>
                <p className="flex-grow text-secundarios-dark/80 dark:text-secundarios-light/80">
                  {parseText(program.description)}
                </p>
                {program.hasDetails && (
                  <ProgramDetails
                    title={content.programDetailsCaption}
                    rows={detailRows}
                    showTitle={false}
                    className="mb-6"
                  />
                )}
                <a href={program.href} className={`${secondaryButton} md:w-full`}>
                  {content.programCtaLabel}
                </a>
              </article>
            ))}
          </div>
        </section>

        {/* Sobre nosotros */}
        <section id="sobre-nosotros" className="scroll-mt-anchorbar w-full max-w-3xl mx-auto pt-20 md:pt-32 text-center">
          <h3 className={sectionTitle}>{content.aboutTitle}</h3>
          <p className="text-secundarios-dark/80 dark:text-secundarios-light/80">{parseText(t.hero.h2)}</p>
          <div className="mt-6 flex flex-col md:flex-row items-center justify-center gap-3 md:gap-4 w-full max-w-sm md:max-w-none mx-auto">
            <a href={`${langPrefix}/equipo`} className={secondaryButton}>
              {content.aboutTeamLabel}
            </a>
            <a href={`${langPrefix}/que-hacemos`} className={secondaryButton}>
              {content.aboutMissionLabel}
            </a>
          </div>
        </section>

        {/* Únete y contacto */}
        <section id="unete" className="scroll-mt-anchorbar w-full max-w-3xl mx-auto pt-20 md:pt-32 pb-20 md:pb-32 text-center">
          <h3 className={sectionTitle}>{content.joinTitle}</h3>
          <p className="mb-8 text-secundarios-dark/80 dark:text-secundarios-light/80">{content.joinIntro}</p>
          {actionButtons}
          <a
            href={`mailto:${contactEmail}`}
            className={`${card} mt-10 mx-auto max-w-md flex items-center gap-4 p-6 text-left hover:shadow-anthro-card hover:border-principal transition-all duration-300`}
          >
            <span className="shrink-0 flex h-12 w-12 items-center justify-center rounded-anthro bg-principal/10 text-principal">
              <LuMail size={24} aria-hidden="true" />
            </span>
            <span className="min-w-0">
              <span className="block font-sans font-bold text-lg text-secundarios-dark dark:text-secundarios-light">
                {content.contactCardTitle}
              </span>
              <span className="block font-sans text-sm text-secundarios-dark/70 dark:text-secundarios-light/70 break-words">
                {content.contactCardText}
              </span>
              <span className="block font-sans text-sm font-semibold text-principal break-words">{contactEmail}</span>
            </span>
          </a>
        </section>
      </main>

      <ValenciaFooter lang={lang} />
    </>
  );
};

export default DelegacionValencia;
