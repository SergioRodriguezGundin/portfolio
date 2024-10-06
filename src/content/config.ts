import { defineCollection, z } from 'astro:content';

const projectsCollection = defineCollection({
  type: 'data',
  schema: z.object({
    id: z.string(),
    sortOrder: z.number(),
    title: z.string(),
    company: z.string(),
    logo: z.string(),
    description: z.string(),
    milestones: z.array(z.object({
      images: z.array(z.string()).optional(),
      title: z.string(),
      description: z.string(),
    })),
    stack: z.array(z.object({
      name: z.string(),
      icon: z.string(),
    })),
    url: z.string().url(),
    colors: z.object({
      'project-primary': z.string(),
    }),
    background: z.string(),
  }),
});

const journeyCollection = defineCollection({
  type: 'data',
  schema: z.object({
    id: z.string(),
    sortOrder: z.number(),
    jobPosition: z.string(),
    company: z.string(),
    period: z.string(),
    url: z.string().url(),
    color: z.string(),
  }),
});

export const collections = {
  projects: projectsCollection,
  journey: journeyCollection,
};