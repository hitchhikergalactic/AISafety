import React, { useEffect } from 'react';
import { ArrowUpRight } from 'lucide-react';
import eventImage from '../assets/eventos_Licencia_Unsplash.jpg';
import rodrigoImage from '../assets/rodrigo.jpg';

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
    <section id="eventos" className="py-12 md:py-24 px-6">
      <div className="max-w-[1100px] mx-auto">
        <div className="max-w-9xl mx-auto md:gap-24 items-left justify-left mb-12"> 
          <h4>{t.pillars.events.title}</h4>
        </div>

        {/* GRID PRINCIPAL: 2 Columnas en Desktop */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          
          {/* --- COLUMNA IZQUIERDA (2 Tarjetas: Hero + Secundaria) --- */}
          <div className="flex flex-col gap-4 h-full">
            
            {/* TARJETA 1: Hero - Imagen */}
            <div className="group border border-neutral-300 dark:border-neutral-800 rounded-md p-10 flex flex-col flex-1 transition-all hover:shadow-lg">
              <div className="flex justify-between items-start mb-4">
                <span className="font-sans text-sm text-label-gray uppercase">
                 {t.upcoming.tag}
                </span>
                <button className="w-8 h-8 border border-neutral-400 dark:border-neutral-700 flex items-center justify-center rounded-md group-hover:bg-black group-hover:text-white group-hover:border-black transition-colors">
                  <ArrowUpRight size={14} />
                </button>
              </div>
              
              <div className="mb-4 overflow-hidden bg-neutral-100 aspect-[3/2] rounded-md">
                <img 
                  src={eventImage} 
                  alt={t.upcoming.eventTitle}
                  className="w-full h-full object-cover transition-all duration-700 group-hover:scale-105"
                />
              </div>
              
              <h4 className="text-base font-bold uppercase tracking-tight mb-2">
                {t.upcoming.eventTitle}
              </h4>
              <p className="text-neutral-500 dark:text-neutral-400 text-sm leading-relaxed line-clamp-4">
                {t.upcoming.description}
              </p>
              <h5 className="text-label-gray dark:text-secundarios-gray mt-6">
                {t.upcoming.dateShort.toUpperCase()}
              </h5>
            </div>

            {/* TARJETA 2: Secundaria - Con Imagen y Texto (Innovation) */}
            <div className="group border border-neutral-300 dark:border-neutral-800 rounded-md p-10 flex flex-col flex-1 transition-all hover:shadow-lg">
              <div className="flex justify-between items-start mb-4">
                <span className="font-sans text-sm text-label-gray uppercase block">
                  {t.upcoming.innovation.tag}
                </span>
                <button className="w-8 h-8 border border-neutral-200 dark:border-neutral-700 flex items-center justify-center rounded-md group-hover:bg-black group-hover:text-white group-hover:border-black transition-colors">
                  <ArrowUpRight size={14} />
                </button>
              </div>
              <div className="mb-4 overflow-hidden bg-neutral-100 aspect-[3/2] rounded-md">
                <img 
                  src={eventImage}
                  alt={t.upcoming.innovation.title}
                  className="w-full h-full object-cover transition-all duration-700 group-hover:scale-105"
                />
              </div>
              <h4 className="text-base font-bold uppercase tracking-tight mb-1">{t.upcoming.innovation.title}</h4>
              <p className="text-neutral-500 dark:text-neutral-400 text-sm leading-relaxed line-clamp-4">{t.upcoming.innovation.description}</p>
              <h5 className="text-label-gray dark:text-secundarios-gray mt-6">
                {t.upcoming.innovation.dateShort.toUpperCase()}
              </h5>
            </div>
          </div>

          {/* --- COLUMNA DERECHA (3 Tarjetas: Horizontal + Apaisada + Research) --- */}
          <div className="flex flex-col gap-5 h-full">
            
            {/* TARJETA 3: Horizontal - Imagen Izq + Texto Der (BlueDot) */}
            <a 
              href="https://luma.com/event/evt-CPNiAzx2NIYMgEd"
              data-luma-action="checkout"
              data-luma-event-id="evt-CPNiAzx2NIYMgEd"
              className="group border border-neutral-300 dark:border-neutral-800 rounded-md p-10 flex flex-col transition-all hover:shadow-lg flex-1"
            >
               <div className="flex justify-between items-start mb-4">
                  <span className="font-sans text-sm text-label-gray uppercase">{t.upcoming.bluedot.tag}</span>
                  <button className="w-8 h-8 border border-neutral-200 dark:border-neutral-700 flex items-center justify-center rounded-md group-hover:bg-black group-hover:text-white group-hover:border-black transition-colors">
                    <ArrowUpRight size={14} />
                  </button>
               </div>
               <div className="flex gap-4 flex-1">
                  <div className="w-32 h-32 bg-neutral-100 overflow-hidden flex-shrink-0 rounded-md">
                    <img src={rodrigoImage} alt={t.upcoming.bluedot.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                  </div>
                  <div className="flex flex-col flex-1">
                    <h4 className="text-base font-bold uppercase tracking-tight mb-2">{t.upcoming.bluedot.title}</h4>
                    <p className="text-neutral-500 dark:text-neutral-400 text-sm leading-relaxed line-clamp-4 lex-grow">{t.upcoming.bluedot.description}</p>
                    <h5 className="text-label-gray dark:text-secundarios-gray mt-6">{t.upcoming.bluedot.dateShort.toUpperCase()}</h5>
                  </div>
               </div>
            </a>

            {/* TARJETA 4: Apaisada - Imagen Arriba, Texto Abajo (ReadingGroup) */}
            <a 
              href="https://osmaniredondo.substack.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="group border border-neutral-300 dark:border-neutral-800 rounded-md p-10 flex flex-col transition-all hover:shadow-lg flex-1"
            >
              <div className="flex justify-between items-start mb-4">
                <span className="font-sans text-sm text-label-gray uppercase">
                   {t.upcoming.readingGroup.tag}
                </span>
                <button className="w-8 h-8 border border-neutral-200 dark:border-neutral-700 flex items-center justify-center rounded-md group-hover:bg-black group-hover:text-white group-hover:border-black transition-colors">
                  <ArrowUpRight size={14} />
                </button>
              </div>
              <div className="aspect-[3/2] bg-neutral-100 overflow-hidden rounded-md mb-4">
                <img src="https://i.imgur.com/vF4Dz3Z.jpeg" alt={t.upcoming.readingGroup.title} className="w-full h-full object-cover transition-all duration-700 group-hover:scale-105" />
              </div>
              <h4 className="text-base font-bold uppercase tracking-tight mb-2 leading-tight">{t.upcoming.readingGroup.title}</h4>
              <p className="text-neutral-500 dark:text-neutral-400 text-sm line-clamp-2 flex-grow">{t.upcoming.readingGroup.description}</p>
            </a>

            {/* TARJETA 5: Research - Texto + Botón */}
            <a 
              href="https://luma.com/event/evt-CPNiAzx2NIYMgEd"
              data-luma-action="checkout"
              data-luma-event-id="evt-CPNiAzx2NIYMgEd"
              className="group border border-neutral-300 dark:border-neutral-800 rounded-md p-10 flex flex-col transition-all hover:shadow-lg flex-1"
            >
               <div className="flex justify-between items-start mb-4">
                  <span className="font-sans text-sm text-label-gray uppercase">{t.upcoming.bluedot.tag}</span>
                  <button className="w-8 h-8 border border-neutral-200 dark:border-neutral-700 flex items-center justify-center rounded-md group-hover:bg-black group-hover:text-white group-hover:border-black transition-colors">
                    <ArrowUpRight size={14} />
                  </button>
               </div>
               <div className="flex gap-4 flex-1">
                  <div className="w-32 h-32 bg-neutral-100 overflow-hidden flex-shrink-0 rounded-md">
                    <img src={rodrigoImage} alt={t.upcoming.bluedot.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                  </div>
                  <div className="flex flex-col flex-1">
                    <h4 className="text-base font-bold uppercase tracking-tight mb-2">{t.upcoming.bluedot.title}</h4>
                    <p className="text-neutral-500 dark:text-neutral-400 text-sm leading-relaxed line-clamp-4 lex-grow">{t.upcoming.bluedot.description}</p>
                    <h5 className="text-label-gray dark:text-secundarios-gray mt-6">{t.upcoming.bluedot.dateShort.toUpperCase()}</h5>
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
