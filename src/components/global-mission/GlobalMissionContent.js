import Link from "next/link";

const countries = [
  { id: "haiti", label: "Haiti", path: "/global-mission/haiti" },
  { id: "dominican-republic", label: "Dominican Republic", path: "/global-mission/dominican-republic" },
  { id: "nigeria", label: "Nigeria", path: "/global-mission/nigeria" },
  { id: "ivory-coast", label: "Ivory Coast", path: "/global-mission/ivory-coast" },
  { id: "uganda", label: "Uganda", path: "/global-mission/uganda" },
  { id: "food-pantry", label: "Food Pantry", path: "/global-mission/food-pantry" },
];

export default function GlobalMissionContent() {
  return (
    <section className="py-16 md:py-20 lg:py-24 bg-white">
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* Intro Section */}
        <div className="text-center mb-12">
          <h2 className="font-playfair text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Reaching Every Nation
          </h2>
          <p className="text-gray-600 text-base md:text-lg leading-relaxed max-w-3xl mx-auto mb-8">
            At Voice of the Gospel Tabernacle, our mandate extends far beyond borders. We are dedicated to reaching continents through health, education, food security, housing initiatives, and the life-changing power of the Gospel.
          </p>
          <Link
            href="/give"
            className="inline-block bg-brand-primary hover:bg-brand-primary/90 text-white px-8 py-3 rounded-sm font-semibold transition-all text-sm uppercase tracking-wide"
          >
            Donate Now
          </Link>
        </div>

        {/* Country Buttons */}
        <div className="flex flex-wrap justify-center gap-3 mb-16">
          {countries.map((country) => (
            <Link
              key={country.id}
              href={country.path}
              className="px-6 py-2 rounded-full border-2 border-brand-primary text-brand-primary hover:bg-brand-primary hover:text-white font-semibold text-sm transition-all uppercase"
            >
              {country.label}
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
