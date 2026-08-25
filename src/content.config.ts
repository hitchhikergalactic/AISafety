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

export const collections = {
  papers: papersCollection,
};
