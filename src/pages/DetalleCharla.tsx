import React from 'react';
import { useParams } from 'react-router-dom';
import { translations } from '../locales/translations';
import Navbar from '../components/Navbar';
import CharlasSection from '../components/CharlasSection';
import Footer from '../components/Footer';
import { listaDeCharlas } from '../data/charlas'; //

type Language = 'es' | 'en';
type Theme = 'light' | 'dark';

interface DetalleCharlaProps {
  lang: Language;
  setLang: (lang: Language) => void;
  theme: Theme;
  setTheme: (theme: Theme) => void;
}

const DetalleCharla: React.FC<DetalleCharlaProps> = ({ lang, setLang, theme, setTheme }) => {
  const { charlaId } = useParams<{ charlaId: string }>(); //
  const t = translations[lang]; //
  const charlaActiva = charlaId 
    ? listaDeCharlas.find((c) => c.id === charlaId) || null //
    : listaDeCharlas[0] || null; //

  if (!charlaActiva) {
    return (
      <>
        <Navbar lang={lang} setLang={setLang} theme={theme} setTheme={setTheme} t={t} />
        <div className="w-full text-center py-20">
          <h3>Charla no encontrada</h3>
        </div>
      </>
    );
  }

  return (
    <>
      <Navbar lang={lang} setLang={setLang} theme={theme} setTheme={setTheme} t={t} />
      <main className="bg-secundarios-light dark:bg-secundarios-dark transition-colors duration-300">
        <CharlasSection charlaActivaProp={charlaActiva} lang={lang} />
      </main>
      <Footer 
        lang={lang} 
        theme={theme} 
        onSubscribeClick={() => {}}
      />
    </>
  );
};

export default DetalleCharla;