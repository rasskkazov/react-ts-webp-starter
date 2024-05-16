import axios from "axios";

import { Todos } from "../model/types";

const BASE_URL = "https://jsonplaceholder.typicode.com";
axios.defaults.baseURL = BASE_URL;

const options = {
  method: "GET",
  headers: {
    accept: "application/json",
  },
};

export const fetchTodos = ({
  signal,
}: {
  signal?: AbortSignal;
}): Promise<Todos> => {
  return axios.get("/todos", { ...options, signal }).then((res) => res.data);
};
