module.exports = {
  "*.{js,ts}": ["eslint --fix", "prettier --write"],
  "**/*.ts": () => "tsc -p tsconfig.json --noEmit",
};
