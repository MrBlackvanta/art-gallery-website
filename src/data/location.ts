import mapDesktop2x from "@/assets/desktop/image-map-2x.webp";
import mapDesktop from "@/assets/desktop/image-map.webp";
import mapMobile from "@/assets/mobile/image-map-2x.webp";
import mapTablet2x from "@/assets/tablet/image-map-2x.webp";
import mapTablet from "@/assets/tablet/image-map.webp";
import type { ArtDirectedImage } from "./types";

export const mapImage: ArtDirectedImage = {
  mobile: mapMobile,
  tablet: { src: mapTablet, src2x: mapTablet2x },
  desktop: { src: mapDesktop, src2x: mapDesktop2x },
};
