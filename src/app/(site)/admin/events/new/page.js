"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import ImageUpload from "@/components/admin/ImageUpload";

export default function NewEventPage() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [imagePreview, setImagePreview] = useState("");
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    image: "",
    date: "",
    time: "",
    location: "",
    category: "Service",
    published: true,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));

    if (name === "image") {
      setImagePreview(value);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await fetch("/api/events", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (data.success) {
        alert("Event created successfully!");
        router.push("/admin/events");
      } else {
        alert("Failed to create event: " + data.message);
      }
    } catch (error) {
      console.error("Error creating event:", error);
      alert("Error creating event");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <Link
            href="/admin/events"
            className="text-brand-primary hover:text-brand-primary/80 mb-4 inline-flex items-center gap-2"
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
            Back to Events
          </Link>
          <h1 className="text-3xl font-bold text-gray-900">Create New Event</h1>
          <p className="mt-2 text-gray-600">
            Add a new event to your church calendar
          </p>
        </div>

        {/* Form */}
        <form
          onSubmit={handleSubmit}
          className="bg-white shadow rounded-lg p-6"
        >
          <div className="space-y-6">
            {/* Title */}
            <div>
              <label
                htmlFor="title"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Event Title *
              </label>
              <input
                type="text"
                id="title"
                name="title"
                required
                value={formData.title}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-sm focus:outline-none focus:border-brand-primary"
                placeholder="e.g., Sunday Worship Service"
              />
            </div>

            {/* Description */}
            <div>
              <label
                htmlFor="description"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Description *
              </label>
              <textarea
                id="description"
                name="description"
                required
                value={formData.description}
                onChange={handleChange}
                rows={4}
                className="w-full px-4 py-2 border border-gray-300 rounded-sm focus:outline-none focus:border-brand-primary"
                placeholder="Describe the event..."
              />
            </div>

            {/* Image URL */}
            <div>
              <label
                htmlFor="image"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Image URL *
              </label>
              <input
                type="url"
                id="image"
                name="image"
                required
                value={formData.image}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-sm focus:outline-none focus:border-brand-primary"
                placeholder="https://example.com/image.jpg"
              />
              {imagePreview && (
                <div className="mt-4 relative h-48 w-full">
                  <Image
                    src={imagePreview}
                    alt="Preview"
                    fill
                    className="object-cover rounded"
                  />
                </div>
              )}
            </div>

            {/* Date and Time */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label
                  htmlFor="date"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Date *
                </label>
                <input
                  type="date"
                  id="date"
                  name="date"
                  required
                  value={formData.date}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-sm focus:outline-none focus:border-brand-primary"
                />
              </div>

              <div>
                <label
                  htmlFor="time"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Time *
                </label>
                <input
                  type="text"
                  id="time"
                  name="time"
                  required
                  value={formData.time}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-sm focus:outline-none focus:border-brand-primary"
                  placeholder="e.g., 10:00 AM - 12:00 PM"
                />
              </div>
            </div>

            {/* Location */}
            <div>
              <label
                htmlFor="location"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Location *
              </label>
              <input
                type="text"
                id="location"
                name="location"
                required
                value={formData.location}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-sm focus:outline-none focus:border-brand-primary"
                placeholder="e.g., Main Sanctuary"
              />
            </div>

            {/* Category */}
            <div>
              <label
                htmlFor="category"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Category *
              </label>
              <select
                id="category"
                name="category"
                value={formData.category}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-sm focus:outline-none focus:border-brand-primary"
              >
                <option value="Service">Service</option>
                <option value="Prayer">Prayer</option>
                <option value="Youth">Youth</option>
                <option value="Community">Community</option>
                <option value="Mission">Mission</option>
                <option value="Special Event">Special Event</option>
                <option value="Conference">Conference</option>
                <option value="Workshop">Workshop</option>
              </select>
            </div>

            {/* Published */}
            <div className="flex items-center">
              <input
                type="checkbox"
                id="published"
                name="published"
                checked={formData.published}
                onChange={handleChange}
                className="h-4 w-4 text-brand-primary focus:ring-brand-primary border-gray-300 rounded"
              />
              <label
                htmlFor="published"
                className="ml-2 block text-sm text-gray-700"
              >
                Publish immediately
              </label>
            </div>
          </div>

          {/* Actions */}
          <div className="mt-8 flex items-center justify-end gap-4">
            <Link
              href="/admin/events"
              className="px-6 py-2 border border-gray-300 text-gray-700 rounded-sm hover:bg-gray-50"
            >
              Cancel
            </Link>
            <button
              type="submit"
              disabled={loading}
              className="px-6 py-2 bg-brand-primary text-white rounded-sm hover:bg-brand-primary/90 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {loading ? "Creating..." : "Create Event"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
