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
            {mapa.paises.map((p) => (
                <path
                    key={p.id}
                    d={p.d}
                    fillRule="evenodd"
                    strokeWidth={0.6}
                    strokeLinejoin="round"
                    className={
                        p.es
                            ? 'fill-principal stroke-secundarios-light dark:stroke-secundarios-dark'
                            : 'fill-secundarios-dark/15 dark:fill-white/15 stroke-secundarios-light dark:stroke-secundarios-dark'
                    }
                />
            ))}
        </svg>
    );
}
