import { JsonValue } from "type-fest";
import { Url } from "../url/Url";

export type User = {
  createdAt: Date;
  email: string;
  id: string;
  name: string;
  roles: JsonValue;
  updatedAt: Date;
  urls?: Array<Url>;
  username: string;
};
