// Plugin HAST de Sätteri (el procesador de Markdown de Astro 7) para los documentos fundacionales
// (src/content/vision/ y src/content/teoria-del-cambio/).
// Se ejecuta al compilar, así que el HTML servido ya lo lleva, y solo actúa sobre esos archivos: no afecta a los
// papers ni a ningún otro Markdown.
//
//  1. El "# Título" del archivo pasa a <h2 class="doc-title">: la página ya tiene su único <h1> en la cabecera.
//  2. Las tablas se envuelven en un contenedor con scroll horizontal (en móvil no desbordan la página).
//  3. Los enlaces externos se abren en una pestaña nueva.
//  4. "BlueDot Impact" va en <strong class="font-bold">, el mismo elemento que los ** manuales del resto del sitio.
//     Es idempotente: no vuelve a envolver lo que ya está dentro de <strong> o <b>.

const BRAND = 'BlueDot Impact';

const isVisionFile = (ctx) => /[\\/]content[\\/](vision|teoria-del-cambio)[\\/]/.test(ctx.fileURL?.pathname ?? '');

const escapeHtml = (text) => text.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');

// ¿Algún ancestro es <strong> o <b>?
function insideBold(node, ctx) {
  for (let p = ctx.parent(node); p; p = ctx.parent(p)) {
    if (p.type === 'element' && (p.tagName === 'strong' || p.tagName === 'b')) return true;
  }
  return false;
}

export const hastVision = {
  name: 'vision-document',

  element: [
    {
      filter: ['h1'],
      visit(node, ctx) {
        if (!isVisionFile(ctx)) return;
        ctx.replaceNode(node, {
          type: 'element',
          tagName: 'h2',
          properties: { ...node.properties, className: ['doc-title'] },
          children: node.children,
        });
      },
    },
    {
      filter: ['table'],
      visit(node, ctx) {
        if (!isVisionFile(ctx)) return;
        ctx.wrapNode(node, {
          type: 'element',
          tagName: 'div',
          properties: { className: ['table-wrap'], tabIndex: 0 },
          children: [],
        });
      },
    },
    {
      filter: ['a'],
      visit(node, ctx) {
        if (!isVisionFile(ctx)) return;
        const href = node.properties?.href;
        if (typeof href === 'string' && /^https?:\/\//.test(href)) {
          ctx.setProperty(node, 'target', '_blank');
          ctx.setProperty(node, 'rel', 'noopener noreferrer');
        }
      },
    },
  ],

  text(node, ctx) {
    if (!isVisionFile(ctx) || !node.value.includes(BRAND) || insideBold(node, ctx)) return;
    const html = node.value
      .split(BRAND)
      .map(escapeHtml)
      .join(`<strong class="font-bold">${BRAND}</strong>`);
    ctx.replaceNode(node, { type: 'raw', value: html });
  },
};
