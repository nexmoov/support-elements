export interface Profiles {
  profiles: {
    transport: string;
    services: string;
    character: string;
    housing: string;
  };
  id: string;
  intro: string;
  name: string;
  exception?: string;
}

export interface Meta {
  sections: {
    transport: string;
    services: string;
    character: string;
    housing: string;
  };
  geometry: number[][];
}

export interface ProfilesResponse {
  data: Profiles;
  meta: Meta;
}
