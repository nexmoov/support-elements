// eslint-disable-next-line @typescript-eslint/no-var-requires
const jestconfig = require("jestconfig");

module.exports = {
  ...jestconfig,
  rootDir: ".",
  moduleNameMapper: {
    "^~/(.*)$": "<rootDir>/src/$1",
    "\\.(css|less|sass|scss)$": "<rootDir>/__mocks__/style-mocks.js",
  },
};
