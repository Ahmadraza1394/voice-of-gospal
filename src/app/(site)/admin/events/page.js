"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

export default function AdminEventsPage() {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchEvents();
  }, []);

  const fetchEvents = async () => {
    try {
      const res = await fetch("/api/events");
      const data = await res.json();

      if (data.success) {
        setEvents(data.data);
      }
    } catch (error) {
      console.error("Error fetching events:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id) => {
    if (!confirm("Are you sure you want to delete this event?")) {
      return;
    }

    try {
      const res = await fetch(`/api/events/${id}`, {
        method: "DELETE",
      });

      const data = await res.json();

      if (data.success) {
        alert("Event deleted successfully!");
        fetchEvents();
      } else {
        alert("Failed to delete event");
      }
    } catch (error) {
      console.error("Error deleting event:", error);
      alert("Error deleting event");
    }
  };

  const togglePublish = async (id, currentStatus) => {
    try {
      const res = await fetch(`/api/events/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ published: !currentStatus }),
      });

      const data = await res.json();

      if (data.success) {
        fetchEvents();
      }
    } catch (error) {
      console.error("Error updating event:", error);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">
                Manage Events
              </h1>
              <p className="mt-2 text-gray-600">
                Create, edit, and manage church events
              </p>
            </div>
            <div className="flex gap-3">
              <Link
                href="/admin/dashboard"
                className="px-4 py-2 border border-gray-300 text-gray-700 rounded-sm hover:bg-gray-50"
              >
                ← Dashboard
              </Link>
              <Link
                href="/admin/events/new"
                className="px-6 py-2 bg-brand-primary text-white rounded-sm hover:bg-brand-primary/90"
              >
                + Add New Event
              </Link>
            </div>
          </div>
        </div>

        {/* Events List */}
        {loading ? (
          <div className="text-center py-12">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-brand-primary mx-auto"></div>
            <p className="mt-4 text-gray-600">Loading events...</p>
          </div>
        ) : events.length === 0 ? (
          <div className="text-center py-12 bg-white rounded-lg shadow">
            <svg
              className="mx-auto h-12 w-12 text-gray-400"
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
            <h3 className="mt-2 text-sm font-medium text-gray-900">
              No events
            </h3>
            <p className="mt-1 text-sm text-gray-500">
              Get started by creating a new event.
            </p>
            <div className="mt-6">
              <Link
                href="/admin/events/new"
                className="inline-flex items-center px-4 py-2 border border-transparent shadow-sm text-sm font-medium rounded-sm text-white bg-brand-primary hover:bg-brand-primary/90"
              >
                + Add New Event
              </Link>
            </div>
          </div>
        ) : (
          <div className="bg-white shadow overflow-hidden rounded-lg">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Event
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Date & Time
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Location
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Category
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Status
                  </th>
                  <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {events.map((event) => (
                  <tr key={event._id} className="hover:bg-gray-50">
                    <td className="px-6 py-4">
                      <div className="flex items-center">
                        <div className="h-16 w-16 flex-shrink-0 relative">
                          <Image
                            src={event.image}
                            alt={event.title}
                            fill
                            className="object-cover rounded"
                          />
                        </div>
                        <div className="ml-4">
                          <div className="text-sm font-medium text-gray-900">
                            {event.title}
                          </div>
                          <div className="text-sm text-gray-500 line-clamp-1">
                            {event.description}
                          </div>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-900">
                        {new Date(event.date).toLocaleDateString("en-US", {
                          month: "short",
                          day: "numeric",
                          year: "numeric",
                        })}
                      </div>
                      <div className="text-sm text-gray-500">{event.time}</div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="text-sm text-gray-900">
                        {event.location}
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-brand-primary/10 text-brand-primary">
                        {event.category}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <button
                        onClick={() =>
                          togglePublish(event._id, event.published)
                        }
                        className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                          event.published
                            ? "bg-green-100 text-green-800"
                            : "bg-gray-100 text-gray-800"
                        }`}
                      >
                        {event.published ? "Published" : "Draft"}
                      </button>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                      <Link
                        href={`/admin/events/edit/${event._id}`}
                        className="text-brand-primary hover:text-brand-primary/80 mr-4"
                      >
                        Edit
                      </Link>
                      <button
                        onClick={() => handleDelete(event._id)}
                        className="text-red-600 hover:text-red-900"
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

        {/* Stats */}
        {events.length > 0 && (
          <div className="mt-6 grid grid-cols-1 gap-5 sm:grid-cols-3">
            <div className="bg-white overflow-hidden shadow rounded-lg">
              <div className="px-4 py-5 sm:p-6">
                <dt className="text-sm font-medium text-gray-500 truncate">
                  Total Events
                </dt>
                <dd className="mt-1 text-3xl font-semibold text-gray-900">
                  {events.length}
                </dd>
              </div>
            </div>
            <div className="bg-white overflow-hidden shadow rounded-lg">
              <div className="px-4 py-5 sm:p-6">
                <dt className="text-sm font-medium text-gray-500 truncate">
                  Published
                </dt>
                <dd className="mt-1 text-3xl font-semibold text-green-600">
                  {events.filter((e) => e.published).length}
                </dd>
              </div>
            </div>
            <div className="bg-white overflow-hidden shadow rounded-lg">
              <div className="px-4 py-5 sm:p-6">
                <dt className="text-sm font-medium text-gray-500 truncate">
                  Drafts
                </dt>
                <dd className="mt-1 text-3xl font-semibold text-gray-600">
                  {events.filter((e) => !e.published).length}
                </dd>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
