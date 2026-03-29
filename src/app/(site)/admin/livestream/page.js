"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function LivestreamManagementPage() {
  const router = useRouter();
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [formData, setFormData] = useState({
    youtubeUrl: "",
    streamTitle: "Live Stream — Join Us Every Sunday 9:00 AM",
    serviceTimes: [
      { day: "SUNDAY", time: "9:00 AM" },
      { day: "MIDWEEK", time: "6:00 PM" },
    ],
  });

  useEffect(() => {
    const token = localStorage.getItem("adminToken");
    if (!token) {
      router.push("/admin/login");
      return;
    }
    fetchLivestream();
  }, [router]);

  const fetchLivestream = async () => {
    try {
      const res = await fetch("/api/livestream");
      const data = await res.json();

      if (data.success) {
        setFormData({
          youtubeUrl: data.data.youtubeUrl || "",
          streamTitle: data.data.streamTitle || "Live Stream — Join Us Every Sunday 9:00 AM",
          serviceTimes: data.data.serviceTimes || [
            { day: "SUNDAY", time: "9:00 AM" },
            { day: "MIDWEEK", time: "6:00 PM" },
          ],
        });
      }
    } catch (error) {
      console.error("Error fetching livestream:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleServiceTimeChange = (index, field, value) => {
    const newServiceTimes = [...formData.serviceTimes];
    newServiceTimes[index][field] = value;
    setFormData((prev) => ({
      ...prev,
      serviceTimes: newServiceTimes,
    }));
  };

  const addServiceTime = () => {
    setFormData((prev) => ({
      ...prev,
      serviceTimes: [...prev.serviceTimes, { day: "", time: "" }],
    }));
  };

  const removeServiceTime = (index) => {
    setFormData((prev) => ({
      ...prev,
      serviceTimes: prev.serviceTimes.filter((_, i) => i !== index),
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSaving(true);

    try {
      const res = await fetch("/api/livestream", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (data.success) {
        alert("Livestream settings updated successfully!");
      } else {
        alert("Failed to update: " + data.message);
      }
    } catch (error) {
      console.error("Error updating livestream:", error);
      alert("Error updating livestream settings");
    } finally {
      setSaving(false);
    }
  };

  const extractYouTubeId = (url) => {
    if (!url) return null;
    const regExp = /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?v=))([^#\&\?]*).*/;
    const match = url.match(regExp);
    return match && match[7].length === 11 ? match[7] : null;
  };

  const videoId = extractYouTubeId(formData.youtubeUrl);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-brand-primary mx-auto"></div>
          <p className="mt-4 text-gray-600">Loading...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <Link
            href="/admin/dashboard"
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
            Back to Dashboard
          </Link>
          <h1 className="text-3xl font-bold text-gray-900">
            Livestream Settings
          </h1>
          <p className="mt-2 text-gray-600">
            Manage YouTube livestream link and service times
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* YouTube URL */}
          <div className="bg-white shadow rounded-lg p-6">
            <label
              htmlFor="youtubeUrl"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              YouTube Live Stream URL *
            </label>
            <input
              type="url"
              id="youtubeUrl"
              name="youtubeUrl"
              required
              value={formData.youtubeUrl}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-sm focus:outline-none focus:border-brand-primary"
              placeholder="https://www.youtube.com/watch?v=VIDEO_ID or https://youtu.be/VIDEO_ID"
            />
            <p className="text-xs text-gray-500 mt-2">
              Paste your YouTube video URL or live stream link
            </p>

            {/* Preview */}
            {videoId && (
              <div className="mt-4">
                <p className="text-sm font-medium text-gray-700 mb-2">Preview:</p>
                <div className="relative aspect-video w-full rounded overflow-hidden">
                  <iframe
                    src={`https://www.youtube.com/embed/${videoId}`}
                    className="absolute inset-0 w-full h-full"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
              </div>
            )}
          </div>

          {/* Stream Title */}
          <div className="bg-white shadow rounded-lg p-6">
            <label
              htmlFor="streamTitle"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Stream Title/Description *
            </label>
            <input
              type="text"
              id="streamTitle"
              name="streamTitle"
              required
              value={formData.streamTitle}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-sm focus:outline-none focus:border-brand-primary"
              placeholder="e.g., Live Stream — Join Us Every Sunday 9:00 AM"
            />
            <p className="text-xs text-gray-500 mt-2">
              This text appears below the video player
            </p>
          </div>

          {/* Service Times */}
          <div className="bg-white shadow rounded-lg p-6">
            <div className="flex items-center justify-between mb-4">
              <label className="block text-sm font-medium text-gray-700">
                Service Times
              </label>
              <button
                type="button"
                onClick={addServiceTime}
                className="text-sm text-brand-primary hover:text-brand-primary/80 font-semibold"
              >
                + Add Time
              </button>
            </div>

            <div className="space-y-4">
              {formData.serviceTimes.map((serviceTime, index) => (
                <div
                  key={index}
                  className="flex gap-4 items-start p-4 border border-gray-200 rounded-sm"
                >
                  <div className="flex-1">
                    <label className="block text-xs font-medium text-gray-600 mb-1">
                      Day/Label
                    </label>
                    <input
                      type="text"
                      value={serviceTime.day}
                      onChange={(e) =>
                        handleServiceTimeChange(index, "day", e.target.value)
                      }
                      className="w-full px-3 py-2 border border-gray-300 rounded-sm focus:outline-none focus:border-brand-primary text-sm"
                      placeholder="e.g., SUNDAY"
                      required
                    />
                  </div>
                  <div className="flex-1">
                    <label className="block text-xs font-medium text-gray-600 mb-1">
                      Time
                    </label>
                    <input
                      type="text"
                      value={serviceTime.time}
                      onChange={(e) =>
                        handleServiceTimeChange(index, "time", e.target.value)
                      }
                      className="w-full px-3 py-2 border border-gray-300 rounded-sm focus:outline-none focus:border-brand-primary text-sm"
                      placeholder="e.g., 9:00 AM"
                      required
                    />
                  </div>
                  {formData.serviceTimes.length > 1 && (
                    <button
                      type="button"
                      onClick={() => removeServiceTime(index)}
                      className="mt-6 text-red-600 hover:text-red-700"
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
                          d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                        />
                      </svg>
                    </button>
                  )}
                </div>
              ))}
            </div>
            <p className="text-xs text-gray-500 mt-2">
              These times appear as buttons below the video player
            </p>
          </div>

          {/* Actions */}
          <div className="flex items-center justify-end gap-4">
            <Link
              href="/admin/dashboard"
              className="px-6 py-2 border border-gray-300 text-gray-700 rounded-sm hover:bg-gray-50"
            >
              Cancel
            </Link>
            <button
              type="submit"
              disabled={saving}
              className="px-6 py-2 bg-brand-primary text-white rounded-sm hover:bg-brand-primary/90 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {saving ? "Saving..." : "Save Settings"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
