// src/components/UI.tsx
import React from 'react';

// Componente para las secciones de la página
export const Section: React.FC<{ 
  id?: string; 
  className?: string; 
  children: React.ReactNode;
  fullWidth?: boolean;
}> = ({ id, className = "", children, fullWidth = false }) => (
  <section id={id} className={`py-16 md:py-48 px-4 md:px-12 scroll-mt-32 ${className}`}>
    <div className={fullWidth ? "w-full" : "max-w-7xl mx-auto"}>
      {children}
    </div>
  </section>
);

// Componente para las tarjetas de los 3 pilares
export const PillarCard: React.FC<{ 
  icon: React.ReactNode; 
  title: string; 
  text: string 
}> = ({ icon, title, text }) => (
  <div className="bg-white dark:bg-white/5 p-8 md:p-14 rounded-anthro border border-secundarios-dark/15 shadow-anthro-subtle flex flex-col h-full group hover:shadow-anthro-card hover:border-secundarios-dark/30 transition-all duration-500">
    <div className="w-12 h-12 md:w-14 md:h-14 bg-terciarios-blue/10 dark:bg-terciarios-blueLight/10 text-terciarios-blue dark:text-terciarios-blueLight rounded-anthro flex items-center justify-center mb-8 md:mb-10 group-hover:scale-110 transition-transform duration-500">
      {icon}
    </div>
    <h3 className="mb-4 md:mb-6">{title}</h3>
    <p className="text-secundarios-dark/80 dark:text-secundarios-light/80 mb-0 flex-grow leading-relaxed text-lg md:text-2xl font-serif text-balance">{text}</p>
  </div>
);

// Componente para los enlaces a colaboradores (logos/nombres)
export const CollaborativeCard: React.FC<{ 
  href: string; 
  text: string 
}> = ({ href, text }) => (
  <a 
    href={href} 
    target="_blank" 
    rel="noopener noreferrer"
    className="block p-8 md:p-12 rounded-anthro border-2 border-secundarios-dark/20 bg-white/40 dark:bg-white/5 text-center transition-all duration-400 hover:bg-white dark:hover:bg-white/10 hover:scale-[1.05] hover:border-principal group shadow-anthro-subtle hover:shadow-anthro-elevated"
  >
    <span className="font-sans font-bold text-xl md:text-2xl leading-[1.4] text-secundarios-dark dark:text-secundarios-light group-hover:text-principal dark:group-hover:text-principalLight transition-colors tracking-tight">
      {text}
    </span>
  </a>
);