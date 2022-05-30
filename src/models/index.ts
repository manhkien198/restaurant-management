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
