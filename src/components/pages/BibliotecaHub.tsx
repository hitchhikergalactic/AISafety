import React, { useState } from 'react';
import { ArrowRight } from 'lucide-react';
import { translations } from '@locales/translations';
import Navbar from '@components/Navbar';
import BibliotecaHero from '@components/BibliotecaHero';
import GrillaBiblioteca from '@components/GrillaBiblioteca';
import Footer from '@components/Footer';
import JoinModal from '@components/JoinModal';

type Language = 'es' | 'en';

interface PaperData {
  title: string;
  summary: string;
  originalAuthors: string[];
  writtenBy: string;
  translatedBy?: string;
  originalPaperUrl: string;
  traslationPaperUrl: string;
  keywords: string[];
  publishDate: Date;
  image?: string;
}

interface PaperEntry {
  id: string;
  data: PaperData;
}

interface BibliotecaHubProps {
  lang: Language;
  papers: PaperEntry[];
}

const BibliotecaHub: React.FC<BibliotecaHubProps> = ({ lang, papers }) => {
  const t = translations[lang];
  const [showModal, setShowModal] = useState(false);

  const openModal = () => {
    setShowModal(true);
  };

  return (
    <>
      {/* Barra de navegación global */}
      <Navbar lang={lang} />
      
      {/* Contenedor principal con espaciado superior para el Navbar */}
      <div className="pt-32 md:pt-40 px-4 md:px-8">
        
        {/* Hero de la biblioteca */}
        <BibliotecaHero t={t} />

        {/* Grilla de papers */}
        <GrillaBiblioteca 
          papers={papers}
          lang={lang} 
          t={t}
        />

        {/* Lecturas externas: se enlazan, no se copian, porque el sitio no indica licencia */}
        <section className="max-w-2xl mx-auto mb-16 md:mb-24 p-6 md:p-8 bg-secundarios-gray dark:bg-white/5 rounded-anthro text-center">
          <h4 className="!mb-2">{t.biblioteca.masLecturasTitle}</h4>
          <p className="!mb-4 text-secundarios-dark/80 dark:text-secundarios-light/80">{t.biblioteca.masLecturasText}</p>
          <a
            href="https://aistranslate.org/translations/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 py-2 font-sans font-bold text-principal-texto hover:underline"
          >
            {t.biblioteca.masLecturasCta}
            <ArrowRight size={18} aria-hidden="true" />
          </a>
        </section>
      </div>

      <JoinModal
        isOpen={showModal}
        onClose={() => setShowModal(false)}
        lang={lang}
        title={t.subscribe.title}
        subtitle={t.subscribe.subtitle}
        action="https://script.google.com/macros/s/AKfycbwYyiRXPZdeFNO1ybtrnd5xa9ndfNvIfXr-e7rF0HsfKcz4eWckOsswSD9yoEO_87w63g/exec"
        subject="Nuevo suscriptor desde Biblioteca de Papers"
        successMessage={lang === 'es' ? 'Te hemos registrado correctamente.' : 'You have been successfully registered.'}
      />

      <div id="footer">
        <Footer 
          lang={lang} 
          onSubscribeClick={openModal}
        />
      </div>
    </>
  );
};

export default BibliotecaHub;
