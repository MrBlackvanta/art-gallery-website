"use client";

import { usePathname, useRouter } from "next/navigation";
import { useEffect, useRef } from "react";

const COMMIT_BUDGET = 1000;
const PAINT_BUDGET = 400;

function after(wait: number) {
  return new Promise<void>((resolve) => {
    setTimeout(resolve, wait);
  });
}

function eagerImagesDecoded() {
  const images = [
    ...document.querySelectorAll<HTMLImageElement>("main img"),
  ].filter((image) => image.loading !== "lazy" && image.checkVisibility());

  return Promise.all(images.map((image) => image.decode().catch(() => {})));
}

function canAnimateViews() {
  return (
    "startViewTransition" in document &&
    !window.matchMedia("(prefers-reduced-motion: reduce)").matches
  );
}

function sameDocumentHref(link: HTMLAnchorElement) {
  if (link.target || link.hasAttribute("download")) return null;
  if (link.origin !== location.origin) return null;
  if (link.pathname === location.pathname && link.search === location.search) {
    return null;
  }

  return link.pathname + link.search;
}

function directionTo(pathname: string) {
  return pathname === "/" ? "back" : "forward";
}

export default function RouteTransitions() {
  const router = useRouter();
  const pathname = usePathname();
  const commit = useRef<(() => void) | null>(null);
  const running = useRef<ViewTransition | null>(null);

  useEffect(() => {
    const resolve = commit.current;
    if (!resolve) return;

    commit.current = null;
    void Promise.race([eagerImagesDecoded(), after(PAINT_BUDGET)]).then(
      resolve,
    );
  }, [pathname]);

  useEffect(() => {
    function claim(event: MouseEvent) {
      if (event.defaultPrevented || event.button !== 0) return;
      if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) {
        return;
      }
      if (!canAnimateViews()) return;

      const link =
        event.target instanceof Element
          ? event.target.closest("a[href]")
          : null;
      if (!(link instanceof HTMLAnchorElement)) return;

      const href = sameDocumentHref(link);
      if (!href) return;

      event.preventDefault();
      commit.current?.();

      const root = document.documentElement;
      root.dataset.direction = directionTo(link.pathname);
      root.style.setProperty(
        "--scrollbar",
        `${window.innerWidth - root.clientWidth}px`,
      );

      const transition = document.startViewTransition(() => {
        const committed = new Promise<void>((resolve) => {
          commit.current = resolve;
        });
        router.push(href);

        return Promise.race([committed, after(COMMIT_BUDGET + PAINT_BUDGET)]);
      });
      running.current = transition;

      function settle() {
        if (running.current !== transition) return;

        running.current = null;
        delete root.dataset.direction;
        root.style.removeProperty("--scrollbar");
      }

      transition.ready.catch(() => {});
      transition.finished.then(settle, settle);
    }

    document.addEventListener("click", claim, true);
    return () => document.removeEventListener("click", claim, true);
  }, [router]);

  return null;
}
