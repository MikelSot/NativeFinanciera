export interface ErrorResponse {
  name: string;
  message: string;
  stack?: string;
  response: {
    config: {
      url: string;
      method: string;
    };
    data: {
      message: string;
      text: string;
      errors: {code: string; message: string}[];
      error: {code: string; message: string};
    };
    status: number;
    statusText: string;
  };
}
