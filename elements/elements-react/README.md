# Local Logic Elements React (Alpha)
> ⚠️ This package is in active development and is not production-ready.

Local Logic Elements React provides a set of modular, composable UI components built on top of the [Local Logic API](https://docs.locallogic.co/getting-started/using-api).

## Getting started
### Installation
First, install with `yarn`, `pnpm`, or `npm`:
```
yarn add @local-logic/elements-react
```
```
pnpm add @local-logic/elements-react
```
```
npm i --save @local-logic/elements-react
```

Be sure to install all peer dependencies.

The script is also available in UMD and EMS format from the Local Logic CDN:
https://sdk.locallogic.co/elements-react/<VERSION>/<FORMAT>/index.min.js

> Note: Using the CDN approach in production is discouraged. The CDN requires the client download the entire elements library, regardless of which elements are used.

### Usage
You can now import `LocalLogicProvider`:

```js
import { LocalLogicProvider } from "@local-logic/elements-react";

const App = () => {
  return (
    <LocalLogicProvider
      apiKey="<YOUR_TOKEN>"
    >
      //...
    </LocalLogicProvider>
  );
}
```

> ℹ️ Your `apiKey` should be provided to you by a Local Logic team member.

Within the context of your `LocalLogicProvider`, you can now add Elements.

```js
import { Scores } from "@local-logic/elements-react";

const MyComponent = () => {
  return (
    <Scores
      options={{
        lat: 43.642567,
        lng: -79.387054,
        geographyLevels: ["10", "30"]
      }}
    />
  )
}
```

## API
### `LocalLogicProvider`
`LocalLogicProvider` component provides request caching, and accepts configuration options. It can be placed anywhere, but should wrap all Local Logic Elements.

#### Options
| Name  | Required | Type | Default | Description |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| `apiKey`  | `true`  | `string`  | | Auth apiKey required for making requests to the Local Logic API. |
| `options.appearance`  | `false`  | `AppearanceAPI`  | | The `appearance` option provides theme and variable support customizing the look and feel of Local Logic Elements. |
| `options.locale`  | `false`  | `"en" \| "fr"`  | `"en"` | The `locale` option specifies the language of the scores and the UI interface. |

### `useLocalLogic`
The `useLocalLogic` hook provides access to the `client` and `appearance` objects.

#### Options
None.

#### Returns
| Name | Type | Description |
| ------------- | ------------- | ------------- |
| `client` | `Methods` | Can be used to make requests to the Local Logic API. |
| `appearance` | `AppearanceAPI["appearance"]` | Contains Local Logic theme and variable values. |

### `Scores`
The `Scores` component provide a UI visualization of Local Logic scores and associated points of interest.

#### Options
| Name  | Required | Type | Default | Description |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| `options.lat`  | `false`  | `number`  | | A decimal number between -90 and 90 (Latitude). |
| `options.lng`  | `false`  | `number`  | | A decimal number between -180 and 180 (Longitude). |
| `options.geographyIds`  | `false`  | `string[]`  | | A comma separated list of geography ids, ex. `g30_dpz89rm7` or `g30_dpz89rm7`, `g10_dpz89rm7`. If this parameter is provided, the `lat` and `lng` parameters are optional. |
| `options.geographyLevels`  | `false`  | `("10" \| "20" \| "30")[]`  | | A list of geography levels to include, ex. 10,30. If no geography levels are provided, no geography scores will be returned.
| `options.locationScoresRounding`  | `false`  | `boolean`  | `.5` | The type of rounding to apply to the scores returned under data.location. Either .5 (default) to round at the nearest 0.5, or none, to disable rounding.
| `options.include`  | `false`  | `("high_schools" \| ... \| "daycares")[]`  | All scores | An array containing `ScoreNames` to return, ex. `["car_friendly", "pedestrian_friendly"]`. If no names are provided, all scores will be returned.|
| `onChange`  | `false`  | `({ type, data }) => void`  | | The `onChange` callback is triggered when the component state changes. |


## TypeScript Support
Local Logic Elements React comes packaged with TypeScript declarations.
