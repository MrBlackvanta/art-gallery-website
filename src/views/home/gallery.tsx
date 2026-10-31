import { Picture } from "@/components";
import { galleryImages } from "@/data";

export default function Gallery() {
  return (
    <div className="v-container v-gallery gap-8 py-30 md:gap-2.75 lg:gap-7.5 lg:py-45">
      <section
        aria-labelledby="visit-title"
        className="md:col-span-full md:grid md:h-100 md:grid-cols-subgrid"
      >
        <Picture
          image={galleryImages.prints}
          alt="A bright hall of geometric prints in orange, green and black around a matching sculpture"
          loading="lazy"
          className="aspect-343/320 md:col-span-2 md:col-start-2 md:aspect-auto"
        />
        <div className="mt-6 md:col-start-1 md:row-start-1 md:mt-9 md:pr-14 lg:mt-0 lg:self-center lg:pr-24">
          <h2
            id="visit-title"
            className="font-display text-heading-m-tablet uppercase lg:text-heading-m"
          >
            Your day
            <br className="md:hidden" /> at the gallery
          </h2>
          <p className="mt-5 text-body-s text-copy md:mt-6 lg:mt-8 lg:text-body-m">
            Wander through our distinct collections and find new insights about
            our artists. Dive into the details of their creative process.
          </p>
        </div>
      </section>
      <section
        aria-labelledby="inspired-title"
        className="grid gap-y-4 md:col-span-full md:h-180 md:grid-cols-subgrid md:grid-rows-[1fr_auto] md:gap-y-2.75 lg:gap-y-7.5"
      >
        <Picture
          image={galleryImages.bench}
          alt="A black and white photograph of a spiral staircase hung above a wooden bench"
          loading="lazy"
          className="aspect-343/480 md:col-span-2 md:row-span-2 md:aspect-auto"
        />
        <Picture
          image={galleryImages.hall}
          alt="Visitors walking a long hall of framed paintings under rows of round skylights"
          loading="lazy"
          className="aspect-343/200 md:aspect-auto"
        />
        <div className="bg-ink px-6 py-12 text-white md:px-7 md:py-21 lg:px-12 lg:py-16">
          <h2
            id="inspired-title"
            className="font-display text-heading-m-tablet uppercase lg:text-heading-m"
          >
            Come & be inspired
          </h2>
          <p className="mt-6 text-body-s lg:mt-8 lg:text-body-m">
            We’re excited to welcome you to our gallery and see how our
            collections influence you.
          </p>
        </div>
      </section>
    </div>
  );
}
