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
    {/* Contenedor del icono con color azul y efecto hover */}
    <div className="w-20 h-20 md:w-8 md:h-12 dark:bg-principal10 text-cuartos-purple dark:text-terciarios-blue rounded-anthro flex items-center justify-center mb-8 md:mb-10 group-hover:scale-110 transition-transform duration-500">
      {icon}
    </div>
    {/* CAMBIO 1: Cambiamos h3 por h4 para que herede tu estilo (Naranja/Uppercase) */}
    <h4 className="mb-4 md:mb-6">{title}</h4>
    <p className="mb-0 flex-grow text-balance">
      {text}
    </p>
  </div>
);
// Componente para los enlaces a colaboradores (logos/nombres)
export const CollaborativeCard: React.FC<{ 
	href: string; 
	text: string;
	logo?: string;
	logoWhite?: string;
	theme?: 'light' | 'dark';
}> = ({ href, text, logo, logoWhite, theme }) => (
	<a 
		href={href} 
		target="_blank" 
		rel="noopener noreferrer"
		className="flex items-center justify-center p-4 transition-transform duration-300 hover:scale-110 group min-h-[120px]"
	>
		{logo ? (
			<img 
				src={theme === 'dark' && logoWhite ? logoWhite : logo} 
				alt={text} 
				className="max-h-24 w-auto"
			/>
		) : (
			<span className="font-sans font-bold text-xl md:text-2xl leading-[1.4] text-secundarios-dark dark:text-secundarios-light group-hover:text-principal dark:group-hover:text-principalLight transition-colors tracking-tight">
				{text}
			</span>
		)}
	</a>
);