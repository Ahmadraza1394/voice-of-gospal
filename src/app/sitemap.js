const siteUrl = (process.env.SITE_URL || "https://www.voiceofthegospeltabernacle.com").replace(/\/$/, "");

export default function sitemap() {
  const routes = [
    "",
    "/about",
    "/ministries",
    "/visit",
    "/give",
    "/watch",
    "/events",
    "/blogs",
    "/gallery",
    "/global-mission",
    "/contact",
  ];

  const now = new Date();

  return routes.map((path) => ({
    url: `${siteUrl}${path}`,
    lastModified: now,
    changeFrequency: "weekly",
    priority: path === "" ? 1 : 0.7,
  }));
}
