import { render, screen, within } from "@testing-library/react";
import { describe, expect, it } from "vite-plus/test";
import NotFound, { metadata } from "./not-found";

describe("NotFound", () => {
  it("names the problem as the only heading", () => {
    render(<NotFound />);

    expect(screen.getAllByRole("heading")).toEqual([
      screen.getByRole("heading", { level: 1, name: "Page not found" }),
    ]);
  });

  it("offers exactly one way out of the page, a real link back home", () => {
    render(<NotFound />);

    const link = within(screen.getByRole("main")).getByRole("link");
    expect(link).toHaveAccessibleName("Back to home");
    expect(link).toHaveAttribute("href", "/");
  });

  it("closes on the site footer like every other page", () => {
    render(<NotFound />);

    expect(screen.getByRole("contentinfo")).toBeInTheDocument();
  });

  it("carries its own title and drops the home canonical", () => {
    expect(metadata.title).toBe("Page not found | Modern Art Gallery");
    expect(metadata.alternates).toEqual({ canonical: null });
  });
});
