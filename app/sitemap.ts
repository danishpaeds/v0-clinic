import type { MetadataRoute } from "next"

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://drvrushni.com"

  const routes = [
    "",
    "/about",
    "/treatments",
    "/treatments/ivf",
    "/treatments/iui",
    "/treatments/icsi",
    "/treatments/egg-freezing",
    "/treatments/fertility-assessment",
    "/treatments/pcos-management",
    "/treatments/endometriosis-treatment",
    "/treatments/ovulation-induction",
    "/treatments/male-infertility",
    "/treatments/recurrent-pregnancy-loss",
    "/treatments/pgt",
    "/treatments/blastocyst-culture",
    "/treatments/assisted-hatching",
    "/treatments/donor-programs",
    "/treatments/surrogacy",
    "/treatments/fertility-preservation",
    "/treatments/third-party-reproduction",
    "/treatments/adolescent-gynaecology",
    "/treatments/menstrual-disorders",
    "/treatments/menopause-management",
    "/treatments/contraception-counselling",
    "/treatments/pre-pregnancy-planning",
    "/treatments/sexual-health",
    "/gallery",
    "/testimonials",
    "/blog",
    "/faq",
    "/contact",
    "/location",
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency:
      route === "" ? ("daily" as const) : route.includes("/treatments/") ? ("weekly" as const) : ("monthly" as const),
    priority: route === "" ? 1 : route.includes("/treatments/") || route === "/contact" ? 0.8 : 0.6,
  }))

  return routes
}
