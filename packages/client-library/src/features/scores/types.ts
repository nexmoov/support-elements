export interface ScoreVal {
  value: string;
  text: string;
}

export interface Location {
  high_schools: ScoreVal;
  primary_schools: ScoreVal;
  transit_friendly: ScoreVal;
  groceries: ScoreVal;
  restaurants: ScoreVal;
  pedestrian_friendly: ScoreVal;
  greenery: ScoreVal;
  historic: ScoreVal;
  cycling_friendly: ScoreVal;
  car_friendly: ScoreVal;
  vibrant: ScoreVal;
  shopping: ScoreVal;
  nightlife: ScoreVal;
  cafes: ScoreVal;
  quiet: ScoreVal;
  parks: ScoreVal;
  daycares: ScoreVal;
  wellness: ScoreVal;
}

export interface Geography {
  geog_id: string;
  name: string;
  geog_level_type: "neighbourhood" | "municipality" | "macro neighbourhood";
  scores: Location;
}

export interface Scores {
  type: "scores";
  location: Location;
  geographies: Geography[];
}

export interface ScoresResponse {
  data: Scores;
}
