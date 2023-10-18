import React from "react";
import { StoryFn, Meta } from "@storybook/react";
import { Content, Root, Tabs, Select } from "./index";

const Story: Meta<typeof Root> = {
  title: "Unofficial/DemographicsCategoryTabs",
  component: Root,
  argTypes: {
    options: {
      activeTab: "income",
    },
  },
};
export default Story;

const DesktopAllTemplate: StoryFn<typeof Root> = (args) => (
  <Root {...args}>
    <Tabs />
    <Content
      options={{
        value: "income",
      }}
    />
  </Root>
);

const DesktopTemplate: StoryFn<typeof Root> = (args) => (
  <Root {...args}>
    <Tabs />
    <Content
      options={{
        value: "income",
      }}
    />
  </Root>
);

const MobileTemplate: StoryFn<typeof Root> = (args) => (
  <Root {...args}>
    <Select />
    <Content options={{ value: "income" }} />
  </Root>
);

export const DesktopAll = DesktopTemplate.bind({});
DesktopAll.args = {
  options: {
    activeTab: "income",
  },
};

export const Desktop = DesktopTemplate.bind({});
Desktop.args = {
  options: {
    activeTab: "income",
    omitTabs: ["household"],
  },
};

export const Mobile = MobileTemplate.bind({});
Mobile.args = {
  options: {
    activeTab: "household",
    omitTabs: ["income"],
  },
};
