import Link from "next/link";

export default function SecureGiving() {
  return (
    <section className="py-16 md:py-20 lg:py-24 bg-background-light border-t-4 border-brand-primary">
      <div className="mx-auto w-full max-w-3xl px-4 sm:px-6 lg:px-8 text-center">
        {/* Lock Icon */}
        <div className="flex justify-center mb-4">
          <div className="text-brand-primary">
            <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
              <path d="M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zm-6 9c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm3.1-9H8.9V6c0-1.71 1.39-3.1 3.1-3.1 1.71 0 3.1 1.39 3.1 3.1v2z" />
            </svg>
          </div>
        </div>

        {/* Heading */}
        <h2 className="font-playfair text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
          Secure Online Giving
        </h2>

        {/* Description */}
        <p className="text-gray-600 text-base md:text-lg leading-relaxed mb-8">
          All transactions are secure and encrypted. Your generosity goes directly toward ministry and
          community impact. We appreciate your faithful support of the kingdom.
        </p>

        {/* CTA Button */}
        <Link
          href="/give/online"
          className="inline-block bg-brand-primary hover:bg-brand-primary/90 text-white px-8 py-3 rounded-sm font-semibold transition-all uppercase tracking-wide text-sm"
        >
          Give Offering / Donation Online
        </Link>
      </div>
    </section>
  );
}
