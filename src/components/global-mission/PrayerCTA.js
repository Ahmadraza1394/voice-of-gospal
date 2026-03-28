import Link from "next/link";

export default function PrayerCTA() {
  return (
    <section className="py-12 md:py-16 lg:py-20 bg-brand-primary">
      <div className="mx-auto w-full max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="font-playfair text-3xl md:text-4xl lg:text-5xl font-medium text-white italic mb-4">
          Do You Need Prayer?
        </h2>

        <p className="text-white/90 text-base md:text-lg mb-8 max-w-2xl mx-auto">
          We are here for you. Our global prayer team is ready to lift up your needs.
        </p>

        <Link
          href="/contact"
          className="inline-block border-2 border-white text-white hover:bg-white hover:text-brand-primary px-8 py-3 rounded-sm font-semibold transition-all text-sm uppercase tracking-wide"
        >
          Click Here to Request Prayer
        </Link>
      </div>
    </section>
  );
}
