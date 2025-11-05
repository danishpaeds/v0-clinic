import type React from "react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Contact Dr. Vrushni Bhuta - Book IVF Consultation in Mumbai | Powai, Santacruz, Khar",
  description:
    "Schedule your fertility consultation with Dr. Vrushni Bhuta in Mumbai. Available at Hiranandani Hospital Powai, Surya Hospital Santacruz & VLSR Khar. Call +91 9820086575 for appointment.",
  keywords:
    "contact fertility doctor Mumbai, book IVF consultation Mumbai, Dr Vrushni Bhuta appointment, fertility clinic Powai contact, IVF doctor Santacruz contact, fertility specialist Khar, book fertility consultation India, IVF appointment Mumbai",
  openGraph: {
    title: "Contact Dr. Vrushni Bhuta - Book Your Fertility Consultation",
    description:
      "Get in touch with Mumbai's leading fertility specialist. Multiple locations in Powai, Santacruz & Khar. Book your consultation today.",
    images: ["/images/doctor-purple-suit.jpg"],
  },
}

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return children
}
