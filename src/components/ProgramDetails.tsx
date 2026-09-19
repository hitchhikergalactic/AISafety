import React from 'react';

export interface ProgramDetailRow {
  label: string;
  value: string;
}

interface ProgramDetailsProps {
  title: string;
  rows: readonly ProgramDetailRow[];
  // Muestra el título encima de las filas; si es false queda solo para lectores de pantalla.
  showTitle?: boolean;
  className?: string;
}

// Bloque "Detalles del programa": filas de etiqueta y valor. Lo comparten la portada y la página de Valencia.
const ProgramDetails: React.FC<ProgramDetailsProps> = ({ title, rows, showTitle = true, className = '' }) => (
  <table className={`w-full font-sans text-sm ${className}`}>
    <caption
      className={
        showTitle
          ? 'mb-2 text-left font-sans text-sm font-bold text-secundarios-dark dark:text-secundarios-light'
          : 'sr-only'
      }
    >
      {title}
    </caption>
    <tbody>
      {rows.map(({ label, value }) => (
        <tr key={label} className="border-t border-secundarios-dark/10 dark:border-secundarios-light/10">
          <th
            scope="row"
            className="py-2 pr-4 text-left align-top font-semibold whitespace-nowrap text-secundarios-dark dark:text-secundarios-light"
          >
            {label}
          </th>
          <td className="py-2 text-right align-top text-secundarios-dark/70 dark:text-secundarios-light/70">{value}</td>
        </tr>
      ))}
    </tbody>
  </table>
);

export default ProgramDetails;
