import Image from "next/image";
import Link from "next/link";

const locations = [
  { name: "Haiti", position: { top: "45%", left: "28%" } },
  { name: "Dominican Republic", position: { top: "47%", left: "30%" } },
  { name: "Nigeria", position: { top: "55%", left: "52%" } },
  { name: "Ivory Coast", position: { top: "58%", left: "48%" } },
  { name: "Uganda", position: { top: "60%", left: "58%" } },
];

export default function GlobalMissionMap() {
  return (
    <section className="py-16 md:py-20 lg:py-24 bg-gray-50">
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <h2 className="font-playfair text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 text-center mb-12">
          Touching Lives Across Continents
        </h2>

        {/* Map Container */}
        <div className="relative w-full max-w-4xl mx-auto mb-8">
          {/* Map Image */}
          <div className="relative w-full aspect-[16/9] bg-[#4A5568] rounded-lg overflow-hidden shadow-xl">
            <Image
              src="/images/mapImg.png"
              alt="Global Mission Locations"
              fill
              className="object-contain"
              sizes="(max-width: 1024px) 100vw, 896px"
            />

            {/* Location Markers */}
            {locations.map((location, index) => (
              <div
                key={index}
                className="absolute transform -translate-x-1/2 -translate-y-1/2"
                style={{
                  top: location.position.top,
                  left: location.position.left,
                }}
              >
                {/* Pin Marker */}
                <div className="relative group cursor-pointer">
                  {/* <svg
                    className="w-8 h-8 md:w-10 md:h-10 text-brand-primary drop-shadow-lg hover:scale-110 transition-transform"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                  </svg> */}

                  {/* Location Label */}
                  <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-1 bg-brand-primary text-white px-3 py-1 rounded text-xs md:text-sm font-semibold whitespace-nowrap shadow-lg">
                    {location.name}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Button */}
        <div className="text-center">
          <Link
            href="/give"
            className="inline-block bg-brand-primary hover:bg-brand-primary/90 text-white px-8 py-3 rounded-full font-semibold transition-all text-sm shadow-lg hover:shadow-xl"
          >
            Support Our Mission Globally
          </Link>
        </div>
      </div>
    </section>
  );
}
