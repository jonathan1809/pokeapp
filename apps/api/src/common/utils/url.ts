export const jsonToUrlParams = <T extends Record<string, string>>(
  object: T,
) => {
  try {
    if (!object) return '';
    const params = new URLSearchParams(object).toString();
    return `?${params}`;
  } catch (error) {
    console.error(error);
    return null;
  }
};
