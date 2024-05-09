import { useQuery } from "@tanstack/react-query";
import axios from "axios";

type GetDataParams<DataType> = {
  makeRequest: (signal: AbortSignal) => Promise<DataType>;
  queryKey: string[];
};
export const getData = <DataType>({
  makeRequest,
  queryKey,
}: GetDataParams<DataType>) => {
  const { data, error, isLoading } = useQuery({
    queryKey,
    queryFn: async ({ signal }) => {
      const data = await makeRequest(signal);
      return data;
    },
    retry: 3,
  });
  return {
    data,
    error,
    isLoading,
  };
};
