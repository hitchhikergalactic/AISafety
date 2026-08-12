// src/components/UI.tsx
import React from 'react';

// Componente para las secciones de la página
export const Section: React.FC<{ 
    id?: string; 
    className?: string; 
    children: React.ReactNode;
    fullWidth?: boolean;
}> = ({ id, className = "", children, fullWidth = false }) => (
    <section id={id} className={`py-8 md:py-24 px-8 md:px-8 scroll-mt-32 ${className}`}>
        <div className={fullWidth ? "w-full" : "max-w-[1100px] mx-auto"}>
            {children}
        </div>
    </section>
);

export const PillarCard: React.FC<{ 
  icon: React.ReactNode; 
  title: string; 
  text: string 
}> = ({ icon, title, text }) => (
  <div className="bg-white dark:bg-white/5 p-8 md:p-14 rounded-anthro border border-secundarios-dark/15 shadow-anthro-subtle flex flex-col h-full group hover:shadow-anthro-card hover:border-secundarios-dark/30 transition-all duration-500">
    <div className="w-20 h-20 md:w-8 md:h-12 dark:bg-principal10 text-cuartos-purple dark:text-terciarios-blue rounded-anthro flex items-center justify-center mb-8 md:mb-10 group-hover:scale-110 transition-transform duration-500">
      {icon}
    </div>
    <h4 className="mb-4 md:mb-6">{title}</h4>
    <p className="mb-0 flex-grow text-balance">
      {text}
    </p>
  </div>
);

export const CollaborativeCard: React.FC<{ 
    href: string; 
    text: string;
    logo?: any;
    logoWhite?: any;
}> = ({ href, text, logo, logoWhite }) => {
    
    // Extractor ultra seguro para blindar las etiquetas <img> nativas
    const getSafeSrc = (img: any): string => {
        if (!img) return '';
        if (typeof img === 'string') return img;
        if (img.src && typeof img.src === 'string') return img.src;
        if (img.default && typeof img.default === 'string') return img.default;
        if (img.default && img.default.src && typeof img.default.src === 'string') return img.default.src;
        return '';
    };

    const logoSrc = getSafeSrc(logo);
    const logoWhiteSrc = getSafeSrc(logoWhite);

    return (
        <a 
            href={href} 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center justify-center p-4 transition-transform duration-300 hover:scale-110 group min-h-[120px]"
        >
            {logoSrc ? (
                <>
                    {logoWhiteSrc ? (
                        <>
                            <img 
                                src={logoSrc} 
                                alt={text} 
                                className="max-h-24 w-auto dark:hidden"
                            />
                            <img 
                                src={logoWhiteSrc} 
                                alt={text} 
                                className="max-h-24 w-auto hidden dark:block"
                            />
                        </>
                    ) : (
                        <img 
                            src={logoSrc} 
                            alt={text} 
                            className="max-h-24 w-auto"
                        />
                    )}
                </>
            ) : (
                <span className="font-sans font-bold text-xl md:text-2xl leading-[1.4] text-secundarios-dark dark:text-secundarios-light group-hover:text-principal dark:group-hover:text-principalLight transition-colors tracking-tight">
                    {text}
                </span>
            )}
        </a>
    );
};