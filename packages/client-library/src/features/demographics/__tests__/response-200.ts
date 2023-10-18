export const demographicsResponse200 = {
  data: {
    type: "demographics",
    attributes: {
      income: {
        type: "standalone",
        variables: [
          {
            variable: "avg_household_income",
            value: 90039.0165,
            label: "Average household income",
          },
          {
            variable: "avg_individual_income",
            value: 43358.3033,
            label: "Average individual income",
          },
        ],
        label: "Income",
      },
      commute_mode: {
        type: "percent",
        variables: [
          {
            variable: "transit",
            value: 0.3761,
            label: "Public transit",
          },
          {
            variable: "foot",
            value: 0.1413,
            label: "Foot",
          },
          {
            variable: "bicycle",
            value: 0.1176,
            label: "Bicycle",
          },
          {
            variable: "drive",
            value: 0.3437,
            label: "Car",
          },
          {
            variable: "other",
            value: 0.021299999999999986,
            label: "Other",
          },
        ],
        label: "Commute mode",
      },
      household_composition: {
        type: "percent",
        variables: [
          {
            variable: "single_family",
            value: 0.3944,
            label: "Single family",
          },
          {
            variable: "multi_family",
            value: 0.0008,
            label: "Multi family",
          },
          {
            variable: "single_person",
            value: 0.5342,
            label: "Single person",
          },
          {
            variable: "multi_person",
            value: 0.0706,
            label: "Multi person",
          },
        ],
        label: "Household composition",
      },
      population_total: {
        type: "standalone",
        variables: [
          {
            variable: "total_individuals",
            value: 5752,
            label: "Total individuals",
          },
        ],
        label: "Total",
      },
      population_age: {
        type: "percent",
        variables: [
          {
            variable: "0_to_4",
            value: 0.0555,
            label: "0 to 4",
          },
          {
            variable: "5_to_9",
            value: 0.0405,
            label: "5 to 9",
          },
          {
            variable: "10_to_14",
            value: 0.0305,
            label: "10 to 14",
          },
          {
            variable: "15_to_19",
            value: 0.0231,
            label: "15 to 19",
          },
          {
            variable: "20_to_34",
            value: 0.3339,
            label: "20 to 34",
          },
          {
            variable: "35_to_49",
            value: 0.2731,
            label: "35 to 49",
          },
          {
            variable: "50_to_64",
            value: 0.1633,
            label: "50 to 64",
          },
          {
            variable: "65_to_79",
            value: 0.0658,
            label: "65 to 79",
          },
          {
            variable: "80_plus",
            value: 0.014499999999999999,
            label: "80 and over",
          },
        ],
        label: "Population age",
      },
      housing_tenancy: {
        type: "percent",
        variables: [
          {
            variable: "owners",
            value: 0.3412,
            label: "Owners",
          },
          {
            variable: "renters",
            value: 0.6588,
            label: "Renters",
          },
        ],
        label: "Owners vs Renters",
      },
      property_tenure: {
        type: "percent",
        variables: [
          {
            variable: "prop_owner",
            value: 0.5519268118,
            label: "Owner",
          },
          {
            variable: "prop_renter",
            value: 0.4480731882,
            label: "Renter",
          },
        ],
        label: "Owners vs. renters",
      },
      official_language_knowledge: {
        type: "percent",
        variables: [
          {
            variable: "en_only",
            value: 0.0242,
            label: "English only",
          },
          {
            variable: "fr_only",
            value: 0.242,
            label: "French only",
          },
          {
            variable: "en_and_fr",
            value: 0.7275,
            label: "English and French",
          },
          {
            variable: "other",
            value: 0.0064,
            label: "Other",
          },
        ],
        label: "Official language knowledge",
      },
      education_level: {
        type: "percent",
        variables: [
          {
            variable: "no_high_school",
            value: 0.061,
            label: "Did not graduate high school",
          },
          {
            variable: "high_school",
            value: 0.1124,
            label: "High school",
          },
          {
            variable: "trade_certificate",
            value: 0.0673,
            label: "Trade certificate",
          },
          {
            variable: "college_certificate",
            value: 0.1457,
            label: "College certificate",
          },
          {
            variable: "university_certificate",
            value: 0.0752,
            label: "University certificate",
          },
          {
            variable: "bachelor_degree",
            value: 0.2903,
            label: "Bachelor degree",
          },
          {
            variable: "post_graduate_degree",
            value: 0.2383,
            label: "Post graduate degree",
          },
        ],
        label: "Highest level of education achieved",
      },
      household_children: {
        type: "standalone",
        variables: [
          {
            variable: "avg_children_per_household",
            value: 0.6968,
            label: "Average number of children per household",
          },
        ],
        label: "Number of children per household",
      },
      housing_type: {
        type: "percent",
        variables: [
          {
            variable: "single_detached",
            value: 0,
            label: "Single detached",
          },
          {
            variable: "semi_detached",
            value: 0.0003,
            label: "Semi detached",
          },
          {
            variable: "duplex",
            value: 0.0515,
            label: "Duplex",
          },
          {
            variable: "row_houses",
            value: 0.0136,
            label: "Row houses",
          },
          {
            variable: "apartment_1_to_4_floors",
            value: 0.9005,
            label: "Apartment 1-4 floors",
          },
          {
            variable: "apartment_5_plus_floors",
            value: 0.0284,
            label: "Apartment 5 or more floors",
          },
        ],
        label: "Housing type",
      },
      family_composition: {
        type: "percent",
        variables: [
          {
            variable: "children_0",
            value: 0.6123,
            label: "Families with no children",
          },
          {
            variable: "children_1",
            value: 0.20292217999999998,
            label: "Families with one child",
          },
          {
            variable: "children_2",
            value: 0.14267359999999998,
            label: "Families with two children",
          },
          {
            variable: "children_3_plus",
            value: 0.04210422,
            label: "Families with more than two children",
          },
        ],
        label: "Family composition",
      },
      mother_tongue: {
        type: "percent",
        variables: [
          {
            variable: "french",
            value: 0.8324,
            label: "French",
          },
          {
            variable: "english",
            value: 0.0503,
            label: "English",
          },
          {
            variable: "spanish",
            value: 0.0391,
            label: "Spanish",
          },
          {
            variable: "italian",
            value: 0.0168,
            label: "Italian",
          },
          {
            variable: "arabic",
            value: 0.0112,
            label: "Arabic",
          },
          {
            variable: "portuguese",
            value: 0.0112,
            label: "Portuguese",
          },
          {
            variable: "cantonese",
            value: 0.0112,
            label: "Cantonese",
          },
          {
            variable: "croatian",
            value: 0.0056,
            label: "Croatian",
          },
          {
            variable: "czech",
            value: 0.0056,
            label: "Czech",
          },
          {
            variable: "other",
            value: 0.0166,
            label: "Other",
          },
        ],
        label: "Mother tongue",
      },
    },
    meta: {
      version: "2.0.0",
      language: "en",
    },
  },
};
