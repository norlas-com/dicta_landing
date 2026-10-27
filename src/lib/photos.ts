// Stock photography for the home page scenes (Unsplash licence: free for
// commercial use, no attribution required). Astro fetches and re-encodes them
// at build time (astro.config `image.domains`), so visitors load them from
// dicta.uz, not from Unsplash. Swap any of these for real Premier footage
// when it exists; the components only need a URL and the intrinsic size.

const unsplash = (id: string) => `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=2000&q=80`;

export interface Photo {
  src: string;
  width: number;
  height: number;
}

export const PHOTOS = {
  /** Boardroom table mid-discussion: the offline-meeting scene. */
  boardroom: { src: unsplash("1542744173-8e7e53415bb0"), width: 2000, height: 1333 },
  /** Four people talking over a table, warm light: the conversation itself. */
  conversation: { src: unsplash("1543269865-cbf427effbad"), width: 2000, height: 1333 },
  /** A team around one laptop: the online/bot scene. */
  laptop: { src: unsplash("1531482615713-2afd69097998"), width: 2000, height: 1333 },
  /** A full lecture hall from behind the speaker: the audience scene. */
  auditorium: { src: unsplash("1544531586-fde5298cdd40"), width: 2000, height: 1333 },
} satisfies Record<string, Photo>;
