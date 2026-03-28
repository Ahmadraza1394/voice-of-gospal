import Image from "next/image";
import Link from "next/link";

export default function CountryMission({ 
  country, 
  title, 
  description, 
  image, 
  stats, 
  caption 
}) {
  return (
    <section className="py-16 md:py-20 lg:py-24 bg-white">
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Image Side */}
          <div>
            <div className="relative aspect-[4/3] overflow-hidden rounded-lg shadow-xl border-8 border-white">
              <Image
                src={image}
                alt={title}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
            {caption && (
              <p className="text-brand-primary italic text-sm mt-4 text-center">
                {caption}
              </p>
            )}
          </div>

          {/* Content Side */}
          <div>
            <p className="text-brand-accent text-xs md:text-sm font-semibold tracking-widest uppercase mb-2">
              {country} Mission
            </p>
            <h2 className="font-playfair text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              {title}
            </h2>
            <p className="text-gray-600 text-base leading-relaxed mb-8">
              {description}
            </p>

            {/* Stats */}
            {stats && (
              <div className="grid grid-cols-2 gap-6 mb-8">
                {stats.map((stat, index) => (
                  <div key={index} className="border-l-4 border-brand-accent pl-4">
                    <div className="text-3xl md:text-4xl font-bold text-brand-primary mb-1">
                      {stat.value}
                    </div>
                    <div className="text-sm text-gray-600 uppercase tracking-wide">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* Action Buttons */}
            <div className="flex flex-wrap gap-4">
              <Link
                href="/give"
                className="inline-block bg-brand-primary hover:bg-brand-primary/90 text-white px-6 py-3 rounded-sm font-semibold transition-all text-sm"
              >
                Donate Now
              </Link>
              <Link
                href="/contact"
                className="inline-block border-2 border-brand-primary text-brand-primary hover:bg-brand-primary hover:text-white px-6 py-3 rounded-sm font-semibold transition-all text-sm"
              >
                Partner With Us
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
