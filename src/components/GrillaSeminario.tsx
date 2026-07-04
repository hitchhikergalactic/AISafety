import React from 'react';
import type { Charla } from '@data/charlas';
import { ArrowUpRight } from 'lucide-react';
import undefinedImgur from '../assets/undefined_imgur.png';

type Language = 'es' | 'en';

interface GrillaSeminarioProps {
  charlas: Charla[];
  lang: Language;
}

/**
 * Componente final de la grilla de charlas con soporte multi-idioma nativo.
 * Se adapta automáticamente al diseño BentoGrid con Tailwind CSS.
 */
const GrillaSeminario: React.FC<GrillaSeminarioProps> = ({ charlas, lang }) => {
  const langPrefix = lang === 'es' ? '' : '/en';

  return (
    <section id="seminario-charlas" className="py-12 md:py-24 px-4 md:px-8">
      <div className="max-w-[1100px] mx-auto">
        
        {/* Grilla regular de 3 columnas en Desktop, 2 en Tablet, 1 en Mobile */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          
          {charlas.length > 0 ? (
            charlas.map((charla) => {
              const tagText = lang === 'es' ? charla.tagEs : charla.tagEn;
              const tituloText = lang === 'es' ? charla.tituloEs : charla.tituloEn;
              const descripcionCortaText = lang === 'es' ? charla.descripcionCortaEs : charla.descripcionCortaEn;
              const descripcionLargaText = lang === 'es' ? charla.descripcionCortaEs : charla.descripcionCortaEn;

              return (
                <a 
                  href={`${langPrefix}/seminario-bluedot-spain/${charla.id}`} 
                  key={charla.id} 
                  className="group border border-neutral-300 dark:border-neutral-800 rounded-md p-6 flex flex-col justify-between transition-all hover:shadow-lg bg-white dark:bg-transparent"
                >
                  <div>
                    <div className="flex justify-between items-start mb-4">
                      <span className="font-sans text-xs text-neutral-600 dark:text-neutral-400 uppercase tracking-wider">
                        {tagText || (lang === 'es' ? 'Seminario' : 'Seminar')}
                      </span>
                      <span className="w-8 h-8 border border-neutral-200 dark:border-neutral-700 flex items-center justify-center rounded-md group-hover:bg-black group-hover:text-white group-hover:border-black dark:group-hover:bg-white dark:group-hover:text-black transition-colors">
                        <ArrowUpRight size={14} />
                      </span>
                    </div>
                    
                    <div className="mb-4 overflow-hidden bg-neutral-100 dark:bg-neutral-900 aspect-[3/2] rounded-md">
                      <img 
                        src={charla.imagen || undefinedImgur.src || undefinedImgur} 
                        alt={tituloText}
                        className="w-full h-full object-cover transition-all duration-700 group-hover:scale-105"
                      />
                    </div>
                    
                    {/* Título de la Charla */}
                    <h4 className="text-base font-bold tracking-tight mb-1 leading-snug text-secundarios-dark dark:text-secundarios-light">
                      {tituloText}
                    </h4>
                    
                    {/* Expositor */}
                    <h5 className="uppercase font-bold font-medium text-neutral-600 dark:text-neutral-300 mb-3">
                      {charla.expositor.nombre} {charla.expositor.apellido}
                    </h5>

                    {/* Copete / Descripción corta */}
                    <p className="text-secundario-dark dark:text-secundario-light text-sm leading-relaxed line-clamp-6">
                      {descripcionCortaText || descripcionLargaText}
                    </p>
                  </div>

                  {/* Pie de la tarjeta */}
                  <div className="mt-6">
                    <h5 className="text-xs text-neutral-400 uppercase tracking-wider">
                      {charla.fecha 
                        ? new Date(charla.fecha).toLocaleDateString(lang === 'es' ? 'es-ES' : 'en-US') 
                        : (lang === 'es' ? 'Por confirmar' : 'TBD')}
                    </h5>
                  </div>
                </a>
              );
            })
          ) : (
            <div className="col-span-full text-center py-12">
              <p className="text-neutral-500 dark:text-neutral-400">
                {lang === 'es' ? 'No hay charlas disponibles' : 'No talks available'}
              </p>
            </div>
          )}

        </div>
      </div>
    </section>
  );
};

export default GrillaSeminario;