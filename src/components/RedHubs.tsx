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

// Mapa del español en el mundo (el mismo de la Visión, con versión clara y oscura) y los 20 países (más Puerto Rico) donde es lengua oficial
export const MapaEspanol: React.FC<{ lang: Language }> = ({ lang }) => {
    const t = translations[lang].collaborators;
    return (
        <figure className="mx-auto max-w-4xl">
            <img src="/mapa-espanol-mundo-claro.webp" alt={t.mapAlt} width={1600} height={821} loading="lazy" decoding="async" className="w-full h-auto dark:hidden" />
            <img src="/mapa-espanol-mundo-oscuro.webp" alt={t.mapAlt} width={1600} height={821} loading="lazy" decoding="async" className="w-full h-auto hidden dark:block" />
            <div className="flex flex-wrap justify-center gap-x-5 gap-y-2 mt-4 text-[0.8125rem] leading-snug font-sans [&>span]:inline-flex [&>span]:items-center [&>span]:gap-2 [&>span]:before:content-[''] [&>span]:before:flex-none [&>span]:before:w-3.5 [&>span]:before:h-3.5 [&>span]:before:rounded">
                <span className="before:bg-principal">{t.mapLegend.official}</span>
                <span className="before:bg-principal/55">{t.mapLegend.important}</span>
                <span className="before:bg-principal/25">{t.mapLegend.significant}</span>
            </div>
            <figcaption className="mt-8 md:mt-10 text-center">
                <h3 className="!font-bold !text-xl md:!text-2xl !mb-4 text-balance">{t.countriesTitle}</h3>
                <ul className="flex flex-wrap justify-center gap-2 list-none p-0 m-0">
                    {t.countries.map((pais) => (
                        <li key={pais} className="px-3 py-1 rounded-full border border-secundarios-dark/15 dark:border-white/15 text-sm font-sans">{pais}</li>
                    ))}
                </ul>
                <small className="block mt-6 text-xs leading-normal font-sans opacity-70 text-balance">{t.mapCredit}</small>
            </figcaption>
        </figure>
    );
};
