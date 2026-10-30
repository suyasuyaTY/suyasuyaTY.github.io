import { z, defineCollection } from "astro:content";
import { file, glob } from "astro/loaders";

const blog = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/blog" }),
  schema: ({ image }) =>
    z.object({
      createdAt: z.date(),
      updatedAt: z.date(),
      title: z.string(),
      description: z.string(),
      // 記事ページに表示する AI 要約。記事を書いた AI アプリで一緒に作る (必須)
      summary: z.string().min(1),
      // 記事ページのトップ画像。OGP 画像は全記事 /og/[slug].png を自動生成する
      thumbnail: image().optional(),
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

    // icon は src/icons/ のファイル名。darkIcon はダークモード時に差し替えるアイコン
    socials: z.array(
      z.object({
        href: z.string().url(),
        icon: z.string(),
        darkIcon: z.string().optional(),
      }),
    ),

    hobbys: z.array(z.string()),

    skills: z.array(
      z.object({
        category: z.string(),
        items: z.array(z.string()),
      }),
    ),

    achievements: z.array(
      z.object({
        title: z.string(),
        date: z.string(),
        category: z.enum(["IT", "英語"]),
      }),
    ),

    experiences: z.array(
      z.object({
        title: z.string(),
        subTitle: z.string(),
        description: z.string(),
        date: z.string(),
        category: z.enum(["仕事", "学業"]),
        href: z.string().url().optional(),
      }),
    ),
  }),
});

const links = defineCollection({
  loader: file("./src/content/links/friends.yaml"),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      url: z.string().url(),
      description: z.string().optional(),
      creator: z.string(),
      image: image(),
      darkImage: image().optional(),
    }),
});

// Expose your defined collection to Astro
// with the `collections` export

export const collections = { blog, profiles, links };
