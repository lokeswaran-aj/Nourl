import { User } from "../user/User";

export type Url = {
  click: number | null;
  createdAt: Date;
  id: string;
  originalUrl: string;
  shortUrl: string;
  updatedAt: Date;
  user?: User;
};
