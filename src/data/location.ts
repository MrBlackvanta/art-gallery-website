import mapDesktop2x from "@/assets/desktop/image-map-2x.webp";
import mapDesktop from "@/assets/desktop/image-map.webp";
import mapMobile from "@/assets/mobile/image-map-2x.webp";
import mapTablet2x from "@/assets/tablet/image-map-2x.webp";
import mapTablet from "@/assets/tablet/image-map.webp";
import type { LatLngTuple } from "leaflet";
import type { ArtDirectedImage } from "./types";

export const mapImage: ArtDirectedImage = {
  mobile: mapMobile,
  tablet: { src: mapTablet, src2x: mapTablet2x },
  desktop: { src: mapDesktop, src2x: mapDesktop2x },
};

export const galleryPosition: LatLngTuple = [41.48214, -71.31051];

const tileOrigin = "https://tile.openstreetmap.org";

export const mapTiles = {
  origin: tileOrigin,
  url: `${tileOrigin}/{z}/{x}/{y}.png`,
  attribution:
    '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
};
