import {
  object,
  number,
  string,
  InferType,
  ObjectSchema,
} from "yup";

interface BaseTypes {
  lat?: number;
  lng?: number;
  geogId?: string;
}

export const schema: ObjectSchema<BaseTypes> = object({
  lat: number()
    .min(-90, "Must be a valid latitude.")
    .max(90, "Must be a valid latitude."),
  lng: number()
    .min(-180, "Must be a valid longitude.")
    .max(180, "Must be a valid longitude."),
  geogId: string()
});

export type Params = InferType<typeof schema>;
