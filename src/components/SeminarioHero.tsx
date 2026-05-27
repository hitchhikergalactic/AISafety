import React from 'react';
import { HiH1 } from 'react-icons/hi2';
import { parseText } from '../utils/parseText';

interface SeminarioHeroProps {
  t: any;
}

const SeminarioHero: React.FC<SeminarioHeroProps> = ({ t }) => {
  return (
    <section className="mb-10 md:mb-16">
      <div className="max-w-[1100px] mx-auto text-center">
        <h2 className="text-3xl md:text-4xl mb-2 text-secundarios-dark dark:text-secundarios-light">
          {t.seminario.title}
        </h2>
        <p className="bajada max-w-[950px] mx-auto">
          {parseText(t.seminario.subtitle)}
        </p>
      </div>
    </section>
  );
};

export default SeminarioHero;
