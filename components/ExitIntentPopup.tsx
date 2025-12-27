"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { X, Phone, Calendar, MessageCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { createBrowserClient } from "@/lib/supabase/client"

export function ExitIntentPopup() {
  const [isVisible, setIsVisible] = useState(false)
  const [hasShown, setHasShown] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
  })

  useEffect(() => {
    // Check if popup has been shown in this session
    const shown = sessionStorage.getItem("exitIntentShown")
    if (shown) {
      setHasShown(true)
      return
    }

    // Detect exit intent (mouse leaving viewport)
    const isMobile = window.innerWidth < 768
    if (isMobile) {
      setHasShown(true)
      return
    }

    const handleMouseLeave = (e: MouseEvent) => {
      if (e.clientY <= 0 && !hasShown) {
        setIsVisible(true)
        setHasShown(true)
        sessionStorage.setItem("exitIntentShown", "true")
      }
    }

    document.addEventListener("mouseleave", handleMouseLeave)
    return () => document.removeEventListener("mouseleave", handleMouseLeave)
  }, [hasShown])

  useEffect(() => {
    if (isVisible) {
      const scrollY = window.scrollY
      document.body.style.position = "fixed"
      document.body.style.top = `-${scrollY}px`
      document.body.style.width = "100%"

      return () => {
        document.body.style.position = ""
        document.body.style.top = ""
        document.body.style.width = ""
        window.scrollTo(0, scrollY)
      }
    }
  }, [isVisible])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      const supabase = createBrowserClient()

      const { error } = await supabase.from("contact_submissions").insert([
        {
          name: formData.name,
          phone: formData.phone,
          email: formData.email,
          message: "Exit intent popup - Special offer requested",
          status: "new",
        },
      ])

      if (error) throw error

      // Close popup and redirect
      setIsVisible(false)
      window.location.href = "/thank-you"
    } catch (error) {
      console.error("Error submitting form:", error)
      alert("There was an error submitting your request. Please try calling us directly.")
    } finally {
      setIsSubmitting(false)
    }
  }

  if (!isVisible) return null

  return (
    <div
      className="fixed inset-0 z-[9999] flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm animate-in fade-in touch-manipulation"
      onClick={() => setIsVisible(false)}
      onTouchStart={() => setIsVisible(false)}
    >
      <div
        className="relative w-full max-w-2xl bg-white rounded-2xl shadow-2xl overflow-hidden animate-in slide-in-from-bottom-4 max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
        onTouchStart={(e) => e.stopPropagation()}
      >
        <button
          onClick={() => setIsVisible(false)}
          className="absolute top-3 right-3 sm:top-4 sm:right-4 z-10 w-11 h-11 sm:w-10 sm:h-10 flex items-center justify-center rounded-full bg-white/90 hover:bg-white text-gray-700 hover:text-gray-900 transition-all shadow-lg touch-manipulation"
          aria-label="Close"
        >
          <X className="w-6 h-6 sm:w-5 sm:h-5" />
        </button>

        <div className="grid md:grid-cols-2">
          {/* Left side - Offer */}
          <div className="bg-gradient-to-br from-[#47145a] via-[#66257B] to-[#eb9142] p-6 sm:p-8 text-white flex flex-col justify-center">
            <h2 className="text-2xl sm:text-3xl font-bold mb-3 sm:mb-4 leading-tight">Wait! Before You Go...</h2>
            <p className="text-base sm:text-lg mb-4 sm:mb-6 text-white/90">
              Get your FREE fertility consultation worth ₹2,000
            </p>

            <div className="space-y-3 sm:space-y-4">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1 text-sm sm:text-base">Free Consultation</h3>
                  <p className="text-xs sm:text-sm text-white/80">Personalized assessment with Dr. Vrushni</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0">
                  <Calendar className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1 text-sm sm:text-base">Priority Booking</h3>
                  <p className="text-xs sm:text-sm text-white/80">Get appointment within 48 hours</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0">
                  <MessageCircle className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1 text-sm sm:text-base">Expert Guidance</h3>
                  <p className="text-xs sm:text-sm text-white/80">15+ years of fertility expertise</p>
                </div>
              </div>
            </div>
          </div>

          <div className="p-6 sm:p-8 bg-gray-50">
            <h3 className="text-xl sm:text-2xl font-bold text-[#47145a] mb-2">Claim Your Offer</h3>
            <p className="text-gray-600 mb-4 sm:mb-6 text-sm">Limited slots available this month</p>

            <form onSubmit={handleSubmit} className="space-y-3 sm:space-y-4">
              <div>
                <label htmlFor="exit-name" className="block text-sm font-medium text-gray-700 mb-1.5 sm:mb-1">
                  Name <span className="text-red-500">*</span>
                </label>
                <Input
                  id="exit-name"
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                  placeholder="Your name"
                  className="border-gray-300 h-12 text-base"
                />
              </div>

              <div>
                <label htmlFor="exit-phone" className="block text-sm font-medium text-gray-700 mb-1.5 sm:mb-1">
                  Phone Number <span className="text-red-500">*</span>
                </label>
                <Input
                  id="exit-phone"
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  required
                  placeholder="Your phone number"
                  className="border-gray-300 h-12 text-base"
                  inputMode="tel"
                />
              </div>

              <div>
                <label htmlFor="exit-email" className="block text-sm font-medium text-gray-700 mb-1.5 sm:mb-1">
                  Email <span className="text-red-500">*</span>
                </label>
                <Input
                  id="exit-email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                  placeholder="your@email.com"
                  className="border-gray-300 h-12 text-base"
                  inputMode="email"
                />
              </div>

              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-[#47145a] to-[#eb9142] hover:opacity-90 text-white font-semibold py-6 touch-manipulation text-base"
              >
                {isSubmitting ? "Submitting..." : "Claim Free Consultation"}
              </Button>

              <p className="text-xs text-gray-500 text-center">
                By submitting, you agree to our{" "}
                <a href="/privacy-policy" className="text-[#47145a] underline">
                  Privacy Policy
                </a>
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}
