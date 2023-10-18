import { styled } from "styled-components";
import * as Select from "@radix-ui/react-select";
import { theme } from "../../styles";

export const Trigger = styled(Select.Trigger)<{ size: "medium" | "large" }>`
  display: inline-flex;
  align-items: center;
  justify-content: space-between;
  background-color: ${theme["--ll-color-background"]};
  border-radius: ${theme["--ll-border-radius-small"]};
  border: 1px solid ${theme["--ll-color-border"]};
  color: ${theme["--ll-color-on-background-variant1"]};
  padding: ${theme["--ll-spacing-xx-small"]} ${theme["--ll-spacing-x-small"]}
    ${theme["--ll-spacing-xx-small"]} ${theme["--ll-spacing-small"]};
  flex: 1;
  height: ${({ size }) => (size === "medium" ? "32px" : "40px")};
  font-size: ${({ size }) =>
    size === "medium" ? theme["--ll-font-size-p"] : theme["--ll-font-size-h6"]};
`;

export const SelectIcon = styled(Select.SelectIcon)`
  margin-left: ${theme["--ll-spacing-x-small"]};
`;

export const Content = styled(Select.Content)<{ size: "medium" | "large" }>`
  overflow: hidden;
  background-color: ${theme["--ll-color-background"]};
  border-radius: ${theme["--ll-border-radius-small"]};
  box-shadow: ${theme["--ll-shadow-medium"]};
  min-width: 120px;
  z-index: 2;
  font-size: ${({ size }) =>
    size === "medium" ? theme["--ll-font-size-p"] : theme["--ll-font-size-h6"]};
`;

export const Item = styled(Select.Item)`
  font-family: ${theme["--ll-font-family"]};
  font-size: inherit;
  padding: ${theme["--ll-spacing-xx-small"]} ${theme["--ll-spacing-x-large"]}
    ${theme["--ll-spacing-xx-small"]} ${theme["--ll-spacing-large"]};
  outline: none;
  border-radius: ${theme["--ll-border-radius-small"]};
  position: relative;
  color: ${theme["--ll-color-on-surface-variant1"]};
  cursor: default;

  &[data-highlighted] {
    background-color: ${theme["--ll-color-primary"]};
    color: ${theme["--ll-color-on-primary"]};
  }
`;

export const ItemIndicator = styled(Select.ItemIndicator)`
  position: absolute;
  left: 0;
  height: 100%;
  left: 0;
  bottom: 0;
  width: ${theme["--ll-spacing-large"]};
  display: inline-flex;
  align-items: center;
  justify-content: center;
`;

export const Viewport = styled(Select.Viewport)`
  font-size: inherit;
  padding: ${theme["--ll-spacing-base-unit"]};
`;

export const Portal = styled(Select.Portal)`
  z-index: 1;
`;
