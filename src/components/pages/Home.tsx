import React, { useState, useEffect } from 'react';
import { translations } from '@locales/translations';
import { parseText } from '@utils/parseText';
import {
    ArrowRight
} from 'lucide-react';
import { FaLinkedin } from "react-icons/fa";

// --- Import components ---
import Navbar from '@components/Navbar';
import { CollaborativeCard, Section } from '@components/UI';
import BentoGrid from '@components/BentoGrid';
import SocialFooter from '@components/SocialFooter';
import Footer from '@components/Footer';
import ImpactFigures from '@components/ImpactFigures';
import JoinModal from '@components/JoinModal';

// --- Import assets (Logos Colaboradores) ---
import logoENAIS from '@assets/logos__european_network_for_AI_safety.svg';
import logoENAISWhite from '@assets/logos__european_network_for_AI_safety_white.svg';
import logoBlueDot from '@assets/logos__bluedot_impact.svg';
import logoBlueDotWhite from '@assets/logos__bluedot_impact_white.svg';
import logoAISafetyCom from '@assets/logos__aisafety_com.svg';
import logoAISafetyComWhite from '@assets/logos__aisafety_com_white.svg';
import logoAISafetyBCN from '@assets/logos__ai_safety_barcelona.svg';
import logoAISafetyBCNWhite from '@assets/logos__ai_safety_barcelona_white.svg';
import logoBAISH from '@assets/logos__buenos_aires_AI_safety_hub.svg';
import logoBAISHWhite from '@assets/logos__buenos_aires_AI_safety_hub_white.svg';
import logoMEXICO from '@assets/ai_safety_mexico.svg';
import logoMEXICOWhite from '@assets/ai_safety_mexico_byn.svg';
import logow4ias from '@assets/logos__w4ais.svg';
import logow4iaswhite from '@assets/logos__w4ais-white.svg';
import logoColombia from '@assets/logos__ai-safety-colombia.svg';
import logoColombiawhite from '@assets/logos__ai-safaty-colombia-white.svg';
import logoLisboa from '@assets/logos__lisbon_ai_safety_hub.svg';
import logoLisboaWhite from '@assets/logos__lisbon_ai_safety_hub_white.svg';
import undefinedImgur from '@assets/undefined_imgur.png';

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
                className="relative flex-1 flex items-center justify-center pt-[clamp(6rem,4rem+6vw,8rem)] md:pt-[clamp(6rem,4rem+6vw,8rem)] pb-[clamp(1.5rem,0.5rem+1.5vw,2.5rem)] md:pb-[clamp(1.5rem,0.5rem+1.5vw,2.5rem)] overflow-hidden"
            >
                <div className="text-center z-10 animate-fade-in-up w-full">
                    <h1 className="mb-2 md:mb-4 !text-[clamp(1.25rem,calc(7vw-0.3rem),4.8rem)] text-secundarios-dark dark:text-secundarios-light text-balance">
                        {t.hero.h1}
                    </h1>
                    <p className="bajada c !leading-[clamp(1.5rem,0.9rem+2.9vw,2.8rem)] !mb-[clamp(0.75rem,0.25rem+1.5vw,1.8rem)]">{parseText(t.hero.h2)}</p>
                </div>
                <div className="max-w-2xl mx-auto">
                    <div className="flex flex-col md:flex-row gap-3 md:gap-4 pt-[clamp(0.75rem,-0.25rem+3.5vw,3rem)]">
                        <a href="https://luma.com/iaS-SeguridadelaIA" target="_blank" rel="noopener noreferrer" className="flex-1 flex items-center justify-center text-center py-[clamp(0.75rem,0.5rem+0.6vw,1rem)] rounded-2xl bg-principal text-white font-bold no-underline hover:bg-principal/90 transition-all shadow-md cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-principal focus-visible:ring-offset-2 focus-visible:ring-offset-secundarios-light dark:focus-visible:ring-offset-secundarios-dark">
                            {t.hero.ctaSeminar}
                        </a>
                        {/* Secundario: borde en el naranja de la marca; texto en un naranja más oscuro (claro) o más claro (oscuro) para llegar a 4,5:1 */}
                        {/* En español lleva al artículo «Qué es la seguridad de la IA» (misma pestaña); en inglés, al Substack */}
                        <a {...(lang === 'es' ? { href: '/que-es-la-seguridad-de-la-ia' } : { href: 'https://seguridaddelaia.substack.com/', target: '_blank', rel: 'noopener noreferrer' })} className="flex-1 flex items-center justify-center text-center py-[clamp(0.75rem,0.5rem+0.6vw,1rem)] rounded-2xl border-2 border-principal bg-transparent text-[#c23500] dark:text-[#ff7a45] font-bold no-underline hover:bg-principal/10 dark:hover:bg-principal/15 transition-all cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-principal focus-visible:ring-offset-2 focus-visible:ring-offset-secundarios-light dark:focus-visible:ring-offset-secundarios-dark">
                            {t.hero.ctaPrimary}
                        </a>
                    </div>
                </div>
            </Section>

            {/* Franja de patrocinio. Logo sin recolorear: versión azul en claro y versión blanca oficial en oscuro.
                El SVG trae margen transparente (lienzo 261×101), que se compensa con margen negativo */}
            <div className="bg-white dark:bg-[#3b3b3b] border-y border-[#dcdcdc] dark:border-white/10">
                <a href="https://bluedot.org/" target="_blank" rel="noopener noreferrer" className="max-w-[1100px] mx-auto px-8 py-[clamp(0.9rem,0.5rem+1.2vw,1.5rem)] flex flex-col items-center gap-[clamp(0.35rem,0.2rem+0.5vw,0.6rem)] text-secundarios-dark dark:text-secundarios-light no-underline transition-opacity hover:opacity-80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-principal">
                    <span className="text-xs md:text-sm font-bold uppercase tracking-[0.12em] opacity-70">{t.hero.sponsoredBy}</span>
                    <img src={getImageSrc(logoBlueDot)} alt="BlueDot Impact" width={261} height={101} className="w-[clamp(210px,170px+6vw,260px)] h-auto -my-[clamp(25px,20px+0.7vw,31px)] dark:hidden" />
                    <img src={getImageSrc(logoBlueDotWhite)} alt="BlueDot Impact" width={261} height={101} className="w-[clamp(210px,170px+6vw,260px)] h-auto -my-[clamp(25px,20px+0.7vw,31px)] hidden dark:block" />
                </a>
            </div>
            </div>

            {/* 2. COLABORADORES */}
            <Section id="conectar">
                <div className='mx-auto max-w-2xl text-center'>
                    <h4 className="mb-2 md:mb-8">{t.collaborators.title}</h4>
                    <p>{parseText(t.collaborators.text)}</p>
                </div>
                {/* Primera fila: redes internacionales. Segunda fila: hubs locales iberoamericanos */}
                <div className="flex flex-col gap-10 md:gap-16">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-x-6 md:gap-x-8 gap-y-2 md:gap-y-10 items-center">
                        <CollaborativeCard href="https://www.enais.co/" text="European Network for AI Safety" logo={logoENAIS} logoWhite={logoENAISWhite} />
                        <CollaborativeCard href="https://bluedot.org/" text="BlueDot Impact" logo={logoBlueDot} logoWhite={logoBlueDotWhite} />
                        <CollaborativeCard href="https://www.aisafety.com/" text="AISafety.com" logo={logoAISafetyCom} logoWhite={logoAISafetyComWhite} />
                        <CollaborativeCard href="https://www.women4aisafety.com/" text="Women4AISafety" logo={logow4ias} logoWhite={logow4iaswhite} />
                    </div>
                    <div className="grid grid-cols-2 md:grid-cols-5 gap-x-6 gap-y-2 md:gap-y-10 items-center">
                        <CollaborativeCard href="https://www.aisafetybcn.org/" text="AI Safety Barcelona" logo={logoAISafetyBCN} logoWhite={logoAISafetyBCNWhite} />
                        <CollaborativeCard href="https://www.lisbonaisafetyhub.org/" text="Lisbon AI Safety Hub" logo={logoLisboa} logoWhite={logoLisboaWhite} />
                        <CollaborativeCard href="https://www.aismx.org/" text="AI Safety México" logo={logoMEXICO} logoWhite={logoMEXICOWhite} />
                        <CollaborativeCard href="https://aisafetycolombia.org/" text="AI Safety Colombia" logo={logoColombia} logoWhite={logoColombiawhite} />
                        <div className="col-span-2 md:col-span-1 justify-self-center w-1/2 md:w-full">
                            <CollaborativeCard href="https://www.baish.com.ar/es" text="Buenos Aires AI Safety Hub" logo={logoBAISH} logoWhite={logoBAISHWhite} />
                        </div>
                    </div>
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
                        <div className="relative group w-full aspect-square bg-secundarios-light/40 dark:bg-white/5 rounded-3xl overflow-hidden border border-secundarios-dark/10">
                            {getImageSrc(undefinedImgur) && (
                                <img
                                    src={getImageSrc(undefinedImgur)}
                                    alt="AI Safety Madrid"
                                    className="w-full h-full object-cover"
                                />
                            )}
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
                            <button onClick={() => openModal('subscribe')} className="w-full py-4 rounded-2xl bg-secundarios-dark text-white font-bold hover:bg-principal transition-all shadow-md cursor-pointer">
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
                    onSubscribeClick={() => openModal('subscribe')}
                />
            </div>
        </>
    );
}