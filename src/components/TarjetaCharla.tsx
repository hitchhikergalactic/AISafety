import React from 'react';
import { Charla } from '../data/charlas';

interface TarjetaCharlaProps {
  charla: Charla;
  onHover?: () => void;
  onClick?: () => void;
}

/**
 * Componente que dibuja una tarjeta individual de charla
 */
const TarjetaCharla: React.FC<TarjetaCharlaProps> = ({ charla, onHover, onClick }) => {
  return (
    <div
      className="charla-card"
      onMouseEnter={onHover}
      onClick={onClick}
    >
      {/* Imagen del expositor */}
      {charla.expositor.imagen && (
        <div className="charla-image">
          <img src={charla.expositor.imagen} alt={charla.expositor.nombre} />
        </div>
      )}

      {/* Contenido de la charla */}
      <div className="charla-content">
        {/* Tag */}
        {charla.tags && charla.tags.length > 0 && (
          <div className="charla-tags">
            {charla.tags.map((tag) => (
              <span key={tag} className="charla-tag">
                {tag}
              </span>
            ))}
          </div>
        )}

        {/* Título */}
        <h3 className="charla-title">{charla.titulo}</h3>

        {/* Descripción */}
        <p className="charla-description">{charla.descripcion}</p>

        {/* Info del expositor */}
        <div className="charla-expositor">
          <p className="expositor-nombre">
            {charla.expositor.nombre} {charla.expositor.apellido}
          </p>
          <p className="expositor-titulo">{charla.expositor.titulo}</p>
        </div>

        {/* Metadata */}
        <div className="charla-metadata">
          {charla.fecha && <span className="metadata-fecha">{charla.fecha}</span>}
        </div>
      </div>
    </div>
  );
};

export default TarjetaCharla;
