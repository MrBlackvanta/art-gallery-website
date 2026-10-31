import { ArrowLink, Picture } from "@/components";
import { mapImage } from "@/data";

export default function LocationMap() {
  return (
    <div className="relative">
      <div className="absolute inset-x-0 top-0 z-10 v-container max-md:px-0">
        <ArrowLink href="/" direction="back">
          Back to home
        </ArrowLink>
      </div>
      <Picture
        image={mapImage}
        alt="Street map of central Newport with a pin on the gallery"
        fetchPriority="high"
        className="h-137.5 bg-map md:h-150"
      />
    </div>
  );
}
