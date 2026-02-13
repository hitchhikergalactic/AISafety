
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
    { href: "#contact", label: t.nav.contact },
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
  id: string, 
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
  text: string, 
  extraLink?: { text: string, href: string } 
}> = ({ icon, title, text, extraLink }) => (
  <div className="bg-anthropic-lightGray/40 dark:bg-white/5 p-12 rounded-anthro border border-anthropic-midGray/15 shadow-anthro-subtle flex flex-col h-full transition-all hover:border-anthropic-midGray/30">
    <div className="w-16 h-16 bg-anthropic-blue/10 dark:bg-anthropic-blueLight/10 text-anthropic-blue dark:text-anthropic-blueLight rounded-anthro flex items-center justify-center mb-8">
      {icon}
    </div>
    <h3 className="mb-6 text-3xl md:text-4xl tracking-tight">{title}</h3>
    <p className="text-anthropic-dark/90 dark:text-anthropic-beige/90 mb-8 flex-grow leading-relaxed text-2xl font-serif italic">{text}</p>
    {extraLink && (
      <a 
        href={extraLink.href} 
        target="_blank" 
        rel="noopener noreferrer"
        className="inline-flex items-center gap-3 text-anthropic-orange dark:text-anthropic-orangeLight font-sans font-bold text-lg uppercase tracking-widest hover:underline transition-all"
      >
        <Instagram size={20} />
        {extraLink.text}
      </a>
    )}
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

      {/* HERO SECTION */}
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
            <a href="#contact" className="px-12 py-5 rounded-anthro border-2 border-anthropic-blue dark:border-anthropic-blueLight text-anthropic-blue dark:text-anthropic-blueLight font-sans font-bold text-xl hover:bg-anthropic-blue/5 dark:hover:bg-anthropic-blueLight/5 transition-all flex items-center justify-center anthro-hover">
              {t.hero.ctaSecondary}
            </a>
          </div>
        </div>
      </section>

      {/* WHY SECTION - CONDENSED TO 1 PARAGRAPH */}
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

      {/* MISSION STRIP */}
      <section className="bg-transparent py-40 text-center px-8">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-anthropic-green dark:text-anthropic-greenLight text-sm font-sans font-black uppercase tracking-[0.35em] mb-12">
            {t.mission.title}
          </h2>
          <p className="text-3xl md:text-[3.5rem] font-serif italic text-anthropic-dark dark:text-anthropic-beige leading-tight">
            "{t.mission.text}"
          </p>
        </div>
      </section>

      {/* PILLARS SECTION - "El Hub en Acción" */}
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
            extraLink={{ text: t.pillars.community.extraLink, href: "https://www.instagram.com/womenaisafety" }}
          />
        </div>
      </Section>

      {/* EVENTS SECTION */}
      <Section id="events" className="bg-anthropic-lightGray/25 dark:bg-white/5 border-y border-anthropic-midGray/10">
        <div className="bg-anthropic-beige dark:bg-anthropic-dark p-14 md:p-24 rounded-anthro border border-anthropic-midGray/20 shadow-anthro-subtle relative overflow-hidden">
          <div className="absolute top-0 right-0 w-80 h-80 bg-anthropic-orange dark:bg-anthropic-orangeLight rounded-bl-full -mr-40 -mt-40 opacity-5"></div>
          
          <h2 className="mb-16 font-bold">{t.upcoming.title}</h2>
          <div className="flex flex-col lg:flex-row gap-20 items-center">
            <div className="flex-1">
              <div className="mb-14">
                <span className="text-anthropic-orange dark:text-anthropic-orangeLight font-sans font-bold text-sm uppercase tracking-widest block mb-6">Próximamente</span>
                <h3 className="text-5xl md:text-6xl mb-8 font-bold">{t.upcoming.placeholder}</h3>
                <p className="text-3xl text-anthropic-dark/80 dark:text-anthropic-beige/80 font-serif italic leading-relaxed">{t.upcoming.details}</p>
              </div>
              <a href="#contact" className="inline-block px-14 py-6 rounded-anthro bg-anthropic-orange dark:bg-anthropic-orangeLight text-anthropic-beige dark:text-anthropic-dark font-sans font-bold text-2xl hover:opacity-90 transition-all shadow-anthro-subtle">
                {t.upcoming.cta}
              </a>
            </div>
            <div className="w-full lg:w-1/3 aspect-[4/5] bg-anthropic-lightGray/40 dark:bg-white/5 rounded-anthro border border-dashed border-anthropic-midGray/30 flex items-center justify-center text-anthropic-midGray font-sans italic p-10 text-center text-2xl">
              Event Image Placeholder
            </div>
          </div>
        </div>
      </Section>

      {/* NETWORK SECTION */}
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

      {/* ABOUT SECTION */}
      <Section id="about" className="bg-anthropic-lightGray/25 dark:bg-white/5 border-y border-anthropic-midGray/10">
        <div className="grid lg:grid-cols-3 gap-20 items-start">
          <div className="text-center">
            <div className="w-64 h-64 mx-auto rounded-anthro border border-anthropic-midGray/15 flex items-center justify-center bg-white dark:bg-anthropic-dark text-anthropic-midGray shadow-anthro-subtle overflow-hidden mb-10 transition-transform hover:scale-[1.02]">
              <Users size={96} className="opacity-10" />
            </div>
            <a href="#" className="text-anthropic-orange dark:text-anthropic-orangeLight font-sans font-bold hover:underline transition-colors tracking-tight text-lg uppercase">{t.about.linkPlaceholder}</a>
          </div>
          <div className="lg:col-span-2">
            <h2 className="mb-10 font-bold">{t.about.title}</h2>
            <p className="text-2xl text-anthropic-dark/90 dark:text-anthropic-beige/90 leading-relaxed mb-16 font-serif italic">
              {t.about.text}
            </p>
            
            <div className="bg-white/50 dark:bg-anthropic-dark p-12 rounded-anthro border-l-4 border-anthropic-orange dark:border-anthropic-orangeLight mb-16 shadow-anthro-subtle">
              <p className="text-3xl md:text-4xl font-serif italic text-anthropic-dark dark:text-anthropic-beige leading-snug">
                {t.about.testimonial}
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-10">
              <p className="font-sans font-bold text-2xl">{t.about.joinCta}</p>
              <a href="#contact" className="px-12 py-5 rounded-anthro border-2 border-anthropic-green dark:border-anthropic-greenLight text-anthropic-green dark:text-anthropic-greenLight font-sans font-bold hover:bg-anthropic-green hover:text-white dark:hover:bg-anthropic-greenLight dark:hover:text-anthropic-dark transition-all text-center text-2xl">
                {t.about.joinBtn}
              </a>
            </div>
          </div>
        </div>
      </Section>

      {/* SUBSCRIBE SECTION */}
      <Section id="contact">
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

      {/* FOOTER */}
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
                <a href="#" className="w-14 h-14 rounded-full bg-white/5 flex items-center justify-center hover:bg-anthropic-orange hover:text-anthropic-beige transition-all border border-white/10" aria-label="LinkedIn">
                  <Linkedin size={24} />
                </a>
                <a href="#" className="w-14 h-14 rounded-full bg-white/5 flex items-center justify-center hover:bg-anthropic-orange hover:text-anthropic-beige transition-all border border-white/10" aria-label="Instagram">
                  <Instagram size={24} />
                </a>
                <a href="#" className="w-14 h-14 rounded-full bg-white/5 flex items-center justify-center hover:bg-anthropic-orange hover:text-anthropic-beige transition-all border border-white/10" aria-label="Substack">
                  <Newspaper size={24} />
                </a>
              </div>
            </div>
            
            <div className="flex flex-col items-center md:items-start gap-8 font-sans">
              <h4 className="text-anthropic-beige font-bold uppercase text-xs tracking-[0.45em] mb-6 opacity-85">Explora</h4>
              <a href="#home" className="hover:text-anthropic-orange transition-colors text-xl">{t.nav.home}</a>
              <a href="#events" className="hover:text-anthropic-orange transition-colors text-xl">{t.nav.events}</a>
              <a href="#contact" className="hover:text-anthropic-orange transition-colors text-xl">{t.nav.contact}</a>
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
