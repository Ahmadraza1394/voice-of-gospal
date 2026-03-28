export default function MapFooter() {
  return (
    <section className="py-12 md:py-16 bg-white ">
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          {/* Icon */}
          <div className="flex justify-center mb-4">
            <div className="text-brand-primary">
              <svg
                className="w-12 h-12"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
              </svg>
            </div>
          </div>

          {/* Text */}
          <h3 className="font-playfair text-xl md:text-2xl font-bold text-gray-900 mb-2">
            Map to Our Location
          </h3>
          <p className="text-gray-600 text-sm">
            Voice of the Gospel Tabernacle — 47-49 Edgewater Drive, Mattapan, MA
          </p>
        </div>
      </div>
    </section>
  );
}
