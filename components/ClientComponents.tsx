"use client"

import dynamic from "next/dynamic"

const FloatingWhatsApp = dynamic(
  () => import("@/components/FloatingWhatsApp").then((mod) => ({ default: mod.FloatingWhatsApp })),
  {
    ssr: false,
    loading: () => null,
  },
)

const FloatingCallButton = dynamic(
  () => import("@/components/FloatingCallButton").then((mod) => ({ default: mod.FloatingCallButton })),
  {
    ssr: false,
    loading: () => null,
  },
)

const ScrollPopup = dynamic(() => import("@/components/ScrollPopup").then((mod) => ({ default: mod.ScrollPopup })), {
  ssr: false,
  loading: () => null,
})

const ExitIntentPopup = dynamic(
  () => import("@/components/ExitIntentPopup").then((mod) => ({ default: mod.ExitIntentPopup })),
  {
    ssr: false,
    loading: () => null,
  },
)

export function ClientComponents() {
  return (
    <>
      <FloatingWhatsApp />
      <FloatingCallButton />
      <ScrollPopup />
      <ExitIntentPopup />
    </>
  )
}
