import anime from "@/shared/assets/img/anime.png";

export default () => {
  return (
    <>
      <div>It's the Heavy Widget, bruh</div>
      <div className="images">
        <img src={anime} alt="" width={100} />
        <img src={anime} alt="" width={100} />
      </div>
    </>
  );
};
