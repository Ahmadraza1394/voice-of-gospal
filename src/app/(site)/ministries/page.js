import MinistriesHero from "@/components/ministries/MinistriesHero";
import MinistriesIntro from "@/components/ministries/MinistriesIntro";
import MinistryCards from "@/components/ministries/MinistryCards";
import MinistriesQuote from "@/components/ministries/MinistriesQuote";
import GetInvolved from "@/components/ministries/GetInvolved";

export const metadata = {
  title: "Ministries",
  description: "Explore our ministries and get involved.",
};

export default function MinistriesPage() {
  return (
    <>
      <MinistriesHero />
      <MinistriesIntro />
      <MinistryCards />
      <MinistriesQuote />
      <GetInvolved />
    </>
  );
}
