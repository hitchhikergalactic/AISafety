import React from 'react';

// Nombre que se resalta en negrita en todo el texto visible.
const BRAND = 'BlueDot Impact';

// Una URL o un correo no son texto visible de marca.
const isUrlOrEmail = (text: string) => /^(https?:\/\/|mailto:)\S+$|^\S+@\S+\.\S+$/.test(text.trim());

// Envuelve cada "BlueDot Impact" en <strong className="font-bold">, el mismo elemento y estilo que generan
// los ** manuales de parseText. Se ejecuta al renderizar (en la compilación y, idéntico, al hidratar), así
// que el HTML servido ya lleva la negrita.
// Es idempotente: no toca lo que ya va entre ** ** (ya está en negrita) ni cadenas que sean una URL o un correo.
// Los atributos (alt, title, metaetiquetas) no pasan por aquí, porque solo se aplica a texto que se pinta.
export const emphasizeBrand = (text: string): React.ReactNode => {
  if (!text.includes(BRAND) || isUrlOrEmail(text)) return text;

  return text.split(/(\*\*.*?\*\*)/g).flatMap((segment, segIdx) => {
    if (segment.startsWith('**') || !segment.includes(BRAND)) return [segment];
    const parts = segment.split(BRAND);
    return parts.flatMap((part, i) =>
      i < parts.length - 1
        ? [part, <strong key={`${segIdx}-${i}`} className="font-bold">{BRAND}</strong>]
        : [part]
    );
  });
};
