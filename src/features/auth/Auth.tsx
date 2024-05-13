import { Button } from "@/shared/ui/Button";
import { login } from "./api/login";
import { isAuth } from "@/shared/lib/isAuth";
export const Auth = () => {
  return (
    <div className="auth">
      {!isAuth() && <Button text="Login" onClick={login} />}
    </div>
  );
};
