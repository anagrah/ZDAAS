import { WebApiResponse } from '../../../../Shared/Core/models/webApiResponse.model';
export interface User extends WebApiResponse{
    token?: string;
    id?: number | any;
    firstName: string | any;
    middleName?: string;
    lastName: string;
    userName: string;
    phoneNumber: string;
    email: string;
    businessName: string;
    userTypeId: number | any;
    isEnabled?: false | any;
    password: string;
    confirmPassword: string | any;
}

// export class User implements UserResponse_db, WebApiResponse{
//   constructor(
//   private token: string,
//   private id: number,
//   private firstName: string,
//   private middleName: string,
//   private lastName: string,
//   private userName: string,
//   private phoneNumber: string,
//   private email: string,
//   private businessName: string,
//   private userTypeId: number,
//   private isEnabled: true,
//   private password: string,
//   private confirmPassword: string
// ){}

//   get userToken(){
//     return this.token;
//   }
// }
