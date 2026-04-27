import Link from "next/link";
import Container from "./Container";
import Image from "next/image";

const quickLinks = [
  { href: "/about", label: "About Us" },
  { href: "/ministries", label: "Ministries" },
  { href: "/watch", label: "Hall of Vision" },
  { href: "/events", label: "Events" },
  { href: "/food-pantry", label: "Food Pantry" },
  { href: "/give", label: "Give" },
  { href: "/live-tv", label: "Live TV" },
  { href: "/gallery", label: "Gallery" },
  { href: "/blogs", label: "Blogs" },
  { href: "/global-mission", label: "Global Mission" },
  { href: "/contact", label: "Contact" },
  { href: "/privacy", label: "Privacy Policy" },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="font-lato footer-bg">
      <Container>
        {/* Main Footer Content */}
        <div className="py-12 border-b border-gray-700">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
            {/* Logo and Tagline */}
            <div>
              <Link href="/" className="inline-block mb-3">
                <Image
                  src="/images/1-VOICE-OF-THE-GOSPEL-TABERNACLE-LOGO-.png"
                  alt="Voice of the Gospel Tabernacle"
                  width={80}
                  height={80}
                  className="object-contain"
                  style={{ width: "auto", height: "auto" }}
                />
              </Link>
              <p className="text-sm text-gray-300 mb-6">
                &ldquo;Go ye into all the world, and preach the gospel to every
                creature&rdquo;
              </p>
              {/* Social Icons */}
              <div className="flex space-x-3">
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-brand-primary hover:bg-brand-primary/90 text-white w-10 h-10 rounded-full flex items-center justify-center transition-all"
                  aria-label="Facebook"
                >
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                  </svg>
                </a>
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-brand-primary hover:bg-brand-primary/90 text-white w-10 h-10 rounded-full flex items-center justify-center transition-all"
                  aria-label="Twitter"
                >
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                  </svg>
                </a>
                <a
                  href="https://youtube.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-brand-primary hover:bg-brand-primary/90 text-white w-10 h-10 rounded-full flex items-center justify-center transition-all"
                  aria-label="YouTube"
                >
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                  </svg>
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-base font-semibold text-white mb-4">
                Quick Links
              </h4>
              <ul className="space-y-2">
                {quickLinks.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-gray-300 hover:text-brand-accent transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="text-base font-semibold text-white mb-4">
                Contact Info
              </h4>
              <ul className="space-y-3">
                <li className="flex items-start space-x-3 text-sm text-gray-300">
                  <svg
                    className="w-5 h-5 text-brand-primary mt-0.5 flex-shrink-0"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                  <span>49 Edgewater Dr, Mattapan, MA 02126</span>
                </li>
                <li className="flex items-start space-x-3 text-sm text-gray-300">
                  <svg
                    className="w-5 h-5 text-brand-primary mt-0.5 flex-shrink-0"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                  <span>(617) 980-7866</span>
                </li>
                <li className="flex items-start space-x-3 text-sm text-gray-300">
                  <svg
                    className="w-5 h-5 text-brand-primary mt-0.5 flex-shrink-0"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                  <span>communityatvgt@gmail.com</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="py-6 flex flex-col sm:flex-row justify-between items-center">
          <p className="text-center sm:text-left text-sm text-gray-400 mb-4 sm:mb-0">
            &copy; {currentYear} Voice of the Gospel Tabernacle. All Rights
            Reserved.
          </p>

          {/* Admin Login Button */}
          <Link
            href="/admin/login"
            className="inline-flex items-center px-3 py-1.5 text-xs font-medium text-gray-400 hover:text-white transition-colors duration-200 group"
          >
            <svg
              className="w-3 h-3 mr-1.5 opacity-50 group-hover:opacity-100"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
              />
            </svg>
            Admin
          </Link>
        </div>
      </Container>
    </footer>
  );
}
