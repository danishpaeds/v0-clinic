import type { MetadataRoute } from "next"

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://drvrushni.com"

  // Main pages
  const routes = [
    "",
    "/about",
    "/treatments",
    "/treatments/ivf",
    "/treatments/iui",
    "/treatments/icsi",
    "/treatments/egg-freezing",
    "/treatments/embryo-cryopreservation",
    "/treatments/sperm-cryopreservation",
    "/treatments/donor-oocyte",
    "/treatments/surrogacy",
    "/treatments/fertility-surgery",
    "/treatments/prp-ovary",
    "/treatments/prp-endometrium",
    "/treatments/pgt",
    "/treatments/pre-conceptional-counselling",
    "/treatments/follicular-monitoring",
    "/treatments/testicular-sperm-aspiration",
    "/gallery",
    "/testimonials",
    "/blog",
    "/faq",
    "/contact",
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: route === "" ? 1 : route.includes("/treatments/") ? 0.8 : 0.7,
  }))

  return routes
}
