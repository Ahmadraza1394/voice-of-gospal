import GlobalMissionHero from "@/components/global-mission/GlobalMissionHero";
import CountryMission from "@/components/global-mission/CountryMission";
import GlobalMissionMap from "@/components/global-mission/GlobalMissionMap";
import PrayerCTA from "@/components/global-mission/PrayerCTA";

export const metadata = {
  title: "Nigeria Mission",
  description: "Reaching Nigeria with the Gospel and humanitarian aid.",
};

export default function NigeriaPage() {
  return (
    <>
      <GlobalMissionHero
        title="Nigeria Mission"
        subtitle="Reaching Nigeria"
        breadcrumb="Global Mission / Nigeria"
        backgroundImage="/images/VOICE-OF-THE-GOSPEL-TABERNACLE-BANNER-13.png"
      />
      <CountryMission
        country="Nigeria"
        title="Reaching Nigeria"
        description="In Nigeria, we are committed to evangelism, pastoral training, and providing educational resources. Our mission teams work alongside local leaders to establish strong, Bible-centered churches and support community transformation."
        image="/images/VOICE-OF-THE-GOSPEL-TABERNACLE-BANNER-13.png"
        stats={[
          { value: "20+", label: "Pastors Trained" },
          { value: "8+", label: "Churches Established" },
        ]}
        caption="Building the Kingdom through leadership development and evangelism."
      />
      <GlobalMissionMap />
      <PrayerCTA />
    </>
  );
}
