import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import Script from "next/script"
import "./globals.css"
import { Header } from "@/src/components/Header"
import { Footer } from "@/src/components/Footer"
import { Breadcrumbs } from "@/components/Breadcrumbs"
import { ScrollRestoration } from "@/components/ScrollRestoration"
import { ClientComponents } from "@/components/ClientComponents"

const _geist = Geist({
  subsets: ["latin"],
  display: "swap",
  preload: true,
  variable: "--font-geist",
  fallback: ["system-ui", "arial"],
})

const _geistMono = Geist_Mono({
  subsets: ["latin"],
  display: "swap",
  preload: true,
  variable: "--font-geist-mono",
  fallback: ["ui-monospace", "monospace"],
})

export const metadata: Metadata = {
  title: {
    default: "Dr Vrushni Bhuta - Best IVF Doctor in Mumbai | Fertility Specialist Powai & Santacruz",
    template: "%s | Dr Vrushni Bhuta Fertility Clinic",
  },
  description:
    "Leading IVF & fertility specialist in Mumbai with 15+ years experience. Dr Vrushni Bhuta offers personalized IVF, IUI, ICSI treatments at Powai & Santacruz. 50-70% success rate. Book consultation today.",
  keywords:
    "best IVF doctor Mumbai, fertility specialist Powai, IVF clinic Santacruz, Dr Vrushni Bhuta, fertility treatment Mumbai, IUI specialist Mumbai, ICSI treatment India, egg freezing Mumbai, fertility clinic near me, infertility doctor Mumbai",
  generator: "v0.app",
  metadataBase: new URL("https://drvrushni.com"),
  alternates: {
    canonical: "/",
    languages: {
      "en-IN": "https://drvrushni.com",
      en: "https://drvrushni.com",
    },
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
      "15+ years expertise in IVF, IUI, ICSI. 50-70% success rate. Personalized fertility care in Powai & Santacruz, Mumbai.",
    images: ["/images/doctor-purple-blazer-seated.jpg"],
    creator: "@drvrushni",
    site: "@drvrushni",
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
    google: "google7c2909d72e7bf11f",
  },
  category: "healthcare",
  classification: "Healthcare - Fertility Treatment",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://www.googletagmanager.com" />
        <link rel="dns-prefetch" href="https://wa.me" />
        <link rel="dns-prefetch" href="https://fonts.googleapis.com" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=5, user-scalable=yes, viewport-fit=cover"
        />
      </head>
      <body className={`${_geist.variable} ${_geistMono.variable} font-sans antialiased`} suppressHydrationWarning>
        <ScrollRestoration />

        <Script id="gtm-script" strategy="lazyOnload">
          {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-K7ZTLRMR');`}
        </Script>

        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-K7ZTLRMR"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
            title="Google Tag Manager"
          />
        </noscript>

        <div className="flex min-h-screen flex-col">
          <Header />
          <Breadcrumbs />
          <main className="flex-1 will-change-scroll">{children}</main>
          <Footer />
          <ClientComponents />
        </div>
      </body>
    </html>
  )
}
