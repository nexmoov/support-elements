import { route } from "./constants";
import { SchoolsResponse } from "./types";
import { schema, Params } from "./validator";
import { Requests } from "../../types";
import { responseHasMinimumPois } from "../../utils/response";

export default (requests: Requests) => async (params: Params) => {
  const validated = await schema.validate(params);
  const {
    lat,
    lng,
    limit,
    attemptMinimum,
    radius,
    // eslint-disable-next-line camelcase
    include_catchments,
  } = validated;

  let response = await requests.get<SchoolsResponse>(route, {
    params: {
      lat,
      lng,
      limit,
      radius,
      // eslint-disable-next-line camelcase
      include_catchments,
    },
  });

  // Ability to attempt and get a minimum of POIs. This can be useful
  // in rural areas where generally there is nothing within close distance
  // https://locallogic.atlassian.net/browse/LL22-2051
  if (
    typeof attemptMinimum !== "undefined" &&
    !responseHasMinimumPois(response?.data || null, attemptMinimum)
  ) {
    response = await requests.get<SchoolsResponse>(route, {
      params: {
        lat,
        lng,
        limit: attemptMinimum,
        radius: 10000, // Max is 25km
        // eslint-disable-next-line camelcase
        include_catchments,
      },
    });
  }

  return response.data;
};

export * from "./types";
export * from "./constants";
