import { render, screen } from "@testing-library/react";
import type { StaticImageData } from "next/image";
import { describe, expect, it } from "vite-plus/test";
import Picture from "./picture";

const file = (src: string, width: number, height: number): StaticImageData => ({
  src,
  width,
  height,
});

const image = {
  mobile: file("/mobile-2x.webp", 750, 480),
  tablet: {
    src: file("/tablet.webp", 437, 700),
    src2x: file("/tablet-2x.webp", 874, 1400),
  },
  desktop: {
    src: file("/desktop.webp", 540, 800),
    src2x: file("/desktop-2x.webp", 1080, 1600),
  },
};

describe("Picture", () => {
  it("offers the widest crop first, because the first matching source wins", () => {
    const { container } = render(<Picture image={image} alt="" />);

    const sources = [...container.querySelectorAll("source")].map((source) =>
      ["media", "srcset", "width", "height"].map((name) =>
        source.getAttribute(name),
      ),
    );

    expect(sources).toEqual([
      [
        "(min-width: 64rem)",
        "/desktop.webp 1x, /desktop-2x.webp 2x",
        "540",
        "800",
      ],
      [
        "(min-width: 48rem)",
        "/tablet.webp 1x, /tablet-2x.webp 2x",
        "437",
        "700",
      ],
    ]);
  });

  it("falls back to the mobile crop below the tablet breakpoint", () => {
    render(<Picture image={image} alt="A gallery visitor" />);

    expect(
      screen.getByRole("img", { name: "A gallery visitor" }),
    ).toHaveAttribute("src", "/mobile-2x.webp");
  });
});
