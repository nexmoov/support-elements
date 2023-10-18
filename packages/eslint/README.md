# ESlint Config
This project represents the base configurations to be extended in any project using JS or React. It also comes with Prettier to assist with code formatting.

## Installation
ESLint Config is available as a package through NPM. To install simply run:

```
pnpm add -D @local-logic/eslint-config
```

Note that this ruleset is environment agnostic. It will need to be extended depending on your project and environment.

Also, be sure to install peer dependencies!

## Usage
To use the JS ESLint config, extend from `"@local-logic/eslint-config/base"` in your eslint config file:

```
"extends": [
  "@local-logic/eslint-config/base"
],
```

For React, extend from `"@local-logic/eslint-config/react"`:

```
"extends": [
  "@local-logic/eslint-config/react"
],
```

To use the Prettier config, add the following to your `prettier.config.js` file:

```
module.exports = require("@local-logic/eslint-config/prettier.config.js");
```

## Development
Occasionally we may wish to update this package with new rules overrides, or additional plugins. All ESLint rules should go in `index.js`. Prettier rules should go in `.prettierrc.json`.

To test you changes you can create a symlink using `npm link`, then adding it to your desired project using `npm link @local-logic/eslint-config`. You will also need to install the peerDependencies for it to work.

When you are done making changes, update the version number in `package.json`, the commit you work. Finally, you will need to publish to npm using `npm publish` (but make sure you have access to the team NPM account first).
