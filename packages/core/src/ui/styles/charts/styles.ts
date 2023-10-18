import { Bar, Doughnut } from "react-chartjs-2";
import { styled } from "styled-components";
import { theme } from "..";
import { screenSizes } from "../base/screen-size";

// Important as the reports use SSR and it fails at compilation otherwise
const canUseDOM = !!(
  typeof window !== "undefined" &&
  window.document &&
  window.document.createElement
);

const style = canUseDOM && getComputedStyle(document.documentElement);
export const cssVar = (name: string) => () => style ? style.getPropertyValue(name) : "";

export const Container = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;
`;

const barChartStyles = `
  background-color: ${theme["--ll-color-surface"]};
  padding: ${theme["--ll-spacing-small"]};
  border-radius: ${theme["--ll-border-radius-medium"]};
  font-family: ${theme["--ll-font-family"]};
`;

export const HorizontalBarChart = styled.div`
  ${barChartStyles}
  height: calc(100% - 34px);

  @media (max-width: ${screenSizes.tablet}px) {
    height: calc(100% - 24px);
  }
`;

export const BarChart = styled(Bar)`
  ${barChartStyles}
`;

export const DoughnutChart = styled(Doughnut)`
  ${barChartStyles}
`;
