import GlobalMissionHero from "@/components/global-mission/GlobalMissionHero";
import CountryMission from "@/components/global-mission/CountryMission";
import GlobalMissionMap from "@/components/global-mission/GlobalMissionMap";
import PrayerCTA from "@/components/global-mission/PrayerCTA";

export const metadata = {
  title: "Ivory Coast Mission",
  description: "Reaching Ivory Coast with the Gospel and humanitarian aid.",
};

export default function IvoryCoastPage() {
  return (
    <>
      <GlobalMissionHero
        title="Ivory Coast Mission"
        subtitle="Reaching Ivory Coast"
        breadcrumb="Global Mission / Ivory Coast"
        backgroundImage="/images/VOICE-OF-THE-GOSPEL-TABERNACLE-BANNER-1.png"
      />
      <CountryMission
        country="Ivory Coast"
        title="Reaching Ivory Coast"
        description="Our work in Ivory Coast centers on church planting, medical missions, and educational initiatives. We provide healthcare services, school supplies, and spiritual guidance to communities in need across the nation."
        image="/images/VOICE-OF-THE-GOSPEL-TABERNACLE-BANNER-1.png"
        stats={[
          { value: "10+", label: "Medical Clinics" },
          { value: "300+", label: "Students Supported" },
        ]}
        caption="Bringing hope through healthcare, education, and the Gospel."
      />
      <GlobalMissionMap />
      <PrayerCTA />
    </>
  );
}
