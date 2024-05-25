import { render, screen } from "@testing-library/react";
import { Navigation } from "./Navigation";
import { BrowserRouter } from "react-router-dom";
import { paths } from "@/shared/constant/paths";

describe("Navigation UI", () => {
  test("Links", () => {
    render(
      <BrowserRouter>
        <Navigation />
      </BrowserRouter>
    );

    const navNames = ["Main", "Todo", "Non existing", "Private"];
    navNames.forEach((name) =>
      expect(screen.getByText(name)).toBeInTheDocument()
    );

    expect(screen.getByText("Main")).toHaveAttribute("href", paths.MAIN);
    expect(screen.getByText("Todo")).toHaveAttribute("href", `/${paths.TODO}`);
    expect(screen.getByText("Private")).toHaveAttribute(
      "href",
      `/${paths.PRIVATE}`
    );
  });
});
