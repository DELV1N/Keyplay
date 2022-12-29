import { $authHost, $host } from "./index";

export const createPublisher = async (publisher) => {
  const { data } = await $authHost.post("api/publisher", publisher);
  return data;
};

export const fetchPublishers = async () => {
  const { data } = await $host.get("api/publisher");
  return data;
};

export const createDeveloper = async (developer) => {
  const { data } = await $authHost.post("api/developer", developer);
  return data;
};

export const fetchDevelopers = async () => {
  const { data } = await $host.get("api/developer");
  return data;
};

export const createGame = async (game) => {
  const { data } = await $authHost.post("api/game", game);
  return data;
};

export const fetchGames = async (publisherId, developerId, page, limit) => {
  const { data } = await $host.get("api/game", {
    params: { publisherId, developerId, page, limit },
  });
  return data;
};

export const fetchOneGame = async (id) => {
  const { data } = await $host.get("api/game/" + id);
  return data;
};
