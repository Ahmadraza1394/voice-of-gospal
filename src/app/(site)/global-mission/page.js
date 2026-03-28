import GlobalMissionHero from "@/components/global-mission/GlobalMissionHero";
import GlobalMissionContent from "@/components/global-mission/GlobalMissionContent";
import GlobalMissionMap from "@/components/global-mission/GlobalMissionMap";
import PrayerCTA from "@/components/global-mission/PrayerCTA";

export const metadata = {
  title: "Global Mission",
  description: "Reaching the world with the Gospel of Jesus Christ.",
};

export default function GlobalMissionPage() {
  return (
    <>
      <GlobalMissionHero />
      <GlobalMissionContent />
      <GlobalMissionMap />
      <PrayerCTA />
    </>
  );
}
