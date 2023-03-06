import { InputJsonValue } from "../../types";
import { UrlUpdateManyWithoutUsersInput } from "./UrlUpdateManyWithoutUsersInput";

export type UserUpdateInput = {
  email?: string;
  name?: string;
  password?: string;
  roles?: InputJsonValue;
  urls?: UrlUpdateManyWithoutUsersInput;
  username?: string;
};
