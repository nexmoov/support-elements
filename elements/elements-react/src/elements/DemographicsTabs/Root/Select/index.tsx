import { useRootElement } from "../context";
import * as S from "./styles";
import { Select as UISelect, Text } from "@local-logic/core/ui";
import React from "react";
import { demographicsCategories } from "~/constants/demographics-categories";
import * as translations from "../translations";
import { DemographicsCategories } from "~/types/demographics-categories";

export const Select = () => {
  const { options, onChange } = useRootElement();

  let activeCategories = demographicsCategories;

  if (options.omitTabs) {
    activeCategories = demographicsCategories.filter(
      (category) => !options.omitTabs?.includes(category.value)
    );
  }

  console.log(options, translations)

  return (
    <S.SelectContainer>
      <UISelect.Root
        value={options.activeTab}
        onValueChange={(value: DemographicsCategories) => {
          onChange({ type: "tabs", data: value });
        }}
      >
        <UISelect.Trigger size="large">
          <Text noMargin variant="h6" color="--ll-color-placeholder">
            {translations[options.activeTab]}
          </Text>
        </UISelect.Trigger>
        <UISelect.Content>
          {activeCategories.map((category) => (
            <UISelect.Item value={category.value} key={category.value}>
              <Text noMargin variant="h6">
                {translations[category.value]}
              </Text>
            </UISelect.Item>
          ))}
        </UISelect.Content>
      </UISelect.Root>
    </S.SelectContainer>
  );
};
