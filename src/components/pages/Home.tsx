import React, { useState, useEffect } from 'react';
import { translations } from '@locales/translations';
import { parseText } from '@utils/parseText';
import {
	X, ArrowRight
} from 'lucide-react';
import { FaLinkedin } from "react-icons/fa";

// --- Import components ---
import Navbar from '@components/Navbar';
import { CollaborativeCard, Section } from '@components/UI';
import BentoGrid from '@components/BentoGrid';
import SocialFooter from '@components/SocialFooter';
import Footer from '@components/Footer';
import ImpactFigures from '@components/ImpactFigures';

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
import women4aisImg from '@assets/original-aa4b526da371210b9104b913751e40d4.webp';
import fondoImg from '@assets/fondo.png';
import undefinedImgur from '@assets/undefined_imgur.png';

// --- Types ---
type Language = 'es' | 'en';

interface HomeProps {
	lang: Language;
}

export default function Home({ lang }: HomeProps) {
	const [showModal, setShowModal] = useState(false);
	const [modalType, setModalType] = useState<'event' | 'subscribe'>('event');
	const t = translations[lang];

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
			
			{/* MODAL */}
			{showModal && (
				<div className="fixed inset-0 z-[100] flex items-center justify-center px-4" onClick={() => setShowModal(false)}>
					<div className="absolute inset-0 bg-black/60 backdrop-blur-sm"></div>
					<div className="relative bg-secundarios-light dark:bg-secundarios-dark rounded-[32px] p-8 md:p-14 max-w-2xl w-full shadow-anthro-elevated border border-secundarios-dark/20 z-10" onClick={e => e.stopPropagation()}>
						<button onClick={() => setShowModal(false)} className="absolute top-6 right-6 text-secundarios-dark hover:text-principal transition-colors cursor-pointer">
							<X size={24} />
						</button>
						<h3 className="mb-2 md:mb-4">{t.subscribe.title}</h3>
						<p className="text-secundarios-dark/60 dark:text-secundarios-light/60 font-serif mb-6 text-lg text-balance">{t.subscribe.subtitle}</p>

						<form action="https://formsubmit.co/aisafetymadrid@gmail.com" method="POST" className="space-y-4">
							<input type="hidden" name="_subject" value={modalType === 'event' ? `Nuevo registro: ${t.upcoming.eventTitle}` : "Nuevo suscriptor"} />
							<input type="hidden" name="_captcha" value="false" />
							<input type="hidden" name="_template" value="table" />
							{modalType === 'event' && <input type="hidden" name="evento_detalles" value={t.upcoming.eventTitle} />}

							<input type="text" name="name" required placeholder={t.subscribe.name} className="w-full px-6 py-4 rounded-2xl bg-white dark:bg-white/5 border border-secundarios-dark/20 text-secundarios-dark dark:text-white focus:outline-none focus:ring-2 focus:ring-principal/50 transition-all font-sans text-lg" />
							<input type="email" name="email" required placeholder={t.subscribe.email} className="w-full px-6 py-4 rounded-2xl bg-white dark:bg-white/5 border border-secundarios-dark/20 text-secundarios-dark dark:text-white focus:outline-none focus:ring-2 focus:ring-principal/50 transition-all font-sans text-lg" />
							<input type="text" name="linkedin" placeholder={t.subscribe.linkedin} className="w-full px-6 py-4 rounded-2xl bg-white dark:bg-white/5 border border-secundarios-dark/20 text-secundarios-dark dark:text-white focus:outline-none focus:ring-2 focus:ring-principal/50 transition-all font-sans text-lg" />
							
							<button type="submit" className="w-full py-5 rounded-2xl bg-principal text-white font-sans font-black text-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-anthro-elevated active:scale-95 cursor-pointer">
								{t.subscribe.button}
							</button>
						</form>
					</div>
				</div>
			)}
			
			{/* 1. HERO SECTION */}
			<Section 
				id="hero" 
				className="relative min-h-screen flex items-center justify-center pt-16 md:pt-32 pb-16 md:pb-24 overflow-hidden"
			>
				<div className="text-center z-10 animate-fade-in-up w-full">
					<h1 className="mb-2 md:mb-4 text-secundarios-dark dark:text-secundarios-light text-balance">
						{t.hero.h1}
					</h1>
					<p className="bajada max-w-[950px] mx-auto">{parseText(t.hero.h2)}</p>
				</div>
				<div className="max-w-2xl mx-auto">
					<div className="flex flex-col md:flex-row gap-4 pt-12">
						<button onClick={() => { setModalType('subscribe'); setShowModal(true); }} className="flex-1 py-4 rounded-2xl bg-principal text-white font-bold hover:bg-principal/90 transition-all shadow-md cursor-pointer">
							{t.hero.ctaSecondary}
						</button>
						<button onClick={() => window.open('https://osmaniredondo.substack.com/', '_blank')} className="flex-1 py-4 rounded-2xl bg-principal text-white font-bold hover:bg-principal/90 transition-all shadow-md cursor-pointer">
							{t.hero.ctaPrimary}
						</button>
					</div>
				</div>
			</Section>

			{/* 2. COLABORADORES */}
			<Section id="conectar">
				<div className="grid grid-cols-1 md:grid-cols-4 gap-12 items-center justify-center">
					<div className="col-span-1">
						<h4 className="mb-4 md:mb-12">{t.collaborators.title}</h4>
						<p>{parseText(t.collaborators.text)}</p>
					</div>
					<div className="col-span-1 md:col-span-3">
						<div className="grid grid-cols-1 md:grid-cols-3 gap-x-8 gap-y-10 items-center">
							<CollaborativeCard href="https://www.enais.co/" text="ENAIS" logo={logoENAIS} logoWhite={logoENAISWhite} />
							<CollaborativeCard href="https://bluedot.org/" text="BlueDot" logo={logoBlueDot} logoWhite={logoBlueDotWhite} />
							<CollaborativeCard href="https://www.aisafety.com/" text="AISafety.com" logo={logoAISafetyCom} logoWhite={logoAISafetyComWhite} />
							<CollaborativeCard href="https://www.aisafetybcn.org/" text="AI Safety Barcelona" logo={logoAISafetyBCN} logoWhite={logoAISafetyBCNWhite} />
							<CollaborativeCard href="https://www.baish.com.ar/es" text="BAISH" logo={logoBAISH} logoWhite={logoBAISHWhite} />
							<CollaborativeCard href="https://www.aismx.org/" text="MEXICO" logo={logoMEXICO} logoWhite={logoMEXICOWhite} />
						</div>
					</div>
				</div>
			</Section>

			{/* 3. WHY HUB SECTION */}
			<Section id="mission">
				<div className="w-full flex flex-col md:flex-row gap-12 items-center justify-center">
					<div className="animate-fade-in-up w-full md:w-1/2 space-y-4 text-left">
						<h4>{t.why.title}</h4>
						<p className="whitespace-pre-line">{t.why.text1}</p>
						<p className="bajada font-light">{t.why.text2}</p>
						<p className="whitespace-pre-line">{t.why.text3}</p>
						<p className="font-bold">{t.why.text4}</p>
					</div>
					<div className="w-full md:w-1/2 flex justify-center">
						<div className="relative group w-full aspect-square bg-secundarios-light/40 dark:bg-white/5 rounded-3xl overflow-hidden border border-secundarios-dark/10 shadow-anthro-card hover:shadow-anthro-elevated">
							<img
								src={undefinedImgur.src || undefinedImgur}
								alt="AI Safety Madrid"
								className="w-full h-full object-cover group-hover:scale-105"
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

			{/* 4. EVENTOS - BENTO GRID */}
			<Section id="eventos">
				<BentoGrid 
					t={t}
					lang={lang}
					onModalOpen={() => { setModalType('event'); setShowModal(true); }} 
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
							<button onClick={() => { setModalType('subscribe'); setShowModal(true); }} className="w-full py-4 rounded-2xl bg-secundarios-dark text-white font-bold hover:bg-principal transition-all shadow-md cursor-pointer">
								{t.hero.ctaSecondary}
							</button>
						</div>
						<div className="flex justify-center">
							<SocialFooter />
						</div>
					</div>
				</div>
			</Section>

			{/* 7. WOMEN4AIS */}
			<Section>
				<div className="rounded-[32px] p-8 md:p-16 flex flex-col md:flex-row-reverse items-center gap-12 text-white relative overflow-hidden" style={{ backgroundImage: `url(${fondoImg.src || fondoImg})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
					<div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl pointer-events-none -translate-y-1/2 translate-x-1/2"></div>
					
					<div className="flex-1 space-y-2 z-10">
						<h4 className="!text-secundarios-light md:text-5xl mb-6 bg-cuartos-purple py-2 px-1 rounded inline-block">{t.women4ais.title}</h4>
						<p className="text-secundarios-light text-lg md:text-1xl font-serif max-w-1xl leading-relaxed bg-principal/90 py-1 px-1 rounded">
							{t.women4ais.text}
						</p>
						<div className="flex items-center gap-4 pt-4">
							<a href="https://www.linkedin.com/company/women4aisafety" target="_blank" rel="noopener noreferrer" className="w-12 h-12 flex items-center justify-center bg-cuartos-purple rounded-md hover:bg-white text-white hover:text-cuartos-purple transition-all duration-300" aria-label="LinkedIn">
								<FaLinkedin size={24} />
							</a>
						</div>
					</div>
					
					<div className="shrink-0 w-full md:w-auto flex justify-center">
						<div className="w-64 h-80 md:w-80 md:h-96 rounded-3xl overflow-hidden shadow-inner flex flex-col">
							<img src={women4aisImg.src || women4aisImg} alt="Women4AIS" className="w-full h-full object-cover" />
							<div className="bg-white/10 px-4 py-3 text-center">
								<p className="text-sm text-black/80 font-serif">By Sandro Rybak</p>
							</div>
						</div>
					</div>
				</div>
			</Section>

			<div id="footer">
				<Footer 
					lang={lang} 
					onSubscribeClick={() => { setModalType('subscribe'); setShowModal(true); }}
				/>
			</div>
		</>
	);
}
