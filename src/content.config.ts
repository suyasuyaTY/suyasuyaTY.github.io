import { z, defineCollection } from "astro:content";

const blog = defineCollection({
  type: "content",
  schema: z.object({
    createdAt: z.date(),
    updatedAt: z.date(),
    title: z.string(),
    thumbnail: z.string(),
    category: z.string(),
    tags: z.array(z.string()),
  }),
});

// Expose your defined collection to Astro
// with the `collections` export

export const collections = { blog };
