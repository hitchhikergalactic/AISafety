// Genera las pegatinas de iaS listas para imprenta en marca/pegatinas/.
// Uso: node scripts/pegatinas.mjs   (desde la raíz del repo; necesita Playwright y conexión para la fuente Overpass)
//
// Cada pegatina sale en dos archivos:
//   - <nombre>.pdf: archivo de imprenta, vectorial, al tamaño final más 2 mm de sangrado por cada lado.
//   - <nombre>-prueba.png: vista previa con la línea de corte discontinua, solo para revisar (no se manda a imprenta).
// Los logos son los SVG oficiales de src/assets (texto ya convertido a trazados), así que no dependen de fuentes.
// Colores del kit de marca: principal #ff4500, gris oscuro #333, claro #f2f2f2.
import { chromium } from 'playwright';
import { readFileSync, mkdirSync } from 'node:fs';

const SANGRADO = 2; // mm por cada lado
const SALIDA = 'marca/pegatinas';

const svg = (archivo) =>
  readFileSync(`src/assets/${archivo}`, 'utf8').replace(/<\?xml[^>]*\?>/, '').replace(/id="logos"/, '');

const leyendaColor = svg('logo_color_con_leyenda.svg');
const leyendaBlanco = svg('logo_blanco_con_leyenda.svg');

// Logo con leyenda y, debajo, la web; en blanco, para fondos de color. Medidas pensadas para un círculo de 50 mm
const circuloConWeb = (logo) => `<div style="display:flex;flex-direction:column;align-items:center;margin-top:2mm">
    <div style="width:38mm">${logo}</div>
    <div style="margin-top:1.5mm;font:800 4.2mm/1 Overpass,sans-serif;color:#fff;letter-spacing:0.02em">aisafety.es</div>
  </div>`;

// ancho y alto: tamaño final en mm (sin sangrado). forma: 'rect' (esquinas de radio `radio` mm) o 'circulo'.
const pegatinas = [
  {
    nombre: '01-logo-con-leyenda-blanco',
    ancho: 80, alto: 45, forma: 'rect', radio: 4, fondo: '#ffffff',
    contenido: `<div style="display:flex;flex-direction:column;align-items:center">
        <div style="width:58mm">${leyendaColor}</div>
        <div style="margin-top:-2mm;font:800 5mm/1 Overpass,sans-serif;color:#ff4500;letter-spacing:0.02em">aisafety.es</div>
      </div>`,
  },
  // Todas llevan la leyenda y la web: un «iaS» suelto no le dice nada a quien no nos conoce
  {
    nombre: '02-circulo-naranja',
    ancho: 50, alto: 50, forma: 'circulo', fondo: '#ff4500',
    contenido: circuloConWeb(leyendaBlanco),
  },
  {
    nombre: '03-circulo-oscuro',
    ancho: 50, alto: 50, forma: 'circulo', fondo: '#333333',
    contenido: circuloConWeb(leyendaBlanco),
  },
  {
    nombre: '04-logo-y-web',
    ancho: 60, alto: 40, forma: 'rect', radio: 4, fondo: '#f2f2f2',
    contenido: `<div style="display:flex;flex-direction:column;align-items:center">
        <div style="width:44mm">${leyendaColor}</div>
        <div style="margin-top:1mm;font:800 5mm/1 Overpass,sans-serif;color:#333;letter-spacing:0.02em">aisafety.es</div>
      </div>`,
  },
];

const html = (p, prueba) => {
  const w = p.ancho + 2 * SANGRADO;
  const h = p.alto + 2 * SANGRADO;
  const radioCorte = p.forma === 'circulo' ? '50%' : `${p.radio}mm`;
  return `<!doctype html><html><head><meta charset="utf-8">
  <link href="https://fonts.googleapis.com/css2?family=Overpass:wght@800&display=block" rel="stylesheet">
  <style>
    @page { size: ${w}mm ${h}mm; margin: 0 }
    html, body { margin: 0; padding: 0 }
    .lienzo { position: relative; width: ${w}mm; height: ${h}mm; background: ${p.fondo}; overflow: hidden;
              display: flex; align-items: center; justify-content: center }
    .lienzo svg { display: block; width: 100%; height: auto }
    .corte { position: absolute; left: ${SANGRADO}mm; top: ${SANGRADO}mm; width: ${p.ancho}mm; height: ${p.alto}mm;
             border-radius: ${radioCorte}; box-sizing: border-box; border: 0.3mm dashed #0b0bf4 }
  </style></head><body>
  <div class="lienzo">${p.contenido}${prueba ? '<div class="corte"></div>' : ''}</div>
  </body></html>`;
};

mkdirSync(SALIDA, { recursive: true });
const navegador = await chromium.launch();
const pagina = await navegador.newPage({ deviceScaleFactor: 300 / 96 });
for (const p of pegatinas) {
  await pagina.setContent(html(p, false), { waitUntil: 'networkidle' });
  await pagina.evaluate(() => document.fonts.ready);
  await pagina.pdf({
    path: `${SALIDA}/${p.nombre}.pdf`,
    width: `${p.ancho + 2 * SANGRADO}mm`, height: `${p.alto + 2 * SANGRADO}mm`,
    printBackground: true, pageRanges: '1',
  });
  await pagina.setContent(html(p, true), { waitUntil: 'networkidle' });
  await pagina.evaluate(() => document.fonts.ready);
  await pagina.locator('.lienzo').screenshot({ path: `${SALIDA}/${p.nombre}-prueba.png` });
  console.log(`✓ ${p.nombre} (${p.ancho}×${p.alto} mm${p.forma === 'circulo' ? ', círculo' : ''})`);
}
await navegador.close();
