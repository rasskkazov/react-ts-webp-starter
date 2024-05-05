import { paths } from "@/shared/constant/paths";
import { Link } from "react-router-dom";

export const Navigation = () => {
  return (
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
  );
};
