"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

export default function BlogPosts() {
  const [searchQuery, setSearchQuery] = useState("");
  const [loading, setLoading] = useState(true);
  const [blogs, setBlogs] = useState([]);
  const [categories, setCategories] = useState(["All"]);
  const [selectedCategory, setSelectedCategory] = useState("All");

  useEffect(() => {
    fetchBlogs();
  }, []);

  const fetchBlogs = async () => {
    try {
      const res = await fetch("/api/blogs?published=true");
      const data = await res.json();

      if (data.success) {
        setBlogs(data.data);
        const uniqueCategories = [
          "All",
          ...new Set(data.data.map((blog) => blog.category)),
        ];
        setCategories(uniqueCategories);
      }
    } catch (error) {
      console.error("Error fetching blogs:", error);
    } finally {
      setLoading(false);
    }
  };

  const filteredPosts = blogs.filter((post) => {
    const matchesCategory =
      selectedCategory === "All" || post.category === selectedCategory;
    const matchesSearch =
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <section className="py-16 md:py-20 lg:py-24 bg-white">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
          {/* Main Content - Blog Posts */}
          <div className="lg:col-span-2">
            {loading ? (
              <div className="text-center py-12">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-brand-primary mx-auto"></div>
                <p className="mt-4 text-gray-600">Loading blogs...</p>
              </div>
            ) : filteredPosts.length === 0 ? (
              <div className="text-center py-12 bg-white rounded-lg shadow">
                <p className="text-gray-600 mb-4">No blogs found.</p>
                <button
                  onClick={() => {
                    setSelectedCategory("All");
                    setSearchQuery("");
                  }}
                  className="text-brand-primary hover:text-brand-primary/80 font-semibold"
                >
                  View All Blogs
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {filteredPosts.map((post) => (
                  <article
                    key={post._id}
                    className="bg-white rounded-sm shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
                  >
                    <div className="relative h-48">
                      <Image
                        src={post.image}
                        alt={post.title}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      />
                    </div>
                    <div className="p-6">
                      <div className="flex items-center gap-2 mb-3">
                        <span className="text-xs font-semibold text-brand-primary uppercase">
                          {post.category}
                        </span>
                        <span className="text-xs text-gray-500">
                          {new Date(post.createdAt).toLocaleDateString(
                            "en-US",
                            {
                              year: "numeric",
                              month: "long",
                              day: "numeric",
                            },
                          )}
                        </span>
                      </div>
                      <h3 className="font-playfair text-xl font-bold text-gray-900 mb-3">
                        {post.title}
                      </h3>
                      <p className="text-gray-600 mb-4 line-clamp-3">
                        {post.excerpt}
                      </p>
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-gray-500">
                          By {post.author}
                        </span>
                        <Link
                          href={`/blogs/${post.slug}`}
                          className="text-brand-primary hover:text-brand-primary/80 font-semibold text-sm"
                        >
                          Read More →
                        </Link>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            )}
          </div>

          {/* Sidebar */}
          <aside className="lg:col-span-1">
            <div className="space-y-8 lg:sticky lg:top-24">
              {/* Search */}
              <div>
                <h3 className="font-playfair text-xl font-bold text-gray-900 mb-4">
                  Search
                </h3>
                <form className="relative">
                  <input
                    type="text"
                    placeholder="Search..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full px-4 py-3 pr-12 border border-gray-300 rounded-sm focus:outline-none focus:border-brand-primary text-sm"
                  />
                  <button
                    type="submit"
                    className="absolute right-0 top-0 h-full px-4 bg-brand-primary text-white hover:bg-brand-primary/90 transition-all"
                    aria-label="Search"
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
                        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                      />
                    </svg>
                  </button>
                </form>
              </div>

              {/* Categories */}
              <div>
                <h3 className="font-playfair text-xl font-bold text-gray-900 mb-4">
                  Categories
                </h3>
                <ul className="space-y-2">
                  {categories.map((category, index) => (
                    <li key={index}>
                      <button
                        onClick={() => setSelectedCategory(category)}
                        className={`flex items-center gap-2 transition-colors w-full text-left ${
                          selectedCategory === category
                            ? "text-brand-primary font-semibold"
                            : "text-gray-600 hover:text-brand-primary"
                        }`}
                      >
                        <span className="text-brand-primary">→</span>
                        <span>{category}</span>
                      </button>
                    </li>
                  ))}
                </ul>
              </div>

              {/* CTA Box */}
              <div className="bg-brand-primary p-6 rounded-sm text-center">
                <h3 className="font-playfair text-2xl font-bold text-white mb-4">
                  &ldquo;The Word is Life Power&rdquo;
                </h3>
                <p className="text-white/90 text-sm mb-6">
                  Join us for our next service and experience the transforming
                  power of God&apos;s Word.
                </p>
                <Link
                  href="/visit"
                  className="inline-block border-2 border-white text-white hover:bg-white hover:text-brand-primary px-6 py-2 rounded-full font-semibold transition-all text-sm"
                >
                  Visit Us
                </Link>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}
