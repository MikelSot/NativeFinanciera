export interface GenericResponse<T> {
  data: T;
  messages: MessageResponse[];
  errors?: ErrorResponse;
}

export interface MessageResponse {
  code: string;
  message: string;
}

export interface ErrorResponse {
  code: string;
  message: string;
}
