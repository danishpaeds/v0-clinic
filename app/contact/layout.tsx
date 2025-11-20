import type React from "react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Contact Dr Vrushni Bhuta - Book IVF Consultation Mumbai | Call +91-9820086575",
  description:
    "Schedule your fertility consultation with Dr Vrushni Bhuta in Mumbai. Two convenient locations: Hiranandani Hospital Powai & Surya Hospital Santacruz West. Call +91-9820086575 or book online. Free initial consultation available.",
  keywords:
    "contact fertility doctor Mumbai, book IVF consultation online, Dr Vrushni Bhuta phone number, fertility clinic Powai address, IVF appointment Santacruz, fertility consultation Mumbai, IVF doctor contact number, book fertility specialist Mumbai",
  openGraph: {
    title: "Book Your Fertility Consultation - Dr Vrushni Bhuta Mumbai",
    description:
      "Get expert fertility advice from Mumbai's leading IVF specialist. Easy online booking, multiple locations, flexible appointment times.",
    images: ["/images/doctor-purple-suit.jpg"],
  },
}

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return children
}
