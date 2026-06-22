import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const products = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/products' }),
  schema: z.object({
    title: z.string(),
    sku: z.string(),
    pdf: z.string().optional(),
    model: z.string().optional(),
    renders: z.array(z.string()).default([]),
  }),
});

export const collections = { products };
