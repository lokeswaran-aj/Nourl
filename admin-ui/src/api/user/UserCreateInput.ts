import { InputJsonValue } from "../../types";
import { UrlCreateNestedManyWithoutUsersInput } from "./UrlCreateNestedManyWithoutUsersInput";

export type UserCreateInput = {
  email: string;
  name: string;
  password: string;
  roles: InputJsonValue;
  urls?: UrlCreateNestedManyWithoutUsersInput;
  username: string;
};
