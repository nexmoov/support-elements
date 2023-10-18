module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  parser: "@typescript-eslint/parser",
  plugins: ["@typescript-eslint", "html"],
  extends: [
    "airbnb-base",
    "prettier",
    "plugin:@typescript-eslint/eslint-recommended",
    "plugin:@typescript-eslint/recommended",
  ],
  settings: {
    "import/resolver": {
      node: {
        extensions: [".js", ".jsx", ".ts", ".tsx", ".d.ts", ".svg", ".json"],
        paths: ["."],
      },
    },
    "import/parsers": {
      "@typescript-eslint/parser": [".ts", ".tsx"],
    },
    settings: {
      "import/resolver": {
        typescript: {},
      },
    },
  },
  rules: {
    "comma-dangle": ["error", "only-multiline"],
    "no-use-before-define": "off",
    "import/prefer-default-export": "off",
    "padding-line-between-statements": "off",
    "@typescript-eslint/padding-line-between-statements": [
      "error",
      {
        blankLine: "always",
        prev: ["const", "let", "var", "block-like"],
        next: ["return", "block-like"],
      },
    ],
    "no-shadow": "off",
    "@typescript-eslint/no-shadow": ["error"],
    "no-unused-vars": "off",
    "@typescript-eslint/no-unused-vars": "off",
    "@typescript-eslint/no-explicit-any": ["error"],
    "@typescript-eslint/no-use-before-define": ["error"],
    "@typescript-eslint/explicit-module-boundary-types": "off",
    "import/no-extraneous-dependencies": ["error", { devDependencies: true }],
    "import/extensions": ["error", "never", { svg: "always", json: "always" }],
    "class-methods-use-this": "off",
    "import/order": ["warn"],
    "react-hooks/exhaustive-deps": "off",
  },
};
