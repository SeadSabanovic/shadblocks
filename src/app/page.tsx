import HeroSection from "@/components/sections/hero/hero-section";
import ShowcaseSection from "@/components/sections/showcase/showcase-section";
import FeaturesSection from "@/components/sections/features/features-section";
import Page from "@/components/ui/page";

export default function Home() {
  return (
    <Page>
      <HeroSection />
      <ShowcaseSection />
      <FeaturesSection />
    </Page>
  );
}
