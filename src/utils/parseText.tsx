import React from 'react';

export const parseText = (text: string): React.ReactNode => {
  return text.split(/(\*\*.*?\*\*)/g).map((part, i) => 
    part.startsWith('**') ? 
      <strong key={i} className="font-bold">{part.slice(2, -2)}</strong> : 
      <span key={i}>{part}</span>
  );
};
