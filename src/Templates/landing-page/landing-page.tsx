import { CallToAction, CustomerStorySection, FeatureSection, HeroSection, SuportSection } from "@/Templates/landing-page/sections"

export const LandingPage = () =>{
    return(
        <article className="flex flex-col gap-10 md:gap-20">
        <HeroSection />
        <FeatureSection/>
        <SuportSection/>
        <CustomerStorySection/>
        <CallToAction/>
      </article>
    )
}