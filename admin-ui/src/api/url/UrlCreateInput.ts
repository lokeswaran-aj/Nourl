import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type UrlCreateInput = {
  click?: number | null;
  originalUrl: string;
  shortUrl: string;
  user: UserWhereUniqueInput;
};
