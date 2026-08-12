import React, { useState } from 'react';
import { translations } from '@locales/translations';
import Navbar from '@components/Navbar';
import CharlasSection from '@components/CharlasSection';
import Footer from '@components/Footer';
import JoinModal from '@components/JoinModal';
import { listaDeCharlas } from '@data/charlas';

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

  const openModal = () => {
    setShowModal(true);
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
      
      <JoinModal
        isOpen={showModal}
        onClose={() => setShowModal(false)}
        lang={lang}
        title={t.subscribe.title}
        subtitle={t.subscribe.subtitle}
        action="https://script.google.com/macros/s/AKfycbwYyiRXPZdeFNO1ybtrnd5xa9ndfNvIfXr-e7rF0HsfKcz4eWckOsswSD9yoEO_87w63g/exec"
        subject="Nuevo suscriptor desde Detalle de Charla"
        successMessage={lang === 'es' ? 'Te hemos registrado correctamente.' : 'You have been successfully registered.'}
      />

      <Footer 
        lang={lang} 
        onSubscribeClick={openModal}
      />
    </>
  );
};

export default DetalleCharla;