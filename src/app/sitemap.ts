import type { MetadataRoute } from "next";
import { treks } from "./data/treks";

// Required so this route is generated as a static file under `output: export`.
export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://www.magical-toubkal-trek.com";

  // Core static pages
  const staticPages = ["", "/treks", "/gear-list", "/faq", "/about", "/contact"].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: route === "" ? 1.0 : route === "/treks" ? 0.9 : 0.7,
  }));

  // Dynamic trek detail pages
  const trekPages = treks.map((trek) => ({
    url: `${baseUrl}/treks/${trek.slug}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.95,
  }));

  return [...staticPages, ...trekPages];
}
