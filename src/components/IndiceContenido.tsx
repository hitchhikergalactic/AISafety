import React, { useEffect, useState } from 'react';
import { ChevronDown } from 'lucide-react';

export interface EntradaIndice {
  // 2 para las secciones (h2), 3 para las subsecciones (h3)
  depth: 2 | 3;
  slug: string;
  text: string;
}

interface IndiceContenidoProps {
  titulo: string;
  entradas: readonly EntradaIndice[];
}

// Distancia desde arriba (px) a partir de la cual un encabezado cuenta como la sección que se está leyendo.
// Algo más que el scroll-margin-top de los encabezados (7rem), para que al pulsar un enlace del índice quede marcado.
const umbralSeccionActiva = 140;

const Lista: React.FC<{ entradas: readonly EntradaIndice[]; activa: string | null; onNavegar?: () => void }> = ({
  entradas,
  activa,
  onNavegar,
}) => (
  <ul className="font-sans text-sm">
    {entradas.map(({ depth, slug, text }) => {
      const esActiva = slug === activa;
      return (
        <li key={slug}>
          <a
            href={`#${slug}`}
            onClick={onNavegar}
            aria-current={esActiva ? 'location' : undefined}
            className={`block border-l-2 py-1.5 leading-snug transition-colors hover:text-principal ${
              depth === 3 ? 'pl-7' : 'pl-3'
            } ${
              esActiva
                ? 'border-principal font-semibold text-principal-texto'
                : 'border-secundarios-dark/10 text-secundarios-dark/80 dark:border-secundarios-light/10 dark:text-secundarios-light/80'
            }`}
          >
            {text}
          </a>
        </li>
      );
    })}
  </ul>
);

// Índice «Contenido» de un documento. En escritorio es una columna fija a la izquierda que marca la sección que se
// está leyendo; en móvil, un desplegable plegado encima del texto. Los enlaces apuntan a los id de los encabezados.
const IndiceContenido: React.FC<IndiceContenidoProps> & { Movil: React.FC<IndiceContenidoProps> } = ({ titulo, entradas }) => {
  const activa = useSeccionActiva(entradas);

  return (
    <nav aria-label={titulo} className="sticky top-32 max-h-[calc(100vh-10rem)] overflow-y-auto pr-2">
      <p className="!mb-3 !font-sans !text-sm !font-semibold uppercase tracking-widest text-principal-texto">{titulo}</p>
      <Lista entradas={entradas} activa={activa} />
    </nav>
  );
};

const IndiceContenidoMovil: React.FC<IndiceContenidoProps> = ({ titulo, entradas }) => {
  const activa = useSeccionActiva(entradas);
  const [abierto, setAbierto] = useState(false);

  return (
    <details
      open={abierto}
      onToggle={(e) => setAbierto((e.currentTarget as HTMLDetailsElement).open)}
      className="group rounded-xl border border-secundarios-dark/10 bg-white/70 dark:border-white/10 dark:bg-white/5"
    >
      <summary className="flex cursor-pointer list-none items-center justify-between px-5 py-4 font-sans text-sm font-semibold uppercase tracking-widest text-principal-texto [&::-webkit-details-marker]:hidden">
        {titulo}
        <ChevronDown size={18} className="transition-transform group-open:rotate-180" aria-hidden="true" />
      </summary>
      <nav aria-label={titulo} className="px-5 pb-4">
        <Lista entradas={entradas} activa={activa} onNavegar={() => setAbierto(false)} />
      </nav>
    </details>
  );
};

IndiceContenido.Movil = IndiceContenidoMovil;

// Slug de la sección que se está leyendo: el último encabezado que ya ha pasado por debajo del menú fijo.
function useSeccionActiva(entradas: readonly EntradaIndice[]): string | null {
  const [activa, setActiva] = useState<string | null>(entradas[0]?.slug ?? null);

  useEffect(() => {
    let frame = 0;
    const calcular = () => {
      frame = 0;
      let actual = entradas[0]?.slug ?? null;
      for (const { slug } of entradas) {
        const el = document.getElementById(slug);
        if (el && el.getBoundingClientRect().top <= umbralSeccionActiva) actual = slug;
      }
      setActiva(actual);
    };
    const alHacerScroll = () => {
      if (!frame) frame = requestAnimationFrame(calcular);
    };
    calcular();
    window.addEventListener('scroll', alHacerScroll, { passive: true });
    window.addEventListener('resize', alHacerScroll);
    return () => {
      window.removeEventListener('scroll', alHacerScroll);
      window.removeEventListener('resize', alHacerScroll);
      if (frame) cancelAnimationFrame(frame);
    };
  }, [entradas]);

  return activa;
}

export default IndiceContenido;
