import { route } from "./constants";
import { schema, Params } from "./validator";
import { DemographicsResponse } from "./types";
import { Requests } from "../../types";

export default (requests: Requests) => async (params: Params) => {
  const validated = await schema.validate(params);
  const { lat, lng, radius } = validated;
  const response = await requests.get<DemographicsResponse>(route, {
    params: {
      lat,
      lng,
      radius,
    },
  });

  const responseAttributes = { ...response.data.attributes };
  const variableMapping: { [key: string]: string } = {
    inc_home: "avg_household_income",
    inc_person: "avg_individual_income",
    prop_renter: "renters",
    prop_owner: "owners",
  };

  if (
    Object.prototype.hasOwnProperty.call(responseAttributes, "income_stats")
  ) {
    responseAttributes.income = {
      label: responseAttributes.income_stats.label,
      type: responseAttributes.income_stats.type,
      variables: responseAttributes.income_stats.variables.map((value) => ({
        ...value,
        variable: variableMapping[value.variable],
      })),
    };
  }

  if (
    Object.prototype.hasOwnProperty.call(responseAttributes, "property_tenure")
  ) {
    responseAttributes.housing_tenancy = {
      label: responseAttributes.property_tenure.label,
      type: responseAttributes.property_tenure.type,
      variables: responseAttributes.property_tenure.variables.map((value) => ({
        ...value,
        variable: variableMapping[value.variable],
      })),
    };
  }

  return responseAttributes;
};

export * from "./types";
export * from "./constants";
