import React, { useState, useEffect } from 'react';
import { translations } from './locales/translations';
import {
	BookOpen, Calendar, Globe, ArrowRight, X, User
} from 'lucide-react';
import { FaLinkedin, FaInstagram } from "react-icons/fa";
import { SiSubstack } from "react-icons/si";

// --- Import components ---
import Navbar from './components/Navbar';
import { Section, PillarCard, CollaborativeCard } from './components/UI';
import BentoGrid from './components/BentoGrid';
import SocialFooter from './components/SocialFooter';

// --- Import assets (Logos Colaboradores) ---
import logoRiesgosIA from './assets/logos__riesgos_ia.svg';
import logoENAIS from './assets/logos__european_network_for_AI_safety.svg';
import logoBlueDot from './assets/logos__bluedot_impact.svg';
import logoAISafetyCom from './assets/logos__aisafety_com.svg';
import logoAISafetyBCN from './assets/logos__ai_safety_barcelona.svg';
import logoBAISH from './assets/logos__buenos_aires_AI_safety_hub.svg';
import logo from './assets/safety_id_logo_white_leyenda.svg';
import osmani from './assets/osmani.jpeg';
import women4aisImg from './assets/original-aa4b526da371210b9104b913751e40d4.webp';

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
			<section id="hero" className="relative min-h-screen flex items-center justify-center pt-24 md:pt-32 pb-16 md:pb-24 px-4 md:px-8 overflow-hidden">
				<div className="absolute top-[20%] left-[-10%] w-[40vw] h-[40vw] bg-principal/5 rounded-full blur-[100px] pointer-events-none"></div>
				{/* CAMBIO: max-w-7xl mx-auto para alinear con el resto */}
				<div className="max-w-7xl mx-auto text-center z-10 animate-fade-in-up w-full">
					<h1 className="mb-2 md:mb-4 text-secundarios-dark dark:text-secundarios-light text-balance">
						{t.hero.h1}
					</h1>
					<p className="bajada max-w-[950px] mx-auto">{t.hero.h2}</p>
					<div className="mt-12 md:mt-16">
						<button onClick={() => { setModalType('subscribe'); setShowModal(true); }} className="px-12 py-5 rounded-anthro bg-principal text-white font-sans font-bold text-xl transition-all duration-300 shadow-anthro-card hover:shadow-anthro-elevated hover:-translate-y-1 inline-flex items-center gap-3">
							{t.hero.ctaPrimary}
						</button>
					</div>
				</div>
			</section>
				{/* 2. COLABORADORES */}
				<section id="sobre" className="px-4 md:px-8 py-8 md:py-16">
					<div className="max-w-7xl mx-auto">
						<h4 className="mb-8 md:mb-12 text-center">{t.collaborators.title}</h4>
					<div className="grid grid-cols-2 md:grid-cols-3 gap-x-8 gap-y-12 items-center">
						<CollaborativeCard href="https://riesgosia.org/es/" text="Riesgos IA" logo={logoRiesgosIA} />
						<CollaborativeCard href="https://www.enais.co/" text="ENAIS" logo={logoENAIS} />
						<CollaborativeCard href="https://bluedot.org/" text="BlueDot" logo={logoBlueDot} />
						<CollaborativeCard href="https://www.aisafety.com/" text="AISafety.com" logo={logoAISafetyCom} />
						<CollaborativeCard href="https://www.aisafetybcn.org/" text="AI Safety Barcelona" logo={logoAISafetyBCN} />
						<CollaborativeCard href="https://www.baish.com.ar/es" text="BAISH" logo={logoBAISH} />
					</div>
					</div>
				</section>
			{/* 3. WHY HUB SECTION */}
			<section id="mission" className="px-4 md:px-8 py-12 md:py-32">
				<div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
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
			</section>
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
				{/* 4. EVENTOS - BENTO GRID */}
				<section id="eventos" className="px-4 md:px-8 py-12">
					<div className="max-w-7xl mx-auto">
						<BentoGrid t={t} onModalOpen={() => { setModalType('event'); setShowModal(true); }} />
					</div>
				</section>
				{/* 5. CONOCENOS */}
				<section id="conocenos" className="px-4 md:px-8 py-8 md:py-16">
					<div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-12 md:gap-24 items-center justify-center">
						<div className="flex-1 max-w-xl space-y-6 text-center md:text-left">
							<h4>{t.about.title}</h4>
							<p>
								{t.about.text1}
							</p>
							<p>
								{t.about.text2}
							</p>
							<div className="pt-4 flex flex-col md:flex-row gap-6 items-center justify-center md:justify-start">
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
										<FaLinkedin size={28} />
									</a>
									<a href="https://substack.com/@osmaniredondo" className="text-secundarios-dark/40 hover:text-principal transition-colors">
										<SiSubstack size={24} />
									</a>
								</div>
							</div>
						</div>
					</div>
				</section>

				{/* 6. MANIFIESTO */}
				<section id="manifiesto" className="px-4 md:px-8 py-12 md:py-24">
					<div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-6">
						<div className="flex-[2] bg-secundarios-gray dark:bg-white/5 rounded-[40px] p-8 md:p-16 min-h-[400px] flex items-center">
							<h3 className="bajada !text-secundarios-dark dark:!text-white !mb-0 text-left">
								{t.mission.text}
							</h3>
						</div>
						<div className="flex-[1] bg-secundarios-gray dark:bg-white/5 rounded-[40px] p-8 md:p-12 flex flex-col justify-between min-h-[400px]">
							<div>
								<button onClick={() => { setModalType('subscribe'); setShowModal(true); }} className="w-full py-4 rounded-2xl bg-secundarios-dark text-white font-bold hover:bg-principal transition-all shadow-md">
									{t.hero.ctaPrimary}
								</button>
							</div>
							<SocialFooter />
						</div>
					</div>
				</section>
				{/* 7. WOMEN4AIS */}
				<section className="px-4 md:px-8 py-12 md:py-24">
					<div className="max-w-7xl mx-auto">
						<div className="bg-cuartos-purple rounded-[32px] p-8 md:p-16 flex flex-col md:flex-row-reverse items-center gap-12 text-white">
					  <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl pointer-events-none -translate-y-1/2 translate-x-1/2"></div>
					  
					  <div className="flex-1 space-y-8 z-10">
						<h3 className="text-white/90 md:text-5xl mb-6">{t.women4ais.title}</h3>
						<p className="text-white/90 text-lg md:text-2xl font-serif max-w-2xl leading-relaxed">
						  {t.women4ais.text}
						</p>
						<div className="flex items-center gap-4 pt-4">
							<a href="https://www.women4aisafety.org/" target="_blank" rel="noopener noreferrer" className="w-12 h-12 flex items-center justify-center bg-white/10 rounded-full hover:bg-white text-white hover:text-cuartos-purple transition-all duration-300" aria-label="Web">
								<Globe size={24} />
							</a>
							<a href="https://www.instagram.com/women4aisafety" target="_blank" rel="noopener noreferrer" className="w-12 h-12 flex items-center justify-center bg-white/10 rounded-full hover:bg-white text-white hover:text-cuartos-purple transition-all duration-300" aria-label="Instagram">
								<FaInstagram size={24} />
							</a>
							<a href="https://www.linkedin.com/company/women4aisafety" target="_blank" rel="noopener noreferrer" className="w-12 h-12 flex items-center justify-center bg-white/10 rounded-full hover:bg-white text-white hover:text-cuartos-purple transition-all duration-300" aria-label="LinkedIn">
								<FaLinkedin size={24} />
							</a>
						</div>
					  </div>
					  
					  <div className="shrink-0 w-full md:w-auto flex justify-center">
						<div className="w-64 h-80 md:w-80 md:h-96 rounded-3xl overflow-hidden shadow-inner flex flex-col">
							<img src={women4aisImg} alt="Women4AIS" className="w-full h-full object-cover" />
							<div className="bg-white/10 px-4 py-3 text-center">
								<p className="text-sm text-white/80">By Sandro Rybak</p>
							</div>
						</div>
						</div>
					</div>
					</div>
				</section>
				<footer id="newsletter" className="px-4 md:px-8 bg-secundarios-dark text-secundarios-light/40 py-12 border-t border-white/5">
					<div className="max-w-7xl mx-auto text-center md:text-left">
						<div className="flex flex-col-reverse md:flex-row justify-between items-center gap-12">
							<div className="flex flex-col items-center md:items-start w-full md:w-auto">
								<div className="bajada max-w-xs mb-6">{t.footer.tagline}</div>
								<button 
									onClick={() => { setModalType('subscribe'); setShowModal(true); }} 
									className="px-10 py-4 rounded-xl bg-principal text-white font-sans font-bold text-xl transition-all duration-300 shadow-md hover:shadow-lg hover:-translate-y-1 inline-flex items-center gap-3 mb-8"
								>
									{t.hero.ctaPrimary}
								</button>
								<div className="mb-6">
									<SocialFooter />
								</div>
								<h5 className="normal-case secundarios-light mb-4 italic">{t.footer.email}</h5>
							</div>
							<div className="w-full md:w-auto flex justify-center md:justify-end mb-8 md:mb-0">
								<img 
									src={logo} 
									alt="IA Safety España" 
									className="h-16 md:h-20" 
								/>
							</div>
						</div>
						<div className="pt-8 mt-8 border-t border-white/5 text-center text-xs tracking-widest uppercase text-white/60 font-medium">
							© {t.footer.copyright}.
						</div>
					</div>
				</footer>
		</div>
	);
}