import { IntNullableFilter } from "../../util/IntNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type UrlWhereInput = {
  click?: IntNullableFilter;
  id?: StringFilter;
  originalUrl?: StringFilter;
  shortUrl?: StringFilter;
  user?: UserWhereUniqueInput;
};
