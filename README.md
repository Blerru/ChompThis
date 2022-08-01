# ChompThis API Wrapper

This package is an unofficial [chompthis.com](https://chompthis.com/api/) API wrapper for Node.Js.

## Install

```shell
# install locally
npm install chompthis --save
```

## Usage

Initialize a new `ChompClient` with your api key:

```ts
import ChompClient from "chompthis"; // import the chomp client

const myChompClient = new ChompClient("YOUR API KEY"); // initialize a new instance with your api key
```

### Methods

Examples of methods on the `ChompClient` instance. To see documentation on parameters and responses please visit the official docs [here](https://app.swaggerhub.com/apis-docs/chomp/Chomp/1.0.0-oas3).

```ts
// gets a branded food from a barcode, returns an array containing food items for that barcode.
await myChompClient.getFoodBrandedBarcode({ code: "00000000" });

// gets a branded food from a name, returns an array of foods with that name or similar.
await myChompClient.getFoodBrandedName({ name: "Oreo" });

// gets a branded food from a list of various parameters, returns an array of foods which fit those parameters.
await chompClient.getFoodBrandedSearch({ brand: "Post" });

// gets data for a specific ingredient or a specific set of ingredients, returns an array of ingredients which fit the criteria.
await chompClient.getFoodIngredientSearch({ find: "Coconut Oil" });
```

> 📌 The recipe API is currently unsupported
