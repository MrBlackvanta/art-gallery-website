import { ArrowLink, Picture } from "@/components";
import { mapImage } from "@/data";
import LiveMap from "./live-map";

export default function LocationMap() {
  return (
    <div className="relative h-137.5 bg-map md:h-150">
      <div className="pointer-events-none absolute inset-x-0 top-0 z-10 v-container max-md:px-0">
        <ArrowLink href="/" direction="back" className="pointer-events-auto">
          Back to home
        </ArrowLink>
      </div>
      <Picture
        image={mapImage}
        alt=""
        fetchPriority="high"
        className="h-full"
      />
      <LiveMap className="absolute inset-0" />
    </div>
  );
}
