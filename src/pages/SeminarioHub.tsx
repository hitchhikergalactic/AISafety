import React from 'react';
import { useNavigate } from 'react-router-dom';
import { translations } from '../locales/translations';
import Navbar from '../components/Navbar';
import SeminarioHero from '../components/SeminarioHero';
import GrillaSeminario from '../components/GrillaSeminario';
import { listaDeCharlas, Charla } from '../data/charlas';

type Language = 'es' | 'en';
type Theme = 'light' | 'dark';

interface SeminarioHubProps {
  lang: Language;
  setLang: (lang: Language) => void;
  theme: Theme;
  setTheme: (theme: Theme) => void;
}

/**
 * Página: aisafety.es/seminario-bluedot-spain
 * Muestra la grilla principal de charlas del seminario con soporte multi-idioma.
 */
const SeminarioHub: React.FC<SeminarioHubProps> = ({ lang, setLang, theme, setTheme }) => {
  const navigate = useNavigate();
  const t = translations[lang];

  const handleCharlaClick = (charla: Charla) => {
    navigate(`/seminario-bluedot-spain/${charla.id}`);
  };

  return (
    <>
      {/* Barra de navegación global */}
      <Navbar lang={lang} setLang={setLang} theme={theme} setTheme={setTheme} t={t} />
      
      {/* Contenedor principal con margen superior para no quedar oculto por el Navbar flotante */}
      <div className="pt-28 md:pt-32 px-4 md:px-8">
        
        {/* Sección Hero con traducciones */}
        <SeminarioHero t={t} />

        {/* Sección de la Grilla pasando el listado de datos real y el idioma activo */}
        <section className="mb-12 md:mb-16">
          <GrillaSeminario 
            charlas={listaDeCharlas}
            lang={lang} 
            onCharlaClick={handleCharlaClick} 
          />
        </section>

        {/* Espacio reservado para secciones inferiores (CTA / Newsletter) */}
        <section className="mb-12 md:mb-16 py-12 text-center">
          {/* Newsletter CTA opcional */}
        </section>
      </div>
    </>
  );
};

export default SeminarioHub;