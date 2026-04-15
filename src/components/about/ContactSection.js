import Link from "next/link";

export default function ContactSection() {
  return (
    <section className="py-16 md:py-20 lg:py-24 bg-background-light">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Prayer/Counselling Section */}
          <div className="bg-white p-8 md:p-10">
            <h2 className="font-playfair text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              Need Prayer or Counselling?
            </h2>

            <p className="text-gray-700 text-base leading-relaxed mb-4">
              Life can be challenging, but you don&apos;t have to walk alone.
              Our ministry team is here to support you through prayer and
              biblical guidance. Whether you&apos;re seeking spiritual direction
              or need someone to stand in faith with you, we are ready to listen
            </p>

            <p className="text-gray-700 text-base leading-relaxed mb-6">
              and pray.
            </p>

            <Link
              href="/contact"
              className="inline-block bg-brand-primary hover:bg-brand-primary/90 text-white px-8 py-3 rounded-sm font-semibold transition-all uppercase tracking-wide text-sm"
            >
              Contact Us
            </Link>
          </div>

          {/* Weekly Service Times Section */}
          <div className="bg-gray-900 text-white p-8 md:p-10">
            <h2 className="font-playfair text-2xl md:text-3xl font-bold mb-6">
              Weekly Service Times
            </h2>

            {/* Service Times List */}
            <div className="space-y-4 mb-6">
              <div className="flex justify-between items-center border-b border-gray-700 pb-3">
                <span className="text-brand-accent font-semibold">
                  Sunday School
                </span>
                <span className="text-white">10:00 AM</span>
              </div>

              <div className="flex justify-between items-center border-b border-gray-700 pb-3">
                <span className="text-brand-accent font-semibold">
                  Sunday Worship Service
                </span>
                <span className="text-white">11:00 AM</span>
              </div>

              <div className="flex justify-between items-center border-b border-gray-700 pb-3">
                <span className="text-white font-semibold">
                  Wednesday Prayer
                </span>
                <span className="text-white">8:30 AM - 12:00 PM</span>
              </div>

              <div className="flex justify-between items-center border-b border-gray-700 pb-3">
                <span className="text-white font-semibold">
                  Thursday Online Bible Study
                </span>
                <span className="text-white">8:00 PM - 9:00 PM</span>
              </div>

              <div className="flex justify-between items-center border-b border-gray-700 pb-3">
                <span className="text-white font-semibold">
                  Friday Night Prayer
                </span>
                <span className="text-white">8:00 PM - 12:00 AM</span>
              </div>
            </div>

            {/* Phone Number */}
            <div className="flex items-center gap-2 text-white">
              <svg
                className="w-5 h-5 text-brand-accent"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
              </svg>
              <span className="font-semibold">+1 857-312-0663</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
