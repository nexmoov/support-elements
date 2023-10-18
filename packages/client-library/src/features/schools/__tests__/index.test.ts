import schoolsFunc from "../index";
import { schoolsResponse200 } from "./response-200";
import { Config } from "../../../types";

function mockRequest() {
  return {
    get: <T>(url: string, config?: Config) => Promise.resolve(schoolsResponse200 as T),
  };
}

describe("LocalLogicClient", () => {
  it("returns the response without data", async () => {
    const request = mockRequest();

    const schools = await schoolsFunc(request)({
      lat: 45.53297,
      lng: -73.5856,
    });

    expect(schools.primary_schools[0].name).toBe(
      "École Paul-Bruchési (Paul-Bruchési)"
    );
  });

  it("throws a 'Yup' ValidationError when invalid lat or lng values are used", async () => {
    const request = mockRequest();

    await schoolsFunc(request)({
      lat: 91.0,
      lng: -73.5856,
    }).catch((e) => {
      expect(e.message).toBe("Must be a valid latitude.");
    });

    await schoolsFunc(request)({
      lat: 45.53297,
      lng: -181.0,
    }).catch((e) => {
      expect(e.message).toBe("Must be a valid longitude.");
    });
  });

  it("throws a 'Yup' ValidationError when invalid limit is used", async () => {
    const request = mockRequest();

    await schoolsFunc(request)({
      lat: 91.0,
      lng: -73.5856,
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      limit: 31, // 40 is not valid
    }).catch((e) => {
      expect(e.message).toBe("Must use a limit between 1 and 30.");
    });
  });

  it("throws a 'Yup' ValidationError when invalid radius is used", async () => {
    const request = mockRequest();

    await schoolsFunc(request)({
      lat: 91.0,
      lng: -73.5856,
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      radius: 25001, // 40 is not valid
    }).catch((e) => {
      expect(e.message).toBe("Must use a radius between 1 and 25000.");
    });
  });
});
