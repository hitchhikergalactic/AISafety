import React, { useState, useEffect } from 'react';
import { translations } from './locales/translations';
import { 
  BookOpen, Calendar, Globe, ArrowRight, Linkedin, 
  Instagram, Newspaper, Users, CheckCircle, X 
} from 'lucide-react';

// --- Import components ---
import Navbar from './components/Navbar';
import { Section, PillarCard, CollaborativeCard } from './components/UI';
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
        <div className="absolute top-[20%] left-[-10%] w-[40vw] h-[40vw] bg-principal/5 rounded-full blur-[100px] pointer-events-none"></div>
        <div className="max-w-[1400px] text-center z-10 animate-fade-in-up">
          <h1 className="mb-8 md:mb-12 text-secundarios-dark dark:text-secundarios-light text-balance">
            {t.hero.h1}
          </h1>
          <p className="text-[clamp(1.25rem,4vw,2.4rem)] font-serif font-medium leading-[1.3] text-secundarios-dark/90 dark:text-secundarios-light/90 mb-12 md:mb-[4.5rem] max-w-[950px] mx-auto text-balance">
            {t.hero.h2}
          </p>
          <a href="#eventos" className="px-12 py-5 rounded-anthro bg-principal dark:bg-principalLight text-white dark:text-secundarios-dark font-sans font-bold text-xl transition-all duration-300 shadow-anthro-card hover:shadow-anthro-elevated hover:-translate-y-1 inline-flex items-center gap-3">
            {t.hero.ctaPrimary} <ArrowRight size={24} />
          </a>
        </div>
      </section>

      {/* 2. WHY HUB SECTION */}
      <Section id="mission" className="bg-white/30 dark:bg-white/[0.02] border-y border-secundarios-dark/10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-32 items-center">
          <div>
            <h3 className="mb-4 md:mb-6">{t.why.title}</h3>
            <div className="text-[clamp(1.25rem,3.5vw,2.2rem)] text-secundarios-dark/90 dark:text-secundarios-light/90 font-serif leading-relaxed">
              <p>{t.why.text}</p>
            </div>
          </div>
          <div className="relative group">
            <div className="aspect-[1/1] max-w-[500px] mx-auto bg-secundarios-light/40 dark:bg-white/5 rounded-3xl overflow-hidden flex items-center justify-center border border-secundarios-dark/20 shadow-anthro-elevated relative">
               <img src="https://i.imgur.com/wqT4oET.png" alt="AI Safety" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000" />
            </div>
          </div>
        </div>
      </Section>

      {/* 4. PILLARS */}
      <Section id="hub-action">
        <h2 className="mb-12 md:mb-24 text-center">{t.pillars.title}</h2>
        <div className="grid md:grid-cols-3 gap-6 md:gap-12">
          <PillarCard icon={<BookOpen size={32} />} title={t.pillars.education.title} text={t.pillars.education.text} />
          <PillarCard icon={<Calendar size={32} />} title={t.pillars.events.title} text={t.pillars.events.text} />
          <PillarCard icon={<Users size={32} />} title={t.pillars.community.title} text={t.pillars.community.text} />
        </div>
      </Section>

      {/* 5. EVENTOS */}
      <Section id="eventos" className="bg-white/30 dark:bg-white/[0.02] border-y border-secundarios-dark/10">
        <div className="max-w-5xl mx-auto">
          <h2 className="mb-12 md:mb-24 text-center">{t.upcoming.title}</h2>
          <div className="rounded-[24px] shadow-anthro-elevated overflow-hidden border border-secundarios-dark/15 flex flex-col group transition-all duration-500">
            <div className="relative overflow-hidden h-[250px] md:h-[450px]">
              <img src="https://i.imgur.com/vF4Dz3Z.jpeg" alt={t.upcoming.eventTitle} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000" />
            </div>
            <div className={`p-8 md:p-20 text-white text-center flex flex-col items-center gap-8 ${theme === 'dark' ? 'bg-[#ff4500]' : 'bg-[#ff4500]'}`}>
              <h3 className="mb-4 md:mb-6">{t.upcoming.eventTitle}</h3>
              <p className="text-xl md:text-3xl font-serif opacity-90">{t.upcoming.description}</p>
              <button onClick={() => setShowModal(true)} className="mt-4 px-10 py-4 rounded-anthro bg-white text-principal font-sans font-extrabold text-lg md:text-2xl hover:scale-105 transition-all shadow-2xl flex items-center gap-4">
                {t.upcoming.cta} <ArrowRight size={24} />
              </button>
            </div>
          </div>
        </div>
      </Section>

      {/* 6. COLABORADORES */}
      <Section id="sobre">
        <h2 className="mb-12 md:mb-24 text-center">{t.collaborators.title}</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-12">
          <CollaborativeCard href="https://riesgosia.org/es/" text="Riesgos IA" />
          <CollaborativeCard href="https://www.enais.co/" text="ENAIS" />
          <CollaborativeCard href="https://bluedot.org/" text="BlueDot" />
          <CollaborativeCard href="https://www.aisafety.com/" text="AISafety.com" />
          <CollaborativeCard href="https://www.aisafetybcn.org/" text="AI Safety Barcelona" />
          <CollaborativeCard href="https://www.baish.com.ar/es" text="BAISH" />
        </div>
      </Section>

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