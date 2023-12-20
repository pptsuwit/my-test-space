export interface ICustomer {
  name: string;
  address: string;
  phone: string;
  email: string;
  genderId: number;
}

interface Gender {
  id: number;
  name: string;
}

export interface ICustomerResponse {
  customerId: number;
  name: string;
  address: string;
  phone: string;
  email: string;

  genderId: number;
  genders: Gender;

  createdAt: Date;
  updatedAt: Date;
}
