import { object, number, array, string, InferType, ObjectSchema } from "yup";
import { POICategories } from "./constants";

interface BaseTypes {
  lat: number;
  lng: number;
  limit?: number;
  // This will try to refetch a second time if the main
  // number of POIs is less than the number passed as value
  // It will increase the radius and return max "attemptMinimum"
  attemptMinimum?: number;
  radius?: number;
  include: (keyof typeof POICategories)[];
}

const includeRegex = new RegExp(
  `(${Object.keys(POICategories)
    .filter((key) => Number.isNaN(Number(key)))
    .join("|")})`
);

export const schema: ObjectSchema<BaseTypes> = object({
  lat: number()
    .min(-90, "Must be a valid latitude.")
    .max(90, "Must be a valid latitude.")
    .required(),
  lng: number()
    .min(-180, "Must be a valid longitude.")
    .max(180, "Must be a valid longitude.")
    .required(),
  limit: number().max(30),
  attemptMinimum: number().max(30),
  radius: number().max(25000),
  include: array()
    .of(
      string<keyof typeof POICategories>()
        .matches(includeRegex, "Must be a valid Score category.")
        .required()
    )
    .required(),
});

export type Params = InferType<typeof schema>;
