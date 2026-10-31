import type { ArtDirectedImage, Crop } from "@/data";

const srcSet = ({ src, src2x }: Crop) => `${src.src} 1x, ${src2x.src} 2x`;

type Props = {
  image: ArtDirectedImage;
  alt: string;
  className?: string;
} & Pick<React.ComponentProps<"img">, "fetchPriority" | "loading">;

export default function Picture({
  image: { mobile, tablet, desktop },
  alt,
  className = "",
  ...img
}: Props) {
  return (
    <picture className={`relative block ${className}`}>
      <source
        media="(min-width: 64rem)"
        srcSet={srcSet(desktop)}
        width={desktop.src.width}
        height={desktop.src.height}
      />
      <source
        media="(min-width: 48rem)"
        srcSet={srcSet(tablet)}
        width={tablet.src.width}
        height={tablet.src.height}
      />
      <img
        src={mobile.src}
        width={mobile.width}
        height={mobile.height}
        alt={alt}
        className="absolute inset-0 size-full object-cover"
        {...img}
      />
    </picture>
  );
}
