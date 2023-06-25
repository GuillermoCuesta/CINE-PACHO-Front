import { getLocalStorageToken } from "./getLocalStorageToken";

export function getConfig() {
  return {
    headers: {
      Authorization: `Bearer ${getLocalStorageToken()}`,
      accept: "application/json",
    },
  };
}
