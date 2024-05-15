import anime from "@/shared/assets/img/anime.png";
// import { useFetchTodos } from "../lib/hooks/useFetchTodos";

export default () => {
  // const { data, error, isLoading } = useFetchTodos();

  return (
    <>
      <div>It's the Heavy Widget, bruh</div>
      <div className="images">
        <img src={anime} alt="" width={100} />
        <img src={anime} alt="" width={100} />
      </div>
      {/* {isLoading && <div>Loading...</div>}
      {error && <div>{error.message}</div>}
      {data && <div className="todos">Data is ready</div>}
      {data && <div className="todos">{data[0].title}</div>} */}
    </>
  );
};
