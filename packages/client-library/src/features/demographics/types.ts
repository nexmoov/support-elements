export interface Variable {
  variable: string;
  value: number;
  label: string;
}

export type DemographicsKey =
  | "commute_mode"
  | "education_level"
  | "employment_status"
  | "family_composition"
  | "household_children"
  | "household_composition"
  | "housing_tenancy"
  | "housing_type"
  | "income"
  | "income_stats"
  | "income_level"
  | "mother_tongue"
  | "official_language_knowledge"
  | "population_age"
  | "population_total"
  | "property_tenure";

export type Demographics = {
  [key in DemographicsKey]: {
    label: string;
    type: string;
    variables: Variable[];
  };
};

export interface DemographicsResponse {
  data: {
    attributes: Demographics;
  };
}
