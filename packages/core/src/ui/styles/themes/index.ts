import { Theme } from "./types";

/**
 * This represents the client-facing Apperance API for Styled Components. This
 * can be deprecated once we have completed our transition to TailwindCSS.
 */
export const theme: Record<keyof Theme, string> = {
  "--ll-base-unit": "var(--ll-base-unit)",

  "--ll-color-primary": "var(--ll-color-primary)",
  "--ll-color-primary-variant1": "var(--ll-color-primary-variant1)",
  "--ll-color-background": "var(--ll-color-background)",
  "--ll-color-surface": "var(--ll-color-surface)",
  "--ll-color-surface-variant1": "var(--ll-color-surface-variant1)",
  "--ll-color-surface-variant2": "var(--ll-color-surface-variant2)",
  "--ll-color-on-primary": "var(--ll-color-on-primary)",
  "--ll-color-on-primary-variant1": "var(--ll-color-on-primary-variant1)",
  "--ll-color-on-background": "var(--ll-color-on-background)",
  "--ll-color-on-background-variant1": "var(--ll-color-on-background-variant1)",
  "--ll-color-on-surface": "var(--ll-color-on-surface)",
  "--ll-color-on-surface-variant1": "var(--ll-color-on-surface-variant1)",
  "--ll-color-placeholder": "var(--ll-color-placeholder)",
  "--ll-color-disabled": "var(--ll-color-disabled)",
  "--ll-color-border": "var(--ll-color-border)",
  "--ll-color-link": "var(--ll-color-link)",
  "--ll-sdk-title-color": "var(--ll-sdk-title-color)",
  "--ll-color-error": "var(--ll-color-error)",

  "--ll-border-radius-base-unit": "var(--ll-border-radius-base-unit)",
  "--ll-border-radius-small": "var(--ll-border-radius-small)",
  "--ll-border-radius-medium": "var(--ll-border-radius-medium)",
  "--ll-border-radius-large": "var(--ll-border-radius-large)",

  "--ll-shadow-small": "var(--ll-shadow-small)",
  "--ll-shadow-medium": "var(--ll-shadow-medium)",

  "--ll-spacing-base-unit": "var(--ll-spacing-base-unit)",
  "--ll-spacing-auto": "var(--ll-spacing-auto)",
  "--ll-spacing-xx-small": "var(--ll-spacing-xx-small)",
  "--ll-spacing-x-small": "var(--ll-spacing-x-small)",
  "--ll-spacing-small": "var(--ll-spacing-small)",
  "--ll-spacing-medium": "var(--ll-spacing-medium)",
  "--ll-spacing-large": "var(--ll-spacing-large)",
  "--ll-spacing-x-large": "var(--ll-spacing-x-large)",
  "--ll-spacing-xx-large": "var(--ll-spacing-xx-large)",
  "--ll-spacing-xxx-large": "var(--ll-spacing-xxx-large)",

  "--ll-font-family": "var(--ll-font-family)",
  "--ll-font-family-mono": "var(--ll-font-family-mono)",

  "--ll-font-size-base": "var(--ll-font-size-base)",
  "--ll-font-size-h1": "var(--ll-font-size-h1)",
  "--ll-font-size-h2": "var(--ll-font-size-h2)",
  "--ll-font-size-h3": "var(--ll-font-size-h3)",
  "--ll-font-size-h4": "var(--ll-font-size-h4)",
  "--ll-font-size-h5": "var(--ll-font-size-h5)",
  "--ll-font-size-h6": "var(--ll-font-size-h6)",
  "--ll-font-size-p": "var(--ll-font-size-p)",
  "--ll-font-size-caption-1": "var(--ll-font-size-caption-1)",
  "--ll-font-size-caption-2": "var(--ll-font-size-caption-2)",

  "--ll-font-weight-light": "var(--ll-font-weight-light)",
  "--ll-font-weight-normal": "var(--ll-font-weight-normal)",
  "--ll-font-weight-medium": "var(--ll-font-weight-medium)",
  "--ll-font-weight-semibold": "var(--ll-font-weight-semibold)",
  "--ll-font-weight-bold": "var(--ll-font-weight-bold)",
};

// Deprecated
export const gridUnit = 4;
export * from "./types";
