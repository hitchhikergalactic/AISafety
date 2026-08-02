// src/components/Navbar.tsx
import React, { useState, useEffect } from 'react';
import { Moon, Sun, X, Menu, ArrowRight } from 'lucide-react';
import { translations } from '../locales/translations';
import logo from '../assets/ias_logo.svg';
import logoWhite from '../assets/ias_logo_white.svg';

interface NavbarProps {
  lang: 'es' | 'en';
}

const Navbar: React.FC<NavbarProps> = ({ lang }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [openSubmenu, setOpenSubmenu] = useState<string | null>(null);
  const [theme, setTheme] = useState<'light' | 'dark'>('light');
  const [targetLangPath, setTargetLangPath] = useState('#');

  const t = translations[lang];
  const langPrefix = lang === 'es' ? '' : '/en';

  useEffect(() => {
    // Scroll event listener
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);

    // Initialize theme state from DOM
    const currentTheme = document.documentElement.classList.contains('dark') ? 'dark' : 'light';
    setTheme(currentTheme);

    // Initialize language path switcher
    const pathname = window.location.pathname;
    if (lang === 'es') {
      setTargetLangPath(pathname === '/' ? '/en/' : `/en${pathname}`);
    } else {
      setTargetLangPath((pathname === '/en' || pathname === '/en/') ? '/' : pathname.replace(/^\/en/, ''));
    }

    return () => window.removeEventListener('scroll', handleScroll);
  }, [lang]);

  const toggleTheme = () => {
    const nextTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(nextTheme);
    localStorage.setItem('app_theme', nextTheme);
    document.documentElement.classList.toggle('dark', nextTheme === 'dark');
  };

  const navLinks = [
    { 
      href: "mission", 
      label: t.nav.mission, 
      sublinks: [
        { label: lang === 'es' ? "Qué hacemos" : "What we do", path: "/que-hacemos" },
        { label: lang === 'es' ? "Equipo" : "Team", path: "/equipo" }
      ]
    },
    { 
      href: "eventos", 
      label: t.nav.events, 
      sublinks: [
        { label: t.seminario?.submenu, path: "/seminario-bluedot-spain" }
      ]
    },
    { href: "conectar", label: t.nav.about },
    { href: "footer", label: t.nav.contact },
    { href: "blog", label: "Blog", isPage: true },
  ];

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-500 ease-in-out`}>
      {/* Background Layer with Backdrop Filter */}
      <div className={`absolute inset-0 z-0 transition-all duration-500 ease-in-out ${scrolled ? 'bg-secundarios-light/90 dark:bg-secundarios-dark/90 glass-nav border-b border-secundarios-dark/10 shadow-sm' : 'bg-transparent'}`}></div>

      <div className={`max-w-[1400px] mx-auto px-4 md:px-12 flex justify-between items-center relative z-50 transition-all duration-500 ease-in-out ${scrolled ? 'py-3 md:py-4' : 'py-4 md:py-8'}`}>
        {/* Logo */}
        <a 
          href={lang === 'es' ? "/" : "/en/"}
          onClick={() => {
            setIsOpen(false);
            setOpenSubmenu(null);
          }}
          className="shrink-0 transition-opacity duration-300 hover:opacity-80"
        >
          <img 
            src={theme === 'dark' ? (logoWhite.src || logoWhite) : (logo.src || logo)} 
            alt="AI Safety España" 
            className="h-10 md:h-[50px] w-auto block bg-transparent"
          />
        </a>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-10 absolute left-1/2 -translate-x-1/2 font-sans font-semibold text-lg tracking-wide opacity">
          {navLinks.map(link => (
            <div key={link.href} className="relative group">
              {link.sublinks ? (
                // Items con Submenú (no navegan directo en hover, se muestra dropdown)
                <span className="text-secundarios-dark dark:text-secundarios-light hover:text-principal transition-all duration-300 relative overflow-hidden cursor-pointer pb-2">
                  {link.label.toUpperCase()}
                  <span className="absolute bottom-0 left-0 w-full h-0.5 bg-principal transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></span>
                </span>
              ) : (
                // Enlaces directos a secciones (Scroll smooth), o a páginas propias (isPage)
                <a 
                  href={link.isPage ? `${langPrefix}/${link.href}` : (lang === 'es' ? `/#${link.href}` : `/en/#${link.href}`)}
                  className="text-secundarios-dark dark:text-secundarios-light hover:text-principal transition-all duration-300 relative overflow-hidden cursor-pointer"
                >
                  {link.label.toUpperCase()}
                  <span className="absolute bottom-0 left-0 w-full h-0.5 bg-principal transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></span>
                </a>
              )}
              
              {/* Submenu Dropdown */}
              {link.sublinks && (
                <div className="absolute left-0 mt-0 w-48 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
                  <div className="bg-secundarios-light dark:bg-secundarios-dark border border-secundarios-dark/10 rounded-sm overflow-hidden">
                    {link.sublinks.map((sublink, idx) => (
                      <a
                        key={idx}
                        href={`${langPrefix}${sublink.path}`}
                        onClick={() => {
                          setIsOpen(false);
                          setOpenSubmenu(null);
                        }}
                        className="block px-4 py-2 text-sm text-secundarios-dark dark:text-secundarios-light hover:bg-principal hover:text-white transition-colors duration-300"
                      >
                        {sublink.label}
                      </a>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Actions (Theme + Lang + Mobile Toggle) */}
        <div className="flex items-center gap-2 md:gap-5">
          <button 
            onClick={toggleTheme}
            className="p-2 md:p-2.5 rounded-full border border-secundarios-dark/20 text-secundarios-dark dark:text-secundarios-light hover:bg-secundarios-light dark:hover:bg-white/5 transition-all duration-300 cursor-pointer"
            aria-label="Toggle Theme"
          >
            {theme === 'light' ? <Moon size={16} className="md:w-[18px] md:h-[18px]" /> : <Sun size={16} className="md:w-[18px] md:h-[18px]" />}
          </button>

          <a 
            href={targetLangPath}
            className="px-3 md:px-4 py-1.5 rounded-anthro border border-secundarios-dark/20 text-secundarios-dark dark:text-secundarios-light hover:border-principal hover:text-principal font-sans font-bold text-[10px] md:text-xs uppercase tracking-[0.15em] transition-all duration-300 inline-block text-center cursor-pointer"
          >
            {lang === 'es' ? 'EN' : 'ES'}
          </a>

          <button onClick={() => setIsOpen(!isOpen)} className="lg:hidden text-secundarios-dark dark:text-secundarios-light p-1.5 ml-1 cursor-pointer">
            {isOpen ? <X size={24} className="md:w-[28px] md:h-[28px]" /> : <Menu size={24} className="md:w-[28px] md:h-[28px]" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div className={`lg:hidden fixed inset-0 bg-secundarios-light dark:bg-secundarios-dark z-40 flex flex-col pt-24 px-6 transition-transform duration-500 ease-in-out ${isOpen ? 'translate-y-0' : '-translate-y-full'}`}>
        <div className="flex flex-col gap-6 h-full overflow-y-auto w-full">
          {navLinks.map((link, idx) => (
            <div key={link.href}>
              {link.sublinks ? (
                <button 
                  onClick={() => setOpenSubmenu(openSubmenu === link.href ? null : link.href)}
                  className="text-2xl font-sans font-bold text-secundarios-dark dark:text-secundarios-light hover:text-principal pb-4 flex justify-between items-center group transition-colors duration-300 cursor-pointer bg-transparent border-none text-left w-full"
                  style={{ transitionDelay: `${idx * 50}ms` }}
                >
                  {link.label.toUpperCase()}
                  <ArrowRight size={24} className={`opacity-40 group-hover:opacity-100 transition-all ${openSubmenu === link.href ? 'rotate-90' : ''}`} />
                </button>
              ) : (
                <a 
                  href={link.isPage ? `${langPrefix}/${link.href}` : (lang === 'es' ? `/#${link.href}` : `/en/#${link.href}`)}
                  onClick={() => setIsOpen(false)}
                  className="text-2xl font-sans font-bold text-secundarios-dark dark:text-secundarios-light hover:text-principal pb-4 flex justify-between items-center group transition-colors duration-300 text-left w-full block"
                  style={{ transitionDelay: `${idx * 50}ms` }}
                >
                  {link.label.toUpperCase()}
                  <ArrowRight size={24} className="opacity-40 group-hover:opacity-100 transition-all" />
                </a>
              )}
              
              {/* Mobile Submenu */}
              {link.sublinks && openSubmenu === link.href && (
                <div className="ml-4 flex flex-col gap-3 pb-4">
                  {link.sublinks.map((sublink, subIdx) => (
                    <a
                      key={subIdx}
                      href={`${langPrefix}${sublink.path}`}
                      onClick={() => {
                        setIsOpen(false);
                        setOpenSubmenu(null);
                      }}
                      className="text-lg text-principal dark:text-principalLight hover:text-principal/80 font-semibold transition-colors"
                    >
                      {sublink.label}
                    </a>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;