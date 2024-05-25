import { render, screen } from "@testing-library/react";
import { Root } from "./Root";
import { MemoryRouter } from "react-router-dom";

describe("Root Layout", () => {
  test("UI", () => {
    render(
      <MemoryRouter>
        <Root />
      </MemoryRouter>
    );
    expect(screen.getByRole("banner")).toBeInTheDocument;
    expect(screen.getByRole("main")).toBeInTheDocument;
  });
});
