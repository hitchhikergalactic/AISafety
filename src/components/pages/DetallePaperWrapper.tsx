import React, { useState } from 'react';
import { translations } from '@locales/translations';
import Navbar from '@components/Navbar';
import Footer from '@components/Footer';
import JoinModal from '@components/JoinModal';
import { ArrowLeft } from 'lucide-react';
import undefinedImgur from '@assets/undefined_imgur.png';

type Language = 'es' | 'en';

interface PaperData {
  title: string;
  summary: string;
  originalAuthors: string[];
  writtenBy: string;
  authorBio?: string; // Campo opcional para la mini bio
  translatedBy?: string;
  originalPaperUrl: string;
  traslationPaperUrl: string;
  keywords: string[];
  publishDate: Date;
  image?: string;
  translationNote?: string;
  summaryNote?: string;
}

interface PaperEntry {
  id: string;
  data: PaperData;
}

interface DetallePaperWrapperProps {
  lang: Language;
  paper: PaperEntry;
  children: React.ReactNode;
}

const DetallePaperWrapper: React.FC<DetallePaperWrapperProps> = ({ lang, paper, children }) => {
  const t = translations[lang];
  const [showModal, setShowModal] = useState(false);

  const {
    title,
    originalAuthors,
    writtenBy,
    authorBio,
    translatedBy,
    originalPaperUrl,
    traslationPaperUrl,
    translationNote,
    summaryNote,
    keywords,
    image
  } = paper.data;

  const openModal = () => {
    setShowModal(true);
  };

  const paperImage = image || undefinedImgur.src || undefinedImgur;

  return (
    <>
      <Navbar lang={lang} />
      
      <main className="bg-secundarios-light dark:bg-secundarios-dark transition-colors duration-300">
        <section className="w-full max-w-7xl mx-auto pt-30 md:pt-0">
          <div className="px-6 md:px-12 lg:px-8 pt-60 pb-20 md:py-45">
            
            {/* Botón volver */}
            <div className="mb-8">
              <a 
                href="/biblioteca-papers" 
                className="inline-flex items-center gap-2 text-neutral-500 hover:text-principal transition-colors text-sm font-semibold uppercase cursor-pointer font-sans"
              >
                <ArrowLeft size={16} />
                {lang === 'es' ? 'Volver a la biblioteca' : 'Back to library'}
              </a>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
              
              {/* COLUMNA IZQUIERDA: CONTENIDO Y DETALLES */}
              <div className="lg:col-span-7 flex flex-col">
                <h2 className="mb-8 leading-tight tracking-tight text-balance text-secundarios-dark dark:text-secundarios-light text-3xl md:text-4xl lg:text-5xl font-bold font-sans">
                  {title}
                </h2>

                {/* Notas de traducción */}
                {(translationNote || summaryNote) && (
                  <div className="space-y-3 mb-8">
                    {translationNote && (
                      <div className="p-4 text-principal border border-bg-principal-dark dark:border-principal rounded-md font-sans">
                        <strong>{t.biblioteca.translationNotes}:</strong> {translationNote}
                      </div>
                    )}
                  </div>
                )}

                {/* Contenido Markdown Renderizado */}
                <div className="max-w-none mb-8">
                  <article className="prose dark:prose-invert max-w-none leading-relaxed font-serif">
                    <div className="markdown-body">
                      {children}
                    </div>
                  </article>
                </div>
                {/* Autores/Traductores y Mini Bio (Compacto y Sans-Serif estricto) */}
                <div className="border-t-3 border-principal dark:border-zinc-800 pt-4 mt-6 text-sm !font-sans font-sans text-neutral-600 dark:text-neutral-400 space-y-3">
                  <div>
                    <p className="!font-sans m-0 leading-snug">
                      <strong>{t.biblioteca.writtenBy}:</strong> {writtenBy}
                    </p>
                    {/* Mini bio compacta y pegada al autor */}
                    {authorBio && (
                      <p className="!font-sans text-sm text-neutral-600 dark:text-neutral-400 leading-snug mt-0 m-0">
                        {authorBio}
                      </p>
                    )}
                  </div>
                  {translatedBy && (
                    <p className="!font-sans m-0 leading-snug pt-1">
                      <strong>{t.biblioteca.translatedBy}:</strong> {translatedBy}
                    </p>
                  )}
                </div>

              </div>

              {/* COLUMNA DERECHA: IMAGEN, LINKS, AUTORES ORIGINALES, KEYWORDS */}
              <div className="lg:col-span-5 w-full flex flex-col items-center lg:items-end">
                <div className="w-full max-w-[420px] space-y-6">
                  
                  {/* Portada */}
                  {paperImage && (
                    <div className="w-full overflow-hidden rounded-md border border-neutral-200 dark:border-neutral-800">
                      <img
                        src={paperImage}
                        alt={title}
                        className="w-full aspect-[3/2] object-cover object-center"
                        loading="lazy"
                      />
                    </div>
                  )}

                  {/* Botones de descarga / enlace */}
                  <div className="flex flex-col gap-3">
                    {traslationPaperUrl && (
                      <a
                        href={traslationPaperUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full text-center px-6 py-3 border border-neutral-300 dark:border-neutral-700 rounded-md font-sans text-xs uppercase  font-bold hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-all duration-200 cursor-pointer"
                      >
                        {t.biblioteca.traslationPaperUrl}
                      </a>
                    )}
                    {originalPaperUrl && (
                      <a
                        href={originalPaperUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full text-center px-6 py-3 border border-neutral-300 dark:border-neutral-700 rounded-md font-sans text-xs uppercase font-bold hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-all duration-200 cursor-pointer"
                      >
                        {t.biblioteca.originalPaper}
                      </a>
                    )}
                  </div>

                  {/* Autores Originales */}
                  {originalAuthors && originalAuthors.length > 0 && (
                    <div className="pt-4 border-t border-neutral-200 dark:border-zinc-800 font-sans">
                      <h6 className="text-xs uppercase font-bold text-neutral-400 mb-1 ">
                        {t.biblioteca.originalAuthors}
                      </h6>
                      <p className="text-sm font-medium text-secundarios-dark dark:text-secundarios-light">
                        {originalAuthors.join(', ')}
                      </p>
                    </div>
                  )}

                  {/* Palabras clave (Keywords) */}
                  {keywords && keywords.length > 0 && (
                    <div className="pt-4 border-t border-neutral-200 dark:border-zinc-800 font-sans">
                      <h6 className="text-xs uppercase font-bold text-neutral-400 mb-3">
                        {t.biblioteca.keywords}
                      </h6>
                      <div className="flex flex-wrap gap-2">
                        {keywords.map((keyword, idx) => (
                          <span
                            key={idx}
                            className="font-sans text-xs text-neutral-600 dark:text-neutral-400 uppercase "
                          >
                            {keyword}
                            {idx < keywords.length - 1 && " •"}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}

                </div>
              </div>

            </div>
          </div>
        </section>
      </main>

      <JoinModal
        isOpen={showModal}
        onClose={() => setShowModal(false)}
        lang={lang}
        title={t.subscribe.title}
        subtitle={t.subscribe.subtitle}
        action="https://script.google.com/macros/s/AKfycbwYyiRXPZdeFNO1ybtrnd5xa9ndfNvIfXr-e7rF0HsfKcz4eWckOsswSD9yoEO_87w63g/exec"
        subject="Nuevo suscriptor desde Detalle de Paper"
        successMessage={lang === 'es' ? 'Te hemos registrado correctamente.' : 'You have been successfully registered.'}
      />

      <Footer 
        lang={lang} 
        onSubscribeClick={openModal}
      />
    </>
  );
};

export default DetallePaperWrapper;