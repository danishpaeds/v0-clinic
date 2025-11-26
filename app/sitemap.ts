import type { MetadataRoute } from "next"

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://drvrushni.com"

  // Static pages with custom priorities and change frequencies
  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 1.0,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/treatments`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.95, // increased priority for contact page
    },
    {
      url: `${baseUrl}/location`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/gallery`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/testimonials`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/faq`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.7,
    },
  ]

  const treatmentSlugs = [
    "ivf",
    "iui",
    "icsi",
    "egg-freezing",
    "fertility-assessment",
    "pcos-management",
    "endometriosis-treatment",
    "ovulation-induction",
    "male-infertility",
    "recurrent-pregnancy-loss",
    "pgt",
    "blastocyst-culture",
    "assisted-hatching",
    "donor-programs",
    "surrogacy",
    "fertility-preservation",
    "third-party-reproduction",
    "adolescent-gynaecology",
    "menstrual-disorders",
    "menopause-management",
    "contraception-counselling",
    "pre-pregnancy-planning",
    "sexual-health",
  ]

  const treatmentRoutes: MetadataRoute.Sitemap = treatmentSlugs.map((slug) => ({
    url: `${baseUrl}/treatments/${slug}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: ["ivf", "iui", "icsi", "egg-freezing", "fertility-assessment"].includes(slug) ? 0.9 : 0.8,
  }))

  // Thank you pages should not be indexed by search engines

  return [...staticRoutes, ...treatmentRoutes]
}
