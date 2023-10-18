import { route } from "./constants";
import { ScoresResponse } from "./types";
import { schema, Params } from "./validator";
import { Requests } from "../../types";

export default (requests: Requests) =>
  async (params: Params) => {
    const validated = await schema.validate(params);
    const {
      lat,
      lng,
      include,
      geographyIds,
      geographyLevels,
      locationScoresRounding = true,
    } = validated;

    const response = await requests.get<ScoresResponse>(route, {
      params: {
        lat,
        lng,
        include: include?.join(","),
        geography_levels: geographyLevels?.join(","),
        geography_ids: geographyIds?.join(","),
        location_scores_rounding: locationScoresRounding ? ".5" : "none",
      },
    });

    return response.data;
  };

export * from "./types";
export * from "./constants";
