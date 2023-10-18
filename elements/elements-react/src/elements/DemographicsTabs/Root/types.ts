import { SDKOptions } from "~/types/sdk-options";
import { DemographicsCategories } from "~/types/demographics-categories";

export type onChangeMap = {
  tabs: DemographicsCategories;
};

export type RootProps = SDKOptions<{
  options: {
    activeTab: DemographicsCategories;
    omitTabs?: string[];
  };
  onChange: <T extends keyof onChangeMap>({
    type,
    data,
  }: {
    type: T;
    data: onChangeMap[T];
  }) => void;
}>;
