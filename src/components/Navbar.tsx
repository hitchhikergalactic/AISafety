// src/components/Navbar.tsx
import React, { useState, useEffect } from 'react';
import { Moon, Sun, X, Menu, ArrowRight } from 'lucide-react';
import logo from '../assets/ias_logo.svg';

interface NavbarProps {
  lang: 'es' | 'en';
  setLang: (l: 'es' | 'en') => void;
  theme: 'light' | 'dark';
  setTheme: (t: 'light' | 'dark') => void;
  t: any; 
}

const Navbar: React.FC<NavbarProps> = ({ lang, setLang, theme, setTheme, t }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: "#mission", label: t.nav.mission },
    { href: "#eventos", label: t.nav.events },
    { href: "#sobre", label: t.nav.about },
    { href: "#newsletter", label: t.nav.contact },
  ];

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-500 ease-in-out ${scrolled ? 'bg-secundarios-light/90 dark:bg-secundarios-dark/90 glass-nav border-b border-secundarios-dark/10 py-3 md:py-4 shadow-sm' : 'bg-transparent py-4 md:py-8'}`}>
      <div className="max-w-[1400px] mx-auto px-4 md:px-12 flex justify-between items-center relative">
        {/* Logo */}
        <a href="#" className="shrink-0 transition-opacity duration-300 hover:opacity-80">
          <img 
            src={logo} 
            alt="AI Safety España" 
            className="h-10 md:h-[50px] w-auto block bg-transparent"
          />
        </a>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-10 absolute left-1/2 -translate-x-1/2 font-sans font-semibold text-xs uppercase tracking-[0.2em] opacity-80">
          {navLinks.map(link => (
            <a key={link.href} href={link.href} className="text-secundarios-dark dark:text-secundarios-light hover:text-principal dark:hover:text-principalLight transition-all duration-300 relative group overflow-hidden">
              {link.label}
              <span className="absolute bottom-0 left-0 w-full h-0.5 bg-principal transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></span>
            </a>
          ))}
        </div>

        {/* Actions (Theme + Lang + Mobile Toggle) */}
        <div className="flex items-center gap-2 md:gap-5">
          <button 
            onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
            className="p-2 md:p-2.5 rounded-full border border-secundarios-dark/20 text-secundarios-dark dark:text-secundarios-light hover:bg-secundarios-light dark:hover:bg-white/5 transition-all duration-300"
            aria-label="Toggle Theme"
          >
            {theme === 'light' ? <Moon size={16} className="md:w-[18px] md:h-[18px]" /> : <Sun size={16} className="md:w-[18px] md:h-[18px]" />}
          </button>

          <button 
            onClick={() => setLang(lang === 'es' ? 'en' : 'es')}
            className="px-3 md:px-4 py-1.5 rounded-anthro border border-secundarios-dark/20 text-secundarios-dark dark:text-secundarios-light hover:border-principal hover:text-principal font-sans font-bold text-[10px] md:text-xs uppercase tracking-[0.15em] transition-all duration-300"
          >
            {lang === 'es' ? 'EN' : 'ES'}
          </button>

          <button onClick={() => setIsOpen(!isOpen)} className="lg:hidden text-secundarios-dark dark:text-secundarios-light p-1.5 ml-1">
            {isOpen ? <X size={24} className="md:w-[28px] md:h-[28px]" /> : <Menu size={24} className="md:w-[28px] md:h-[28px]" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div className={`lg:hidden fixed inset-0 top-0 bg-secundarios-light dark:bg-secundarios-dark z-[-1] transition-transform duration-500 ease-in-out ${isOpen ? 'translate-y-0' : '-translate-y-full'}`}>
        <div className="pt-24 px-6 flex flex-col gap-6 h-full overflow-y-auto">
          {navLinks.map((link, idx) => (
            <a 
              key={link.href} 
              href={link.href} 
              onClick={() => setIsOpen(false)} 
              className="text-2xl font-sans font-bold text-secundarios-dark dark:text-secundarios-light border-b border-secundarios-dark/10 pb-4 flex justify-between items-center group"
              style={{ transitionDelay: `${idx * 50}ms` }}
            >
              {link.label}
              <ArrowRight size={24} className="opacity-40 group-hover:opacity-100 transition-opacity" />
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;