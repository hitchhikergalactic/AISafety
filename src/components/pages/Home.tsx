import React, { useState, useEffect } from 'react';
import { translations } from '@locales/translations';
import { parseText } from '@utils/parseText';
import {
    ArrowRight,
    ArrowUpRight
} from 'lucide-react';
import { substackUrl } from '@data/delegaciones';
import { FaLinkedin } from "react-icons/fa";

// --- Import components ---
import Navbar from '@components/Navbar';
import { Section } from '@components/UI';
import { FranjaHubs } from '@components/RedHubs';
import BentoGrid from '@components/BentoGrid';
import Footer from '@components/Footer';
import ImpactFigures from '@components/ImpactFigures';
import JoinModal from '@components/JoinModal';
import FranjaPonentes from '@components/FranjaPonentes';
import MapaHispanohablante from '@components/MapaHispanohablante';
import ProximosEventos, { eventos, vigentes, limpiarNombre, conUtm } from '@components/ProximosEventos';

// --- Import assets (logo del patrocinador; los de la red están en src/data/red.ts) ---
import logoBlueDot from '@assets/logos__bluedot_impact.svg';
import logoBlueDotWhite from '@assets/logos__bluedot_impact_white.svg';

// Nota de prensa oficial (PDF en digital.gob.es): abre sin banner de cookies ni rastreadores
const ministerQuoteUrl = 'https://digital.gob.es/content/dam/portal-mtdfp/comunicacion/comunicacion_ministro/2026/09/05-09-26/050926NdP.%C3%93scar%20L%C3%B3pez%20UNAM.pdf';

type Language = 'es' | 'en';

// Sistema de la portada: todas las secciones comparten el mismo ancho (el de <Section>), el mismo borde izquierdo
// y el mismo encabezado (título grande en tinta, enlace secundario a la derecha). El naranja queda para la acción.
export const tituloSeccion = "!text-[clamp(1.75rem,1.2rem+1.6vw,2.5rem)] !leading-tight !mb-0 !font-bold text-secundarios-dark dark:text-secundarios-light text-balance";
export const tarjeta = "rounded-anthro border border-secundarios-dark/15 dark:border-secundarios-light/15 bg-white dark:bg-white/5";

const EncabezadoSeccion: React.FC<{ titulo: string; enlace?: { href: string; texto: string; externo?: boolean }; children?: React.ReactNode }> = ({ titulo, enlace, children }) => (
    <div className="mb-6 md:mb-10">
        <div className="flex items-end justify-between gap-4">
            <h2 className={tituloSeccion}>{titulo}</h2>
            {enlace && (
                <a href={enlace.href} {...(enlace.externo ? { target: '_blank', rel: 'noopener noreferrer' } : {})} className="shrink-0 inline-flex items-center gap-1 font-sans font-bold text-principal-texto underline underline-offset-4 hover:no-underline">
                    {enlace.texto} {enlace.externo ? <ArrowUpRight size={18} aria-hidden="true" /> : <ArrowRight size={18} aria-hidden="true" />}
                </a>
            )}
        </div>
        {children && <div className="mt-4 max-w-2xl [&>p]:!mb-0">{children}</div>}
    </div>
);

interface HomeProps {
    lang: Language;
}

export default function Home({ lang }: HomeProps) {
    const [showModal, setShowModal] = useState(false);
    const [modalType, setModalType] = useState<'event' | 'subscribe'>('event');
    const t = translations[lang];

    // Función auxiliar segura para la imagen local
    const getImageSrc = (img: any) => {
        if (!img) return '';
        if (typeof img === 'string') return img;
        if (img.src && typeof img.src === 'string') return img.src;
        if (img.default && typeof img.default === 'string') return img.default;
        return '';
    };

    // Botón principal de la portada: directo a la inscripción del próximo evento en Luma (un clic, sin bajar a la lista).
    // `ahora` empieza en 0 (igual en servidor y navegador, para que la hidratación coincida) y se fija al cargar.
    const [ahora, setAhora] = useState(0);
    useEffect(() => { setAhora(Date.now()); }, []);
    const proximo = vigentes(eventos, ahora)[0];
    const fechaProximo = proximo
        ? new Intl.DateTimeFormat(lang === 'es' ? 'es-ES' : 'en-GB', { timeZone: proximo.zona, weekday: 'short', day: 'numeric', month: 'short' })
            .format(new Date(proximo.inicio)).replace(/\./g, '').replace(',', '').replace(/^./, (c) => c.toUpperCase())
        : '';
    const lugarProximo = proximo ? (proximo.modalidad === 'en-linea' ? (lang === 'es' ? 'En línea' : 'Online') : proximo.ciudad) : null;

    // Cifras de la cabecera tomadas de las de impacto, para que no se desajusten al actualizarlas
    const cifra = (clave: string) => {
        const v: any = (t.why.impactFigures as any)?.[clave];
        return v?.animate ? v.target : (v?.display ?? '');
    };

    const openModal = (type: 'subscribe' | 'event') => {
        setModalType(type);
        setShowModal(true);
    };

    useEffect(() => {
        const handleAnchorClick = (e: MouseEvent) => {
            const target = e.target as HTMLElement;
            if (target.tagName === 'A' && target.getAttribute('href')?.startsWith('#')) {
                e.preventDefault();
                const id = target.getAttribute('href')?.slice(1);
                if (id) {
                    const element = document.getElementById(id);
                    if (element) {
                        element.scrollIntoView({ behavior: 'smooth' });
                    }
                }
            }
        };
        document.addEventListener('click', handleAnchorClick);
        return () => document.removeEventListener('click', handleAnchorClick);
    }, []);

    return (
        <>
            <Navbar lang={lang} />
            
            <JoinModal
                isOpen={showModal}
                onClose={() => setShowModal(false)}
                lang={lang}
                title={t.subscribe.title}
                subtitle={t.subscribe.subtitle}
                action={modalType === 'subscribe' ? 'https://script.google.com/macros/s/AKfycbwYyiRXPZdeFNO1ybtrnd5xa9ndfNvIfXr-e7rF0HsfKcz4eWckOsswSD9yoEO_87w63g/exec' : 'https://formsubmit.co/aisafetymadrid@gmail.com'}
                subject={modalType === 'event' ? `Nuevo registro: ${t.upcoming.eventTitle}` : 'Nuevo suscriptor'}
                successMessage={lang === 'es' ? 'Te hemos registrado correctamente.' : 'You have been successfully registered.'}
                hiddenFields={modalType === 'event' ? [{ name: 'evento_detalles', value: t.upcoming.eventTitle }] : []}
            />
            
            {/* 1. HERO SECTION + franja de patrocinio: juntos ocupan la primera pantalla */}
            <div className="min-h-[100svh] flex flex-col">
            <Section 
                id="hero" 
                className="relative flex-1 flex items-center justify-center pt-[clamp(5.5rem,3.5rem+5vw,6.5rem)] md:pt-[clamp(5.5rem,3.5rem+5vw,6.5rem)] pb-[clamp(1.5rem,0.5rem+1.5vw,2.5rem)] md:pb-[clamp(1.5rem,0.5rem+1.5vw,2.5rem)] bajo:pt-[clamp(5.5rem,2rem+8vh,7rem)] bajo:pb-[clamp(1rem,2vh,1.5rem)] overflow-hidden"
            >
                <div className="text-center z-10 animate-fade-in-up w-full">
                    {/* Como BAISH: etiqueta (qué es iaS), promesa (qué consigue) y una frase con datos (cómo y cuánto) */}
                    <p className="!font-sans !text-sm md:!text-base font-bold uppercase tracking-[0.12em] text-principal-texto !mb-3 md:!mb-5 bajo:!mb-2 bajo:!text-sm">{t.hero.eyebrow}</p>
                    <h1 className="max-w-[18ch] mx-auto mb-3 md:mb-6 !leading-[1.1] !text-[clamp(1.9rem,1rem+4.2vw,4.25rem)] bajo:!text-[min(calc(1rem+4.2vw),4.25rem,6.6vh)] bajo:mb-3 text-secundarios-dark dark:text-secundarios-light text-balance">
                        {t.hero.promesa}
                    </h1>
                    <p className="max-w-3xl mx-auto !font-serif !text-[clamp(1.1rem,0.9rem+0.8vw,1.5rem)] !leading-snug !mb-[clamp(0.75rem,0.25rem+1.5vw,1.8rem)] bajo:!text-[clamp(1rem,2.6vh,1.35rem)] bajo:!mb-2 text-secundarios-dark/90 dark:text-secundarios-light/90 text-balance">
                        {t.hero.bajadaPortada.replace('{eventos}', String(cifra('item1'))).replace('{personas}', String(cifra('item2')))}
                    </p>
                </div>
                <div className="max-w-2xl mx-auto">
                    <div className="flex flex-col md:flex-row gap-3 md:gap-4 pt-[clamp(0.75rem,-0.25rem+3.5vw,2rem)] bajo:pt-[clamp(0.5rem,3vh,3rem)]">
                        {/* Solo dos llamadas: la principal (Luma) y la secundaria (alta). «Léenos» ya está en el menú y «¿Qué es…?» en «¿Por dónde empiezas?» */}
                        {/* Con evento próximo: abre su página de Luma (inscripción). Sin eventos: baja a la sección, que invita a seguir el calendario */}
                        <a
                            {...(proximo
                                ? { href: conUtm(proximo.url, 'portada-hero'), target: '_blank', rel: 'noopener noreferrer' }
                                : { href: '#proximos-eventos' })}
                            className="flex-1 flex flex-col items-center justify-center text-center px-4 py-[clamp(0.6rem,0.4rem+0.5vw,0.85rem)] text-[1.1875rem] leading-tight rounded-2xl bg-principal text-white font-bold no-underline hover:bg-principal/90 transition-all shadow-md cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-principal focus-visible:ring-offset-2 focus-visible:ring-offset-secundarios-light dark:focus-visible:ring-offset-secundarios-dark"
                        >
                            {proximo ? (
                                <>
                                    <span>{lang === 'es' ? 'Apúntate al próximo evento' : 'Register for the next event'}</span>
                                    <span className="block mt-0.5 font-sans text-sm font-semibold opacity-90 line-clamp-1" suppressHydrationWarning>
                                        {fechaProximo}{lugarProximo ? ` – ${lugarProximo}` : ` – ${limpiarNombre(lang === 'en' && proximo.nombreEn ? proximo.nombreEn : proximo.nombre)}`}
                                    </span>
                                </>
                            ) : t.hero.ctaEvents}
                        </a>
                        {/* Secundario: borde en el naranja de la marca; texto en un naranja más oscuro (claro) o más claro (oscuro) para llegar a 4,5:1 */}
                        {/* Abre la misma ventana de alta que el resto de botones «¡Quiero formar parte!»; no es el formulario de la red (REDiaS) */}
                        <button type="button" data-alta onClick={() => openModal('subscribe')} className="flex-1 flex items-center justify-center text-center py-[clamp(0.75rem,0.5rem+0.6vw,1rem)] text-[1.1875rem] rounded-2xl border-2 border-principal bg-transparent text-[#c23500] dark:text-[#ff7a45] font-bold no-underline hover:bg-principal/10 dark:hover:bg-principal/15 transition-all cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-principal focus-visible:ring-offset-2 focus-visible:ring-offset-secundarios-light dark:focus-visible:ring-offset-secundarios-dark">
                            {t.hero.ctaSecondary}
                        </button>
                    </div>
                </div>
            </Section>

            {/* Franja de credibilidad, como la de mentores de SAIGE: quién nos respalda (patrocinio) y de dónde vienen
                quienes dan las charlas (ponentes). Es la prueba que sostiene la acción de al lado (los eventos), no lleva
                botón propio. Logo de BlueDot sin recolorear: versión azul en claro y blanca oficial en oscuro; el SVG trae
                margen transparente (lienzo 261×101), que se compensa con margen negativo */}
            <div className="bg-white dark:bg-[#3b3b3b] border-y border-[#dcdcdc] dark:border-white/10">
                {/* Jerarquía en dos pisos, también en escritorio: primero el patrocinio (BlueDot), centrado, y debajo los ponentes.
                    Lado a lado competían por la atención */}
                <div className="max-w-[1100px] mx-auto px-8 py-[clamp(0.9rem,0.5rem+1vw,1.25rem)] bajo:py-[clamp(0.5rem,1.2vh,1.25rem)] flex flex-col items-center gap-[clamp(0.75rem,0.5rem+0.5vw,0.875rem)] bajo:gap-2">
                    <a href="https://bluedot.org/" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center gap-[clamp(0.35rem,0.2rem+0.5vw,0.5rem)] text-secundarios-dark dark:text-secundarios-light no-underline transition-opacity hover:opacity-80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-principal">
                        <span className="text-xs font-bold uppercase tracking-[0.12em] opacity-70">{t.hero.sponsoredBy}</span>
                        <img src={getImageSrc(logoBlueDot)} alt="BlueDot Impact" width={261} height={101} className="w-[300px] md:w-[340px] h-auto -my-[36px] -mx-[16px] md:-my-[41px] md:-mx-[18px] dark:hidden" />
                        <img src={getImageSrc(logoBlueDotWhite)} alt="BlueDot Impact" width={261} height={101} className="w-[300px] md:w-[340px] h-auto -my-[36px] -mx-[16px] md:-my-[41px] md:-mx-[18px] hidden dark:block" />
                    </a>
                    <div className="w-full min-w-0 flex flex-col gap-2 pt-[clamp(0.75rem,0.5rem+0.5vw,0.875rem)] bajo:pt-2 border-t border-[#dcdcdc] dark:border-white/10">
                        <span className="text-xs font-bold uppercase tracking-[0.12em] opacity-70 text-center text-secundarios-dark dark:text-secundarios-light">{t.speakersOrgs.title}</span>
                        <FranjaPonentes lang={lang} enFranja />
                    </div>
                </div>
            </div>
            </div>

            {/* PRÓXIMOS EVENTOS: justo tras la primera pantalla, para llegar a la inscripción con un clic */}
            <Section id="proximos-eventos" className="!pt-10 md:!pt-16 !pb-0">
                <EncabezadoSeccion
                    titulo={lang === 'es' ? 'Próximos eventos' : 'Upcoming events'}
                    enlace={{ href: lang === 'es' ? '/eventos' : '/en/eventos', texto: lang === 'es' ? 'Ver todos' : 'See all' }}
                />
                <ProximosEventos lang={lang} campana="portada" limite={3} />
            </Section>

            {/* ¿POR QUÉ EN ESPAÑOL?: lo que distingue a iaS, justo después de los eventos */}
            <Section id="mission" className="!pb-0">
                {/* Sin enlace: «¿Qué es la seguridad de la IA?» ya es la primera tarjeta de «¿Por dónde empiezas?», justo debajo */}
                <EncabezadoSeccion titulo={t.why.title} />
                <div className="w-full flex flex-col md:flex-row gap-8 md:gap-12 items-center">
                    <div className="animate-fade-in-up w-full md:w-1/2 space-y-4 text-left">
                        <p className="whitespace-pre-line">{t.why.text1}</p>
                        <p>
                            {t.why.quoteBefore}
                            <a href={ministerQuoteUrl} target="_blank" rel="noopener noreferrer" hrefLang="es" title={t.why.quoteSourceLabel} aria-label={`${t.why.quoteLink} (${t.why.quoteSourceLabel})`} className="text-principal-texto underline underline-offset-4 hover:no-underline">{t.why.quoteLink}</a>
                            {t.why.quoteAfter}
                        </p>
                        <p className="bajada font-light">{t.why.text2}</p>
                        <p className="whitespace-pre-line">{t.why.text3}</p>
                        <p className="font-bold">{t.why.text4}</p>
                    </div>
                    <div className="w-full md:w-1/2 flex justify-center">
                        {/* Los 21 países del texto («oficial en 21 países»), con datos de Natural Earth */}
                        <figure className={`w-full m-0 ${tarjeta} p-[clamp(1rem,0.5rem+2vw,2rem)]`}>
                            <MapaHispanohablante titulo={t.why.mapAlt} />
                            <figcaption className="mt-5 text-center font-serif italic text-base md:text-lg leading-snug text-secundarios-dark/80 dark:text-secundarios-light/80">{t.why.mapCaption}</figcaption>
                        </figure>
                    </div>
                </div>
            </Section>

            {/* ¿POR DÓNDE EMPIEZAS?: una puerta por tipo de visitante, como BAISH. Cada una lleva a su acción */}
            <Section id="empezar" className="!pb-0">
                <EncabezadoSeccion titulo={t.empezar.title} />
                <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 list-none !p-0 !m-0">
                    {[
                        { q: t.empezar.nuevo.q, cta: t.empezar.nuevo.cta, ...(lang === 'es' ? { href: '/que-es-la-seguridad-de-la-ia' } : { href: substackUrl, externo: true }) },
                        { q: t.empezar.formarte.q, cta: t.empezar.formarte.cta, href: '#eventos' },
                        { q: t.empezar.colaborar.q, cta: t.empezar.colaborar.cta, alta: true },
                        { q: t.empezar.instituciones.q, cta: t.empezar.instituciones.cta, href: `mailto:${t.footer.email}` },
                    ].map((p: any) => {
                        const clase = `group flex flex-col justify-between gap-6 w-full h-full p-5 md:p-6 text-left no-underline text-secundarios-dark dark:text-secundarios-light hover:border-principal hover:shadow-anthro-card transition-all cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-principal ${tarjeta}`;
                        const contenido = (
                            <>
                                <span className="font-sans text-lg md:text-xl font-bold leading-snug text-balance">{p.q}</span>
                                <span className="font-sans font-bold text-principal-texto">
                                    <span className="underline underline-offset-4 group-hover:no-underline">{p.cta}</span>
                                    {p.externo ? <ArrowUpRight size={18} aria-hidden="true" className="inline ml-1 align-[-3px]" /> : <ArrowRight size={18} aria-hidden="true" className="inline ml-1 align-[-3px]" />}
                                </span>
                            </>
                        );
                        return (
                            <li key={p.q} className="!m-0 flex">
                                {p.alta
                                    ? <button type="button" data-alta onClick={() => openModal('subscribe')} className={clase}>{contenido}</button>
                                    : <a href={p.href} {...(p.externo ? { target: '_blank', rel: 'noopener noreferrer' } : {})} className={clase}>{contenido}</a>}
                            </li>
                        );
                    })}
                </ul>
            </Section>

            {/* QUÉ HACEMOS: justo después de los eventos, responde a qué ofrecemos, para quién y cuándo */}
            <Section id="eventos" className="!pb-0">
                <EncabezadoSeccion
                    titulo={lang === 'es' ? 'Qué hacemos' : 'What we do'}
                    enlace={{ href: lang === 'es' ? '/que-hacemos' : '/en/que-hacemos', texto: lang === 'es' ? 'Ver todo' : 'See all' }}
                />
                <BentoGrid t={t} lang={lang} onModalOpen={() => openModal('event')} />
            </Section>

            {/* CIFRAS Y PONENTES: la prueba de que funciona, justo después de qué hacemos */}
            <Section id="cifras" className="!pb-0">
                {t.why.impactFigures && (
                    <>
                        <EncabezadoSeccion
                            titulo={t.why.impactFigures.title}
                            enlace={proximo
                                ? { href: conUtm(proximo.url, 'portada-cifras'), texto: lang === 'es' ? 'Apúntate al próximo evento' : 'Register for the next event', externo: true }
                                : { href: lang === 'es' ? '/eventos' : '/en/eventos', texto: lang === 'es' ? 'Ver la agenda' : 'See the agenda' }}
                        />
                        <ImpactFigures key={lang} data={t.why.impactFigures} sinTitulo />
                    </>
                )}
            </Section>

            {/* 2. COLABORADORES */}
            <Section id="conectar" className="!pb-0">
                <EncabezadoSeccion titulo={t.collaborators.title} enlace={{ href: lang === 'es' ? '/red' : '/en/network', texto: t.collaborators.cta }}>
                    <p>{parseText(t.collaborators.text)}</p>
                </EncabezadoSeccion>
                {/* Resumen de la red: logos en franja compacta y enlace a la página «Red» (mapa, países y grupos).
                    BlueDot no se repite aquí: ya aparece en la franja de patrocinio */}
                <FranjaHubs />
            </Section>

            {/* CIERRE: una frase y una acción. Las redes ya están en el pie */}
            <Section id="manifiesto">
                <div className={`${tarjeta} p-8 md:p-12 flex flex-col lg:flex-row lg:items-center gap-8 lg:gap-16`}>
                    <h3 className="bajada flex-1 !text-secundarios-dark dark:!text-white !mb-0 text-left">
                        {parseText(t.mission.text)}
                    </h3>
                    <button data-alta onClick={() => openModal('subscribe')} className="shrink-0 px-10 py-4 rounded-xl bg-secundarios-dark dark:bg-secundarios-light text-white dark:text-secundarios-dark font-bold hover:bg-principal dark:hover:bg-principal dark:hover:text-white transition-all cursor-pointer">
                        {t.hero.ctaSecondary}
                    </button>
                </div>
            </Section>

            <div id="footer">
                <Footer 
                    lang={lang} 
                />
            </div>
        </>
    );
}