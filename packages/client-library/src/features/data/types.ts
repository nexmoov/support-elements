export interface Measures {
  airport_noise: number;
  bus_service_access: number;
  casino_access: number;
  clothing_and_accessory_store_access: number;
  coffee_shop_access: number;
  common_needs_access: number;
  department_store_access: number;
  entertainment_venue_access: number;
  fitness_establishment_access: number;
  healthy_restaurant_access: number;
  infrastructure_unpleasant_for_pedestrians: number;
  interchange_noise: number;
  intersection_density: number;
  local_street_proportion: number;
  nearest_bicycle_share_station_proximity: number;
  nearest_bus_stop_proximity: number;
  nearest_clothing_and_accessory_store_proximity: number;
  nearest_coffee_shop_proximity: number;
  nearest_fitness_establishment_proximity: number;
  nearest_general_grocery_store_proximity: number;
  nearest_healthy_restaurant_proximity: number;
  nearest_highway_proximity: number;
  nearest_nightlife_proximity: number;
  nearest_park_proximity: number;
  nearest_pharmacy_proximity: number;
  nearest_rapid_transit_station_proximity: number;
  nearest_restaurant_proximity: number;
  nearest_sports_facility_proximity: number;
  nearest_train_station_proximity: number;
  nearest_unhealthy_restaurant_proximity: number;
  nightlife_access: number;
  park_access: number;
  park_access_weighted_by_area: number;
  pedestrian_oriented_street_access: number;
  railway_noise: number;
  rapid_transit_service_access: number;
  restaurant_access: number;
  shops_and_services_access: number;
  specialty_grocery_store_access: number;
  sports_facility_access: number;
  street_steepness: number;
  terrain_steepness: number;
  traffic_noise: number;
  train_service_access: number;
  unhealthy_restaurant_access: number;
}

export interface Scores {
  cafes: string;
  car_friendly: string;
  cycling_friendly: string;
  daycares: string;
  greenery: string;
  groceries: string;
  high_schools: string;
  historic: string;
  nightlife: string;
  parks: string;
  pedestrian_friendly: string;
  primary_schools: string;
  quiet: string;
  restaurants: string;
  shopping: string;
  transit_friendly: string;
  vibrant: string;
  wellness: string;
}

export type Data = {
  measures?: Measures;
  scores?: Scores;
};

export interface DataResponse {
  data: Data;
}
