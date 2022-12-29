import { $authHost, $host } from "./index";

export const createKey = async (key) => {
  const { data } = await $authHost.post("api/key", key);
  return data;
};

export const fetchKeys = async () => {
  const { data } = await $host.get("api/key");
  return data;
};
