import { defineCollection, z } from 'astro:content';

const classes = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    date: z.date(),
    goal: z.string(),
    whatWeBuilt: z.string().optional(),
    keyConcepts: z.array(z.string()).optional(),
    codeLinks: z.array(z.object({
      label: z.string(),
      url: z.string(),
    })).optional(),
    commonMistakes: z.array(z.string()).optional(),
    practice: z.string().optional(),
  }),
});

const assignments = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    dueDate: z.date(),
    description: z.string(),
  }),
});

export const collections = {
  classes,
  assignments,
};
