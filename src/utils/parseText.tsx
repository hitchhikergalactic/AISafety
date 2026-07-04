import React from 'react';

export const parseText = (text: string | undefined): React.ReactNode => {
  if (!text || text.trim() === '') {
    return null;
  }
  
  const lines = text.split('\n');
  
  if (lines.length === 1) {
    const lineContent = lines[0];
    return (
      <>
        {lineContent.split(/(\*\*.*?\*\*|\*.*?\*)/g).map((part, partIdx) => {
          if (part.startsWith('**') && part.endsWith('**')) {
            return <strong key={partIdx} className="font-bold">{part.slice(2, -2)}</strong>;
          } else if (part.startsWith('*') && part.endsWith('*') && part.length > 2) {
            return <em key={partIdx} className="italic">{part.slice(1, -1)}</em>;
          } else if (part) {
            return <span key={partIdx}>{part}</span>;
          }
          return null;
        })}
      </>
    );
  }
  
  // Para múltiples líneas
  return (
    <>
      {lines.map((line, lineIdx) => {
        const tabMatch = line.match(/^(\t+)/);
        const tabCount = tabMatch ? tabMatch[1].length : 0;
        const lineContent = line.slice(tabCount * 1);
        
        return (
          <div 
            key={lineIdx}
            style={{ 
              paddingLeft: `${tabCount * 1.5}rem`,
              marginBottom: lineIdx < lines.length - 1 ? '0.8rem' : '0'
            }}
          >
            {lineContent.split(/(\*\*.*?\*\*|\*.*?\*)/g).map((part, partIdx) => {
              if (part.startsWith('**') && part.endsWith('**')) {
                return <strong key={`${lineIdx}-${partIdx}`} className="font-bold">{part.slice(2, -2)}</strong>;
              } else if (part.startsWith('*') && part.endsWith('*') && part.length > 2) {
                return <em key={`${lineIdx}-${partIdx}`} className="italic">{part.slice(1, -1)}</em>;
              } else if (part) {
                return <span key={`${lineIdx}-${partIdx}`}>{part}</span>;
              }
              return null;
            })}
          </div>
        );
      })}
    </>
  );
};
