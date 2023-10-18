import { useEffect } from "react";
import { Themes, Theme } from "./themes";

export const useThemeSwitcher = ({
  themeName,
  overrides,
}: {
  themeName?: Themes;
  overrides?: Partial<Theme>;
} = {}) => {
  useEffect(() => {
    /**
     * Sets the major theme.
     */
    if (themeName) {
      document.documentElement.setAttribute("data-theme", themeName);
    }

    /**
     * Allows clients to override CSS theme variables.
     */
    if (overrides) {
      Object.entries(overrides).forEach(([key, value]) => {
        document.documentElement.style.setProperty(key, value);
      });
    }
  }, [themeName, overrides]);
};
