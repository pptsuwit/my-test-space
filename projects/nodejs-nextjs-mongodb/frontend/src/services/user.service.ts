import httpService from "@/utils/axios";

const path = "/user";

class userServices {
  public getProfile(): Promise<IResponseData> {
    return httpService.get("/profile");
  }

  public gets(page?: IPage): Promise<IResponseData> {
    return httpService.get(`${path}?page=${page?.page}&pageSize=${page?.size}`);
  }
  public getById(id: string): Promise<IUserData> {
    return httpService.get(`${path}/${id}`);
  }
  public create(data: IUserData): Promise<IResponseData> {
    return httpService.post(`${path}`, data);
  }
  public update(data: IUserData): Promise<IResponseData> {
    return httpService.put(`${path}`, data);
  }
  public delete(id: string): Promise<void> {
    return httpService.delete(`${path}/${id}`);
  }
}

export const service = new userServices();
