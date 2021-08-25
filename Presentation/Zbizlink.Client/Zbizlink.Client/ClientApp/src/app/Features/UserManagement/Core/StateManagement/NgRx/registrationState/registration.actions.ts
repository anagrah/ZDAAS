import { UserResponse_db } from './../../../models/userResponse_db.model';
import { createAction, props } from '@ngrx/store';
import { User } from '../../../models/user.model';


export const USER_REGISTRATION_START = '[Registration Component] User Registration Start';
export const USER_REGISTRATION_SUCCESS = '[Registration Component] User Registration Success';
export const USER_REGISTRATION_FAILURE = '[Registration Component] User Registration Failure';

// let user: User | any = [{firstName : '',middleName : '',lastName : '',userName : '',phoneNumber : '',businessName : '',confirmPassword : '',email : '',password : '', userTypeId : 1}]
export const userRegistrationStart = createAction(
  USER_REGISTRATION_START,
  props<{ firstName : any,middleName : any,lastName : any,userName : any,phoneNumber : any,businessName : any,confirmPassword : any,email : any,password : any, userTypeId: any}>()
);
export const userRegistrationSuccess = createAction(
  USER_REGISTRATION_SUCCESS,
  props<{ user: any, redirect: boolean }>()
);

