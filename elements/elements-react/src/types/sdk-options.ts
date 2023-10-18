import React from "react";

export type SDKOptions<
  P extends {
    options?: { [key: string]: unknown };
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    onChange?: ({ type, data }: { type: any; data: unknown }) => void;
  }
> = {
  children?: React.ReactNode;
} & P;
