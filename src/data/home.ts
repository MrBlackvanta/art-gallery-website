import printsDesktop2x from "@/assets/desktop/image-grid-1-2x.webp";
import printsDesktop from "@/assets/desktop/image-grid-1.webp";
import benchDesktop2x from "@/assets/desktop/image-grid-2-2x.webp";
import benchDesktop from "@/assets/desktop/image-grid-2.webp";
import hallDesktop2x from "@/assets/desktop/image-grid-3-2x.webp";
import hallDesktop from "@/assets/desktop/image-grid-3.webp";
import heroDesktop2x from "@/assets/desktop/image-hero-2x.webp";
import heroDesktop from "@/assets/desktop/image-hero.webp";
import printsMobile from "@/assets/mobile/image-grid-1-2x.webp";
import benchMobile from "@/assets/mobile/image-grid-2-2x.webp";
import hallMobile from "@/assets/mobile/image-grid-3-2x.webp";
import heroMobile from "@/assets/mobile/image-hero-2x.webp";
import printsTablet2x from "@/assets/tablet/image-grid-1-2x.webp";
import printsTablet from "@/assets/tablet/image-grid-1.webp";
import benchTablet2x from "@/assets/tablet/image-grid-2-2x.webp";
import benchTablet from "@/assets/tablet/image-grid-2.webp";
import hallTablet2x from "@/assets/tablet/image-grid-3-2x.webp";
import hallTablet from "@/assets/tablet/image-grid-3.webp";
import heroTablet2x from "@/assets/tablet/image-hero-2x.webp";
import heroTablet from "@/assets/tablet/image-hero.webp";
import type { ArtDirectedImage } from "./types";

export const heroImage: ArtDirectedImage = {
  mobile: heroMobile,
  tablet: { src: heroTablet, src2x: heroTablet2x },
  desktop: { src: heroDesktop, src2x: heroDesktop2x },
};

export const galleryImages = {
  prints: {
    mobile: printsMobile,
    tablet: { src: printsTablet, src2x: printsTablet2x },
    desktop: { src: printsDesktop, src2x: printsDesktop2x },
  },
  bench: {
    mobile: benchMobile,
    tablet: { src: benchTablet, src2x: benchTablet2x },
    desktop: { src: benchDesktop, src2x: benchDesktop2x },
  },
  hall: {
    mobile: hallMobile,
    tablet: { src: hallTablet, src2x: hallTablet2x },
    desktop: { src: hallDesktop, src2x: hallDesktop2x },
  },
} satisfies Record<string, ArtDirectedImage>;
