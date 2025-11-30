import { z, defineCollection } from "astro:content";
import { glob } from "astro/loaders";

const blog = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/blog" }),
  schema: ({ image }) =>
    z.object({
      createdAt: z.date(),
      updatedAt: z.date(),
      title: z.string(),
      thumbnail: image(),
      category: z.string(),
      tags: z.array(z.string()),
      draft: z.boolean().default(false),
    }),
});

const profiles = defineCollection({
  loader: glob({ pattern: "**/*.yaml", base: "./src/content/profiles" }),
  schema: z.object({
    name: z.string(),
    role: z.string(),
    bio: z.string(),

    hobbys: z.array(z.string()),

    skills: z.array(
      z.object({
        category: z.string(),
        items: z.array(z.string()),
      }),
    ),

    certifications: z.array(
      z.object({
        title: z.string(),
        date: z.string(),
      }),
    ),

    experiences: z.array(
      z.object({
        title: z.string(),
        subTitle: z.string(),
        description: z.string(),
        date: z.string(),
        category: z.enum(["職歴", "学歴"]),
        href: z.string().url().optional(),
      }),
    ),
  }),
});

// Expose your defined collection to Astro
// with the `collections` export

export const collections = { blog, profiles };
