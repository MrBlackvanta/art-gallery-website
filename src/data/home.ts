import heroDesktop2x from "@/assets/desktop/image-hero-2x.webp";
import heroDesktop from "@/assets/desktop/image-hero.webp";
import heroMobile from "@/assets/mobile/image-hero-2x.webp";
import heroTablet2x from "@/assets/tablet/image-hero-2x.webp";
import heroTablet from "@/assets/tablet/image-hero.webp";
import type { ArtDirectedImage } from "./types";

export const heroImage: ArtDirectedImage = {
  mobile: heroMobile,
  tablet: { src: heroTablet, src2x: heroTablet2x },
  desktop: { src: heroDesktop, src2x: heroDesktop2x },
};
