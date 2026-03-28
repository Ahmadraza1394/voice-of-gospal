const videos = [
  {
    id: 1,
    thumbnail: "/images/VOICE-OF-THE-GOSPEL-TABERNACLE-BANNER-1.png",
    title: "Sunday Morning Worship Service",
    videoUrl: "#",
  },
  {
    id: 2,
    thumbnail: "/images/VOICE-OF-THE-GOSPEL-TABERNACLE-BANNER-8.png",
    title: "Haiti Mission Trip Highlights",
    videoUrl: "#",
  },
  {
    id: 3,
    thumbnail: "/images/VOICE-OF-THE-GOSPEL-TABERNACLE-BANNER-11.png",
    title: "Annual Community Outreach Day",
    videoUrl: "#",
  },
];

export default function VideoGallery() {
  return (
    <section className="py-16 md:py-20 lg:py-24 bg-gray-50">
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <h2 className="font-playfair text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 text-center mb-12">
          Video Gallery
        </h2>

        {/* Video Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {videos.map((video) => (
            <div key={video.id} className="group">
              {/* Video Thumbnail */}
              <div className="relative aspect-video overflow-hidden rounded-lg shadow-lg mb-4 cursor-pointer">
                <div
                  className="absolute inset-0 bg-cover bg-center"
                  style={{ backgroundImage: `url(${video.thumbnail})` }}
                ></div>
                {/* Dark Overlay */}
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-all duration-300"></div>
                
                {/* Play Button */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-16 h-16 bg-brand-primary rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-xl">
                    <svg
                      className="w-8 h-8 text-white ml-1"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </div>
                </div>
              </div>

              {/* Video Title */}
              <h3 className="font-semibold text-gray-900 text-center text-base md:text-lg group-hover:text-brand-primary transition-colors">
                {video.title}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
