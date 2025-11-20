import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import "./globals.css"
import { Header } from "@/src/components/Header"
import { Footer } from "@/src/components/Footer"
import { FloatingWhatsApp } from "@/components/FloatingWhatsApp"
import { Breadcrumbs } from "@/components/Breadcrumbs"

const _geist = Geist({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Dr. Vrushni's Women's Care & Fertility Clinic - From Fertility to Fulfilment",
  description:
    "Dr. Vrushni's Women's Care & Fertility Clinic in Santacruz, Mumbai. Dr. Vrushni Bhuta provides personalised fertility treatment plans including IUI, IVF, ICSI and comprehensive women's care.",
  keywords:
    "fertility clinic Mumbai, IVF Santacruz, ICSI, IUI, fertility specialist Mumbai, Dr Vrushni Bhuta, gynaecologist Santacruz, women's care Mumbai",
  generator: "v0.app",
  metadataBase: new URL("https://drvrushni.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://drvrushni.com",
    siteName: "Dr. Vrushni's Women's Care & Fertility Clinic",
    title: "Dr. Vrushni's Women's Care & Fertility Clinic - From Fertility to Fulfilment",
    description: "Premier fertility clinic in Mumbai offering IVF, IUI, ICSI, and comprehensive women's healthcare.",
    images: [
      {
        url: "/images/doctor-purple-blazer-seated.jpg",
        width: 1200,
        height: 630,
        alt: "Dr. Vrushni Bhuta - Fertility Specialist",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Dr. Vrushni's Women's Care & Fertility Clinic",
    description: "Mumbai's trusted fertility specialist offering personalized IVF and reproductive care.",
    images: ["/images/doctor-purple-blazer-seated.jpg"],
  },
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" }],
  },
  verification: {
    google: "your-google-verification-code", // User should replace with actual code
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`font-sans antialiased`} suppressHydrationWarning>
        <div className="flex min-h-screen flex-col">
          <Header />
          <Breadcrumbs />
          <main className="flex-1">{children}</main>
          <Footer />
          <FloatingWhatsApp />
        </div>
      </body>
    </html>
  )
}
