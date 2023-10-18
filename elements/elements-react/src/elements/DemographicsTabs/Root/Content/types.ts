import { SDKOptions } from "~/types/sdk-options";
import { DemographicsCategories } from "~/types/demographics-categories";

export type ContentProps = SDKOptions<{
  options: {
    value: DemographicsCategories;
    style?: React.CSSProperties;
  };
}>;
