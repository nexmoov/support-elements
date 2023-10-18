module.exports = {
  extends: ["@local-logic/eslint-config/base", "@local-logic/eslint-config/react"],
  settings: {
    "import/resolver": {
      typescript: {},
      node: {
        extensions: [".js", ".jsx", ".ts", ".tsx"],
      },
    },
  },
  overrides: [
    {
      files: ["**/*.tsx"],
      rules: {
        "react/prop-types": "off",
        "node/file-extension-in-import": "off"
      },
    },
  ]
};
