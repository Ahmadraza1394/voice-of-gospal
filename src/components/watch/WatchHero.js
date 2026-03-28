import Image from "next/image";
import Link from "next/link";

export default function WatchHero() {
  return (
    <section className="relative h-[400px] md:h-[500px] lg:h-[600px] overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/images/watchHero.png"
          alt="Watch Services"
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        {/* Overlay - Orange/Red gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/75 to-black/80"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 flex h-full items-center justify-center">
        <div className="text-center px-4 max-w-4xl">
          {/* Small Label */}
          <p className="text-brand-accent text-xs md:text-sm font-semibold tracking-[0.2em] uppercase mb-4">
            MEDIA
          </p>

          {/* Main Heading */}
          <h1 className="font-playfair text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-6">
            Watch & Listen
          </h1>

          {/* Breadcrumb */}
          <div className="flex items-center justify-center gap-2 text-white/90 text-sm md:text-base">
            <Link
              href="/"
              className="hover:text-brand-accent transition-colors"
            >
              Home
            </Link>
            <span className="text-white/60">→</span>
            <span className="text-white/90">Watch</span>
          </div>
        </div>
      </div>
    </section>
  );
}
