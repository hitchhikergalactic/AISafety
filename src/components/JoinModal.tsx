import React, { useState } from 'react';
import { X } from 'lucide-react';
import { translations } from '../locales/translations';

type Language = 'es' | 'en';

type HiddenField = {
  name: string;
  value: string;
};

interface JoinModalProps {
  isOpen: boolean;
  onClose: () => void;
  lang: Language;
  title: string;
  subtitle: string;
  action: string;
  subject: string;
  successMessage: string;
  hiddenFields?: HiddenField[];
}

const JoinModal: React.FC<JoinModalProps> = ({
  isOpen,
  onClose,
  lang,
  title,
  subtitle,
  action,
  subject,
  successMessage,
  hiddenFields = [],
}) => {
  const t = translations[lang];
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  if (!isOpen) {
    return null;
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const formData = new FormData(e.currentTarget);
      const searchParams = new URLSearchParams();
      formData.forEach((value, key) => {
        searchParams.append(key, value.toString());
      });

      await fetch(action, {
        method: 'POST',
        mode: 'no-cors',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: searchParams.toString(),
      });

      setIsSuccess(true);
    } catch (error) {
      console.error('Error al enviar el formulario:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center px-4" onClick={onClose}>
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm"></div>
      <div className="relative bg-secundarios-light dark:bg-secundarios-dark rounded-[32px] p-8 md:p-14 max-w-2xl w-full shadow-anthro-elevated border border-secundarios-dark/20 z-10" onClick={(e) => e.stopPropagation()}>
        <button onClick={onClose} className="absolute top-6 right-6 text-secundarios-dark hover:text-principal transition-colors cursor-pointer" type="button">
          <X size={24} />
        </button>

        {isSuccess ? (
          <div className="text-center py-8">
            <h3 className="mb-4 text-principal">{t.subscribe.success}</h3>
            <p className="text-secundarios-dark/60 dark:text-secundarios-light/60 font-serif text-lg">
              {successMessage}
            </p>
          </div>
        ) : (
          <>
            <h3 className="mb-2 md:mb-4">{title}</h3>
            <p className="text-secundarios-dark/60 dark:text-secundarios-light/60 font-serif mb-6 text-lg text-balance">{subtitle}</p>

            <form onSubmit={handleSubmit} action={action} method="POST" className="space-y-4">
              <input type="hidden" name="_subject" value={subject} />
              <input type="hidden" name="_captcha" value="false" />
              <input type="hidden" name="_template" value="table" />
              {hiddenFields.map((field) => (
                <input key={field.name} type="hidden" name={field.name} value={field.value} />
              ))}
              <input
                type="text"
                name="name"
                required
                placeholder={t.subscribe.name}
                className="w-full px-6 py-4 rounded-2xl bg-white dark:bg-white/5 border border-secundarios-dark/20 text-secundarios-dark dark:text-white focus:outline-none focus:ring-2 focus:ring-principal/50 transition-all font-sans text-lg"
              />
              <input
                type="email"
                name="email"
                required
                placeholder={t.subscribe.email}
                className="w-full px-6 py-4 rounded-2xl bg-white dark:bg-white/5 border border-secundarios-dark/20 text-secundarios-dark dark:text-white focus:outline-none focus:ring-2 focus:ring-principal/50 transition-all font-sans text-lg"
              />
              <input
                type="text"
                name="linkedin"
                required
                placeholder={t.subscribe.linkedin}
                className="w-full px-6 py-4 rounded-2xl bg-white dark:bg-white/5 border border-secundarios-dark/20 text-secundarios-dark dark:text-white focus:outline-none focus:ring-2 focus:ring-principal/50 transition-all font-sans text-lg"
              />

              <button type="submit" disabled={isSubmitting} className="w-full py-5 rounded-2xl bg-principal text-white font-sans font-black text-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-anthro-elevated active:scale-95 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed">
                {isSubmitting ? (lang === 'es' ? 'Enviando...' : 'Sending...') : t.subscribe.button}
              </button>
            </form>
          </>
        )}
      </div>
    </div>
  );
};

export default JoinModal;