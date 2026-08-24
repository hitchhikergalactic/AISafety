import React from 'react';
import { ArrowUpRight, BookOpen } from 'lucide-react';
import undefinedImgur from '../assets/undefined_imgur.png';

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

interface GrillaBibliotecaProps {
  papers: PaperEntry[];
  lang: Language;
  t: any;
}

const GrillaBiblioteca: React.FC<GrillaBibliotecaProps> = ({ papers, lang, t }) => {
  return (
    <section id="biblioteca-papers" className="py-8 md:py-16 px-4 md:px-8">
      <div className="max-w-[1100px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {papers.length > 0 ? (
            papers.map((paper) => {
              const {
                title,
                summary,
                originalAuthors,
                writtenBy,
                translatedBy,
                originalPaperUrl,
                keywords,
                image
              } = paper.data;

              const paperImage = image || undefinedImgur.src || undefinedImgur;

              return (
                <div 
                  key={paper.id}
                  className="group border border-neutral-300 dark:border-neutral-800 rounded-md p-6 flex flex-col justify-between bg-white dark:bg-neutral-950/30 shadow-sm hover:shadow-md transition-shadow"
                >
                  <div>
                    {/* Palabras Clave / Etiquetas */}
                    <div className="flex flex-wrap gap-1.5 mb-4">
                      {keywords.slice(0, 3).map((keyword, idx) => (
                        <span 
                          key={idx}
                          className="font-sans text-[10px] bg-neutral-100 dark:bg-neutral-900 text-neutral-600 dark:text-neutral-400 px-2 py-0.5 rounded uppercase tracking-wider font-semibold"
                        >
                          {keyword}
                        </span>
                      ))}
                    </div>

                    {/* Imagen de Portada */}
                    <div className="mb-4 overflow-hidden bg-neutral-100 dark:bg-neutral-900 aspect-[3/2] rounded-md">
                      <img 
                        src={paperImage} 
                        alt={title}
                        className="w-full h-full object-cover transition-all duration-700 group-hover:scale-105"
                      />
                    </div>

                    {/* Título del Paper */}
                    <h4 className="text-lg font-bold tracking-tight mb-2 leading-snug text-secundarios-dark dark:text-secundarios-light">
                      {title}
                    </h4>

                    {/* Resumen corto */}
                    <p className="text-secundario-dark dark:text-secundario-light text-sm leading-relaxed line-clamp-4 mb-4">
                      {summary}
                    </p>

                    {/* Traductores / Escritores */}
                    <div className="border-t border-neutral-100 dark:border-neutral-800 pt-3 mt-3 text-xs text-neutral-500 dark:text-neutral-400 space-y-1">
                      <p>
                        <strong>{t.biblioteca.writtenBy}:</strong> {writtenBy}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })
          ) : (
            <div className="col-span-full text-center py-12">
              <p className="text-neutral-500 dark:text-neutral-400">
                {t.biblioteca.noPapers}
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default GrillaBiblioteca;
