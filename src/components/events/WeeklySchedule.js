const schedules = [
  {
    icon: (
      <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2L4 5v6.09c0 5.05 3.41 9.76 8 10.91 4.59-1.15 8-5.86 8-10.91V5l-8-3zm-1 16.93c-3.95-.49-7-3.85-7-7.84V6.3l6-2.25v14.88zm2-14.88l6 2.25v3.79c0 3.99-3.05 7.35-7 7.84V4.05z" />
      </svg>
    ),
    title: "Sunday Service",
    time: "9:00 AM",
    description: "Join us for our main worship gathering and teaching.",
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
        <path d="M18 2H6c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zM6 4h5v8l-2.5-1.5L6 12V4z" />
      </svg>
    ),
    title: "Midweek Service",
    time: "6:00 PM",
    description: "Every Wednesday night Bible study and fellowship.",
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 22c1.1 0 2-.9 2-2h-4c0 1.1.9 2 2 2zm6-6v-5c0-3.07-1.63-5.64-4.5-6.32V4c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v.68C7.64 5.36 6 7.92 6 11v5l-2 2v1h16v-1l-2-2zm-2 1H8v-6c0-2.48 1.51-4.5 4-4.5s4 2.02 4 4.5v6z" />
      </svg>
    ),
    title: "Prayer Meeting",
    time: "6:00 PM",
    description: "Friday evening intercessory prayer and worship.",
  },
];

export default function WeeklySchedule() {
  return (
    <section className="py-16 md:py-20 lg:py-24 bg-background-light">
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* Heading with underline */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="font-playfair text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-2">
            Weekly Schedule
          </h2>
          <div className="flex justify-center">
            <div className="w-16 h-1 bg-brand-primary"></div>
          </div>
        </div>

        {/* Schedule Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {schedules.map((schedule, index) => (
            <div
              key={index}
              className="bg-white p-8 text-center border-t-4 border-brand-primary rounded-sm shadow-sm hover:shadow-md transition-shadow"
            >
              {/* Icon */}
              <div className="flex justify-center mb-4">
                <div className="text-brand-primary">{schedule.icon}</div>
              </div>

              {/* Title */}
              <h3 className="font-playfair text-xl md:text-2xl font-bold text-brand-primary mb-2">
                {schedule.title}
              </h3>

              {/* Time */}
              <p className="text-2xl font-bold text-gray-900 mb-3">
                {schedule.time}
              </p>

              {/* Description */}
              <p className="text-gray-600 text-sm leading-relaxed">
                {schedule.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
