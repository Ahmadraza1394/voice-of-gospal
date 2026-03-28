import Image from "next/image";
import Link from "next/link";

export default function HaitiMission() {
  return (
    <section className="py-16 md:py-20 lg:py-24 bg-background-light">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Content */}
          <div className="order-2 lg:order-1">
            <p className="text-brand-accent text-sm font-semibold tracking-widest uppercase mb-3">
              Global Mission
            </p>

            <h2 className="font-playfair text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Help Us Help Haiti
            </h2>

            <p className="text-gray-700 text-base md:text-lg leading-relaxed mb-4">
              Since 1980, our ministry has been a beacon of hope for the people
              of Haiti.
            </p>

            <p className="text-gray-700 text-base md:text-lg leading-relaxed mb-6">
              We support education, spiritual growth, and essential needs for
              over 250 young people, ensuring a brighter future through the
              grace of God.
            </p>

            <Link
              href="/give"
              className="inline-block bg-brand-primary hover:bg-brand-primary/90 text-white px-8 py-3 rounded-md font-semibold transition-all hover:shadow-lg"
            >
              Donate Now
            </Link>
          </div>

          {/* Image */}
          <div className="order-1 lg:order-2">
            <div className="relative aspect-[4/3] rounded-lg overflow-hidden shadow-xl">
              <Image
                src="/images/VOICE-OF-THE-GOSPEL-TABERNACLE-BANNER-13.png"
                alt="Haiti Mission - Children and volunteers"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
