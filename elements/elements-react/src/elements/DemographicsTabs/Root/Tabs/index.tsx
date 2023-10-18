import { useRootElement } from "../context";
import * as S from "./styles";
import { SVG, Text, theme } from "@local-logic/core/ui";
import React from "react";
import { demographicsCategories } from "~/constants/demographics-categories";
import * as translations from "../translations";

export const Tabs = () => {
  const { options } = useRootElement();

  let activeCategories = demographicsCategories;

  if (options.omitTabs) {
    activeCategories = demographicsCategories.filter(
      (category) => !options.omitTabs?.includes(category.value)
    );
  }

  return (
    <S.TabsList aria-label="Demographics tabs">
      {activeCategories.map((tab) => {
        const isActive = tab.value === options.activeTab;
        const triggerColor = isActive
          ? "--ll-color-primary"
          : "--ll-color-disabled";

        return (
          <React.Fragment key={tab.value}>
            <S.Trigger value={tab.value}>
              <SVG SVGElement={tab.icon} fill={theme[triggerColor]} />
              <Text
                noMargin
                variant="caption1"
                color={triggerColor}
                weight="--ll-font-weight-semibold"
              >
                {translations[tab.value]}
              </Text>
            </S.Trigger>
          </React.Fragment>
        );
      })}
    </S.TabsList>
  );
};
