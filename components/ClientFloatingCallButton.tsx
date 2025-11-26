"use client"

import dynamic from "next/dynamic"

const FloatingCallButton = dynamic(
  () => import("@/components/FloatingCallButton").then((mod) => ({ default: mod.FloatingCallButton })),
  {
    loading: () => null,
    ssr: false,
  },
)

export function ClientFloatingCallButton() {
  return <FloatingCallButton />
}
