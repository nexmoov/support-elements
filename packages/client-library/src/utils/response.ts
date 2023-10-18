import { POIs } from "../features/pois/types";
import { Schools } from "../features/schools/types";

export function responseHasMinimumPois(pois: POIs | Schools, minimum: number) {
  if (!pois) {
    return false;
  }

  let numberOfPoisRetrieved = 0;

  Object.values(pois).forEach((scorePois) => {
    numberOfPoisRetrieved += scorePois?.length || 0;
  });

  return numberOfPoisRetrieved >= minimum;
}
