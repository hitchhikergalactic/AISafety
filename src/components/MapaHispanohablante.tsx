// Mapa de los 21 países con el español como lengua oficial.
// Datos: Natural Earth 1:110m (dominio público), proyección equirectangular recortada a América, España y Guinea Ecuatorial.
// Generado una vez a src/data/mapa-hispanohablante.json; los colores salen de los tokens de la marca.
import mapa from '@data/mapa-hispanohablante.json';

interface Props {
    titulo: string;
}

export default function MapaHispanohablante({ titulo }: Props) {
    return (
        <svg
            viewBox={`0 0 ${mapa.w} ${mapa.h}`}
            role="img"
            aria-label={titulo}
            className="w-full h-full"
            preserveAspectRatio="xMidYMid meet"
        >
            <title>{titulo}</title>
            {/* Resto del mundo, muy suave, para que los 21 países destaquen */}
            <g className="fill-secundarios-dark/[0.07] dark:fill-white/10 stroke-white dark:stroke-secundarios-dark">
                {mapa.paises.filter((p) => !p.es).map((p) => (
                    <path key={p.id} d={p.d} fillRule="evenodd" strokeWidth={0.6} strokeLinejoin="round" />
                ))}
            </g>
            {/* Países hispanohablantes encima, con sombra naranja */}
            <g className="fill-principal stroke-white dark:stroke-secundarios-dark drop-shadow-md drop-shadow-principal/40">
                {mapa.paises.filter((p) => p.es).map((p) => (
                    <path key={p.id} d={p.d} fillRule="evenodd" strokeWidth={0.6} strokeLinejoin="round" />
                ))}
            </g>
        </svg>
    );
}
