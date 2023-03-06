import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type UrlUpdateInput = {
  click?: number | null;
  originalUrl?: string;
  shortUrl?: string;
  user?: UserWhereUniqueInput;
};
