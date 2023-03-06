import { UrlWhereInput } from "./UrlWhereInput";
import { UrlOrderByInput } from "./UrlOrderByInput";

export type UrlFindManyArgs = {
  where?: UrlWhereInput;
  orderBy?: Array<UrlOrderByInput>;
  skip?: number;
  take?: number;
};
