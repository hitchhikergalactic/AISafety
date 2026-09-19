import React from 'react';

// Textos con text-transform: uppercase: "iaS" se escribe siempre así, así que se deja fuera de esa transformación
// (la clase .marca-ias, definida en global.css, fuerza text-transform: none).
export const keepBrandCase = (text: string): React.ReactNode =>
  text.split(/(iaS)/).map((part, i) =>
    part === 'iaS' ? (
      <span key={i} className="marca-ias">
        {part}
      </span>
    ) : (
      part
    )
  );
