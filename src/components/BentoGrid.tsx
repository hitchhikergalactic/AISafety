import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { parseText } from '@utils/parseText';
import { parseHighlight } from '@utils/parseHighlight';
import { emphasizeBrand } from '@utils/emphasizeBrand';
import ProgramDetails from '@components/ProgramDetails';
import eventImage from '../assets/portada-grupo.webp';
import rodrigoImage from '../assets/rodrigo.jpg';
import discord from '../assets/discord.webp';
import lecturaImage from '../assets/boletin-semana-ias.webp';
import ultimoBoletin from '../data/ultimo-boletin.json';
import cursoAgi from '../assets/curso_agi.jpg';

interface BentoGridProps {
  t: any;
  lang: 'es' | 'en';
  onModalOpen: () => void;
}

const BentoGrid: React.FC<BentoGridProps> = ({ t, lang, onModalOpen }) => {
  const langPrefix = lang === 'es' ? '' : '/en';
  // El botón es un <span> dentro del enlace de la tarjeta (que ya lleva al mismo destino): un <a> dentro de otro <a> no es HTML válido.
  // Blanco sobre naranja cumple 3:1, suficiente para texto grande en negrita como este.
  const ctaClass = "mt-6 flex w-full items-center justify-center gap-2 rounded-xl bg-principal px-6 py-3 text-center font-sans text-[1.1875rem] font-bold text-white shadow-md transition-all group-hover:shadow-lg group-hover:-translate-y-0.5";
  // Título neutro: en la portada el naranja queda reservado al botón. El ! vence al color del h4 global.
  const cardTitleClass = "text-base font-bold tracking-tight !text-secundarios-dark dark:!text-secundarios-light";
  
  // Función auxiliar para extraer de forma segura la URL de la imagen como un string
  const getImageSrc = (img: any) => {
    if (!img) return '';
    if (typeof img === 'string') return img;
    if (img.src && typeof img.src === 'string') return img.src;
    if (img.default && typeof img.default === 'string') return img.default;
    return '';
  };

  return (
    <section id="eventos" className="py-4 md:py-10 px-5">
      <div className="">
        {/* GRID PRINCIPAL: 2 Columnas en Desktop */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          
          {/* --- COLUMNA IZQUIERDA (2 Tarjetas: Hero + Secundaria) --- */}
          <div className="flex flex-col gap-4 h-full">
            
            {/* TARJETA 1: Hero - Imagen */}
            {/* Lleva a la página de eventos de la web (fechas a la vista y un clic a la inscripción), no a Luma */}
            <a
              href={`${langPrefix}/eventos`}
              className="group border border-neutral-300 dark:border-neutral-800 rounded-md p-6 md:p-10 flex flex-col transition-all hover:shadow-lg dark:bg-transparent cursor-pointer text-left flex-1"
            >
              <div className="flex justify-between items-start mb-4">
                <span className="font-sans text-sm text-label-gray uppercase">
                 {t.upcoming.tag}{lang === 'es' && <span className="normal-case"> iaS</span>}
                </span>
              </div>
              <div className="w-full h-40 md:h-auto md:aspect-[3/2] bg-neutral-100 overflow-hidden rounded-md mb-4">
                <img 
                  src={getImageSrc(eventImage)} 
                  alt={t.upcoming.eventImageAlt}
                  className="w-full h-full object-cover transition-all duration-700 group-hover:scale-105"
                />
              </div>
              <h4 className={`${cardTitleClass} mb-2`}>
                {t.upcoming.eventTitle}
              </h4>
              <p className="text-secundarios-dark dark:text-secundarios-light text-small leading-relaxed line-clamp-5">
                {parseText(t.upcoming.description)}
              </p>
              <div className="mt-auto">
                <span className={ctaClass}>
                  {t.upcoming.cta}
                  <ArrowUpRight size={18} aria-hidden="true" />
                </span>
              </div>
            </a>
            
            {/* TARJETA 2: Secundaria - Con Imagen y Texto (Curso Estrategia AGI) */}
            <a 
              href={`${langPrefix}/curso-estrategia-agi`}
              className="group border border-neutral-300 dark:border-neutral-800 rounded-md p-6 md:p-10 flex flex-col transition-all hover:shadow-lg dark:bg-transparent cursor-pointer text-left flex-1"
            >
              <div className="flex items-start justify-between gap-3 mb-4 w-full">
                <span className="font-sans text-sm text-label-gray uppercase block flex-1">
                  {t.upcoming.innovation.tag}
                </span>
              </div>
              <div className="w-full h-40 md:h-auto md:aspect-[3/2] bg-neutral-100 overflow-hidden rounded-md mb-4">
                <img 
                  src={getImageSrc(cursoAgi)}
                  alt={t.upcoming.innovation.title}
                  className="w-full h-full object-cover transition-all duration-700 group-hover:scale-105"
                />
              </div>
              <h4 className={`${cardTitleClass} mb-1`}>{t.upcoming.innovation.title}</h4>
              <p className="text-secundarios-dark dark:text-secundarios-light text-small leading-relaxed line-clamp-4">
                  {emphasizeBrand(t.upcoming.innovation.description)}</p>
              <h5 className="text-label-gray dark:text-secundarios-gray mt-6">
                {parseHighlight(t.upcoming.innovation.dateShort.toUpperCase())}
              </h5>
              <div className="mt-auto pt-6">
                <ProgramDetails title={t.upcoming.detailsTitle} rows={t.upcoming.innovation.details} />
                <span className={ctaClass}>
                  {t.upcoming.moreInfo}
                  <ArrowUpRight size={18} aria-hidden="true" />
                </span>
              </div>
            </a>
          </div>

          {/* --- COLUMNA DERECHA (3 Tarjetas: Apaisada + Horizontal + Research) --- */}
          <div className="flex flex-col gap-5 h-full">
            
            {/* TARJETA 3: Apaisada - Imagen Arriba, Texto Abajo (ReadingGroup) */}
            <a 
              href={ultimoBoletin.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group border border-neutral-300 dark:border-neutral-800 rounded-md p-6 md:p-10 flex flex-col transition-all hover:shadow-lg flex-1"
            >
              <div className="flex justify-between items-start mb-4">
                <span className="font-sans text-sm text-label-gray uppercase">
                   {t.upcoming.readingGroup.tag}
                </span>
              </div>
              <div className="w-full aspect-[4/3] bg-neutral-100 overflow-hidden rounded-md mb-4">
                <img src={getImageSrc(lecturaImage)} alt={t.upcoming.readingGroup.imageAlt} className="w-full h-full object-cover transition-all duration-700 group-hover:scale-105" />
              </div>
              <h4 className={`${cardTitleClass} mb-2 leading-tight`}>
                {t.upcoming.readingGroup.kicker} <span lang="es">{ultimoBoletin.titulo}</span>
              </h4>
              <p className="text-secundarios-dark dark:text-secundarios-light text-small flex-grow">{t.upcoming.readingGroup.description}</p>
              <span className={ctaClass}>
                {t.upcoming.readingGroup.cta}
                <ArrowUpRight size={18} aria-hidden="true" />
              </span>
            </a>

            {/* TARJETA 4: Horizontal - Imagen Izq + Texto Der (BlueDot) */}
            <a 
              href={`${langPrefix}/seminario-bluedot-impact`}
              className="group border border-neutral-300 dark:border-neutral-800 rounded-md p-6 md:p-10 flex flex-col transition-all hover:shadow-lg flex-1"
            >
               <div className="flex justify-between items-start mb-4">
                  <span className="font-sans text-sm text-label-gray uppercase">{t.upcoming.bluedot.tag}</span>
               </div>
               <div className="flex flex-col md:flex-row gap-4 flex-1">
                  <div className="w-full md:w-32 md:h-32 h-40 bg-neutral-100 overflow-hidden md:flex-shrink-0 rounded-md">
                    <img src={getImageSrc(rodrigoImage)} alt={t.upcoming.bluedot.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                  </div>
                  <div className="flex flex-col flex-1">
                    <h4 className={`${cardTitleClass} mb-2`}>{t.upcoming.bluedot.title}</h4>
                    <p className="text-secundarios-dark dark:text-secundarios-light text-small leading-relaxed line-clamp-6 flex-grow">{parseText(t.upcoming.bluedot.description)}</p>
                    <h5 className="text-label-gray dark:text-secundarios-gray mt-6">{t.upcoming.bluedot.dateShort.toUpperCase()}</h5>
                  </div>
               </div>
               <div className="mt-auto pt-6">
                  <ProgramDetails title={t.upcoming.detailsTitle} rows={t.upcoming.bluedot.details} />
                  <span className={ctaClass}>
                    {t.upcoming.moreInfo}
                    <ArrowUpRight size={18} aria-hidden="true" />
                  </span>
               </div>
            </a>

            {/* TARJETA 5: Research - Texto + Botón */}
            <a 
              href="https://discord.gg/gm6v9Cwa58"
              target="_blank"
              rel="noopener noreferrer"
              className="group border border-neutral-300 dark:border-neutral-800 rounded-md p-6 md:p-10 flex flex-col transition-all hover:shadow-lg flex-1"
            >
               <div className="flex justify-between items-start mb-4">
                  <span className="font-sans text-sm text-label-gray uppercase">{t.upcoming.research.tag}</span>
               </div>
               <div className="flex flex-col md:flex-row gap-4 flex-1">
                  <div className="w-full md:w-32 md:h-32 h-40 bg-neutral-100 overflow-hidden md:flex-shrink-0 rounded-md">
                    <img src={getImageSrc(discord)} alt={t.upcoming.research.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                  </div>
                  <div className="flex flex-col flex-1">
                    <h4 className={`${cardTitleClass} mb-2`}>{t.upcoming.research.title}</h4>
                    <p className="text-secundarios-dark dark:text-secundarios-light text-small leading-relaxed line-clamp-5 flex-grow">{parseText(t.upcoming.research.description)}</p>
                  </div>
               </div>
               <span className={ctaClass}>
                 {t.upcoming.research.cta}
                 <ArrowUpRight size={18} aria-hidden="true" />
               </span>
            </a>

          </div>
        </div>
      </div>
    </section>
  );
};

export default BentoGrid;