"use client";

import { useState } from "react";
import Image from "next/image";

export default function ImageUpload({ value, onChange, label = "Image" }) {
  const [uploading, setUploading] = useState(false);
  const [preview, setPreview] = useState(value || "");

  const handleFileChange = async (e) => {
    const file = e.target.files?.[0];
    if (!file) return;

    // Validate file type
    if (!file.type.startsWith("image/")) {
      alert("Please select an image file");
      return;
    }

    // Validate file size (max 5MB)
    if (file.size > 5 * 1024 * 1024) {
      alert("Image size should be less than 5MB");
      return;
    }

    setUploading(true);

    try {
      const formData = new FormData();
      formData.append("file", file);

      const res = await fetch("/api/upload", {
        method: "POST",
        body: formData,
      });

      const data = await res.json();

      if (data.success) {
        setPreview(data.url);
        onChange(data.url);
      } else {
        alert("Upload failed: " + data.message);
      }
    } catch (error) {
      console.error("Upload error:", error);
      alert("Upload failed. Please try again.");
    } finally {
      setUploading(false);
    }
  };

  const handleUrlChange = (e) => {
    const url = e.target.value;
    setPreview(url);
    onChange(url);
  };

  const handleRemove = () => {
    setPreview("");
    onChange("");
  };

  return (
    <div>
      <label className="block text-sm font-medium text-gray-700 mb-2">
        {label} *
      </label>

      {/* Upload Options */}
      <div className="space-y-4">
        {/* File Upload */}
        <div>
          <label
            htmlFor="file-upload"
            className={`relative cursor-pointer bg-white rounded-sm border-2 border-dashed border-gray-300 p-6 hover:border-brand-primary transition-colors ${
              uploading ? "opacity-50 cursor-not-allowed" : ""
            }`}
          >
            <div className="text-center">
              <svg
                className="mx-auto h-12 w-12 text-gray-400"
                stroke="currentColor"
                fill="none"
                viewBox="0 0 48 48"
              >
                <path
                  d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <div className="mt-2">
                <span className="text-brand-primary font-semibold">
                  {uploading ? "Uploading..." : "Click to upload"}
                </span>
                <p className="text-xs text-gray-500 mt-1">
                  PNG, JPG, GIF up to 5MB
                </p>
              </div>
            </div>
            <input
              id="file-upload"
              type="file"
              className="sr-only"
              accept="image/*"
              onChange={handleFileChange}
              disabled={uploading}
            />
          </label>
        </div>

        {/* OR Divider */}
        <div className="relative">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-gray-300"></div>
          </div>
          <div className="relative flex justify-center text-sm">
            <span className="px-2 bg-white text-gray-500">OR</span>
          </div>
        </div>

        {/* URL Input */}
        <div>
          <input
            type="url"
            value={preview}
            onChange={handleUrlChange}
            placeholder="Paste image URL"
            className="w-full px-4 py-2 border border-gray-300 rounded-sm focus:outline-none focus:border-brand-primary"
          />
        </div>
      </div>

      {/* Preview */}
      {preview && (
        <div className="mt-4">
          <div className="relative h-48 w-full rounded-sm overflow-hidden border border-gray-300">
            <Image
              src={preview}
              alt="Preview"
              fill
              className="object-cover"
            />
            <button
              type="button"
              onClick={handleRemove}
              className="absolute top-2 right-2 bg-red-600 text-white p-2 rounded-full hover:bg-red-700 transition-colors"
            >
              <svg
                className="w-4 h-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
          <p className="text-xs text-gray-500 mt-2">
            Image uploaded successfully
          </p>
        </div>
      )}
    </div>
  );
}
