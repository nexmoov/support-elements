import { FeatureCollection, MultiPolygon } from "@turf/turf";

export function formatGeometry(schoolGeometry: string[][] = []) {
  /* Geometries need formatting before being added as a Source in the Map.
   ** Geometries from v3/schools have a format of [lat, lng]
   ** Geojson accepts polygons with a format of [lng, lat]
   */

  const geometryLatLngFormat = (arr: object): object =>
    Object.values(arr).map((a) => {
      if (Array.isArray(a[0])) {
        return geometryLatLngFormat(a);
      }

      return [a[1], a[0]];
    });

  const finalCoordinates = geometryLatLngFormat(schoolGeometry);

  const responseObject = {
    type: "FeatureCollection",
    features: [
      {
        id: "schoolCatchment",
        type: "Feature",
        geometry: {
          type: "MultiPolygon",
          coordinates: finalCoordinates,
        },
      },
    ],
  } as FeatureCollection<MultiPolygon>;

  return responseObject;
}
