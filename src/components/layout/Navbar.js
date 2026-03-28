"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { usePathname } from "next/navigation";
import Container from "./Container";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/ministries", label: "Ministries" },
  { href: "/watch", label: "Watch" },
  { href: "/events", label: "Events" },
  { href: "/give", label: "Give" },
  { href: "/visit", label: "Visit" },
  { href: "/gallery", label: "Gallery" },
  { href: "/blogs", label: "Blogs" },
  { href: "/contact", label: "Contact" },
];

const globalMissionLinks = [
  { href: "/global-mission", label: "Overview" },
  { href: "/global-mission/haiti", label: "Haiti" },
  { href: "/global-mission/dominican-republic", label: "Dominican Republic" },
  { href: "/global-mission/nigeria", label: "Nigeria" },
  { href: "/global-mission/ivory-coast", label: "Ivory Coast" },
  { href: "/global-mission/uganda", label: "Uganda" },
  { href: "/global-mission/food-pantry", label: "Food Pantry" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isGlobalMissionOpen, setIsGlobalMissionOpen] = useState(false);
  const pathname = usePathname();

  const isActive = (href) => {
    if (href === "/") {
      return pathname === "/";
    }
    return pathname.startsWith(href);
  };

  return (
    <nav className="font-lato bg-background-main shadow-sm">
      <Container>
        <div className="flex h-20 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="relative h-16 w-16">
              <Image
                src="/images/1-VOICE-OF-THE-GOSPEL-TABERNACLE-LOGO-.png"
                alt="Voice of the Gospel Tabernacle"
                fill
                sizes="48px"
                className="object-contain"
                priority
              />
            </div>
            {/* <span className="text-lg font-semibold text-brand-primary hidden sm:block">
              Voice of the Gospel Tabernacle
            </span> */}
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-6">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm font-medium transition-colors ${
                  isActive(link.href)
                    ? "text-brand-primary font-semibold border-b-2 border-brand-primary pb-1"
                    : "text-gray-700 hover:text-brand-primary"
                }`}
              >
                {link.label}
              </Link>
            ))}

            {/* Global Mission Dropdown */}
            <div
              className="relative group"
              onMouseEnter={() => setIsGlobalMissionOpen(true)}
              onMouseLeave={() => setIsGlobalMissionOpen(false)}
            >
              <button
                className={`text-sm font-medium transition-colors flex items-center gap-1 ${
                  isActive("/global-mission")
                    ? "text-brand-primary font-semibold border-b-2 border-brand-primary pb-1"
                    : "text-gray-700 hover:text-brand-primary"
                }`}
              >
                Global Mission
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
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>

              {/* Invisible bridge to prevent dropdown from closing */}
              <div className="absolute top-full left-0 w-full h-2"></div>

              {isGlobalMissionOpen && (
                <div className="absolute top-full left-0 mt-2 w-56 bg-white rounded-md shadow-lg py-2 z-50 border border-gray-100">
                  {globalMissionLinks.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-brand-primary hover:text-white transition-colors"
                      onClick={() => {
                        setIsGlobalMissionOpen(false);
                        window.scrollTo({ top: 0, behavior: "smooth" });
                      }}
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link
              href="/give"
              className="bg-brand-primary text-white px-6 py-2 rounded-full text-sm font-semibold transition-all hover:bg-brand-primary/90 hover:shadow-lg"
            >
              Give Now
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden inline-flex items-center justify-center rounded-md p-2 text-brand-primary hover:bg-background-light focus:outline-none focus:ring-2 focus:ring-inset focus:ring-brand-primary"
            aria-expanded={isOpen}
          >
            <span className="sr-only">Open main menu</span>
            {!isOpen ? (
              <svg
                className="block h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="2"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              </svg>
            ) : (
              <svg
                className="block h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="2"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            )}
          </button>
        </div>
      </Container>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden border-t border-gray-100">
          <Container>
            <div className="space-y-1 py-4">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`block px-3 py-2 text-base font-medium rounded-md ${
                    isActive(link.href)
                      ? "bg-brand-primary text-white"
                      : "text-gray-700 hover:bg-background-light hover:text-brand-primary"
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </Link>
              ))}

              {/* Global Mission Mobile Dropdown */}
              <div>
                <button
                  onClick={() => setIsGlobalMissionOpen(!isGlobalMissionOpen)}
                  className={`w-full flex items-center justify-between px-3 py-2 text-base font-medium rounded-md ${
                    isActive("/global-mission")
                      ? "bg-brand-primary text-white"
                      : "text-gray-700 hover:bg-background-light hover:text-brand-primary"
                  }`}
                >
                  Global Mission
                  <svg
                    className={`w-5 h-5 transition-transform ${isGlobalMissionOpen ? "rotate-180" : ""}`}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>

                {isGlobalMissionOpen && (
                  <div className="pl-4 mt-1 space-y-1">
                    {globalMissionLinks.map((link) => (
                      <Link
                        key={link.href}
                        href={link.href}
                        className="block px-3 py-2 text-sm text-gray-600 hover:bg-background-light hover:text-brand-primary rounded-md"
                        onClick={() => {
                          setIsOpen(false);
                          setIsGlobalMissionOpen(false);
                        }}
                      >
                        {link.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              <Link
                href="/give"
                className="block mt-4 bg-brand-primary text-white px-6 py-3 rounded-full text-center text-sm font-semibold transition-all hover:bg-brand-primary/90"
                onClick={() => setIsOpen(false)}
              >
                Give Now
              </Link>
            </div>
          </Container>
        </div>
      )}
    </nav>
  );
}
