import type React from "react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Fertility Treatment FAQ - Common Questions Answered | Dr. Vrushni Bhuta",
  description:
    "Find answers to frequently asked questions about IVF, IUI, ICSI, egg freezing, and other fertility treatments. Expert guidance from Dr. Vrushni Bhuta in Mumbai.",
  keywords:
    "fertility FAQ, IVF questions, IUI answers, fertility treatment cost, success rates, egg freezing questions, Mumbai fertility clinic FAQ",
  openGraph: {
    title: "Fertility Treatment FAQ - Dr. Vrushni Bhuta",
    description:
      "Comprehensive answers to your fertility treatment questions from Mumbai's leading fertility specialist.",
    type: "website",
  },
}

export default function FAQLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
