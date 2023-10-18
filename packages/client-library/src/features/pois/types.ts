export interface POI {
  name: string;
  address?: string;
  city?: string;
  province?: string;
  postalcode?: string;
  country: string;
  lat: number;
  lng: number;
  url?: string;
  proximity: {
    linear_distance: number;
    walking?: {
      quality: number;
      distance: number;
      travel_time: number;
    };
  };
  routes?: {
    short_name: string;
    long_name: string;
    route_color: string;
    text_color: string;
  }[];
}

export interface POIs {
  art_culture_science: POI[];
  bus_stops: POI[];
  cafes: POI[];
  car_fueling_stations: POI[];
  daycares: POI[];
  fitness: POI[];
  groceries_specialized: POI[];
  groceries: POI[];
  health_care: POI[];
  healthy_restaurants: POI[];
  home_improvement: POI[];
  nightlife: POI[];
  parks: POI[];
  personal_care: POI[];
  pet_care: POI[];
  rapid_transit_stations: POI[];
  restaurants: POI[];
  shopping: POI[];
  sport_facilities: POI[];
  train_stations: POI[];
}

export interface POIsCounts {
  art_culture_science: number;
  bus_stops: number;
  cafes: number;
  car_fueling_stations: number;
  daycares: number;
  fitness: number;
  groceries_specialized: number;
  groceries: number;
  health_care: number;
  healthy_restaurants: number;
  home_improvement: number;
  nightlife: number;
  parks: number;
  personal_care: number;
  pet_care: number;
  rapid_transit_stations: number;
  restaurants: number;
  shopping: number;
  sport_facilities: number;
  train_stations: number;
}

export interface POIsResponse {
  data: POIs;
}

export interface POIsMetadataResponse {
  meta: {
    counts: POIsCounts;
  };
}
