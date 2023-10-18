import { type Transition } from "framer-motion";

import * as colors from "./colors";
import * as transitions from "./transitions";
import * as screenSizes from "./screen-size";

// We need to infer the type so that it's portable
type BaseStylesType = {
  screenSizes: {
    mobileS: number;
    mobileM: number;
    mobileL: number;
    tablet: number;
    laptopS: number;
    laptopL: number;
    desktop: number;
  };
  transitions: {
    default: Transition;
    defaultSlow: Transition;
    spring: Transition;
  };
  colors: typeof colors;
};

export const baseStyles: BaseStylesType = {
  colors,
  ...transitions,
  ...screenSizes,
};
