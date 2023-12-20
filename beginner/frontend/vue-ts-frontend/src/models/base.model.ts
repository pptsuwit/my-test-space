export interface IResponseData {
  data: any[];
  pagination: IPagination;
}

export interface IResponse {
  data: any;
}

export interface IPagination {
  currentPage: number;
  recordPerPage: number;
  totalPage: number;
  totalRecord: number;
}

export interface IError {
  code: string;
  message: string;
  validator?: IValidator[];
}

interface IValidator {
  field: string;
  value: string;
  tag: string;
  type: string;
  param: string;
  message: string;
}
