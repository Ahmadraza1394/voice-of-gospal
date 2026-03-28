export default function JourneyOfFaith() {
  return (
    <section className="py-16 md:py-20 lg:py-24 bg-white">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Left Side - Quote */}
          <div className="border-l-4 border-brand-primary pl-6 md:pl-8">
            <blockquote className="font-playfair text-2xl md:text-3xl lg:text-4xl font-medium text-gray-900 italic mb-4 leading-relaxed">
              &ldquo;Go ye into all the world, and preach the gospel to every
              creature.&rdquo;
            </blockquote>
            <p className="text-brand-accent text-sm font-semibold mb-6">
              — Mark 16:15
            </p>

            <p className="text-gray-700 text-base md:text-lg leading-relaxed italic">
              The world is our parish, and our mission is to bring the light of
              Christ to every corner of the globe.
            </p>
          </div>

          {/* Right Side - Content */}
          <div>
            <h2 className="font-playfair text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Our Journey of Faith
            </h2>

            <p className="text-gray-700 text-base md:text-lg leading-relaxed mb-4">
              Founded in 2001, Voice of the Gospel Tabernacle is a global
              ministry responding to
            </p>

            <p className="text-gray-700 text-base md:text-lg leading-relaxed mb-4">
              the Great Commission. What began as a local vision has blossomed
              into a worldwide effort to touch lives through the power of the
              Gospel and compassionate service.
            </p>
          </div>
        </div>

        {/* Statistics Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mt-12 lg:mt-16">
          {/* Est. 2001 */}
          <div className="text-center lg:text-left">
            <h3 className="font-playfair text-4xl md:text-5xl lg:text-6xl font-bold text-brand-primary mb-2">
              Est. 2001
            </h3>
            <p className="text-brand-accent text-sm font-semibold tracking-widest uppercase">
              Foundation
            </p>
            <div className="w-24 h-1 bg-brand-accent mt-3 mx-auto lg:mx-0"></div>
          </div>

          {/* 30+ Years */}
          <div className="text-center lg:text-left">
            <h3 className="font-playfair text-4xl md:text-5xl lg:text-6xl font-bold text-brand-primary mb-2">
              30+ Years
            </h3>
            <p className="text-brand-accent text-sm font-semibold tracking-widest uppercase">
              Of Ministry
            </p>
            <div className="w-24 h-1 bg-brand-accent mt-3 mx-auto lg:mx-0"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
