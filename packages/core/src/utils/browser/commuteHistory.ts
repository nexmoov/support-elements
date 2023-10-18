import { BrowserStorage } from "./browserStorage";

export interface LocationData {
  locationId: string;
  address: {
    country?: string;
    state?: string;
    city?: string;
    postalCode?: string;
    county?: string | undefined;
    street?: string | undefined;
    houseNumber?: string | undefined;
  };
}

/**
 * Util class to handle storage of commute suggestion history storage
 */
class CommuteHistory {
  protected storageLocation = "suggestion_history";

  protected storage: BrowserStorage;

  protected history: LocationData[] = [];

  constructor() {
    this.storage = new BrowserStorage("commute");

    const existingHistory = this.storage.getItem(this.storageLocation);

    if (existingHistory) {
      this.history = JSON.parse(existingHistory);
    }
  }

  /**
   * Pushes the new suggestion to the top of the array. If it's a
   * duplicate (based on the locationId), it will remove the duplicate(s)
   *
   * @param suggestion Address suggestion object including locationId and address object
   */
  push(suggestion: LocationData) {
    this.history = this.removeDuplicateEntries(suggestion);

    // Adds to the beginning of the array
    this.history.unshift(suggestion);

    // Keep a healthy length
    if (this.history.length > 5) {
      // Using slice instead of pop in case somehow we ended up
      // with way too many elements inside
      this.history = this.history.slice(0, 5);
    }

    this.storage.setItem(this.storageLocation, JSON.stringify(this.history));
  }

  /**
   * Indicates whether there are suggestions saved in history
   *
   * @returns boolean
   */
  hasSuggestionHistory() {
    return this.history.length > 0;
  }

  /**
   * Returns the array of address suggestions from local storage
   *
   * @returns Array of address suggestions (only locationId and address object)
   */
  getSuggestionHistory() {
    return this.history;
  }

  protected removeDuplicateEntries(suggestion: LocationData) {
    return this.history.filter((item) => item.locationId !== suggestion.locationId);
  }
}

export const commuteHistory = new CommuteHistory();
