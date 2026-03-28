import HeroCarousel from "@/components/home/HeroCarousel";
import BishopSection from "@/components/home/BishopSection";
import QuoteBanner from "@/components/home/QuoteBanner";
import MinistriesGrid from "@/components/home/MinistriesGrid";
import HaitiMission from "@/components/home/HaitiMission";

export const metadata = {
  title: "Home",
};

export default function HomePage() {
  return (
    <>
      <HeroCarousel />
      <BishopSection />
      <QuoteBanner />
      <MinistriesGrid />
      <HaitiMission />
      {/* 
      <Section>
        <Heading level="h2" className="mb-6 text-brand-primary">
          Our Mission
        </Heading>
        <p className="text-gray-600">
          Content section will be implemented from Figma
        </p>
      </Section>

      <Section className="section-light">
        <Heading level="h2" className="mb-6 text-brand-primary">
          Get Involved
        </Heading>
        <p className="text-gray-600">
          Call to action section will be implemented from Figma
        </p>
      </Section> */}
    </>
  );
}
