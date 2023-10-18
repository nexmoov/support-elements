module.exports = {
  "*.{js,ts}": ["eslint --fix", "prettier --write"],
  "**/*.ts?(x)": () => "tsc -p tsconfig.json --noEmit",
};
