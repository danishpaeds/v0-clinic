"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { createBrowserClient } from "@/lib/supabase/client"

export function ScrollPopup() {
  const [isVisible, setIsVisible] = useState(false)
  const [hasShown, setHasShown] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    acceptedPrivacy: false,
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [error, setError] = useState("")

  useEffect(() => {
    // Check if popup has been shown in this session
    const popupShown = sessionStorage.getItem("popupShown")
    if (popupShown) {
      setHasShown(true)
      return
    }

    let scrollTimer: NodeJS.Timeout | null = null
    let scrollStartTime: number | null = null

    const handleScroll = () => {
      if (hasShown) return

      // Start timer on first scroll
      if (!scrollStartTime) {
        scrollStartTime = Date.now()
      }

      // Clear existing timer
      if (scrollTimer) {
        clearTimeout(scrollTimer)
      }

      // Set new timer
      scrollTimer = setTimeout(() => {
        const scrollDuration = Date.now() - (scrollStartTime || 0)

        if (scrollDuration >= 5000 && !hasShown) {
          setIsVisible(true)
          setHasShown(true)
          sessionStorage.setItem("popupShown", "true")
        }
      }, 100)
    }

    window.addEventListener("scroll", handleScroll, { passive: true })

    return () => {
      window.removeEventListener("scroll", handleScroll)
      if (scrollTimer) clearTimeout(scrollTimer)
    }
  }, [hasShown])

  useEffect(() => {
    if (isVisible) {
      // Prevent body scroll when popup is open
      const scrollY = window.scrollY
      document.body.style.position = "fixed"
      document.body.style.top = `-${scrollY}px`
      document.body.style.width = "100%"

      return () => {
        // Restore scroll position
        document.body.style.position = ""
        document.body.style.top = ""
        document.body.style.width = ""
        window.scrollTo(0, scrollY)
      }
    }
  }, [isVisible])

  const handleClose = () => {
    setIsVisible(false)
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError("")

    if (!formData.acceptedPrivacy) {
      setError("Please accept the privacy policy to continue")
      return
    }

    setIsSubmitting(true)

    try {
      const supabase = createBrowserClient()

      const { error: dbError } = await supabase.from("contact_submissions").insert([
        {
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          message: "Popup form submission - Requested callback",
          status: "new",
        },
      ])

      if (dbError) throw dbError

      // Close popup and redirect to thank you page
      setIsVisible(false)
      window.location.href = "/thank-you"
    } catch (err) {
      console.error("Error submitting form:", err)
      setError("Failed to submit form. Please try again.")
      setIsSubmitting(false)
    }
  }

  if (!isVisible) return null

  return (
    <>
      <div
        className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[9998] animate-in fade-in duration-300"
        onClick={handleClose}
        onTouchStart={handleClose}
      />

      <div className="fixed inset-0 z-[9999] flex items-end sm:items-center justify-center p-0 sm:p-4 pointer-events-none">
        <div
          className="bg-gradient-to-br from-[#47145a] via-[#66257B] to-[#eb9142] rounded-t-3xl sm:rounded-2xl shadow-2xl w-full sm:max-w-md max-h-[90vh] overflow-y-auto p-6 sm:p-8 relative pointer-events-auto animate-in slide-in-from-bottom sm:zoom-in-95 duration-300"
          onClick={(e) => e.stopPropagation()}
          onTouchStart={(e) => e.stopPropagation()}
        >
          <button
            onClick={handleClose}
            className="absolute top-3 right-3 sm:top-4 sm:right-4 text-white/80 hover:text-white transition-colors p-2 sm:p-1 touch-manipulation"
            aria-label="Close popup"
          >
            <X className="w-7 h-7 sm:w-6 sm:h-6" />
          </button>

          {/* Header */}
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-2 sm:mb-3 text-center pr-8">Prefer to talk?</h2>

          {/* Description */}
          <p className="text-white/90 text-center mb-4 sm:mb-6 text-sm sm:text-base">
            We're here to help — no pressure, no judgment. Leave your details and we'll arrange a call at your
            convenience.
          </p>

          {/* Decorative line */}
          <div className="w-16 h-0.5 bg-[#eb9142] mx-auto mb-4 sm:mb-6" />

          <form onSubmit={handleSubmit} className="space-y-3 sm:space-y-4">
            {error && (
              <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded text-sm">{error}</div>
            )}

            <div>
              <label htmlFor="popup-name" className="block text-sm font-medium text-white mb-1.5 sm:mb-1">
                Name <span className="text-[#eb9142]">*</span>
              </label>
              <Input
                id="popup-name"
                type="text"
                placeholder="Name"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="bg-white/95 border-white/30 placeholder:text-gray-500 focus:ring-[#eb9142] focus:border-[#eb9142] h-12 text-base"
              />
            </div>

            <div>
              <label htmlFor="popup-phone" className="block text-sm font-medium text-white mb-1.5 sm:mb-1">
                Phone Number <span className="text-[#eb9142]">*</span>
              </label>
              <Input
                id="popup-phone"
                type="tel"
                placeholder="Phone Number"
                required
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                className="bg-white/95 border-white/30 placeholder:text-gray-500 focus:ring-[#eb9142] focus:border-[#eb9142] h-12 text-base"
                inputMode="tel"
              />
            </div>

            <div>
              <label htmlFor="popup-email" className="block text-sm font-medium text-white mb-1.5 sm:mb-1">
                Email <span className="text-[#eb9142]">*</span>
              </label>
              <Input
                id="popup-email"
                type="email"
                placeholder="Email"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="bg-white/95 border-white/30 placeholder:text-gray-500 focus:ring-[#eb9142] focus:border-[#eb9142] h-12 text-base"
                inputMode="email"
              />
            </div>

            <div className="flex items-start gap-3 sm:gap-2 py-2">
              <input
                type="checkbox"
                id="popup-privacy"
                checked={formData.acceptedPrivacy}
                onChange={(e) => setFormData({ ...formData, acceptedPrivacy: e.target.checked })}
                className="mt-1 w-5 h-5 sm:w-4 sm:h-4 text-[#eb9142] border-white/30 rounded focus:ring-[#eb9142] bg-white/95 flex-shrink-0 touch-manipulation"
              />
              <label htmlFor="popup-privacy" className="text-sm text-white/90 leading-relaxed">
                By providing the above details, I hereby agree and accept{" "}
                <a href="/privacy-policy" className="text-[#eb9142] underline hover:text-[#eb9142]/80 font-semibold">
                  Privacy Policy
                </a>{" "}
                in use of Dr Vrushni Bhuta Fertility Clinic. <span className="text-[#eb9142]">*</span>
              </label>
            </div>

            <Button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-white hover:bg-white/90 text-[#47145a] font-bold py-6 sm:py-6 rounded-lg transition-all hover:shadow-lg touch-manipulation text-base sm:text-base"
            >
              {isSubmitting ? "Submitting..." : "Submit"}
            </Button>
          </form>
        </div>
      </div>
    </>
  )
}
