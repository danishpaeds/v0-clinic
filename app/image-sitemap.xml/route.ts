export async function GET() {
  const baseUrl = "https://drvrushni.com"

  const images = [
    // Doctor images
    {
      loc: `${baseUrl}/images/doctor-purple-blazer-seated.jpg`,
      title: "Dr Vrushni Bhuta - Best IVF Fertility Specialist Mumbai Powai Santacruz",
      caption:
        "Dr Vrushni Bhuta, MS OBGY, MRM (UK), leading fertility specialist with 15+ years experience in IVF, IUI, and ICSI treatments in Mumbai. MMC Registration 2009020251.",
      geoLocation: "Mumbai, Maharashtra, India",
    },
    {
      loc: `${baseUrl}/images/dr-vrushni-bhuta-hero.jpg`,
      title: "Dr Vrushni Bhuta Hero Image - Fertility Doctor Mumbai",
      caption: "Professional portrait of Dr Vrushni Bhuta at her fertility clinic in Powai and Santacruz, Mumbai",
      geoLocation: "Mumbai, Maharashtra, India",
    },
    {
      loc: `${baseUrl}/images/dr-vrushni-bhuta-logo.png`,
      title: "Dr Vrushni Bhuta Fertility Clinic Logo Mumbai",
      caption: "Official logo of Dr. Vrushni's Women's Care & Fertility Clinic, Mumbai",
      geoLocation: "Mumbai, Maharashtra, India",
    },
    // Clinic location images
    {
      loc: `${baseUrl}/images/clinic-powai-hiranandani.jpg`,
      title: "Dr Vrushni Fertility Clinic Hiranandani Hospital Powai Mumbai",
      caption: "State-of-the-art fertility treatment facility at Hiranandani Hospital, Powai, Mumbai",
      geoLocation: "Powai, Mumbai, Maharashtra, India",
    },
    {
      loc: `${baseUrl}/images/clinic-santacruz-surya.jpg`,
      title: "Dr Vrushni Fertility Clinic Surya Hospital Santacruz West Mumbai",
      caption: "Modern fertility clinic at Surya Hospital, Santacruz West, Mumbai with advanced IVF lab",
      geoLocation: "Santacruz West, Mumbai, Maharashtra, India",
    },
    {
      loc: `${baseUrl}/images/clinic-chandivali-bookurdoc.jpg`,
      title: "Dr Vrushni Fertility Consultation Bookurdoc Chandivali Mumbai",
      caption: "Fertility consultation center at Bookurdoc, Chandivali, Mumbai",
      geoLocation: "Chandivali, Mumbai, Maharashtra, India",
    },
  ]

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1"
        xmlns:geo="http://www.google.com/geo/schemas/sitemap/1.0">
  ${images
    .map(
      (img) => `
  <url>
    <loc>${baseUrl}</loc>
    <image:image>
      <image:loc>${img.loc}</image:loc>
      <image:title>${img.title}</image:title>
      <image:caption>${img.caption}</image:caption>
      ${img.geoLocation ? `<image:geo_location>${img.geoLocation}</image:geo_location>` : ""}
    </image:image>
  </url>`,
    )
    .join("")}
</urlset>`

  return new Response(xml, {
    headers: {
      "Content-Type": "application/xml",
      "Cache-Control": "public, max-age=3600, s-maxage=3600",
    },
  })
}
