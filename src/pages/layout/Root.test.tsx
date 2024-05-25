import { render, screen } from "@testing-library/react";
import { Root } from "./Root";
import { BrowserRouter } from "react-router-dom";

describe("Root Layout", () => {
  test("UI", () => {
    render(
      <BrowserRouter>
        <Root />
      </BrowserRouter>
    );
    expect(screen.getByRole("banner")).toBeInTheDocument;
    expect(screen.getByRole("main")).toBeInTheDocument;
  });
});
