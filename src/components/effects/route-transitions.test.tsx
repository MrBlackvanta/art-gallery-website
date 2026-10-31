import { setMediaMatch } from "@/test/media";
import {
  removeViewTransitions,
  stubViewTransitions,
} from "@/test/view-transitions";
import { fireEvent, render, screen } from "@testing-library/react";
import {
  afterEach,
  beforeEach,
  describe,
  expect,
  it,
  vi,
} from "vite-plus/test";
import RouteTransitions from "./route-transitions";

const push = vi.fn();
const routerHandled = vi.fn();

vi.mock("next/navigation", () => ({
  useRouter: () => ({ push }),
  usePathname: () => "/",
}));

function standInForNextLink(event: MouseEvent) {
  if (!event.defaultPrevented) routerHandled();
  event.preventDefault();
}

function click(name: string, init?: MouseEventInit) {
  fireEvent.click(screen.getByRole("link", { name }), init);
}

function renderLinks() {
  render(
    <>
      <RouteTransitions />
      <a href="/">Back to home</a>
      <a href="/location">Our location</a>
    </>,
  );
}

const root = document.documentElement;

beforeEach(() => document.addEventListener("click", standInForNextLink));

afterEach(() => {
  document.removeEventListener("click", standInForNextLink);
  removeViewTransitions();
  window.history.replaceState(null, "", "/");
  delete root.dataset.direction;
  root.style.removeProperty("--scrollbar");
});

describe("RouteTransitions", () => {
  it("slides forward to the location page", () => {
    const { start, started } = stubViewTransitions();
    renderLinks();

    click("Our location");

    expect(start).toHaveBeenCalledOnce();
    expect(started[0].direction).toBe("forward");
    expect(push).toHaveBeenCalledWith("/location");
    expect(routerHandled).not.toHaveBeenCalled();
  });

  it("slides back to the home page", () => {
    const { started } = stubViewTransitions();
    window.history.replaceState(null, "", "/location");
    renderLinks();

    click("Back to home");

    expect(started[0].direction).toBe("back");
    expect(push).toHaveBeenCalledWith("/");
  });

  it("clears its marks from the page once the slide finishes", async () => {
    const { started } = stubViewTransitions();
    renderLinks();

    click("Our location");
    started[0].finish();

    await vi.waitFor(() => expect(root.dataset.direction).toBeUndefined());
    expect(root.style.getPropertyValue("--scrollbar")).toBe("");
  });

  it("keeps its marks while a second click's slide is still running", async () => {
    const { started } = stubViewTransitions();
    renderLinks();

    click("Our location");
    click("Our location");
    started[0].finish();
    await Promise.resolve();

    expect(root.dataset.direction).toBe("forward");
  });

  it("still navigates when the browser skips the slide", () => {
    stubViewTransitions({ skipped: true });
    renderLinks();

    click("Our location");

    expect(push).toHaveBeenCalledWith("/location");
  });

  it("leaves a link to the current page to the router", () => {
    const { start } = stubViewTransitions();
    renderLinks();

    click("Back to home");

    expect(start).not.toHaveBeenCalled();
    expect(routerHandled).toHaveBeenCalledOnce();
  });

  it.each(["ctrlKey", "metaKey", "shiftKey", "altKey"])(
    "leaves a click with %s held to the router",
    (modifier) => {
      const { start } = stubViewTransitions();
      renderLinks();

      click("Our location", { [modifier]: true });

      expect(start).not.toHaveBeenCalled();
      expect(routerHandled).toHaveBeenCalledOnce();
    },
  );

  it("leaves the click to the router when motion is reduced", () => {
    const { start } = stubViewTransitions();
    setMediaMatch("(prefers-reduced-motion: reduce)", true);
    renderLinks();

    click("Our location");

    expect(start).not.toHaveBeenCalled();
    expect(routerHandled).toHaveBeenCalledOnce();
  });

  it("leaves the click to the router without view transition support", () => {
    renderLinks();

    click("Our location");

    expect(routerHandled).toHaveBeenCalledOnce();
  });
});
