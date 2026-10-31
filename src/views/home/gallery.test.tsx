import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vite-plus/test";
import Gallery from "./gallery";

describe("Gallery", () => {
  it.each(["Your day at the gallery", "Come & be inspired"])(
    "names the %s region by its own h2",
    (name) => {
      render(<Gallery />);

      expect(screen.getByRole("region", { name })).toContainElement(
        screen.getByRole("heading", { level: 2, name }),
      );
    },
  );

  it("describes and lazy-loads every photo, as none is above the fold", () => {
    render(<Gallery />);

    const photos = screen.getAllByRole("img");

    expect(photos).toHaveLength(3);
    for (const photo of photos) {
      expect(photo).toHaveAccessibleName();
      expect(photo).toHaveAttribute("loading", "lazy");
    }
  });
});
