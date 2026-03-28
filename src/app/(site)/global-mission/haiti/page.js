import GlobalMissionHero from "@/components/global-mission/GlobalMissionHero";
import CountryMission from "@/components/global-mission/CountryMission";
import GlobalMissionMap from "@/components/global-mission/GlobalMissionMap";
import PrayerCTA from "@/components/global-mission/PrayerCTA";

export const metadata = {
  title: "Haiti Mission",
  description: "Reaching Haiti with the Gospel and humanitarian aid.",
};

export default function HaitiPage() {
  return (
    <>
      <GlobalMissionHero
        title="Haiti Mission"
        subtitle="Reaching Haiti"
        breadcrumb="Global Mission / Haiti"
        backgroundImage="/images/VOICE-OF-THE-GOSPEL-TABERNACLE-BANNER-8.png"
      />
      <CountryMission
        country="Haiti"
        title="Reaching Haiti"
        description="Decades of outreach through health, education, food, housing, and the gospel. We have been planting churches and building sustainable communities since 1980."
        image="/images/VOICE-OF-THE-GOSPEL-TABERNACLE-BANNER-8.png"
        stats={[
          { value: "250+", label: "Youth Served" },
          { value: "12+", label: "Churches Built" },
        ]}
        caption="Supporting earthquake victims with immediate relief and long-term housing."
      />
      <GlobalMissionMap />
      <PrayerCTA />
    </>
  );
}
