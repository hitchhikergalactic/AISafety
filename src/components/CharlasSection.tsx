import React from 'react';
import EmbedAlPulsar from '@components/EmbedAlPulsar';
import { FaLinkedin } from 'react-icons/fa';
import { LuMail, LuGlobe } from 'react-icons/lu';
import { listaDeCharlas } from '@data/charlas';
import type { Charla } from '@data/charlas';
import { parseText } from '@utils/parseText';

interface CharlasSectionProps {
  charlaActivaProp?: Charla;
  lang?: 'es' | 'en';
}

const getYoutubeVideoId = (url: string) => {
  try {
    const parsedUrl = new URL(url);

    if (parsedUrl.hostname.includes('youtu.be')) {
      return parsedUrl.pathname.split('/').filter(Boolean)[0] || '';
    }

    if (parsedUrl.searchParams.get('v')) {
      return parsedUrl.searchParams.get('v') || '';
    }

    const shortsMatch = parsedUrl.pathname.match(/\/shorts\/([^/]+)/);
    if (shortsMatch?.[1]) {
      return shortsMatch[1];
    }

    const embedMatch = parsedUrl.pathname.match(/\/embed\/([^/]+)/);
    if (embedMatch?.[1]) {
      return embedMatch[1];
    }
  } catch {
    return '';
  }

  return '';
};

const CharlasSection: React.FC<CharlasSectionProps> = ({ charlaActivaProp, lang = 'es' }) => {
  // Si no se provee charlaActivaProp, tomamos la primera de la lista
  const charlaActiva = charlaActivaProp || listaDeCharlas[0];
  
  // Filtramos las charlas restantes para el listado inferior
  const otrasCharlas = listaDeCharlas.filter((c) => c.id !== charlaActiva.id);
  const langPrefix = lang === 'es' ? '' : '/en';

  // Selección dinámica de campos bilingües basados exactamente en la interfaz
  const tagActivo = lang === 'es' ? charlaActiva.tagEs : charlaActiva.tagEn;
  const tituloActivo = lang === 'es' ? charlaActiva.tituloEs : charlaActiva.tituloEn;
  const cuerpoTextoActivo = lang === 'es' ? charlaActiva.textoEs : charlaActiva.textoEn;
  const { expositor } = charlaActiva;
  const expositorTitulo = lang === 'es' ? expositor.tituloEs : expositor.tituloEn;
  const expositorBio = lang === 'es' ? expositor.bioEs : expositor.bioEn;
  const imagenDisertante = charlaActiva.imagen || expositor.imagen;
  const videoYoutube = charlaActiva.videoYoutube?.trim();
  const youtubeVideoId = videoYoutube ? getYoutubeVideoId(videoYoutube) : '';
  const youtubeThumbnail = youtubeVideoId ? `https://img.youtube.com/vi/${youtubeVideoId}/hqdefault.jpg` : '';
  const videoYoutubeEmbed = youtubeVideoId ? `https://www.youtube-nocookie.com/embed/${youtubeVideoId}?rel=0&modestbranding=1` : '';

  return (
    <section className="w-full max-w-7xl mx-auto pt-30 md:pt-0">
      {/* ====================================
          SECCIÓN SUPERIOR: CHARLA ACTIVA
          ==================================== */}
      <div className="px-6 md:px-12 lg:px-8 pt-60 pb-20 md:py-45">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* COLUMNA IZQUIERDA: DETALLES TEXTUALES */}
          <div className="lg:col-span-7 flex flex-col">
            
            <h5 className="mb-4 uppercase text-principal-texto"> {tagActivo}</h5>

            <h1 className="como-h2 mb-8 leading-tight tracking-tight text-balance">
              {tituloActivo}
            </h1>

            {/* Redes e íconos de contacto */}
            <div className="flex gap-6 items-center mb-8 text-2xl">
              {expositor.linkedin.length > 0 && (
                <a
                  href={expositor.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-principal transition-colors"
                  aria-label="LinkedIn"
                >
                  <FaLinkedin />
                </a>
              )}
              {expositor.email.length > 0 && (
                <a
                  href={`mailto:${expositor.email}`}
                  className="hover:text-principal transition-colors"
                  aria-label="Email"
                >
                  <LuMail />
                </a>
              )}
              {expositor.web.length > 0 && (
                <a
                  href={expositor.web}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-principal transition-colors"
                  aria-label="Website"
                >
                  <LuGlobe />
                </a>
              )}
            </div>

            {/* Contenido/Cuerpo largo de la charla */}
            <div className="max-w-none mb-8">
              <p>{parseText(cuerpoTextoActivo)}</p>
            </div>

            <div className="border-t border-secundarios-black dark:border-zinc-800 pt-8 mt-4">
              <div>
                <h5 className="!text-principal-texto texto-medium !font-bold mb-3">
                  {expositor.nombre} {expositor.apellido}
                </h5>
                <h5 className="texto-medium mb-1 opacity-80 mt-1">
                  {parseText(expositorTitulo)}
                </h5>
                <h5 className="texto-medium mb-1 opacity-80 mt-2">
                  {parseText(expositorBio)}
                </h5>
              </div>
            </div>
          </div>

          {/* COLUMNA DERECHA: BOTÓN DE DOCUMENTACIÓN */}
          <div className="lg:col-span-5 w-full flex flex-col items-center lg:items-end">
            {imagenDisertante && (
              <div className="w-full max-w-[420px] mb-5 overflow-hidden rounded-md border border-secundarios-gray/10 dark:border-secundarios-gray/10 ">
                <img
                  src={imagenDisertante}
                  alt={`${expositor.nombre} ${expositor.apellido}`}
                  className="w-full aspect-[16/9] object-cover object-center"
                  loading="lazy"
                />
              </div>
            )}

            {videoYoutubeEmbed && (
              <div className="w-full max-w-[420px] mb-5">
                <EmbedAlPulsar
                  lang={lang}
                  proveedor="youtube"
                  src={videoYoutubeEmbed}
                  title={`${expositor.nombre} ${expositor.apellido} - YouTube video`}
                  miniatura={youtubeThumbnail}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  className="w-full aspect-video overflow-hidden rounded-md border border-secundarios-gray/10 dark:border-secundarios-gray/10"
                />
              </div>
            )}

            {/* Enlace para ver documentación */}
            {charlaActiva.presentacion && (
              <a
                href={charlaActiva.presentacion}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full max-w-[420px] text-center px-6 py-3 border border-secundarios-dark dark:border-white rounded-md font-sans text-xs uppercase font-bold hover:bg-principal hover:border-principal hover:text-white transition-all duration-200"
              >
                {lang === 'es' ? 'Más información' : 'More information'}
              </a>
            )}
          </div>

        </div>
      </div>
      
      {/* ====================================
          SECCIÓN INFERIOR: OTRAS CHARLAS
          ==================================== */}
      <div className="px-6 md:px-12 lg:px-8 py-16 border-t border-secundarios-gray dark:border-zinc-800">     
        {/* Grid de 3 columnas */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {otrasCharlas.map((charla) => (
            <div key={charla.id}>
              <a
                href={`${langPrefix}/seminario-bluedot-spain/${charla.id}`}
                className="group text-left flex flex-col justify-between h-full p-6 rounded-md border border-secundarios-gray dark:border-zinc-800 bg-transparent hover:border-zinc-400 dark:hover:border-zinc-600 transition-all duration-300 w-full block"
              >
                <div>
                  <div className="flex justify-between items-center mb-3">
                    <span className="texto-small !opacity-100 font-bold text-principal-texto">
                      {new Date(charla.fecha).toLocaleDateString(lang === 'es' ? 'es-ES' : 'en-US', { year: 'numeric', month: 'short' })}
                    </span>
                    <span className="text-[10px] uppercase font-bold  px-2 py-0.5 rounded bg-secundarios-gray dark:bg-zinc-800 text-label-gray">
                      {lang === 'es' ? charla.tagEs : charla.tagEn}
                    </span>
                  </div>

                  <h5 className="normal-case font-bold line-clamp-2 mb-2">
                    {lang === 'es' ? charla.tituloEs : charla.tituloEn}
                  </h5>

                  <p className="texto-small line-clamp-3 mb-4 opacity-80">
                    {lang === 'es' ? charla.descripcionCortaEs : charla.descripcionCortaEn}
                  </p>
                </div>
                <div className="pt-4 border-t border-secundarios-gray dark:border-zinc-800 w-full flex justify-between items-center text-xs font-semibold uppercase text-principal-texto">
                  <span>{charla.expositor.nombre} {charla.expositor.apellido}</span>
                </div>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CharlasSection;