import Image from "next/image";

const sermons = [
  {
    image: "/images/VOICE-OF-THE-GOSPEL-TABERNACLE-BANNER-13.png",
    alt: "Pastor preaching",
  },
  {
    image: "/images/VOICE-OF-THE-GOSPEL-TABERNACLE-BANNER-8.png",
    alt: "Open Bible",
  },
  {
    image: "/images/aboutHero.png",
    alt: "Cross at sunset",
  },
];

export default function RecentSermons() {
  return (
    <section className="py-16 md:py-20 lg:py-24 bg-background-light">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Heading with underline */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="font-playfair text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-2">
            Recent Sermons
          </h2>
          <div className="flex justify-center">
            <div className="w-16 h-1 bg-brand-primary"></div>
          </div>
        </div>

        {/* Sermon Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {sermons.map((sermon, index) => (
            <div
              key={index}
              className="group cursor-pointer overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-all"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={sermon.image}
                  alt={sermon.alt}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
