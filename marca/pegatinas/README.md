# Pegatinas de iaS

Archivos listos para mandar a imprenta. Se generan con `node scripts/pegatinas.mjs` desde la raíz del repo, a partir de los logos oficiales de `src/assets`.

| Archivo | Tamaño final | Forma de corte | Fondo |
|---|---|---|---|
| `01-logo-con-leyenda-blanco.pdf` | 80 × 45 mm | Rectángulo, esquinas de 4 mm | Blanco |
| `02-circulo-naranja.pdf` | Ø 50 mm | Círculo | Naranja de la marca |
| `03-circulo-oscuro.pdf` | Ø 50 mm | Círculo | Gris oscuro |
| `04-logo-y-web.pdf` | 60 × 40 mm | Rectángulo, esquinas de 4 mm | Gris claro |

Todas dicen qué es iaS (la leyenda «Hub de seguridad de la IA») y dónde encontrarnos (aisafety.es): quien vea la pegatina en un portátil ajeno tiene que poder entenderla y buscarnos.

## Qué decirle a la imprenta

- **Sangrado:** cada PDF mide el tamaño final más **2 mm por lado** (por ejemplo, el círculo de 50 mm va en una página de 54 × 54 mm). El fondo llega hasta el borde para que el corte no deje filos blancos.
- **Corte:** la forma y el tamaño de la tabla. No hay línea de corte dentro del PDF: se elige en el configurador de la imprenta (círculo o rectángulo con esquinas redondeadas). Los `-prueba.png` muestran por dónde va el corte, en azul discontinuo, solo para revisar.
- **Vectorial:** los logos y el texto son vectoriales y la fuente (Overpass) va incrustada, así que se imprimen nítidos a cualquier tamaño.
- **Color:** los PDF están en RGB. El naranja de la marca queda fuera de lo que se puede imprimir en CMYK y suele salir algo más apagado, así que conviene pedir **prueba de color** antes de la tirada completa (o pedir que lo igualen a un Pantone naranja cercano).
- **Material recomendado:** vinilo blanco con laminado mate, resistente al agua, para portátiles y botellas.

## Cambiar o añadir pegatinas

Las medidas, los colores y el contenido de cada pegatina están en la lista `pegatinas` de `scripts/pegatinas.mjs`. Tras cambiarla, se vuelve a ejecutar el script y se sobrescriben los archivos.
