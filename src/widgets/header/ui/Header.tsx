import { Auth, Navigation } from "@/features";
import * as classes from "./Header.module.scss";
export const Header = () => {
  return (
    <div className={classes.header}>
      <Navigation />
      <Auth />
    </div>
  );
};
