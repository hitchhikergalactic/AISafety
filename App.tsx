
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
  CheckCircle
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
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: "#home", label: t.nav.home },
    { href: "#why", label: t.nav.mission },
    { href: "#events", label: t.nav.events },
    { href: "#about", label: t.nav.about },
    { href: "#newsletter", label: t.nav.contact },
  ];

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-anthropic-beige/95 dark:bg-anthropic-dark/95 backdrop-blur-xl border-b border-anthropic-midGray/20 py-4' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-8 flex justify-between items-center relative">
        <a href="#home" className="text-2xl font-serif font-bold text-anthropic-dark dark:text-anthropic-beige flex items-center gap-3 shrink-0 group transition-all">
          <div className="w-10 h-10 bg-anthropic-orange dark:bg-anthropic-orangeLight rounded-anthro flex items-center justify-center text-anthropic-beige group-hover:opacity-90">
            <Globe size={22} />
          </div>
          <span className="tracking-tight hidden sm:inline">IA Safety Madrid</span>
        </a>

        <div className="hidden lg:flex items-center gap-10 absolute left-1/2 -translate-x-1/2 font-sans font-medium text-sm uppercase tracking-[0.15em]">
          {navLinks.map(link => (
            <a key={link.href} href={link.href} className="text-anthropic-dark dark:text-anthropic-beige hover:text-anthropic-orange dark:hover:text-anthropic-orangeLight transition-colors">
              {link.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-4">
          <button 
            onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
            className="p-2.5 rounded-full border border-anthropic-midGray/30 text-anthropic-dark dark:text-anthropic-beige hover:bg-anthropic-lightGray/50 dark:hover:bg-white/5 transition-all"
            aria-label="Toggle Theme"
          >
            {theme === 'light' ? <Moon size={18} /> : <Sun size={18} />}
          </button>

          <button 
            onClick={() => setLang(lang === 'es' ? 'en' : 'es')}
            className="px-4 py-1.5 rounded-anthro border border-anthropic-midGray/30 text-anthropic-dark dark:text-anthropic-beige hover:text-anthropic-orange font-sans font-bold text-xs uppercase tracking-widest transition-colors"
          >
            {lang === 'es' ? 'EN' : 'ES'}
          </button>

          <button onClick={() => setIsOpen(!isOpen)} className="lg:hidden text-anthropic-dark dark:text-anthropic-beige">
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="lg:hidden absolute top-full left-0 w-full bg-anthropic-beige dark:bg-anthropic-dark border-t border-anthropic-midGray/10 py-12 px-8 flex flex-col gap-6 shadow-2xl animate-fade-in-up">
          {navLinks.map(link => (
            <a key={link.href} href={link.href} onClick={() => setIsOpen(false)} className="text-3xl font-sans font-bold text-anthropic-dark dark:text-anthropic-beige">
              {link.label}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
};

const Section: React.FC<{ 
  id?: string, 
  className?: string, 
  children: React.ReactNode 
}> = ({ id, className = "", children }) => (
  <section id={id} className={`py-24 md:py-40 px-8 scroll-mt-navbar ${className}`}>
    <div className="max-w-6xl mx-auto">
      {children}
    </div>
  </section>
);

const PillarCard: React.FC<{ 
  icon: React.ReactNode, 
  title: string, 
  text: string 
}> = ({ icon, title, text }) => (
  <div className="bg-anthropic-lightGray/40 dark:bg-white/5 p-12 rounded-anthro border border-anthropic-midGray/15 shadow-anthro-subtle flex flex-col h-full transition-all hover:border-anthropic-midGray/30">
    <div className="w-16 h-16 bg-anthropic-blue/10 dark:bg-anthropic-blueLight/10 text-anthropic-blue dark:text-anthropic-blueLight rounded-anthro flex items-center justify-center mb-8">
      {icon}
    </div>
    <h3 className="mb-6 text-3xl md:text-4xl tracking-tight font-bold">{title}</h3>
    <p className="text-anthropic-dark/90 dark:text-anthropic-beige/90 mb-8 flex-grow leading-relaxed text-2xl font-serif italic">{text}</p>
  </div>
);

const CollaborativeCard: React.FC<{ href: string, text: string }> = ({ href, text }) => (
  <a 
    href={href} 
    target="_blank" 
    rel="noopener noreferrer"
    className="block p-8 rounded-anthro border border-anthropic-midGray/20 bg-white/30 dark:bg-white/5 text-center transition-all hover:bg-anthropic-lightGray/60 dark:hover:bg-white/10 group shadow-anthro-subtle"
  >
    <span className="font-sans font-bold text-xl text-anthropic-dark dark:text-anthropic-beige group-hover:text-anthropic-orange dark:group-hover:text-anthropic-orangeLight transition-colors">
      {text}
    </span>
  </a>
);

export default function App() {
  const [lang, setLang] = useState<Language>(() => (localStorage.getItem('app_lang') as Language) || 'es');
  const [theme, setTheme] = useState<Theme>(() => (localStorage.getItem('app_theme') as Theme) || 'light');
  const [subscribed, setSubscribed] = useState(false);
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

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    setSubscribed(true);
  };

  return (
    <div className="min-h-screen transition-colors duration-500">
      <Navbar lang={lang} setLang={setLang} theme={theme} setTheme={setTheme} t={t} />

      {/* 1. HERO SECTION */}
      <section id="home" className="min-h-screen flex items-center justify-center pt-32 pb-24 px-8">
        <div className="max-w-6xl text-center animate-fade-in-up">
          <span className="block text-[1.2rem] font-sans font-medium uppercase tracking-[0.05em] text-anthropic-midGray mb-6">
            Madrid
          </span>
          <h1 className="text-[clamp(3.5rem,8vw,6.5rem)] font-bold leading-[1.05] mb-[2rem] tracking-tight">
            {t.hero.h1}
          </h1>
          <p className="text-[clamp(1.5rem,3.5vw,2.2rem)] font-serif font-normal leading-[1.4] text-anthropic-dark/90 dark:text-anthropic-beige/90 mb-[4rem] max-w-[1000px] mx-auto italic">
            {t.hero.h2}
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <a href="#events" className="px-12 py-5 rounded-anthro bg-anthropic-orange dark:bg-anthropic-orangeLight text-anthropic-beige dark:text-anthropic-dark font-sans font-bold text-xl hover:opacity-90 transition-all shadow-anthro-subtle flex items-center justify-center gap-3 anthro-hover">
              {t.hero.ctaPrimary}
              <ArrowRight size={24} />
            </a>
            <a href="#newsletter" className="px-12 py-5 rounded-anthro border-2 border-anthropic-blue dark:border-anthropic-blueLight text-anthropic-blue dark:text-anthropic-blueLight font-sans font-bold text-xl hover:bg-anthropic-blue/5 dark:hover:bg-anthropic-blueLight/5 transition-all flex items-center justify-center anthro-hover">
              {t.hero.ctaSecondary}
            </a>
          </div>
        </div>
      </section>

      {/* 2. ¿POR QUÉ UN HUB DE SEGURIDAD EN IA? */}
      <Section id="why" className="bg-anthropic-lightGray/25 dark:bg-white/5 border-y border-anthropic-midGray/10">
        <div className="grid lg:grid-cols-2 gap-24 items-start">
          <div>
            <h2 className="mb-12 font-bold">{t.why.title}</h2>
            <div className="text-[clamp(1.5rem,4vw,2.2rem)] text-anthropic-dark/90 dark:text-anthropic-beige/90 font-serif leading-relaxed max-w-[800px]">
              <p className="italic">"{t.why.text}"</p>
            </div>
          </div>
          <div className="relative sticky top-32">
            <div className="aspect-[4/3] bg-white/40 dark:bg-white/5 rounded-anthro overflow-hidden flex items-center justify-center border border-anthropic-midGray/20 shadow-anthro-subtle">
               <Globe size={240} className="text-anthropic-orange/5 dark:text-anthropic-orangeLight/5" strokeWidth={0.2} />
            </div>
            <div className="absolute -bottom-10 -left-10 bg-anthropic-dark dark:bg-anthropic-beige p-12 rounded-anthro shadow-2xl hidden xl:block max-w-[340px] border border-white/10 dark:border-black/5">
              <p className="font-sans font-bold text-xl leading-tight text-anthropic-beige dark:text-anthropic-dark">
                Comunidad local con visión global.
              </p>
            </div>
          </div>
        </div>
      </Section>

      {/* 3. NUESTRA MISIÓN */}
      <section className="bg-transparent py-40 text-center px-8">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-anthropic-green dark:text-anthropic-greenLight text-sm font-sans font-black uppercase tracking-[0.35em] mb-12">
            {t.mission.title}
          </h2>
          <p className="text-3xl md:text-[3rem] font-serif italic text-anthropic-dark dark:text-anthropic-beige leading-tight">
            "{t.mission.text}"
          </p>
        </div>
      </section>

      {/* 4. EL HUB EN ACCIÓN */}
      <Section id="pillars">
        <h2 className="mb-24 text-center font-bold text-[clamp(2.5rem,6vw,4.5rem)]">{t.pillars.title}</h2>
        <div className="grid md:grid-cols-3 gap-12">
          <PillarCard 
            icon={<BookOpen size={36} />}
            title={t.pillars.education.title}
            text={t.pillars.education.text}
          />
          <PillarCard 
            icon={<Calendar size={36} />}
            title={t.pillars.events.title}
            text={t.pillars.events.text}
          />
          <PillarCard 
            icon={<Globe size={36} />}
            title={t.pillars.community.title}
            text={t.pillars.community.text}
          />
        </div>
      </Section>

      {/* 5. PRÓXIMOS EVENTOS (REDESIGNED) */}
      <Section id="events" className="bg-anthropic-lightGray/25 dark:bg-white/5 border-y border-anthropic-midGray/10">
        <div className="max-w-4xl mx-auto">
          <h2 className="mb-16 text-center font-bold">{t.upcoming.title}</h2>
          
          <div className="rounded-[16px] shadow-2xl overflow-hidden border border-anthropic-midGray/15 flex flex-col">
            {/* Header Image */}
            <img 
              src="https://i.imgur.com/Ym0layS.jpeg" 
              alt={t.upcoming.eventTitle} 
              className="w-full h-[400px] object-cover object-center block"
            />
            
            {/* Content Area with Gradient */}
            <div className={`p-10 md:p-16 text-white text-center flex flex-col items-center gap-8 ${theme === 'dark' ? 'bg-[linear-gradient(135deg,#e89074,#d97757)]' : 'bg-[linear-gradient(135deg,#d97757,#c86847)]'}`}>
              <h3 className="text-4xl md:text-5xl font-bold leading-tight max-w-2xl">{t.upcoming.eventTitle}</h3>
              
              <div className="space-y-4 font-sans font-bold text-lg md:text-xl uppercase tracking-wider opacity-95">
                <p>{t.upcoming.date}</p>
                <p>{t.upcoming.location}</p>
              </div>

              <p className="text-2xl font-serif italic leading-relaxed max-w-2xl opacity-90">
                "{t.upcoming.description}"
              </p>

              <a 
                href="#newsletter" 
                className="mt-4 px-12 py-5 rounded-[12px] bg-white text-anthropic-orange font-sans font-bold text-2xl hover:scale-[1.02] active:scale-[0.98] transition-all shadow-xl"
              >
                {t.upcoming.cta}
              </a>
            </div>
          </div>
        </div>
      </Section>

      {/* 6. RED DE COLABORADORES */}
      <Section id="network">
        <h2 className="mb-24 text-center font-bold">{t.collaborators.title}</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          <CollaborativeCard href="https://riesgosia.org/es/" text="Riesgos IA" />
          <CollaborativeCard href="https://www.enais.co/" text="ENAIS" />
          <CollaborativeCard href="https://bluedot.org/" text="BlueDot" />
          <CollaborativeCard href="https://www.aisafety.com/" text="AI Safety" />
          <CollaborativeCard href="https://www.aisafetybcn.org/" text="AI Safety Barcelona" />
          <CollaborativeCard href="https://safeaigermany.org/" text="Safe AI Germany" />
        </div>
      </Section>

      {/* 7. SOBRE ESTA INICIATIVA */}
      <Section id="about" className="bg-anthropic-lightGray/25 dark:bg-white/5 border-y border-anthropic-midGray/10 flex justify-center">
        <div className="max-w-[700px] w-full bg-white dark:bg-[#2A2A2A] p-12 md:p-16 rounded-[16px] shadow-anthro-subtle border border-anthropic-midGray/15 text-center transition-all hover:border-anthropic-midGray/30">
          
          {/* Foto circular arriba */}
          <img 
            src="https://i.imgur.com/Zgdo29Z.jpeg" 
            alt="Osmani Redondo" 
            className="w-[200px] h-[200px] rounded-full border-[4px] border-anthropic-orange dark:border-anthropic-orangeLight object-cover object-center mx-auto mb-6 block shadow-lg"
          />

          {/* Links discretos debajo de la foto */}
          <div className="mb-8 flex justify-center gap-4 text-anthropic-midGray font-sans text-[0.95rem] font-bold uppercase tracking-widest">
             <a href="https://www.linkedin.com/in/osmani" target="_blank" rel="noopener noreferrer" className="hover:underline no-underline transition-all">
               LinkedIn
             </a>
             <span className="opacity-30">/</span>
             <a href="https://substack.com/@osmaniredondo" target="_blank" rel="noopener noreferrer" className="hover:underline no-underline transition-all">
               Blog
             </a>
          </div>

          <h2 className="mb-10 font-bold text-4xl">{t.about.title}</h2>
          
          <div className="space-y-6 text-2xl text-anthropic-dark/90 dark:text-anthropic-beige/90 font-serif leading-relaxed italic mb-12">
            <p>{t.about.text1}</p>
            <p>{t.about.text2}</p>
          </div>

          <div className="flex flex-col items-center gap-6 pt-10 border-t border-anthropic-midGray/10">
            <p className="font-sans font-bold text-xl opacity-70">{t.about.joinCta}</p>
            <a 
              href="#newsletter" 
              className="px-8 py-3.2 rounded-[8px] border-2 border-anthropic-blue dark:border-anthropic-blueLight text-anthropic-blue dark:text-anthropic-blueLight font-sans font-bold text-xl hover:bg-anthropic-blue dark:hover:bg-anthropic-blueLight hover:text-white dark:hover:text-anthropic-dark transition-all"
            >
              {t.about.joinBtn}
            </a>
          </div>
        </div>
      </Section>

      {/* 8. FORMAMOS PARTE DE WOMEN4AIS */}
      <Section className="bg-transparent flex justify-center">
        <div className="max-w-[700px] w-full bg-white dark:bg-[#2A2A2A] p-12 md:p-16 rounded-[16px] shadow-anthro-subtle border border-anthropic-midGray/15 text-center transition-all hover:border-anthropic-midGray/30 animate-fade-in-up">
          <h2 className="mb-8 font-bold text-4xl">{t.women4ais.title}</h2>
          <p className="text-2xl text-anthropic-dark/90 dark:text-anthropic-beige/90 font-serif leading-relaxed mb-12 italic">
            {t.women4ais.text}
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <a 
              href="https://www.instagram.com/womenaisafety" 
              target="_blank" 
              rel="noopener noreferrer"
              className="px-6 py-3.5 rounded-[8px] border-2 border-anthropic-orange dark:border-anthropic-orangeLight text-anthropic-orange dark:text-anthropic-orangeLight font-sans font-bold text-lg flex items-center gap-3 transition-all hover:bg-anthropic-orange dark:hover:bg-anthropic-orangeLight hover:text-white dark:hover:text-anthropic-dark shadow-sm"
            >
              <span>📷</span> Instagram
            </a>
            <a 
              href="https://www.linkedin.com/company/women4ais" 
              target="_blank" 
              rel="noopener noreferrer"
              className="px-6 py-3.5 rounded-[8px] border-2 border-anthropic-orange dark:border-anthropic-orangeLight text-anthropic-orange dark:text-anthropic-orangeLight font-sans font-bold text-lg flex items-center gap-3 transition-all hover:bg-anthropic-orange dark:hover:bg-anthropic-orangeLight hover:text-white dark:hover:text-anthropic-dark shadow-sm"
            >
              <span>💼</span> LinkedIn
            </a>
          </div>
        </div>
      </Section>

      {/* 9. ÚNETE AL HUB (Newsletter) */}
      <Section id="newsletter">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="mb-8 font-bold">{t.subscribe.title}</h2>
          <p className="text-3xl text-anthropic-dark/80 dark:text-anthropic-beige/80 mb-20 font-serif italic">{t.subscribe.subtitle}</p>

          {subscribed ? (
            <div className="bg-anthropic-green/5 p-20 rounded-anthro border-2 border-anthropic-green/30 flex flex-col items-center justify-center gap-8 animate-fade-in-up">
              <CheckCircle className="text-anthropic-green" size={64} />
              <p className="text-4xl font-sans font-bold text-anthropic-green tracking-tight">{t.subscribe.success}</p>
            </div>
          ) : (
            <form onSubmit={handleSubscribe} className="bg-anthropic-lightGray/40 dark:bg-white/5 p-14 md:p-20 rounded-anthro border border-anthropic-midGray/15 shadow-anthro-subtle space-y-10 text-left">
              <div className="space-y-4">
                <label className="text-base font-sans font-bold text-anthropic-midGray uppercase tracking-[0.25em] block ml-2">{t.subscribe.name}</label>
                <input 
                  type="text" 
                  required 
                  placeholder="Tu nombre"
                  className="w-full px-8 py-6 rounded-anthro bg-white/60 dark:bg-anthropic-dark border border-anthropic-midGray/30 text-anthropic-dark dark:text-anthropic-beige focus:outline-none focus:ring-2 focus:ring-anthropic-orange/30 transition-all font-sans text-2xl placeholder:opacity-50"
                />
              </div>
              <div className="space-y-4">
                <label className="text-base font-sans font-bold text-anthropic-midGray uppercase tracking-[0.25em] block ml-2">{t.subscribe.email}</label>
                <input 
                  type="email" 
                  required 
                  placeholder="hola@ejemplo.com"
                  className="w-full px-8 py-6 rounded-anthro bg-white/60 dark:bg-anthropic-dark border border-anthropic-midGray/30 text-anthropic-dark dark:text-anthropic-beige focus:outline-none focus:ring-2 focus:ring-anthropic-orange/30 transition-all font-sans text-2xl placeholder:opacity-50"
                />
              </div>
              <button 
                type="submit" 
                className="w-full py-7 rounded-anthro bg-anthropic-orange dark:bg-anthropic-orangeLight text-anthropic-beige dark:text-anthropic-dark font-sans font-bold text-2xl hover:opacity-95 transition-all shadow-anthro-subtle mt-8 anthro-hover"
              >
                {t.subscribe.button}
              </button>
            </form>
          )}
        </div>
      </Section>

      {/* 10. FOOTER */}
      <footer className="bg-anthropic-dark text-anthropic-beige/60 py-32 px-8 border-t border-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-24 mb-24 items-start">
            <div className="text-center md:text-left space-y-10">
              <div className="text-3xl font-serif font-bold text-anthropic-beige flex items-center justify-center md:justify-start gap-5 group">
                 <Globe size={40} className="text-anthropic-orange" />
                 IA Safety Madrid
              </div>
              <p className="max-w-xs mx-auto md:mx-0 font-serif italic text-2xl leading-relaxed opacity-85">
                {t.footer.tagline}
              </p>
              <div className="flex items-center justify-center md:justify-start gap-8">
                <a href="https://www.linkedin.com/in/osmani" target="_blank" rel="noopener noreferrer" className="w-14 h-14 rounded-full bg-white/5 flex items-center justify-center hover:bg-anthropic-orange hover:text-anthropic-beige transition-all border border-white/10" aria-label="LinkedIn">
                  <Linkedin size={24} />
                </a>
                <a href="#" className="w-14 h-14 rounded-full bg-white/5 flex items-center justify-center hover:bg-anthropic-orange hover:text-anthropic-beige transition-all border border-white/10" aria-label="Instagram">
                  <Instagram size={24} />
                </a>
                <a href="https://substack.com/@osmaniredondo" target="_blank" rel="noopener noreferrer" className="w-14 h-14 rounded-full bg-white/5 flex items-center justify-center hover:bg-anthropic-orange hover:text-anthropic-beige transition-all border border-white/10" aria-label="Substack">
                  <Newspaper size={24} />
                </a>
              </div>
            </div>
            
            <div className="flex flex-col items-center md:items-start gap-8 font-sans">
              <h4 className="text-anthropic-beige font-bold uppercase text-xs tracking-[0.45em] mb-6 opacity-85">Explora</h4>
              <a href="#home" className="hover:text-anthropic-orange transition-colors text-xl">{t.nav.home}</a>
              <a href="#events" className="hover:text-anthropic-orange transition-colors text-xl">{t.nav.events}</a>
              <a href="#newsletter" className="hover:text-anthropic-orange transition-colors text-xl">{t.nav.contact}</a>
            </div>

            <div className="text-center md:text-right flex flex-col items-center md:items-end gap-8 font-sans">
              <h4 className="text-anthropic-beige font-bold uppercase text-xs tracking-[0.45em] mb-6 opacity-85">Comunidad</h4>
              <p className="text-xl max-w-[280px] leading-relaxed opacity-75 font-serif italic">Conectamos el talento local con el debate global sobre seguridad de la IA.</p>
              <div className="h-px w-28 bg-anthropic-orange/30 my-8"></div>
              <p className="text-xs opacity-45 tracking-widest font-bold uppercase">&copy; {t.footer.copyright}</p>
            </div>
          </div>
          
          <div className="pt-16 border-t border-white/5 text-center">
             <p className="text-xs font-sans tracking-[0.35em] uppercase opacity-25">Built for a human-aligned future.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
