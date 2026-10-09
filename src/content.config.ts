import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const papersCollection = defineCollection({
  loader: glob({ pattern: '**/[^_]*.{md,mdx}', base: "./src/content/papers" }),
  schema: z.object({
    title: z.string(),
    summary: z.string(),
    originalAuthors: z.array(z.string()),
    writtenBy: z.string(),
    authorBio: z.string().optional(),
    translatedBy: z.string().optional(),
    originalPaperUrl: z.string().url(),
    traslationPaperUrl: z.string().optional(),
    translationNote: z.string().optional(),
    summaryNote: z.string().optional(),
    keywords: z.array(z.string()).default([]),
    publishDate: z.string().or(z.date()).transform((val) => new Date(val)),
    image: z.string().optional(),
  }),
});

const papersEnCollection = defineCollection({
  loader: glob({ pattern: '**/[^_]*.{md,mdx}', base: "./src/content/papers-en" }),
  schema: z.object({
    title: z.string(),
    summary: z.string(),
    originalAuthors: z.array(z.string()),
    writtenBy: z.string(),
    authorBio: z.string().optional(),
    translatedBy: z.string().optional(),
    originalPaperUrl: z.string().url(),
    traslationPaperUrl: z.string().optional(),
    translationNote: z.string().optional(),
    summaryNote: z.string().optional(),
    keywords: z.array(z.string()).default([]),
    publishDate: z.string().or(z.date()).transform((val) => new Date(val)),
    image: z.string().optional(),
  }),
});

const visionCollection = defineCollection({
  loader: glob({ pattern: '*.md', base: './src/content/vision' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
  }),
});

const misionCollection = defineCollection({
  loader: glob({ pattern: '*.md', base: './src/content/mision' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
  }),
});

const teoriaDelCambioCollection = defineCollection({
  loader: glob({ pattern: '*.md', base: './src/content/teoria-del-cambio' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    canonical: z.string().url(),
  }),
});

const cookiesCollection = defineCollection({
  loader: glob({ pattern: '*.md', base: './src/content/cookies' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
  }),
});

const queEsLaSeguridadDeLaIaCollection = defineCollection({
  loader: glob({ pattern: '*.md', base: './src/content/que-es-la-seguridad-de-la-ia' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    canonical: z.string().url(),
  }),
});

const privacidadCollection = defineCollection({
  loader: glob({ pattern: '*.md', base: './src/content/privacidad' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
  }),
});

const avisoLegalCollection = defineCollection({
  loader: glob({ pattern: '*.md', base: './src/content/aviso-legal' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
  }),
});

export const collections = {
  papers: papersCollection,
  papersEn: papersEnCollection,
  mision: misionCollection,
  vision: visionCollection,
  teoriaDelCambio: teoriaDelCambioCollection,
  cookies: cookiesCollection,
  queEsLaSeguridadDeLaIa: queEsLaSeguridadDeLaIaCollection,
  privacidad: privacidadCollection,
  avisoLegal: avisoLegalCollection,
};
