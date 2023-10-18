export const isObject = (input: unknown): input is Record<string, unknown> =>
  typeof input === "object" && input !== null && !Array.isArray(input);

export function mergeDeep(
  target: unknown | Record<string, unknown>,
  ...sources: (Record<string, unknown> | unknown)[]
): Record<string, unknown> {
  if (!sources.length) return target as Record<string, unknown>;
  const source = sources.shift();

  if (isObject(target) && isObject(source)) {
    Object.keys(source).forEach((key) => {
      if (isObject(source[key])) {
        if (!target[key]) Object.assign(target, { [key]: {} });
        mergeDeep(target[key], source[key]);
      } else {
        Object.assign(target, { [key]: source[key] });
      }
    });
  }

  return mergeDeep(target, ...sources);
}
