import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import * as Select from "./index";

export default {
  title: "Unofficial/Select",
  component: Select.Root,
  argTypes: {
    size: {
      options: ["medium", "large"],
      control: { type: "radio" },
    },
  },
} as ComponentMeta<typeof Select.Root>;

const Template: ComponentStory<typeof Select.Trigger> = (args) => (
  <Select.Root open>
    <Select.Trigger size={args.size}>Test trigger</Select.Trigger>
    <Select.Content size={args.size}>
      <Select.Item value="apple">Apple</Select.Item>
      <Select.Item value="pear">Pear</Select.Item>
    </Select.Content>
  </Select.Root>
);

export const Primary = Template.bind({});
