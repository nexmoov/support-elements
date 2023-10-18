import { expect, describe, it } from "@jest/globals";
import { mergeDeep } from "../objectUtils";

describe("deepMerge", () => {
  it("can merge two shallow object", async () => {
    const object1 = { test1: 1 };
    const object2 = { test2: 2 };

    const merged = mergeDeep(object1, object2);

    expect(merged).toEqual({
      test1: 1,
      test2: 2,
    });
  });

  it("can merge three shallow objects", async () => {
    const object1 = { test1: 1 };
    const object2 = { test2: 2 };
    const object3 = { test3: 3 };

    const merged = mergeDeep(object1, object2, object3);

    expect(merged).toEqual({
      test1: 1,
      test2: 2,
      test3: 3,
    });
  });

  it("can handle shallow merge conflicts", async () => {
    const object1 = { test1: 1 };
    const object2 = { test1: 2 };
    const object3 = { test3: 3 };

    const merged = mergeDeep(object1, object2, object3);

    expect(merged).toEqual({
      test1: 2,
      test3: 3,
    });
  });

  it("can handle deep merges", async () => {
    const object1 = {
      someKey: 1,
      test1: {
        nestedTest1: 1,
      },
    };
    const object2 = {
      test1: {
        nestedTest1: 2,
      },
    };

    const merged = mergeDeep(object1, object2);

    expect(merged).toEqual({
      someKey: 1,
      test1: {
        nestedTest1: 2,
      },
    });
  });
});
