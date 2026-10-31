import { Signature } from "@/components/layout";
import { openGraphBase, SITE_NAME, SITE_URL, twitterBase } from "@/data";
import type { Metadata, Viewport } from "next";
import { Big_Shoulders, Outfit } from "next/font/google";
import "./globals.css";

const bigShoulders = Big_Shoulders({
  variable: "--font-big-shoulders",
  subsets: ["latin"],
  axes: ["opsz"],
  display: "swap",
  fallback: ["ui-sans-serif", "system-ui", "sans-serif"],
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  display: "swap",
});

const title = `${SITE_NAME} | Free entry in Newport, RI`;
const description =
  "Wander through distinct collections and the creative process behind them. Free to all visitors, open daily 8am to 9pm at 99 King Street, Newport.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title,
  description,
  alternates: { canonical: "/" },
  openGraph: { ...openGraphBase, url: "/" },
  twitter: twitterBase,
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${bigShoulders.variable} ${outfit.variable} antialiased`}
    >
      <body className="relative flex min-h-dvh flex-col">
        {children}
        <Signature />
      </body>
    </html>
  );
}
