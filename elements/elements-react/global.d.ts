declare module "*.svg" {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const content: any;
  export default svg;
}

declare module "*.png" {
  const value: string;
  export default value;
}
