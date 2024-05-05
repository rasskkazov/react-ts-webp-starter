import { Navigation } from "@/features";
import * as classes from "./Header.module.scss";
export const Header = () => {
  return (
    <div className={classes.header}>
      <Navigation />
      Its header
    </div>
  );
};
