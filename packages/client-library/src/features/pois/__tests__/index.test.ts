import poisFunc from "../index";
import { poisResponse200 } from "./response-200";
import { Config } from "../../../types";

function mockRequest() {
  return {
    get: <T>(url: string, config?: Config) => Promise.resolve(poisResponse200 as T),
  };
}

describe("LocalLogicClient", () => {
  it("returns the response without data", async () => {
    const request = mockRequest();

    const pois = await poisFunc(request)({
      lat: 45.53297,
      lng: -73.5856,
      include: ["groceries"],
    });

    expect(pois.groceries[0].name).toBe("Metro");
  });

  it("throws a 'Yup' ValidationError when invalid lat or lng values are used", async () => {
    const request = mockRequest();

    await poisFunc(request)({
      lat: 91.0,
      lng: -73.5856,
      include: ["groceries"],
    }).catch((e) => {
      expect(e.message).toBe("Must be a valid latitude.");
    });

    await poisFunc(request)({
      lat: 45.53297,
      lng: -181.0,
      include: ["groceries"],
    }).catch((e) => {
      expect(e.message).toBe("Must be a valid longitude.");
    });
  });
});
