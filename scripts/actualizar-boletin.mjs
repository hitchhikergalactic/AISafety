// Guarda en src/data/ultimo-boletin.json el titular y el enlace de la última entrega del boletín.
// Lo ejecuta cada día .github/workflows/actualizar-boletin.yml; si falla, el archivo se queda como estaba.
import { readFileSync, writeFileSync } from 'node:fs';

const FEED = 'https://seguridaddelaia.substack.com/feed';
const BASE_ENTREGA = 'https://seguridaddelaia.substack.com/p/';
const DESTINO = new URL('../src/data/ultimo-boletin.json', import.meta.url);

// Substack responde 403 a las máquinas de GitHub, así que allí se lee a través de rss2json.
const leerFeedDirecto = async () => {
  const respuesta = await fetch(FEED, { headers: { 'User-Agent': 'Mozilla/5.0 (aisafety.es)' } });
  if (!respuesta.ok) throw new Error(`El feed respondió ${respuesta.status}`);
  const entrega = (await respuesta.text()).match(/<item>[\s\S]*?<\/item>/)?.[0];
  const leer = (etiqueta) =>
    entrega?.match(new RegExp(`<${etiqueta}>(?:<!\\[CDATA\\[)?([\\s\\S]*?)(?:\\]\\]>)?</${etiqueta}>`))?.[1].trim();
  return { title: leer('title'), link: leer('link') };
};

const leerFeedIntermediario = async () => {
  const respuesta = await fetch(`https://api.rss2json.com/v1/api.json?rss_url=${encodeURIComponent(FEED)}`);
  if (!respuesta.ok) throw new Error(`rss2json respondió ${respuesta.status}`);
  const entrega = (await respuesta.json()).items?.[0];
  return { title: entrega?.title?.trim(), link: entrega?.link?.trim() };
};

const { title: tituloOriginal, link: url } = await leerFeedDirecto().catch((error) => {
  console.log(`${error.message}; se prueba con rss2json.`);
  return leerFeedIntermediario();
});
if (!tituloOriginal || !url?.startsWith(BASE_ENTREGA)) throw new Error('El feed no trae una entrega válida');

// «Semana iaS: la confianza…» o «Semana iaS · quién avisa…» pasa a ser solo el titular, con mayúscula inicial.
const sinPrefijo = tituloOriginal.replace(/^Semana iaS\s*[:·|.-]\s*/i, '').replace(/\.$/, '').trim();
const titulo = sinPrefijo.replace(/^[¿¡«"]*\p{L}/u, (inicio) => inicio.toLocaleUpperCase('es'));

const nuevo = `${JSON.stringify({ titulo, url }, null, 2)}\n`;
let actual = '';
try { actual = readFileSync(DESTINO, 'utf8'); } catch {}
if (nuevo === actual) {
  console.log('Sin entregas nuevas.');
} else {
  writeFileSync(DESTINO, nuevo);
  console.log(`Última entrega: ${titulo}`);
}
