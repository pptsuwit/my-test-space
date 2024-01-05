export interface ILoginResponse {
  data: IToken;
}

interface IToken {
  email: string;
  token: string;
}
