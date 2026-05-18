import React from 'react';

interface SeminarioHeroProps {
  t: any;
}

const SeminarioHero: React.FC<SeminarioHeroProps> = ({ t }) => {
  return (
    <section className="mb-12 md:mb-16">
      <div className="max-w-[1100px] mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-secundarios-dark dark:text-secundarios-light">
          {t.seminario?.title || 'Seminario IA Safety'}
        </h2>
        <p className="bajada max-w-[950px] mx-auto">
          {t.seminario?.subtitle || 'Descubre las charlas y expositores especializados en seguridad de IA'}
        </p>
      </div>
    </section>
  );
};

export default SeminarioHero;
