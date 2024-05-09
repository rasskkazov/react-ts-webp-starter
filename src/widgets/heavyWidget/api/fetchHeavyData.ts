import axios from "axios";
import { TodoData } from "../model/types";

const BASE_URL = "https://jsonplaceholder.typicode.com";
axios.defaults.baseURL = BASE_URL;

const options = {
  method: "GET",
  headers: {
    accept: "application/json",
  },
};

export const fetchHeavyData = (signal: AbortSignal): Promise<TodoData> => {
  return axios.get("/todos", { ...options, signal }).then((res) => res.data);
};
