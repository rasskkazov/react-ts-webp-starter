import { Outlet } from "react-router-dom";
import { Header } from "@/widgets";
import * as classes from "./Root.module.scss";

export default function Root() {
  return (
    <>
      <Header />
      <main className={classes.main}>
        <Outlet />
      </main>
    </>
  );
}
