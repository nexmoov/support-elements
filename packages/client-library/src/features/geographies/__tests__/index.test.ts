import geographiesFunc from "../index";
import { geographiesResponse200 } from "./response-200";
import { Config } from "../../../types";

function mockRequest() {
  return {
    get: <T>(url: string, config?: Config) => Promise.resolve(geographiesResponse200 as T),
  };
}

describe("LocalLogicClient", () => {
  it("returns the response without data", async () => {
    const request = mockRequest();

    const geographies = await geographiesFunc(request)({
      lat: 45.53297,
      lng: -73.5856,
    });

    expect(geographies.geographies.g10_f25ej88y.name.en).toBe("Parc-Laurier");
  });

  it("throws a 'Yup' ValidationError when invalid lat or lng values are used", async () => {
    const request = mockRequest();

    await geographiesFunc(request)({
      lat: 91.0,
      lng: -73.5856,
    }).catch((e) => {
      expect(e.message).toBe("Must be a valid latitude.");
    });

    await geographiesFunc(request)({
      lat: 45.53297,
      lng: -181.0,
    }).catch((e) => {
      expect(e.message).toBe("Must be a valid longitude.");
    });
  });
});
