const services = [
  {
    icon: (
      <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 24 24">
        <path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67z" />
      </svg>
    ),
    title: "Sunday Service",
    time: "9:20 AM",
    description: "Main service featuring worship and powerful ministry of the Word.",
    borderColor: "border-brand-primary",
  },
  {
    icon: (
      <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 24 24">
        <path d="M18 2H6c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zM6 4h5v8l-2.5-1.5L6 12V4z" />
      </svg>
    ),
    title: "Midweek Service",
    time: "Wednesday 6:00 PM",
    description: "Deep dive into the scriptures and spiritual growth studies for all ages.",
    borderColor: "border-brand-accent",
  },
  {
    icon: (
      <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 22c1.1 0 2-.9 2-2h-4c0 1.1.9 2 2 2zm6-6v-5c0-3.07-1.63-5.64-4.5-6.32V4c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v.68C7.64 5.36 6 7.92 6 11v5l-2 2v1h16v-1l-2-2zm-2 1H8v-6c0-2.48 1.51-4.5 4-4.5s4 2.02 4 4.5v6z" />
      </svg>
    ),
    title: "Prayer Meeting",
    time: "Friday 6:00 PM",
    description: "A dedicated time of corporate prayer seeking the face of the Lord.",
    borderColor: "border-gray-900",
  },
];

export default function ServiceTimes() {
  return (
    <section className="py-16 md:py-20 lg:py-24 bg-background-light">
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <h2 className="font-playfair text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 text-center mb-12 md:mb-16">
          Join Us for Services
        </h2>

        {/* Service Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className={`bg-white p-8 text-center border-t-4 ${service.borderColor} rounded-sm shadow-sm hover:shadow-md transition-shadow`}
            >
              {/* Icon */}
              <div className="flex justify-center mb-4">
                <div className="text-gray-900">{service.icon}</div>
              </div>

              {/* Title */}
              <h3 className="font-playfair text-xl md:text-2xl font-bold text-gray-900 mb-2">
                {service.title}
              </h3>

              {/* Time */}
              <p className="text-brand-primary text-lg font-bold mb-3">
                {service.time}
              </p>

              {/* Description */}
              <p className="text-gray-600 text-sm leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
