import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://personal.com",
      priority: 1,
      lastModified: new Date(),
    },
    {
      url: "https://personal.com/blog",
      priority: 0.9,
      lastModified: new Date(),
    },
  ];
}
