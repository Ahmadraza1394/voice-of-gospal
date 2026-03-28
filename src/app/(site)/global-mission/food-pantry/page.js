import GlobalMissionHero from "@/components/global-mission/GlobalMissionHero";
import CountryMission from "@/components/global-mission/CountryMission";
import GlobalMissionMap from "@/components/global-mission/GlobalMissionMap";
import PrayerCTA from "@/components/global-mission/PrayerCTA";

export const metadata = {
  title: "Food Pantry Mission",
  description: "Serving our local community with food and essential resources.",
};

export default function FoodPantryPage() {
  return (
    <>
      <GlobalMissionHero
        title="Food Pantry Ministry"
        subtitle="Serving Our Community"
        breadcrumb="Global Mission / Food Pantry"
        backgroundImage="/images/aboutHero.png"
      />
      <CountryMission
        country="Local"
        title="Food Pantry Ministry"
        description="Our Food Pantry serves families in need right here in our community. Every week, we provide groceries, fresh produce, and essential supplies to those facing food insecurity. This ministry is a practical expression of God's love in action."
        image="/images/VOICE-OF-THE-GOSPEL-TABERNACLE-BANNER-11.png"
        stats={[
          { value: "500+", label: "Families Served Monthly" },
          { value: "52", label: "Weeks Open Yearly" },
        ]}
        caption="Feeding our neighbors with compassion and dignity."
      />
      <GlobalMissionMap />
      <PrayerCTA />
    </>
  );
}
