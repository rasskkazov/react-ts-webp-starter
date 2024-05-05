import { Link, Outlet } from "react-router-dom";
import { Header } from "@/widgets";

export default function Root() {
  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
    </>
  );
}
