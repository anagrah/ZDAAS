import { WebApiResponse } from "src/app/shared/models/WebApiResponse";


export class UserApiResponse extends WebApiResponse {

    Id: number;
    Username: string;
    FirstName: string;
    LastName: string;
    Token: string;
    companyId:Number;
    
}