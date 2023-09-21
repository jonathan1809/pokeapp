import axios, { AxiosInstance } from "axios";
import { HttpAdapter } from "../interfaces/http-adapter.interface";

export class AxiosAdapter implements HttpAdapter {
  private httpRequest: AxiosInstance = axios;
  constructor() {
    axios.defaults.baseURL = "/api/";
    axios.defaults.headers.post["Content-Type"] = "application/json";
  }

  async get<T>(url: string): Promise<T> {
    try {
      const { data } = await this.httpRequest.get<T>(url);
      return data;
    } catch (error) {
      throw new Error("Error in GET request");
    }
  }

  async post<T>(
    url: string,
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    payload?: any,
    options?: Record<string, unknown> | undefined
  ): Promise<T> {
    try {
      const { data } = await this.httpRequest.post<T>(url, payload, options);
      return data;
    } catch (error) {
      throw new Error("Error in GET request");
    }
  }

  async patch<T>(
    url: string,
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    payload?: any,
    options?: Record<string, unknown> | undefined
  ): Promise<T> {
    try {
      const { data } = await this.httpRequest.patch<T>(url, payload, options);
      return data;
    } catch (error) {
      throw new Error("Error in GET request");
    }
  }
}
