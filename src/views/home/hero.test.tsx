import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vite-plus/test";
import Hero from "./hero";

describe("Hero", () => {
  it("titles the page with one h1 that also names its region", () => {
    render(<Hero />);

    const heading = screen.getByRole("heading", { level: 1 });

    expect(heading).toHaveAccessibleName("Modern Art Gallery");
    expect(
      screen.getByRole("region", { name: "Modern Art Gallery" }),
    ).toContainElement(heading);
  });

  it("sends visitors on to the location page", () => {
    render(<Hero />);

    expect(screen.getByRole("link", { name: "Our location" })).toHaveAttribute(
      "href",
      "/location",
    );
  });

  it("fetches the photo eagerly at high priority, as the largest paint", () => {
    render(<Hero />);

    const photo = screen.getByRole("img", { name: /visitors studying/ });

    expect(photo).toHaveAttribute("fetchpriority", "high");
    expect(photo).not.toHaveAttribute("loading", "lazy");
  });
});
