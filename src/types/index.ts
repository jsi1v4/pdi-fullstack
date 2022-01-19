export type bit = 0 | 1;

export enum StatusCode {
  Success = 200,
  Error = 400,
  Unauthorized = 401,
  Forbidden = 403,
  MethodNotAllowed = 405,
}

export interface WithID {
  id?: number;
}

export interface WithQuery {
  q?: string;
}
