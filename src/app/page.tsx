import { BackgroundFX } from "@/components/BackgroundFX";
import { Nav } from "@/components/Nav";
import { Hero } from "@/components/Hero";
import { HowItWorks } from "@/components/HowItWorks";
import { Features } from "@/components/Features";
import { Demo } from "@/components/Demo";
import { Download } from "@/components/Download";
import { Pricing } from "@/components/Pricing";
import { FAQ } from "@/components/FAQ";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <>
      <BackgroundFX />
      <Nav />
      <main className="relative z-10">
        <Hero />
        <HowItWorks />
        <Features />
        <Demo />
        <Download />
        <Pricing />
        <FAQ />
      </main>
      <Footer />
    </>
  );
}