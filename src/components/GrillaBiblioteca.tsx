import React from 'react';
import { ArrowUpRight } from 'lucide-react';
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
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6"> 
          {papers.length > 0 ? (
            papers.map((paper) => {
              const {
                title,
                summary,
                writtenBy,
                keywords,
                image
              } = paper.data;

              const paperImage = image || undefinedImgur.src || undefinedImgur;

              return (
                <a 
                  key={paper.id}
                  href={`/biblioteca-papers/${paper.slug || paper.id}`}
                  /* Aumentamos el padding aquí con p-8 md:p-10 */
                  className="group border border-neutral-300 dark:border-neutral-800 rounded-md p-8 md:p-10 flex flex-col justify-between bg-white dark:bg-transparent shadow-sm hover:shadow-lg transition-all"
                >
                  <div>
                    {/* Encabezado: Etiquetas (máximo 2) + Botón con Flecha */}
                    <div className="flex justify-between items-start mb-4 gap-2">
                      <div className="flex flex-wrap gap-2">
                        {keywords.slice(0, 2).map((keyword, idx) => (
                          <span 
                            key={idx}
                            className="font-sans text-xs text-neutral-600 dark:text-neutral-400 uppercase"
                          >
                            {keyword}
                            {idx < Math.min(keywords.length, 2) - 1 && " •"}
                          </span>
                        ))}
                      </div>

                      {/* Icono de Flecha animado al hover */}
                      <span className="w-8 h-8 shrink-0 border border-neutral-200 dark:border-neutral-700 flex items-center justify-center rounded-md group-hover:bg-black group-hover:text-white group-hover:border-black dark:group-hover:bg-white dark:group-hover:text-black transition-colors">
                        <ArrowUpRight size={14} />
                      </span>
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
                    <h4 className="text-lg font-bold tracking-tight mb-2 my-8 leading-snug text-secundarios-dark dark:text-secundarios-light">
                      {title}
                    </h4>

                    {/* Resumen corto */}
                    <p className="text-secundario-dark dark:text-secundario-light text-sm leading-relaxed line-clamp-14 mb-4">
                      {summary}
                    </p>
                  </div>

                  {/* Traductores / Escritores */}
                  <div className="border-t border-neutral-100 dark:border-neutral-800 pt-3 mt-3 text-xs text-neutral-500 dark:text-neutral-400 space-y-1">
                    <p>
                      <strong>{t.biblioteca.writtenBy}:</strong> {writtenBy}
                    </p>
                  </div>
                </a>
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