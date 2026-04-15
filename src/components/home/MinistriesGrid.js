import Link from "next/link";

const ministries = [
  {
    title: "Women's Ministry",
    description:
      "Empowering women through fellowship, Bible study, and spiritual growth in a supportive community.",
    icon: (
      <svg fill="currentColor" viewBox="0 0 24 24" className="w-full h-full">
        <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
      </svg>
    ),
    link: "/ministries",
  },
  {
    title: "Men's Ministry",
    description:
      "Building strong Christian men through brotherhood, accountability, and spiritual mentorship.",
    icon: (
      <svg fill="currentColor" viewBox="0 0 24 24" className="w-full h-full">
        <path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z" />
      </svg>
    ),
    link: "/ministries",
  },
  {
    title: "Youth Ministry",
    description:
      "Nurturing the next generation with dynamic worship, engaging activities, and biblical teaching.",
    icon: (
      <svg fill="currentColor" viewBox="0 0 24 24" className="w-full h-full">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z" />
      </svg>
    ),
    link: "/ministries",
  },
  {
    title: "Music Ministry",
    description:
      "Leading worship and praise through anointed music that glorifies God and inspires hearts.",
    icon: (
      <svg fill="currentColor" viewBox="0 0 24 24" className="w-full h-full">
        <path d="M12 3v10.55c-.59-.34-1.27-.55-2-.55-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4V7h4V3h-6z" />
      </svg>
    ),
    link: "/ministries",
  },
  {
    title: "Food Distribution",
    description:
      "Serving our community with love by providing essential food supplies to families in need.",
    icon: (
      <svg fill="currentColor" viewBox="0 0 24 24" className="w-full h-full">
        <path d="M11 9H9V2H7v7H5V2H3v7c0 2.12 1.66 3.84 3.75 3.97V22h2.5v-9.03C11.34 12.84 13 11.12 13 9V2h-2v7zm5-3v8h2.5v8H21V2c-2.76 0-5 2.24-5 4z" />
      </svg>
    ),
    link: "/global-mission/food-pantry",
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
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 lg:gap-8">
          {ministries.map((ministry, index) => (
            <div
              key={index}
              className="text-center group bg-white rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow duration-300"
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
