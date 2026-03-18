import React, { useState, useEffect } from 'react';
import { translations } from './locales/translations';
import {
	BookOpen, Calendar, Globe, ArrowRight, Linkedin,
	Instagram, Newspaper, Users, CheckCircle, X
} from 'lucide-react';

// --- Import components ---
import Navbar from './components/Navbar';
import { Section, PillarCard, CollaborativeCard } from './components/UI';
import BentoGrid from './components/BentoGrid';

// --- Import assets (Logos Colaboradores) ---
import logoRiesgosIA from './assets/logos__riesgos_ia.svg';
import logoENAIS from './assets/logos__european_network_for_AI_safety.svg';
import logoBlueDot from './assets/logos__bluedot_impact.svg';
import logoAISafetyCom from './assets/logos__aisafety_com.svg';
import logoAISafetyBCN from './assets/logos__ai_safety_barcelona.svg';
import logoBAISH from './assets/logos__buenos_aires_AI_safety_hub.svg';
import logo from './assets/ias_logo.svg';
import osmani from './assets/osmani.jpeg';

// --- Types ---
type Language = 'es' | 'en';
type Theme = 'light' | 'dark';

export default function App() {
	const [lang, setLang] = useState<Language>(() => (localStorage.getItem('app_lang') as Language) || 'es');
	const [theme, setTheme] = useState<Theme>(() => (localStorage.getItem('app_theme') as Theme) || 'light');
	const [showModal, setShowModal] = useState(false);
	const [modalType, setModalType] = useState<'event' | 'subscribe'>('event');
	const t = translations[lang];

	useEffect(() => {
		localStorage.setItem('app_lang', lang);
		document.documentElement.lang = lang;
	}, [lang]);

	useEffect(() => {
		localStorage.setItem('app_theme', theme);
		document.documentElement.classList.toggle('dark', theme === 'dark');
	}, [theme]);

	// Smooth Scroll Handler
	useEffect(() => {
		const handleAnchorClick = (e: MouseEvent) => {
			const target = e.target as HTMLElement;
			const anchor = target.closest('a');
			if (anchor?.hash?.startsWith('#')) {
				const element = document.querySelector(anchor.hash);
				if (element) {
					e.preventDefault();
					element.scrollIntoView({ behavior: 'smooth', block: 'start' });
				}
			}
		};
		document.addEventListener('click', handleAnchorClick);
		return () => document.removeEventListener('click', handleAnchorClick);
	}, []);

	return (
		<div className="min-h-screen transition-colors duration-500 selection:bg-principal selection:text-white">

			<Navbar lang={lang} setLang={setLang} theme={theme} setTheme={setTheme} t={t} />

			{/* MODAL DE RESERVA */}
			{showModal && (
				<div className="fixed inset-0 z-[100] flex items-center justify-center px-4" onClick={() => setShowModal(false)}>
					<div className="absolute inset-0 bg-black/60 backdrop-blur-sm"></div>
					<div className="relative bg-secundarios-light dark:bg-secundarios-dark rounded-[32px] p-8 md:p-14 max-w-2xl w-full shadow-anthro-elevated border border-secundarios-dark/20 z-10" onClick={e => e.stopPropagation()}>
						<button onClick={() => setShowModal(false)} className="absolute top-6 right-6 text-secundarios-dark hover:text-principal transition-colors">
							<X size={24} />
						</button>
						<h3 className="mb-2 md:mb-4">{t.subscribe.title}</h3>
						<p className="text-secundarios-dark/60 dark:text-secundarios-light/60 font-serif mb-6 text-lg text-balance">{t.subscribe.subtitle}</p>

						{/* Event Details */}
						{modalType === 'event' && (
							<div className="mb-6 p-4 bg-white/50 dark:bg-white/5 rounded-2xl border border-secundarios-dark/10 text-sm space-y-1">
								<p className="font-bold text-principal">{t.upcoming.eventTitle}</p>
								<div className="flex items-center gap-2 opacity-80">
									<Calendar size={14} />
									<span>{t.upcoming.date}</span>
								</div>
								<div className="flex items-center gap-2 opacity-80">
									<Globe size={14} />
									<span>{t.upcoming.location}</span>
								</div>
							</div>
						)}

						<form action="https://formsubmit.co/aisafetymadrid@gmail.com" method="POST" className="space-y-4">
							<input type="hidden" name="_subject" value={modalType === 'event' ? `Nuevo registro: ${t.upcoming.eventTitle}` : "Nuevo suscriptor"} />
							<input type="hidden" name="_captcha" value="false" />
							<input type="hidden" name="_template" value="table" />
							{modalType === 'event' && <input type="hidden" name="evento_detalles" value={`${t.upcoming.eventTitle} - ${t.upcoming.date}`} />}

							<input type="text" name="name" required placeholder={t.subscribe.name} className="w-full px-6 py-4 rounded-2xl bg-white dark:bg-white/5 border border-secundarios-dark/20 text-secundarios-dark dark:text-white focus:outline-none focus:ring-2 focus:ring-principal/50 transition-all font-sans text-lg" />
							<input type="email" name="email" required placeholder={t.subscribe.email} className="w-full px-6 py-4 rounded-2xl bg-white dark:bg-white/5 border border-secundarios-dark/20 text-secundarios-dark dark:text-white focus:outline-none focus:ring-2 focus:ring-principal/50 transition-all font-sans text-lg" />
							<input type="text" name="linkedin" placeholder={t.subscribe.linkedin} className="w-full px-6 py-4 rounded-2xl bg-white dark:bg-white/5 border border-secundarios-dark/20 text-secundarios-dark dark:text-white focus:outline-none focus:ring-2 focus:ring-principal/50 transition-all font-sans text-lg" />
							
							<button type="submit" className="w-full py-5 rounded-2xl bg-principal text-white font-sans font-black text-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-anthro-elevated active:scale-95">
								{t.subscribe.button}
							</button>
						</form>
					</div>
				</div>
			)}
			{/* 1. HERO SECTION */}
			<section id="hero" className="hero relative min-h-screen flex items-center justify-center pt-24 md:pt-32 pb-16 md:pb-24 px-4 md:px-8 overflow-hidden scroll-mt-32">
				{/* Decoración de fondo */}
				<div className="absolute top-[20%] left-[-10%] w-[40vw] h-[40vw] bg-principal/5 rounded-full blur-[100px] pointer-events-none"></div>
				<div className="max-w-[1400px] text-center z-10 animate-fade-in-up">
					<h1 className="mb-2 md:mb-4 text-secundarios-dark dark:text-secundarios-light text-balance">
						{t.hero.h1}
					</h1>
					<p className="bajada max-w-[950px] mx-auto">
						{t.hero.h2}
					</p>
					{/* Botón CTA */}
					<div className="mt-12 md:mt-16"></div>
					<button onClick={() => { setModalType('subscribe'); setShowModal(true); }} className="px-12 py-5 rounded-anthro bg-principal dark:bg-principal text-white dark:text-white font-sans font-bold text-xl transition-all duration-300 shadow-anthro-card hover:shadow-anthro-elevated hover:-translate-y-1 inline-flex items-center gap-3">
						{t.hero.ctaPrimary} <ArrowRight size={24} />
					</button>
				</div>
			</section>
				{/* 6. COLABORADORES */}
				<Section id="sobre" className="!py-8 !md:py-16">
					<h4 className="mb-8 md:mb-12 text-center">{t.collaborators.title}</h4>
					<div className="grid grid-cols-2 md:grid-cols-3 gap-x-8 gap-y-12 items-center">
						<CollaborativeCard href="https://riesgosia.org/es/" text="Riesgos IA" logo={logoRiesgosIA} />
						<CollaborativeCard href="https://www.enais.co/" text="ENAIS" logo={logoENAIS} />
						<CollaborativeCard href="https://bluedot.org/" text="BlueDot" logo={logoBlueDot} />
						<CollaborativeCard href="https://www.aisafety.com/" text="AISafety.com" logo={logoAISafetyCom} />
						<CollaborativeCard href="https://www.aisafetybcn.org/" text="AI Safety Barcelona" logo={logoAISafetyBCN} />
						<CollaborativeCard href="https://www.baish.com.ar/es" text="BAISH" logo={logoBAISH} />
					</div>
				</Section>
			{/* 2. WHY HUB SECTION */}
			<Section id="mission" className="bg-white/30 dark:bg-white/[0.02] border-y border-secundarios-dark/10 !py-12 !md:py-32">
				<div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
					<div className="animate-fade-in-up">
						<h4 className="mb-4">{t.why.title}</h4>
						<div className="max-w-prose"> {/* 'prose' limita el ancho a unos 65 caracteres, ideal para lectura */}
							<p>{t.why.text}</p>
						</div>
					</div>
					<div className="relative group">
						<div className="aspect-square max-w-[500px] mx-auto bg-secundarios-light/40 dark:bg-white/5 rounded-3xl overflow-hidden border border-secundarios-dark/10 shadow-anthro-card hover:shadow-anthro-elevated transition-all duration-700">
							<img
								src="https://i.imgur.com/wqT4oET.png"
								alt="AI Safety Madrid"
								className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000"
							/>
						</div>
					</div>
				</div>
			</Section>
			{/* 4. PILLARS SECTION */}
			{/* <Section id="hub-action">
					<h3 className="mb-12 md:mb-24 text-center">{t.pillars.title}</h3>
					<div className="grid md:grid-cols-3 gap-6 md:gap-12">
						<PillarCard
							icon={<BookOpen size={32} />}
							title={t.pillars.education.title}
							text={t.pillars.education.text}
						/>
						<PillarCard
							icon={<Calendar size={32} />}
							title={t.pillars.events.title}
							text={t.pillars.events.text}
						/>
						<PillarCard
							icon={<Users size={32} />}
							title={t.pillars.community.title}
							text={t.pillars.community.text}
						/>
					</div>
				</Section> */}
				{/* 5. EVENTOS - BENTO GRID */}
				<BentoGrid t={t} onModalOpen={() => { setModalType('event'); setShowModal(true); }} />

				{/* 7. ABOUT SECTION (CONOCENOS) */}
				<Section id="conocenos" className="bg-white dark:bg-secundarios-dark/5 border-t border-secundarios-dark/10">
					<div className="flex flex-col md:flex-row gap-12 md:gap-24 items-center">
						{/* Text Content */}
						<div className="flex-1 space-y-6 text-center md:text-left">
							<h4>{t.about.title}</h4>
							<p>
								{t.about.text1}
							</p>
							<p>
								{t.about.text2}
							</p>
							<div className="pt-4 flex flex-col md:flex-row gap-6 items-center justify-center md:justify-start">
								<button 
									onClick={() => { setModalType('subscribe'); setShowModal(true); }} 
									className="px-8 py-3 rounded-xl bg-principal text-white font-sans font-bold text-base transition-all duration-300 shadow-md hover:shadow-lg hover:-translate-y-1 inline-flex items-center gap-2"
								>
									{t.hero.ctaPrimary} <ArrowRight size={18} />
								</button>
							</div>
						</div>
						{/* Image */}
						<div className="w-full md:w-1/3 flex justify-center">
							<div className="flex flex-col gap-6 w-64 md:w-80">
								<div className="relative group w-full aspect-square">
									<div className="w-full h-full rounded-2xl overflow-hidden shadow-anthro-card relative z-10">
										<img 
											src={osmani} 
											alt="Osmani Redondo" 
											className="w-full h-full object-cover grayscale transition-all duration-500"
										/>
									</div>
								</div>
								<div className="flex gap-4">
									<a href="https://www.linkedin.com/in/osmani/" className="text-secundarios-dark/40 hover:text-principal transition-colors">
										<Linkedin size={28} />
									</a>
									<a href="https://substack.com/@osmaniredondo" className="text-secundarios-dark/40 hover:text-principal transition-colors">
										<svg width="24" height="28" viewBox="0 0 448 512" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
											<path d="M0 180.37h448V56H0v124.37zm0 184.26l224.23 125.79L448 364.63V233.1H0v131.53zm0-305.9V0h448v58.69H0z"/>
										</svg>
									</a>
								</div>
							</div>
						</div>
					</div>
				</Section>

				{/* FOOTER */}
				<footer id="newsletter" className="bg-secundarios-dark text-secundarios-light/40 py-6 md:py-12 px-4 md:px-8 border-t border-white/5">
					<div className="max-w-7xl mx-auto text-center md:text-left">
						<div className="flex flex-col md:flex-row justify-between items-start gap-12">
							<div className="space-y-6 flex flex-col items-center md:items-start">
								{/* Logo en blanco y más grande (50% más) */}
								<img 
									src={logo} 
									alt="IA Safety España" 
									className="h-16 brightness-0 invert" 
								/>
								<p className="max-w-xs font-serif text-lg text-balance mb-6">{t.footer.tagline}</p>
								
								<button 
									onClick={() => { setModalType('subscribe'); setShowModal(true); }} 
									className="px-8 py-3 rounded-xl bg-principal text-white font-sans font-bold text-base transition-all duration-300 shadow-md hover:shadow-lg hover:-translate-y-1 inline-flex items-center gap-2"
								>
									{t.hero.ctaPrimary} <ArrowRight size={18} />
								</button>

								{/* Redes Sociales alineadas a la izquierda (en desktop) y más grandes */}
								<div className="flex gap-6 mt-4">
									<a href="https://linkedin.com" className="hover:text-white transition-colors">
										<Linkedin size={36} />
									</a>
									<a href="https://instagram.com" className="hover:text-white transition-colors">
										<Instagram size={36} />
									</a>
									<a href="https://discord.com" className="hover:text-white transition-colors" title="Discord">
										<svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-gamepad-2"><line x1="6" x2="10" y1="12" y2="12"/><line x1="8" x2="8" y1="10" y2="14"/><line x1="15" x2="15.01" y1="13" y2="13"/><line x1="18" x2="18.01" y1="11" y2="11"/><rect width="20" height="12" x="2" y="6" rx="2"/></svg>
									</a>
									<a href="https://substack.com" className="hover:text-white transition-colors" title="Substack">
										<svg width="32" height="36" viewBox="0 0 448 512" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
											<path d="M0 180.37h448V56H0v124.37zm0 184.26l224.23 125.79L448 364.63V233.1H0v131.53zm0-305.9V0h448v58.69H0z"/>
										</svg>
									</a>
								</div>
							</div>
						</div>
						<div className="pt-16 mt-16 border-t border-white/5 text-center text-xs tracking-widest uppercase text-white/60 font-medium">
							© {t.footer.copyright} · Built for a human-aligned future.
						</div>
					</div>
				</footer>
		</div>
	);
}