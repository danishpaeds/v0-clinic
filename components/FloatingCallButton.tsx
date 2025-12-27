"use client"

import { Phone } from "lucide-react"
import { useState, useEffect } from "react"

export function FloatingCallButton() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setMounted(true), 1500)
    return () => clearTimeout(timer)
  }, [])

  if (!mounted) return null

  return (
    <div className="fixed bottom-4 left-4 z-[60] md:bottom-8 md:left-8 animate-in fade-in slide-in-from-bottom-4 duration-300">
      <a
        href="tel:+918591186575"
        className="group flex items-center justify-center bg-gradient-to-r from-[#47145a] to-[#eb9142] text-white w-14 h-14 md:w-14 md:h-14 rounded-full shadow-2xl hover:shadow-[0_0_30px_rgba(235,145,66,0.6)] transition-all duration-300 hover:scale-110 opacity-80 hover:opacity-95 backdrop-blur-md touch-manipulation"
        aria-label="Call Dr Vrushni Bhuta"
      >
        <div className="relative">
          <Phone className="w-6 h-6 md:w-6 md:h-6" />
          <span className="absolute -top-1 -right-1 w-2.5 h-2.5 md:w-2.5 md:h-2.5 bg-green-400 rounded-full animate-pulse" />
        </div>
      </a>
    </div>
  )
}
