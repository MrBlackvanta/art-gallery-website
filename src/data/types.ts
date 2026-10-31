import type { StaticImageData } from "next/image";

export type Crop = {
  src: StaticImageData;
  src2x: StaticImageData;
};

export type ArtDirectedImage = {
  mobile: StaticImageData;
  tablet: Crop;
  desktop: Crop;
};
