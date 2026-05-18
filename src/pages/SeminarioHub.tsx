import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { translations } from '../locales/translations';
import { X } from 'lucide-react';
import { LuMail, LuMapPin } from 'react-icons/lu';
import Navbar from '../components/Navbar';
import SeminarioHero from '../components/SeminarioHero';
import GrillaSeminario from '../components/GrillaSeminario';
import SocialFooter from '../components/SocialFooter';
import { listaDeCharlas, Charla } from '../data/charlas';
import logo from '../assets/safety_id_logo_white_leyenda.svg';
import logoWhite from '../assets/ias_logo_white.svg';

type Language = 'es' | 'en';
type Theme = 'light' | 'dark';

interface SeminarioHubProps {
  lang: Language;
  setLang: (lang: Language) => void;
  theme: Theme;
  setTheme: (theme: Theme) => void;
}

/**
 * Página: aisafety.es/seminario-bluedot-spain
 * Muestra la grilla principal de charlas del seminario con soporte multi-idioma.
 */
const SeminarioHub: React.FC<SeminarioHubProps> = ({ lang, setLang, theme, setTheme }) => {
  const navigate = useNavigate();
  const t = translations[lang];
  const [showModal, setShowModal] = useState(false);
  const [modalType, setModalType] = useState<'event' | 'subscribe'>('subscribe');

  const handleCharlaClick = (charla: Charla) => {
    navigate(`/seminario-bluedot-spain/${charla.id}`);
  };

  return (
    <>
      {/* Barra de navegación global */}
      <Navbar lang={lang} setLang={setLang} theme={theme} setTheme={setTheme} t={t} />
      
      {/* Contenedor principal con margen superior para no quedar oculto por el Navbar flotante */}
      <div className="pt-28 md:pt-32 px-4 md:px-8">
        
        {/* Sección Hero con traducciones */}
        <SeminarioHero t={t} />

        {/* Sección de la Grilla pasando el listado de datos real y el idioma activo */}
        <section className="mb-12 md:mb-16">
          <GrillaSeminario 
            charlas={listaDeCharlas}
            lang={lang} 
            onCharlaClick={handleCharlaClick} 
          />
        </section>

        {/* Espacio reservado para secciones inferiores (CTA / Newsletter) */}
        <section className="mb-12 md:mb-16 py-12 text-center">
          {/* Newsletter CTA opcional */}
        </section>
      </div>

      {/* MODAL DE SUSCRIPCIÓN */}
      {showModal && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center px-4" onClick={() => setShowModal(false)}>
          <div className="absolute inset-0 bg-black/60 backdrop-blur-sm"></div>
          <div className="relative bg-secundarios-light dark:bg-secundarios-dark rounded-[32px] p-8 md:p-14 max-w-2xl w-full shadow-anthro-elevated border border-secundarios-dark/20 z-10" onClick={e => e.stopPropagation()}>
            <button onClick={() => setShowModal(false)} className="absolute top-6 right-6 text-secundarios-dark hover:text-principal transition-colors">
              <X size={24} />
            </button>
            <h3 className="mb-2 md:mb-4">{t.subscribe.title}</h3>
            <p className="text-secundarios-dark/60 dark:text-secundarios-light/60 font-serif mb-6 text-lg text-balance">{t.subscribe.subtitle}</p>

            <form action="https://formsubmit.co/aisafetymadrid@gmail.com" method="POST" className="space-y-4">
              <input type="hidden" name="_subject" value="Nuevo suscriptor desde Seminario" />
              <input type="hidden" name="_captcha" value="false" />
              <input 
                type="email" 
                name="email" 
                placeholder={lang === 'es' ? 'tu@email.com' : 'your@email.com'} 
                required 
                className="w-full px-4 py-3 rounded-xl border border-secundarios-dark/20 dark:border-white/10 bg-white dark:bg-white/5 text-secundarios-dark dark:text-white placeholder-secundarios-dark/40 focus:outline-none focus:ring-2 focus:ring-principal"
              />
              <button type="submit" className="w-full py-3 rounded-xl bg-principal text-white font-bold hover:bg-principal/80 transition-colors">
                {t.subscribe.cta || 'Suscribirse'}
              </button>
            </form>
          </div>
        </div>
      )}

      {/* FOOTER */}
      <footer className="px-4 md:px-8 bg-secundarios-dark text-secundarios-light/40 py-12 border-t border-white/5">
        <div className="max-w-7xl mx-auto text-center md:text-left">
          <div className="flex flex-col-reverse md:flex-row justify-between items-center gap-12">
            <div className="flex flex-col items-center md:items-start w-full md:w-auto">
              <div className="bajada !text-secundarios-light max-w-xs mb-6">{t.footer.tagline}</div>
              <button 
                onClick={() => { setModalType('subscribe'); setShowModal(true); }} 
                className="px-10 py-4 rounded-xl bg-principal text-white font-sans font-bold text-xl transition-all duration-300 shadow-md hover:shadow-lg hover:-translate-y-1 inline-flex items-center gap-3 mb-8"
              >
                {t.hero.ctaPrimary}
              </button>
              <div className="mb-6">
                <SocialFooter />
              </div>
              <div className="whitespace-pre-wrap mb-4">
                <h5 className="!text-secundarios-light !mb-0">{t.footer.text1}</h5>
              </div>
              <a href={`mailto:${t.footer.email}`} className="inline-flex items-center gap-2 hover:!text-secundarios-light/80 transition-colors mb-1">
                <h5 className="!text-secundarios-light !mb-0 inline-flex items-center gap-2">
                  <LuMail size={18} />
                  {t.footer.email}
                </h5>
              </a>
              <a href={t.footer.dirUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 hover:!text-secundarios-light/80 transition-colors mb-4">
                <h5 className="!text-secundarios-light !mb-0 inline-flex items-center gap-2">
                  <LuMapPin size={18} />
                  {t.footer.dir}
                </h5>
              </a>
            </div>
            <div className="w-full md:w-auto flex justify-center md:justify-end mb-8 md:mb-0">
              <img 
                src={theme === 'dark' ? logoWhite : logo} 
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
    </>
  );
};

export default SeminarioHub;