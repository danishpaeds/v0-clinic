import type { MetadataRoute } from "next"

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://drvrushni.com"

  const routes = [
    // High priority pages
    { route: "", priority: 1, changeFrequency: "daily" as const },
    { route: "/treatments/ivf", priority: 0.95, changeFrequency: "weekly" as const },
    { route: "/contact", priority: 0.9, changeFrequency: "monthly" as const },

    // Treatment pages - high priority
    { route: "/treatments", priority: 0.85, changeFrequency: "weekly" as const },
    { route: "/treatments/iui", priority: 0.8, changeFrequency: "weekly" as const },
    { route: "/treatments/icsi", priority: 0.8, changeFrequency: "weekly" as const },
    { route: "/treatments/egg-freezing", priority: 0.8, changeFrequency: "weekly" as const },
    { route: "/treatments/fertility-assessment", priority: 0.75, changeFrequency: "weekly" as const },
    { route: "/treatments/pcos-management", priority: 0.75, changeFrequency: "weekly" as const },
    { route: "/treatments/endometriosis-treatment", priority: 0.75, changeFrequency: "weekly" as const },
    { route: "/treatments/ovulation-induction", priority: 0.7, changeFrequency: "weekly" as const },
    { route: "/treatments/male-infertility", priority: 0.7, changeFrequency: "weekly" as const },
    { route: "/treatments/recurrent-pregnancy-loss", priority: 0.7, changeFrequency: "weekly" as const },
    { route: "/treatments/pgt", priority: 0.7, changeFrequency: "weekly" as const },
    { route: "/treatments/blastocyst-culture", priority: 0.65, changeFrequency: "monthly" as const },
    { route: "/treatments/assisted-hatching", priority: 0.65, changeFrequency: "monthly" as const },
    { route: "/treatments/donor-programs", priority: 0.65, changeFrequency: "monthly" as const },
    { route: "/treatments/surrogacy", priority: 0.65, changeFrequency: "monthly" as const },
    { route: "/treatments/fertility-preservation", priority: 0.65, changeFrequency: "monthly" as const },
    { route: "/treatments/third-party-reproduction", priority: 0.65, changeFrequency: "monthly" as const },
    { route: "/treatments/adolescent-gynaecology", priority: 0.6, changeFrequency: "monthly" as const },
    { route: "/treatments/menstrual-disorders", priority: 0.6, changeFrequency: "monthly" as const },
    { route: "/treatments/menopause-management", priority: 0.6, changeFrequency: "monthly" as const },
    { route: "/treatments/contraception-counselling", priority: 0.6, changeFrequency: "monthly" as const },
    { route: "/treatments/pre-pregnancy-planning", priority: 0.6, changeFrequency: "monthly" as const },
    { route: "/treatments/sexual-health", priority: 0.6, changeFrequency: "monthly" as const },

    // Content pages
    { route: "/about", priority: 0.8, changeFrequency: "monthly" as const },
    { route: "/blog", priority: 0.8, changeFrequency: "weekly" as const },
    { route: "/blog/understanding-ivf-complete-guide", priority: 0.85, changeFrequency: "monthly" as const },
    { route: "/testimonials", priority: 0.7, changeFrequency: "weekly" as const },
    { route: "/gallery", priority: 0.6, changeFrequency: "monthly" as const },
    { route: "/faq", priority: 0.7, changeFrequency: "monthly" as const },
    { route: "/location", priority: 0.75, changeFrequency: "monthly" as const },

    // Legal pages
    { route: "/privacy-policy", priority: 0.3, changeFrequency: "yearly" as const },
  ].map(({ route, priority, changeFrequency }) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency,
    priority,
  }))

  return routes
}
