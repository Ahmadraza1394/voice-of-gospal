import Image from "next/image";
import Link from "next/link";

export default function BishopBio() {
  return (
    <section className="py-16 md:py-20 lg:py-24 bg-background-light">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Bishop Image */}
          <div className="order-2 lg:order-1">
            <div className="relative aspect-[3/4] w-full max-w-lg mx-auto lg:mx-0 bg-white rounded-lg p-4 md:p-6 shadow-lg">
              <div className="relative w-full h-full rounded overflow-hidden">
                <Image
                  src="/images/Bishop-picture.jpeg"
                  alt="Bishop Nicolas Homicil"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 90vw, (max-width: 1024px) 45vw, 500px"
                />
              </div>
            </div>
          </div>

          {/* Bishop Bio Content */}
          <div className="order-1 lg:order-2">
            <p className="text-brand-accent text-sm font-semibold tracking-widest uppercase mb-3">
              Meet Our Leader
            </p>

            <h2 className="font-playfair text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Bishop Nicolas Homicil
            </h2>

            <p className="text-gray-700 text-base md:text-lg leading-relaxed mb-4">
              Rev. Nicolas C. Homicil was born into a strong Christian family in
              Haiti. His parents set a premium on living a Christ-like life and
              helping the poor. This foundation shaped his vision for a ministry
              that cares for both the spirit and the physical needs.
            </p>

            <p className="text-gray-700 text-base md:text-lg leading-relaxed mb-6">
              His ministry began in 1969-1970 at the Wesleyan Church in
              Cap-Haitian, Haiti, where he was baptized at age 22. Since then he
              has dedicated over five decades to spreading the Gospel and
              establishing educational initiatives in his homeland and beyond.
            </p>

            <Link
              href="/contact"
              className="inline-block border-2 border-brand-primary text-brand-primary hover:bg-brand-primary hover:text-white px-8 py-3 rounded-sm font-semibold transition-all uppercase tracking-wide text-sm"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
