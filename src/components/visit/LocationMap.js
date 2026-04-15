import Link from "next/link";

export default function LocationMap() {
  return (
    <section className="py-16 md:py-20 lg:py-24 bg-white">
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
          {/* Google Maps Embed */}
          <div className="rounded-lg overflow-hidden shadow-lg aspect-[4/3] relative">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2951.234567890123!2d-71.0897!3d42.2678!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDLCsDE2JzA0LjEiTiA3McKwMDUnMjIuOSJX!5e0!3m2!1sen!2sus!4v1234567890123!5m2!1sen!2sus"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Voice of the Gospel Tabernacle Location"
              className="absolute inset-0"
            ></iframe>
          </div>

          {/* Location Details */}
          <div>
            <p className="text-brand-accent text-xs md:text-sm font-semibold tracking-widest uppercase mb-2">
              Find Us
            </p>
            <h2 className="font-playfair text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Our Location
            </h2>

            {/* Contact Info */}
            <div className="space-y-4 mb-8">
              {/* Address */}
              <div className="flex items-start gap-3">
                <div className="flex-shrink-0 text-brand-primary mt-1">
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                  </svg>
                </div>
                <div>
                  <p className="font-semibold text-gray-900 mb-1">Address</p>
                  <p className="text-gray-600">
                    47-49 Edgewater Drive, Mattapan MA 02126
                  </p>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-start gap-3">
                <div className="flex-shrink-0 text-brand-primary mt-1">
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
                  </svg>
                </div>
                <div>
                  <p className="font-semibold text-gray-900 mb-1">Phone</p>
                  <p className="text-gray-600">+1 857-312-0663</p>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start gap-3">
                <div className="flex-shrink-0 text-brand-primary mt-1">
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
                  </svg>
                </div>
                <div>
                  <p className="font-semibold text-gray-900 mb-1">Email</p>
                  <p className="text-gray-600">church@vogtabernacle.com</p>
                </div>
              </div>

              {/* Office Hours */}
              <div className="flex items-start gap-3">
                <div className="flex-shrink-0 text-brand-primary mt-1">
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67z" />
                  </svg>
                </div>
                <div>
                  <p className="font-semibold text-gray-900 mb-1">
                    Office Hours
                  </p>
                  <p className="text-gray-600">
                    Monday-Friday: 9:00 AM - 4:00 PM
                  </p>
                </div>
              </div>
            </div>

            {/* Get Directions Button */}
            <Link
              href="https://maps.google.com/?q=47-49+Edgewater+Drive+Mattapan+MA+02126"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-brand-primary hover:bg-brand-primary/90 text-white px-6 py-3 rounded-sm font-semibold transition-all text-sm"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
              </svg>
              Get Directions
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
