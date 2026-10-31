import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vite-plus/test";
import Details from "./details";

describe("Details", () => {
  it("titles the page with one h1 that also names its region", () => {
    render(<Details />);

    const heading = screen.getByRole("heading", { level: 1 });

    expect(heading).toHaveAccessibleName("Our location");
    expect(
      screen.getByRole("region", { name: "Our location" }),
    ).toContainElement(heading);
  });

  it("marks up the whole postal address as one address group", () => {
    render(<Details />);

    expect(screen.getByRole("group")).toHaveTextContent(
      /^99 King Street\s*Newport RI 02840 United States of America$/,
    );
  });
});
