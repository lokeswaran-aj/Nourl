import { UrlWhereUniqueInput } from "./UrlWhereUniqueInput";
import { UrlUpdateInput } from "./UrlUpdateInput";

export type UpdateUrlArgs = {
  where: UrlWhereUniqueInput;
  data: UrlUpdateInput;
};
