import "../src/ui/main.css";
import { withThemeByDataAttribute } from "@storybook/addon-styling";
import { theme } from "../src/ui/styles";

export const decorators = [
  (Story) => <div theme={theme}>{Story()}</div>,
  withThemeByDataAttribute({
    themes: {
      light: "day",
      dark: "night",
    },
    defaultTheme: "day",
    attributeName: "data-theme",
  }),
];

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};
