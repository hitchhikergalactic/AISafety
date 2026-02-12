
import React, { useState, useEffect } from 'react';
import { translations } from './translations';
import { 
  BookOpen, 
  Calendar, 
  Users, 
  ExternalLink, 
  CheckCircle, 
  Globe,
  ArrowRight,
  Menu,
  X,
  Linkedin,
  Instagram,
  Newspaper,
  Sun,
  Moon
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
    { href: "#home", label: t.nav.home },
    { href: "#why", label: t.nav.mission },
    { href: "#events", label: t.nav.events },
    { href: "#about", label: t.nav.about },
    { href: "#contact", label: t.nav.contact },
  ];

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-[#F6EDE5]/90 dark:bg-[#1a1a1a]/90 backdrop-blur-md shadow-sm py-3' : 'bg-transparent py-5'}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center relative">
        {/* Logo */}
        <a href="#home" className="text-xl font-bold text-primary dark:text-primary-dark flex items-center gap-2 shrink-0 group">
          <div className="w-8 h-8 bg-primary dark:bg-primary-dark rounded-lg flex items-center justify-center text-[#F6EDE5] group-hover:scale-110 transition-transform">
            <Globe size={20} />
          </div>
          <span className="hidden sm:inline">AI Safety Madrid</span>
        </a>

        {/* Desktop Nav - Centered */}
        <div className="hidden lg:flex items-center gap-8 absolute left-1/2 -translate-x-1/2">
          {navLinks.map(link => (
            <a key={link.href} href={link.href} className="text-[#2C3E50] dark:text-[#e5e7eb] hover:text-primary dark:hover:text-primary-dark font-medium transition-colors">
              {link.label}
            </a>
          ))}
        </div>

        {/* Right Side - Toggles */}
        <div className="flex items-center gap-3 sm:gap-4">
          {/* Theme Toggle */}
          <button 
            onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
            className="p-2 rounded-full bg-white/50 dark:bg-white/5 border border-slate-200 dark:border-slate-800 text-[#2C3E50] dark:text-[#e5e7eb] hover:text-primary dark:hover:text-primary-dark transition-all"
            aria-label="Toggle Theme"
          >
            {theme === 'light' ? <Moon size={18} /> : <Sun size={18} />}
          </button>

          {/* Language Toggle */}
          <button 
            onClick={() => setLang(lang === 'es' ? 'en' : 'es')}
            className="px-3 py-1 rounded-full bg-white/50 dark:bg-white/5 border border-slate-200 dark:border-slate-800 text-[#2C3E50] dark:text-[#e5e7eb] hover:border-primary dark:hover:border-primary-dark hover:text-primary dark:hover:text-primary-dark transition-all uppercase text-sm font-bold min-w-[45px]"
          >
            {lang === 'es' ? 'EN' : 'ES'}
          </button>

          {/* Mobile Menu Toggle */}
          <button onClick={() => setIsOpen(!isOpen)} className="lg:hidden text-[#2C3E50] dark:text-[#e5e7eb] p-1">
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden absolute top-full left-0 w-full bg-[#F6EDE5] dark:bg-[#1a1a1a] border-t border-slate-200 dark:border-slate-800 py-6 px-6 flex flex-col gap-4 shadow-xl">
          {navLinks.map(link => (
            <a key={link.href} href={link.href} onClick={() => setIsOpen(false)} className="text-xl font-medium text-[#2C3E50] dark:text-[#e5e7eb]">
              {link.label}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
};

// --- Fix for Section component redeclaration and syntax errors on lines 111-120 ---
const Section: React.FC<{ 
  id: string, 
  className?: string, 
  children: React.ReactNode 
}> = ({ id, className = "", children }) => (
  <section id={id} className={`py-20 md:py-32 px-6 scroll-mt-navbar ${className}`}>
    <div className="max-w-5xl mx-auto">
      {children}
    </div>
  </section>
);

const PillarCard: React.FC<{ icon: React.ReactNode, title: string, text: string }> = ({ icon, title, text }) => (
  <div className="bg-white dark:bg-[#2d2d2d] p-8 rounded-2xl border border-slate-100 dark:border-slate-800 shadow-sm hover:shadow-md hover:border-primary/30 dark:hover:border-primary-dark/30 transition-all group">
    <div className="w-12 h-12 bg-accent/10 dark:bg-accent-dark/10 text-accent dark:text-accent-dark rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
      {icon}
    </div>
    <h3 className="text-2xl font-bold text-[#2C3E50] dark:text-white mb-3">{title}</h3>
    <p className="text-slate-600 dark:text-[#e5e7eb]/70 leading-relaxed">{text}</p>
  </div>
);

const CollaborativeLink: React.FC<{ href: string, text: string }> = ({ href, text }) => (
  <a 
    href={href} 
    target="_blank" 
    rel="noopener noreferrer"
    className="flex items-center justify-between p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-white/50 dark:bg-white/5 hover:bg-primary/10 dark:hover:bg-primary-dark/10 hover:border-primary dark:hover:border-primary-dark transition-all group"
  >
    <span className="font-medium text-[#2C3E50] dark:text-[#e5e7eb] group-hover:text-primary dark:group-hover:text-primary-dark">{text}</span>
    <ExternalLink size={18} className="text-slate-400 group-hover:text-primary dark:group-hover:text-primary-dark" />
  </a>
);

// --- Main App ---

export default function App() {
  const [lang, setLang] = useState<Language>(() => {
    const saved = localStorage.getItem('app_lang');
    return (saved as Language) || 'es';
  });

  const [theme, setTheme] = useState<Theme>(() => {
    const saved = localStorage.getItem('app_theme');
    if (saved === 'dark' || saved === 'light') return saved;
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  });
  
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

  // Handle automatic dismissal of success message
  useEffect(() => {
    let timer: number | undefined;
    if (subscribed) {
      timer = window.setTimeout(() => {
        setSubscribed(false);
      }, 5000);
    }
    return () => {
      if (timer) window.clearTimeout(timer);
    };
  }, [subscribed]);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    setSubscribed(true);
  };

  return (
    <div className="min-h-screen text-[#2C3E50] dark:text-[#e5e7eb] transition-colors duration-300">
      <Navbar lang={lang} setLang={setLang} theme={theme} setTheme={setTheme} t={t} />

      {/* HERO SECTION */}
      <section id="home" className="min-h-[90vh] flex items-center justify-center pt-20 px-6 bg-gradient-to-b from-[#F6EDE5] to-white dark:from-[#1a1a1a] dark:to-[#13100e]">
        <div className="max-w-4xl text-center animate-fade-in-up">
          {/* Madrid Subtitle - Discrete tag above H1 */}
          <span className="block text-[0.9rem] uppercase tracking-[0.3em] text-accent dark:text-accent-dark font-bold mb-3 opacity-80">
            Madrid
          </span>
          <h1 className="text-5xl md:text-7xl font-extrabold text-[#2C3E50] dark:text-white mb-8 leading-[1.1]">
            {t.hero.h1}
          </h1>
          <p className="text-xl md:text-2xl text-slate-600 dark:text-[#e5e7eb]/80 mb-10 max-w-2xl mx-auto leading-relaxed font-light">
            {t.hero.h2}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#events" className="px-8 py-4 rounded-full bg-primary dark:bg-primary-dark text-white font-bold text-lg hover:brightness-110 transition-all shadow-lg shadow-primary/20 dark:shadow-primary-dark/20 flex items-center justify-center gap-2">
              {t.hero.ctaPrimary}
              <ArrowRight size={20} />
            </a>
            <a href="#contact" className="px-8 py-4 rounded-full border-2 border-accent dark:border-accent-dark text-accent dark:text-accent-dark font-bold text-lg hover:bg-accent hover:text-white dark:hover:bg-accent-dark dark:hover:text-[#1a1a1a] transition-all flex items-center justify-center">
              {t.hero.ctaSecondary}
            </a>
          </div>
        </div>
      </section>

      {/* WHY SECTION */}
      <Section id="why" className="bg-white dark:bg-[#13100e]">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-[#2C3E50] dark:text-white mb-8">
              {t.why.title}
            </h2>
            <div className="space-y-6 text-lg text-slate-600 dark:text-[#e5e7eb]/70 leading-relaxed">
              <p>{t.why.p1}</p>
              <p>{t.why.p2}</p>
              <p>{t.why.p3}</p>
            </div>
          </div>
          <div className="relative">
            <div className="aspect-square bg-[#F6EDE5] dark:bg-[#2d2d2d] rounded-3xl overflow-hidden shadow-inner flex items-center justify-center border border-slate-100 dark:border-slate-800">
               <Globe size={180} className="text-primary/20 dark:text-primary-dark/10" strokeWidth={1} />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-primary dark:bg-primary-dark p-8 rounded-2xl shadow-xl hidden lg:block max-w-[200px]">
              <p className="font-bold text-lg leading-tight text-white dark:text-[#1a1a1a]">Comunidad local con visión global.</p>
            </div>
          </div>
        </div>
      </Section>

      {/* MISSION STRIP */}
      <section className="bg-accent dark:bg-accent-dark py-20 text-center px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-primary dark:text-[#1a1a1a] text-sm font-black uppercase tracking-[0.2em] mb-6">{t.mission.title}</h2>
          <p className="text-2xl md:text-4xl font-medium text-[#F6EDE5] dark:text-[#1a1a1a] leading-snug">
            "{t.mission.text}"
          </p>
        </div>
      </section>

      {/* PILLARS SECTION */}
      <Section id="pillars" className="dark:bg-[#13100e]">
        <h2 className="text-3xl md:text-4xl font-bold text-[#2C3E50] dark:text-white mb-16 text-center">
          {t.pillars.title}
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          <PillarCard 
            icon={<BookOpen size={24} />}
            title={t.pillars.education.title}
            text={t.pillars.education.text}
          />
          <PillarCard 
            icon={<Calendar size={24} />}
            title={t.pillars.events.title}
            text={t.pillars.events.text}
          />
          <PillarCard 
            icon={<Users size={24} />}
            title={t.pillars.community.title}
            text={t.pillars.community.text}
          />
        </div>
      </Section>

      {/* EVENTS SECTION */}
      <Section id="events" className="bg-[#F6EDE5] dark:bg-[#1a1a1a]">
        <div className="bg-white dark:bg-[#2d2d2d] p-10 md:p-16 rounded-[2rem] border-2 border-primary/20 dark:border-primary-dark/10 shadow-xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-primary dark:bg-primary-dark rounded-bl-full -mr-10 -mt-10 opacity-10"></div>
          
          <h2 className="text-3xl md:text-4xl font-bold text-[#2C3E50] dark:text-white mb-10">
            {t.upcoming.title}
          </h2>
          <div className="flex flex-col md:flex-row gap-12 items-center">
            <div className="flex-1">
              <div className="mb-8">
                <span className="text-primary dark:text-primary-dark font-bold text-lg block mb-2">Featured Event</span>
                <h3 className="text-3xl font-bold mb-4 dark:text-white">{t.upcoming.placeholder}</h3>
                <p className="text-xl text-slate-600 dark:text-[#e5e7eb]/70 mb-6">{t.upcoming.details}</p>
              </div>
              <a href="#contact" className="inline-block px-10 py-5 rounded-full bg-primary dark:bg-primary-dark text-white dark:text-[#1a1a1a] font-bold text-xl hover:brightness-110 transition-all shadow-lg shadow-primary/20">
                {t.upcoming.cta}
              </a>
            </div>
            <div className="w-full md:w-1/3 aspect-video md:aspect-square bg-[#F6EDE5] dark:bg-[#1a1a1a] rounded-2xl flex items-center justify-center text-primary/30 italic border-2 border-dashed border-primary/20">
              Poster Evento
            </div>
          </div>
        </div>
      </Section>

      {/* NETWORK SECTION */}
      <Section id="network" className="dark:bg-[#13100e]">
        <h2 className="text-3xl font-bold text-[#2C3E50] dark:text-white mb-12 text-center">{t.collaborators.title}</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <CollaborativeLink href="https://riesgosia.org/es/" text="Riesgos IA" />
          <CollaborativeLink href="https://www.enais.co/" text="ENAIS" />
          <CollaborativeLink href="https://bluedot.org/recursos" text="BlueDot" />
          <CollaborativeLink href="https://www.aisafety.com/" text="AI Safety (.com)" />
          <CollaborativeLink href="https://www.aisafetybcn.org/" text="AI Safety Barcelona" />
        </div>
      </Section>

      {/* ABOUT SECTION */}
      <Section id="about" className="bg-white dark:bg-[#1a1a1a]">
        <div className="grid md:grid-cols-3 gap-12 items-start">
          <div className="text-center">
            <div className="w-48 h-48 mx-auto rounded-full border-4 border-primary dark:border-primary-dark flex items-center justify-center bg-[#F6EDE5] dark:bg-[#2d2d2d] text-slate-400 font-bold mb-6 overflow-hidden shadow-lg">
              <Users size={64} className="opacity-20" />
            </div>
            <a href="#" className="text-primary dark:text-primary-dark font-bold hover:underline transition-colors">{t.about.linkPlaceholder}</a>
          </div>
          <div className="md:col-span-2">
            <h2 className="text-3xl font-bold text-[#2C3E50] dark:text-white mb-6">{t.about.title}</h2>
            <p className="text-lg text-slate-600 dark:text-[#e5e7eb]/70 leading-relaxed mb-8 italic">
              {t.about.text}
            </p>
            
            <div className="bg-[#F6EDE5] dark:bg-[#2d2d2d] p-8 rounded-2xl border-l-4 border-primary dark:border-primary-dark mb-8">
              <p className="text-xl font-medium text-[#2C3E50] dark:text-[#e5e7eb] italic">
                {t.about.testimonial}
              </p>
            </div>

            <div className="flex items-center gap-6">
              <p className="font-bold text-[#2C3E50] dark:text-[#e5e7eb]">{t.about.joinCta}</p>
              <a href="#contact" className="px-6 py-2 rounded-full border-2 border-accent dark:border-accent-dark text-accent dark:text-accent-dark font-bold hover:bg-accent hover:text-white dark:hover:bg-accent-dark dark:hover:text-[#1a1a1a] transition-all">
                {t.about.joinBtn}
              </a>
            </div>
          </div>
        </div>
      </Section>

      {/* CONTACT / SUBSCRIBE SECTION */}
      <Section id="contact" className="bg-[#F6EDE5] dark:bg-[#13100e]">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-[#2C3E50] dark:text-white mb-4">{t.subscribe.title}</h2>
          <p className="text-lg text-slate-600 dark:text-[#e5e7eb]/70 mb-10">{t.subscribe.subtitle}</p>

          {subscribed ? (
            <div className="bg-white dark:bg-[#2d2d2d] p-8 rounded-3xl shadow-sm border-2 border-primary dark:border-primary-dark flex items-center justify-center gap-4 animate-fade-in-up">
              <CheckCircle className="text-primary dark:text-primary-dark" size={32} />
              <p className="text-xl font-bold text-primary dark:text-primary-dark">{t.subscribe.success}</p>
            </div>
          ) : (
            <form onSubmit={handleSubscribe} className="bg-white dark:bg-[#2d2d2d] p-8 md:p-12 rounded-[2.5rem] shadow-xl space-y-4">
              <div className="flex flex-col text-left gap-2">
                <label className="text-sm font-bold text-slate-500 dark:text-[#e5e7eb]/50 ml-2 uppercase tracking-wide">{t.subscribe.name}</label>
                <input 
                  type="text" 
                  required 
                  placeholder="Tu nombre"
                  className="w-full px-6 py-4 rounded-2xl bg-slate-50 dark:bg-[#1a1a1a] border border-slate-200 dark:border-slate-800 text-[#2C3E50] dark:text-white focus:outline-none focus:ring-2 focus:ring-primary/30 dark:focus:ring-primary-dark/30 focus:border-primary dark:focus:border-primary-dark transition-all placeholder:text-slate-400 dark:placeholder:text-slate-600"
                />
              </div>
              <div className="flex flex-col text-left gap-2">
                <label className="text-sm font-bold text-slate-500 dark:text-[#e5e7eb]/50 ml-2 uppercase tracking-wide">{t.subscribe.email}</label>
                <input 
                  type="email" 
                  required 
                  placeholder="hola@ejemplo.com"
                  className="w-full px-6 py-4 rounded-2xl bg-slate-50 dark:bg-[#1a1a1a] border border-slate-200 dark:border-slate-800 text-[#2C3E50] dark:text-white focus:outline-none focus:ring-2 focus:ring-primary/30 dark:focus:ring-primary-dark/30 focus:border-primary dark:focus:border-primary-dark transition-all placeholder:text-slate-400 dark:placeholder:text-slate-600"
                />
              </div>
              <button 
                type="submit" 
                className="w-full py-5 rounded-2xl bg-primary dark:bg-primary-dark text-white dark:text-[#1a1a1a] font-bold text-xl hover:brightness-110 transition-all shadow-lg shadow-primary/20 mt-4"
              >
                {t.subscribe.button}
              </button>
            </form>
          )}
        </div>
      </Section>

      {/* FOOTER */}
      <footer className="bg-slate-950 text-slate-400 py-20 px-6 border-t border-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16 items-start">
            {/* Brand, Tagline and Socials */}
            <div className="text-center md:text-left space-y-6">
              <div className="text-2xl font-bold text-white flex items-center justify-center md:justify-start gap-2 group">
                 <Globe size={24} className="text-primary dark:text-primary-dark group-hover:rotate-12 transition-transform" />
                 AI Safety Madrid
              </div>
              <p className="text-slate-400 max-w-xs mx-auto md:mx-0">
                {t.footer.tagline}
              </p>
              <div className="flex items-center justify-center md:justify-start gap-4">
                <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-primary hover:text-white transition-all text-slate-400" aria-label="LinkedIn">
                  <Linkedin size={18} />
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-primary hover:text-white transition-all text-slate-400" aria-label="Instagram">
                  <Instagram size={18} />
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-primary hover:text-white transition-all text-slate-400" aria-label="Substack">
                  <Newspaper size={18} />
                </a>
              </div>
            </div>
            
            {/* Quick Links */}
            <div className="flex flex-col items-center md:items-start gap-4">
              <h4 className="text-white font-bold mb-2 uppercase text-sm tracking-widest">Links</h4>
              <a href="#home" className="hover:text-primary transition-colors">{t.nav.home}</a>
              <a href="#events" className="hover:text-primary transition-colors">{t.nav.events}</a>
              <a href="#contact" className="hover:text-primary transition-colors">{t.nav.contact}</a>
            </div>

            {/* Copyright / Info */}
            <div className="text-center md:text-right flex flex-col items-center md:items-end gap-4">
              <h4 className="text-white font-bold mb-2 uppercase text-sm tracking-widest">Comunidad</h4>
              <p className="text-sm max-w-[200px]">Red local enfocada en la seguridad de la IA.</p>
              <div className="h-px w-20 bg-slate-800 my-2"></div>
              <p className="text-xs text-slate-500">&copy; {t.footer.copyright}</p>
            </div>
          </div>
          
          <div className="pt-8 border-t border-white/5 text-center">
             <p className="text-xs text-slate-600">Built with care for the human future.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
