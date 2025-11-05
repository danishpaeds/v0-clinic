import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "../src/app/globals.css"
import { Header } from "@/src/components/Header"
import { Footer } from "@/src/components/Footer"

const _geist = Geist({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Dr. Vrushni's Women's Care & Fertility Clinic - From Fertility to Fulfilment",
  description:
    "Dr. Vrushni Bhuta, a trusted fertility specialist and gynaecologist in Mumbai, provides personalised treatment plans including IUI, IVF, ICSI and more fertility treatments.",
  keywords:
    "fertility clinic, IVF, ICSI, IUI, fertility specialist Mumbai, Dr Vrushni Bhuta, gynaecologist, women's care",
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
        </div>
        <Analytics />
      </body>
    </html>
  )
}
