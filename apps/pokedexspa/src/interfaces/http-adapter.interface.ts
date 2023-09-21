/* eslint-disable @typescript-eslint/no-explicit-any */
export interface HttpAdapter {
  get<T>(url: string, options?: Record<string, unknown>): Promise<T>;

  post<T>(
    url: string,
    payload?: any,
    options?: Record<string, unknown>
  ): Promise<T>;

  patch<T>(
    url: string,
    payload?: any,
    options?: Record<string, unknown>
  ): Promise<T>;
}
