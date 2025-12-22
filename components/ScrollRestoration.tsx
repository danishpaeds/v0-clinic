"use client"

import { useEffect } from "react"
import { usePathname } from "next/navigation"

export function ScrollRestoration() {
  const pathname = usePathname()

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "instant", // Use instant for immediate scroll
    })
  }, [pathname])

  return null
}
