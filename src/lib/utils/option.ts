import type { Option } from "lib/types";

export const unwrap = <T>(data: Option<T>, errorMsg?: string): T => {
  if (data === undefined) {
    throw new Error(errorMsg || "Cannot unwrap the given data");
  }
  return data;
};

export const unwrapAll = <T>(data: Option<T | null>, errorMsg?: string): T => {
  if (data === undefined || data === null) {
    throw new Error(errorMsg || "Cannot unwrap the given data");
  }
  return data;
};
