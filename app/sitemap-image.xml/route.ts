import { NextResponse } from "next/server"

export async function GET() {
  const baseUrl = "https://drvrushni.com"

  const imageEntries = [
    {
      loc: `${baseUrl}/`,
      images: [
        {
          loc: `${baseUrl}/placeholder.svg?height=800&width=1200&query=fertility+clinic+hero`,
          title: "Dr. Vrushni Bhuta - Fertility Specialist",
          caption: "Leading fertility clinic in Mumbai",
        },
      ],
    },
    {
      loc: `${baseUrl}/about`,
      images: [
        {
          loc: `${baseUrl}/placeholder.svg?height=600&width=800&query=dr+vrushni+portrait`,
          title: "Dr. Vrushni Bhuta",
          caption: "Experienced fertility specialist with 15+ years",
        },
      ],
    },
  ]

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
            xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">
      ${imageEntries
        .map(
          (entry) => `
        <url>
          <loc>${entry.loc}</loc>
          ${entry.images
            .map(
              (img) => `
            <image:image>
              <image:loc>${img.loc}</image:loc>
              <image:title>${img.title}</image:title>
              <image:caption>${img.caption}</image:caption>
            </image:image>
          `,
            )
            .join("")}
        </url>
      `,
        )
        .join("")}
    </urlset>
  `

  return new NextResponse(xml, {
    headers: {
      "Content-Type": "application/xml",
      "Cache-Control": "public, max-age=3600, s-maxage=3600",
    },
  })
}
