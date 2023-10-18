import { route } from "./constants";
import { POIsResponse, POIsMetadataResponse } from "./types";
import { schema, Params } from "./validator";
import { Requests } from "../../types";
import { responseHasMinimumPois } from "../../utils/response";

export default (requests: Requests) => async (params: Params) => {
  const validated = await schema.validate(params);
  const { lat, lng, limit, attemptMinimum, radius, include } = validated;

  let response = await requests.get<POIsResponse>(route, {
    params: {
      lat,
      lng,
      limit,
      radius,
      include: include?.join(","),
    },
  });

  // Ability to attempt and get a minimum of POIs. This can be useful
  // in rural areas where generally there is nothing within close distance
  // https://locallogic.atlassian.net/browse/LL22-2051
  if (
    typeof attemptMinimum !== "undefined" &&
    !responseHasMinimumPois(response?.data || null, attemptMinimum)
  ) {
    response = await requests.get<POIsResponse>(route, {
      params: {
        lat,
        lng,
        limit: attemptMinimum,
        radius: 10000, // Max is 25km
        include: include?.join(","),
      },
    });
  }

  /**
   * The V3 API returns a 204 in some situations (the response is a success,
   * but no data is returned). We can backfill the issue by returning an
   * object with empty arrays for the queried pois.
   */
  const fallbackResponse = include.reduce(
    (acc, curr) => ({ ...acc, [curr]: [] }),
    {}
  );

  return response.data || fallbackResponse;
};

export const poisMetadataFunc =
  (requests: Requests) => async (params: Params) => {
    const validated = await schema.validate(params);
    const { lat, lng, limit, radius, include } = validated;

    const response = await requests.get<POIsMetadataResponse>(route, {
      params: {
        lat,
        lng,
        limit,
        radius,
        include: include?.join(","),
      },
    });

    /**
     * The V3 API returns a 204 in some situations (the response is a success,
     * but no data is returned). We can backfill the issue by returning an
     * object with empty arrays for the queried pois.
     */
    const fallbackResponse = include.reduce(
      (acc, curr) => ({ ...acc, [curr]: 0 }),
      {}
    );

    return response.meta.counts || fallbackResponse;
  };

export * from "./types";
export * from "./constants";
