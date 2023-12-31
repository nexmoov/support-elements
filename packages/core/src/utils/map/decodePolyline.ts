/* eslint-disable no-bitwise */

import { FeatureCollection, Geometry, GeometryCollection, Properties } from "@turf/turf";

/*
 * Copyright (C) 2019 HERE Europe B.V.
 * Licensed under MIT, see full license in LICENSE
 * SPDX-License-Identifier: MIT
 * License-Filename: LICENSE
 */

const DECODING_TABLE = [
  62, -1, -1, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, -1, -1, -1, -1, -1, -1, -1, 0, 1, 2, 3, 4, 5,
  6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, -1, -1, -1, -1, 63,
  -1, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48,
  49, 50, 51,
];

const FORMAT_VERSION = 1;

const Num = typeof BigInt !== "undefined" ? BigInt : Number;

function decodeChar(char: string) {
  const charCode = char.charCodeAt(0);

  return DECODING_TABLE[charCode - 45];
}

function decodeUnsignedValues(encoded: string) {
  let result = Num(0);
  let shift = Num(0);
  const resList: (number | bigint)[] = [];

  encoded.split("").forEach((char: string) => {
    const value = Num(decodeChar(char));
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    result |= (value & Num(0x1f)) << shift;
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    if ((value & Num(0x20)) === Num(0)) {
      resList.push(result);
      result = Num(0);
      shift = Num(0);
    } else {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      shift += Num(5);
    }
  });

  if (shift > 0) {
    throw new Error("Invalid encoding");
  }

  return resList;
}

function decodeHeader(version: number | bigint, encodedHeader: number | bigint) {
  if (+version.toString() !== FORMAT_VERSION) {
    throw new Error("Invalid format version");
  }
  const headerNumber = +encodedHeader.toString();
  const precision = headerNumber & 15;
  const thirdDim = (headerNumber >> 4) & 7;
  const thirdDimPrecision = (headerNumber >> 7) & 15;

  return { precision, thirdDim, thirdDimPrecision };
}

function toSigned(val: number) {
  // Decode the sign from an unsigned value
  let res: number | bigint = val;

  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  if (res & Num(1)) {
    res = ~res;
  }

  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  res >>= Num(1);
  return +res.toString();
}

export function decodePolyline(encoded: string) {
  const decoder = decodeUnsignedValues(encoded);
  const header = decodeHeader(decoder[0], decoder[1]);

  const factorDegree = 10 ** header.precision;
  const factorZ = 10 ** header.thirdDimPrecision;
  const { thirdDim } = header;

  let lastLat = 0;
  let lastLng = 0;
  let lastZ = 0;
  const res = [];

  let i = 2;

  for (; i < decoder.length; ) {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    const deltaLat = toSigned(decoder[i]) / factorDegree;
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    const deltaLng = toSigned(decoder[i + 1]) / factorDegree;
    lastLat += deltaLat;
    lastLng += deltaLng;

    if (thirdDim) {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      const deltaZ = toSigned(decoder[i + 2]) / factorZ;
      lastZ += deltaZ;
      res.push([lastLng, lastLat, lastZ]);
      i += 3;
    } else {
      res.push([lastLng, lastLat]);
      i += 2;
    }
  }

  if (i !== decoder.length) {
    throw new Error("Invalid encoding. Premature ending reached");
  }

  const responseObject = {
    type: "FeatureCollection",
    features: [
      {
        id: "route",
        type: "Feature",
        geometry: {
          type: "LineString",
          coordinates: res,
        },
      },
    ],
  } as FeatureCollection<Geometry | GeometryCollection, Properties>;

  return responseObject;
}
