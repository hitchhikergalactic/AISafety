import React from 'react';
import { translations } from '../../locales/translations';
import { valenciaFooterColumns } from '../../data/delegaciones';
import { parseText } from '../../utils/parseText';
import logoWhiteLegend from '../../assets/logo_blanco_con_leyenda.svg';

type Language = 'es' | 'en';

interface ValenciaFooterProps {
  lang: Language;
}

// Extrae de forma segura la URL de una imagen importada (string u objeto con .src)
const getImageSrc = (img: any): string => {
  if (!img) return '';
  if (typeof img === 'string') return img;
  if (img.src && typeof img.src === 'string') return img.src;
  if (img.default && typeof img.default === 'string') return img.default;
  return '';
};

const ValenciaFooter: React.FC<ValenciaFooterProps> = ({ lang }) => {
  const t = translations[lang];
  const langPrefix = lang === 'es' ? '' : '/en';
  const columns = valenciaFooterColumns[lang];

  return (
    <footer className="px-4 md:px-8 bg-secundarios-dark text-secundarios-light/40 py-12 border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        <div className="grid gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,2.2fr)]">
          <div className="flex flex-col items-center lg:items-start text-center lg:text-left">
            <img
              src={getImageSrc(logoWhiteLegend)}
              alt={lang === 'es' ? 'iaS · Seguridad de la IA' : 'iaS · AI safety'}
              className="h-16 md:h-20 w-auto mb-6"
            />
            <div className="bajada !text-secundarios-light max-w-xs">{parseText(t.footer.text2)}</div>
            <p className="!text-secundarios-light max-w-xs mb-0">{parseText(t.footer.tagline)}</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-x-6 gap-y-10">
            {columns.map((column) => (
              <div key={column.title}>
                <h5 className="!text-secundarios-light !text-xs !font-bold uppercase !tracking-widest !mb-4">
                  {column.title}
                </h5>
                <ul className="flex flex-col gap-3 font-sans text-sm">
                  {column.links.map((link) => {
                    const isInternal = link.href.startsWith('/');
                    return (
                      <li key={link.href}>
                        <a
                          href={isInternal ? `${langPrefix}${link.href}` : link.href}
                          {...(link.external && !link.href.startsWith('mailto:')
                            ? { target: '_blank', rel: 'noopener noreferrer' }
                            : {})}
                          className="text-secundarios-light/70 hover:text-principal transition-colors break-words"
                        >
                          {link.label}
                        </a>
                      </li>
                    );
                  })}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="pt-8 mt-12 border-t border-white/5 text-center text-xs tracking-widest uppercase text-white/60 font-medium">
          © {t.footer.copyright}.
        </div>
      </div>
    </footer>
  );
};

export default ValenciaFooter;
