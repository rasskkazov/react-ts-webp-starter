import { Navigate, useNavigate } from "react-router-dom";
import { observer } from "mobx-react";
import { authStore } from "@/features";
import { paths } from "@/shared/constant/paths";

export const PrivatePage = observer(() => {
  if (authStore.isLoading) return <h1>Checking auth...</h1>;
  if (!authStore.isAuth) {
    alert('Must be authorized. Click "Log in" button <3');
    return <Navigate to={paths.MAIN} />;
  }
  return (
    <>
      <h1 className="user">User is {authStore.user.login}</h1>
      <h1>I'm private page</h1>;
    </>
  );
});
