import { POI, School } from "@local-logic/client";

export const isSchool = (poi: POI | School, type: "school" | "poi"): poi is School =>
  type === "school";
