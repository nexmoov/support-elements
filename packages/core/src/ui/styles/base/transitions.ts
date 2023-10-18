import { Transition } from "framer-motion";

const asTransitionTypes = <T>(et: { [K in keyof T]: Transition }) => et;

export const transitions = asTransitionTypes({
  default: {
    ease: "easeInOut",
    duration: 0.15,
  },
  defaultSlow: {
    ease: "easeInOut",
    duration: 0.4,
  },
  spring: {
    type: "spring",
    duration: 0.4,
    bounce: 0.3,
  },
});
