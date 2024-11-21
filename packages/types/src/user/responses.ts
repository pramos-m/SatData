import { UserRoleType } from "./enums";

export interface GetUserResponse {
  id: string;
  email: string;
  role: UserRoleType;
}
