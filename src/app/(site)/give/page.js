import GiveHero from "@/components/give/GiveHero";
import DonationForm from "@/components/give/DonationForm";
import GiveQuote from "@/components/give/GiveQuote";

export const metadata = {
  title: "Give",
  description: "Support our mission through giving.",
};

export default function GivePage() {
  return (
    <>
      <GiveHero />
      <DonationForm />
      <GiveQuote />
    </>
  );
}
