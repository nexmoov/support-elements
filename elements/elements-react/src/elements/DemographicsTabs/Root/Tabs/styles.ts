import { styled } from "styled-components";
import * as Tabs from "@radix-ui/react-tabs";
import { theme } from "@local-logic/core/ui";

export const TabsList = styled(Tabs.List)`
  display: grid;
  grid-auto-columns: minmax(0, 80px);
  grid-auto-flow: column;
  padding: ${theme["--ll-spacing-medium"]} 0;
`;

export const Trigger = styled(Tabs.Trigger)`
  background: none;
  border: none;
  padding: ${theme["--ll-spacing-xx-small"]};
  display: flex;
  flex-direction: column;
  align-items: center;

  &:hover {
    cursor: pointer;

    svg {
      fill: ${theme["--ll-color-primary"]};
    }

    p {
      color: ${theme["--ll-color-primary"]};
    }
  }
`;
