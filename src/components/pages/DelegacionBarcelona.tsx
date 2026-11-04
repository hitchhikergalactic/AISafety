import React from 'react';
import { ArrowRight, Mail } from 'lucide-react';
import Navbar from '@components/Navbar';
import ValenciaFooter from '@components/valencia/ValenciaFooter';
import ilustracionBarcelona from '../../assets/barcelona-ilustracion.webp';
import logoBarcelona from '../../assets/logos__ai_safety_barcelona.svg';
import logoBarcelonaBlanco from '../../assets/logos__ai_safety_barcelona_white.svg';
import {
  barcelonaContactEmail,
  barcelonaWebUrl,
  delegacionBarcelonaContent,
  madridFooterColumns,
} from '@data/delegaciones';

type Language = 'es' | 'en';

interface DelegacionBarcelonaProps {
  lang: Language;
}

// Mismos estilos que la página de Valencia, para que se lean como parte de la misma familia.
const primaryButton =
  'inline-flex items-center justify-center gap-2 rounded-xl bg-principal px-8 py-4 text-[1.1875rem] text-white font-bold hover:bg-principal/90 transition-all shadow-md w-full md:w-auto md:whitespace-nowrap';

const secondaryButton =
  'inline-flex items-center justify-center gap-2 rounded-xl border border-secundarios-dark/20 dark:border-secundarios-light/30 px-6 py-2.5 text-sm font-sans font-semibold text-secundarios-dark dark:text-secundarios-light hover:border-principal hover:text-principal transition-all duration-300 w-full md:w-auto md:whitespace-nowrap';

const card =
  'bg-white dark:bg-white/5 rounded-anthro border border-secundarios-dark/15 dark:border-secundarios-light/15 shadow-anthro-subtle';

const sectionTitle = '!font-bold mb-4 text-secundarios-dark dark:text-secundarios-light';

const panel = 'bg-secundarios-gray dark:bg-white/5 rounded-anthro';

// Página ligera: AI Safety Barcelona gestiona sus eventos y altas en su propia web, así que aquí
// se presenta, se explica qué hace y se enlaza. Cuando pase a ser «iaS Barcelona» bastará con cambiar los textos.
const DelegacionBarcelona: React.FC<DelegacionBarcelonaProps> = ({ lang }) => {
  const content = delegacionBarcelonaContent[lang];
  const langPrefix = lang === 'es' ? '' : '/en';

  return (
    <>
      <Navbar lang={lang} />

      <main className="pt-36 md:pt-44 px-6 md:px-12 bg-secundarios-light dark:bg-secundarios-dark min-h-screen transition-colors duration-300">
        <section className="w-full max-w-6xl mx-auto pb-12 md:pb-16 grid grid-cols-1 gap-10 md:gap-14 md:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)] items-center">
          <div className="text-center md:text-left">
            {/* «iaS» se escribe siempre así, aunque el antetítulo vaya en mayúsculas. */}
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
              <a href={barcelonaWebUrl[lang]} target="_blank" rel="noopener noreferrer" className={primaryButton}>
                {content.webCtaLabel}
                <ArrowRight size={18} aria-hidden="true" />
              </a>
              <a href={`mailto:${barcelonaContactEmail}`} className={secondaryButton}>
                <Mail size={16} aria-hidden="true" />
                {content.emailCtaLabel}
              </a>
            </div>
          </div>

          <img
            src={ilustracionBarcelona.src}
            width={ilustracionBarcelona.width}
            height={ilustracionBarcelona.height}
            alt={content.imageAlt}
            className="order-first md:order-none w-full max-w-[18rem] md:max-w-md mx-auto aspect-square rounded-anthro shadow-anthro-card"
          />
        </section>

        <section className="w-full max-w-6xl mx-auto pt-12 md:pt-20">
          <h3 className={`${sectionTitle} text-center md:text-left`}>{content.whatTitle}</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {content.what.map((item) => (
              <article key={item.title} className={`${card} p-6`}>
                <h4 className="!mb-2">{item.title}</h4>
                <p className="!mb-0 text-secundarios-dark/80 dark:text-secundarios-light/80">{item.text}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="w-full max-w-6xl mx-auto pt-16 md:pt-24 pb-20 md:pb-32">
          <div className={`${panel} p-6 md:p-12 grid grid-cols-1 gap-10 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,0.8fr)] items-center`}>
            <div>
              <h3 className={sectionTitle}>{content.linkTitle}</h3>
              <p className="text-secundarios-dark dark:text-secundarios-light">{content.linkText}</p>
              <a href={`${langPrefix}/delegaciones/madrid`} className={`${secondaryButton} mt-2`}>
                {content.hqLabel}
                <ArrowRight size={16} aria-hidden="true" />
              </a>
            </div>
            <a
              href={barcelonaWebUrl[lang]}
              target="_blank"
              rel="noopener noreferrer"
              className={`${card} flex items-center justify-center p-8 hover:border-principal transition-colors duration-300`}
            >
              <img src={logoBarcelona.src} alt={content.logoAlt} className="w-full max-w-xs dark:hidden" />
              <img src={logoBarcelonaBlanco.src} alt={content.logoAlt} className="w-full max-w-xs hidden dark:block" />
            </a>
          </div>
        </section>
      </main>

      <ValenciaFooter lang={lang} columns={madridFooterColumns} />
    </>
  );
};

export default DelegacionBarcelona;
