import { CallToAction } from "@/components/call-to-action";
import { CustomerStorySection } from "@/components/custumer-story-section";
import { FeatureSection } from "@/components/feature-section";
import { HeroSection } from "@/components/hero";
import { SuportSection } from "@/components/suport-section";

export default function Home() {
  return (
    <>
      <article className="flex flex-col">
        <HeroSection />
        <FeatureSection/>
        <SuportSection/>
        <CustomerStorySection/>
        <CallToAction/>
      </article>
    </>
  );
}
