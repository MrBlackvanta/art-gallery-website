import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vite-plus/test";
import LocationMap from "./location-map";

describe("LocationMap", () => {
  it("leads back to the home page", () => {
    render(<LocationMap />);

    expect(screen.getByRole("link", { name: "Back to home" })).toHaveAttribute(
      "href",
      "/",
    );
  });

  it("fetches the map eagerly at high priority, as the largest paint", () => {
    render(<LocationMap />);

    const map = screen.getByRole("img", { name: /map of central Newport/ });

    expect(map).toHaveAttribute("fetchpriority", "high");
    expect(map).not.toHaveAttribute("loading", "lazy");
  });
});
