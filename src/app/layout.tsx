// Keeping it for backwards compatibility but it won't be used
import type React from "react"
import type { Metadata } from "next"
import "./globals.css"
import { Header } from "@/src/components/Header"
import { Footer } from "@/src/components/Footer"

export const metadata: Metadata = {
  title: "Dr. Vrushni's Women's Care & Fertility Clinic - From Fertility to Fulfilment",
  description:
    "Dr. Vrushni Bhuta, a trusted fertility specialist and gynaecologist in Mumbai, provides personalised treatment plans including IUI, IVF, ICSI and more fertility treatments.",
  keywords:
    "fertility clinic, IVF, ICSI, IUI, fertility specialist Mumbai, Dr Vrushni Bhuta, gynaecologist, women's care",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
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
