import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

// Blog posts live in src/content/blog/<lang>/<slug>.md (see docs/blog-authoring.md).
// `slug` becomes the entry id, so it must be unique across ALL languages; use a
// Latin, keyword-bearing slug per language. `translationKey` ties the language
// versions of one article together (hreflang + the "also available in" links).
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
    tags: z.array(z.string()).default([]),
    cover: z.string().optional(),
    coverAlt: z.string().optional(),
    draft: z.boolean().default(false),
  }),
});

export const collections = { blog };
