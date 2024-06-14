import { Suspense } from "react";
import { observer } from "mobx-react";
import { HeavyWidget } from "@/widgets";
import { authStore } from "@/features";
import wall from "@/shared/assets/img/wall.jpg";
import Vec from "@/shared/assets/svg/vector.svg";
import ava from "@/shared/assets/img/ava.webp";
import { Card } from "@/entities";
import { API_TOKEN } from "@/shared/api/apiToken";

export const Main = observer(() => {
  console.log("Token: ", API_TOKEN);

  return (
    <div>
      <Card
        img="https://static1.moviewebimages.com/wordpress/wp-content/uploads/2023/07/demon-slayer-characters.jpg"
        title="Anime"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
      />
      <div>It's the Main page, bruh</div>
      {authStore.isAuth && (
        <h1 className="user">User is {authStore.user.login}</h1>
      )}
      <div className="images">
        <img src={wall} alt="" width={100} />
        <img src={ava} alt="" width={100} />
        <Vec width={16} color="green" />
      </div>
      <Suspense fallback={<div>Loading...</div>}>
        <HeavyWidget />
      </Suspense>
    </div>
  );
});
