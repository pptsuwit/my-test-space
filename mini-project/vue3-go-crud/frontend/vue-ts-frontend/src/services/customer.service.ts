import { IResponse, IResponseData } from "@/models/base.model";
import { ICustomer } from "@/models/customer.model";
import httpService from "@/plugins/axios";

class Service {
  // public register(username: string, password: string, firstName: string, lastName: string): Promise<IUser> {
  //   const schema = {
  //     username: username,
  //     password: password,
  //     firstName: firstName,
  //     lastName: lastName,
  //   };
  //   return httpService.post("/register", schema);
  // }
  public gets(page: number = 1, pageSize: number = 10): Promise<IResponseData> {
    return httpService.get(`/customer?page=${page}&pageSize=${pageSize}`);
  }
  public getById(id: number): Promise<IResponse> {
    return httpService.get(`/customer/${id}`);
  }
  public create(customer: ICustomer): Promise<IResponse> {
    return httpService.post(`/customer`, customer);
  }
  public update(id: number, customer: ICustomer): Promise<IResponse> {
    return httpService.put(`/customer/${id}`, customer);
  }
  public delete(id: number): Promise<IResponse> {
    return httpService.delete(`/customer/${id}`);
  }
}

export const customerServices = new Service();
