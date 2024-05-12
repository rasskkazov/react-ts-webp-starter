import { UseQueryOptions, useQuery } from "@tanstack/react-query";
import { fetchTodos } from "../../api/fetchTodos";
import { Todos } from "../../model/types";

export const useFetchHeavyWidget = (
  options?: UseQueryOptions<Todos, Error>
) => {
  return useQuery<Todos>({
    queryKey: ["todo"],
    queryFn: ({ signal }) => fetchTodos({ signal }),
    ...options,
  });
};
