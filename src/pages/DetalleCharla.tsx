import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { translations } from '../locales/translations';
import Navbar from '../components/Navbar';
import { listaDeCharlas, Charla } from '../data/charlas';

type Language = 'es' | 'en';
type Theme = 'light' | 'dark';

interface DetalleCharlaProps {
  lang: Language;
  setLang: (lang: Language) => void;
  theme: Theme;
  setTheme: (theme: Theme) => void;
}

/**
 * Página: aisafety.es/seminario-bluedot-spain/{charla-id}
 * Muestra el detalle completo de una charla y su expositor
 */
const DetalleCharla: React.FC<DetalleCharlaProps> = ({ lang, setLang, theme, setTheme }) => {
  const { charlaId } = useParams<{ charlaId: string }>();
  const navigate = useNavigate();
  const t = translations[lang];
  const [charla, setCharla] = useState<Charla | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (charlaId) {
      const encontrada = listaDeCharlas.find((c) => c.id === charlaId);
      setCharla(encontrada || null);
    } else {
      setCharla(listaDeCharlas[0] || null);
    }
    setLoading(false);
  }, [charlaId]);

  if (loading) {
    return <div>Cargando...</div>;
  }

  if (!charla) {
    return <div>Charla no encontrada</div>;
  }

  const { expositor } = charla;

  return (
    <>
      <Navbar lang={lang} setLang={setLang} theme={theme} setTheme={setTheme} t={t} />
      <div className="detalle-charla-page">
      {/* Hero con imagen de fondo */}
      <section className="detalle-hero">
        {charla.expositor.imagen && (
          <img
            src={charla.expositor.imagen}
            alt={charla.titulo}
            className="detalle-hero-image"
          />
        )}
        <div className="detalle-hero-overlay">
          <h1>{charla.titulo}</h1>
        </div>
      </section>

      {/* Contenido principal */}
      <section className="detalle-content">
        {/* Información de la charla */}
        <div className="detalle-main">
          {/* Descripción */}
          <div className="detalle-descripcion">
            <h2>Sobre esta charla</h2>
            <p>{charla.descripcion}</p>
          </div>

          {/* Contenido completo */}
          {charla.contenidoCompleto && (
            <div className="detalle-contenido-completo">
              <h2>Contenido</h2>
              <p>{charla.contenidoCompleto}</p>
            </div>
          )}

          {/* Metadata */}
          <div className="detalle-metadata">
            <h3>Detalles</h3>
            {charla.fecha && <p>Fecha: {charla.fecha}</p>}
            {charla.hora && <p>Hora: {charla.hora}</p>}
            {charla.duracion && <p>Duración: {charla.duracion} minutos</p>}
            {charla.ubicacion && <p>Ubicación: {charla.ubicacion}</p>}
          </div>

          {/* Tags */}
          {charla.tags && charla.tags.length > 0 && (
            <div className="detalle-tags">
              <h3>Temas</h3>
              <div className="tags-container">
                {charla.tags.map((tag) => (
                  <span key={tag} className="tag">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Sidebar con info del expositor */}
        <aside className="detalle-sidebar">
          {/* Card del expositor */}
          <div className="expositor-card">
            {expositor.imagen && (
              <img src={expositor.imagen} alt={expositor.nombre} />
            )}
            <h3>
              {expositor.nombre} {expositor.apellido}
            </h3>
            <p className="expositor-titulo">{expositor.titulo}</p>
            <p className="expositor-descripcion">{expositor.descripcion}</p>

            {/* Bio */}
            {expositor.bio && (
              <div className="expositor-bio">
                <h4>Bio</h4>
                <p>{expositor.bio}</p>
              </div>
            )}

            {/* Social links */}
            <div className="expositor-social">
              {expositor.linkedin && (
                <a href={expositor.linkedin} target="_blank" rel="noopener noreferrer">
                  LinkedIn
                </a>
              )}
              {expositor.twitter && (
                <a href={expositor.twitter} target="_blank" rel="noopener noreferrer">
                  Twitter
                </a>
              )}
              {expositor.email && (
                <a href={`mailto:${expositor.email}`}>Email</a>
              )}
            </div>
          </div>

          {/* CTA */}
          <div className="detalle-cta">
            <button className="btn-registrarse">Registrarse a la charla</button>
          </div>
        </aside>
      </section>

      {/* Charlas relacionadas */}
      <section className="detalle-relacionadas">
        <h2>Otras charlas del seminario</h2>
        {/* Grid de charlas relacionadas */}
      </section>
      </div>
    </>
  );
};

export default DetalleCharla;
