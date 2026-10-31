import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vite-plus/test";
import Footer from "./footer";

describe("Footer", () => {
  it("is the page footer landmark and closes on the credit", () => {
    render(<Footer tone="ink" />);

    expect(screen.getByRole("contentinfo")).toHaveTextContent(
      /Coded by Abdelrhman Abdelaal\.$/,
    );
  });

  it.each([
    ["Facebook", "https://www.facebook.com/"],
    ["Instagram", "https://www.instagram.com/"],
    ["Twitter", "https://x.com/"],
  ])(
    "names the %s icon link and opens it safely in a new tab",
    (name, href) => {
      render(<Footer tone="ink" />);

      const link = screen.getByRole("link", { name });

      expect(link).toHaveAttribute("href", href);
      expect(link).toHaveAttribute("target", "_blank");
      expect(link).toHaveAttribute("rel", "noopener noreferrer");
    },
  );
});
