import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://pay.resumeclimbai.com";
  const lastModified = "2026-11-19";

  return [
    { url: baseUrl, lastModified, changeFrequency: "weekly", priority: 1.0 },
    {
      url: `${baseUrl}/trump-account-calculator`,
      lastModified,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/no-tax-on-tips-calculator`,
      lastModified,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/tipped-occupation-code`,
      lastModified,
      changeFrequency: "weekly",
      priority: 0.85,
    },
    {
      url: `${baseUrl}/car-loan-interest-calculator`,
      lastModified,
      changeFrequency: "weekly",
      priority: 0.8,
    },
  ];
}