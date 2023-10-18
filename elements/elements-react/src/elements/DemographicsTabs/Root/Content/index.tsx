import React from "react";
import * as Tabs from "@radix-ui/react-tabs";
import { ContentProps } from "./types";

export const Content = ({
  children,
  options: { value, style },
}: ContentProps) => (
  <Tabs.Content value={value} key={value} style={style}>
    {children}
  </Tabs.Content>
);
