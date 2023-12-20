import { ILoginResponse } from "@/models/auth.model";
import httpService from "@/plugins/axios";

class AuthService {
  // public register(username: string, password: string, firstName: string, lastName: string): Promise<IUser> {
  //   const schema = {
  //     username: username,
  //     password: password,
  //     firstName: firstName,
  //     lastName: lastName,
  //   };
  //   return httpService.post("/register", schema);
  // }
  public login(email: string, password: string): Promise<ILoginResponse> {
    const schema = {
      email: email,
      password: password,
    };
    return httpService.post("/login", schema);
  }
  public logout(isRootAdmin: boolean): Promise<void> {
    localStorage.removeItem(import.meta.env.VITE_TOKEN_NAME as string);

    if (isRootAdmin) return httpService.post("/logout");
    else return httpService.post("/logout");
  }
}

export const authService = new AuthService();
