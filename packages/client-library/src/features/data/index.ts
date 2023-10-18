import { route } from "./constants";
import { schema, Params } from "./validator";
import { DataResponse } from "./types";
import { Requests } from "../../types";

export default (requests: Requests) => async (params: Params) => {
  const validated = await schema.validate(params);
  const { lat, lng, radius, include } = validated;

  const response = await requests.get<DataResponse>(route, {
    params: {
      lat,
      lng,
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
    (acc, curr) => ({ ...acc, [curr]: [] }),
    {}
  );

  return response.data || fallbackResponse;
};

export * from "./types";
export * from "./constants";
