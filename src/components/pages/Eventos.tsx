import React, { useState } from 'react';
import { ArrowUpRight } from 'lucide-react';
import Navbar from '@components/Navbar';
import Footer from '@components/Footer';
import JoinModal from '@components/JoinModal';
import ProximosEventos, { CALENDARIO_LUMA, conUtm } from '@components/ProximosEventos';
import { translations } from '@locales/translations';

type Language = 'es' | 'en';

export const eventosContent = {
  es: {
    seoTitle: 'Eventos | iaS',
    description: 'Próximos eventos de iaS: seminario en línea, encuentros presenciales en Madrid, Valencia y Barcelona, y sprints de investigación.',
    titulo: 'Próximos eventos',
    entradilla: 'Seminario en línea, encuentros presenciales y sprints de investigación. Pulsa en un evento para apuntarte.',
    seguir: 'Seguir el calendario en Luma',
  },
  en: {
    seoTitle: 'Events | iaS',
    description: 'Upcoming iaS events: online seminar, in-person meetups in Madrid, Valencia and Barcelona, and research sprints.',
    titulo: 'Upcoming events',
    entradilla: 'Online seminar, in-person meetups and research sprints. Click an event to register.',
    seguir: 'Follow the calendar on Luma',
  },
} as const;

// Página «Eventos»: todos los próximos eventos de iaS (sede, delegaciones y seminario), con filtros. Cada tarjeta lleva
// directamente a la inscripción en Luma.
const Eventos: React.FC<{ lang: Language }> = ({ lang }) => {
  const t = translations[lang];
  const c = eventosContent[lang];
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <Navbar lang={lang} />

      <main className="pt-36 md:pt-44 px-6 md:px-20 lg:px-24 pb-20 md:pb-32 bg-secundarios-light dark:bg-secundarios-dark min-h-screen transition-colors duration-300 text-secundarios-dark dark:text-secundarios-light">
        <div className="max-w-[900px] mx-auto">
          <header className="mb-8 md:mb-12 flex flex-col md:flex-row md:items-end md:justify-between gap-4 md:gap-8">
            <div>
              <h1 className="como-h2 text-secundarios-dark dark:text-white !mb-3">{c.titulo}</h1>
              <p className="!mb-0 text-balance">{c.entradilla}</p>
            </div>
            <a
              href={conUtm(CALENDARIO_LUMA, 'eventos')}
              target="_blank"
              rel="noopener noreferrer"
              className="shrink-0 inline-flex items-center gap-2 py-2.5 px-5 rounded-xl border-2 border-principal text-principal-texto font-sans font-bold text-base no-underline hover:bg-principal/10 dark:hover:bg-principal/15 transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-principal"
            >
              {c.seguir} <ArrowUpRight size={18} aria-hidden="true" />
            </a>
          </header>

          <ProximosEventos lang={lang} campana="eventos" filtros datosEstructurados />
        </div>
      </main>

      <JoinModal
        isOpen={showModal}
        onClose={() => setShowModal(false)}
        lang={lang}
        title={t.subscribe.title}
        subtitle={t.subscribe.subtitle}
        action="https://script.google.com/macros/s/AKfycbwYyiRXPZdeFNO1ybtrnd5xa9ndfNvIfXr-e7rF0HsfKcz4eWckOsswSD9yoEO_87w63g/exec"
        subject="Nuevo suscriptor desde Eventos"
        successMessage={lang === 'es' ? 'Te hemos registrado correctamente.' : 'You have been successfully registered.'}
      />

      <Footer lang={lang} onSubscribeClick={() => setShowModal(true)} />
    </>
  );
};

export default Eventos;
