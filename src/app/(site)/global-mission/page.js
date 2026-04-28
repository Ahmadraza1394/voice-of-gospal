import GlobalMissionHero from "@/components/global-mission/GlobalMissionHero";
import Link from "next/link";

export const metadata = {
  title: "Global Mission",
  description: "Reaching the world with the Gospel of Jesus Christ.",
};

export default function GlobalMissionPage() {
  return (
    <>
      <GlobalMissionHero />

      {/* Simple Description + VTMSC Button Section */}
      <section className="py-16 md:py-20 lg:py-24 bg-white">
        <div className="mx-auto w-full max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-playfair text-3xl md:text-4xl lg:text-5xl font-bold text-brand-primary mb-6">
            Our Global Mission
          </h2>

          <p className="text-gray-600 text-base md:text-lg leading-relaxed mb-8">
            Voice of the Gospel Tabernacle is committed to fulfilling the Great
            Commission by reaching nations across the globe with the
            transformative power of the Gospel. Through strategic partnerships,
            humanitarian aid, and evangelistic outreach, we serve communities in
            Haiti, Dominican Republic, Nigeria, Ivory Coast, and Uganda.
          </p>

          <p className="text-gray-600 text-base md:text-lg leading-relaxed mb-10">
            Our mission encompasses health initiatives, educational programs,
            food security, housing projects, and spiritual development, bringing
            hope and lasting change to those who need it most.
          </p>

          <Link
            href="https://vtmsc.org"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-brand-primary hover:bg-brand-primary/90 text-white px-8 py-4 rounded-sm font-semibold transition-all text-base uppercase tracking-wide shadow-lg hover:shadow-xl"
          >
            Find Out More
          </Link>
        </div>
      </section>
    </>
  );
}
