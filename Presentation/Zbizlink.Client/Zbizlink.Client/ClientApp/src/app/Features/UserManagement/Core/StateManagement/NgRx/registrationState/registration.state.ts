import { User } from "../../../models/user.model";
import { UserResponse_db } from "../../../models/userResponse_db.model";

export interface RegistrationState {
  user: any | null;
};

export const initialState: RegistrationState = {
  user: null,
};
