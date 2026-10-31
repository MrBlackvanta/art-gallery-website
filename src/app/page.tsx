import { Footer } from "@/components/layout";
import { Gallery, Hero } from "@/views/home";

export default function Home() {
  return (
    <>
      <main className="grow">
        <Hero />
        <Gallery />
      </main>
      <Footer tone="ink" />
    </>
  );
}
