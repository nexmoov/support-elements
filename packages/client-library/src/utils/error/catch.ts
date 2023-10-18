import { ValidationError as VE } from "yup";
import { ValidationError, UnknownError } from "./classes";

const errorHandler = (error: unknown) => {
  if (error instanceof VE) {
    throw new ValidationError(error);
  }

  throw new UnknownError(error as Error);
};

const Catch = (
  target: unknown,
  propertyName: string,
  descriptor: PropertyDescriptor
) => {
  const originalMethod = descriptor.value;

  // Rewrite original method with try/catch wrapper
  // eslint-disable-next-line no-param-reassign, consistent-return, func-names
  descriptor.value = function (...args: unknown[]) {
    try {
      const result = originalMethod.apply(this, args);

      /**
       * For unhandled promise rejections
       */
      if (result && result instanceof Promise) {
        return result.catch((error: Error) => {
          errorHandler(error);
        });
      }

      return result;
    } catch (error) {
      errorHandler(error);
    }
  };

  return descriptor;
}

export { Catch };
