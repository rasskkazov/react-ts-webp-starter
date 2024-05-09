import ani from "@/shared/assets/anime.png";
import { useQuery } from "@tanstack/react-query";
import { fetchHeavyData } from "../api/fetchHeavyData";
import { TodoData } from "../model/types";
import { getData } from "@/shared/api/getData";

export default () => {
  const { data, error, isLoading } = getData<TodoData>({
    makeRequest: (signal) => fetchHeavyData(signal),
    queryKey: ["todo"],
  });

  return (
    <>
      <div>It's the Heavy Widget, bruh</div>
      <div className="images">
        <img src={ani} alt="" width={100} />
        <img src={ani} alt="" width={100} />
      </div>
      {isLoading && <div>Loading...</div>}
      {error && <div>{error.message}</div>}
      {data && <div className="todos">Data is ready</div>}
      {data && <div className="todos">{data[0].title}</div>}
    </>
  );
};
