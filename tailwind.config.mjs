/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class", // 'media' or 'class'
  theme: {
    extend: {
      typography: (theme) => ({
        DEFAULT: {
          css: {
            fontFamily: '"IBM Plex Mono", monospace',
            h1: { fontWeight: "500", fontSize: "calc(1.345rem + 1.14vw)", lineHeight: "1.2" },
            h2: { fontWeight: "400", fontSize: "calc(1.305rem + .66vw)", lineHeight: "1.2" },
            h3: { fontWeight: "400", fontSize: "calc(1.285rem + .42vw)", lineHeight: "1.2" },
            h4: { fontWeight: "300", fontSize: "calc(1.265rem + .18vw)", lineHeight: "1.2" },
            h5: { fontWeight: "300", fontSize: "1.2rem", lineHeight: "1.2" },
            h6: { fontWeight: "300", fontSize: "1rem", lineHeight: "1.2" },
            a: { "&:hover": { color: "#3182ce" } },
            article: { backgroundColor: "#f7f7f7" },
            code: {
              backgroundColor: "#ffffff",
              color: "var(--color-text)",
              padding: "0 0.25rem 0.125rem 0.25rem",
              border: "1px solid var(--color-border)",
              borderRadius: "0.125rem",
              fontWeight: "500",
              fontSize: "0.875em",
              lineHeight: "1.2",
              display: "inline-block",
              verticalAlign: "middle",
              "&::before": { content: '""' },
              "&::after": { content: '""' },
            },
            "code::before": { content: '""' },
            "code::after": { content: '""' },
            "pre code": {
              backgroundColor: "transparent !important",
              padding: "0 !important",
              borderRadius: "0 !important",
              fontWeight: "inherit !important",
              color: "inherit !important",
              border: "none !important",
            },
            "pre code::before": { content: '""' },
            "pre code::after": { content: '""' },
          },
        },
        invert: {
          css: {
            h1: { fontWeight: "500", color: "var(--color-text)" },
            h2: { fontWeight: "400", color: "var(--color-text)" },
            h3: { fontWeight: "400", color: "var(--color-text)" },
            h4: { fontWeight: "300", color: "var(--color-text)" },
            h5: { fontWeight: "300", color: "var(--color-text)" },
            h6: { fontWeight: "300", color: "var(--color-text)" },
            a: { color: "var(--color-link-visited-dark)" },
            "a:hover": { color: "#ffffff" },
            code: {
              backgroundColor: "#333333",
              color: "var(--color-text)",
              border: "1px solid var(--color-highlight-dark)",
            },
            "pre code": {
              backgroundColor: "transparent !important",
              color: "inherit !important",
            },
            blockquote: {
              color: "var(--color-text)",
            },
          },
        },
      }),
    },
  },
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  plugins: [require("@tailwindcss/typography")],
};
