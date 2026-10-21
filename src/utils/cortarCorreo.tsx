import React from 'react';

// Permite que un correo largo salte de línea justo después de la «@» en columnas estrechas
// (pie y tarjetas de contacto), en vez de partirse por cualquier letra.
export const cortarCorreo = (texto: string): React.ReactNode => {
  const i = texto.indexOf('@');
  if (i === -1) return texto;
  return (
    <>
      {texto.slice(0, i + 1)}
      <wbr />
      {texto.slice(i + 1)}
    </>
  );
};
