import { SortOrder } from "../../util/SortOrder";

export type UrlOrderByInput = {
  click?: SortOrder;
  count?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  originalUrl?: SortOrder;
  shortUrl?: SortOrder;
  updatedAt?: SortOrder;
  userId?: SortOrder;
};
