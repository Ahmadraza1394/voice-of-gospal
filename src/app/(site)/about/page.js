import AboutChurchHero from "@/components/home/AboutChurchHero";
import JourneyOfFaith from "@/components/about/JourneyOfFaith";
import BishopBio from "@/components/about/BishopBio";
import MissionValues from "@/components/about/MissionValues";
import CTABanner from "@/components/about/CTABanner";
import ContactSection from "@/components/about/ContactSection";

export const metadata = {
  title: "About",
  description: "Learn about Voice of the Gospel Tabernacle",
};

export default function AboutPage() {
  return (
    <>
      <AboutChurchHero />
      <JourneyOfFaith />
      <BishopBio />
      <MissionValues />
      <CTABanner />
      <ContactSection />
    </>
  );
}
