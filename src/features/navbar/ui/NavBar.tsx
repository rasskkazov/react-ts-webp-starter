import { Link } from "react-router-dom";
import { paths } from "@/shared/constant/paths";

import * as classes from "./NavBar.module.scss";

export const NavBar = () => {
  return (
    <nav className={classes.navbar}>
      <ul>
        <li>
          <Link to={paths.MAIN}>Main</Link>
        </li>
        <li>
          <Link to={paths.TODO}>Todo</Link>
        </li>
        <li>
          <Link to={"/nonexisting"}>Non existing</Link>
        </li>
        <li>
          <Link to={paths.PRIVATE}>Private</Link>
        </li>
      </ul>
    </nav>
  );
};
