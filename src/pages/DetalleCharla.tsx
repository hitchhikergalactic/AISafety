import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { translations } from '../locales/translations';
import Navbar from '../components/Navbar';
import CharlasSection from '../components/CharlasSection';
import Footer from '../components/Footer';
import { listaDeCharlas } from '../data/charlas';
import { X } from 'lucide-react';

type Language = 'es' | 'en';
type Theme = 'light' | 'dark';

interface DetalleCharlaProps {
  lang: Language;
  setLang: (lang: Language) => void;
  theme: Theme;
  setTheme: (theme: Theme) => void;
}

const DetalleCharla: React.FC<DetalleCharlaProps> = ({ lang, setLang, theme, setTheme }) => {
  const { charlaId } = useParams<{ charlaId: string }>(); //
  const t = translations[lang]; //
  const charlaActiva = charlaId 
    ? listaDeCharlas.find((c) => c.id === charlaId) || null //
    : listaDeCharlas[0] || null; //
  const [showModal, setShowModal] = useState(false);
  const [modalType, setModalType] = useState<'event' | 'subscribe'>('subscribe');

  // Scroll al inicio cuando se carga o cambia la charla
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [charlaId]);

  if (!charlaActiva) {
    return (
      <>
        <Navbar lang={lang} setLang={setLang} theme={theme} setTheme={setTheme} t={t} />
        <div className="w-full text-center py-20">
          <h3>Charla no encontrada</h3>
        </div>
      </>
    );
  }

  return (
    <>
      <Navbar lang={lang} setLang={setLang} theme={theme} setTheme={setTheme} t={t} />
      <main className="bg-secundarios-light dark:bg-secundarios-dark transition-colors duration-300">
        <CharlasSection charlaActivaProp={charlaActiva} lang={lang} />
      </main>
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
              <input type="hidden" name="_subject" value="Nuevo suscriptor desde Detalle de Charla" />
              <input type="hidden" name="_captcha" value="false" />
              <input 
                type="email" 
                name="email" 
                placeholder={lang === 'es' ? 'tu@email.com' : 'your@email.com'} 
                required 
                className="w-full px-4 py-3 rounded-xl border border-secundarios-dark/20 dark:border-white/10 bg-white dark:bg-white/5 text-secundarios-dark dark:text-white placeholder-secundarios-dark/40 focus:outline-none focus:ring-2 focus:ring-principal"
              />
              <button type="submit" className="w-full py-3 rounded-xl bg-principal text-white font-bold hover:bg-principal/80 transition-colors">
                {t.subscribe.button}
              </button>
            </form>
          </div>
        </div>
      )}

      <Footer 
        lang={lang} 
        theme={theme} 
        onSubscribeClick={() => { setModalType('subscribe'); setShowModal(true); }}
      />
    </>
  );
};

export default DetalleCharla;