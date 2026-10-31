import { vi } from "vite-plus/test";

export type StartedTransition = {
  direction: string | undefined;
  finish: () => void;
};

export function stubViewTransitions({ skipped = false } = {}) {
  const started: StartedTransition[] = [];

  const start = vi.fn((update: () => unknown) => {
    let finish = () => {};
    const finished = new Promise<void>((resolve) => {
      finish = resolve;
    });
    started.push({
      direction: document.documentElement.dataset.direction,
      finish,
    });
    void update();
    const ready = skipped
      ? Promise.reject(new DOMException("Skipped", "AbortError"))
      : Promise.resolve();
    return { ready, finished };
  });

  Object.defineProperty(document, "startViewTransition", {
    value: start,
    configurable: true,
  });

  return { start, started };
}

export function removeViewTransitions() {
  Reflect.deleteProperty(document, "startViewTransition");
}
