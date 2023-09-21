import { snakeToCamelCase } from './string';

describe('snakeToCamelCase', () => {
  it('should convert snake_case keys to camelCase keys in the object', () => {
    const input = {
      first_name: 'John',
      last_name: 'Doe',
      age: 25,
    };

    const expectedOutput = {
      firstName: 'John',
      lastName: 'Doe',
      age: 25,
    };

    expect(snakeToCamelCase(input)).toEqual(expectedOutput);
  });

  it('should preserve non-snake_case keys in the object', () => {
    const input = {
      firstName: 'John',
      last_name: 'Doe',
      age: 25,
      isAdult: true,
    };

    const expectedOutput = {
      firstName: 'John',
      lastName: 'Doe',
      age: 25,
      isAdult: true,
    };

    expect(snakeToCamelCase(input)).toEqual(expectedOutput);
  });

  it('should handle empty objects', () => {
    const input = {};

    const expectedOutput = {};

    expect(snakeToCamelCase(input)).toEqual(expectedOutput);
  });
});
