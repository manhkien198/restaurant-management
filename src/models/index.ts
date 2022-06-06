export interface Dashboard {
  _id: string;
  month: string;
  year: string;
  importCost: string;
  turnover: string;
  employee: string;
  employeeSalary: string;
  serviceCost: string;
  interestCost: string;
}
export interface Employee {
  fullname: string;
  position: string;
  role: string;
  image: string;
}
export interface Food {
  idMeal: string;
  strMeal: string;
  strMealThumb: string;
}
export interface PayloadLogin {
  email: string;
  password: string;
}
export interface User {
  _id: string;
  first_name: string;
  last_name: string;
  email: string;
  password: string;
  createdAt: string;
  updatedAt: string;
  __v: number;
  token: string;
  refreshToken: string;
}
export interface RegisterPayload {
  first_name: string;
  last_name: string;
  email: string;
  password: string;
  confirmPassword: string;
}
