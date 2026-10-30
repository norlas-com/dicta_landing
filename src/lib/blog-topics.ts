// The sections a blog post can be filed under, in chip order. Kept free of
// astro:content imports so content.config.ts can use it for the schema enum.
// Labels per locale live in src/i18n/pages/blog.ts (`topics`).
export const TOPICS = ["comparisons", "guides", "education"] as const;
export type Topic = (typeof TOPICS)[number];
