import { Link, Outlet } from "react-router-dom";
import { paths } from "./paths";

export default function Root() {
  return (
    <>
      <div className="header">
        Its header
        <nav>
          <ul>
            <li>
              <Link to={paths.MAIN}>Main</Link>
            </li>
            <li>
              <Link to={`${paths.SECOND}/1`}>Secondary</Link>
            </li>
            <li>
              <Link to={"/nonexisting"}>Non existing</Link>
            </li>
          </ul>
        </nav>
      </div>
      <main>
        <Outlet />
      </main>
    </>
  );
}
