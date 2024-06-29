import { observer } from "mobx-react";
import { Button } from "@/shared/ui/Button";

import { useAuth } from "../lib/useAuth";
import * as classes from "./Auth.module.scss";
import { t } from "i18next";

export const Auth = observer(() => {
  const { isAuth, isLoading, handleLogIn, handleLogOut } = useAuth();

  return (
    <div className={classes.auth}>
      {!isAuth && !isLoading && (
        <Button text={t("main.login")} onClick={handleLogIn} />
      )}
      {isLoading && <Button text={t("main.login")} status="loading" />}
      {isAuth && <Button text={t("main.logout")} onClick={handleLogOut} />}
    </div>
  );
});
