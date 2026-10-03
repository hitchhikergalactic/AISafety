import React, { useState, useEffect } from 'react';
import { Moon, Sun, X, Menu, ArrowRight, MapPin, Plus } from 'lucide-react';
import { translations } from '../locales/translations';
import { delegacionesNavLabel, delegacionesSublinks } from '../data/delegaciones';
import { rutaEnOtroIdioma } from '../data/rutas-traducidas';
import logo from '../assets/logo-ias-color.svg';
import logoWhite from '../assets/logo-ias-blanco.svg';

// Formulario de Airtable para quien quiera ser ponente
const SPEAKER_FORM_URL = 'https://airtable.com/appjg7pwM6YVmobZ6/pagXrhFIu7e0ltvdj/form';

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
    setTargetLangPath(rutaEnOtroIdioma(pathname, lang));

    return () => window.removeEventListener('scroll', handleScroll);
  }, [lang]);

  const toggleTheme = () => {
    const nextTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(nextTheme);
    localStorage.setItem('app_theme', nextTheme);
    document.documentElement.classList.toggle('dark', nextTheme === 'dark');
  };

  // Función auxiliar para extraer de forma segura la URL como un string limpio
  const getImageSrc = (img: any) => {
    if (!img) return '';
    if (typeof img === 'string') return img;
    if (img.src && typeof img.src === 'string') return img.src;
    if (img.default && typeof img.default === 'string') return img.default;
    return '';
  };

  // "iaS" es el nombre de la marca: se escribe siempre así, aunque el menú vaya en mayúsculas.
  const renderNavLabel = (label: string) =>
    label.split(/(iaS)/).map((part, i) =>
      part === 'iaS' ? <span key={i} className="marca-ias">{part}</span> : part.toUpperCase()
    );

  const activeLogo = theme === 'dark' ? getImageSrc(logoWhite) : getImageSrc(logo);

  type Sublink =
    | { separator: true; label?: undefined; path?: undefined; highlight?: undefined; description?: undefined; icon?: undefined }
    | { separator?: false; label: string; path: string; highlight?: boolean; description?: string; icon?: 'mapa' | 'nueva' };

  const sublinkIcons = { mapa: MapPin, nueva: Plus };

  const closeMenus = () => {
    setIsOpen(false);
    setOpenSubmenu(null);
  };

  const navLinks: { href: string; label: string; sublinks?: Sublink[] }[] = [
    {
      href: "mission",
      label: t.nav.mission,
      sublinks: [
        { label: lang === 'es' ? "Qué hacemos" : "What we do", path: "/que-hacemos" },
        { label: lang === 'es' ? "Equipo" : "Team", path: "/equipo" },
        { label: lang === 'es' ? "Visión" : "Vision", path: "/vision" },
        { label: lang === 'es' ? "Teoría del Cambio" : "Theory of Change", path: lang === 'es' ? "/teoria-del-cambio" : "/theory-of-change" }
      ]
    },
    {
      href: "eventos",
      label: t.nav.events,
      sublinks: [
        // Artículo introductorio: solo existe en español. Resaltado como «Crear una delegación» en /DELEGACIONES
        ...(lang === 'es' ? [{ label: "Qué es la seguridad de la IA", path: "/que-es-la-seguridad-de-la-ia", highlight: true }] : []),
        { label: t.seminario?.submenu || "Seminario BlueDot", path: "/seminario-bluedot-spain" },
        { label: lang === 'es' ? "Curso Estrategia AGI" : "AGI Strategy Course", path: "/curso-estrategia-agi" }
      ]
    },
    { href: "conectar", label: t.nav.about },
    { href: "footer",
      label: t.nav.contact,
      sublinks: [
        { label: lang === 'es' ? "Radar de papers" : "Paper digest", path: "/biblioteca-papers" }
      ]
    },
    {
      href: "delegaciones",
      label: delegacionesNavLabel[lang],
      sublinks: delegacionesSublinks[lang]
    },
  ];

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-500 ease-in-out`}>
      {/* Background Layer sin opacidades reflejando tu cambio previo */}
      <div className={`absolute inset-0 z-0 transition-all duration-500 ease-in-out ${scrolled ? 'bg-secundarios-light dark:bg-secundarios-dark shadow-sm' : ''}`}></div>

      {/* Tres columnas (logo, enlaces, acciones): los enlaces se centran entre el logo y las acciones, nunca encima de ellas */}
      <div className={`max-w-[1400px] mx-auto px-4 md:px-12 grid grid-cols-[auto_minmax(0,1fr)_auto] gap-x-6 items-center relative z-50 transition-all duration-500 ease-in-out ${scrolled ? 'py-3 md:py-4' : 'py-4 md:py-8'}`}>
        {/* Logo */}
        <a 
          href={lang === 'es' ? "/" : "/en/"}
          onClick={() => {
            setIsOpen(false);
            setOpenSubmenu(null);
          }}
          className="shrink-0 transition-opacity duration-300 hover:opacity-80"
        >
          {activeLogo && (
            <img 
              src={activeLogo} 
              alt={lang === 'es' ? 'iaS · Seguridad de la IA' : 'iaS · AI safety'} 
              className="h-10 md:h-[50px] w-auto block bg-transparent"
            />
          )}
        </a>

        {/* Desktop Navigation */}
        <div className="hidden xl:flex flex-nowrap items-center justify-center justify-self-center gap-x-5 2xl:gap-x-6 font-sans font-semibold text-base opacity">
          {navLinks.map(link => (
            <div key={link.href} className="relative group">
              {link.sublinks ? (
                <span className="text-secundarios-dark dark:text-secundarios-light hover:text-principal transition-all duration-300 relative overflow-hidden cursor-pointer pb-2 whitespace-nowrap">
                  {renderNavLabel(link.label)}
                  <span className="absolute bottom-0 left-0 w-full h-0.5 bg-principal transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></span>
                </span>
              ) : (
                <a
                  href={lang === 'es' ? `/#${link.href}` : `/en/#${link.href}`}
                  className="text-secundarios-dark dark:text-secundarios-light hover:text-principal transition-all duration-300 relative overflow-hidden cursor-pointer whitespace-nowrap"
                >
                  {renderNavLabel(link.label)}
                  <span className="absolute bottom-0 left-0 w-full h-0.5 bg-principal transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></span>
                </a>
              )}
              
              {/* Submenu Dropdown. Con descripciones (/DELEGACIONES) es un panel ancho con icono por enlace; si no, una lista.
                  El pt-3 deja un puente invisible entre la etiqueta y el panel para que el hover no se corte. */}
              {link.sublinks && (() => {
                const rich = link.sublinks.some(s => s.description);
                return (
                  <div className={`absolute left-1/2 -translate-x-1/2 pt-3 opacity-0 invisible translate-y-1 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 group-focus-within:opacity-100 group-focus-within:visible group-focus-within:translate-y-0 transition-all duration-200 z-50 ${rich ? 'w-80' : 'w-64'}`}>
                    <div className="bg-white dark:bg-secundarios-dark border border-secundarios-dark/10 dark:border-secundarios-light/15 rounded-anthro shadow-anthro-elevated p-2">
                      {link.sublinks.map((sublink, idx) => {
                        if (sublink.separator) {
                          return <div key={idx} className="h-px mx-2 my-2 bg-secundarios-dark/10 dark:bg-secundarios-light/10" />;
                        }
                        const href = `${langPrefix}${sublink.path}`;
                        if (!rich) {
                          return (
                            <a
                              key={idx}
                              href={href}
                              onClick={closeMenus}
                              className={`block px-3 py-2 rounded-lg text-sm transition-colors duration-200 ${
                                sublink.highlight
                                  ? 'bg-principal/10 text-principal-texto font-semibold hover:bg-principal hover:text-white'
                                  : 'text-secundarios-dark dark:text-secundarios-light hover:bg-principal/10 hover:text-principal-texto'
                              }`}
                            >
                              {sublink.label}
                            </a>
                          );
                        }
                        const Icon = sublinkIcons[sublink.icon ?? 'mapa'];
                        return (
                          <a
                            key={idx}
                            href={href}
                            onClick={closeMenus}
                            className={`group/item flex items-start gap-3 p-3 rounded-xl transition-colors duration-200 ${
                              sublink.highlight
                                ? 'bg-principal/10 hover:bg-principal/15'
                                : 'hover:bg-secundarios-dark/5 dark:hover:bg-secundarios-light/5'
                            }`}
                          >
                            <span className={`shrink-0 w-9 h-9 rounded-full flex items-center justify-center transition-colors duration-200 ${
                              sublink.highlight
                                ? 'bg-principal text-white'
                                : 'bg-principal/10 text-principal-texto group-hover/item:bg-principal group-hover/item:text-white'
                            }`}>
                              <Icon size={18} aria-hidden="true" />
                            </span>
                            <span className="min-w-0 flex-1">
                              <span className={`flex items-center gap-1 text-sm font-semibold ${sublink.highlight ? 'text-principal-texto' : 'text-secundarios-dark dark:text-secundarios-light'}`}>
                                {sublink.label}
                                <ArrowRight size={14} aria-hidden="true" className="opacity-0 -translate-x-1 group-hover/item:opacity-100 group-hover/item:translate-x-0 transition-all duration-200" />
                              </span>
                              {sublink.description && (
                                <span className="block mt-0.5 text-xs font-normal leading-snug text-secundarios-dark/70 dark:text-secundarios-light/70">
                                  {sublink.description}
                                </span>
                              )}
                            </span>
                          </a>
                        );
                      })}
                    </div>
                  </div>
                );
              })()}
            </div>
          ))}
        </div>

        {/* Actions (Theme + Lang + Mobile Toggle) */}
        <div className="col-start-3 flex items-center justify-self-end gap-2 md:gap-5">
          <a
            href={SPEAKER_FORM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden xl:inline-flex items-center px-4 py-1.5 rounded-anthro border-2 border-principal bg-transparent text-[#c23500] dark:text-[#ff7a45] font-sans font-bold text-sm whitespace-nowrap no-underline hover:bg-principal/10 dark:hover:bg-principal/15 transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-principal focus-visible:ring-offset-2"
          >
            {t.nav.speaker}
          </a>

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

          {/* Área táctil de 44 px. Solo onClick: touch-manipulation ya evita el retardo del toque, y un onTouchStart
              además haría que un solo toque abriera y cerrara el menú (React registra touchstart como pasivo, así que
              su preventDefault no impide el clic posterior). */}
          <button 
            onClick={() => setIsOpen(!isOpen)} 
            className="xl:hidden text-secundarios-dark dark:text-secundarios-light p-3 -mr-2 cursor-pointer min-w-[44px] min-h-[44px] flex items-center justify-center touch-manipulation"
            aria-label="Menu"
          >
            {isOpen ? <X size={24} className="md:w-[28px] md:h-[28px]" /> : <Menu size={24} className="md:w-[28px] md:h-[28px]" />}
          </button>
        </div>
      </div>

      {/* Mobile & Tablet Menu Overlay */}
      <div className={`xl:hidden fixed inset-0 bg-secundarios-light dark:bg-secundarios-dark z-40 flex flex-col pt-24 px-6 transition-transform duration-500 ease-in-out ${isOpen ? 'translate-y-0' : '-translate-y-full'}`}>
        <div className="flex flex-col gap-6 h-full overflow-y-auto w-full">
          {navLinks.map((link, idx) => (
            <div key={link.href}>
              {link.sublinks ? (
                <button 
                  onClick={() => setOpenSubmenu(openSubmenu === link.href ? null : link.href)}
                  className="text-2xl font-sans font-bold text-secundarios-dark dark:text-secundarios-light hover:text-principal pb-4 flex justify-between items-center group transition-colors duration-300 cursor-pointer bg-transparent border-none text-left w-full touch-manipulation"
                  style={{ transitionDelay: `${idx * 50}ms` }}
                >
                  <span>{renderNavLabel(link.label)}</span>
                  <ArrowRight size={24} className={`opacity-40 group-hover:opacity-100 transition-all ${openSubmenu === link.href ? 'rotate-90' : ''}`} />
                </button>
              ) : (
                <a 
                  href={lang === 'es' ? `/#${link.href}` : `/en/#${link.href}`}
                  onClick={() => setIsOpen(false)}
                  className="text-2xl font-sans font-bold text-secundarios-dark dark:text-secundarios-light hover:text-principal pb-4 flex justify-between items-center group transition-colors duration-300 text-left w-full block touch-manipulation"
                  style={{ transitionDelay: `${idx * 50}ms` }}
                >
                  <span>{renderNavLabel(link.label)}</span>
                  <ArrowRight size={24} className="opacity-40 group-hover:opacity-100 transition-all" />
                </a>
              )}
              
              {/* Mobile/Tablet Submenu */}
              {link.sublinks && openSubmenu === link.href && (
                <div className="ml-4 flex flex-col gap-3 pb-4">
                  {link.sublinks.map((sublink, subIdx) =>
                    sublink.separator ? (
                      <div key={subIdx} className="h-px my-1 bg-secundarios-dark/10 dark:bg-secundarios-light/10" />
                    ) : (
                      <a
                        key={subIdx}
                        href={`${langPrefix}${sublink.path}`}
                        onClick={() => {
                          setIsOpen(false);
                          setOpenSubmenu(null);
                        }}
                        className={`text-lg font-semibold transition-colors block touch-manipulation ${
                          sublink.highlight
                            ? 'bg-principal text-white rounded-anthro px-4 py-3'
                            : 'text-principal-texto dark:text-principalLight hover:text-principal/80 py-2'
                        }`}
                      >
                        {sublink.label}
                        {sublink.description && (
                          <span className={`block text-sm font-normal mt-0.5 ${sublink.highlight ? 'text-white/85' : 'text-secundarios-dark/70 dark:text-secundarios-light/70'}`}>
                            {sublink.description}
                          </span>
                        )}
                      </a>
                    )
                  )}
                </div>
              )}
            </div>
          ))}
          <a
            href={SPEAKER_FORM_URL}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setIsOpen(false)}
            className="self-start mb-8 px-5 py-2.5 rounded-2xl border-2 border-principal bg-transparent text-[#c23500] dark:text-[#ff7a45] font-sans font-bold text-lg no-underline hover:bg-principal/10 dark:hover:bg-principal/15 transition-all touch-manipulation focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-principal"
          >
            {t.nav.speaker}
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;