// Keeping it for backwards compatibility but it won't be used
import type React from "react"
import type { Metadata } from "next"
import "./globals.css"
import { Header } from "@/src/components/Header"
import { Footer } from "@/src/components/Footer"
import { siteConfig, jsonLdOrganization, jsonLdPhysician } from "@/src/lib/seo-config"

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: siteConfig.name,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: [
    "IVF clinic Mumbai",
    "fertility specialist Mumbai",
    "IVF treatment India",
    "best IVF doctor Mumbai",
    "fertility clinic Powai",
    "IUI treatment Mumbai",
    "ICSI Mumbai",
    "egg freezing Mumbai",
    "infertility treatment India",
    "Dr Vrushni Bhuta",
    "fertility doctor Santacruz",
    "IVF success rate Mumbai",
    "reproductive medicine Mumbai",
    "women's fertility clinic",
    "assisted reproductive technology Mumbai",
    "embryo transfer Mumbai",
    "fertility preservation India",
    "gynecologist Mumbai",
    "infertility specialist Maharashtra",
  ],
  authors: [{ name: "Dr. Vrushni Bhuta" }],
  creator: "Dr. Vrushni Bhuta",
  publisher: "Dr. Vrushni Bhuta Fertility Clinic",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: siteConfig.url,
    title: siteConfig.name,
    description: siteConfig.description,
    siteName: siteConfig.name,
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: "Dr. Vrushni Bhuta - Leading IVF & Fertility Specialist in Mumbai",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.name,
    description: siteConfig.description,
    images: [siteConfig.ogImage],
    creator: siteConfig.social.twitter,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code",
    yandex: "your-yandex-verification-code",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en-IN">
      <head>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdOrganization) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdPhysician) }} />
      </head>
      <body className="antialiased" suppressHydrationWarning>
        <div className="flex min-h-screen flex-col">
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  )
}
