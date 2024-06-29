import { Link } from "react-router-dom";
import { paths } from "@/shared/constant/paths";

import * as classes from "./NavBar.module.scss";
import { t } from "i18next";

export const NavBar = () => {
  return (
    <nav className={classes.navbar}>
      <ul>
        <li>
          <Link to={paths.MAIN}>{t("navbar.main")}</Link>
        </li>
        <li>
          <Link to={paths.TODO}>{t("navbar.todo")}</Link>
        </li>
        <li>
          <Link to={"/nonexisting"}>{t("navbar.nonExisting")}</Link>
        </li>
        <li>
          <Link to={paths.PRIVATE}>{t("navbar.private")}</Link>
        </li>
      </ul>
    </nav>
  );
};
