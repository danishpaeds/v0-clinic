import type React from "react"
import type { Metadata, Viewport } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import { GoogleTagManager } from "@next/third-parties/google"
import "./globals.css"
import { Header } from "@/src/components/Header"
import dynamic from "next/dynamic"
import { Breadcrumbs } from "@/components/Breadcrumbs"
import { ClientFloatingWhatsApp } from "@/components/ClientFloatingWhatsApp"
import { ClientFloatingCallButton } from "@/components/ClientFloatingCallButton"

const Footer = dynamic(() => import("@/src/components/Footer").then((mod) => ({ default: mod.Footer })), {
  loading: () => null,
})

const _geist = Geist({
  subsets: ["latin"],
  display: "swap",
  preload: true,
  variable: "--font-geist",
  adjustFontFallback: true,
})
const _geistMono = Geist_Mono({
  subsets: ["latin"],
  display: "swap",
  preload: true,
  variable: "--font-geist-mono",
  adjustFontFallback: true,
})

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#47145a" },
    { media: "(prefers-color-scheme: dark)", color: "#47145a" },
  ],
}

export const metadata: Metadata = {
  title: {
    default: "Dr Vrushni Bhuta - Best IVF Doctor in Mumbai | Fertility Specialist Powai & Santacruz",
    template: "%s | Dr Vrushni Bhuta Fertility Clinic",
  },
  description:
    "Leading IVF & fertility specialist in Mumbai with 15+ years experience. Dr Vrushni Bhuta offers personalized IVF, IUI, ICSI treatments at Powai & Santacruz. 85% success rate. Book consultation today.",
  keywords:
    "best IVF doctor Mumbai, fertility specialist Powai, IVF clinic Santacruz, Dr Vrushni Bhuta, fertility treatment Mumbai, IUI specialist Mumbai, ICSI treatment India, egg freezing Mumbai, fertility clinic near me, infertility doctor Mumbai",
  generator: "v0.app",
  metadataBase: new URL("https://drvrushni.com"),
  alternates: {
    canonical: "/",
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
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://drvrushni.com",
    siteName: "Dr Vrushni Bhuta Fertility Clinic Mumbai",
    title: "Dr Vrushni Bhuta - Leading IVF & Fertility Specialist in Mumbai",
    description:
      "15+ years of expertise in IVF, IUI, ICSI & fertility treatments. High success rates, compassionate care. Clinics in Powai & Santacruz West, Mumbai.",
    images: [
      {
        url: "/images/doctor-purple-blazer-seated.jpg",
        width: 1200,
        height: 630,
        alt: "Dr Vrushni Bhuta - Best Fertility Specialist & IVF Doctor in Mumbai",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Dr Vrushni Bhuta - Best IVF Doctor Mumbai | Fertility Specialist",
    description:
      "15+ years expertise in IVF, IUI, ICSI. 85% success rate. Personalized fertility care in Powai & Santacruz, Mumbai.",
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
    google: "google7c2909d72e7bf11f", // Added actual Google Search Console verification code
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en-IN">
      <body className={`font-sans antialiased`} suppressHydrationWarning>
        <GoogleTagManager gtmId="GTM-K7ZTLRMR" />

        <div className="flex min-h-screen flex-col">
          <Header />
          <Breadcrumbs />
          <main className="flex-1">{children}</main>
          <Footer />
          <ClientFloatingWhatsApp />
          <ClientFloatingCallButton />
        </div>
      </body>
    </html>
  )
}
