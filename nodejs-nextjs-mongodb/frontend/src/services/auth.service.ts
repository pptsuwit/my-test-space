import httpService from "@/utils/axios";

class AuthService {
  public register(username: string, password: string, firstName: string, lastName: string): Promise<IUser> {
    const schema = {
      username: username,
      password: password,
      firstName: firstName,
      lastName: lastName,
    };
    return httpService.post("/register", schema);
  }
  public login(username: string, password: string): Promise<IUser> {
    const schema = {
      username: username,
      password: password,
    };
    return httpService.post("/login", schema);
  }
  public logout(isRootAdmin: boolean): Promise<void> {
    localStorage.removeItem(process.env.TOKEN_NAME as string);

    if (isRootAdmin) return httpService.post("/logout");
    else return httpService.post("/logout");
  }
}

export const authService = new AuthService();
