// eslint-disable-next-line import/extensions, import/no-unresolved, @typescript-eslint/no-var-requires
const sharedConfig = require("@local-logic/core/tailwind.config.cjs");

module.exports = {
  // prefix ui lib classes to avoid conflicting with the app
  // prefix: "ui-",
  presets: [sharedConfig],
};
