import { Playfair_Display, Lato } from "next/font/google";
import "@/styles/globals.css";

const playfairDisplay = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  variable: "--font-playfair",
  display: "swap",
});

const lato = Lato({
  subsets: ["latin"],
  weight: ["300", "400", "700", "900"],
  variable: "--font-lato",
  display: "swap",
});

export const metadata = {
  title: {
    default: "Voice of Gospel",
    template: "%s | Voice of Gospel",
  },
  description: "Spreading the message of hope and faith.",
  keywords: ["gospel", "church", "ministry", "faith", "worship"],
  authors: [{ name: "Voice of Gospel" }],
  creator: "Voice of Gospel",
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
    other: [
      {
        rel: "mask-icon",
        url: "/safari-pinned-tab.svg",
        color: "#8B0000",
      },
    ],
  },
  manifest: "/site.webmanifest",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://voiceofgospel.com",
    siteName: "Voice of Gospel",
    title: "Voice of Gospel",
    description: "Spreading the message of hope and faith.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Voice of Gospel",
    description: "Spreading the message of hope and faith.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${playfairDisplay.variable} ${lato.variable}`}
      suppressHydrationWarning
    >
      <body className={playfairDisplay.className} suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
