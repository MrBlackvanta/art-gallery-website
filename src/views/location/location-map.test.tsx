import { fireEvent, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import {
  afterEach,
  beforeEach,
  describe,
  expect,
  it,
  vi,
} from "vite-plus/test";
import LocationMap from "./location-map";

const anything: object = new Proxy(() => anything, { get: () => anything });
const leafletLoaded = vi.fn();

const liveMap = () =>
  screen.getByRole("application", { name: /^Map of central Newport/ });

describe("LocationMap", () => {
  beforeEach(() => {
    vi.doMock("leaflet", () => {
      leafletLoaded();
      return {
        map: anything,
        control: anything,
        tileLayer: anything,
        marker: anything,
        divIcon: anything,
      };
    });
  });

  afterEach(() => vi.dynamicImportSettled());

  it("leads back to the home page", () => {
    render(<LocationMap />);

    expect(screen.getByRole("link", { name: "Back to home" })).toHaveAttribute(
      "href",
      "/",
    );
  });

  it("fetches the poster eagerly at high priority, as the largest paint", () => {
    render(<LocationMap />);

    const poster = screen.getByRole("presentation");

    expect(poster).toHaveAttribute("fetchpriority", "high");
    expect(poster).not.toHaveAttribute("loading", "lazy");
  });

  it("tabs to the back link first, then into the map", async () => {
    const user = userEvent.setup();
    render(<LocationMap />);

    await user.tab();
    expect(screen.getByRole("link", { name: "Back to home" })).toHaveFocus();

    await user.tab();
    expect(liveMap()).toHaveFocus();
  });

  it("loads Leaflet only once a pointer reaches the map", async () => {
    render(<LocationMap />);
    await vi.dynamicImportSettled();
    expect(leafletLoaded).not.toHaveBeenCalled();

    fireEvent.pointerEnter(liveMap());
    await vi.dynamicImportSettled();

    expect(leafletLoaded).toHaveBeenCalledOnce();
  });

  it("loads Leaflet once keyboard focus reaches the map", async () => {
    render(<LocationMap />);

    liveMap().focus();
    await vi.dynamicImportSettled();

    expect(leafletLoaded).toHaveBeenCalledOnce();
  });
});
