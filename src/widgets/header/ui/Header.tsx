import { Auth, Navigation } from "@/features";

import * as classes from "./Header.module.scss";

export const Header = () => {
  return (
    <header className={classes.header}>
      <Navigation />
      <Auth />
    </header>
  );
};
