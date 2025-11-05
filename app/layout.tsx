import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import "../src/app/globals.css"
import { Header } from "@/src/components/Header"
import { Footer } from "@/src/components/Footer"
import { FloatingWhatsApp } from "@/components/FloatingWhatsApp"

const _geist = Geist({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Dr. Vrushni's Women's Care & Fertility Clinic - From Fertility to Fulfilment",
  description:
    "Dr. Vrushni's Women's Care & Fertility Clinic in Santacruz, Mumbai. Dr. Vrushni Bhuta provides personalised fertility treatment plans including IUI, IVF, ICSI and comprehensive women's care.",
  keywords:
    "fertility clinic Mumbai, IVF Santacruz, ICSI, IUI, fertility specialist Mumbai, Dr Vrushni Bhuta, gynaecologist Santacruz, women's care Mumbai",
  generator: "v0.app",
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
          <main className="flex-1">{children}</main>
          <Footer />
          <FloatingWhatsApp />
        </div>
      </body>
    </html>
  )
}
