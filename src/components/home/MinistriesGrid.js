import Link from "next/link";

const ministries = [
  {
    title: "Visit Us",
    description:
      "Join our vibrant worship services every Sunday and experience the presence of God.",
    icon: (
      <svg fill="currentColor" viewBox="0 0 24 24" className="w-full h-full">
        <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
      </svg>
    ),
    link: "/visit",
  },
  {
    title: "Food Pantry",
    description:
      "Free community food pantry open to all families in need, providing essential nutrition.",
    icon: (
      <svg fill="currentColor" viewBox="0 0 24 24" className="w-full h-full">
        <path d="M11 9H9V2H7v7H5V2H3v7c0 2.12 1.66 3.84 3.75 3.97V22h2.5v-9.03C11.34 12.84 13 11.12 13 9V2h-2v7zm5-3v8h2.5v8H21V2c-2.76 0-5 2.24-5 4z" />
      </svg>
    ),
    link: "/food-pantry",
  },
  {
    title: "Haiti Mission",
    description:
      "Supporting education and spiritual growth for over 250 young people in Haiti since 1980.",
    icon: (
      <svg fill="currentColor" viewBox="0 0 24 24" className="w-full h-full">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z" />
      </svg>
    ),
    link: "/give",
  },
  {
    title: "Community Service",
    description:
      "Dedicated to touching lives across Boston through outreach and social programs.",
    icon: (
      <svg fill="currentColor" viewBox="0 0 24 24" className="w-full h-full">
        <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
      </svg>
    ),
    link: "/ministries",
  },
];

export default function MinistriesGrid() {
  return (
    <section className="py-16 md:py-20 lg:py-24 bg-white">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center mb-12">
          <h2 className="font-playfair text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Our Ministries
          </h2>
          <div className="w-16 h-1 bg-brand-primary mx-auto"></div>
        </div>
        {/* Ministry Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {ministries.map((ministry, index) => (
            <div
              key={index}
              className="text-center group bg-white rounded-lg p-6 shadow-xl "
            >
              {/* Icon */}
              <div className="w-16 h-16 mx-auto mb-4 text-brand-primary">
                {ministry.icon}
              </div>

              {/* Title */}
              <h3 className="font-semibold text-xl text-gray-900 mb-3">
                {ministry.title}
              </h3>

              {/* Description */}
              <p className="text-gray-600 text-sm leading-relaxed mb-4">
                {ministry.description}
              </p>

              {/* Learn More Link */}
              <Link
                href={ministry.link}
                className="inline-block text-brand-primary font-semibold text-sm hover:text-brand-accent transition-colors uppercase tracking-wide"
              >
                Learn More
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
