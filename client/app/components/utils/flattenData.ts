/* eslint-disable @typescript-eslint/no-explicit-any */
export const flattenData = (
  nestedData: Record<string, any>
): Record<string, any> => {
  const flattened: Record<string, any> = {};

  const recurse = (obj: Record<string, any>) => {
    for (const key in obj) {
      if (
        typeof obj[key] === "object" &&
        obj[key] !== null &&
        !Array.isArray(obj[key])
      ) {
        recurse(obj[key]);
      } else {
        flattened[key] = obj[key];
      }
    }
  };

  recurse(nestedData);
  return flattened;
};
