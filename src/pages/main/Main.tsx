import ava from "@/assets/ava.png";
import wall from "@/assets/wall.jpg";
import Vec from "@/assets/vector.svg";
export const Main = () => {
  return (
    <>
      <div>It's the Main page, bruh</div>
      <div className="images">
        <img src={ava} alt="" width={100} />
        <img src={wall} alt="" width={100} />
        <Vec width={16} color="green" />
      </div>
    </>
  );
};
