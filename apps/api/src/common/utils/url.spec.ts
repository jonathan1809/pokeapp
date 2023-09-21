import { jsonToUrlParams } from './url';

describe('jsonToUrlParams', () => {
  it('should convert a JSON object to URL query parameters', () => {
    const input = {
      name: 'John Doe',
      age: '25',
      city: 'New York',
    };

    const expectedOutput = '?name=John+Doe&age=25&city=New+York';

    expect(jsonToUrlParams(input)).toEqual(expectedOutput);
  });

  it('should handle special characters in key-value pairs', () => {
    const input = {
      email: 'john.doe@example.com',
      message: 'Hello, world!',
    };

    const expectedOutput =
      '?email=john.doe%40example.com&message=Hello%2C+world%21';

    expect(jsonToUrlParams(input)).toEqual(expectedOutput);
  });

  it('should return empty when value is undefined', () => {
    const invalidObject = undefined;

    expect(jsonToUrlParams(invalidObject)).toEqual('');
  });
});
