# AISafety

Sitio web de **AI safety España**: un proyecto en español sobre seguridad de IA, formación, comunidad, eventos entro otros. El sitio está orientado a informar,formar, conectar a personas interesadas en el tema y publicar contenido bilingüe en español e inglés.

## Qué ofrece el proyecto

- Página principal con propuesta de valor y llamadas a la acción.
- Sección de equipo y página de “qué hacemos”.
- Hub del seminario Bluedot con listado de charlas y páginas de detalle.
- Versión en español e inglés con rutas separadas.
- SEO técnico básico: canonical dinámico, `hreflang`, sitemap y redirecciones para URLs antiguas.

## Aspectos técnicos

El sitio está construido con **Astro** y componentes **React**. La configuración incluye integración con `@astrojs/react`, `@astrojs/sitemap` y una capa de hardening para despliegue en Vercel mediante `vercel.json`.

Puntos técnicos relevantes:

- Rutas públicas en kebab-case.
- SEO por página con canonical dinámico.
- Etiquetas `hreflang` para ES/EN.
- Cabeceras de seguridad HTTP configuradas en Vercel.
- Uso de recursos externos como Google Fonts, Umami y servicios de registro/inscripción.

## Estructura principal

```text
/
├── public/                # Archivos estáticos y sitemap
├── src/
│   ├── components/        # UI reutilizable y secciones
│   ├── data/              # Contenido estructurado
│   ├── layouts/           # Layout global
│   ├── pages/             # Rutas del sitio
│   ├── locales/           # Traducciones
│   └── styles/            # Estilos globales
├── vercel.json            # Redirects y cabeceras de seguridad
└── package.json
```

## Comandos

Todos los comandos se ejecutan desde la raíz del proyecto:

| Comando | Acción |
| :-- | :-- |
| `npm install` | Instala dependencias |
| `npm run dev` | Inicia el servidor local de desarrollo |
| `npm run build` | Genera el sitio de producción en `dist/` |
| `npm run preview` | Previsualiza el build localmente |
| `npm run astro ...` | Ejecuta comandos del CLI de Astro |

## Despliegue

El proyecto está preparado para desplegarse en Vercel. Los redirects y cabeceras de seguridad se gestionan desde `vercel.json`.
