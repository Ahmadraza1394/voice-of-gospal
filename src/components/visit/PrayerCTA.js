import Link from "next/link";

export default function PrayerCTA() {
  return (
    <section className="py-12 md:py-16 lg:py-20 bg-brand-primary">
      <div className="mx-auto w-full max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="font-playfair text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-4">
          Need Prayer or Counselling?
        </h2>

        <p className="text-white/90 text-base md:text-lg leading-relaxed mb-8">
          Our pastoral team is here for you. We would be honored to stand with you in faith for your needs.
        </p>

        <Link
          href="/contact"
          className="inline-block border-2 border-white text-white hover:bg-white hover:text-brand-primary px-8 py-3 rounded-full font-semibold transition-all text-sm"
        >
          Reach Out to Us
        </Link>
      </div>
    </section>
  );
}
