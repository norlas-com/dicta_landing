import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";
import { TOPICS } from "./lib/blog-topics";

// Blog posts live in src/content/blog/<lang>/<slug>.md (see docs/blog-authoring.md).
// `slug` becomes the entry id, so it must be unique across ALL languages; use a
// Latin, keyword-bearing slug per language. `translationKey` ties the language
// versions of one article together (hreflang + the "also available in" links).
// `topic` is the one section a post is filed under (/blog/topic/<topic>); the
// list lives in src/lib/blog-topics.ts so the index chips and routes share it.
const blog = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/blog" }),
  schema: z.object({
    title: z.string(),
    description: z.string().max(200),
    date: z.coerce.date(),
    updated: z.coerce.date().optional(),
    lang: z.enum(["uz", "ru", "en", "ar"]),
    slug: z.string().regex(/^[a-z0-9]+(-[a-z0-9]+)*$/, "lowercase latin letters, digits and dashes only"),
    translationKey: z.string(),
    topic: z.enum(TOPICS),
    tags: z.array(z.string()).default([]),
    cover: z.string().optional(),
    coverAlt: z.string().optional(),
    draft: z.boolean().default(false),
  }),
});

export const collections = { blog };
