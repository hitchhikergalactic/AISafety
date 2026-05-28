import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import eventImage from '../assets/eventos_Licencia_Unsplash.jpg';
import rodrigoImage from '../assets/rodrigo.jpg';
import discord from '../assets/discord.png';
import substack from '../assets/substack.jpeg';
import cursoAgi from '../assets/curso_agi.jpg';

interface BentoGridProps {
  t: any;
  onModalOpen: () => void;
}

const BentoGrid: React.FC<BentoGridProps> = ({ t, onModalOpen }) => {
  
  // --- PASO 1: CARGAR EL SCRIPT DE LUMA ---
  useEffect(() => {
    const scriptId = 'luma-checkout';
    if (!document.getElementById(scriptId)) {
      const script = document.createElement('script');
      script.id = scriptId;
      script.src = 'https://embed.lu.ma/checkout-button.js';
      script.async = true;
      document.body.appendChild(script);
    }
  }, []);

  return (
    <section id="eventos" className="py-5 md:py-24 px-6">
      <div className="">
        {/* GRID PRINCIPAL: 2 Columnas en Desktop */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          
          {/* --- COLUMNA IZQUIERDA (2 Tarjetas: Hero + Secundaria) --- */}
          <div className="flex flex-col gap-4 h-full">
            
            {/* TARJETA 1: Hero - Imagen */}
            <button 
              onClick={onModalOpen}
              type="button"
              className="group border border-neutral-300 dark:border-neutral-800 rounded-md p-6 md:p-10 flex flex-col transition-all hover:shadow-lg dark:bg-transparent cursor-pointer text-left flex-1"
            >
              <div className="flex justify-between items-start mb-4">
                <span className="font-sans text-sm text-label-gray uppercase">
                 {t.upcoming.tag}
                </span>
                <button className="w-8 h-8 border border-neutral-400 dark:border-neutral-700 flex items-center justify-center rounded-md group-hover:bg-black group-hover:text-white group-hover:border-black transition-colors">
                  <ArrowUpRight size={14} />
                </button>
              </div>
              <div className="w-full md:w-40 md:h-40 h-40 bg-neutral-100 overflow-hidden md:flex-shrink-0 rounded-md mb-4">
                <img 
                  src={eventImage} 
                  alt={t.upcoming.eventTitle}
                  className="w-full h-full object-cover transition-all duration-700 group-hover:scale-105"
                />
              </div>
              <h4 className="text-base font-bold  tracking-tight mb-2">
                {t.upcoming.eventTitle}
              </h4>
              <p className="text-secundarios-dark dark:text-secundarios-light text-small leading-relaxed line-clamp-4">
                {t.upcoming.description}
              </p>
              <h5 className="text-label-gray dark:text-secundarios-gray mt-6">
                {t.upcoming.dateShort.toUpperCase()}
              </h5>
            </button>
            {/* TARJETA 2: Secundaria - Con Imagen y Texto (Innovation) */}
            <button 
              onClick={onModalOpen}
              type="button"
              className="group border border-neutral-300 dark:border-neutral-800 rounded-md p-6 md:p-10 flex flex-col transition-all hover:shadow-lg dark:bg-transparent cursor-pointer text-left flex-1"
            >
              <div className="flex justify-between items-start mb-4">
                <span className="font-sans text-sm text-label-gray uppercase block">
                  {t.upcoming.innovation.tag}
                </span>
                <button className="w-8 h-8 border border-neutral-200 dark:border-neutral-700 flex items-center justify-center rounded-md group-hover:bg-black group-hover:text-white group-hover:border-black transition-colors">
                  <ArrowUpRight size={14} />
                </button>
              </div>
              <div className="w-full md:w-40 md:h-40 h-40 bg-neutral-100 overflow-hidden md:flex-shrink-0 rounded-md mb-4">
                <img 
                  src={cursoAgi}
                  alt={t.upcoming.innovation.title}
                  className="w-full h-full object-cover transition-all duration-700 group-hover:scale-105"
                />
              </div>
              <h4 className="text-base font-bold tracking-tight mb-1">{t.upcoming.innovation.title}</h4>
              <p className="text-secundarios-dark dark:text-secundarios-light text-small leading-relaxed line-clamp-4">
                  {t.upcoming.innovation.description}</p>
              <h5 className="text-label-gray dark:text-secundarios-gray mt-6">
                {t.upcoming.innovation.dateShort.toUpperCase()}
              </h5>
            </button>
          </div>

          {/* --- COLUMNA DERECHA (3 Tarjetas: Horizontal + Apaisada + Research) --- */}
          <div className="flex flex-col gap-5 h-full">
            
            {/* TARJETA 3: Horizontal - Imagen Izq + Texto Der (BlueDot) */}
            <Link 
              to="/seminario-bluedot-spain"
              className="group border border-neutral-300 dark:border-neutral-800 rounded-md p-6 md:p-10 flex flex-col transition-all hover:shadow-lg flex-1"
            >
               <div className="flex justify-between items-start mb-4">
                  <span className="font-sans text-sm text-label-gray uppercase">{t.upcoming.bluedot.tag}</span>
                  <button className="w-8 h-8 border border-neutral-200 dark:border-neutral-700 flex items-center justify-center rounded-md group-hover:bg-black group-hover:text-white group-hover:border-black transition-colors">
                    <ArrowUpRight size={14} />
                  </button>
               </div>
               <div className="flex flex-col md:flex-row gap-4 flex-1">
                  <div className="w-full md:w-32 md:h-32 h-40 bg-neutral-100 overflow-hidden md:flex-shrink-0 rounded-md">
                    <img src={rodrigoImage} alt={t.upcoming.bluedot.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                  </div>
                  <div className="flex flex-col flex-1">
                    <h4 className="text-base font-bold tracking-tight mb-2">{t.upcoming.bluedot.title}</h4>
                    <p className="text-secundarios-dark dark:text-secundarios-light text-small leading-relaxed line-clamp-6 flex-grow">{t.upcoming.bluedot.description}</p>
                    <h5 className="text-label-gray dark:text-secundarios-gray mt-6">{t.upcoming.bluedot.dateShort.toUpperCase()}</h5>
                  </div>
               </div>
            </Link>

            {/* TARJETA 4: Apaisada - Imagen Arriba, Texto Abajo (ReadingGroup) */}
            <a 
              href="https://osmaniredondo.substack.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="group border border-neutral-300 dark:border-neutral-800 rounded-md p-6 md:p-10 flex flex-col transition-all hover:shadow-lg flex-1"
            >
              <div className="flex justify-between items-start mb-4">
                <span className="font-sans text-sm text-label-gray uppercase">
                   {t.upcoming.readingGroup.tag}
                </span>
                <button className="w-8 h-8 border border-neutral-200 dark:border-neutral-700 flex items-center justify-center rounded-md group-hover:bg-black group-hover:text-white group-hover:border-black transition-colors">
                  <ArrowUpRight size={14} />
                </button>
              </div>
              <div className="w-full md:w-40 md:h-40 h-40 bg-neutral-100 overflow-hidden md:flex-shrink-0 rounded-md mb-4">
                <img src={substack} alt={t.upcoming.readingGroup.title} className="w-full h-full object-cover transition-all duration-700 group-hover:scale-105" />
              </div>
              <h4 className="text-base font-bold tracking-tight mb-2 leading-tight">{t.upcoming.readingGroup.title}</h4>
              <p className="text-secundarios-dark dark:text-secundarios-light text-small line-clamp-4 flex-grow">{t.upcoming.readingGroup.description}</p>
            </a>

            {/* TARJETA 5: Research - Texto + Botón */}
            <a 
              href="https://discord.com/invite/z7uhQKhZKW"
              target="_blank"
              rel="noopener noreferrer"
              className="group border border-neutral-300 dark:border-neutral-800 rounded-md p-6 md:p-10 flex flex-col transition-all hover:shadow-lg flex-1"
            >
               <div className="flex justify-between items-start mb-4">
                  <span className="font-sans text-sm text-label-gray uppercase">{t.upcoming.research.tag}</span>
                  <button className="w-8 h-8 border border-neutral-200 dark:border-neutral-700 flex items-center justify-center rounded-md group-hover:bg-black group-hover:text-white group-hover:border-black transition-colors">
                    <ArrowUpRight size={14} />
                  </button>
               </div>
               <div className="flex flex-col md:flex-row gap-4 flex-1">
                  <div className="w-full md:w-32 md:h-32 h-40 bg-neutral-100 overflow-hidden md:flex-shrink-0 rounded-md">
                    <img src={discord} alt={t.upcoming.research.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                  </div>
                  <div className="flex flex-col flex-1">
                    <h4 className="text-base font-bold tracking-tight mb-2">{t.upcoming.research.title}</h4>
                    <p className="text-secundarios-dark dark:text-secundarios-light text-small leading-relaxed line-clamp-5 flex-grow">{t.upcoming.research.description}</p>
                  </div>
               </div>
            </a>

          </div>
        </div>
      </div>
    </section>
  );
};

export default BentoGrid;
