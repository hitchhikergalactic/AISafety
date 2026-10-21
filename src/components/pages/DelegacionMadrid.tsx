import React, { useEffect, useRef, useState } from 'react';
import { ArrowRight, ClipboardList, Landmark, Mail, MapPin, MessageCircle, Newspaper, Pause, Play, Plus } from 'lucide-react';
import Navbar from '@components/Navbar';
import ProgramDetails from '@components/ProgramDetails';
import ValenciaAnchorBar from '@components/valencia/ValenciaAnchorBar';
import ValenciaFooter from '@components/valencia/ValenciaFooter';
import { translations } from '@locales/translations';
import { parseText } from '@utils/parseText';
import { cortarCorreo } from '@utils/cortarCorreo';
import ilustracionMadrid from '../../assets/madrid-ilustracion.webp';
import fotoPublico from '../../assets/madrid/primer-evento-publico.webp';
import fotoBluedot from '../../assets/madrid/primer-evento-bluedot.webp';
import fotoDavid from '../../assets/madrid/primer-evento-david.webp';
import fotoGuillem from '../../assets/madrid/primer-evento-guillem.webp';
import fotoSorteo from '../../assets/madrid/primer-evento-sorteo.webp';
import fotoGrupo from '../../assets/madrid/primer-evento-grupo.webp';
import { miembrosEquipo } from '@data/equipo';
import {
  delegacionMadridContent,
  delegacionesSublinks,
  discordInviteUrl,
  hubsAliados,
  lumaAgendaUrl,
  madridContactEmail,
  madridFooterColumns,
  madridJoinFormUrl,
  substackUrl,
} from '@data/delegaciones';

type Language = 'es' | 'en';

interface DelegacionMadridProps {
  lang: Language;
}

// Mismos estilos que la página de Valencia, para que la sede y las delegaciones se lean como una sola red.
const primaryButton =
  'inline-flex items-center justify-center rounded-xl bg-principal px-8 py-4 text-[1.1875rem] text-white font-bold hover:bg-principal/90 transition-all shadow-md w-full md:w-auto md:whitespace-nowrap';

const secondaryButton =
  'inline-flex items-center justify-center rounded-xl border border-secundarios-dark/20 dark:border-secundarios-light/30 px-6 py-2.5 text-sm font-sans font-semibold text-secundarios-dark dark:text-secundarios-light hover:border-principal hover:text-principal transition-all duration-300 w-full md:w-auto md:whitespace-nowrap';

const card =
  'bg-white dark:bg-white/5 rounded-anthro border border-secundarios-dark/15 dark:border-secundarios-light/15 shadow-anthro-subtle';

const sectionTitle = '!font-bold mb-4 text-secundarios-dark dark:text-secundarios-light';

const panel = 'bg-secundarios-gray dark:bg-white/5 rounded-anthro';

const columnTitle = '!text-xs !font-bold uppercase !tracking-widest !mb-4 text-secundarios-dark/70 dark:text-secundarios-light/70';

const iconCircle =
  'shrink-0 flex h-11 w-11 items-center justify-center rounded-full bg-principal/10 text-principal-texto group-hover:bg-principal group-hover:text-white transition-colors duration-300';

const iniciales = (nombre: string) =>
  nombre.split(' ').map((p) => p[0]).slice(0, 2).join('');

// Equipo de la sede: dirección primero y después coordinación, en el orden de /equipo.
const equipoSede = [
  ...miembrosEquipo.filter((m) => m.grupo === 'direccion'),
  ...miembrosEquipo.filter((m) => m.grupo === 'coordinacion'),
];

// Fotos del primer evento presencial (28/04/2026, Celonis Madrid; Luma h54rmkib). El pie de cada una está en los textos de la página.
// Se muestran en una cinta que va de un extremo al otro y vuelve (ver .cinta en global.css), cada foto una sola vez,
// todas a la misma altura y sin recortar.
// La foto de grupo va aparte, fija y grande, como cierre del bloque.
const fotosPrimerEvento = [
  { id: 'publico', img: fotoPublico },
  { id: 'bluedot', img: fotoBluedot },
  { id: 'david', img: fotoDavid },
  { id: 'guillem', img: fotoGuillem },
  { id: 'sorteo', img: fotoSorteo },
] as const;

const DelegacionMadrid: React.FC<DelegacionMadridProps> = ({ lang }) => {
  const content = delegacionMadridContent[lang];

  // La cinta se desplaza justo lo que sobresale de su contenedor; se recalcula al cambiar el tamaño de la ventana.
  const cintaRef = useRef<HTMLDivElement>(null);
  const [cintaPausada, setCintaPausada] = useState(false);
  useEffect(() => {
    const cinta = cintaRef.current;
    const pista = cinta?.firstElementChild as HTMLElement | null;
    if (!cinta || !pista) return;
    const medir = () => {
      const recorrido = Math.max(0, pista.scrollWidth - cinta.clientWidth);
      cinta.style.setProperty('--cinta-recorrido', `${recorrido}px`);
      // Ida y vuelta a ~45 px/s; el 20 % del ciclo son las pausas en los extremos (ver @keyframes cinta).
      cinta.style.setProperty('--cinta-duracion', `${Math.max(12, (2 * recorrido) / 45 / 0.8)}s`);
    };
    medir();
    const observer = new ResizeObserver(medir);
    observer.observe(cinta);
    observer.observe(pista);
    return () => observer.disconnect();
  }, []);
  const t = translations[lang];
  const langPrefix = lang === 'es' ? '' : '/en';

  // Delegaciones del menú, sin la propia sede: así una delegación nueva aparece aquí sola al añadirla al menú.
  const sublinks = delegacionesSublinks[lang].flatMap((l) => (l.separator ? [] : [l]));
  const delegaciones = sublinks.filter((l) => l.icon !== 'sede' && !l.highlight);
  const crearDelegacion = sublinks.find((l) => l.highlight);

  const anchors = [
    { id: 'red', label: content.anchors.red },
    { id: 'eventos', label: content.anchors.eventos },
    { id: 'programas', label: content.anchors.programas },
    { id: 'equipo', label: content.anchors.equipo },
    { id: 'unete', label: content.anchors.unete },
  ];

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

  const joinLinks = [
    { href: discordInviteUrl, label: content.discordCtaLabel, Icon: MessageCircle, external: true },
    { href: madridJoinFormUrl, label: content.formCtaLabel, Icon: ClipboardList, external: true },
    { href: substackUrl, label: content.newsletterCtaLabel, Icon: Newspaper, external: true },
    { href: `mailto:${madridContactEmail}`, label: content.contactCardTitle, detail: madridContactEmail, Icon: Mail, external: false },
  ];

  return (
    <>
      <Navbar lang={lang} />

      <main className="pt-36 md:pt-44 px-6 md:px-12 bg-secundarios-light dark:bg-secundarios-dark min-h-screen transition-colors duration-300">
        <section className="w-full max-w-6xl mx-auto pb-12 md:pb-16 grid grid-cols-1 gap-10 md:gap-14 md:grid-cols-2 items-center">
          <div className="text-center md:text-left">
            {/* Mismo antetítulo que Valencia, pero con «Sede»: es lo que la distingue de las delegaciones. */}
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
              {content.intro}
            </p>
            <div className="flex flex-col md:flex-row flex-wrap items-center md:justify-start justify-center gap-3 w-full max-w-sm md:max-w-none mx-auto md:mx-0">
              <a href={discordInviteUrl} target="_blank" rel="noopener noreferrer" className={primaryButton}>
                {content.discordCtaLabel}
              </a>
              <a href={`#red`} className={secondaryButton}>
                {content.networkTitle}
              </a>
            </div>
          </div>

          {/* La ilustración es apaisada (con el «Hola Madrid» dentro), a diferencia del cuadrado de Valencia. */}
          <img
            src={ilustracionMadrid.src}
            width={ilustracionMadrid.width}
            height={ilustracionMadrid.height}
            alt={content.imageAlt}
            className="order-first md:order-none w-full max-w-md md:max-w-none mx-auto rounded-anthro shadow-anthro-card"
          />
        </section>

        <ValenciaAnchorBar items={anchors} ariaLabel={content.anchorsAriaLabel} />

        {/* La red: la sede arriba y, colgando de ella, las delegaciones y los hubs aliados */}
        <section id="red" className="scroll-mt-anchorbar w-full max-w-6xl mx-auto pt-16 md:pt-24 text-center">
          <h3 className={sectionTitle}>{content.networkTitle}</h3>
          <p className="max-w-2xl mx-auto mb-10 text-secundarios-dark/80 dark:text-secundarios-light/80">
            {content.networkIntro}
          </p>

          <div className={`${panel} p-6 md:p-12`}>
            <div className="max-w-md mx-auto flex items-center gap-4 rounded-anthro bg-principal p-5 md:p-6 text-left text-white shadow-anthro-card">
              <span className="shrink-0 flex h-14 w-14 items-center justify-center rounded-full bg-white/20">
                <Landmark size={26} aria-hidden="true" />
              </span>
              <span className="min-w-0">
                <span className="block font-sans text-xs font-bold uppercase tracking-widest">{content.hqBadge}</span>
                <span className="block font-sans text-2xl font-bold leading-tight">
                  <span className="marca-ias">iaS</span> Madrid
                </span>
                <span className="block font-sans text-base font-semibold">{content.hqText}</span>
              </span>
            </div>

            {/* Línea que une la sede con sus nodos */}
            <div className="mx-auto h-10 w-0.5 bg-principal/40" aria-hidden="true" />

            <div className="grid grid-cols-1 gap-10 md:grid-cols-2 md:gap-8 text-left border-t-2 border-principal/40 pt-8">
              <div>
                <h5 className={columnTitle}>{content.chaptersTitle}</h5>
                <ul className="space-y-3">
                  {delegaciones.map((d) => (
                    <li key={d.path}>
                      <a href={`${langPrefix}${d.path}`} className={`${card} group flex items-center gap-4 p-4 hover:shadow-anthro-card hover:border-principal transition-all duration-300`}>
                        <span className={iconCircle}>
                          <MapPin size={20} aria-hidden="true" />
                        </span>
                        <span className="min-w-0 flex-1">
                          <span className="block font-sans font-bold text-secundarios-dark dark:text-secundarios-light">{d.label}</span>
                          {d.description && (
                            <span className="block font-sans text-sm text-secundarios-dark/70 dark:text-secundarios-light/70">{d.description}</span>
                          )}
                        </span>
                        <ArrowRight size={18} aria-hidden="true" className="shrink-0 text-secundarios-dark/40 dark:text-secundarios-light/40 group-hover:text-principal transition-colors duration-300" />
                      </a>
                    </li>
                  ))}
                  {crearDelegacion && (
                    <li>
                      <a href={`${langPrefix}${crearDelegacion.path}`} className="group flex items-center gap-4 p-4 rounded-anthro border-2 border-dashed border-principal/50 hover:border-principal hover:bg-principal/5 transition-all duration-300">
                        <span className={iconCircle}>
                          <Plus size={20} aria-hidden="true" />
                        </span>
                        <span className="min-w-0 flex-1">
                          <span className="block font-sans font-bold text-principal-texto">{crearDelegacion.label}</span>
                          {crearDelegacion.description && (
                            <span className="block font-sans text-sm text-secundarios-dark/70 dark:text-secundarios-light/70">{crearDelegacion.description}</span>
                          )}
                        </span>
                      </a>
                    </li>
                  )}
                </ul>
              </div>

              <div>
                <h5 className={columnTitle}>{content.hubsTitle}</h5>
                <ul className="space-y-3">
                  {hubsAliados.map((hub) => (
                    <li key={hub.href}>
                      <a href={hub.href} target="_blank" rel="noopener noreferrer" className={`${card} group flex items-center gap-4 p-4 hover:shadow-anthro-card hover:border-principal transition-all duration-300`}>
                        <span className="min-w-0 flex-1">
                          <span className="block font-sans font-bold text-secundarios-dark dark:text-secundarios-light">{hub.name}</span>
                          <span className="block font-sans text-sm text-secundarios-dark/70 dark:text-secundarios-light/70">{hub.place[lang]}</span>
                        </span>
                        <ArrowRight size={18} aria-hidden="true" className="shrink-0 -rotate-45 text-secundarios-dark/40 dark:text-secundarios-light/40 group-hover:text-principal transition-colors duration-300" />
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Eventos: la sede usa el calendario general de iaS en Luma, que no tiene versión embebible en el repo */}
        <section id="eventos" className="scroll-mt-anchorbar w-full max-w-6xl mx-auto pt-20 md:pt-32">
          <div className={`${panel} p-6 md:p-12 text-center`}>
            <h3 className={sectionTitle}>{content.eventsTitle}</h3>
            <p className="max-w-2xl mx-auto text-secundarios-dark/80 dark:text-secundarios-light/80">
              {content.eventsText} {content.eventsContactText}{' '}
              <a href={`mailto:${madridContactEmail}`} className="font-sans font-semibold text-principal-texto hover:underline break-words">
                {madridContactEmail}
              </a>
            </p>
            <a href={lumaAgendaUrl} target="_blank" rel="noopener noreferrer" className={`${primaryButton} mt-4 gap-2`}>
              {content.eventsArchiveLabel}
              <ArrowRight size={18} aria-hidden="true" />
            </a>
          </div>

          {/* Galería: fotos reales de la sede, para que se vea que hay gente detrás */}
          <div className="mt-16 md:mt-20 text-center">
            <h4 className="!mb-2 text-secundarios-dark dark:text-secundarios-light">{content.galleryTitle}</h4>
            <p className="mb-4 font-sans text-sm font-semibold text-principal-texto">{content.galleryMeta}</p>
            <p className="max-w-2xl mx-auto mb-8 text-lg md:text-xl text-secundarios-dark dark:text-secundarios-light">{content.galleryLead}</p>
            {/* Lo más destacado del evento en tres piezas cortas, en vez de un párrafo largo */}
            <ul className="grid grid-cols-1 gap-4 md:grid-cols-3 mb-10 text-left">
              {content.galleryHighlights.map(({ label, text }) => (
                <li key={label} className={`${card} p-5`}>
                  <span className="block mb-2 font-sans text-xs font-bold uppercase tracking-widest text-principal-texto">{label}</span>
                  <span className="block font-sans text-base leading-snug text-secundarios-dark dark:text-secundarios-light">{text}</span>
                </li>
              ))}
            </ul>
            {/* Botón para parar la cinta: el movimiento continuo debe poder detenerse (WCAG 2.2.2). */}
            <div className="flex justify-end mb-3">
              <button
                type="button"
                onClick={() => setCintaPausada((v) => !v)}
                aria-pressed={cintaPausada}
                className="cinta-control inline-flex items-center gap-1.5 rounded-full border border-secundarios-dark/20 dark:border-secundarios-light/30 px-3 py-1 font-sans text-xs font-semibold text-secundarios-dark dark:text-secundarios-light hover:border-principal hover:text-principal transition-colors"
              >
                {cintaPausada ? <Play size={14} aria-hidden="true" /> : <Pause size={14} aria-hidden="true" />}
                {cintaPausada ? content.galleryPlayLabel : content.galleryPauseLabel}
              </button>
            </div>
            <div ref={cintaRef} className={`cinta -mx-6 md:-mx-12${cintaPausada ? ' is-paused' : ''}`}>
              <ul className="cinta-pista text-left">
                {fotosPrimerEvento.map(({ id, img }, i) => (
                  <li key={id} className={`shrink-0 ${i < fotosPrimerEvento.length - 1 ? 'mr-6' : ''}`}>
                    <figure className="w-min">
                      <img
                        src={img.src}
                        width={img.width}
                        height={img.height}
                        alt={content.galleryPhotos[id]}
                        loading="lazy"
                        className="h-56 md:h-80 w-auto max-w-none rounded-anthro shadow-anthro-subtle"
                      />
                      <figcaption className="mt-3 font-sans text-sm leading-snug text-secundarios-dark/80 dark:text-secundarios-light/80">
                        {content.galleryPhotos[id]}
                      </figcaption>
                    </figure>
                  </li>
                ))}
              </ul>
            </div>

            <figure className="mt-12 md:mt-16 max-w-4xl mx-auto">
              <img
                src={fotoGrupo.src}
                width={fotoGrupo.width}
                height={fotoGrupo.height}
                alt={content.galleryPhotos.grupo}
                loading="lazy"
                className="w-full h-auto rounded-anthro shadow-anthro-card"
              />
              <figcaption className="mt-3 font-sans text-sm leading-snug text-secundarios-dark/80 dark:text-secundarios-light/80">
                {content.galleryPhotos.grupo}
              </figcaption>
            </figure>
          </div>
        </section>

        {/* Programas */}
        <section id="programas" className="scroll-mt-anchorbar w-full max-w-6xl mx-auto pt-20 md:pt-32 text-center">
          <h3 className={sectionTitle}>{content.programsTitle}</h3>
          <p className="max-w-2xl mx-auto mb-10 text-secundarios-dark/80 dark:text-secundarios-light/80">
            {content.programsIntro}
          </p>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 text-left">
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

        {/* Equipo: solo la sede lo muestra; las delegaciones enlazan a /equipo */}
        <section id="equipo" className="scroll-mt-anchorbar w-full max-w-6xl mx-auto pt-20 md:pt-32 text-center">
          <h3 className={sectionTitle}>{content.teamTitle}</h3>
          <p className="max-w-2xl mx-auto mb-10 text-secundarios-dark/80 dark:text-secundarios-light/80">{parseText(t.hero.h2)}</p>
          <ul className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-x-6 gap-y-10 text-left">
            {equipoSede.map((persona) => (
              <li key={persona.nombre} className="flex flex-col">
                <div className="aspect-square w-full rounded-anthro overflow-hidden shadow-anthro-subtle bg-secundarios-gray dark:bg-white/10">
                  {persona.foto ? (
                    <img
                      src={persona.foto.src}
                      alt={persona.nombre}
                      width={persona.foto.width}
                      height={persona.foto.height}
                      loading="lazy"
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <span
                      aria-hidden="true"
                      className="w-full h-full flex items-center justify-center font-sans font-bold text-3xl text-secundarios-dark/50 dark:text-secundarios-light/50"
                    >
                      {iniciales(persona.nombre)}
                    </span>
                  )}
                </div>
                <span className="mt-4 font-sans text-lg font-bold leading-snug text-secundarios-dark dark:text-white">{persona.nombre}</span>
                <span className="mt-1 font-sans text-sm leading-snug text-secundarios-dark/80 dark:text-secundarios-light/80">{persona.cargo[lang]}</span>
              </li>
            ))}
          </ul>
          <div className="mt-10 flex flex-col sm:flex-row justify-center gap-3">
            <a href={`${langPrefix}/equipo`} className={secondaryButton}>
              {content.teamCtaLabel}
            </a>
            <a href={`${langPrefix}/que-hacemos`} className={secondaryButton}>
              {content.aboutMissionLabel}
            </a>
          </div>
        </section>

        {/* Únete y contacto */}
        <section id="unete" className="scroll-mt-anchorbar w-full max-w-6xl mx-auto pt-20 md:pt-32 pb-20 md:pb-32">
          <div className={`${panel} p-6 md:p-12 grid grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-16 items-center`}>
            <div className="text-center md:text-left">
              <h3 className={sectionTitle}>{content.joinTitle}</h3>
              <p className="text-secundarios-dark/80 dark:text-secundarios-light/80">{content.joinIntro}</p>
            </div>
            <ul className="space-y-3">
              {joinLinks.map(({ href, label, detail, Icon, external }) => (
                <li key={href}>
                  <a
                    href={href}
                    {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                    className={`${card} group flex items-center gap-4 p-4 hover:shadow-anthro-card hover:border-principal transition-all duration-300`}
                  >
                    <span className={iconCircle}>
                      <Icon size={20} aria-hidden="true" />
                    </span>
                    <span className="min-w-0 flex-1">
                      <span className="block font-sans font-bold text-secundarios-dark dark:text-secundarios-light">{label}</span>
                      {detail && (
                        <span className="block font-sans text-sm font-semibold text-principal-texto break-words">{cortarCorreo(detail)}</span>
                      )}
                    </span>
                    <ArrowRight size={18} aria-hidden="true" className="shrink-0 text-secundarios-dark/40 dark:text-secundarios-light/40 group-hover:text-principal group-hover:translate-x-0.5 transition-all duration-300" />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </section>
      </main>

      <ValenciaFooter lang={lang} columns={madridFooterColumns} />
    </>
  );
};

export default DelegacionMadrid;
