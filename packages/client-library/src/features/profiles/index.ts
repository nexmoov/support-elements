import { route } from "./constants";
import { ProfilesResponse } from "./types";
import { schema, Params } from "./validator";
import { Requests } from "../../types";

export default (requests: Requests) =>
  async (params: Params) => {
    const validated = await schema.validate(params);
    const {
      lat,
      lng,
      geogId,
    } = validated;
    const response = await requests.get<ProfilesResponse>(route, {
      params: {
        lat,
        lng,
        geog_id: geogId
      },
    });

    return response.data;
  };

export * from "./types";
export * from "./constants";
