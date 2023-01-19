import axios, { AxiosInstance, AxiosResponse } from 'axios';
import { Constant } from 'src/core/constant';

class Service {
  private axiosInstance: AxiosInstance;

  constructor(baseUrl: string) {
    this.axiosInstance = axios.create({
      baseURL: baseUrl,
      timeout: 15000,
    });
    this.axiosInstance.interceptors.request.use((config: any) => {
      return config;
    });
    this.axiosInstance.interceptors.response.use((response: any) => {
      return response;
    });
  }

  public get<P, R>(url: string, params?: P): Promise<AxiosResponse<R>> {
    return this.axiosInstance.get(url, { params });
  }

  public post(url: string, data: any) {
    return this.axiosInstance.post(url, data);
  }

  public delete(url: string) {
    return this.axiosInstance.delete(url);
  }
}
const api = { upbit: new Service(Constant.UPBIT_BASE_URL) };

export { api };
