import ani from "@/shared/assets/anime.png";

export default () => {
  return (
    <>
      <div>It's the Heavy Widget, bruh</div>
      <div className="images">
        <img src={ani} alt="" width={100} />
        <img src={ani} alt="" width={100} />
      </div>
    </>
  );
};
