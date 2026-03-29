"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import TiptapEditor from "@/components/admin/TiptapEditor";
import ImageUpload from "@/components/admin/ImageUpload";

export default function NewBlog() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    title: "",
    excerpt: "",
    content: "",
    image: "",
    author: "Admin",
    category: "Uncategorized",
    published: true,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleContentChange = (content) => {
    setFormData({
      ...formData,
      content,
    });
  };

  const handleImageChange = (url) => {
    setFormData({
      ...formData,
      image: url,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await fetch("/api/blogs", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (data.success) {
        alert("Blog created successfully!");
        router.push("/admin/blogs");
      } else {
        alert("Error: " + data.message);
      }
    } catch (error) {
      console.error("Error creating blog:", error);
      alert("Failed to create blog");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header */}
      <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center gap-4">
            <Link
              href="/admin/blogs"
              className="text-gray-600 hover:text-brand-primary"
            >
              ← Back to Blogs
            </Link>
            <h1 className="font-playfair text-2xl font-bold text-gray-900">
              Create New Blog
            </h1>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Title */}
          <div className="bg-white rounded-lg shadow p-6">
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Blog Title *
            </label>
            <input
              type="text"
              name="title"
              required
              value={formData.title}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-sm focus:outline-none focus:border-brand-primary"
              placeholder="Enter blog title"
            />
          </div>

          {/* Excerpt */}
          <div className="bg-white rounded-lg shadow p-6">
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Excerpt *
            </label>
            <textarea
              name="excerpt"
              required
              value={formData.excerpt}
              onChange={handleChange}
              rows={3}
              className="w-full px-4 py-3 border border-gray-300 rounded-sm focus:outline-none focus:border-brand-primary"
              placeholder="Short description of the blog (max 500 characters)"
              maxLength={500}
            />
            <p className="text-xs text-gray-500 mt-1">
              {formData.excerpt.length}/500 characters
            </p>
          </div>

          {/* Content Editor */}
          <div className="bg-white rounded-lg shadow p-6">
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Content *
            </label>
            <TiptapEditor
              content={formData.content}
              onChange={handleContentChange}
            />
          </div>

          {/* Image Upload */}
          <div className="bg-white rounded-lg shadow p-6">
            <ImageUpload
              value={formData.image}
              onChange={handleImageChange}
              label="Featured Image"
            />
          </div>

          {/* Meta Information */}
          <div className="bg-white rounded-lg shadow p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Author
                </label>
                <input
                  type="text"
                  name="author"
                  value={formData.author}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-sm focus:outline-none focus:border-brand-primary"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Category
                </label>
                <select
                  name="category"
                  value={formData.category}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-sm focus:outline-none focus:border-brand-primary"
                >
                  <option value="Uncategorized">Uncategorized</option>
                  <option value="Sermons">Sermons</option>
                  <option value="Ministry">Ministry</option>
                  <option value="Community">Community</option>
                  <option value="Events">Events</option>
                  <option value="Testimonies">Testimonies</option>
                </select>
              </div>
            </div>

            <div className="mt-4">
              <label className="flex items-center">
                <input
                  type="checkbox"
                  name="published"
                  checked={formData.published}
                  onChange={handleChange}
                  className="w-4 h-4 text-brand-primary focus:ring-brand-primary border-gray-300 rounded"
                />
                <span className="ml-2 text-sm text-gray-700">
                  Publish immediately
                </span>
              </label>
            </div>
          </div>

          {/* Submit Buttons */}
          <div className="flex justify-end gap-4">
            <Link
              href="/admin/blogs"
              className="px-6 py-3 border border-gray-300 rounded-sm font-semibold text-gray-700 hover:bg-gray-50 transition-all"
            >
              Cancel
            </Link>
            <button
              type="submit"
              disabled={loading}
              className="bg-brand-primary hover:bg-brand-primary/90 text-white px-8 py-3 rounded-sm font-semibold transition-all disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {loading ? "Creating..." : "Create Blog"}
            </button>
          </div>
        </form>
      </main>
    </div>
  );
}
