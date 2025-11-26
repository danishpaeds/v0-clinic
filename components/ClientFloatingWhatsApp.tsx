"use client"

import dynamic from "next/dynamic"

const FloatingWhatsApp = dynamic(
  () => import("@/components/FloatingWhatsApp").then((mod) => ({ default: mod.FloatingWhatsApp })),
  {
    loading: () => null,
    ssr: false,
  },
)

export function ClientFloatingWhatsApp() {
  return <FloatingWhatsApp />
}
