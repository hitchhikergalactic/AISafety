// Logos de la red de hubs aliados y mapa del español: los usan la página «Red» y el resumen de la portada.
import React from 'react';
import { translations } from '@locales/translations';
import { CollaborativeCard } from '@components/UI';
import { hubs, type GrupoHub } from '@data/red-hubs';

type Language = 'es' | 'en';

// Un grupo con sus logos en filas centradas: la última fila, si queda incompleta, va en medio
export const GrupoHubs: React.FC<{ grupo: GrupoHub }> = ({ grupo }) => (
    <div className="flex flex-wrap justify-center items-center gap-y-2 md:gap-y-10 [&>*]:w-1/2 [&>*]:px-3 md:[&>*]:w-1/4 md:[&>*]:px-4">
        {hubs.filter((h) => h.grupo === grupo).map((h) => (
            <CollaborativeCard key={h.href} href={h.href} text={h.text} logo={h.logo} logoWhite={h.logoWhite} />
        ))}
    </div>
);

// Todos los logos en una franja compacta (portada)
export const FranjaHubs: React.FC = () => (
    <div className="flex flex-wrap justify-center items-center gap-y-1 [&>*]:w-1/2 [&>*]:px-3 sm:[&>*]:w-1/3 md:[&>*]:w-1/5 md:[&>*]:px-4">
        {hubs.map((h) => (
            <CollaborativeCard key={h.href} compact href={h.href} text={h.text} logo={h.logo} logoWhite={h.logoWhite} />
        ))}
    </div>
);

// Mapa del español en el mundo (el mismo de la Visión, con versión clara y oscura). Lo justo para leerlo de un vistazo:
// leyenda de dos tonos (los dos más claros del mapa se agrupan como «minoría importante»), una frase y la lista plegada.
export const MapaEspanol: React.FC<{ lang: Language }> = ({ lang }) => {
    const t = translations[lang].collaborators;
    return (
        <figure className="mx-auto max-w-3xl">
            <img src="/mapa-espanol-mundo-claro.webp" alt={t.mapAlt} width={1600} height={821} loading="lazy" decoding="async" className="w-full h-auto dark:hidden" />
            <img src="/mapa-espanol-mundo-oscuro.webp" alt={t.mapAlt} width={1600} height={821} loading="lazy" decoding="async" className="w-full h-auto hidden dark:block" />
            <figcaption className="mt-4 text-center font-sans">
                <div aria-hidden="true" className="flex justify-center gap-5 text-[0.8125rem] [&>span]:inline-flex [&>span]:items-center [&>span]:gap-2 [&>span]:before:content-[''] [&>span]:before:w-3 [&>span]:before:h-3 [&>span]:before:rounded-sm">
                    <span className="before:bg-principal">{t.mapLegend.official}</span>
                    <span className="before:bg-principal/40">{t.mapLegend.minority}</span>
                </div>
                <p className="!font-sans !text-base md:!text-lg font-bold !mt-5 !mb-1 text-balance">{t.countriesTitle}</p>
                <details className="text-sm [&_summary::-webkit-details-marker]:hidden">
                    <summary className="inline-block cursor-pointer list-none text-principal-texto underline underline-offset-4 hover:no-underline">{t.countriesToggle}</summary>
                    <p className="!font-sans !text-sm !leading-relaxed !mt-3 !mb-0 max-w-xl mx-auto text-balance">{t.countries.map((pais, i) => (
                        <React.Fragment key={pais}><span className="whitespace-nowrap">{pais}{i < t.countries.length - 1 ? ' ·' : ''}</span>{' '}</React.Fragment>
                    ))}</p>
                </details>
                <small className="block max-w-xl mx-auto mt-4 text-[0.6875rem] leading-normal opacity-60 text-balance">{t.mapCredit}</small>
            </figcaption>
        </figure>
    );
};
