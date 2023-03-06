import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type UrlCreateInput = {
  click?: number | null;
  count: number;
  originalUrl: string;
  shortUrl: string;
  user: UserWhereUniqueInput;
};
