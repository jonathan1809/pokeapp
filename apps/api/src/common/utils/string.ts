/**
 * Converts the keys of an object from snake_case to camelCase.
 * @param object - The object to be converted.
 * @returns The object with keys converted from snake_case to camelCase.
 * @example
 * const obj = {
 *   first_name: 'John',
 *   last_name: 'Doe',
 *   age: 30,
 * };
 *
 * const result = snakeToCamelCase(obj);
 *
 * console.log(result);
 * // Output: { firstName: 'John', lastName: 'Doe', age: 30 }
 */
export const snakeToCamelCase = <T extends Record<string, any>, J>(
  object: T,
): J => {
  const newObject = {} as J;

  for (const [key, value] of Object.entries(object)) {
    const camelCaseKey = key.replace(/([-_][a-z])/g, (group) =>
      group.toUpperCase().replace('-', '').replace('_', ''),
    );
    newObject[camelCaseKey as keyof J] = value;
  }

  return newObject;
};
