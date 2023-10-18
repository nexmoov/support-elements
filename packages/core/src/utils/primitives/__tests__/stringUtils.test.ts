import { expect, describe, it } from "@jest/globals";
import { pluralize, formatAddress } from "../stringUtils";

describe("pluralize", () => {
  const word = "word";
  const wordPlural = "words";
  const wordException = "wordle";

  it("pluralizes the word if count is zero", () => {
    expect(pluralize(word, 0)).toEqual(wordPlural);
  });

  it("keeps singular form for count of one", () => {
    expect(pluralize(word, 1)).toEqual(word);
  });

  it("pluralizes the word if count is more than one", () => {
    expect(pluralize(word, 2)).toEqual(wordPlural);
  });

  it("uses exception plural if one is passed", () => {
    expect(pluralize(word, 2, wordException)).toEqual(wordException);
  });
});

describe("formatAddress", () => {
  const address = {
    houseNumber: "houseNumber",
    street: "street",
    city: "city",
    state: "state",
    country: "country",
    postalCode: "postalCode",
  };

  it("formats a full address correctly", () => {
    const formattedAddress = formatAddress(address);

    expect(formattedAddress).toEqual(
      `${address.houseNumber} ${address.street}, ${address.city}, ${address.state}, ${address.country}, ${address.postalCode}`
    );
  });

  it("formats address with missing house number", () => {
    const formattedAddress = formatAddress({
      ...address,
      houseNumber: undefined,
    });

    expect(formattedAddress).toEqual(
      `${address.street}, ${address.city}, ${address.state}, ${address.country}, ${address.postalCode}`
    );
  });

  it("formats with missing street name", () => {
    const formattedAddress = formatAddress({
      ...address,
      street: undefined,
    });

    expect(formattedAddress).toEqual(
      `${address.houseNumber}, ${address.city}, ${address.state}, ${address.country}, ${address.postalCode}`
    );
  });

  it("ignores properties that are not defined", () => {
    const formattedAddress = formatAddress({
      houseNumber: address.houseNumber,
      country: address.country,
    });

    expect(formattedAddress).toEqual(`${address.houseNumber}, ${address.country}`);
  });
});
