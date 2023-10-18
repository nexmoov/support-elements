import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Text } from "./index";

export default {
  title: "Unofficial/Text",
  component: Text,
} as ComponentMeta<typeof Text>;

const Template: ComponentStory<typeof Text> = (args) => (
  <Text {...args}>
    &quot;Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
    ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
    laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
    voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat
    non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.&quot;
  </Text>
);

export const Caption = Template.bind({});
Caption.args = {
  variant: "caption1",
};

export const Paragraph = Template.bind({});

export const Heading1 = Template.bind({});
Heading1.args = {
  variant: "h1",
};

export const Heading2 = Template.bind({});
Heading2.args = {
  variant: "h2",
};

export const Heading3 = Template.bind({});
Heading3.args = {
  variant: "h3",
};
