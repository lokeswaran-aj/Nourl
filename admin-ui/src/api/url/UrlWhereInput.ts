import { IntNullableFilter } from "../../util/IntNullableFilter";
import { IntFilter } from "../../util/IntFilter";
import { StringFilter } from "../../util/StringFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type UrlWhereInput = {
  click?: IntNullableFilter;
  count?: IntFilter;
  id?: StringFilter;
  originalUrl?: StringFilter;
  shortUrl?: StringFilter;
  user?: UserWhereUniqueInput;
};
