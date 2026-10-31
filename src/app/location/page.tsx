import { Footer } from "@/components/layout";
import { openGraphBase, SITE_NAME, twitterBase } from "@/data";
import { Details, LocationMap } from "@/views/location";
import type { Metadata } from "next";

const title = `Our location | ${SITE_NAME}`;
const description =
  "Find us at 99 King Street, Newport, RI, near the Edward King House. Free to all visitors and open seven days a week from 8am to 9pm.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/location" },
  openGraph: { ...openGraphBase, title, description, url: "/location" },
  twitter: { ...twitterBase, title, description },
};

export default function Location() {
  return (
    <>
      <main className="grow">
        <LocationMap />
        <Details />
      </main>
      <Footer tone="accent" />
    </>
  );
}
