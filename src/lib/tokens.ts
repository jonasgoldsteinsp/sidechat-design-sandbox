// ═══════════════════════════════════════════════════════
// SIDECHAT DESIGN TOKENS
// The Editor — Elegant & Simplified
// ═══════════════════════════════════════════════════════

export const tokens = {
  color: {
    // ─── Core Palette ───
    canvas:       "#F4F1E6",
    canvasWarm:   "#F0EDE0",
    ink:          "#0F0F0F",
    inkSoft:      "#2A2A2A",
    inkMuted:     "#6B6860",

    // ─── Brand ───
    mint:         "#38C798",
    mintLight:    "#5DD9AE",
    mintDark:     "#2BA57D",
    coral:        "#C05621",
    coralLight:   "#D97A4A",
    cobalt:       "#2B6CB0",
    cobaltLight:  "#4A8BD4",
    plum:         "#6B3FA0",
    amber:        "#D4A72C",

    // ─── Machine Neutrals ───
    beigeLight:   "#F0EDE0",
    beigeMain:    "#E0DCCF",
    beigeDark:    "#C4C0B3",
    beigeShadow:  "#A09C8F",
    screenBlack:  "#222529",
    phosphor:     "#33FF00",

    // ─── Semantic ───
    success:      "#38C798",
    warning:      "#D4A72C",
    error:        "#C05621",
    info:         "#2B6CB0",

    // ─── Dark Mode (Night Operator) ───
    dark: {
      bg:         "#0F0F0F",
      bgSoft:     "#1A1A1A",
      bgMuted:    "#222529",
      surface:    "rgba(255,255,255,0.04)",
      surfaceHover: "rgba(255,255,255,0.08)",
      border:     "rgba(255,255,255,0.06)",
      borderHover: "rgba(255,255,255,0.12)",
      text:       "#F4F1E6",
      textSoft:   "rgba(244,241,230,0.7)",
      textMuted:  "rgba(244,241,230,0.45)",
    },
  },

  typography: {
    fontFamily: {
      display: "'Fraunces', serif",
      body:    "'DM Sans', sans-serif",
      mono:    "'IBM Plex Mono', monospace",
      system:  "-apple-system, BlinkMacSystemFont, 'SF Pro Text', sans-serif",
    },
    fontWeight: {
      light:    300,
      regular:  400,
      semibold: 600,
      bold:     700,
    },
    fontSize: {
      displayXl: { size: "4rem",   lineHeight: 0.85, letterSpacing: "-0.04em" },
      displayLg: { size: "3rem",   lineHeight: 0.88, letterSpacing: "-0.03em" },
      displayMd: { size: "2.25rem", lineHeight: 0.92, letterSpacing: "-0.03em" },
      heading:   { size: "1.8rem", lineHeight: 1.1,  letterSpacing: "-0.02em" },
      title:     { size: "1.4rem", lineHeight: 1.2,  letterSpacing: "-0.02em" },
      subtitle:  { size: "1.15rem", lineHeight: 1.3, letterSpacing: "-0.01em" },
      body:      { size: "1rem",   lineHeight: 1.6,  letterSpacing: "0" },
      callout:   { size: "0.875rem", lineHeight: 1.5, letterSpacing: "0" },
      caption:   { size: "0.8rem", lineHeight: 1.5,  letterSpacing: "0" },
      footnote:  { size: "0.75rem", lineHeight: 1.4, letterSpacing: "0.01em" },
      label:     { size: "0.7rem", lineHeight: 1.3,  letterSpacing: "0.1em" },
    },
  },

  spacing: {
    0:   "0px",
    xs:  "4px",
    sm:  "8px",
    md:  "16px",
    lg:  "24px",
    xl:  "32px",
    "2xl": "48px",
    "3xl": "64px",
    "4xl": "96px",
    "5xl": "128px",
  },

  radius: {
    none: "0px",
    sm:   "2px",
    md:   "6px",
    lg:   "10px",
    xl:   "16px",
    full: "9999px",
  },

  shadow: {
    sm:    "0 1px 2px rgba(0,0,0,0.05)",
    md:    "0 4px 12px rgba(0,0,0,0.08)",
    lg:    "0 12px 32px rgba(0,0,0,0.12)",
    xl:    "0 40px 80px rgba(0,0,0,0.12)",
    glow:  "0 0 20px rgba(56,199,152,0.3)",
    inner: "inset 0 1px 2px rgba(0,0,0,0.1)",
  },

  breakpoint: {
    mobile:  "375px",
    tablet:  "768px",
    desktop: "1024px",
    wide:    "1440px",
  },

  grid: {
    columns: 12,
    gutter: {
      mobile:  "16px",
      tablet:  "24px",
      desktop: "32px",
    },
    margin: {
      mobile:  "20px",
      tablet:  "40px",
      desktop: "40px",
    },
    maxWidth: "1200px",
  },

  transition: {
    fast:   "0.15s ease",
    normal: "0.2s ease",
    slow:   "0.4s ease-out",
  },

  zIndex: {
    dropdown:  100,
    sticky:    200,
    overlay:   300,
    modal:     400,
    toast:     500,
  },
} as const;

export type Tokens = typeof tokens;
