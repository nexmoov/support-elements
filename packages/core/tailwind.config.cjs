/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    // app content
    `src/**/*.{js,ts,jsx,tsx}`,
  ],
  theme: {
    extend: {
      colors: {
        "ll-primary": "var(--ll-color-primary)",
        "ll-primary-variant1": "var(--ll-color-primary-variant1)",

        "ll-background": "var(--ll-color-background)",
        "ll-surface": "var(--ll-color-surface)",
        "ll-surface-variant1": "var(--ll-color-surface-variant1)",
        "ll-surface-variant2": "var(--ll-color-surface-variant2)",

        "ll-on-primary": "var(--ll-color-on-primary)",
        "ll-on-primary-variant1": "var(--ll-color-on-primary-variant1)",
        "ll-on-background": "var(--ll-color-on-background)",
        "ll-on-background-variant1": "var(--ll-color-on-background-variant1)",
        "ll-on-surface": "var(--ll-color-on-surface)",
        "ll-on-surface-variant1": "var(--ll-color-on-surface-variant1)",
        "ll-placeholder": "var(--ll-color-placeholder)",
        "ll-disabled": "var(--ll-color-disabled)",

        "ll-border": "var(--ll-color-border)",
        "ll-link": "var(--ll-color-link)",

        "ll-error": "var(--ll-color-error)",
      },
    },

    borderRadius: {
      none: "0",
      sm: "calc(var(--ll-border-radius-base-unit) * 0.5)",
      DEFAULT: "calc(var(--ll-border-radius-base-unit) * 1)",
      md: "calc(var(--ll-border-radius-base-unit) * 1.5)",
      lg: "calc(var(--ll-border-radius-base-unit) * 2)",
      xl: "calc(var(--ll-border-radius-base-unit) * 3)",
      "2xl": "calc(var(--ll-border-radius-base-unit) * 4)",
      "3xl": "calc(var(--ll-border-radius-base-unit) * 6)",
    },

    fontFamily: {
      sans: "var(--ll-font-family)",
      mono: "var(--ll-font-family-mono)",
    },

    fontWeight: {
      light: "var(--ll-font-weight-light)",
      normal: "var(--ll-font-weight-normal)",
      medium: "var(--ll-font-weight-medium)",
      semibold: "var(--ll-font-weight-semibold)",
      bold: "var(--ll-font-weight-bold)",
    },

    spacing: {
      0.5: "calc(var(--ll-spacing-base-unit) * 0.5)",
      1: "calc(var(--ll-spacing-base-unit) * 1)",
      1.5: "calc(var(--ll-spacing-base-unit) * 1.5)",
      2: "calc(var(--ll-spacing-base-unit) * 2)",
      2.5: "calc(var(--ll-spacing-base-unit) * 2.5)",
      3: "calc(var(--ll-spacing-base-unit) * 3)",
      3.5: "calc(var(--ll-spacing-base-unit) * 3.5)",
      4: "calc(var(--ll-spacing-base-unit) * 4)",
      5: "calc(var(--ll-spacing-base-unit) * 5)",
      6: "calc(var(--ll-spacing-base-unit) * 6)",
      7: "calc(var(--ll-spacing-base-unit) * 7)",
      8: "calc(var(--ll-spacing-base-unit) * 8)",
      9: "calc(var(--ll-spacing-base-unit) * 9)",
      10: "calc(var(--ll-spacing-base-unit) * 10)",
      11: "calc(var(--ll-spacing-base-unit) * 11)",
      12: "calc(var(--ll-spacing-base-unit) * 12)",
      14: "calc(var(--ll-spacing-base-unit) * 14)",
      16: "calc(var(--ll-spacing-base-unit) * 16)",
      20: "calc(var(--ll-spacing-base-unit) * 20)",
      24: "calc(var(--ll-spacing-base-unit) * 24)",
      28: "calc(var(--ll-spacing-base-unit) * 28)",
      32: "calc(var(--ll-spacing-base-unit) * 32)",
      36: "calc(var(--ll-spacing-base-unit) * 36)",
      40: "calc(var(--ll-spacing-base-unit) * 40)",
      44: "calc(var(--ll-spacing-base-unit) * 44)",
      48: "calc(var(--ll-spacing-base-unit) * 48)",
      52: "calc(var(--ll-spacing-base-unit) * 52)",
      56: "calc(var(--ll-spacing-base-unit) * 56)",
      60: "calc(var(--ll-spacing-base-unit) * 60)",
      64: "calc(var(--ll-spacing-base-unit) * 64)",
      72: "calc(var(--ll-spacing-base-unit) * 72)",
      80: "calc(var(--ll-spacing-base-unit) * 80)",
      96: "calc(var(--ll-spacing-base-unit) * 96)",
    },
  },
  plugins: [],
};
