import Link from "next/link";

const messages = [
  {
    title: "Finding Peace in the Storm",
    date: "Oct 24, 2024",
    duration: "42:15",
    featured: true,
  },
  {
    title: "The Heart of Worship",
    date: "Oct 17, 2024",
    duration: "38:50",
    featured: false,
  },
  {
    title: "Living by the Spirit",
    date: "Oct 10, 2024",
    duration: "45:20",
    featured: false,
  },
  {
    title: "The Covenant of Blessing",
    date: "Oct 03, 2024",
    duration: "41:05",
    featured: false,
  },
];

export default function AudioArchive() {
  return (
    <section className="py-16 md:py-20 lg:py-24 bg-white">
      <div className="mx-auto w-full max-w-5xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-10 md:mb-12">
          <div>
            <p className="text-brand-accent text-xs md:text-sm font-semibold tracking-[0.2em] uppercase mb-2">
              Audio Archive
            </p>
            <h2 className="font-playfair text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900">
              Listen to Messages
            </h2>
          </div>

          <Link
            href="/watch/audio"
            className="inline-block bg-gray-900 hover:bg-gray-800 text-white px-6 py-3 rounded-sm font-semibold transition-all text-sm mt-4 sm:mt-0"
          >
            View All Audio
          </Link>
        </div>

        {/* Messages List */}
        <div className="space-y-4">
          {messages.map((message, index) => (
            <div
              key={index}
              className={`flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 p-6 rounded-lg transition-all ${
                message.featured
                  ? "bg-background-light border-l-4 border-brand-primary"
                  : "bg-gray-50 hover:bg-background-light"
              }`}
            >
              {/* Left Side - Icon and Details */}
              <div className="flex items-center gap-4">
                {/* Microphone Icon */}
                <div
                  className={`flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center ${
                    message.featured
                      ? "bg-brand-primary"
                      : "bg-gray-300"
                  }`}
                >
                  <svg
                    className="w-6 h-6 text-white"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 14c1.66 0 3-1.34 3-3V5c0-1.66-1.34-3-3-3S9 3.34 9 5v6c0 1.66 1.34 3 3 3z" />
                    <path d="M17 11c0 2.76-2.24 5-5 5s-5-2.24-5-5H5c0 3.53 2.61 6.43 6 6.92V21h2v-3.08c3.39-.49 6-3.39 6-6.92h-2z" />
                  </svg>
                </div>

                {/* Message Details */}
                <div>
                  <h3 className="font-playfair text-lg md:text-xl font-bold text-gray-900 mb-1">
                    {message.title}
                  </h3>
                  <div className="flex items-center gap-3 text-sm text-gray-600">
                    <span className="flex items-center gap-1">
                      <svg
                        className="w-4 h-4"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M19 3h-1V1h-2v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V8h14v11z" />
                      </svg>
                      {message.date}
                    </span>
                    <span className="flex items-center gap-1">
                      <svg
                        className="w-4 h-4"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67z" />
                      </svg>
                      {message.duration}
                    </span>
                  </div>
                </div>
              </div>

              {/* Right Side - Play Button */}
              <button
                className={`flex-shrink-0 inline-flex items-center gap-2 px-6 py-2.5 rounded-full font-semibold transition-all text-sm ${
                  message.featured
                    ? "bg-brand-primary hover:bg-brand-primary/90 text-white"
                    : "border-2 border-brand-primary text-brand-primary hover:bg-brand-primary hover:text-white"
                }`}
              >
                <svg
                  className="w-4 h-4"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M8 5v14l11-7z" />
                </svg>
                Play Message
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
