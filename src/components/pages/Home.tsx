import React, { useState, useEffect } from 'react';
import { translations } from '@locales/translations';
import { parseText } from '@utils/parseText';
import {
    ArrowRight,
    Newspaper
} from 'lucide-react';
import { substackUrl } from '@data/delegaciones';
import { FaLinkedin } from "react-icons/fa";

// --- Import components ---
import Navbar from '@components/Navbar';
import { Section } from '@components/UI';
import { FranjaHubs } from '@components/RedHubs';
import BentoGrid from '@components/BentoGrid';
import SocialFooter from '@components/SocialFooter';
import Footer from '@components/Footer';
import ImpactFigures from '@components/ImpactFigures';
import JoinModal from '@components/JoinModal';
import FranjaPonentes from '@components/FranjaPonentes';
import ProximosEventos, { eventos, vigentes, limpiarNombre, conUtm } from '@components/ProximosEventos';

// --- Import assets (logo del patrocinador; los de la red están en src/data/red.ts) ---
import logoBlueDot from '@assets/logos__bluedot_impact.svg';
import logoBlueDotWhite from '@assets/logos__bluedot_impact_white.svg';
import fotoGrupo from '@assets/portada-grupo.webp';

type Language = 'es' | 'en';

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
                className="relative flex-1 flex items-center justify-center pt-[clamp(6rem,4rem+6vw,8rem)] md:pt-[clamp(6rem,4rem+6vw,8rem)] pb-[clamp(1.5rem,0.5rem+1.5vw,2.5rem)] md:pb-[clamp(1.5rem,0.5rem+1.5vw,2.5rem)] bajo:pt-[clamp(5.5rem,2rem+8vh,7rem)] bajo:pb-[clamp(1rem,2vh,1.5rem)] overflow-hidden"
            >
                <div className="text-center z-10 animate-fade-in-up w-full">
                    <h1 className="mb-2 md:mb-4 !text-[clamp(1.25rem,calc(7vw-0.3rem),4.8rem)] bajo:!text-[min(calc(7vw-0.3rem),4.8rem,10vh)] text-secundarios-dark dark:text-secundarios-light text-balance">
                        {t.hero.h1}
                    </h1>
                    <p className="bajada c !leading-[clamp(1.5rem,0.9rem+2.9vw,2.8rem)] !mb-[clamp(0.75rem,0.25rem+1.5vw,1.8rem)] bajo:!text-[clamp(1.2rem,4vh,2rem)] bajo:!leading-[1.35] bajo:!mb-[clamp(0.5rem,2vh,1.8rem)]">{parseText(t.hero.h2)}</p>
                </div>
                <div className="max-w-2xl mx-auto">
                    <div className="flex flex-col md:flex-row gap-3 md:gap-4 pt-[clamp(0.75rem,-0.25rem+3.5vw,3rem)] bajo:pt-[clamp(0.5rem,3vh,3rem)]">
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
                    {/* Móvil y tableta: el botón «Léenos» de la cabecera solo se ve desde lg, así que aquí ocupa el sitio del enlace.
                        Va como enlace, no como botón lleno: el único botón lleno es «Ver próximos eventos» (camino a Luma) */}
                    <p className="lg:hidden !mb-0 pt-4 bajo:pt-2 text-center">
                        <a href={substackUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 py-1 font-sans font-bold text-principal-texto underline underline-offset-4 hover:no-underline">
                            <Newspaper size={18} aria-hidden="true" />
                            {lang === 'es' ? 'Léenos' : 'Read us'}
                        </a>
                    </p>
                    {/* Escritorio. En español lleva al artículo «Qué es la seguridad de la IA» (misma pestaña); en inglés, al Substack */}
                    <p className="hidden lg:block !mb-0 pt-4 bajo:pt-2 text-center">
                        <a {...(lang === 'es' ? { href: '/que-es-la-seguridad-de-la-ia' } : { href: 'https://seguridaddelaia.substack.com/', target: '_blank', rel: 'noopener noreferrer' })} className="inline-block py-1 font-sans font-bold text-principal-texto underline underline-offset-4 hover:no-underline">
                            {t.hero.ctaPrimary}
                        </a>
                    </p>
                </div>
            </Section>

            {/* Franja de patrocinio. Logo sin recolorear: versión azul en claro y versión blanca oficial en oscuro.
                El SVG trae margen transparente (lienzo 261×101), que se compensa con margen negativo */}
            <div className="bg-white dark:bg-[#3b3b3b] border-y border-[#dcdcdc] dark:border-white/10">
                <a href="https://bluedot.org/" target="_blank" rel="noopener noreferrer" className="max-w-[1100px] mx-auto px-8 py-[clamp(0.9rem,0.5rem+1.2vw,1.5rem)] bajo:py-[clamp(0.6rem,1.5vh,1.5rem)] flex flex-col items-center gap-[clamp(0.35rem,0.2rem+0.5vw,0.6rem)] text-secundarios-dark dark:text-secundarios-light no-underline transition-opacity hover:opacity-80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-principal">
                    <span className="text-xs md:text-sm font-bold uppercase tracking-[0.12em] opacity-70">{t.hero.sponsoredBy}</span>
                    <img src={getImageSrc(logoBlueDot)} alt="BlueDot Impact" width={261} height={101} className="w-[clamp(210px,170px+6vw,260px)] h-auto -my-[clamp(25px,20px+0.7vw,31px)] dark:hidden" />
                    <img src={getImageSrc(logoBlueDotWhite)} alt="BlueDot Impact" width={261} height={101} className="w-[clamp(210px,170px+6vw,260px)] h-auto -my-[clamp(25px,20px+0.7vw,31px)] hidden dark:block" />
                </a>
            </div>
            </div>

            {/* PRÓXIMOS EVENTOS: justo tras la primera pantalla, para llegar a la inscripción con un clic */}
            <Section id="proximos-eventos" className="!pt-10 md:!pt-16 !pb-0">
                <div className="flex items-end justify-between gap-4 mb-5 md:mb-6">
                    <h2 className="!text-2xl md:!text-3xl !leading-tight !mb-0">{lang === 'es' ? 'Próximos eventos' : 'Upcoming events'}</h2>
                    <a href={lang === 'es' ? '/eventos' : '/en/eventos'} className="shrink-0 inline-flex items-center gap-1 font-sans font-bold text-principal-texto underline underline-offset-4 hover:no-underline">
                        {lang === 'es' ? 'Ver todos' : 'See all'} <ArrowRight size={18} aria-hidden="true" />
                    </a>
                </div>
                <ProximosEventos lang={lang} campana="portada" limite={3} />
            </Section>

            {/* 2. COLABORADORES */}
            <Section id="conectar">
                <div className='mx-auto max-w-2xl text-center'>
                    <h4 className="mb-2 md:mb-8">{t.collaborators.title}</h4>
                    <p>{parseText(t.collaborators.text)}</p>
                </div>
                {/* Resumen de la red: logos en franja compacta y enlace a la página «Red» (mapa, países y grupos).
                    BlueDot no se repite aquí: ya aparece en la franja de patrocinio */}
                <div className="mt-6 md:mt-10">
                    <FranjaHubs />
                </div>
                <div className="mt-8 md:mt-12 flex justify-center">
                    <a href={lang === 'es' ? '/red' : '/en/network'} className="inline-flex items-center gap-2 py-3 px-6 rounded-xl border-2 border-principal text-principal-texto font-sans font-bold text-lg no-underline hover:bg-principal/10 dark:hover:bg-principal/15 transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-principal focus-visible:ring-offset-2 focus-visible:ring-offset-secundarios-light dark:focus-visible:ring-offset-secundarios-dark">
                        {t.collaborators.cta}
                        <ArrowRight size={20} aria-hidden="true" />
                    </a>
                </div>
            </Section>

            {/* 3. WHY HUB SECTION */}
            <Section id="mission">
                <div className="w-full flex flex-col md:flex-row gap-8 items-center justify-center">
                    <div className="animate-fade-in-up w-full md:w-1/2 space-y-4 text-left">
                        <h4>{t.why.title}</h4>
                        <p className="whitespace-pre-line">{t.why.text1}</p>
                        <p className="bajada font-light">{t.why.text2}</p>
                        <p className="whitespace-pre-line">{t.why.text3}</p>
                        <p className="font-bold">{t.why.text4}</p>
                    </div>
                    <div className="w-full md:w-1/2 flex justify-center">
                        {/* Foto real de un encuentro: la portada necesita caras de verdad, no una ilustración genérica */}
                        <div className="relative group w-full aspect-[3/2] bg-secundarios-light/40 dark:bg-white/5 rounded-3xl overflow-hidden border border-secundarios-dark/10">
                            <img
                                src={getImageSrc(fotoGrupo)}
                                alt={t.upcoming.eventImageAlt}
                                loading="lazy"
                                className="w-full h-full object-cover"
                            />
                        </div>
                    </div>
                </div>
                {t.why.impactFigures && (
                    <ImpactFigures 
                        key={lang}
                        data={t.why.impactFigures} 
                    />
                )}
            </Section>

            {/* Organizaciones de nuestros ponentes, sin las que ya salen arriba */}
            <Section id="ponentes">
                <FranjaPonentes lang={lang} portada />
            </Section>

            {/* 4. EVENTOS - BENTO GRID */}
            <Section id="eventos">
                <BentoGrid 
                    t={t}
                    lang={lang}
                    onModalOpen={() => openModal('event')} 
                />
            </Section>

            {/* 6. MANIFIESTO */}
            <Section id="manifiesto">
                <div className="flex flex-col lg:flex-row gap-6">
                    <div className="flex-[2] bg-secundarios-gray dark:bg-white/5 rounded-[40px] p-8 md:p-16 min-h-[400px] flex items-center">
                        <h3 className="bajada !text-secundarios-dark dark:!text-white !mb-0 text-left">
                            {parseText(t.mission.text)}
                        </h3>
                    </div>
                    <div className="flex-[1] bg-secundarios-gray dark:bg-white/5 rounded-[40px] p-8 md:p-12 flex flex-col justify-between min-h-[400px]">
                        <div>
                            <button data-alta onClick={() => openModal('subscribe')} className="w-full py-4 rounded-2xl bg-secundarios-dark text-white font-bold hover:bg-principal transition-all shadow-md cursor-pointer">
                                {t.hero.ctaSecondary}
                            </button>
                        </div>
                        <div className="flex justify-center">
                            <SocialFooter />
                        </div>
                    </div>
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