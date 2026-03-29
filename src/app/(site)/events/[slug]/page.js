"use client";

import { useState, useEffect } from "react";
import { useParams, useRouter } from "next/navigation";
import Image from "next/image";
import Link from "next/link";

export default function EventDetailPage() {
  const params = useParams();
  const router = useRouter();
  const [event, setEvent] = useState(null);
  const [relatedEvents, setRelatedEvents] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (params.slug) {
      fetchEvent();
    }
  }, [params.slug]);

  const fetchEvent = async () => {
    try {
      const res = await fetch(`/api/events/slug/${params.slug}`);
      const data = await res.json();

      if (data.success) {
        setEvent(data.data);
        fetchRelatedEvents(data.data.category, data.data._id);
      } else {
        router.push("/events");
      }
    } catch (error) {
      console.error("Error fetching event:", error);
      router.push("/events");
    } finally {
      setLoading(false);
    }
  };

  const fetchRelatedEvents = async (category, currentId) => {
    try {
      const res = await fetch("/api/events?published=true");
      const data = await res.json();

      if (data.success) {
        const related = data.data
          .filter((e) => e.category === category && e._id !== currentId)
          .slice(0, 3);
        setRelatedEvents(related);
      }
    } catch (error) {
      console.error("Error fetching related events:", error);
    }
  };

  const handleShare = (platform) => {
    const url = window.location.href;
    const title = event?.title || "";

    const shareUrls = {
      facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`,
      twitter: `https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}&text=${encodeURIComponent(title)}`,
      whatsapp: `https://wa.me/?text=${encodeURIComponent(title + " " + url)}`,
    };

    window.open(shareUrls[platform], "_blank", "width=600,height=400");
  };

  const addToCalendar = () => {
    if (!event) return;

    const eventDate = new Date(event.date);
    const title = encodeURIComponent(event.title);
    const description = encodeURIComponent(event.description);
    const location = encodeURIComponent(event.location);
    
    // Format date for Google Calendar (YYYYMMDDTHHMMSS)
    const startDate = eventDate.toISOString().replace(/[-:]/g, '').split('.')[0] + 'Z';
    
    const googleCalUrl = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${title}&details=${description}&location=${location}&dates=${startDate}/${startDate}`;
    
    window.open(googleCalUrl, "_blank");
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-brand-primary mx-auto"></div>
          <p className="mt-4 text-gray-600">Loading event...</p>
        </div>
      </div>
    );
  }

  if (!event) {
    return null;
  }

  const eventDate = new Date(event.date);
  const formattedDate = eventDate.toLocaleDateString("en-US", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="relative h-[400px] md:h-[500px] bg-gray-900">
        <Image
          src={event.image}
          alt={event.title}
          fill
          className="object-cover opacity-60"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
        
        <div className="absolute inset-0 flex items-end">
          <div className="max-w-4xl mx-auto w-full px-4 sm:px-6 lg:px-8 pb-12">
            {/* Breadcrumb */}
            <div className="flex items-center gap-2 text-sm text-white/80 mb-4">
              <Link href="/" className="hover:text-white">
                Home
              </Link>
              <span>/</span>
              <Link href="/events" className="hover:text-white">
                Events
              </Link>
              <span>/</span>
              <span className="text-white">{event.category}</span>
            </div>

            {/* Category Badge */}
            <span className="inline-block px-3 py-1 bg-brand-primary text-white text-xs font-semibold uppercase rounded-full mb-4">
              {event.category}
            </span>

            {/* Title */}
            <h1 className="font-playfair text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
              {event.title}
            </h1>

            {/* Meta Info */}
            <div className="flex flex-wrap items-center gap-4 text-white/90 text-sm">
              <div className="flex items-center gap-2">
                <svg
                  className="w-5 h-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                  />
                </svg>
                <span>{formattedDate}</span>
              </div>
              <div className="flex items-center gap-2">
                <svg
                  className="w-5 h-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                <span>{event.time}</span>
              </div>
              <div className="flex items-center gap-2">
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                </svg>
                <span>{event.location}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Event Details */}
          <div className="lg:col-span-2">
            {/* Description */}
            <div className="mb-8">
              <h2 className="font-playfair text-2xl font-bold text-gray-900 mb-4">
                About This Event
              </h2>
              <p className="text-gray-700 leading-relaxed text-lg">
                {event.description}
              </p>
            </div>

            {/* Event Information */}
            <div className="bg-gray-50 rounded-lg p-6 mb-8">
              <h3 className="font-playfair text-xl font-bold text-gray-900 mb-4">
                Event Information
              </h3>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <svg
                    className="w-6 h-6 text-brand-primary flex-shrink-0 mt-1"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                    />
                  </svg>
                  <div>
                    <p className="font-semibold text-gray-900">Date</p>
                    <p className="text-gray-600">{formattedDate}</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <svg
                    className="w-6 h-6 text-brand-primary flex-shrink-0 mt-1"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  <div>
                    <p className="font-semibold text-gray-900">Time</p>
                    <p className="text-gray-600">{event.time}</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <svg
                    className="w-6 h-6 text-brand-primary flex-shrink-0 mt-1"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                  </svg>
                  <div>
                    <p className="font-semibold text-gray-900">Location</p>
                    <p className="text-gray-600">{event.location}</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <svg
                    className="w-6 h-6 text-brand-primary flex-shrink-0 mt-1"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z"
                    />
                  </svg>
                  <div>
                    <p className="font-semibold text-gray-900">Category</p>
                    <p className="text-gray-600">{event.category}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap gap-4 mb-8">
              <button
                onClick={addToCalendar}
                className="flex items-center gap-2 px-6 py-3 bg-brand-primary text-white rounded-sm hover:bg-brand-primary/90 font-semibold transition-colors"
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 4v16m8-8H4"
                  />
                </svg>
                Add to Calendar
              </button>
              <Link
                href="/contact"
                className="flex items-center gap-2 px-6 py-3 border-2 border-brand-primary text-brand-primary rounded-sm hover:bg-brand-primary hover:text-white font-semibold transition-colors"
              >
                Contact Us
              </Link>
            </div>

            {/* Share */}
            <div className="pt-8 border-t border-gray-200">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                Share this event
              </h3>
              <div className="flex flex-wrap gap-3">
                <button
                  onClick={() => handleShare("facebook")}
                  className="flex items-center gap-2 px-4 py-2 bg-[#1877F2] text-white rounded-sm hover:bg-[#1877F2]/90 transition-colors"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                  </svg>
                  Facebook
                </button>
                <button
                  onClick={() => handleShare("twitter")}
                  className="flex items-center gap-2 px-4 py-2 bg-[#1DA1F2] text-white rounded-sm hover:bg-[#1DA1F2]/90 transition-colors"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                  </svg>
                  Twitter
                </button>
                <button
                  onClick={() => handleShare("whatsapp")}
                  className="flex items-center gap-2 px-4 py-2 bg-[#25D366] text-white rounded-sm hover:bg-[#25D366]/90 transition-colors"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                  </svg>
                  WhatsApp
                </button>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <aside className="lg:col-span-1">
            <div className="sticky top-24 space-y-8">
              {/* Related Events */}
              {relatedEvents.length > 0 && (
                <div>
                  <h3 className="font-playfair text-xl font-bold text-gray-900 mb-4">
                    Related Events
                  </h3>
                  <div className="space-y-4">
                    {relatedEvents.map((related) => {
                      const relatedDate = new Date(related.date);
                      return (
                        <Link
                          key={related._id}
                          href={`/events/${related.slug}`}
                          className="block group"
                        >
                          <div className="flex gap-4">
                            <div className="relative w-20 h-20 flex-shrink-0">
                              <Image
                                src={related.image}
                                alt={related.title}
                                fill
                                className="object-cover rounded"
                              />
                            </div>
                            <div className="flex-1">
                              <h4 className="font-semibold text-gray-900 group-hover:text-brand-primary transition-colors line-clamp-2 text-sm">
                                {related.title}
                              </h4>
                              <p className="text-xs text-gray-500 mt-1">
                                {relatedDate.toLocaleDateString("en-US", {
                                  month: "short",
                                  day: "numeric",
                                  year: "numeric",
                                })}
                              </p>
                            </div>
                          </div>
                        </Link>
                      );
                    })}
                  </div>
                </div>
              )}

              {/* CTA */}
              <div className="bg-brand-primary p-6 rounded-sm text-center">
                <h3 className="font-playfair text-xl font-bold text-white mb-3">
                  Join Us
                </h3>
                <p className="text-white/90 text-sm mb-4">
                  We&apos;d love to see you at this event!
                </p>
                <Link
                  href="/visit"
                  className="inline-block bg-white text-brand-primary px-6 py-2 rounded-full font-semibold hover:bg-gray-100 transition-colors text-sm"
                >
                  Plan Your Visit
                </Link>
              </div>
            </div>
          </aside>
        </div>

        {/* Back to Events */}
        <div className="mt-12 pt-8 border-t border-gray-200">
          <Link
            href="/events"
            className="inline-flex items-center gap-2 text-brand-primary font-semibold hover:gap-3 transition-all"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M10 19l-7-7m0 0l7-7m-7 7h18"
              />
            </svg>
            Back to All Events
          </Link>
        </div>
      </div>
    </div>
  );
}
