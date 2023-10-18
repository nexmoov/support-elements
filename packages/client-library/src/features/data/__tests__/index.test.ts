import dataFunc from "../index";
import { dataResponse200 } from "./response-200";
import { Config } from "../../../types";

function mockRequest() {
  return {
    get: <T>(url: string, config?: Config) => Promise.resolve(dataResponse200 as T),
  };
}

describe("LocalLogicClient", () => {
  it("returns the response without data", async () => {
    const request = mockRequest();

    const data = await dataFunc(request)({
      lat: 45.53297,
      lng: -73.5856,
      include: ["measures_all"],
    });

    expect(data.measures?.bus_service_access).toBe(3.4690947908);
  });

  it("throws a 'Yup' ValidationError when invalid lat or lng values are used", async () => {
    const request = mockRequest();

    await dataFunc(request)({
      lat: 91.0,
      lng: -73.5856,
      include: ["measures_all"],
    }).catch((e) => {
      expect(e.message).toBe("Must be a valid latitude.");
    });

    await dataFunc(request)({
      lat: 45.53297,
      lng: -181.0,
      include: ["measures_all"],
    }).catch((e) => {
      expect(e.message).toBe("Must be a valid longitude.");
    });
  });
});
