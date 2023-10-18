import { theme } from "@local-logic/core/ui";
import { LocalLogicProvider } from "../src/context";
import LocalLogicClient from "@local-logic/client";
import { withThemeByDataAttribute } from "@storybook/addon-styling";

const client = LocalLogicClient("123");

export const decorators = [
  (Story) => (
    <LocalLogicProvider client={client}>
      <div theme={theme}>{Story()}</div>
    </LocalLogicProvider>
  ),
  withThemeByDataAttribute({
    themes: {
      light: "day",
      dark: "night",
    },
    defaultTheme: "day",
    attributeName: "data-theme",
  }),
];

// https://storybook.js.org/docs/react/writing-stories/parameters#global-parameters
export const parameters = {
  // https://storybook.js.org/docs/react/essentials/actions#automatically-matching-args
  actions: { argTypesRegex: "^on.*" },
};
