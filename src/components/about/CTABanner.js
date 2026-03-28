import Link from "next/link";

export default function CTABanner() {
  return (
    <section className="py-12 md:py-16 lg:py-20 bg-brand-primary">
      <div className="mx-auto w-full max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
        <blockquote className="font-playfair text-2xl md:text-3xl lg:text-4xl font-medium text-white italic mb-8">
          &ldquo;Touching Lives for Over 30 Years&rdquo;
        </blockquote>

        <Link
          href="/contact"
          className="inline-block border-2 border-white text-white hover:bg-white hover:text-brand-primary px-8 py-3 rounded-sm font-semibold transition-all uppercase tracking-wide text-sm"
        >
          Reach Us Now
        </Link>
      </div>
    </section>
  );
}
