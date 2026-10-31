"use client";

import { galleryPosition, mapTiles } from "@/data";
import type { Map, PointTuple } from "leaflet";
import { useEffect, useRef } from "react";
import { preconnect } from "react-dom";

const zoom = 16;
const pin = { width: 66, height: 88 };
const centreThePinBoxLikeThePoster: PointTuple = [0, -pin.height / 2];
const pinMarkup = `<svg width="${pin.width}" height="${pin.height}" viewBox="0 0 66 88" aria-hidden="true"><path class="fill-ink" d="M0 0h66v56H45L33 88 21 56H0z"/><circle class="fill-accent" cx="33" cy="28" r="12"/></svg>`;

type Props = {
  className?: string;
};

export default function LiveMap({ className = "" }: Props) {
  const host = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const node = host.current;
    if (!node) return;

    const intent = new AbortController();
    let map: Map | undefined;
    let released = false;

    const mount = async () => {
      intent.abort();
      preconnect(mapTiles.origin);

      const [L] = await Promise.all([
        import("leaflet"),
        import("./live-map.css"),
      ]);
      if (released) return;

      const animate = !matchMedia("(prefers-reduced-motion: reduce)").matches;

      map = L.map(node, {
        zoomControl: false,
        scrollWheelZoom: false,
        dragging: !matchMedia("(pointer: coarse)").matches,
        zoomAnimation: animate,
        fadeAnimation: animate,
      });
      map
        .setView(galleryPosition, zoom)
        .panBy(centreThePinBoxLikeThePoster, { animate: false });
      map.attributionControl.setPrefix(false);

      L.control.zoom({ position: "topright" }).addTo(map);
      L.tileLayer(mapTiles.url, {
        attribution: mapTiles.attribution,
        maxZoom: 19,
      })
        .once("load", () => {
          node.dataset.ready = "";
        })
        .addTo(map);
      L.marker(galleryPosition, {
        icon: L.divIcon({
          html: pinMarkup,
          className: "",
          iconSize: [pin.width, pin.height],
          iconAnchor: [pin.width / 2, pin.height],
        }),
        interactive: false,
        keyboard: false,
      }).addTo(map);

      const focusedBeforeLeafletListened = document.activeElement === node;
      if (focusedBeforeLeafletListened) map.fire("focus");
    };

    const onIntent = () => void mount();
    node.addEventListener("pointerenter", onIntent, { signal: intent.signal });
    node.addEventListener("focus", onIntent, { signal: intent.signal });

    return () => {
      released = true;
      intent.abort();
      map?.remove();
    };
  }, []);

  return (
    <div
      ref={host}
      role="application"
      aria-label="Map of central Newport with a pin on the gallery"
      tabIndex={0}
      className={`focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-ink ${className}`}
    />
  );
}
