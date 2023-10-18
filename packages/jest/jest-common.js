module.exports = {
  moduleFileExtensions: ["js", "jsx", "ts", "tsx", "json"],
  moduleDirectories: ["node_modules"],
  resetMocks: true,
  testRegex: "(/__tests__/.*|(\\.|/)(test))\\.[jt]sx?$",

  /**
   * We need to us JSDOM to simulate unit testing in a browser environment.
   */
  testEnvironment: "jsdom",

  /**
   * We use 'babel' and 'babel-jest` for compilation for unit tests ONLY. Since
   * 'elements-js` and 'elements-react' are libraries, in prod clients are
   * expected to handle compilation on their end.
   */
  transform: {
    "^.+\\.[jt]sx?$": "babel-jest",
    "\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$":
      "<rootDir>../../packages/jest/testFileTransformer.js",
  },
};
