import httpService from "@/utils/axios";
const path = "/customer";
class customerService {
  public gets(page?: IPage): Promise<IResponseData> {
    return httpService.get(`${path}?page=${page?.page}&pageSize=${page?.size}`);
  }
  public getById(id: string): Promise<ICustomer> {
    return httpService.get(`${path}/${id}`);
  }
  public create(data: CustomerData): Promise<IResponseData> {
    return httpService.post(`${path}`, data);
  }
  public update(data: CustomerData): Promise<IResponseData> {
    return httpService.put(`${path}`, data);
  }
  public delete(id: string): Promise<void> {
    return httpService.delete(`${path}/${id}`);
  }
}

export const service = new customerService();
