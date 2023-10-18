import LocalLogicClient from "@local-logic/client";
import { LocalizationLoader } from "@local-logic/core/localization";
import "@local-logic/core/style.css";
import { theme, useThemeSwitcher, type Themes } from "@local-logic/core/ui";
import React, { useContext } from "react";

interface LocalLogicProviderProps {
  client: ReturnType<typeof LocalLogicClient>;
  options?: {
    appearance?: {
      theme?: Themes;
      variables?: Partial<typeof theme>;
    };
    /**
     * Removes animations and reduces stlying that does not print well (eg.
     * shadows, gradients).
     */
    renderForPrint?: boolean;
  };
  children: React.ReactNode;
}

interface DefaultContext {
  client: LocalLogicProviderProps["client"];
  options: LocalLogicProviderProps["options"];
}

const LocalLogicContext = React.createContext<DefaultContext>(
  {} as DefaultContext
);
const useLocalLogic = () => useContext(LocalLogicContext);

const LocalLogicProvider = ({
  client,
  options,
  children,
}: LocalLogicProviderProps) => {
  useThemeSwitcher({
    themeName: options?.appearance?.theme,
    overrides: options?.appearance?.variables,
  });

  return (
    <LocalLogicContext.Provider
      value={{
        client,
        options,
      }}
    >
      <LocalizationLoader filterTags="elements" locale={"fr"}>
        {children}
      </LocalizationLoader>
    </LocalLogicContext.Provider>
  );
};

export { useLocalLogic, LocalLogicProvider, LocalLogicContext };
