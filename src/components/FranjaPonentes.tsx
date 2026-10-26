// Franja de logos de las organizaciones de nuestros ponentes (Seminario y portada), al estilo de AI Safety Berlin.
// Cinta continua: la lista va dos veces seguida y la pista se desplaza la mitad de su ancho (ver .franja-logos en global.css).
import React, { useState } from 'react';
import { Pause, Play } from 'lucide-react';
import { translations } from '@locales/translations';
import { organizacionesPonentes } from '@data/organizaciones-ponentes';

type Language = 'es' | 'en';

interface FranjaPonentesProps {
    lang: Language;
    // En la portada se quitan las que ya aparecen en el patrocinio y en la franja de la Red
    portada?: boolean;
}

const FranjaPonentes: React.FC<FranjaPonentesProps> = ({ lang, portada = false }) => {
    const t = translations[lang].speakersOrgs;
    const [pausada, setPausada] = useState(false);
    const organizaciones = organizacionesPonentes.filter((o) => !portada || o.enPortada !== false);

    // La segunda copia solo sirve para que la cinta no se corte: se oculta a los lectores de pantalla.
    // Sin loading="lazy": los logos entran en pantalla por la animación, no por el scroll, y el navegador no los cargaba
    const elementos = (copia: boolean) =>
        organizaciones.map((o) => (
            <li key={`${copia ? 'b' : 'a'}-${o.nombre}`} aria-hidden={copia || undefined} className="flex w-28 md:w-32 shrink-0 flex-col items-center gap-2 px-2 text-center">
                <span className="flex h-14 w-14 md:h-16 md:w-16 items-center justify-center rounded-xl bg-white p-1.5 shadow-anthro-subtle">
                    <img src={o.logo.src} width={160} height={160} alt="" decoding="async" className="h-full w-full object-contain" />
                </span>
                <span className="font-sans text-xs md:text-sm font-semibold leading-tight text-secundarios-dark/80 dark:text-secundarios-light/80 text-balance">{o.nombre}</span>
            </li>
        ));

    return (
        <div className="text-center">
            <p className="!font-sans !text-base md:!text-lg font-semibold !mb-6 text-secundarios-dark dark:text-secundarios-light">{t.title}</p>
            <div className={`franja-logos${pausada ? ' is-paused' : ''}`}>
                <ul className="franja-logos-pista" style={{ '--franja-duracion': `${organizaciones.length * 2.5}s` } as React.CSSProperties}>
                    {elementos(false)}
                    {elementos(true)}
                </ul>
            </div>
            {/* El movimiento continuo debe poder detenerse (WCAG 2.2.2) */}
            <button
                type="button"
                onClick={() => setPausada((v) => !v)}
                aria-pressed={pausada}
                className="mt-4 inline-flex items-center gap-1.5 rounded-full border border-secundarios-dark/20 dark:border-secundarios-light/30 px-3 py-1 font-sans text-xs font-semibold text-secundarios-dark dark:text-secundarios-light hover:border-principal hover:text-principal transition-colors"
            >
                {pausada ? <Play size={14} aria-hidden="true" /> : <Pause size={14} aria-hidden="true" />}
                {pausada ? t.play : t.pause}
            </button>
        </div>
    );
};

export default FranjaPonentes;
