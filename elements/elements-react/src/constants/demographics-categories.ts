import { DemographicsCategories } from "../types/demographics-categories";
import IncomeSVG from "../assets/icons/income.svg";
import PopulationSVG from "../assets/icons/population.svg";
import HousingSVG from "../assets/icons/housing.svg";
import HouseholdSVG from "../assets/icons/household.svg";
import educationSVG from "../assets/icons/education.svg";
import CommuteSVG from "../assets/icons/commute.svg";
import LanguagesSVG from "../assets/icons/languages.svg";

export const demographicsCategories: {
  value: DemographicsCategories;
  icon: React.FC;
}[] = [
  {
    value: "income",
    icon: IncomeSVG,
  },
  {
    value: "population",
    icon: PopulationSVG,
  },
  {
    value: "housing",
    icon: HousingSVG,
  },
  {
    value: "household",
    icon: HouseholdSVG,
  },
  {
    value: "education",
    icon: educationSVG,
  },
  {
    value: "commute",
    icon: CommuteSVG,
  },
  {
    value: "languages",
    icon: LanguagesSVG,
  },
];
