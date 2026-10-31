import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vite-plus/test";
import ArrowLink from "./arrow-link";

describe("ArrowLink", () => {
  it.each(["forward", "back"] as const)(
    "is named by its label alone when it points %s",
    (direction) => {
      render(
        <ArrowLink href="/location" direction={direction}>
          Our location
        </ArrowLink>,
      );

      expect(
        screen.getByRole("link", { name: "Our location" }),
      ).toHaveAttribute("href", "/location");
    },
  );
});
