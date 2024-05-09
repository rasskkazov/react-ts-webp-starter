import wall from "@/shared/assets/wall.jpg";
import Vec from "@/shared/assets/vector.svg";
import ava from "@/shared/assets/ava.webp";
import { HeavyWidget } from "@/widgets";
import { Suspense } from "react";
export const Main = () => {
  return (
    <>
      <div>It's the Main page, bruh</div>
      <div className="images">
        <img src={wall} alt="" width={100} />
        <img src={ava} alt="" width={100} />
        <Vec width={16} color="green" />
      </div>
      <Suspense fallback={<div>Loading...</div>}>
        <HeavyWidget />
      </Suspense>
    </>
  );
};
