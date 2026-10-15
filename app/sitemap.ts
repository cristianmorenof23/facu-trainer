import type { MetadataRoute } from "next";

const siteUrl = "https://facu-trainer.vercel.app";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: siteUrl, changeFrequency: "weekly", priority: 1 },
    { url: `${siteUrl}/sobre-mi`, changeFrequency: "monthly", priority: 0.8 },
    { url: `${siteUrl}/entrenamientos`, changeFrequency: "monthly", priority: 0.9 },
    { url: `${siteUrl}/resultados`, changeFrequency: "monthly", priority: 0.7 },
    { url: `${siteUrl}/contacto`, changeFrequency: "monthly", priority: 0.8 },
  ];
}
