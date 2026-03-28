import Link from "next/link";

export default function GalleryCTA() {
  return (
    <section className="py-12 md:py-16 lg:py-20 bg-brand-primary">
      <div className="mx-auto w-full max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
        <blockquote className="font-playfair text-2xl md:text-3xl lg:text-4xl font-medium text-white italic mb-4">
          &ldquo;Every moment is a testimony of God&apos;s grace.&rdquo;
        </blockquote>

        <p className="text-white/90 text-sm md:text-base font-semibold tracking-wide mb-8 uppercase">
          — Voice of the Gospel Tabernacle
        </p>

        <Link
          href="/visit"
          className="inline-block border-2 border-white text-white hover:bg-white hover:text-brand-primary px-8 py-3 rounded-full font-semibold transition-all text-sm uppercase tracking-wide"
        >
          Join Our Next Service
        </Link>
      </div>
    </section>
  );
}
