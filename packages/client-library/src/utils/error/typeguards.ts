import { ValidationError, UnknownError } from "./classes";

const isValidationError = (error: unknown): error is ValidationError =>
  error instanceof ValidationError;

const isUnknownError = (error: unknown): error is UnknownError =>
  error instanceof UnknownError;

export { isValidationError, isUnknownError };
