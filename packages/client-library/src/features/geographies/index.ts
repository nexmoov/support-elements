import { route } from "./constants";
import { schema, Params } from "./validator";
import { GeographiesResponse } from "./types"
import { Requests } from "../../types";

export default (requests: Requests) => async (params: Params) => {
  const validated = await schema.validate(params);
  const { lat, lng, include } = validated;
  const response = await requests.get<GeographiesResponse>(route, {
    params: {
      lat,
      lng,
      include,
    },
  });

  return response.data;
};

export * from "./types";
export * from "./constants";
