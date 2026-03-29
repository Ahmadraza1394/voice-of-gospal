"use client";

import { useState } from "react";
import Image from "next/image";
import ImageModal from "./ImageModal";
import GalleryStats from "./GalleryStats";

const categories = [
  { id: "all", label: "All" },
  { id: "events", label: "Events" },
  { id: "services", label: "Services" },
  { id: "community", label: "Community" },
  { id: "outreach", label: "Outreach" },
  { id: "youth", label: "Youth" },
];

const photos = [
  {
    id: 1,
    src: "/images/VOICE-OF-THE-GOSPEL-TABERNACLE-BANNER-1.png",
    alt: "Sunday Worship Service - Congregation in Prayer",
    category: "services",
  },
  {
    id: 2,
    src: "/images/VOICE-OF-THE-GOSPEL-TABERNACLE-BANNER-8.png",
    alt: "Community Outreach Program",
    category: "outreach",
  },
  {
    id: 3,
    src: "/images/VOICE-OF-THE-GOSPEL-TABERNACLE-BANNER-11.png",
    alt: "Gospel Choir Performance",
    category: "services",
  },
  {
    id: 4,
    src: "/images/VOICE-OF-THE-GOSPEL-TABERNACLE-BANNER-13.png",
    alt: "Annual Church Conference",
    category: "events",
  },
  {
    id: 5,
    src: "/images/Bishop-picture.jpeg",
    alt: "Bishop Nicolas Homicil - Church Leadership",
    category: "services",
  },
  {
    id: 6,
    src: "/images/1-VOICE-OF-THE-GOSPEL-TABERNACLE-LOGO-.png",
    alt: "Voice of the Gospel Tabernacle Logo",
    category: "community",
  },
  {
    id: 7,
    src: "/images/VOICE-OF-THE-GOSPEL-TABERNACLE-BANNER-1.png",
    alt: "Youth Ministry Activities",
    category: "youth",
  },
  {
    id: 8,
    src: "/images/VOICE-OF-THE-GOSPEL-TABERNACLE-BANNER-8.png",
    alt: "Community Fellowship Dinner",
    category: "community",
  },
  {
    id: 9,
    src: "/images/VOICE-OF-THE-GOSPEL-TABERNACLE-BANNER-11.png",
    alt: "Easter Sunday Celebration",
    category: "events",
  },
  {
    id: 10,
    src: "/images/VOICE-OF-THE-GOSPEL-TABERNACLE-BANNER-13.png",
    alt: "Food Pantry Outreach",
    category: "outreach",
  },
  {
    id: 11,
    src: "/images/VOICE-OF-THE-GOSPEL-TABERNACLE-BANNER-1.png",
    alt: "Youth Bible Study Group",
    category: "youth",
  },
  {
    id: 12,
    src: "/images/VOICE-OF-THE-GOSPEL-TABERNACLE-BANNER-8.png",
    alt: "Christmas Service 2023",
    category: "events",
  },
];

export default function PhotoGallery() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [modalOpen, setModalOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const filteredPhotos =
    activeCategory === "all"
      ? photos
      : photos.filter((photo) => photo.category === activeCategory);

  const openModal = (index) => {
    setCurrentImageIndex(index);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  const nextImage = () => {
    setCurrentImageIndex((prev) =>
      prev === filteredPhotos.length - 1 ? 0 : prev + 1,
    );
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) =>
      prev === 0 ? filteredPhotos.length - 1 : prev - 1,
    );
  };

  return (
    <section className="py-16 md:py-20 lg:py-24 bg-white">
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <h2 className="font-playfair text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 text-center mb-8">
          Photo Gallery
        </h2>

        {/* Category Filters */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-6 py-2 rounded-sm font-semibold text-sm transition-all ${
                activeCategory === category.id
                  ? "bg-brand-primary text-white"
                  : "bg-white text-gray-700 border border-gray-300 hover:border-brand-primary hover:text-brand-primary"
              }`}
            >
              {category.label}
            </button>
          ))}
        </div>

        {/* Gallery Stats */}
        <GalleryStats photos={photos} activeCategory={activeCategory} />

        {/* Photo Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6">
          {filteredPhotos.map((photo, index) => (
            <div
              key={photo.id}
              className="relative aspect-[4/3] overflow-hidden rounded-lg shadow-lg group cursor-pointer transform transition-all duration-300 hover:shadow-2xl hover:-translate-y-1"
              onClick={() => openModal(index)}
            >
              <Image
                src={photo.src}
                alt={photo.alt}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-110"
                sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
              />
              {/* Overlay on hover */}
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-300 flex items-center justify-center">
                <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center gap-2">
                  <svg
                    className="w-12 h-12 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7"
                    />
                  </svg>
                  <p className="text-white text-sm font-medium">View Larger</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Image Modal */}
        <ImageModal
          isOpen={modalOpen}
          onClose={closeModal}
          image={filteredPhotos[currentImageIndex]}
          images={filteredPhotos}
          currentIndex={currentImageIndex}
          onNext={nextImage}
          onPrev={prevImage}
        />
      </div>
    </section>
  );
}
