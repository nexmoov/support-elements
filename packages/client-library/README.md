# Local Logic Client
The Local Logic Client library provides a JavaScript entry point to Local Logic Scores, Points of Interest, Demographics, Schools, Profiles, and Geographies.

## Installation
Npm:

```
npm install @local-logic/client
```

Yarn:

```
yarn add @local-logic/client
```
Pnpm:

```
pnpm add @local-logic/client
```

## Getting Started
To use the library, start by creating a new instance by invoking `LocalLogicClient` with your `apiKey`. You can generate a apiKey using the [`locallogic.co/oauth/apiKey` API](api.locallogic.co/oauth/apiKey).

Example:

```ts
  import LocalLogicClient, { Scores } from "@local-logic/client";

  ...

  const client = LocalLogicClient("<apiKey>");

  let scores: Scores | undefined;

  try {
    scores = await client.getScores({
      lat: 45.532970,
      lng: -73.585600,
      include: ["groceries"]
    });
  } catch (e) {
    // Handle error
  }
```

## Methods
### `getPois(params: Params) => Promise<POIs>`

### `getScores(params: Params) => Promise<Scores>`

### `getSchools(params: Params) => Promise<Schools>`

### `getGeographies(params: Params) => Promise<Geographies>`

### `getDemographics(params: Params) => Promise<Demographics>`

### `getProfiles(params: Params) => Promise<Profiles>`

## Error Handling
You can catch errors by wrapping your method invokations in `try / catch`. You can handle your errors generically, or if you require more granular control you can make use of the provided typeguards `isRequestError` and `isValidationError`.

Example:

```ts
import LocalLogicClient, {
  isRequestError,
  isValidationError,
} from "@local-logic/client";

try {
  // Call method
} catch (e) {
  if (isRequestError(e)) {
    // Handle request errors
  }

  if (isValidationError(e)) {
    // Handle validation errors
  }

  // Handle all other errors
}
```

## Typescript
`@local-logic/client` provides type definitions and typeguards.
