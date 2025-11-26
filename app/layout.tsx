import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import Script from "next/script"
import "./globals.css"
import { Header } from "@/src/components/Header"
import { Footer } from "@/src/components/Footer"
import { FloatingWhatsApp } from "@/components/FloatingWhatsApp"
import { FloatingCallButton } from "@/components/FloatingCallButton"
import { Breadcrumbs } from "@/components/Breadcrumbs"

const _geist = Geist({ subsets: ["latin"], display: "swap", preload: true })
const _geistMono = Geist_Mono({ subsets: ["latin"], display: "swap", preload: true })

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
      <head>
        <Script id="gtm-script" strategy="beforeInteractive">
          {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-K7ZTLRMR');`}
        </Script>

        {/* Google Analytics (gtag.js) */}
        <Script src="https://www.googletagmanager.com/gtag/js?id=G-3Y91XQN6GW" strategy="afterInteractive" />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-3Y91XQN6GW');
          `}
        </Script>
      </head>
      <body className={`font-sans antialiased`} suppressHydrationWarning>
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
          <main className="flex-1">{children}</main>
          <Footer />
          <FloatingWhatsApp />
          <FloatingCallButton />
        </div>
      </body>
    </html>
  )
}
