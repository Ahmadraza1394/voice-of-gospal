const siteUrl = (process.env.SITE_URL || "https://www.voiceofthegospeltabernacle.com").replace(/\/$/, "");

export default function robots() {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: `${siteUrl}/sitemap.xml`,
  };
}
