import type { Metadata } from "next";

export const SITE_URL =
  "https://art-gallery-website.abdelrhman-ahmed8881.workers.dev";

export const SITE_NAME = "Modern Art Gallery";

const shareImage = {
  url: "/opengraph-image.jpg",
  width: 1200,
  height: 630,
  alt: "The Modern Art Gallery home page: its bold headline beside two visitors studying a large portrait.",
};

export const openGraphBase = {
  siteName: SITE_NAME,
  locale: "en_US",
  type: "website",
  images: [shareImage],
} satisfies Metadata["openGraph"];

export const twitterBase = {
  card: "summary_large_image",
  images: [shareImage],
} satisfies Metadata["twitter"];
