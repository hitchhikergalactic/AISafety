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

// --- Types ---
type Language = 'es' | 'en';
type Theme = 'light' | 'dark';

export default function App() {
	const [lang, setLang] = useState<Language>(() => (localStorage.getItem('app_lang') as Language) || 'es');
	const [theme, setTheme] = useState<Theme>(() => (localStorage.getItem('app_theme') as Theme) || 'light');
	const [showModal, setShowModal] = useState(false);
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
					<div className="relative bg-secundarios-light dark:bg-secundarios-dark rounded-[32px] p-8 md:p-14 max-w-md w-full shadow-anthro-elevated border border-secundarios-dark/20 z-10" onClick={e => e.stopPropagation()}>
						<button onClick={() => setShowModal(false)} className="absolute top-6 right-6 text-secundarios-dark hover:text-principal transition-colors">
							<X size={24} />
						</button>
						<h3 className="mb-4 md:mb-6">Reserva tu plaza</h3>
						<p className="text-secundarios-dark/60 dark:text-secundarios-light/60 font-serif mb-8 text-lg">28 de abril · Celonis · Madrid</p>
						<form action="https://formsubmit.co/aisafetymadrid@gmail.com" method="POST" className="space-y-6">
							<input type="text" name="name" required placeholder="Tu nombre" className="w-full px-6 py-4 rounded-2xl bg-white dark:bg-white/5 border border-secundarios-dark/20 text-secundarios-dark dark:text-white focus:outline-none focus:ring-2 focus:ring-principal/50 transition-all font-sans text-lg" />
							<input type="email" name="email" required placeholder="tu@email.com" className="w-full px-6 py-4 rounded-2xl bg-white dark:bg-white/5 border border-secundarios-dark/20 text-secundarios-dark dark:text-white focus:outline-none focus:ring-2 focus:ring-principal/50 transition-all font-sans text-lg" />
							<button type="submit" className="w-full py-5 rounded-2xl bg-principal text-white font-sans font-black text-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-anthro-elevated active:scale-95">
								Reservar plaza →
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
					{/* Aplicamos la clase "bajada" y quitamos todo el CSS manual */}
					<p className="bajada max-w-[950px] mx-auto">
						{t.hero.h2}
					</p>
					{/* Botón CTA */}
					<div className="mt-12 md:mt-16"></div>
					<a href="#eventos" className="px-12 py-5 rounded-anthro bg-principal dark:bg-principal text-white dark:text-white font-sans font-bold text-xl transition-all duration-300 shadow-anthro-card hover:shadow-anthro-elevated hover:-translate-y-1 inline-flex items-center gap-3">
						{t.hero.ctaPrimary} <ArrowRight size={24} />
					</a>
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
				<BentoGrid t={t} onModalOpen={() => setShowModal(true)} />
				{/* FOOTER */}
				<footer id="newsletter" className="bg-secundarios-dark text-secundarios-light/40 py-16 md:py-32 px-4 md:px-8 border-t border-white/5">
					<div className="max-w-7xl mx-auto text-center md:text-left">
						<div className="flex flex-col md:flex-row justify-between items-center gap-12">
							<div className="space-y-4">
								<div className="text-xl font-bold text-secundarios-light">IA Safety España</div>
								<p className="max-w-xs font-serif text-lg">{t.footer.tagline}</p>
							</div>
							<div className="flex gap-6">
								<a href="https://linkedin.com" className="hover:text-white transition-colors"><Linkedin /></a>
								<a href="https://instagram.com" className="hover:text-white transition-colors"><Instagram /></a>
							</div>
						</div>
						<div className="pt-16 mt-16 border-t border-white/5 text-center text-xs tracking-widest uppercase opacity-20">
							© {t.footer.copyright} · Built for a human-aligned future.
						</div>
					</div>
				</footer>
		</div>
	);
}