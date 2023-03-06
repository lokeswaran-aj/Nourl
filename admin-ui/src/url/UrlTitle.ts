import { Url as TUrl } from "../api/url/Url";

export const URL_TITLE_FIELD = "originalUrl";

export const UrlTitle = (record: TUrl): string => {
  return record.originalUrl || String(record.id);
};
