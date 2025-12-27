"use client"

import type React from "react"
import { useRouter } from "next/navigation"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { MapPin, Phone, Mail, Clock } from "lucide-react"
import { useState } from "react"
import { createClient } from "@/lib/supabase/client"

export default function ContactPage() {
  const router = useRouter()
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setError(null)

    try {
      const supabase = createClient()

      // Insert form data into Supabase
      const { error: submitError } = await supabase.from("contact_submissions").insert({
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        message: formData.message,
      })

      if (submitError) throw submitError

      // Redirect to thank you page on success
      router.push("/thank-you")
    } catch (err) {
      console.error("[v0] Contact form submission error:", err)
      setError("Failed to submit form. Please try again or call us directly.")
      setIsSubmitting(false)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "MedicalClinic",
    name: "Dr. Vrushni's Women's Care & Fertility Clinic",
    image: "https://drvrushni.com/images/doctor-purple-suit.jpg",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Dilkhush CHS, 1st Floor, Unit No.4",
      addressLocality: "Santacruz (W)",
      addressRegion: "Mumbai",
      postalCode: "400054",
      addressCountry: "IN",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: "19.0760",
      longitude: "72.8777",
    },
    telephone: "+918591186575",
    email: "connect@drvrushni.com",
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        opens: "11:00",
        closes: "21:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: "Sunday",
        opens: "11:00",
        closes: "13:00",
      },
    ],
    priceRange: "₹₹₹",
    medicalSpecialty: "Fertility Medicine",
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />

      <div className="flex flex-col">
        <section className="relative bg-gradient-to-br from-[#47145a] to-[#5a1b71] text-white py-12 sm:py-16 md:py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <span className="text-[#eb9142] font-bold text-xs sm:text-sm tracking-wider uppercase">GET IN TOUCH</span>
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mt-3 sm:mt-4 mb-4 sm:mb-6 leading-tight">
                We are here to guide and support you
              </h1>
              <p className="text-lg sm:text-xl text-gray-200 leading-relaxed">
                Please reach out to us by phone or email to schedule your appointment
              </p>
            </div>
          </div>
        </section>

        <section className="py-12 sm:py-16 md:py-20 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-12">
              {/* Contact Information */}
              <div className="space-y-8">
                <div>
                  <h2 className="text-3xl font-bold text-[#47145a] mb-8">Contact Information</h2>
                </div>

                <Card className="border-2 border-[#47145a]/10">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-full bg-[#eb9142]/10 flex items-center justify-center flex-shrink-0">
                        <MapPin className="w-6 h-6 text-[#eb9142]" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-[#47145a] mb-2">Address</h3>
                        <p className="text-gray-600">
                          Dilkhush CHS
                          <br />
                          1st Floor, Unit No.4
                          <br />
                          Santacruz (W), Mumbai - 400054
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-2 border-[#47145a]/10">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-full bg-[#eb9142]/10 flex items-center justify-center flex-shrink-0">
                        <Phone className="w-6 h-6 text-[#eb9142]" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-[#47145a] mb-2">Phone</h3>
                        <p className="text-gray-600">
                          <a href="tel:+918591186575" className="hover:text-[#eb9142] transition-colors">
                            +91 8591186575
                          </a>
                          <br />
                          <a href="tel:+918591186575" className="hover:text-[#eb9142] transition-colors">
                            +91 8591186575
                          </a>
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-2 border-[#47145a]/10">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-full bg-[#eb9142]/10 flex items-center justify-center flex-shrink-0">
                        <Mail className="w-6 h-6 text-[#eb9142]" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-[#47145a] mb-2">Email</h3>
                        <a
                          href="mailto:connect@drvrushni.com"
                          className="text-gray-600 hover:text-[#eb9142] transition-colors"
                        >
                          connect@drvrushni.com
                        </a>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-2 border-[#47145a]/10">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-full bg-[#eb9142]/10 flex items-center justify-center flex-shrink-0">
                        <Clock className="w-6 h-6 text-[#eb9142]" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-[#47145a] mb-2">Timings</h3>
                        <p className="text-gray-600">
                          Mon - Sat: 11am - 9pm
                          <br />
                          Sun: 11am - 1pm
                          <br />
                          <span className="text-sm text-gray-500">(With prior appointment)</span>
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Attachments/Other Locations */}
                <div>
                  <h3 className="font-semibold text-[#47145a] mb-4">Other Attachments</h3>
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex items-start">
                      <span className="text-[#eb9142] mr-2">•</span>
                      <span>Dr LH Hiranandani Hospital, Powai</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#eb9142] mr-2">•</span>
                      <span>Surya Hospital & Surya Fertility Clinics, Santacruz (W)</span>
                    </li>
                  </ul>
                  <p className="text-sm text-gray-500 mt-4">Registration No: 2009/02/0251</p>
                </div>
              </div>

              <div>
                <Card className="border-2 border-[#47145a]/10">
                  <CardContent className="p-6 sm:p-8">
                    <h2 className="text-xl sm:text-2xl font-bold text-[#47145a] mb-4 sm:mb-6">Send us a message</h2>
                    <form onSubmit={handleSubmit} className="space-y-5 sm:space-y-6">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                          Full Name *
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          required
                          value={formData.name}
                          onChange={handleChange}
                          className="w-full px-4 py-3.5 sm:py-3 text-base border border-gray-300 rounded-md focus:ring-2 focus:ring-[#eb9142] focus:border-transparent touch-manipulation"
                          placeholder="Enter your name"
                        />
                      </div>

                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                          Email Address *
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          required
                          value={formData.email}
                          onChange={handleChange}
                          className="w-full px-4 py-3.5 sm:py-3 text-base border border-gray-300 rounded-md focus:ring-2 focus:ring-[#eb9142] focus:border-transparent touch-manipulation"
                          placeholder="Enter your email"
                          inputMode="email"
                          autoComplete="email"
                        />
                      </div>

                      <div>
                        <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                          Phone Number *
                        </label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          required
                          value={formData.phone}
                          onChange={handleChange}
                          className="w-full px-4 py-3.5 sm:py-3 text-base border border-gray-300 rounded-md focus:ring-2 focus:ring-[#eb9142] focus:border-transparent touch-manipulation"
                          placeholder="Enter your phone number"
                          inputMode="tel"
                          autoComplete="tel"
                        />
                      </div>

                      <div>
                        <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                          Message *
                        </label>
                        <textarea
                          id="message"
                          name="message"
                          required
                          rows={5}
                          value={formData.message}
                          onChange={handleChange}
                          className="w-full px-4 py-3.5 sm:py-3 text-base border border-gray-300 rounded-md focus:ring-2 focus:ring-[#eb9142] focus:border-transparent resize-none touch-manipulation"
                          placeholder="Tell us how we can help you"
                        />
                      </div>

                      {error && (
                        <div className="p-4 bg-red-50 border border-red-200 rounded-md">
                          <p className="text-sm text-red-600">{error}</p>
                        </div>
                      )}

                      <Button
                        type="submit"
                        size="lg"
                        className="w-full bg-[#eb9142] hover:bg-[#d67f35] text-white text-base sm:text-lg font-bold min-h-[52px] touch-manipulation"
                        disabled={isSubmitting}
                      >
                        {isSubmitting ? "Sending..." : "Send Message"}
                      </Button>
                    </form>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold text-[#47145a] mb-8 text-center">Find Us on the Map</h2>
              <Card className="border-2 border-[#47145a]/10 overflow-hidden">
                <CardContent className="p-0">
                  <div className="aspect-video w-full">
                    <iframe
                      src="https://maps.google.com/maps?q=3RMQ%2B98%20Mumbai,%20Maharashtra,%20India&output=embed"
                      width="100%"
                      height="100%"
                      style={{ border: 0 }}
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      title="Dr. Vrushni's Women's Care & Fertility Clinic Location"
                    />
                  </div>
                </CardContent>
              </Card>
              <div className="text-center mt-6">
                <a
                  href="https://share.google/qmWr06NBop9DGiMcF"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block"
                >
                  <Button size="lg" className="bg-[#47145a] hover:bg-[#5a1b71] text-white">
                    <MapPin className="w-5 h-5 mr-2" />
                    Open in Google Maps
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}
