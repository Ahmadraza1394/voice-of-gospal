import ContactHero from "@/components/contact/ContactHero";
import ContactInfo from "@/components/contact/ContactInfo";
import MapFooter from "@/components/contact/MapFooter";
import ContactQuote from "@/components/contact/ContactQuote";

export const metadata = {
  title: "Contact",
  description: "Get in touch with Voice of the Gospel Tabernacle.",
};

export default function ContactPage() {
  return (
    <>
      <ContactHero />
      <ContactInfo />
      <MapFooter />
      <ContactQuote />
    </>
  );
}
