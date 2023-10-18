import { array, object, number, InferType, ObjectSchema, string } from "yup";
import { DataCategories } from "./constants";

interface BaseTypes {
  lat: number;
  lng: number;
  include: (keyof typeof DataCategories)[];
  radius?: number;
}

const includeRegex = new RegExp(
  `(${Object.keys(DataCategories)
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
  include: array()
    .of(
      string<keyof typeof DataCategories>()
        .matches(includeRegex, "Must be a valid Data category.")
        .required()
    )
    .required(),
  radius: number().max(5000),
});

export type Params = InferType<typeof schema>;
