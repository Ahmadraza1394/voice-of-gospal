"use client";

import { useState } from "react";
import Link from "next/link";

const categories = ["All", "Services", "Missions", "Community", "Special Events"];

const events = [
  {
    id: 1,
    category: "Services",
    month: "MAR",
    day: "24",
    title: "Sunday Celebration Service",
    description:
      "Join us for a powerful morning of worship, prayer, and a transformational word from the Lord.",
    location: "At Bridgepoint Dr, Mattapan MA",
  },
  {
    id: 2,
    category: "Services",
    month: "MAR",
    day: "27",
    title: "Wednesday Prayer Night",
    description:
      "A dedicated time for corporate prayer and spiritual rebuilding in the midst of the week.",
    location: "At Bridgepoint Dr, Mattapan MA",
  },
  {
    id: 3,
    category: "Missions",
    month: "APR",
    day: "05",
    title: "Haiti Mission Fundraiser",
    description:
      "Supporting our brothers and sisters in Haiti through prayer and financial contributions for education.",
    location: "At Bridgepoint Dr, Mattapan MA",
  },
  {
    id: 4,
    category: "Community",
    month: "APR",
    day: "12",
    title: "Community Outreach Day",
    description:
      "Serving our local Boston community with food pantry services and fellowship.",
    location: "At Bridgepoint Dr, Mattapan MA",
  },
];

export default function UpcomingEvents() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredEvents =
    activeCategory === "All"
      ? events
      : events.filter((event) => event.category === activeCategory);

  return (
    <section className="py-16 md:py-20 lg:py-24 bg-white">
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* Category Filter */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-12 md:mb-16">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-2 rounded-full text-sm font-semibold transition-all ${
                activeCategory === category
                  ? "bg-brand-primary text-white"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Heading */}
        <h2 className="font-playfair text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 text-center mb-12 md:mb-16">
          Upcoming Events
        </h2>

        {/* Events List */}
        <div className="space-y-6">
          {filteredEvents.map((event) => (
            <div
              key={event.id}
              className="flex flex-col sm:flex-row gap-6 p-6 bg-background-light rounded-lg hover:shadow-md transition-shadow"
            >
              {/* Date Badge */}
              <div className="flex-shrink-0">
                <div className="bg-brand-primary text-white w-20 h-20 rounded-lg flex flex-col items-center justify-center">
                  <span className="text-xs font-semibold uppercase tracking-wide">
                    {event.month}
                  </span>
                  <span className="text-3xl font-bold leading-none mt-1">
                    {event.day}
                  </span>
                </div>
              </div>

              {/* Event Details */}
              <div className="flex-grow">
                <p className="text-brand-accent text-xs font-semibold tracking-widest uppercase mb-2">
                  {event.category}
                </p>
                <h3 className="font-playfair text-xl md:text-2xl font-bold text-gray-900 mb-2">
                  {event.title}
                </h3>
                <p className="text-gray-600 text-base leading-relaxed mb-3">
                  {event.description}
                </p>
                <div className="flex items-center gap-2 text-sm text-gray-500">
                  <svg
                    className="w-4 h-4"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                  </svg>
                  <span>{event.location}</span>
                </div>
              </div>

              {/* View Details Button */}
              <div className="flex-shrink-0 flex items-center">
                <Link
                  href={`/events/${event.id}`}
                  className="inline-block border-2 border-brand-primary text-brand-primary hover:bg-brand-primary hover:text-white px-6 py-2 rounded-sm font-semibold transition-all text-sm"
                >
                  View Details
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
