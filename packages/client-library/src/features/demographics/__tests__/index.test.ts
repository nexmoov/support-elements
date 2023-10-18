import demographicsFunc from "../index";
import { demographicsResponse200 } from "./response-200";
import { Config } from "../../../types";

function mockRequest() {
  return {
    get: <T>(url: string, config?: Config) => Promise.resolve(demographicsResponse200 as T),
  };
}

describe("LocalLogicClient", () => {
  it("returns the response without data", async () => {
    const request = mockRequest();

    const demographics = await demographicsFunc(request)({
      lat: 45.53297,
      lng: -73.5856,
    });

    expect(demographics.commute_mode.variables[0].value).toBe(0.3761);
  });

  it("throws a 'Yup' ValidationError when invalid lat or lng values are used", async () => {
    const request = mockRequest();

    await demographicsFunc(request)({
      lat: 91.0,
      lng: -73.5856,
    }).catch((e) => {
      expect(e.message).toBe("Must be a valid latitude.");
    });

    await demographicsFunc(request)({
      lat: 45.53297,
      lng: -181.0,
    }).catch((e) => {
      expect(e.message).toBe("Must be a valid longitude.");
    });
  });
});
