import GlobalMissionHero from "@/components/global-mission/GlobalMissionHero";
import CountryMission from "@/components/global-mission/CountryMission";
import GlobalMissionMap from "@/components/global-mission/GlobalMissionMap";
import PrayerCTA from "@/components/global-mission/PrayerCTA";

export const metadata = {
  title: "Uganda Mission",
  description: "Reaching Uganda with the Gospel and humanitarian aid.",
};

export default function UgandaPage() {
  return (
    <>
      <GlobalMissionHero
        title="Uganda Mission"
        subtitle="Reaching Uganda"
        breadcrumb="Global Mission / Uganda"
        backgroundImage="/images/VOICE-OF-THE-GOSPEL-TABERNACLE-BANNER-8.png"
      />
      <CountryMission
        country="Uganda"
        title="Reaching Uganda"
        description="In Uganda, we focus on leadership training, orphan care, and community development. Our teams equip local pastors with biblical training and provide support for vulnerable children and families throughout the region."
        image="/images/VOICE-OF-THE-GOSPEL-TABERNACLE-BANNER-8.png"
        stats={[
          { value: "100+", label: "Orphans Supported" },
          { value: "25+", label: "Leaders Trained" },
        ]}
        caption="Transforming lives through biblical training and compassionate care."
      />
      <GlobalMissionMap />
      <PrayerCTA />
    </>
  );
}
