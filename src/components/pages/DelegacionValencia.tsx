import React from 'react';
import { ArrowRight, ClipboardList, Mail, MessageCircle, Newspaper } from 'lucide-react';
import Navbar from '@components/Navbar';
import ProgramDetails from '@components/ProgramDetails';
import ValenciaAnchorBar from '@components/valencia/ValenciaAnchorBar';
import ValenciaFooter from '@components/valencia/ValenciaFooter';
import EmbedAlPulsar from '@components/EmbedAlPulsar';
import { translations } from '@locales/translations';
import { parseText } from '@utils/parseText';
import ilustracionValencia from '../../assets/valencia-ilustracion.webp';
import {
  delegacionValenciaContent,
  discordInviteUrl,
  lumaAgendaUrl,
  substackUrl,
  valenciaJoinFormUrl,
  valenciaContactEmail,
  valenciaLumaCalendarEmbedUrl,
} from '@data/delegaciones';

type Language = 'es' | 'en';

interface DelegacionValenciaProps {
  lang: Language;
}

const primaryButton =
  'inline-flex items-center justify-center rounded-xl bg-principal px-8 py-4 text-[1.1875rem] text-white font-bold hover:bg-principal/90 transition-all shadow-md w-full md:w-auto md:whitespace-nowrap';

const secondaryButton =
  'inline-flex items-center justify-center rounded-xl border border-secundarios-dark/20 dark:border-secundarios-light/30 px-6 py-2.5 text-sm font-sans font-semibold text-secundarios-dark dark:text-secundarios-light hover:border-principal hover:text-principal transition-all duration-300 w-full md:w-auto md:whitespace-nowrap';

const card =
  'bg-white dark:bg-white/5 rounded-anthro border border-secundarios-dark/15 dark:border-secundarios-light/15 shadow-anthro-subtle';

const sectionTitle = '!font-bold mb-4 text-secundarios-dark dark:text-secundarios-light';

// Mismo panel gris que agrupa el contenido en «Crear una delegación».
const panel = 'bg-secundarios-gray dark:bg-white/5 rounded-anthro';

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

  // Cada programa reutiliza el texto y los detalles ya publicados en el resto del sitio.
  // La biblioteca no lleva bloque de detalles: duración o certificación no aplican.
  const programs = [
    {
      id: 'seminario',
      title: t.seminario.title,
      description: t.upcoming.bluedot.description,
      href: `${langPrefix}/seminario-bluedot-spain`,
      details: t.upcoming.bluedot.details,
    },
    {
      id: 'curso',
      title: t.upcoming.innovation.title,
      description: t.upcoming.innovation.description,
      href: `${langPrefix}/curso-estrategia-agi`,
      details: t.upcoming.innovation.details,
    },
    {
      id: 'biblioteca',
      title: content.libraryTitle,
      description: t.biblioteca.subtitle,
      href: `${langPrefix}/biblioteca-papers`,
      details: null,
    },
  ];

  // Botones de la cabecera: Discord como acción principal y el resto como secundarias.
  const actionButtons = (
    <div className="flex flex-col md:flex-row flex-wrap items-center md:justify-start justify-center gap-3 w-full max-w-sm md:max-w-none mx-auto md:mx-0">
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

  // En «Únete y contacto» las mismas vías se presentan como lista con icono, para no repetir la fila de botones.
  const joinLinks = [
    { href: discordInviteUrl, label: content.discordCtaLabel, Icon: MessageCircle, external: true },
    { href: valenciaJoinFormUrl, label: content.formCtaLabel, Icon: ClipboardList, external: true },
    { href: substackUrl, label: content.newsletterCtaLabel, Icon: Newspaper, external: true },
    { href: `mailto:${valenciaContactEmail}`, label: content.contactCardTitle, detail: valenciaContactEmail, Icon: Mail, external: false },
  ];

  return (
    <>
      <Navbar lang={lang} />

      <main className="pt-36 md:pt-44 px-6 md:px-12 bg-secundarios-light dark:bg-secundarios-dark min-h-screen transition-colors duration-300">
        <section className="w-full max-w-6xl mx-auto pb-12 md:pb-16 grid gap-10 md:gap-14 md:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)] items-center">
          <div className="text-center md:text-left">
            {/* El antetítulo va en mayúsculas, salvo la marca: «iaS» se escribe siempre así. El «·» lleva márgenes
                desiguales porque el espaciado del h5 y el propio glifo lo descentran. */}
            <h5 className="mb-4 uppercase text-principal-texto">
              {content.eyebrow.split(/(iaS| · )/).map((part, i) =>
                part === 'iaS' ? (
                  <span key={i} className="marca-ias">{part}</span>
                ) : part === ' · ' ? (
                  <span key={i} className="ml-1.5 mr-2.5" aria-hidden="true">·</span>
                ) : (
                  part
                )
              )}
            </h5>
            <h1 className="como-h2 mb-6 leading-tight tracking-tight text-balance">
              <span className="text-secundarios-dark dark:text-secundarios-light">{content.titleDark}</span>{' '}
              <span className="text-principal">{content.titleAccent}</span>
            </h1>
            <p className="max-w-xl mx-auto md:mx-0 mb-8 text-secundarios-dark/80 dark:text-secundarios-light/80 text-lg md:text-xl leading-relaxed">
              {content.joinIntro}
            </p>
            {actionButtons}
          </div>

          <img
            src={ilustracionValencia.src}
            width={ilustracionValencia.width}
            height={ilustracionValencia.height}
            alt={content.imageAlt}
            className="order-first md:order-none w-full max-w-[18rem] md:max-w-md mx-auto aspect-square rounded-anthro shadow-anthro-card"
          />
        </section>

        <ValenciaAnchorBar items={anchors} ariaLabel={content.anchorsAriaLabel} />

        {/* Eventos: texto y enlaces a un lado, calendario al otro */}
        <section id="eventos" className="scroll-mt-anchorbar w-full max-w-6xl mx-auto pt-16 md:pt-24">
          <div className={`${panel} p-6 md:p-12 grid gap-8 md:gap-12 md:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)] items-center`}>
            <div className="text-center md:text-left">
              <h3 className={sectionTitle}>{content.eventsTitle}</h3>
              <p className="text-secundarios-dark/80 dark:text-secundarios-light/80">
                {content.eventsContactText}{' '}
                <a href={`mailto:${valenciaContactEmail}`} className="font-sans font-semibold text-principal-texto hover:underline break-words">
                  {valenciaContactEmail}
                </a>
              </p>
              <a href={lumaAgendaUrl} target="_blank" rel="noopener noreferrer" className={`${secondaryButton} mt-2 gap-2`}>
                {content.eventsArchiveLabel}
                <ArrowRight size={16} aria-hidden="true" />
              </a>
            </div>
            <EmbedAlPulsar
              lang={lang}
              proveedor="luma"
              src={valenciaLumaCalendarEmbedUrl}
              title={content.eventsTitle}
              className="w-full h-[450px] overflow-hidden rounded-anthro border border-secundarios-dark/15 bg-white dark:bg-white/5"
            />
          </div>
        </section>

        {/* Programas */}
        <section id="programas" className="scroll-mt-anchorbar w-full max-w-6xl mx-auto pt-20 md:pt-32 text-center">
          <h3 className={sectionTitle}>{content.programsTitle}</h3>
          <p className="max-w-2xl mx-auto mb-10 text-secundarios-dark/80 dark:text-secundarios-light/80">
            {content.programsIntro}
          </p>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 text-left">
            {programs.map((program) => (
              <article key={program.id} className={`${card} flex flex-col p-6 md:p-8 hover:shadow-anthro-card transition-all duration-300`}>
                <h4>{program.title}</h4>
                <p className="flex-grow text-secundarios-dark/80 dark:text-secundarios-light/80">
                  {parseText(program.description)}
                </p>
                {program.details && (
                  <ProgramDetails title={t.upcoming.detailsTitle} rows={program.details} className="mb-6" />
                )}
                <a href={program.href} className={`${secondaryButton} md:w-full`}>
                  {content.programCtaLabel}
                </a>
              </article>
            ))}
          </div>
        </section>

        {/* Sobre nosotros y Únete: un solo panel a dos columnas, como el bloque de «Crear una delegación» */}
        <section className="w-full max-w-6xl mx-auto pt-20 md:pt-32 pb-20 md:pb-32">
          <div className={`${panel} p-6 md:p-12 grid gap-12 md:grid-cols-2 md:gap-16`}>
            <div id="sobre-nosotros" className="scroll-mt-anchorbar">
              <h3 className={sectionTitle}>{content.aboutTitle}</h3>
              <p className="text-secundarios-dark/80 dark:text-secundarios-light/80">{parseText(t.hero.h2)}</p>
              <div className="mt-6 flex flex-col sm:flex-row gap-3">
                <a href={`${langPrefix}/equipo`} className={secondaryButton}>
                  {content.aboutTeamLabel}
                </a>
                <a href={`${langPrefix}/que-hacemos`} className={secondaryButton}>
                  {content.aboutMissionLabel}
                </a>
              </div>
            </div>

            <div id="unete" className="scroll-mt-anchorbar">
              <h3 className={sectionTitle}>{content.joinTitle}</h3>
              <ul className="space-y-3">
                {joinLinks.map(({ href, label, detail, Icon, external }) => (
                  <li key={href}>
                    <a
                      href={href}
                      {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                      className={`${card} group flex items-center gap-4 p-4 hover:shadow-anthro-card hover:border-principal transition-all duration-300`}
                    >
                      <span className="shrink-0 flex h-11 w-11 items-center justify-center rounded-full bg-principal/10 text-principal-texto group-hover:bg-principal group-hover:text-white transition-colors duration-300">
                        <Icon size={20} aria-hidden="true" />
                      </span>
                      <span className="min-w-0 flex-1">
                        <span className="block font-sans font-bold text-secundarios-dark dark:text-secundarios-light">{label}</span>
                        {detail && (
                          <span className="block font-sans text-sm font-semibold text-principal-texto break-words">{detail}</span>
                        )}
                      </span>
                      <ArrowRight size={18} aria-hidden="true" className="shrink-0 text-secundarios-dark/40 dark:text-secundarios-light/40 group-hover:text-principal group-hover:translate-x-0.5 transition-all duration-300" />
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>
      </main>

      <ValenciaFooter lang={lang} />
    </>
  );
};

export default DelegacionValencia;
