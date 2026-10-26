import { getCollection, type CollectionEntry } from "astro:content";
import { LOCALES, type Locale } from "../i18n/locales";
import { localePath } from "../i18n/utils";

export type Post = CollectionEntry<"blog">;

/** Published posts of one language, newest first. Empty (never throws) when a locale has none. */
export async function postsFor(locale: Locale): Promise<Post[]> {
  const all = await getCollection("blog", (p) => !p.data.draft && p.data.lang === locale);
  return all.sort((a, b) => b.data.date.valueOf() - a.data.date.valueOf());
}

/** Every published post in a language THIS build ships (dicta.live drops uz). */
export async function sitePosts(): Promise<Post[]> {
  const all = await getCollection(
    "blog",
    (p) => !p.data.draft && (LOCALES as readonly string[]).includes(p.data.lang),
  );
  return all.sort((a, b) => b.data.date.valueOf() - a.data.date.valueOf());
}

export function postPath(post: Post): string {
  return localePath(`/blog/${post.data.slug}`, post.data.lang);
}

/** The other-language versions of a post that this build ships. */
export async function translationsOf(post: Post): Promise<Partial<Record<Locale, Post>>> {
  const out: Partial<Record<Locale, Post>> = {};
  for (const p of await sitePosts()) {
    if (p.data.translationKey === post.data.translationKey) out[p.data.lang] = p;
  }
  return out;
}

/** Same-language posts, most shared tags first, then newest. */
export async function relatedPosts(post: Post, limit = 3): Promise<Post[]> {
  const tags = new Set(post.data.tags);
  return (await postsFor(post.data.lang))
    .filter((p) => p.id !== post.id)
    .map((p) => ({ p, score: p.data.tags.filter((t) => tags.has(t)).length }))
    .sort((a, b) => b.score - a.score || b.p.data.date.valueOf() - a.p.data.date.valueOf())
    .slice(0, limit)
    .map((x) => x.p);
}

/** Whole minutes to read, at ~200 wpm (180 for Arabic). Never below 1. */
export function readingMinutes(body: string | undefined, locale: Locale): number {
  const words = (body ?? "")
    .replace(/```[\s\S]*?```/g, " ")
    .replace(/[#>*_`|\-\[\]()]/g, " ")
    .split(/\s+/)
    .filter(Boolean).length;
  return Math.max(1, Math.round(words / (locale === "ar" ? 180 : 200)));
}

export function formatDate(d: Date, locale: Locale): string {
  const tag = { uz: "uz-UZ", ru: "ru-RU", en: "en-US", ar: "ar" }[locale];
  try {
    return d.toLocaleDateString(tag, { year: "numeric", month: "long", day: "numeric", timeZone: "UTC" });
  } catch {
    return d.toISOString().slice(0, 10);
  }
}
