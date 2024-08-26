import { defineCollection, z } from 'astro:content';

const projectsCollection = defineCollection({
  type: 'data',
  schema: z.object({
    sortOrder: z.number(),
    title: z.string(),
    description: z.string(),
    images: z.array(z.string()),
    company: z.string(),
    milestones: z.array(z.string()),
    stack: z.array(z.object({
      name: z.string(),
      icon: z.string(),
    })),
    url: z.string().url(),
    color: z.string(),
  }),
});

export const collections = {
  projects: projectsCollection,
};