export class UserResponse_db{
  constructor(
  public token: string,
  public id: number,
  public firstName: string,
  public middleName: string,
  public lastName: string,
  public userName: string,
  public phoneNumber: string,
  public email: string,
  public businessName: string,
  public userTypeId: number,
  public isEnabled: true,
  public password: string,
  public confirmPassword: string,
  public message: string,
  public code: any,
  public errors: any,

){}

  get userToken(){
    return this.token;
  }
}
