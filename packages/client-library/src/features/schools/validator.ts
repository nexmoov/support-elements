import { object, number, InferType, ObjectSchema, bool } from "yup";

interface BaseTypes {
  lat: number;
  lng: number;
  limit?: number;
  // This will try to refetch a second time if the main
  // number of POIs is less than the number passed as value
  // It will increase the radius and return max "attemptMinimum"
  attemptMinimum?: number;
  radius?: number;
  include_catchments?: boolean;
}

export const schema: ObjectSchema<BaseTypes> = object({
  lat: number()
    .min(-90, "Must be a valid latitude.")
    .max(90, "Must be a valid latitude.")
    .required(),
  lng: number()
    .min(-180, "Must be a valid longitude.")
    .max(180, "Must be a valid longitude.")
    .required(),
  limit: number().max(30, "Must use a limit between 1 and 30."),
  attemptMinimum: number().max(30),
  radius: number().max(25000, "Must use a radius between 1 and 25000."),
  include_catchments: bool(),
});

export type Params = InferType<typeof schema>;
