import { ArrowLink, Picture } from "@/components";
import { heroImage } from "@/data";

export default function Hero() {
  return (
    <section
      aria-labelledby="hero-title"
      className="v-hero md:h-175 lg:h-200 lg:before:col-[full-start/photo-start] lg:before:row-span-full lg:before:bg-ink"
    >
      <Picture
        image={heroImage}
        alt="Two visitors studying a large pencil portrait of an older woman in glasses"
        fetchPriority="high"
        className="col-[photo] aspect-375/240 md:row-span-full md:aspect-auto"
      />
      <h1
        id="hero-title"
        className="relative col-[copy] row-start-2 mt-8 self-start v-hero-title font-display text-heading-xl-mobile uppercase md:mt-0 md:text-heading-xl-tablet lg:col-[content-start/copy-end] lg:justify-self-start lg:text-heading-xl"
      >
        Modern
        <br /> Art Gallery
      </h1>
      <div className="relative col-[copy] row-start-3 mt-8 md:mt-12 lg:row-start-2 lg:mt-0">
        <p className="text-body-s text-copy lg:text-body-m">
          The arts in the collection of the Modern Art Gallery all started from
          a spark of inspiration. Will these pieces inspire you? Visit us and
          find out.
        </p>
        <ArrowLink
          href="/location"
          direction="forward"
          className="mt-8 md:mt-12 lg:mt-16"
        >
          Our location
        </ArrowLink>
      </div>
    </section>
  );
}
