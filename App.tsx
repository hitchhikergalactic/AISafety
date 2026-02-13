import React, { useState, useEffect } from 'react';
import { translations } from './translations';
import { 
  BookOpen, 
  Calendar, 
  Globe,
  ArrowRight,
  Menu,
  X,
  Linkedin,
  Instagram,
  Newspaper,
  Sun,
  Moon,
  Users,
  CheckCircle,
  Mail
} from 'lucide-react';

// --- Types ---
type Language = 'es' | 'en';
type Theme = 'light' | 'dark';

// --- Components ---

const Navbar: React.FC<{ 
  lang: Language, 
  setLang: (l: Language) => void, 
  theme: Theme,
  setTheme: (t: Theme) => void,
  t: typeof translations.es 
}> = ({ lang, setLang, theme, setTheme, t }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: "#hero", label: t.nav.home },
    { href: "#mission", label: t.nav.mission },
    { href: "#eventos", label: t.nav.events },
    { href: "#sobre", label: t.nav.about },
    { href: "#newsletter", label: t.nav.contact },
  ];

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-500 ease-in-out ${scrolled ? 'bg-anthropic-beige/90 dark:bg-anthropic-dark/90 glass-nav border-b border-anthropic-midGray/10 py-4 shadow-sm' : 'bg-transparent py-8'}`}>
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 flex justify-between items-center relative">
        <a href="#" className="shrink-0 transition-opacity duration-300 hover:opacity-80">
          <img 
            src="https://i.imgur.com/DFQgFDM.png" 
            alt="AI Safety" 
            className="h-[50px] w-auto block"
          />
        </a>

        <div className="hidden lg:flex items-center gap-10 absolute left-1/2 -translate-x-1/2 font-sans font-semibold text-xs uppercase tracking-[0.2em] opacity-80">
          {navLinks.map(link => (
            <a key={link.href} href={link.href} className="text-anthropic-dark dark:text-anthropic-beige hover:text-anthropic-orange dark:hover:text-anthropic-orangeLight transition-all duration-300 relative group overflow-hidden">
              {link.label}
              <span className="absolute bottom-0 left-0 w-full h-0.5 bg-anthropic-orange transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></span>
            </a>
          ))}
        </div>

        <div className="flex items-center gap-3 md:gap-5">
          <button 
            onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
            className="p-2.5 rounded-full border border-anthropic-midGray/20 text-anthropic-dark dark:text-anthropic-beige hover:bg-anthropic-lightGray dark:hover:bg-white/5 transition-all duration-300"
            aria-label="Toggle Theme"
          >
            {theme === 'light' ? <Moon size={18} /> : <Sun size={18} />}
          </button>

          <button 
            onClick={() => setLang(lang === 'es' ? 'en' : 'es')}
            className="px-4 py-1.5 rounded-anthro border border-anthropic-midGray/20 text-anthropic-dark dark:text-anthropic-beige hover:border-anthropic-orange hover:text-anthropic-orange font-sans font-bold text-[10px] md:text-xs uppercase tracking-[0.15em] transition-all duration-300"
          >
            {lang === 'es' ? 'EN' : 'ES'}
          </button>

          <button onClick={() => setIsOpen(!isOpen)} className="lg:hidden text-anthropic-dark dark:text-anthropic-beige p-2">
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`lg:hidden fixed inset-0 top-0 bg-anthropic-beige dark:bg-anthropic-dark z-[-1] transition-transform duration-500 ease-in-out ${isOpen ? 'translate-y-0' : '-translate-y-full'}`}>
        <div className="pt-32 px-12 flex flex-col gap-8 h-full">
          {navLinks.map((link, idx) => (
            <a 
              key={link.href} 
              href={link.href} 
              onClick={() => setIsOpen(false)} 
              className="text-4xl font-sans font-bold text-anthropic-dark dark:text-anthropic-beige border-b border-anthropic-midGray/10 pb-4 flex justify-between items-center group"
              style={{ transitionDelay: `${idx * 50}ms` }}
            >
              {link.label}
              <ArrowRight className="opacity-0 group-hover:opacity-100 transition-opacity" size={32} />
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
};

const Section: React.FC<{ 
  id?: string, 
  className?: string, 
  children: React.ReactNode,
  fullWidth?: boolean
}> = ({ id, className = "", children, fullWidth = false }) => (
  <section id={id} className={`py-28 md:py-48 px-6 md:px-12 scroll-mt-32 ${className}`}>
    <div className={fullWidth ? "w-full" : "max-w-7xl mx-auto"}>
      {children}
    </div>
  </section>
);

const PillarCard: React.FC<{ 
  icon: React.ReactNode, 
  title: string, 
  text: string 
}> = ({ icon, title, text }) => (
  <div className="bg-white dark:bg-white/5 p-10 md:p-14 rounded-anthro border border-anthropic-midGray/15 shadow-anthro-subtle flex flex-col h-full group hover:shadow-anthro-card hover:border-anthropic-midGray/30 transition-all duration-500">
    <div className="w-14 h-14 bg-anthropic-blue/10 dark:bg-anthropic-blueLight/10 text-anthropic-blue dark:text-anthropic-blueLight rounded-anthro flex items-center justify-center mb-10 group-hover:scale-110 transition-transform duration-500">
      {icon}
    </div>
    <h3 className="mb-6 font-bold tracking-tight">{title}</h3>
    <p className="text-anthropic-dark/80 dark:text-anthropic-beige/80 mb-0 flex-grow leading-relaxed text-xl md:text-2xl font-serif italic text-balance">{text}</p>
  </div>
);

const CollaborativeCard: React.FC<{ href: string, text: string }> = ({ href, text }) => (
  <a 
    href={href} 
    target="_blank" 
    rel="noopener noreferrer"
    className="block p-12 rounded-anthro border-2 border-anthropic-midGray/20 bg-white/40 dark:bg-white/5 text-center transition-all duration-400 hover:bg-white dark:hover:bg-white/10 hover:scale-[1.08] hover:border-anthropic-orange group shadow-anthro-subtle hover:shadow-anthro-elevated"
  >
    <span className="font-sans font-bold text-2xl leading-[1.4] text-anthropic-dark dark:text-anthropic-beige group-hover:text-anthropic-orange dark:group-hover:text-anthropic-orangeLight transition-colors tracking-tight">
      {text}
    </span>
  </a>
);

export default function App() {
  const [lang, setLang] = useState<Language>(() => (localStorage.getItem('app_lang') as Language) || 'es');
  const [theme, setTheme] = useState<Theme>(() => (localStorage.getItem('app_theme') as Theme) || 'light');
  const t = translations[lang];

  useEffect(() => {
    localStorage.setItem('app_lang', lang);
    document.documentElement.lang = lang;
  }, [lang]);

  useEffect(() => {
    localStorage.setItem('app_theme', theme);
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [theme]);

  // CRITICAL: Precise Smooth scroll handler
  useEffect(() => {
    const handleAnchorClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const anchor = target.closest('a');
      if (anchor?.hash) {
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
    <div className="min-h-screen transition-colors duration-500 selection:bg-anthropic-orange selection:text-white">
      <Navbar lang={lang} setLang={setLang} theme={theme} setTheme={setTheme} t={t} />

      {/* 1. HERO SECTION - ID MANDATORY */}
      <section id="hero" className="hero relative min-h-screen flex items-center justify-center pt-32 pb-24 px-8 overflow-hidden scroll-mt-32">
        {/* Subtle background decoration */}
        <div className="absolute top-[20%] left-[-10%] w-[40vw] h-[40vw] bg-anthropic-orange/5 rounded-full blur-[100px] pointer-events-none"></div>
        <div className="absolute bottom-[-10%] right-[-5%] w-[30vw] h-[30vw] bg-anthropic-blue/5 rounded-full blur-[80px] pointer-events-none"></div>

        <div className="max-w-[1400px] text-center z-10 animate-fade-in-up">
          {/* GIGANTE IMPACTFUL H1 */}
          <h1 className="mb-12 text-[clamp(3.6rem,7.2vw,6rem)] font-extrabold tracking-[-0.04em] leading-none text-anthropic-dark dark:text-anthropic-beige text-balance">
            {t.hero.h1}
          </h1>

          <p className="text-[clamp(1.5rem,4vw,2.4rem)] font-serif font-medium leading-[1.3] text-anthropic-dark/90 dark:text-anthropic-beige/90 mb-[4.5rem] max-w-[950px] mx-auto italic text-balance">
            {t.hero.h2}
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <a href="#eventos" className="px-12 py-5 rounded-anthro bg-anthropic-orange dark:bg-anthropic-orangeLight text-white dark:text-anthropic-dark font-sans font-bold text-xl transition-all duration-300 shadow-anthro-card hover:shadow-anthro-elevated hover:-translate-y-1 flex items-center justify-center gap-3 w-full sm:w-auto">
              {t.hero.ctaPrimary}
              <ArrowRight size={24} />
            </a>
            <a href="#newsletter" className="px-12 py-5 rounded-anthro border-2 border-anthropic-blue/50 dark:border-anthropic-blueLight/50 text-anthropic-blue dark:text-anthropic-blueLight font-sans font-bold text-xl hover:bg-anthropic-blue/5 dark:hover:bg-anthropic-blueLight/5 transition-all duration-300 w-full sm:w-auto flex items-center justify-center">
              {t.hero.ctaSecondary}
            </a>
          </div>
        </div>
      </section>

      {/* 2. WHY HUB SECTION - ID MANDATORY */}
      <Section id="why-hub" className="bg-white/30 dark:bg-white/[0.02] border-y border-anthropic-midGray/10 scroll-mt-32">
        <div className="grid lg:grid-cols-2 gap-20 lg:gap-32 items-center">
          <div>
            <h2 className="mb-14 font-bold tracking-tight text-balance leading-[1.05]">{t.why.title}</h2>
            <div className="text-[clamp(1.5rem,3.5vw,2.2rem)] text-anthropic-dark/90 dark:text-anthropic-beige/90 font-serif leading-relaxed italic">
              <p>"{t.why.text}"</p>
            </div>
          </div>
          <div className="relative group">
            <div className="aspect-[1/1] max-w-[500px] mx-auto bg-anthropic-lightGray/40 dark:bg-white/5 rounded-3xl overflow-hidden flex items-center justify-center border border-anthropic-midGray/20 shadow-anthro-elevated relative">
               <img src="https://i.imgur.com/wqT4oET.png" alt="AI Safety illustration" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000" />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-anthropic-dark dark:bg-anthropic-beige p-10 rounded-2xl shadow-anthro-elevated hidden xl:block max-w-[320px] border border-white/10 dark:border-black/5 animate-fade-in-up">
              <p className="font-sans font-bold text-lg leading-snug text-anthropic-beige dark:text-anthropic-dark mb-0">
                Una comunidad local con ambición global por la alineación.
              </p>
            </div>
          </div>
        </div>
      </Section>

      {/* 3. MISSION STATEMENT - ID MANDATORY */}
      <section id="mission" className="bg-transparent py-44 text-center px-8 scroll-mt-32">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-anthropic-green dark:text-anthropic-greenLight text-xs font-sans font-black uppercase tracking-[0.5em] mb-14 opacity-80">
            {t.mission.title}
          </h2>
          <p className="text-[clamp(2rem,5.5vw,4rem)] font-serif italic text-anthropic-dark dark:text-anthropic-beige leading-[1.1] text-balance">
            "{t.mission.text}"
          </p>
        </div>
      </section>

      {/* 4. HUB IN ACTION - ID MANDATORY */}
      <Section id="hub-action" className="scroll-mt-32">
        <h2 className="mb-24 text-center font-bold tracking-tighter">{t.pillars.title}</h2>
        <div className="grid md:grid-cols-3 gap-8 md:gap-12">
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
      </Section>

      {/* 5. PRÓXIMOS EVENTOS - ID MANDATORY */}
      <Section id="eventos" className="bg-white/30 dark:bg-white/[0.02] border-y border-anthropic-midGray/10 scroll-mt-32">
        <div className="max-w-5xl mx-auto">
          <h2 className="mb-16 text-center font-bold tracking-tight">{t.upcoming.title}</h2>
          
          <div className="rounded-[24px] shadow-anthro-elevated overflow-hidden border border-anthropic-midGray/15 flex flex-col group transition-all duration-500 hover:shadow-[0_40px_80px_-15px_rgba(0,0,0,0.2)]">
            <div className="relative overflow-hidden h-[300px] md:h-[450px]">
              <img 
                src="https://i.imgur.com/vF4Dz3Z.jpeg" 
                alt={t.upcoming.eventTitle} 
                className="w-full h-full object-cover object-center block group-hover:scale-105 transition-transform duration-1000"
              />
              <div className="absolute inset-0 bg-anthropic-dark/10 group-hover:bg-transparent transition-colors duration-500"></div>
            </div>
            
            <div className={`p-10 md:p-20 text-white text-center flex flex-col items-center gap-10 transition-all duration-500 ${theme === 'dark' ? 'bg-[linear-gradient(135deg,#e89074,#d97757)]' : 'bg-[linear-gradient(135deg,#d97757,#c86847)]'}`}>
              <h3 className="text-4xl md:text-6xl font-bold leading-tight max-w-3xl tracking-tight text-balance">{t.upcoming.eventTitle}</h3>
              
              <div className="flex flex-col gap-4 font-sans font-extrabold text-sm md:text-base uppercase tracking-[0.2em] opacity-100 bg-white/10 px-8 py-6 rounded-2xl border border-white/20 backdrop-blur-md">
                <p className="flex items-center justify-center gap-3 text-center">
                  {t.upcoming.date}
                </p>
                <div className="h-px w-12 bg-white/30 mx-auto"></div>
                <p className="flex items-center justify-center gap-3 text-center">
                  {t.upcoming.location}
                </p>
              </div>

              <p className="text-2xl md:text-3xl font-serif italic leading-relaxed max-w-2xl opacity-90 text-balance">
                "{t.upcoming.description}"
              </p>

              <a 
                href="#newsletter" 
                className="mt-6 px-14 py-6 rounded-anthro bg-white text-anthropic-orange font-sans font-extrabold text-xl md:text-2xl hover:scale-105 active:scale-95 transition-all duration-300 shadow-2xl flex items-center gap-4"
              >
                {t.upcoming.cta}
                <ArrowRight size={28} />
              </a>
            </div>
          </div>
        </div>
      </Section>

      {/* 6. RED DE COLABORADORES - ID MANDATORY */}
      <Section id="collaborators" className="scroll-mt-32">
        <h2 className="mb-16 text-center font-bold tracking-tight">{t.collaborators.title}</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
          <CollaborativeCard href="https://riesgosia.org/es/" text="Riesgos IA" />
          <CollaborativeCard href="https://www.enais.co/" text="ENAIS" />
          <CollaborativeCard href="https://bluedot.org/" text="BlueDot" />
          <CollaborativeCard href="https://www.aisafety.com/" text="AISafety.com" />
          <CollaborativeCard href="https://www.aisafetybcn.org/" text="AI Safety Barcelona" />
          <CollaborativeCard href="https://safeaigermany.org/" text="Safe AI Germany" />
        </div>
      </Section>

      {/* 7. SOBRE ESTA INICIATIVA - ID MANDATORY */}
      <Section id="sobre" className="bg-white/30 dark:bg-white/[0.02] border-y border-anthropic-midGray/10 flex justify-center scroll-mt-32">
        <div className="max-w-[760px] w-full bg-white dark:bg-[#1a1a19] p-10 md:p-20 rounded-[32px] shadow-anthro-elevated border border-anthropic-midGray/10 text-center transition-all duration-500 hover:border-anthropic-orange/30 group">
          
          <div className="relative inline-block mb-10">
            <img 
              src="https://i.imgur.com/Zgdo29Z.jpeg" 
              alt="Osmani Redondo" 
              className="w-[180px] h-[180px] md:w-[220px] md:h-[220px] rounded-full border-[6px] border-anthropic-beige dark:border-anthropic-dark object-cover object-center mx-auto block shadow-2xl group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute -bottom-2 -right-2 bg-anthropic-orange w-12 h-12 rounded-full flex items-center justify-center text-white border-4 border-white dark:border-[#1a1a19] shadow-xl">
              <CheckCircle size={20} />
            </div>
          </div>

          <div className="mb-10 flex justify-center gap-6 text-anthropic-midGray font-sans text-xs font-black uppercase tracking-[0.35em] opacity-70">
             <a href="https://www.linkedin.com/in/osmani" target="_blank" rel="noopener noreferrer" className="hover:text-anthropic-orange hover:underline transition-all">LinkedIn</a>
             <span className="opacity-30">/</span>
             <a href="https://substack.com/@osmaniredondo" target="_blank" rel="noopener noreferrer" className="hover:text-anthropic-orange hover:underline transition-all">Substack</a>
          </div>

          <h2 className="mb-12 font-bold text-4xl md:text-5xl tracking-tight">{t.about.title}</h2>
          
          <div className="space-y-8 text-xl md:text-2xl text-anthropic-dark/90 dark:text-anthropic-beige/90 font-serif leading-relaxed italic mb-16 text-balance">
            <p>{t.about.text1}</p>
            <p>{t.about.text2}</p>
          </div>

          <div className="flex flex-col items-center gap-8 pt-14 border-t border-anthropic-midGray/10">
            <p className="font-sans font-extrabold text-sm md:text-base uppercase tracking-[0.3em] opacity-60">{t.about.joinCta}</p>
            <a 
              href="https://forms.gle/VwvP46yS6ZnzvZ6n7" 
              target="_blank"
              rel="noopener noreferrer"
              className="px-[2rem] py-[0.8rem] rounded-[8px] border-2 border-anthropic-secondary dark:border-anthropic-secondaryLight text-anthropic-secondary dark:text-anthropic-secondaryLight font-sans font-black text-lg md:text-xl transition-all duration-300 hover:bg-anthropic-secondary dark:hover:bg-anthropic-secondaryLight hover:text-white dark:hover:text-anthropic-dark hover:scale-105"
            >
              {t.about.joinBtn}
            </a>
          </div>
        </div>
      </Section>

      {/* 8. WOMEN4AIS - ID MANDATORY */}
      <Section id="women4ais" className="bg-transparent flex justify-center scroll-mt-32">
        <div className="max-w-[760px] w-full bg-white dark:bg-[#1a1a19] p-10 md:p-16 rounded-[32px] shadow-anthro-card border border-anthropic-midGray/10 text-center transition-all duration-500 hover:border-anthropic-orange/30 group">
          <div className="w-16 h-16 bg-anthropic-orange/10 rounded-full flex items-center justify-center mx-auto mb-10 text-anthropic-orange">
             <Globe size={32} />
          </div>
          <h2 className="mb-8 font-bold text-3xl md:text-4xl tracking-tight">{t.women4ais.title}</h2>
          <p className="text-xl md:text-2xl text-anthropic-dark/80 dark:text-anthropic-beige/80 font-serif leading-relaxed mb-14 italic text-balance">
            {t.women4ais.text}
          </p>
          <div className="flex flex-wrap items-center justify-center gap-6">
            <a 
              href="https://www.instagram.com/womenaisafety" 
              target="_blank" 
              rel="noopener noreferrer"
              className="px-8 py-4 rounded-[12px] border-2 border-anthropic-orange/30 dark:border-anthropic-orangeLight/30 text-anthropic-orange dark:text-anthropic-orangeLight font-sans font-black text-base flex items-center gap-3 transition-all hover:bg-anthropic-orange dark:hover:bg-anthropic-orangeLight hover:text-white dark:hover:text-anthropic-dark hover:scale-105 shadow-sm"
            >
              <Instagram size={20} /> Instagram
            </a>
            <a 
              href="https://www.linkedin.com/company/women4ais" 
              target="_blank" 
              rel="noopener noreferrer"
              className="px-8 py-4 rounded-[12px] border-2 border-anthropic-orange/30 dark:border-anthropic-orangeLight/30 text-anthropic-orange dark:text-anthropic-orangeLight font-sans font-black text-base flex items-center gap-3 transition-all hover:bg-anthropic-orange dark:hover:bg-anthropic-orangeLight hover:text-white dark:hover:text-anthropic-dark hover:scale-105 shadow-sm"
            >
              <Linkedin size={20} /> LinkedIn
            </a>
          </div>
        </div>
      </Section>

      {/* 9. NEWSLETTER - ID MANDATORY */}
      <Section id="newsletter" className="bg-anthropic-dark dark:bg-black/40 text-anthropic-beige py-40 scroll-mt-32">
        <div className="max-w-4xl mx-auto text-center px-4">
          <div className="inline-flex p-4 bg-anthropic-orange/20 rounded-2xl mb-12">
            <Mail size={48} className="text-anthropic-orange" />
          </div>
          <h2 className="mb-8 font-bold tracking-tighter text-white">{t.subscribe.title}</h2>
          <p className="text-2xl md:text-3xl text-anthropic-beige/70 mb-20 font-serif italic max-w-2xl mx-auto text-balance">{t.subscribe.subtitle}</p>

          <form 
            action="https://formsubmit.co/aisafetymadrid@proton.me" 
            method="POST" 
            className="max-w-xl mx-auto space-y-8 text-left"
          >
            <input type="hidden" name="_subject" value="Nueva suscripción - AI Safety España" />
            <input type="hidden" name="_captcha" value="false" />
            <input type="hidden" name="_template" value="table" />
            
            <div className="space-y-4">
              <label className="text-[0.7rem] font-sans font-black text-anthropic-orange uppercase tracking-[0.4em] block ml-1">{t.subscribe.name}</label>
              <input 
                type="text" 
                name="name"
                required 
                placeholder={lang === 'es' ? "Nombre" : "Name"}
                className="w-full px-8 py-5 rounded-2xl bg-white/5 border border-white/10 text-white focus:outline-none focus:ring-2 focus:ring-anthropic-orange/50 focus:border-transparent transition-all font-sans text-xl md:text-2xl placeholder:opacity-20"
              />
            </div>
            <div className="space-y-4">
              <label className="text-[0.7rem] font-sans font-black text-anthropic-orange uppercase tracking-[0.4em] block ml-1">{t.subscribe.email}</label>
              <input 
                type="email" 
                name="email"
                required 
                placeholder="Email"
                className="w-full px-8 py-5 rounded-2xl bg-white/5 border border-white/10 text-white focus:outline-none focus:ring-2 focus:ring-anthropic-orange/50 focus:border-transparent transition-all font-sans text-xl md:text-2xl placeholder:opacity-20"
              />
            </div>
            <button 
              type="submit" 
              className="w-full py-7 rounded-2xl bg-anthropic-orange text-white font-sans font-black text-xl md:text-2xl transition-all duration-300 shadow-[0_20px_40px_-10px_rgba(217,119,87,0.4)] hover:shadow-[0_30px_60px_-15px_rgba(217,119,87,0.6)] hover:-translate-y-1 active:scale-95 mt-6"
            >
              {t.subscribe.button}
            </button>
          </form>
        </div>
      </Section>

      {/* 10. FOOTER */}
      <footer className="bg-anthropic-dark text-anthropic-beige/40 py-32 px-8 border-t border-white/5 selection:bg-white/10 selection:text-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-24 mb-32 items-start">
            <div className="text-center md:text-left space-y-12">
              <div className="text-2xl md:text-3xl font-serif font-bold text-anthropic-beige flex items-center justify-center md:justify-start gap-4 group cursor-pointer">
                 <div className="w-10 h-10 bg-anthropic-orange rounded-xl flex items-center justify-center text-white group-hover:rotate-12 transition-transform">
                   <Globe size={24} />
                 </div>
                 IA Safety
              </div>
              <p className="max-w-xs mx-auto md:mx-0 font-serif italic text-xl md:text-2xl leading-relaxed opacity-80">
                {t.footer.tagline}
              </p>
              <div className="flex items-center justify-center md:justify-start gap-6">
                <a href="https://www.linkedin.com/in/osmani" target="_blank" rel="noopener noreferrer" className="w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center hover:bg-anthropic-orange hover:text-white transition-all duration-300 border border-white/5 hover:border-transparent" aria-label="LinkedIn">
                  <Linkedin size={24} />
                </a>
                <a href="https://www.instagram.com/womenaisafety" target="_blank" rel="noopener noreferrer" className="w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center hover:bg-anthropic-orange hover:text-white transition-all duration-300 border border-white/5 hover:border-transparent" aria-label="Instagram">
                  <Instagram size={24} />
                </a>
                <a href="https://substack.com/@osmaniredondo" target="_blank" rel="noopener noreferrer" className="w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center hover:bg-anthropic-orange hover:text-white transition-all duration-300 border border-white/5 hover:border-transparent" aria-label="Substack">
                  <Newspaper size={24} />
                </a>
              </div>
            </div>
            
            <div className="flex flex-col items-center md:items-start gap-8 font-sans">
              <h4 className="text-white font-black uppercase text-[0.65rem] tracking-[0.5em] mb-4 opacity-100">{lang === 'es' ? 'Explora' : 'Explore'}</h4>
              <a href="#hero" className="hover:text-anthropic-orange transition-colors text-xl font-medium">{t.nav.home}</a>
              <a href="#eventos" className="hover:text-anthropic-orange transition-colors text-xl font-medium">{t.nav.events}</a>
              <a href="#sobre" className="hover:text-anthropic-orange transition-colors text-xl font-medium">{t.nav.about}</a>
              <a href="#newsletter" className="hover:text-anthropic-orange transition-colors text-xl font-medium">{t.nav.contact}</a>
            </div>

            <div className="text-center md:text-right flex flex-col items-center md:items-end gap-10 font-sans">
              <h4 className="text-white font-black uppercase text-[0.65rem] tracking-[0.5em] mb-4 opacity-100">{lang === 'es' ? 'Comunidad' : 'Community'}</h4>
              <p className="text-xl md:text-2xl max-w-[320px] leading-relaxed opacity-60 font-serif italic">Conectamos el talento local con el debate global sobre seguridad de la IA.</p>
              <div className="h-px w-24 bg-anthropic-orange/40 my-4"></div>
              <p className="text-[0.7rem] opacity-30 tracking-[0.3em] font-black uppercase">&copy; {t.footer.copyright}</p>
            </div>
          </div>
          
          <div className="pt-20 border-t border-white/5 text-center">
             <p className="text-[0.6rem] md:text-[0.7rem] font-sans tracking-[0.6em] uppercase opacity-20 font-black">Built for a human-aligned future.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
