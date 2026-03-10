import { defineCollection, z } from 'astro:content';

const projects = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    industry: z.string(),
    problem: z.string(),
    approach: z.string(),
    impact: z.string(),
    year: z.number(),
    order: z.number().optional(),
  }),
});

const articles = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    publishDate: z.date(),
    tags: z.array(z.string()),
    draft: z.boolean().optional(),
  }),
});

const notes = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    publishDate: z.date(),
    tags: z.array(z.string()),
    draft: z.boolean().optional(),
  }),
});

const research = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    year: z.number(),
    type: z.enum(['Working Paper', 'Discussion Paper', 'Report']),
    preparedFor: z.string(),
    summary: z.string(),
    pdfUrl: z.string().optional(),
    draft: z.boolean().optional(),
  }),
});

const newsletters = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    frequency: z.string(),
    active: z.boolean(),
  }),
});

export const collections = {
  projects,
  articles,
  notes,
  research,
  newsletters,
};
