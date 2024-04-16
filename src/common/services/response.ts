import {AxiosError} from 'axios';

export class Response<T> {
  data: T;
  request: Request;

  constructor(data: T, request: Request = null) {
    this.data = data;
    this.request = request;
  }
}

type Request = AxiosError | null;
