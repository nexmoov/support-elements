var pathJoin = require("path").join;

module.exports = {
  extends: [pathJoin(__dirname, "base.js"), "plugin:react/recommended"],
  settings: {
    react: {
      version: "detect",
    },
  },
};
