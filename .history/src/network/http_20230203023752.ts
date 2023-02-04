import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios';

export default class Http {
  private static instance: Http;
  private readonly client: AxiosInstance;
  private constructor(baseURL: string) {
    this.client = axios.create({
      baseURL,
    });
  }

  async fetchJson(url: string, options: AxiosRequestConfig) {
    const { data, method, headers } = options;
    const request = {
      url,
      method,
      headers: {
        ...headers,
        'Content-Type': 'application/json',
      },
      data,
    };
    let res: AxiosResponse;
    try {
      res = await this.client(request);
      return res;
    } catch (e) {
      if (axios.isAxiosError(e)) {
        const message = e.response?.data?.message;
        if (message) {
          throw new Error(message);
        }
      }
      throw new Error('Connect Error');
    }
  }
}