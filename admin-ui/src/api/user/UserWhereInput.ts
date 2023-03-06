import { StringFilter } from "../../util/StringFilter";
import { UrlListRelationFilter } from "../url/UrlListRelationFilter";

export type UserWhereInput = {
  email?: StringFilter;
  id?: StringFilter;
  name?: StringFilter;
  urls?: UrlListRelationFilter;
  username?: StringFilter;
};
