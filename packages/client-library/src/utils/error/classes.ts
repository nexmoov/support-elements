/* eslint-disable max-classes-per-file */
import { ValidationError as VE } from "yup";

const ERROR_PREFIX = "LocalLogicClient/";

class ValidationError extends Error {
  constructor({ message }: VE) {
    super(message);
    this.name = ERROR_PREFIX + this.constructor.name;
  }
}

class UnknownError extends Error {
  constructor({ message }: Error) {
    super(message);
    this.name = ERROR_PREFIX + this.constructor.name;
  }
}

export { ValidationError, UnknownError };
