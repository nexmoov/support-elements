export interface GeneralTheme {
  "--ll-base-unit": string;
}

export interface ColorTheme {
  "--ll-color-primary": string;
  "--ll-color-primary-variant1": string;

  "--ll-color-background": string;
  "--ll-color-surface": string;
  "--ll-color-surface-variant1": string;
  "--ll-color-surface-variant2": string;

  "--ll-color-on-primary": string;
  "--ll-color-on-primary-variant1": string;
  "--ll-color-on-background": string;
  "--ll-color-on-background-variant1": string;
  "--ll-color-on-surface": string;
  "--ll-color-on-surface-variant1": string;
  "--ll-color-placeholder": string;
  "--ll-color-disabled": string;

  "--ll-color-border": string;

  "--ll-color-link": string;

  "--ll-sdk-title-color": string;

  "--ll-color-error": string;
}

export interface BorderTheme {
  "--ll-border-radius-base-unit": string;
  "--ll-border-radius-small": string;
  "--ll-border-radius-medium": string;
  "--ll-border-radius-large": string;
}

export interface ShadowTheme {
  "--ll-shadow-small": string;
  "--ll-shadow-medium": string;
}

export interface SpacingTheme {
  "--ll-spacing-base-unit": string;
  "--ll-spacing-auto": string;
  "--ll-spacing-xx-small": string;
  "--ll-spacing-x-small": string;
  "--ll-spacing-small": string;
  "--ll-spacing-medium": string;
  "--ll-spacing-large": string;
  "--ll-spacing-x-large": string;
  "--ll-spacing-xx-large": string;
  "--ll-spacing-xxx-large": string;
}

export interface FontFamilyTheme {
  "--ll-font-family": string;
  "--ll-font-family-mono": string;
}

export interface FontSizeTheme {
  "--ll-font-size-base": string;
  "--ll-font-size-h1": string;
  "--ll-font-size-h2": string;
  "--ll-font-size-h3": string;
  "--ll-font-size-h4": string;
  "--ll-font-size-h5": string;
  "--ll-font-size-h6": string;
  "--ll-font-size-p": string;
  "--ll-font-size-caption-1": string;
  "--ll-font-size-caption-2": string;
}

export interface FontWeightTheme {
  "--ll-font-weight-light": string;
  "--ll-font-weight-normal": string;
  "--ll-font-weight-medium": string;
  "--ll-font-weight-semibold": string;
  "--ll-font-weight-bold": string;
}

export type Theme = GeneralTheme &
  ColorTheme &
  BorderTheme &
  ShadowTheme &
  SpacingTheme &
  FontFamilyTheme &
  FontSizeTheme &
  FontWeightTheme;

export type Themes = "day" | "night";
