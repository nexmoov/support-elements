import { Options, Config, Requests } from "./types";

const RequestsWrapper = (apiKey: string, options?: Options): Requests => {
  const baseURL = import.meta.env.VITE_API_URL || "https://api.locallogic.co/v3";

  async function get<T>(url: string, config?: Config): Promise<T> {
    let searchParams: URLSearchParams;

    if (config?.params) {
      const cleanParams = Object.entries(config.params)
        .filter(([key, value]) => value !== undefined)
        .reduce((obj, [key, value]) => {
          // eslint-disable-next-line @typescript-eslint/ban-ts-comment
          // @ts-ignore
          // eslint-disable-next-line no-param-reassign
          obj[key] = value;
          return obj;
        }, {});

      searchParams = new URLSearchParams({
        ...options,
        ...cleanParams,
        /**
         * The "locale" param has been renamed to "language".
         * https://locallogic.atlassian.net/browse/LL22-1220
         */
        ...(options?.locale && { language: options?.locale }),
      });
    } else {
      searchParams = new URLSearchParams({
        ...options,
        /**
         * The "locale" param has been renamed to "language".
         * https://locallogic.atlassian.net/browse/LL22-1220
         */
        ...(options?.locale && { language: options?.locale }),
      });
    }

    const response = await fetch(
      `${baseURL}${url}?${searchParams}`,
      {
        headers: {
          Accept: "application/json",
          Authorization: apiKey,
        },
      }
    );

    return response.json();
  }

  return {
    get,
  };
};

export default RequestsWrapper;
