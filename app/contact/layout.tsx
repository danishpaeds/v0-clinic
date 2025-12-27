import type React from "react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Book IVF Consultation Mumbai | Dr Vrushni +91-8591186575",
  description:
    "Schedule fertility consultation with Dr Vrushni Bhuta. Locations: Hiranandani Powai & Surya Santacruz. Call +91-8591186575. Free initial consultation.",
  keywords:
    "contact fertility doctor Mumbai, book IVF consultation online, Dr Vrushni Bhuta phone number, fertility clinic Powai address, IVF appointment Santacruz, fertility consultation Mumbai, IVF doctor contact number, book fertility specialist Mumbai",
  openGraph: {
    title: "Book Your Fertility Consultation - Dr Vrushni Bhuta",
    description:
      "Get expert fertility advice from Mumbai's leading IVF specialist. Easy online booking, multiple locations.",
    type: "website",
    locale: "en_IN",
    url: "https://drvrushni.com/contact",
    images: [
      {
        url: "/images/doctor-purple-suit.jpg",
        width: 1200,
        height: 630,
        alt: "Contact Dr Vrushni Bhuta - Fertility Specialist Mumbai",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Book Your Fertility Consultation - Dr Vrushni Bhuta",
    description: "Get expert fertility advice from Mumbai's leading IVF specialist. Easy online booking.",
    images: ["/images/doctor-purple-suit.jpg"],
  },
}

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return children
}
