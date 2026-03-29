"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

export default function LiveStream() {
  const [livestream, setLivestream] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchLivestream();
  }, []);

  const fetchLivestream = async () => {
    try {
      const res = await fetch("/api/livestream");
      const data = await res.json();

      if (data.success) {
        setLivestream(data.data);
      }
    } catch (error) {
      console.error("Error fetching livestream:", error);
    } finally {
      setLoading(false);
    }
  };

  const extractYouTubeId = (url) => {
    if (!url) return null;

    // Handle /live/ URLs
    const liveMatch = url.match(/\/live\/([a-zA-Z0-9_-]{11})/);
    if (liveMatch) return liveMatch[1];

    // Handle standard YouTube URLs
    const regExp =
      /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?v=))([^#\&\?]*).*/;
    const match = url.match(regExp);
    return match && match[7].length === 11 ? match[7] : null;
  };

  const videoId = livestream?.youtubeUrl
    ? extractYouTubeId(livestream.youtubeUrl)
    : null;

  return (
    <section className="py-16 md:py-20 lg:py-24 bg-white">
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* Section Label */}
        <p className="text-brand-accent text-xs md:text-sm font-semibold tracking-[0.2em] uppercase text-center mb-3">
          Streaming Live
        </p>

        {/* Heading */}
        <h2 className="font-playfair text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 text-center mb-10 md:mb-12">
          Watch Live Services
        </h2>

        {loading ? (
          <div className="text-center py-12">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-brand-primary mx-auto"></div>
            <p className="mt-4 text-gray-600">Loading livestream...</p>
          </div>
        ) : (
          <>
            {/* Video Player Area */}
            <div className="relative aspect-video w-full mb-8 overflow-hidden rounded-lg shadow-xl">
              {videoId ? (
                // YouTube Embed
                <iframe
                  src={`https://www.youtube.com/embed/${videoId}?autoplay=0&rel=0`}
                  className="absolute inset-0 w-full h-full"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  title="Live Stream"
                ></iframe>
              ) : (
                // Fallback when no video
                <>
                  <Image
                    src="/images/VOICE-OF-THE-GOSPEL-TABERNACLE-BANNER-1.png"
                    alt="Live Stream"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 90vw, 1200px"
                  />

                  <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/50"></div>

                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center">
                      <div className="w-16 h-16 md:w-20 md:h-20 bg-brand-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                        <svg
                          className="w-8 h-8 md:w-10 md:h-10 text-white"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M8 5v14l11-7z" />
                        </svg>
                      </div>
                      <p className="text-white text-lg font-semibold">
                        No livestream available
                      </p>
                    </div>
                  </div>
                </>
              )}

              {/* Text Overlay - Only show when there's a video */}
              {videoId && livestream?.streamTitle && (
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
                  <p className="font-playfair text-lg md:text-xl lg:text-2xl text-white font-medium text-center">
                    {livestream.streamTitle}
                  </p>
                </div>
              )}
            </div>

            {/* Service Times */}
            {livestream?.serviceTimes && livestream.serviceTimes.length > 0 && (
              <div className="flex flex-wrap items-center justify-center gap-4">
                {livestream.serviceTimes.map((serviceTime, index) => (
                  <div
                    key={index}
                    className="inline-flex items-center gap-2 bg-white border border-gray-300 hover:border-brand-primary px-6 py-3 rounded-full transition-all shadow-sm hover:shadow-md"
                  >
                    <svg
                      className="w-5 h-5 text-brand-primary"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      {index === 0 ? (
                        <path d="M19 3h-1V1h-2v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V8h14v11zM7 10h5v5H7z" />
                      ) : (
                        <path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67z" />
                      )}
                    </svg>
                    <span className="font-semibold text-gray-900 text-sm md:text-base">
                      {serviceTime.day} {serviceTime.time}
                    </span>
                  </div>
                ))}
              </div>
            )}
          </>
        )}
      </div>
    </section>
  );
}
