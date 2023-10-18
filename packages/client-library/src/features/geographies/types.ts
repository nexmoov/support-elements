export interface Geography {
  name: {
    en: string;
    fr: string;
  };
  level_type: {
    en: string;
    fr: string;
  };
  level: 10 | 20 | 30 | 40;
  geometry: unknown[];
}

export interface Geographies {
  type: "geographies";
  geographies: {
    [key: string]: Geography;
  };
}

export interface GeographiesResponse {
  data: Geographies;
}
