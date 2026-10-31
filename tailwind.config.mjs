/**
 * Dicta design tokens, ported from the app (web/tailwind.config.ts and
 * web/DESIGN.md): warm paper + indigo ink, Literata display over Inter UI.
 * Colors resolve to CSS variables in src/styles/global.css; the `.light` /
 * `.dark` class on <html> drives the theme switch. No gradients: the old
 * violet → cyan brand gradient is retired.
 * @type {import('tailwindcss').Config}
 */
// Every colour goes through color-mix with <alpha-value> so opacity
// modifiers (bg-background/90, border-border/60) actually generate; with a
// bare var() Tailwind silently drops them and borders fall back to white.
export default {
  content: ["./src/**/*.{astro,html,js,jsx,ts,tsx,md,mdx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        background: "color-mix(in oklch, var(--color-background) calc(<alpha-value> * 100%), transparent)",
        surface: "color-mix(in oklch, var(--color-surface) calc(<alpha-value> * 100%), transparent)",
        "surface-2": "color-mix(in oklch, var(--color-surface-2) calc(<alpha-value> * 100%), transparent)",
        "surface-3": "color-mix(in oklch, var(--color-surface-3) calc(<alpha-value> * 100%), transparent)",
        border: "color-mix(in oklch, var(--color-border) calc(<alpha-value> * 100%), transparent)",
        "border-strong": "color-mix(in oklch, var(--color-border-strong) calc(<alpha-value> * 100%), transparent)",
        foreground: "color-mix(in oklch, var(--color-foreground) calc(<alpha-value> * 100%), transparent)",
        "foreground-soft": "color-mix(in oklch, var(--color-foreground-soft) calc(<alpha-value> * 100%), transparent)",
        muted: "color-mix(in oklch, var(--color-muted) calc(<alpha-value> * 100%), transparent)",
        "muted-soft": "color-mix(in oklch, var(--color-muted-soft) calc(<alpha-value> * 100%), transparent)",

        accent: {
          DEFAULT: "color-mix(in oklch, var(--color-accent) calc(<alpha-value> * 100%), transparent)",
          strong: "color-mix(in oklch, var(--color-accent-strong) calc(<alpha-value> * 100%), transparent)",
          soft: "color-mix(in oklch, var(--color-accent-soft) calc(<alpha-value> * 100%), transparent)",
          fg: "color-mix(in oklch, var(--color-accent-fg) calc(<alpha-value> * 100%), transparent)",
        },

        ink: {
          DEFAULT: "color-mix(in oklch, var(--color-ink) calc(<alpha-value> * 100%), transparent)",
          2: "color-mix(in oklch, var(--color-ink-2) calc(<alpha-value> * 100%), transparent)",
          line: "color-mix(in oklch, var(--color-ink-line) calc(<alpha-value> * 100%), transparent)",
          fg: "color-mix(in oklch, var(--color-ink-fg) calc(<alpha-value> * 100%), transparent)",
          muted: "color-mix(in oklch, var(--color-ink-muted) calc(<alpha-value> * 100%), transparent)",
          accent: "color-mix(in oklch, var(--color-ink-accent) calc(<alpha-value> * 100%), transparent)",
        },

        live: {
          DEFAULT: "color-mix(in oklch, var(--color-live) calc(<alpha-value> * 100%), transparent)",
          fg: "color-mix(in oklch, var(--color-live-fg) calc(<alpha-value> * 100%), transparent)",
        },
        danger: {
          DEFAULT: "color-mix(in oklch, var(--color-danger) calc(<alpha-value> * 100%), transparent)",
          strong: "color-mix(in oklch, var(--color-danger-strong) calc(<alpha-value> * 100%), transparent)",
          fg: "color-mix(in oklch, var(--color-danger-fg) calc(<alpha-value> * 100%), transparent)",
        },
        success: "color-mix(in oklch, var(--color-success) calc(<alpha-value> * 100%), transparent)",
        warning: "color-mix(in oklch, var(--color-warning) calc(<alpha-value> * 100%), transparent)",

        "platform-meet": "color-mix(in oklch, var(--color-platform-meet) calc(<alpha-value> * 100%), transparent)",
        "platform-zoom": "color-mix(in oklch, var(--color-platform-zoom) calc(<alpha-value> * 100%), transparent)",
        "platform-teams": "color-mix(in oklch, var(--color-platform-teams) calc(<alpha-value> * 100%), transparent)",
      },

      fontFamily: {
        // The Arabic face sits AFTER the Latin one in every stack, which is
        // all the conditional logic RTL needs: Inter and Literata have no
        // Arabic glyphs, so the browser falls through per-glyph.
        sans: [
          "var(--font-sans)",
          "var(--font-arabic)",
          "Inter",
          "ui-sans-serif",
          "system-ui",
          "-apple-system",
          "Segoe UI",
          "Roboto",
          "sans-serif",
        ],
        display: [
          "var(--font-serif)",
          "var(--font-arabic)",
          "Literata",
          "ui-serif",
          "Georgia",
          "Cambria",
          "Times New Roman",
          "serif",
        ],
        serif: ["var(--font-serif)", "var(--font-arabic)", "Literata", "ui-serif", "Georgia", "serif"],
        mono: ["ui-monospace", "SFMono-Regular", "Menlo", "monospace"],
      },

      fontSize: {
        "2xs": ["0.6875rem", { lineHeight: "1rem", letterSpacing: "0.01em" }],
        xs: ["0.8125rem", { lineHeight: "1.15rem" }],
        sm: ["0.875rem", { lineHeight: "1.35rem" }],
        base: ["0.9375rem", { lineHeight: "1.55rem" }],
        lg: ["1.0625rem", { lineHeight: "1.65rem" }],
        xl: ["1.25rem", { lineHeight: "1.75rem", letterSpacing: "-0.005em" }],
        "2xl": ["1.5625rem", { lineHeight: "2rem", letterSpacing: "-0.01em" }],
        "3xl": ["1.9375rem", { lineHeight: "2.3rem", letterSpacing: "-0.012em" }],
        "4xl": ["2.4375rem", { lineHeight: "2.65rem", letterSpacing: "-0.016em" }],
        "5xl": ["3.0625rem", { lineHeight: "3.15rem", letterSpacing: "-0.02em" }],
        "6xl": ["3.75rem", { lineHeight: "3.85rem", letterSpacing: "-0.022em" }],
      },

      borderRadius: {
        control: "0.75rem",
        card: "1rem",
        panel: "1.25rem",
        pill: "9999px",
      },

      boxShadow: {
        card: "var(--shadow-card)",
        pop: "var(--shadow-pop)",
        shot: "var(--shadow-shot)",
        glow: "0 0 0 1px color-mix(in oklch, var(--color-accent) 25%, transparent), 0 8px 28px -10px var(--color-accent-glow)",
      },

      keyframes: {
        floatUp: {
          "0%": { transform: "translateY(20px)", opacity: "0" },
          "30%": { opacity: "1" },
          "100%": { transform: "translateY(-100px)", opacity: "0" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200px 0" },
          "100%": { backgroundPosition: "calc(200px + 100%) 0" },
        },
        riseIn: {
          from: { transform: "translateY(8px)", opacity: "0" },
          to: { transform: "translateY(0)", opacity: "1" },
        },
        equalize: {
          "0%, 100%": { transform: "scaleY(0.35)" },
          "50%": { transform: "scaleY(1)" },
        },
      },
      animation: {
        "float-up": "floatUp 2s cubic-bezier(0.16, 1, 0.3, 1) forwards",
        shimmer: "shimmer 1.4s linear infinite",
        "rise-in": "riseIn 320ms cubic-bezier(0.16, 1, 0.3, 1) both",
        equalize: "equalize 0.9s ease-in-out infinite",
      },

      transitionDuration: {
        "250": "250ms",
        "320": "320ms",
      },

      transitionTimingFunction: {
        "out-expo": "cubic-bezier(0.16, 1, 0.3, 1)",
        "out-quint": "cubic-bezier(0.22, 1, 0.36, 1)",
      },
    },
  },
  plugins: [],
};
