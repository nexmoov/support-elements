export type SchoolLevel = "preschool" | "elementary" | "middle" | "secondary";

export interface School {
  name: string;
  address: string;
  city: string;
  province: string;
  postalcode: string;
  country: string;
  lat: number;
  lng: number;
  url?: string;
  school_attributes?: {
    levels?: SchoolLevel[];
    grades?: string;
    languages?: string[];
    types?: ("public" | "private")[];
    programs?: string[];
  };
  school_board_attributes?: {
    name?: string;
    url?: string;
  };
  proximity: {
    linear_distance: number;
    walking?: {
      quality: string;
      distance: number;
      travel_time: number;
    };
  };
  catchments?: {
    geometry?: string[][];
    inside?: boolean;
    program?: string;
    grades?: string;
    level?: string;
  }[];
}

export interface Schools {
  primary_schools: School[];
  high_schools: School[];
}

export interface SchoolsResponse {
  data: Schools;
}
