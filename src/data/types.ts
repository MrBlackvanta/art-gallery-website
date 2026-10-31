import type { StaticImageData } from "next/image";
import type { ComponentType, SVGProps } from "react";

export type Crop = {
  src: StaticImageData;
  src2x: StaticImageData;
};

export type ArtDirectedImage = {
  mobile: StaticImageData;
  tablet: Crop;
  desktop: Crop;
};

export type SocialLink = {
  label: string;
  href: string;
  icon: ComponentType<SVGProps<SVGSVGElement>>;
};
