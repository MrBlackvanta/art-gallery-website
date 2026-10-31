import { ArrowLink } from "@/components";
import { Footer } from "@/components/layout";
import { SITE_NAME } from "@/data";
import type { Metadata } from "next";

const description =
  "This room of the gallery is empty. The page may have moved, or its address may have a typo. Head back home to see the collection.";

export const metadata: Metadata = {
  title: `Page not found | ${SITE_NAME}`,
  description,
  alternates: { canonical: null },
};

export default function NotFound() {
  return (
    <>
      <main className="grow">
        <div className="v-container pt-12 pb-14 md:flex md:items-start md:justify-between md:pt-22 md:pb-20 lg:pt-26 lg:pb-32">
          <h1 className="font-display text-heading-m-tablet uppercase md:w-min md:text-heading-l-tablet lg:text-heading-l">
            Page not found
          </h1>
          <div className="mt-12 md:mt-0 md:w-99.5 lg:w-135">
            <p className="font-display text-heading-s-tablet uppercase lg:text-heading-s">
              Error 404
            </p>
            <p className="mt-5 text-body-s text-copy lg:mt-8 lg:text-body-m">
              {description}
            </p>
            <ArrowLink
              href="/"
              direction="back"
              className="mt-8 md:mt-12 lg:mt-16"
            >
              Back to home
            </ArrowLink>
          </div>
        </div>
      </main>
      <Footer tone="ink" />
    </>
  );
}
