import Link from "next/link";

const givingOptions = [
  {
    icon: (
      <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 24 24">
        <path d="M21 18v1c0 1.1-.9 2-2 2H5c-1.11 0-2-.9-2-2V5c0-1.1.89-2 2-2h14c1.1 0 2 .9 2 2v1h-9c-1.11 0-2 .9-2 2v8c0 1.1.89 2 2 2h9zm-9-2h10V8H12v8zm4-2.5c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5z" />
      </svg>
    ),
    title: "Tithe & Offering",
    description:
      "Faithful stewardship of the first fruits that God has blessed us with to support the local church.",
    buttonText: "Give Now",
    buttonLink: "/give/tithe",
  },
  {
    icon: (
      <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 24 24">
        <path d="M7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2zM1 2v2h2l3.6 7.59-1.35 2.45c-.16.28-.25.61-.25.96 0 1.1.9 2 2 2h12v-2H7.42c-.14 0-.25-.11-.25-.25l.03-.12.9-1.63h7.45c.75 0 1.41-.41 1.75-1.03l3.58-6.49c.08-.14.12-.31.12-.48 0-.55-.45-1-1-1H5.21l-.94-2H1zm16 16c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 2-.9 2-2-.9-2-2-2z" />
      </svg>
    ),
    title: "Donate to Food Pantry",
    description:
      "Directly fund our community food pantry that provides essential nutrition to local families in need.",
    buttonText: "Donate",
    buttonLink: "/give/food-pantry",
  },
  {
    icon: (
      <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
      </svg>
    ),
    title: "Support Haiti Mission",
    description:
      "Since 1984, your gift funds education, spiritual care, and daily needs for children in Haiti.",
    buttonText: "Donate Now",
    buttonLink: "/give/haiti",
  },
  {
    icon: (
      <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
      </svg>
    ),
    title: "General Donation",
    description:
      "Support the overall operations and various outreach ministries of Voice of the Gospel Tabernacle.",
    buttonText: "Give",
    buttonLink: "/give/general",
  },
];

export default function GivingOptions() {
  return (
    <section className="py-16 md:py-20 lg:py-24 bg-white">
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center mb-4">
          <h2 className="font-playfair text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Your Generosity Changes Lives
          </h2>
          <p className="text-gray-600 text-base md:text-lg max-w-3xl mx-auto leading-relaxed">
            Consider making a donation or giving your offering. Every gift supports our global
            mission, community food pantry, Haiti mission, and local outreach. Together, we are the
            hands and feet of Christ.
          </p>
        </div>

        {/* Giving Options Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 mt-12">
          {givingOptions.map((option, index) => (
            <div
              key={index}
              className="bg-background-light p-8 text-center rounded-sm hover:shadow-lg transition-shadow"
            >
              {/* Icon */}
              <div className="flex justify-center mb-4">
                <div className="text-brand-accent">{option.icon}</div>
              </div>

              {/* Title */}
              <h3 className="font-playfair text-xl md:text-2xl font-bold text-gray-900 mb-3">
                {option.title}
              </h3>

              {/* Description */}
              <p className="text-gray-600 text-sm md:text-base leading-relaxed mb-6">
                {option.description}
              </p>

              {/* Button */}
              <Link
                href={option.buttonLink}
                className="inline-block bg-brand-primary hover:bg-brand-primary/90 text-white px-8 py-3 rounded-sm font-semibold transition-all uppercase tracking-wide text-sm"
              >
                {option.buttonText}
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
