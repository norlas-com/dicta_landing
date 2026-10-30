# Adding a blog post (no coding needed)

Posts are plain text files in GitHub. You can add one from the browser.

## Steps

1. Open the repository on GitHub and go to `src/content/blog/`.
2. Open the folder of the language you are writing in: `uz`, `ru`, `en` or `ar`.
3. Click **Add file > Create new file**.
4. Name it `<slug>.md`, for example `zoom-yozuv-qollanma.md`. Use lowercase Latin letters, digits and dashes only.
5. Paste the template below, fill it in, and write the article under it.
6. Click **Commit changes**. Choose **Create a new branch** and open a pull request if you want a review before it goes live; committing straight to `main` publishes it after the next deploy.

## Template

```md
---
title: "Article title (this is the page headline, shown in Google)"
description: "One or two sentences, up to 200 characters. Shown in search results."
date: 2026-11-02
lang: uz
slug: zoom-yozuv-qollanma
translationKey: zoom-guide
topic: guides
tags: [bot, zoom]
---

Intro paragraph.

## First section heading

Text. **Bold**, [a link](/download), lists:

- one
- two
```

## What each field means

| Field | Rule |
|---|---|
| `title` | Put it in quotes. Do not repeat it as a `#` heading in the body. |
| `description` | Max 200 characters. |
| `date` | `YYYY-MM-DD`. Newest posts are listed first. |
| `lang` | `uz`, `ru`, `en` or `ar`. Must match the folder. |
| `slug` | The URL: `/blog/<slug>`. Latin, lowercase, dashes. Must be **unique across all languages**, so give each language its own slug (put a keyword in it). |
| `translationKey` | Any short label. Use the SAME value in every language version of one article; this links them ("also available in", hreflang for Google). |
| `topic` | Required. One of `comparisons`, `guides`, `education` (list in `src/lib/blog-topics.ts`, labels in `src/i18n/pages/blog.ts`). Files the post under `/blog/topic/<topic>/` and the chips on the blog index. To add a topic, add it in both places. |
| `tags` | Optional. Related posts prefer the same topic, then shared tags. |
| `updated` | Optional date, shown when you revise an old post. |
| `cover` | Optional image path, e.g. `/og/meeting.png` (file must exist in `public/`). |
| `draft` | `true` hides the post everywhere. |

## Writing tips

- Use `##` for section headings and `###` for sub-sections. Never `#`.
- 700 to 1000 words works well. Reading time is calculated automatically.
- Link to other pages with relative paths such as `/download` or `/faq` (add `/ru` or `/en` for those languages).
- Do not invent features, prices or customers. Check facts with the product team.
- Which posts appear where: dicta.uz shows `uz`, `ru`, `en`; dicta.live shows `en`, `ar`, `ru`. A post in a language a site does not ship is simply not published there.

## Checking your post

The build fails with a clear message if a field is missing or wrong (for example a description over 200 characters). Check the failed run in the GitHub **Actions** tab or the Cloudflare Pages build log.
