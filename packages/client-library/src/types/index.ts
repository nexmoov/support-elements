export interface Options {
  locale?: "en" | "fr";
}

export interface Config {
  params?: {
    [key: string]: string | number | boolean | undefined;
  }
}

export interface Requests {
  get: <T>(url: string, config?: Config) => Promise<T>;
}
