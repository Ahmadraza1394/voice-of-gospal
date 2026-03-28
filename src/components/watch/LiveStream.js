import Image from "next/image";

export default function LiveStream() {
  return (
    <section className="py-16 md:py-20 lg:py-24 bg-white">
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* Section Label */}
        <p className="text-brand-accent text-xs md:text-sm font-semibold tracking-[0.2em] uppercase text-center mb-3">
          Streaming Live
        </p>

        {/* Heading */}
        <h2 className="font-playfair text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 text-center mb-10 md:mb-12">
          Watch Live Services
        </h2>

        {/* Video Player Area */}
        <div className="relative aspect-video w-full mb-8 overflow-hidden rounded-lg shadow-xl">
          {/* Background Image */}
          <Image
            src="/images/VOICE-OF-THE-GOSPEL-TABERNACLE-BANNER-1.png"
            alt="Live Stream"
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 90vw, 1200px"
          />
          
          {/* Overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/50"></div>

          {/* Play Button */}
          <div className="absolute inset-0 flex items-center justify-center">
            <button
              className="w-16 h-16 md:w-20 md:h-20 bg-brand-primary hover:bg-brand-primary/90 rounded-full flex items-center justify-center transition-all shadow-lg hover:scale-110"
              aria-label="Play video"
            >
              <svg
                className="w-8 h-8 md:w-10 md:h-10 text-white ml-1"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M8 5v14l11-7z" />
              </svg>
            </button>
          </div>

          {/* Text Overlay */}
          <div className="absolute inset-0 flex items-center justify-center">
            <p className="font-playfair text-xl md:text-2xl lg:text-3xl text-white font-medium text-center px-4 mt-32 md:mt-40">
              Live Stream — Join Us Every Sunday 9:00 AM
            </p>
          </div>
        </div>

        {/* Service Times */}
        <div className="flex flex-wrap items-center justify-center gap-4">
          <button className="inline-flex items-center gap-2 bg-white border border-gray-300 hover:border-brand-primary px-6 py-3 rounded-full transition-all shadow-sm hover:shadow-md">
            <svg
              className="w-5 h-5 text-brand-primary"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M19 3h-1V1h-2v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V8h14v11zM7 10h5v5H7z" />
            </svg>
            <span className="font-semibold text-gray-900 text-sm md:text-base">
              SUNDAY 9:00 AM
            </span>
          </button>

          <button className="inline-flex items-center gap-2 bg-white border border-gray-300 hover:border-brand-primary px-6 py-3 rounded-full transition-all shadow-sm hover:shadow-md">
            <svg
              className="w-5 h-5 text-brand-primary"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67z" />
            </svg>
            <span className="font-semibold text-gray-900 text-sm md:text-base">
              MIDWEEK 6:00 PM
            </span>
          </button>
        </div>
      </div>
    </section>
  );
}
