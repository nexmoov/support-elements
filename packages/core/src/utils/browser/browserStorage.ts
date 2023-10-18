import storage from "local-storage-fallback";

/**
 * This class is named "Browser" and not "Local" on purpose in case
 * we decide to use something else than local storage.
 */
export class BrowserStorage {
  protected group: string;

  protected localStorage: typeof storage;

  constructor(group = "global") {
    this.group = group;
    this.localStorage = storage;
  }

  /**
   * Sets the group under which to save a value.
   *
   * E.g. as a group of "global" and a key of "thing", the location
   * in storage would be "global.thing"
   *
   * @param group Unique key to group under
   */
  setGroup(group: string) {
    this.group = group;
  }

  /**
   * @returns Currently set group name
   */
  getGroup() {
    return this.group;
  }

  /**
   * Returns a value stored in storage
   *
   * @param key The key under the group "group.key"
   * @returns String value saved under "group.key"
   */
  getItem(key: string) {
    return this.localStorage.getItem(`${this.group}.${key}`);
  }

  /**
   * Saves a new value in storage
   *
   * @param key The key under the group "group.key"
   * @param value String value to save
   */
  setItem(key: string, value: string) {
    this.localStorage.setItem(`${this.group}.${key}`, value);
  }

  /**
   * Removes a stored value
   *
   * @param key The key under the group "group.key"
   */
  removeItem(key: string) {
    this.localStorage.removeItem(`${this.group}.${key}`);
  }
}

export default new BrowserStorage();
