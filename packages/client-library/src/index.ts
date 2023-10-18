import Requests from "./requests";
import { Options, Requests as RequestsType } from "./types";
import poisFunc, {
  poisMetadataFunc,
  POIs,
  POI,
  POIsCounts,
} from "./features/pois";
import scoresFunc, { Scores } from "./features/scores";
import schoolsFunc, { Schools, School } from "./features/schools";
import profilesFunc, { Profiles } from "./features/profiles";
import geographiesFunc, { Geographies } from "./features/geographies";
import dataFunc, {
  Data,
  Measures,
  Scores as DataScores,
} from "./features/data";
import demographicsFunc, {
  Demographics,
  Variable,
} from "./features/demographics";
import { Catch } from "./utils/error";

export class Methods {
  private requests: RequestsType;

  public options: Options;

  constructor(apiKey: string, options: Options = { locale: "en" }) {
    this.requests = Requests(apiKey, options);
    this.options = options;
  }

  @Catch
  public getPois(params: Parameters<ReturnType<typeof poisFunc>>[0]) {
    return poisFunc(this.requests)(params);
  }

  @Catch
  public getPoisMetadata(
    params: Parameters<ReturnType<typeof poisMetadataFunc>>[0]
  ) {
    return poisMetadataFunc(this.requests)(params);
  }

  @Catch
  public getScores(params: Parameters<ReturnType<typeof scoresFunc>>[0]) {
    return scoresFunc(this.requests)(params);
  }

  @Catch
  public getSchools(params: Parameters<ReturnType<typeof schoolsFunc>>[0]) {
    return schoolsFunc(this.requests)(params);
  }

  @Catch
  public getProfiles(params: Parameters<ReturnType<typeof profilesFunc>>[0]) {
    return profilesFunc(this.requests)(params);
  }

  @Catch
  public getGeographies(
    params: Parameters<ReturnType<typeof geographiesFunc>>[0]
  ) {
    return geographiesFunc(this.requests)(params);
  }

  @Catch
  public getDemographics(
    params: Parameters<ReturnType<typeof demographicsFunc>>[0]
  ) {
    return demographicsFunc(this.requests)(params);
  }

  @Catch
  public getData(params: Parameters<ReturnType<typeof dataFunc>>[0]) {
    return dataFunc(this.requests)(params);
  }
}

const LocalLogicClient = (apiKey: string, options?: Options) =>
  new Methods(apiKey, options);

export default LocalLogicClient;

/**
 * Export types
 */
export type {
  POI,
  POIs,
  POIsCounts,
  Scores,
  Schools,
  School,
  Profiles,
  Geographies,
  Demographics,
  Variable,
  Data,
  Measures,
  DataScores,
};

/**
 * Export Error typeguards
 */
export * from "./utils/error/typeguards";

/**
 * Export constants
 */
export { POICategories } from "./features/pois/constants";
export { ScoreNames } from "./features/scores/constants";
export { DataCategories } from "./features/data/constants";
