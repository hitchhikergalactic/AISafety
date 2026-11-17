import React from 'react';
import { ArrowRight, ArrowUpRight } from 'lucide-react';
import { parseText } from '@utils/parseText';
import { emphasizeBrand } from '@utils/emphasizeBrand';
import rodrigoImage from '../assets/rodrigo.jpg';
import discord from '../assets/discord.webp';
import lecturaImage from '../assets/boletin-semana-ias.webp';
import ultimoBoletin from '../data/ultimo-boletin.json';
import { substackUrl } from '../data/delegaciones';
import cursoAgi from '../assets/curso_agi.jpg';

interface BentoGridProps {
  t: any;
  lang: 'es' | 'en';
  onModalOpen: () => void;
}

// Programas de la portada: cuatro tarjetas iguales que responden de un vistazo a qué es, para quién y cuándo
// (etiqueta, título, dos o tres líneas y una línea de datos). La ficha completa vive en la página de cada programa.
const BentoGrid: React.FC<BentoGridProps> = ({ t, lang }) => {
  const langPrefix = lang === 'es' ? '' : '/en';
  const u = t.upcoming;

  const getImageSrc = (img: any) => {
    if (!img) return '';
    if (typeof img === 'string') return img;
    if (img.src && typeof img.src === 'string') return img.src;
    if (img.default && typeof img.default === 'string') return img.default;
    return '';
  };

  const tarjetas = [
    { href: `${langPrefix}/curso-estrategia-agi`, externo: false, img: cursoAgi, alt: u.innovation.title, tag: u.innovation.tag, titulo: u.innovation.title, texto: emphasizeBrand(u.innovation.description), meta: u.innovation.meta, cta: u.moreInfo },
    { href: `${langPrefix}/seminario-bluedot-impact`, externo: false, img: rodrigoImage, alt: u.bluedot.title, tag: u.bluedot.tag, titulo: u.bluedot.title, texto: parseText(u.bluedot.description), meta: u.bluedot.meta, cta: u.moreInfo },
    { href: substackUrl, externo: true, img: lecturaImage, alt: u.readingGroup.imageAlt, tag: u.readingGroup.tag, titulo: <>{u.readingGroup.kicker} <span lang="es">{ultimoBoletin.titulo}</span></>, texto: u.readingGroup.description, meta: u.readingGroup.meta, cta: u.readingGroup.cta },
    { href: 'https://discord.com/invite/gm6v9Cwa58', externo: true, img: discord, alt: u.research.title, tag: u.research.tag, titulo: u.research.title, texto: parseText(u.research.description), meta: u.research.meta, cta: u.research.cta },
  ];

  return (
    <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 list-none !p-0 !m-0">
      {tarjetas.map((c) => (
        <li key={c.href} className="!m-0 flex">
          <a
            href={c.href}
            {...(c.externo ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
            className="group flex flex-col w-full rounded-anthro border border-secundarios-dark/15 dark:border-secundarios-light/15 bg-white dark:bg-white/5 p-5 no-underline text-secundarios-dark dark:text-secundarios-light hover:border-principal hover:shadow-anthro-card transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-principal"
          >
            <div className="aspect-[16/10] overflow-hidden rounded-md bg-neutral-100 mb-4">
              <img src={getImageSrc(c.img)} alt={c.alt} loading="lazy" decoding="async" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
            </div>
            <span className="font-sans text-xs font-semibold uppercase tracking-wider text-label-gray">{c.tag}</span>
            <h3 className="!text-lg !font-bold !leading-snug !mt-1 !mb-2 text-balance">{c.titulo}</h3>
            <p className="!text-base !leading-normal !mb-4">{c.texto}</p>
            <div className="mt-auto">
              {/* Separador «·» dibujado como punto centrado: el glifo de Overpass queda descentrado y pegado a la palabra siguiente */}
              {c.meta && (
                <span className="block font-sans text-sm text-secundarios-dark/75 dark:text-secundarios-light/75 mb-3">
                  {c.meta.split(' · ').map((parte: string, i: number) => (
                    <React.Fragment key={parte}>{i > 0 && <span aria-hidden="true" className="inline-block w-[3px] h-[3px] rounded-full bg-current mx-2 align-middle" />}{i > 0 && <span className="sr-only"> · </span>}{parte}</React.Fragment>
                  ))}
                </span>
              )}
              {/* En línea (no flex): si el texto parte en dos líneas, la flecha sigue pegada a la última palabra */}
              <span className="font-sans text-base font-bold text-principal-texto">
                <span className="underline underline-offset-4 group-hover:no-underline">{c.cta}</span>
                {c.externo ? <ArrowUpRight size={18} aria-hidden="true" className="inline ml-1 align-[-3px]" /> : <ArrowRight size={18} aria-hidden="true" className="inline ml-1 align-[-3px]" />}
              </span>
            </div>
          </a>
        </li>
      ))}
    </ul>
  );
};

export default BentoGrid;
