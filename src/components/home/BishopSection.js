import Image from "next/image";
import Link from "next/link";

const infoCards = [
  {
    icon: (
      <svg fill="currentColor" viewBox="0 0 24 24" className="w-full h-full">
        <path d="M12 2L4 5v6.09c0 5.05 3.41 9.76 8 10.91 4.59-1.15 8-5.86 8-10.91V5l-8-3zm6 9.09c0 4-2.55 7.7-6 8.83-3.45-1.13-6-4.82-6-8.83V6.31l6-2.12 6 2.12v4.78z" />
        <path d="M10.23 14.83L7.4 12l-1.41 1.41L10.23 17.7 17.6 10.33 16.19 8.92z" />
      </svg>
    ),
    title: "Founded 2001",
    description: "Over 20 years of faithful ministry",
  },
  {
    icon: (
      <svg fill="currentColor" viewBox="0 0 24 24" className="w-full h-full">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z" />
      </svg>
    ),
    title: "Global Reach",
    description: "Touching millions across the world",
  },
  {
    icon: (
      <svg fill="currentColor" viewBox="0 0 24 24" className="w-full h-full">
        <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
      </svg>
    ),
    title: "Community First",
    description: "Serving Boston and beyond",
  },
];

export default function BishopSection() {
  return (
    <section className="py-16 md:py-20 lg:py-24 bg-white">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Info Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-16">
          {infoCards.map((card, index) => (
            <div
              key={index}
              className="bg-background-light rounded-lg p-6 text-center shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="w-12 h-12 mx-auto mb-3 text-brand-primary">
                {card.icon}
              </div>
              <h3 className="font-semibold text-lg text-gray-900 mb-1">
                {card.title}
              </h3>
              <p className="text-sm text-gray-600">{card.description}</p>
            </div>
          ))}
        </div>

        {/* Bishop Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
          {/* Bishop Image */}
          <div className="order-2 lg:order-1">
            <div className="relative aspect-[3/4] max-w-md mx-auto lg:mx-0 bg-white rounded-2xl p-4 shadow-lg">
              <div className="relative w-full h-full rounded-xl overflow-hidden">
                <Image
                  src="/images/Bishop-picture-p7gispmn9pcj3kpqxapsbc90mj10yo7iw5a6vd3r84.jpeg"
                  alt="Bishop Nicolas Homicil"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            </div>
          </div>

          {/* Bishop Bio */}
          <div className="order-1 lg:order-2">
            <p className="text-brand-accent text-sm font-semibold tracking-widest uppercase mb-3">
              A Word From Our Bishop
            </p>

            <h2 className="font-playfair text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Bishop Nicolas Homicil
            </h2>

            <p className="text-gray-700 text-base md:text-lg leading-relaxed mb-4">
              Founded in 2001, The Voice Of the Gospel Tabernacle Church is a
              global ministry reaching out to millions globally with the message
              of hope and salvation.
            </p>

            <p className="text-gray-700 text-base md:text-lg leading-relaxed mb-4">
              Our mission is to empower believers through the Word of God,
              fostering a community that reflects the love of Christ in every
              action. We believe in
            </p>

            <p className="text-gray-700 text-base md:text-lg leading-relaxed mb-6">
              the transformative power of the Gospel to change lives and
              communities.
            </p>

            <Link
              href="/about"
              className="inline-flex items-center text-brand-primary font-semibold hover:text-brand-accent transition-colors group"
            >
              Read More About Our Vision
              <svg
                className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
