import React, { useState } from 'react';
import { translations } from '@locales/translations';
import Navbar from '@components/Navbar';
import CharlasSection from '@components/CharlasSection';
import Footer from '@components/Footer';
import { listaDeCharlas } from '@data/charlas';
import { X } from 'lucide-react';

type Language = 'es' | 'en';

interface DetalleCharlaProps {
  lang: Language;
  charlaId: string;
}

const DetalleCharla: React.FC<DetalleCharlaProps> = ({ lang, charlaId }) => {
  const t = translations[lang];
  const charlaActiva = charlaId 
    ? listaDeCharlas.find((c) => c.id === charlaId) || null 
    : listaDeCharlas[0] || null;
  const [showModal, setShowModal] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const openModal = () => {
    setIsSuccess(false);
    setIsSubmitting(false);
    setShowModal(true);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      const formData = new FormData(e.currentTarget);
      const searchParams = new URLSearchParams();
      formData.forEach((value, key) => {
        searchParams.append(key, value.toString());
      });

      await fetch('https://script.google.com/macros/s/AKfycbwYyiRXPZdeFNO1ybtrnd5xa9ndfNvIfXr-e7rF0HsfKcz4eWckOsswSD9yoEO_87w63g/exec', {
        method: 'POST',
        mode: 'no-cors',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: searchParams.toString(),
      });

      setIsSuccess(true);
    } catch (error) {
      console.error("Error al enviar el formulario:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!charlaActiva) {
    return (
      <>
        <Navbar lang={lang} />
        <div className="w-full text-center py-40">
          <h3 className="text-secundarios-dark dark:text-white">Charla no encontrada</h3>
        </div>
        <Footer lang={lang} onSubscribeClick={openModal} />
      </>
    );
  }

  return (
    <>
      <Navbar lang={lang} />
      <main className="bg-secundarios-light dark:bg-secundarios-dark transition-colors duration-300">
        <CharlasSection charlaActivaProp={charlaActiva} lang={lang} />
      </main>
      
      {/* MODAL DE SUSCRIPCIÓN */}
      {showModal && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center px-4" onClick={() => setShowModal(false)}>
          <div className="absolute inset-0 bg-black/60 backdrop-blur-sm"></div>
          <div className="relative bg-secundarios-light dark:bg-secundarios-dark rounded-[32px] p-8 md:p-14 max-w-2xl w-full shadow-anthro-elevated border border-secundarios-dark/20 z-10" onClick={e => e.stopPropagation()}>
            <button onClick={() => setShowModal(false)} className="absolute top-6 right-6 text-secundarios-dark hover:text-principal transition-colors cursor-pointer">
              <X size={24} />
            </button>
            {isSuccess ? (
              <div className="text-center py-8">
                <h3 className="mb-4 text-principal">{t.subscribe.success}</h3>
                <p className="text-secundarios-dark/60 dark:text-secundarios-light/60 font-serif text-lg">
                  {lang === 'es' ? 'Te hemos registrado correctamente.' : 'You have been successfully registered.'}
                </p>
              </div>
            ) : (
              <>
                <h3 className="mb-2 md:mb-4">{t.subscribe.title}</h3>
                <p className="text-secundarios-dark/60 dark:text-secundarios-light/60 font-serif mb-6 text-lg text-balance">{t.subscribe.subtitle}</p>

                <form onSubmit={handleSubmit} action="https://script.google.com/macros/s/AKfycbwYyiRXPZdeFNO1ybtrnd5xa9ndfNvIfXr-e7rF0HsfKcz4eWckOsswSD9yoEO_87w63g/exec" method="POST" className="space-y-4">
                  <input type="hidden" name="_subject" value="Nuevo suscriptor desde Detalle de Charla" />
                  <input type="hidden" name="_captcha" value="false" />
                  <input 
                    type="email" 
                    name="email" 
                    placeholder={lang === 'es' ? 'tu@email.com' : 'your@email.com'} 
                    required 
                    className="w-full px-4 py-3 rounded-xl border border-secundarios-dark/20 dark:border-white/10 bg-white dark:bg-white/5 text-secundarios-dark dark:text-white placeholder-secundarios-dark/40 focus:outline-none focus:ring-2 focus:ring-principal"
                  />
                  <button type="submit" disabled={isSubmitting} className="w-full py-3 rounded-xl bg-principal text-white font-bold hover:bg-principal/80 transition-colors cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed">
                    {isSubmitting ? (lang === 'es' ? 'Enviando...' : 'Sending...') : t.subscribe.button}
                  </button>
                </form>
              </>
            )}
          </div>
        </div>
      )}

      <Footer 
        lang={lang} 
        onSubscribeClick={openModal}
      />
    </>
  );
};

export default DetalleCharla;