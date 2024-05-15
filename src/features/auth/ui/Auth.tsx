import { Button } from "@/shared/ui/Button";
import { observer } from "mobx-react";
import { useAuth } from "../lib/useAuth";
export const Auth = observer(() => {
  const { isAuth, isLoading, handleLogIn, handleLogOut } = useAuth();

  return (
    <div className="auth">
      {!isAuth && !isLoading && <Button text="Log in" onClick={handleLogIn} />}
      {isLoading && <Button text="Log in" status="loading" />}
      {isAuth && <Button text="Log out" onClick={handleLogOut} />}
    </div>
  );
});
