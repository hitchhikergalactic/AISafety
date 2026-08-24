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
  translatedBy?: string;
  originalPaperUrl: string;
  traslationPaperUrl:string;
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
    translatedBy,
    originalPaperUrl,
    traslationPaperUrl,
    translationNote,
    summaryNote,
    keywords,
    publishDate,
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
            
            {/* Botón volver arriba del grid */}
            <div className="mb-8">
              <a 
                href="/biblioteca-papers" 
                className="inline-flex items-center gap-2 text-neutral-500 hover:text-principal transition-colors text-sm font-semibold cursor-pointer"
              >
                <ArrowLeft size={16} />
                {lang === 'es' ? 'Volver a la biblioteca' : 'Back to library'}
              </a>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
              
              {/* COLUMNA IZQUIERDA: DETALLES TEXTUALES */}
              <div className="lg:col-span-7 flex flex-col">
                
                {/* Primer keyword como Tag principal */}
                <h5 className="mb-4 uppercase text-principal font-bold tracking-wider">
                  {keywords[0] || (lang === 'es' ? 'Paper' : 'Paper')}
                </h5>

                <h2 className="mb-8 leading-tight tracking-tight text-balance text-secundarios-dark dark:text-secundarios-light text-3xl md:text-4xl lg:text-5xl font-bold">
                  {title}
                </h2>

                {/* Notas de traducción / disclaimers */}
                {(translationNote || summaryNote) && (
                  <div className="space-y-3 mb-8">
                    {translationNote && (
                      <div className="p-4 text-principal border border-bg-principal-dark dark:border-principal rounded-md font-sans">
                        <strong>{t.biblioteca.translationNotes}:</strong> {translationNote}
                      </div>
                    )}
                  </div>
                )}

                {/* Contenido principal (Markdown renderizado de Astro) */}
                <div className="max-w-none mb-8">
                  <article className="prose dark:prose-invert max-w-none leading-relaxed font-serif">
                    <div className="markdown-body">
                      {children}
                    </div>
                  </article>
                </div>

                {/* Información sobre traductores y autores originales */}
                <div className="border-t border-secundarios-black dark:border-zinc-800 pt-8 mt-4 text-sm text-neutral-600 dark:text-neutral-400 space-y-2">
                  <div>
                    <h5 className="!text-principal texto-medium !font-bold mb-1">
                      {t.biblioteca.originalAuthors}:
                    </h5>
                    <p className="texto-medium opacity-85">
                      {originalAuthors.join(', ')}
                    </p>
                  </div>
                  <div className="pt-2">
                    <p>
                      <strong>{t.biblioteca.writtenBy}:</strong> {writtenBy}
                    </p>
                    {translatedBy && (
                      <p>
                        <strong>{t.biblioteca.translatedBy}:</strong> {translatedBy}
                      </p>
                    )}
                    <p className="text-xs text-neutral-400 mt-1">
                      {lang === 'es' ? 'Publicado el:' : 'Published on:'} {new Date(publishDate).toLocaleDateString(lang === 'es' ? 'es-ES' : 'en-US')}
                    </p>
                  </div>
                </div>
              </div>

              {/* COLUMNA DERECHA: IMAGEN Y ENLACE AL PAPER */}
              <div className="lg:col-span-5 w-full flex flex-col items-center lg:items-end">
                {paperImage && (
                  <div className="w-full max-w-[420px] mb-5 overflow-hidden rounded-md border border-secundarios-gray/10 dark:border-secundarios-gray/10">
                    <img
                      src={paperImage}
                      alt={title}
                      className="w-full aspect-[16/9] object-cover object-center"
                      loading="lazy"
                    />
                  </div>
                )}

                {/* Enlaces para ver el paper */}
                <div className="w-full max-w-[420px] flex flex-col gap-4">
                  {traslationPaperUrl && (
                    <a
                      href={traslationPaperUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full text-center px-6 py-3 border border-secundarios-dark dark:border-white rounded-md font-sans text-xs uppercase tracking-widest font-bold hover:bg-principal hover:border-principal hover:text-white transition-all duration-200 cursor-pointer"
                    >
                      {t.biblioteca.traslationPaperUrl}
                    </a>
                  )}
                  {originalPaperUrl && (
                    <a
                      href={originalPaperUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full text-center px-6 py-3 border border-secundarios-dark dark:border-white rounded-md font-sans text-xs uppercase tracking-widest font-bold hover:bg-principal hover:border-principal hover:text-white transition-all duration-200 cursor-pointer"
                    >
                      {t.biblioteca.originalPaper}
                    </a>
                  )}
                </div>

                {/* Palabras clave secundarias en la barra lateral */}
                <div className="w-full max-w-[420px] mt-8 pt-6 border-t border-neutral-200 dark:border-zinc-800">
                  <h6 className="text-xs uppercase font-bold text-neutral-400 mb-3 tracking-wider">
                    {t.biblioteca.keywords}
                  </h6>
                  <div className="flex flex-wrap gap-1.5">
                    {keywords.map((keyword, idx) => (
                      <span
                        key={idx}
                        className="font-sans text-[10px] bg-neutral-100 dark:bg-neutral-900 text-neutral-600 dark:text-neutral-400 px-2 py-1 rounded uppercase tracking-wider font-semibold"
                      >
                        {keyword}
                      </span>
                    ))}
                  </div>
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
