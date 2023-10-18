import {
  object,
  number,
  array,
  string,
  boolean,
  InferType,
  ObjectSchema,
} from "yup";
import { ScoreNames } from "./constants";

interface BaseTypes {
  lat?: number;
  lng?: number;
  geographyIds?: string[];
  geographyLevels?: ("10" | "20" | "30")[];
  locationScoresRounding?: boolean;
  include?: (keyof typeof ScoreNames)[];
}

const includeRegex = new RegExp(
  `(${Object.keys(ScoreNames)
    .filter((key) => Number.isNaN(Number(key)))
    .join("|")})`
);

export const schema: ObjectSchema<BaseTypes> = object({
  lat: number()
    .min(-90, "Must be a valid latitude.")
    .max(90, "Must be a valid latitude."),
  lng: number()
    .min(-180, "Must be a valid longitude.")
    .max(180, "Must be a valid longitude."),
  geographyIds: array().of(string().required()),
  geographyLevels: array().of(
    string<"10" | "20" | "30">().matches(/10|20|30/,  "Must be a valid Geography level.").required()
  ),
  locationScoresRounding: boolean(),
  include: array().of(
    string<keyof typeof ScoreNames>().matches(includeRegex, "Must be a valid Score category.").required()
  ),
});

export type Params = InferType<typeof schema>;
