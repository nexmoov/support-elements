import scoresFunc from "../index";
import { scoreResponse200 } from "./response-200";
import { Config } from "../../../types";

function mockRequest() {
  return {
    get: <T>(url: string, config?: Config) => Promise.resolve(scoreResponse200 as T),
  };
}

describe("LocalLogicClient", () => {
  it("returns the response without data", async () => {
    const request = mockRequest();

    const scores = await scoresFunc(request)({
      lat: 45.53297,
      lng: -73.5856,
    });

    expect(scores.location.groceries.value).toBe("4.0");
  });

  it("validation is successful for all include keys", async () => {
    const request = mockRequest();

    const scores = await scoresFunc(request)({
      lat: 45.53297,
      lng: -73.5856,
      include: [
        "pedestrian_friendly",
        "cycling_friendly",
        "transit_friendly",
        "car_friendly",
        "groceries",
        "shopping",
        "nightlife",
        "restaurants",
        "cafes",
        "daycares",
        "primary_schools",
        "high_schools",
        "quiet",
        "greenery",
        "historic",
        "vibrant",
      ],
    });

    expect(scores.location.groceries.value).toBe("4.0");
  });

  it("throws a 'Yup' ValidationError when a bad include key is used", async () => {
    const request = mockRequest();

    await scoresFunc(request)({
      lat: 45.53297,
      lng: -73.5856,
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      include: ["bad_key"],
    }).catch((e) => {
      expect(e.message).toBe("Must be a valid Score category.");
    });
  });

  it("throws a 'Yup' ValidationError when an invalid geography level is used", async () => {
    const request = mockRequest();

    await scoresFunc(request)({
      lat: 45.53297,
      lng: -73.5856,
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      geographyLevels: [10, 20, 30, 40], // 40 is not valid
    }).catch((e) => {
      expect(e.message).toBe("Must be a valid Geography level.");
    });
  });

  it("throws a 'Yup' ValidationError when invalid lat or lng values are used", async () => {
    const request = mockRequest();

    await scoresFunc(request)({
      lat: 91.0,
      lng: -73.5856,
    }).catch((e) => {
      expect(e.message).toBe("Must be a valid latitude.");
    });

    await scoresFunc(request)({
      lat: 45.53297,
      lng: -181.0,
    }).catch((e) => {
      expect(e.message).toBe("Must be a valid longitude.");
    });
  });
});
