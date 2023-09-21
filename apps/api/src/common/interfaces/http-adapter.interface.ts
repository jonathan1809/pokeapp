export interface HttpAdapter {
  get<T>(url: string, options: Record<string, any>): Promise<T>;
}
