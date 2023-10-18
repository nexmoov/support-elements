import { ChartConfiguration } from "chart.js";
import * as S from "../../styles/charts/styles";

export const barChartOptions = Object.freeze({
  options: {
    indexAxis: "y" as const,
    elements: {
      bar: {
        borderWidth: 0,
        borderRadius: 4,
        backgroundColor: S.cssVar("--ll-color-primary"),
      },
    },
    responsive: true,
    maintainAspectRatio: false,
    events: null,
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        enabled: false,
      },
      title: {
        display: true,
        position: "top" as const,
        align: "start" as const,
        padding: {
          bottom: 16,
        },
        color: S.cssVar("--ll-color-on-background"),
        font: {
          family: S.cssVar("--ll-font-family"),
          weight: S.cssVar("--ll-font-weight-medium"),
          size: 14,
          lineHeight: 1.4,
        },
      },
    },
  },
}) as unknown as ChartConfiguration<"bar">;
