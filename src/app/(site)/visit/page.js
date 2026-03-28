import VisitHero from "@/components/visit/VisitHero";
import WelcomeSection from "@/components/visit/WelcomeSection";
import ServiceTimes from "@/components/visit/ServiceTimes";
import LocationMap from "@/components/visit/LocationMap";
import WhatToExpect from "@/components/visit/WhatToExpect";
import PrayerCTA from "@/components/visit/PrayerCTA";

export const metadata = {
  title: "Visit",
  description: "Plan your visit to Voice of Gospel.",
};

export default function VisitPage() {
  return (
    <>
      <VisitHero />
      <WelcomeSection />
      <ServiceTimes />
      <LocationMap />
      <WhatToExpect />
      <PrayerCTA />
    </>
  );
}
