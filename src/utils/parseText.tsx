import React from 'react';

export const parseText = (text: string): React.ReactNode => {
  return text.split('\n').map((line, lineIdx) => (
    <React.Fragment key={lineIdx}>
      {line.split(/(\*\*.*?\*\*)/g).map((part, partIdx) => 
        part.startsWith('**') ? 
          <strong key={`${lineIdx}-${partIdx}`} className="font-bold">{part.slice(2, -2)}</strong> : 
          <span key={`${lineIdx}-${partIdx}`}>{part}</span>
      )}
      {lineIdx < text.split('\n').length - 1 && <br key={`br-${lineIdx}`} />}
    </React.Fragment>
  ));
};
