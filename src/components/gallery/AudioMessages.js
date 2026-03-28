import Link from "next/link";

const audioMessages = [
  {
    id: 1,
    title: "The Power of Unwavering Faith",
    speaker: "Bishop Nicolas Homicil",
    date: "March 17, 2024",
    duration: "45:12",
    audioUrl: "#",
  },
  {
    id: 2,
    title: "Walking in Divine Purpose",
    speaker: "Bishop Nicolas Homicil",
    date: "March 10, 2024",
    duration: "38:45",
    audioUrl: "#",
  },
  {
    id: 3,
    title: "Grace for the Journey",
    speaker: "Bishop Nicolas Homicil",
    date: "March 3, 2024",
    duration: "42:20",
    audioUrl: "#",
  },
];

export default function AudioMessages() {
  return (
    <section className="py-16 md:py-20 lg:py-24 bg-white">
      <div className="mx-auto w-full max-w-4xl px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="font-playfair text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-2">
            Audio Messages
          </h2>
          <div className="w-16 h-1 bg-brand-accent mx-auto"></div>
        </div>

        {/* Audio List */}
        <div className="space-y-4 mb-8">
          {audioMessages.map((message) => (
            <div
              key={message.id}
              className="flex items-center gap-4 p-4 border-l-4 border-brand-primary bg-gray-50 hover:bg-gray-100 transition-all"
            >
              {/* Play Button */}
              <button
                className="flex-shrink-0 w-12 h-12 bg-brand-primary hover:bg-brand-primary/90 rounded-full flex items-center justify-center transition-all group"
                aria-label={`Play ${message.title}`}
              >
                <svg
                  className="w-5 h-5 text-white ml-0.5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M8 5v14l11-7z" />
                </svg>
              </button>

              {/* Message Info */}
              <div className="flex-1 min-w-0">
                <h3 className="font-semibold text-gray-900 text-base md:text-lg mb-1 truncate">
                  {message.title}
                </h3>
                <p className="text-sm text-gray-600">
                  {message.speaker} • {message.date}
                </p>
              </div>

              {/* Duration */}
              <div className="flex-shrink-0 text-brand-accent font-semibold text-sm">
                {message.duration}
              </div>
            </div>
          ))}
        </div>

        {/* Load More Button */}
        <div className="text-center">
          <Link
            href="/watch"
            className="inline-block border-2 border-brand-primary text-brand-primary hover:bg-brand-primary hover:text-white px-8 py-3 rounded-sm font-semibold transition-all text-sm uppercase tracking-wide"
          >
            Load More Audio
          </Link>
        </div>
      </div>
    </section>
  );
}
