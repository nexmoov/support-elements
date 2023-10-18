import { object, number, InferType, ObjectSchema } from "yup";

interface BaseTypes {
  lat: number;
  lng: number;
  radius?: number;
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
  radius: number().max(5000),
});

export type Params = InferType<typeof schema>;
