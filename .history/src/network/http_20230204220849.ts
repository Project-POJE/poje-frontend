import LocalStorage from '@src/db/localStorage';
import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios';

export default class Http {
  private static instance: Http;
  private readonly client: AxiosInstance;
  private constructor(baseURL: string, private localStorage: LocalStorage) {
    this.client = axios.create({
      baseURL,
    });

    this.client.interceptors.request.use((req) => {
      console.log('request :', req);
      console.log(localStorage.get('TOKEN'));
      req.headers.Authorization = localStorage.get('TOKEN');
      return req;
    });
  }

  async fetchJson<R>(
    url: string,
    options: AxiosRequestConfig
  ): Promise<AxiosResponse<R>> {
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
      console.log(res);
      return res;
    } catch (e) {
      console.log(e);
      if (axios.isAxiosError(e)) {
        const message = e.response?.data?.message;
        if (message) {
          throw new Error(message);
        }
      }
      throw new Error('Connect Error');
    }
  }
  //process.env.REACT_APP_BASE_URL as string,
  public static getHttpInstance() {
    if (!Http.instance) {
      Http.instance = new Http(
        'https://ddbda43f86fb99.lhr.life',
        new LocalStorage()
      );
    }
    return Http.instance;
  }
}