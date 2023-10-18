module.exports = {
  "*.{js,ts,tsx}": ["eslint --fix", "prettier --write"],
  "**/*.ts?(x)": () => "tsc -p tsconfig.json --noEmit",
};
