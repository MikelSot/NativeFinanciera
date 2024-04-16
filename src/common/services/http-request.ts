import {HttpRequestParam} from '../interfaces/http-request.ts';
import axios, {AxiosResponse} from 'axios';

class HttpRequest implements HttpRequestParam {
  constructor(
    public https = 'https://reto-financiera-compartamos.onrender.com',
    public version = 'v1',
    public endpoint = '',
  ) {}

  protected configRequest(param: HttpRequestParam) {
    const {version = 'v1', endpoint} = param;

    this.version = version;
    this.endpoint = endpoint;
  }

  protected urlBuilder() {
    return `${this.https}/api/${this.version}/${this.endpoint}`;
  }

  protected get<T>(): Promise<AxiosResponse<T>> {
    return axios.get(this.urlBuilder());
  }

  protected post<T>(data: unknown): Promise<AxiosResponse<T>> {
    return axios.post(this.urlBuilder(), data);
  }

  protected put<T>(data: unknown): Promise<AxiosResponse<T>> {
    return axios.put(this.urlBuilder(), data);
  }

  protected delete<T>(): Promise<AxiosResponse<T>> {
    return axios.delete(this.urlBuilder());
  }
}

export default HttpRequest;
