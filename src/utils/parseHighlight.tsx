import React from 'react';
import { emphasizeBrand } from './emphasizeBrand';

// Resalta con el color de acento de iaS lo que va entre ** **. El texto visible no cambia: solo su aspecto.
export const parseHighlight = (text: string): React.ReactNode =>
  text.split(/(\*\*.*?\*\*)/g).map((part, i) =>
    part.startsWith('**') && part.endsWith('**') ? (
      <strong key={i} className="font-bold text-principal">
        {part.slice(2, -2)}
      </strong>
    ) : (
      <React.Fragment key={i}>{emphasizeBrand(part)}</React.Fragment>
    )
  );
