import GlobalMissionHero from "@/components/global-mission/GlobalMissionHero";
import CountryMission from "@/components/global-mission/CountryMission";
import GlobalMissionMap from "@/components/global-mission/GlobalMissionMap";
import PrayerCTA from "@/components/global-mission/PrayerCTA";

export const metadata = {
  title: "Dominican Republic Mission",
  description:
    "Reaching Dominican Republic with the Gospel and humanitarian aid.",
};

export default function DominicanRepublicPage() {
  return (
    <>
      <GlobalMissionHero
        title="Dominican Republic Mission"
        subtitle="Reaching Dominican Republic"
        breadcrumb="Global Mission / Dominican Republic"
        backgroundImage="/images/VOICE-OF-THE-GOSPEL-TABERNACLE-BANNER-11.png"
      />
      <CountryMission
        country="Dominican Republic"
        title="Reaching Dominican Republic"
        description="Our mission in the Dominican Republic focuses on church planting, leadership training, and community development. We partner with local churches to spread the Gospel and provide essential services to underserved communities."
        image="/images/aboutHero.png"
        stats={[
          { value: "15+", label: "Churches Planted" },
          { value: "500+", label: "Families Served" },
        ]}
        caption="Empowering communities through faith and sustainable development."
      />
      <GlobalMissionMap />
      <PrayerCTA />
    </>
  );
}
