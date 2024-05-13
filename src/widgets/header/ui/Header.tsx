import { Navigation } from "@/features";
import * as classes from "./Header.module.scss";
import { Button } from "@/shared/ui/Button/Button";
export const Header = () => {
  return (
    <div className={classes.header}>
      <Navigation />
      <Button text="Sign in" />
    </div>
  );
};
