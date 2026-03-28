import PrivacyHero from "@/components/privacy/PrivacyHero";
import PrivacyContent from "@/components/privacy/PrivacyContent";

export const metadata = {
  title: "Privacy Policy",
  description: "Privacy, Terms & Donor Policy for Voice of the Gospel Tabernacle.",
};

export default function PrivacyPage() {
  return (
    <>
      <PrivacyHero />
      <PrivacyContent />
    </>
  );
}
