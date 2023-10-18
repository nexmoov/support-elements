import profilesFunc from "../index";
import { profilesResponse200 } from "./response-200";
import { Config } from "../../../types";

function mockRequest() {
  return {
    get: <T>(url: string, config?: Config) => Promise.resolve(profilesResponse200 as T),
  };
}

describe("LocalLogicClient", () => {
  it("returns the response without data", async () => {
    const request = mockRequest();

    const profiles = await profilesFunc(request)({
      lat: 45.53297,
      lng: -73.5856,
    });

    expect(profiles.profiles.character).toBe(
      "Parc-Laurier offers a variety of experiences for those who enjoy a vibrant atmosphere and spending time outdoors. There are a very large number of things to do in this part of Montréal for those looking for a dynamic vibe. There are masses of people around most of the time, a great selection of entertainment venues can be found nearby, and with its approximately 20 bars, there are options for nighttime activities. Avenue du Mont-Royal in particular offers a wide variety of bars. The greenery in this part of Montréal is prominent; it is very easy to access green spaces in the neighbourhood since there are a few of them close by for residents to unwind in. In addition, residents will find that there are many tree-lined streets."
    );
  });

  it("throws a 'Yup' ValidationError when invalid lat or lng values are used", async () => {
    const request = mockRequest();

    await profilesFunc(request)({
      lat: 91.0,
      lng: -73.5856,
    }).catch((e) => {
      expect(e.message).toBe("Must be a valid latitude.");
    });

    await profilesFunc(request)({
      lat: 45.53297,
      lng: -181.0,
    }).catch((e) => {
      expect(e.message).toBe("Must be a valid longitude.");
    });
  });
});
