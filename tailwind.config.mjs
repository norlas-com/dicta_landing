/**
 * Dicta design tokens — ported verbatim from the app (web/tailwind.config.ts).
 * Same palette, typography, brand gradient. Accent: indigo (#7A6CFF). Brand
 * gradient: violet (#B56CFF) → indigo (#7A6CFF) → cyan (#34E2E6).
 * Colors resolve to CSS variables in src/styles/global.css; the `.light` /
 * `.dark` class on <html> drives the theme switch.
 * @type {import('tailwindcss').Config}
 */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,ts,tsx,md,mdx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        background: "var(--color-background)",
        surface: "var(--color-surface)",
        "surface-2": "var(--color-surface-2)",
        "surface-3": "var(--color-surface-3)",
        border: "var(--color-border)",
        "border-strong": "var(--color-border-strong)",
        foreground: "var(--color-foreground)",
        "foreground-soft": "var(--color-foreground-soft)",
        muted: "var(--color-muted)",
        "muted-soft": "var(--color-muted-soft)",

        accent: {
          DEFAULT: "var(--color-accent)",
          strong: "var(--color-accent-strong)",
          soft: "var(--color-accent-soft)",
          fg: "var(--color-accent-fg)",
        },

        "brand-violet": "var(--color-brand-violet)",
        "brand-indigo": "var(--color-brand-indigo)",
        "brand-cyan": "var(--color-brand-cyan)",

        live: {
          DEFAULT: "var(--color-live)",
          fg: "var(--color-live-fg)",
        },
        danger: {
          DEFAULT: "var(--color-danger)",
          strong: "var(--color-danger-strong)",
          fg: "var(--color-danger-fg)",
        },
        success: "var(--color-success)",
        warning: "var(--color-warning)",

        "platform-meet": "var(--color-platform-meet)",
        "platform-zoom": "var(--color-platform-zoom)",
        "platform-teams": "var(--color-platform-teams)",
      },

      backgroundImage: {
        "brand-gradient":
          "linear-gradient(135deg, #B56CFF 0%, #7A6CFF 50%, #34E2E6 100%)",
        "brand-gradient-soft":
          "linear-gradient(135deg, rgba(181,108,255,0.18) 0%, rgba(122,108,255,0.18) 50%, rgba(52,226,230,0.18) 100%)",
      },

      fontFamily: {
        // The Arabic face sits AFTER the Latin one in every stack, which is
        // all the conditional logic RTL needs: Urbanist and Lora have no
        // Arabic glyphs, so the browser falls through per-glyph.
        sans: [
          "var(--font-urbanist)",
          "var(--font-arabic)",
          "Urbanist",
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
          "Lora",
          "ui-serif",
          "Georgia",
          "Cambria",
          "Times New Roman",
          "serif",
        ],
        serif: ["var(--font-serif)", "var(--font-arabic)", "Lora", "ui-serif", "Georgia", "serif"],
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
        card: "0 1px 2px rgba(0,0,0,0.18), 0 4px 16px -8px rgba(0,0,0,0.30)",
        pop: "0 8px 24px -6px rgba(0,0,0,0.40), 0 2px 8px -2px rgba(0,0,0,0.28)",
        glow: "0 0 0 1px color-mix(in srgb, var(--color-accent) 30%, transparent), 0 8px 32px -8px var(--color-accent-glow)",
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
        gradientShimmer: {
          "0%, 100%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
        },
        equalize: {
          "0%, 100%": { transform: "scaleY(0.35)" },
          "50%": { transform: "scaleY(1)" },
        },
        popularGlow: {
          "0%, 100%": {
            boxShadow:
              "0 10px 30px -12px rgba(99,102,241,0.45), 0 0 0 0 rgba(99,102,241,0.0)",
          },
          "50%": {
            boxShadow:
              "0 22px 48px -12px rgba(99,102,241,0.65), 0 0 0 6px rgba(99,102,241,0.10)",
          },
        },
      },
      animation: {
        "float-up": "floatUp 2s cubic-bezier(0.16, 1, 0.3, 1) forwards",
        shimmer: "shimmer 1.4s linear infinite",
        "rise-in": "riseIn 320ms cubic-bezier(0.16, 1, 0.3, 1) both",
        "gradient-shimmer": "gradientShimmer 6s ease-in-out infinite",
        equalize: "equalize 0.9s ease-in-out infinite",
        "popular-glow": "popularGlow 3.2s ease-in-out infinite",
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
