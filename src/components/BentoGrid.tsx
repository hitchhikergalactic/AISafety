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
    <section id="eventos" className="bg-gray-50 dark:bg-secundarios-dark/5 py-10 md:py-20 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          
          {/* Tarjeta Grande (Izquierda) */}
          <div className="bg-principal rounded-3xl border border-principal p-6 md:p-8 flex flex-col h-full shadow-sm hover:shadow-md transition-shadow duration-300 text-white">
            <div className="flex justify-between items-start mb-6">
              <span className="font-mono text-sm tracking-widest text-white/90 uppercase">{t.upcoming.bluedot.tag}</span>
              <button 
                onClick={onModalOpen}
                className="w-10 h-10 rounded-lg border border-white/30 flex items-center justify-center text-white hover:bg-white hover:text-principal hover:border-white transition-colors duration-300"
              >
                <ArrowUpRight size={20} />
              </button>
            </div>
            <div className="flex-grow flex flex-col">
              <div className="rounded-2xl overflow-hidden mb-6 aspect-video w-full bg-white/10">
                <img 
                  src={eventImage} 
                  alt={t.upcoming.eventTitle} 
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                />
              </div>
              <h4 className="mb-3 !text-white">
                {t.upcoming.eventTitle}
              </h4>
              <p className="text-white/90 text-lg mb-4 line-clamp-3">
                {t.upcoming.description}
              </p>
              <div className="mt-auto pt-4 flex flex-wrap gap-4 text-sm font-medium text-white/80">
                 <h5 className="flex items-center gap-2 uppercase tracking-wider">{t.upcoming.dateShort}</h5>
              </div>
            </div>
          </div>

          {/* Columna Derecha - 2 Tarjetas Apiladas */}
          <div className="flex flex-col gap-6">
            
            {/* --- TARJETA PEQUEÑA 1 (LA QUE MODIFICAMOS) --- */}
            <div className="bg-white dark:bg-white/5 rounded-3xl border border-gray-200 dark:border-white/10 p-6 flex flex-col md:flex-row gap-6 shadow-sm hover:shadow-md transition-shadow duration-300 h-full">
               <div className="w-full md:w-1/3 aspect-[4/3] rounded-2xl overflow-hidden bg-gray-100 shrink-0">
                 <img src={rodrigoImage} alt={t.upcoming.bluedot.title} className="w-full h-full object-cover" />
               </div>
               <div className="flex flex-col flex-grow">
                  <div className="flex justify-between items-start mb-2">
                    <div className="flex flex-col">
                      <span className="font-mono text-xs tracking-widest text-gray-500 uppercase mb-1">{t.upcoming.bluedot.tag}</span>
                    </div>
                    
                    {/* BOTÓN ACTUALIZADO PARA LUMA */}
                    <a 
                      href="https://luma.com/event/evt-RUhCWGQQcMXDMri" 
                      className="w-8 h-8 rounded-md border border-gray-200 dark:border-white/20 flex items-center justify-center text-gray-700 dark:text-white hover:bg-principal hover:text-white hover:border-principal transition-colors duration-300"
                      data-luma-action="checkout"
                      data-luma-event-id="evt-RUhCWGQQcMXDMri"
                    >
                      <ArrowUpRight size={16} />
                    </a>
                  </div>
                  <h4 className="mb-2 !text-cuartos-purple">{t.upcoming.bluedot.title}</h4>
                  <p className="text-gray-600 dark:text-gray-300 text-sm line-clamp-4 mb-auto">
                    {t.upcoming.bluedot.description}
                  </p>
                  <div className="mt-auto pt-4 flex flex-wrap gap-4 text-sm font-medium text-gray-500 dark:text-gray-400">
                     <h5 className="flex items-center gap-2 uppercase tracking-wider">{t.upcoming.bluedot.dateShort}</h5>
                  </div>
               </div>
            </div>

            {/* Tarjeta Pequeña 2 (Sin cambios) */}
            <div className="bg-white dark:bg-white/5 rounded-3xl border border-gray-200 dark:border-white/10 p-6 flex flex-col md:flex-row gap-6 shadow-sm hover:shadow-md transition-shadow duration-300 h-full">
               <div className="w-full md:w-1/3 aspect-[4/3] rounded-2xl overflow-hidden bg-gray-100 shrink-0">
                 <img src="https://i.imgur.com/vF4Dz3Z.jpeg" alt="Recurso" className="w-full h-full object-cover" />
               </div>
               <div className="flex flex-col flex-grow">
                  <div className="flex justify-between items-start mb-2">
                    <span className="font-mono text-xs tracking-widest text-gray-500 uppercase">{t.upcoming.readingGroup.tag}</span>
                    <a href="https://osmaniredondo.substack.com" target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-md border border-gray-200 dark:border-white/20 flex items-center justify-center text-gray-700 dark:text-white hover:bg-principal hover:text-white hover:border-principal transition-colors duration-300">
                      <ArrowUpRight size={16} />
                    </a>
                  </div>
                  <h4 className="mb-2 !text-cuartos-purple">{t.upcoming.readingGroup.title}</h4>
                  <p className="text-gray-600 dark:text-gray-300 text-sm line-clamp-4 mb-auto">
                    {t.upcoming.readingGroup.description}
                  </p>
               </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default BentoGrid;
