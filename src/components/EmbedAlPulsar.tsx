import React, { useState } from 'react';
import { embedsAlPulsar } from '@data/cookies';

type Language = 'es' | 'en';

interface EmbedAlPulsarProps {
  lang: Language;
  proveedor: 'youtube' | 'luma';
  src: string;
  title: string;
  // Tamaño y borde del marco: se aplican igual antes y después de pulsar, para que la página no salte
  className?: string;
  // Solo YouTube: imagen de fondo del botón
  miniatura?: string;
  allow?: string;
}

// Contenido de terceros (vídeo de YouTube, calendario de Luma) que no se descarga hasta que la persona pulsa.
// Antes de pulsar, se avisa de que el tercero guardará datos en el dispositivo (Guía de cookies de la AEPD, 3.2.3 d):
// así no hace falta banner. El aviso enlaza a la política de cookies.
const EmbedAlPulsar: React.FC<EmbedAlPulsarProps> = ({ lang, proveedor, src, title, className = '', miniatura, allow }) => {
  const [cargado, setCargado] = useState(false);
  const textos = embedsAlPulsar[proveedor][lang];
  const langPrefix = lang === 'es' ? '' : '/en';

  return (
    <div className="w-full">
      <div className={`relative ${className}`}>
        {cargado ? (
          <iframe
            className="absolute inset-0 h-full w-full"
            src={src}
            title={title}
            frameBorder="0"
            allow={allow}
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          />
        ) : proveedor === 'youtube' ? (
          <button
            type="button"
            onClick={() => setCargado(true)}
            className="absolute inset-0 block w-full text-left group cursor-pointer"
            aria-label={textos.boton}
          >
            {miniatura && (
              <img src={miniatura} alt={textos.miniaturaAlt} className="absolute inset-0 h-full w-full object-cover" loading="lazy" />
            )}
            <div className="absolute inset-0 bg-black/20" />
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="flex h-16 w-16 items-center justify-center rounded-full bg-white/90 text-principal shadow-lg transition-transform duration-200 group-hover:scale-105">
                <svg viewBox="0 0 24 24" className="h-8 w-8" aria-hidden="true">
                  <path fill="currentColor" d="M8 5v14l11-7z" />
                </svg>
              </span>
            </div>
          </button>
        ) : (
          <div className="absolute inset-0 flex items-center justify-center p-6">
            <button
              type="button"
              onClick={() => setCargado(true)}
              className="inline-flex items-center justify-center rounded-xl bg-principal px-8 py-4 text-lg text-white font-bold hover:bg-principal/90 transition-all shadow-md cursor-pointer"
            >
              {textos.boton}
            </button>
          </div>
        )}
      </div>

      {!cargado && (
        <p className="!mt-3 !mb-0 !font-sans !text-xs !leading-snug text-secundarios-dark/70 dark:text-secundarios-light/70">
          {textos.aviso}{' '}
          <a href={`${langPrefix}/cookies`} className="font-semibold text-principal hover:underline">
            {embedsAlPulsar.masInfo[lang]}
          </a>
        </p>
      )}
    </div>
  );
};

export default EmbedAlPulsar;
