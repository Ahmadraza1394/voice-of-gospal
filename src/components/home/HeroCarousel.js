"use client";

import Link from "next/link";

const heroVideoSrc = "/hero-video.mp4";

export default function HeroCarousel() {
  return (
    <div className="relative h-[200px] sm:h-[250px] md:h-[300px] lg:h-[350px] xl:h-[400px] overflow-hidden">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src={heroVideoSrc} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="absolute inset-0 bg-black/30"></div>

      {/* Watch Live Button */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20">
        <Link
          href="/watch"
          className="inline-flex items-center gap-2 bg-brand-primary hover:bg-brand-primary/90 text-white px-6 py-3 md:px-8 md:py-4 rounded-sm font-semibold transition-all text-sm md:text-base uppercase tracking-wide shadow-lg hover:shadow-xl"
        >
          <svg
            className="w-5 h-5 md:w-6 md:h-6"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M8 5v14l11-7z" />
          </svg>
          Watch Live
        </Link>
      </div>
    </div>
  );
}
