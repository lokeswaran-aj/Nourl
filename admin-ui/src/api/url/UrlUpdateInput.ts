import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type UrlUpdateInput = {
  click?: number | null;
  count?: number;
  originalUrl?: string;
  shortUrl?: string;
  user?: UserWhereUniqueInput;
};
