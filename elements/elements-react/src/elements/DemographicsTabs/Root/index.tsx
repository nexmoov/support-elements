import React from "react";
import * as Tabs from "@radix-ui/react-tabs";
import { DemographicsCategories } from "~/types/demographics-categories";
import { RootProps } from "./types";
import { RootElementContext } from "./context";

export const Root = ({ options, onChange, children }: RootProps) => {
  const handleOnChange = (value: string) => {
    onChange({ type: "tabs", data: value as DemographicsCategories });
  };

  return (
    <RootElementContext.Provider
      value={{
        options,
        onChange,
      }}
    >
      <Tabs.Root value={options.activeTab} onValueChange={handleOnChange}>
        {children}
      </Tabs.Root>
    </RootElementContext.Provider>
  );
};

// Export children
export { Content } from "./Content";
export { Tabs } from "./Tabs";
export { Select } from "./Select";
export { type DemographicsCategories };
