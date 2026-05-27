import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import { Charla } from '../data/charlas';
import { RiH5 } from 'react-icons/ri';
import { parseText } from '../utils/parseText';

type Language = 'es' | 'en';

interface GrillaSeminarioProps {
  charlas: Charla[];
  lang: Language;
  onCharlaClick?: (charla: Charla) => void;
}

/**
 * Componente final de la grilla de charlas con soporte multi-idioma nativo.
 * Se adapta automáticamente al diseño BentoGrid con Tailwind CSS.
 */
const GrillaSeminario: React.FC<GrillaSeminarioProps> = ({ charlas, lang, onCharlaClick }) => {
  const handleClick = (charla: Charla) => {
    onCharlaClick?.(charla);
  };

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
                <Link 
                  to={`/seminario-bluedot-spain/${charla.id}`} 
                  key={charla.id} 
                  onClick={() => handleClick(charla)}
                  className="group border border-neutral-300 dark:border-neutral-800 rounded-md p-6 flex flex-col justify-between transition-all hover:shadow-lg bg-white dark:bg-transparent"
                >
                  <div>
                    <div className="flex justify-between items-start mb-4">
                      <span className="font-sans text-xs text-neutral-600 dark:text-neutral-400 uppercase tracking-wider">
                        {tagText || (lang === 'es' ? 'Seminario' : 'Seminar')}
                      </span>
                      <div className="w-8 h-8 border border-neutral-200 dark:border-neutral-700 flex items-center justify-center rounded-md group-hover:bg-black group-hover:text-white group-hover:border-black dark:group-hover:bg-white dark:group-hover:text-black transition-colors">
                        <ArrowUpRight size={14} />
                      </div>
                    </div>
                    
                    <div className="mb-4 overflow-hidden bg-neutral-100 dark:bg-neutral-900 aspect-[3/2] rounded-md">
                      <img 
                        src={charla.imagen || 'https://i.imgur.com/wqT4oET.png'} 
                        alt={tituloText}
                        className="w-full h-full object-cover transition-all duration-700 group-hover:scale-105"
                      />
                    </div>
                    
                    {/* Título de la Charla */}
                    <h4 className="text-base font-bold tracking-tight mb-1 leading-snug text-secundarios-dark dark:text-secundarios-light">
                      {tituloText}
                    </h4>
                    
                    {/* Expositor: Acceso limpio a las propiedades de nombre y apellido */}
                    <h5 className=" uppercase font-bold font-medium text-neutral-600 dark:text-neutral-300 mb-3">
                      {charla.expositor.nombre} {charla.expositor.apellido}
                    </h5>

                    {/* Copete / Descripción corta */}
                    <p className="text-secundario-dark dark:text-secundario-light text-sm leading-relaxed line-clamp-6">
                      {descripcionCortaText || descripcionLargaText}
                    </p>
                  </div>

                  {/* Pie de la tarjeta con formato de fecha dinámico según zona o idioma */}
                  <div className="mt-6">
                    <h5 className="text-xs text-neutral-400 uppercase tracking-wider">
                      {charla.fecha 
                        ? new Date(charla.fecha).toLocaleDateString(lang === 'es' ? 'es-ES' : 'en-US') 
                        : (lang === 'es' ? 'Por confirmar' : 'TBD')}
                    </h5>
                  </div>
                </Link>
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