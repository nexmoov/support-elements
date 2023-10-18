import React, { ComponentProps } from "react";
import * as RadixSelect from "@radix-ui/react-select";
import ChevronIcon from "~/ui/assets/chevron.svg";
import CheckIcon from "~/ui/assets/check.svg";
import { SVG } from "../SVG";
import * as S from "./styles";
import { theme } from "../../styles";

/**
 * Trigger
 */
type TriggerProps = {
  size?: "medium" | "large";
} & ComponentProps<typeof RadixSelect.Trigger>;

const Trigger = ({ size = "medium", children, ...props }: TriggerProps) => (
  <S.Trigger size={size} {...props}>
    {children}
    <RadixSelect.SelectIcon>
      <SVG SVGElement={ChevronIcon} fill={theme["--ll-color-on-background-variant1"]} height={20} />
    </RadixSelect.SelectIcon>
  </S.Trigger>
);

/**
 * Content
 */
type ContentProps = {
  size?: "medium" | "large";
} & ComponentProps<typeof RadixSelect.Content>;

const Content = ({ size = "medium", children, ...props }: ContentProps) => (
  <S.Content size={size} {...props}>
    <S.Viewport>{children}</S.Viewport>
  </S.Content>
);

/**
 * Item
 */
type ItemProps = ComponentProps<typeof RadixSelect.Item>;

const Item = ({ children, ...props }: ItemProps) => (
  <S.Item {...props}>
    <RadixSelect.ItemText>{children}</RadixSelect.ItemText>
    <S.ItemIndicator>
      <SVG SVGElement={CheckIcon} fill="currentColor" height={12} />
    </S.ItemIndicator>
  </S.Item>
);

/**
 * Group
 */
type GroupProps = {
  label: string;
} & ComponentProps<typeof RadixSelect.Group>;

const Group = ({ children, label, ...props }: GroupProps) => (
  <RadixSelect.Group {...props}>
    <RadixSelect.Label>{label}</RadixSelect.Label>
    {children}
  </RadixSelect.Group>
);

const { Root } = RadixSelect;
const { Portal } = S;
export { Root, Trigger, Content, Item, Portal, Group };
