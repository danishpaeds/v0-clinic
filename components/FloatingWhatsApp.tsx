"use client"

import { MessageCircle } from "lucide-react"
import { useState, useEffect } from "react"

export function FloatingWhatsApp() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setMounted(true), 1500)
    return () => clearTimeout(timer)
  }, [])

  if (!mounted) return null

  const phoneNumber = "919820086575"
  const message = encodeURIComponent(
    "Hello, I would like to book a consultation at Dr. Vrushni's Women's Care & Fertility Clinic.",
  )
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-4 right-4 z-[60] flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366]/70 text-white shadow-lg backdrop-blur-md transition-all hover:scale-110 hover:bg-[#25D366]/90 hover:shadow-xl md:bottom-8 md:right-8 md:h-16 md:w-16 animate-in fade-in slide-in-from-bottom-4 duration-300 touch-manipulation"
      aria-label="Contact us on WhatsApp"
    >
      <MessageCircle className="h-7 w-7 md:h-8 md:w-8" />

      <span className="absolute inset-0 -z-10 animate-pulse rounded-full bg-[#25D366] opacity-20" />
    </a>
  )
}
