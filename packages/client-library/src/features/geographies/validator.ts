import { object, number, string, InferType, ObjectSchema } from "yup";

interface BaseTypes {
  lat: number;
  lng: number;
  include?: "geometry";
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
  include: string().oneOf(["geometry" as const]),
});

export type Params = InferType<typeof schema>;
