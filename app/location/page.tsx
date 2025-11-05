import type { Metadata } from "next"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { MapPin, Phone, Clock, Navigation, Train, Car, Building2 } from "lucide-react"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Location & Directions | Dr. Vrushni's Women's Care & Fertility Clinic Santacruz Mumbai",
  description:
    "Visit Dr. Vrushni's Women's Care & Fertility Clinic at Dilkhush CHS, Santacruz West, Mumbai. Get directions, parking info, and nearby landmarks. Best fertility clinic in Santacruz, Mumbai.",
  keywords:
    "fertility clinic santacruz mumbai, ivf center santacruz west, gynecologist santacruz, fertility doctor near me, santacruz fertility clinic location, women's care clinic mumbai, dr vrushni clinic address",
  openGraph: {
    title: "Location & Directions | Dr. Vrushni's Fertility Clinic Santacruz",
    description: "Visit us at Dilkhush CHS, Santacruz West, Mumbai. Easy access from Santacruz station.",
    type: "website",
  },
}

export default function LocationPage() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "MedicalClinic",
    name: "Dr. Vrushni's Women's Care & Fertility Clinic",
    image: "https://drvrushni.com/images/doctor-purple-suit.jpg",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Dilkhush CHS, 1st Floor, Unit No.4",
      addressLocality: "Santacruz West",
      addressRegion: "Mumbai",
      postalCode: "400054",
      addressCountry: "IN",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: "19.0760",
      longitude: "72.8777",
    },
    telephone: "+919820086575",
    email: "connect@drvrushni.com",
    url: "https://drvrushni.com",
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
    medicalSpecialty: ["Fertility Medicine", "Gynecology", "Reproductive Endocrinology"],
    areaServed: ["Santacruz", "Bandra", "Khar", "Vile Parle", "Andheri", "Mumbai"],
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />

      <div className="flex flex-col">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-[#47145a] to-[#5a1b71] text-white py-16 md:py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <span className="text-[#eb9142] font-bold text-sm tracking-wider uppercase">VISIT US</span>
              <h1 className="text-3xl md:text-5xl font-extrabold mt-4 mb-6">Find Us in Santacruz West, Mumbai</h1>
              <p className="text-lg md:text-xl text-gray-200">
                Conveniently located near Santacruz Railway Station with easy access from all parts of Mumbai
              </p>
            </div>
          </div>
        </section>

        {/* Map Section */}
        <section className="py-12 md:py-16 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
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
            </div>
          </div>
        </section>

        {/* Location Details */}
        <section className="py-12 md:py-20 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
                {/* Address & Contact */}
                <div className="space-y-6">
                  <h2 className="text-2xl md:text-3xl font-bold text-[#47145a] mb-6">Clinic Address</h2>

                  <Card className="border-2 border-[#47145a]/10">
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 rounded-full bg-[#eb9142]/10 flex items-center justify-center flex-shrink-0">
                          <MapPin className="w-6 h-6 text-[#eb9142]" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-[#47145a] mb-2">Main Clinic</h3>
                          <p className="text-gray-600 leading-relaxed">
                            Dilkhush CHS
                            <br />
                            1st Floor, Unit No.4
                            <br />
                            Santacruz (W), Mumbai - 400054
                            <br />
                            Maharashtra, India
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
                          <h3 className="font-semibold text-[#47145a] mb-2">Contact Numbers</h3>
                          <p className="text-gray-600">
                            <a href="tel:+919820086575" className="hover:text-[#eb9142] transition-colors block">
                              +91 9820086575
                            </a>
                            <a href="tel:+918591186575" className="hover:text-[#eb9142] transition-colors block">
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
                          <Clock className="w-6 h-6 text-[#eb9142]" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-[#47145a] mb-2">Clinic Timings</h3>
                          <p className="text-gray-600">
                            Monday - Saturday: 11:00 AM - 9:00 PM
                            <br />
                            Sunday: 11:00 AM - 1:00 PM
                            <br />
                            <span className="text-sm text-gray-500 mt-2 block">
                              (By appointment only - Please call ahead)
                            </span>
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <div className="pt-4">
                    <Link href="/contact">
                      <Button size="lg" className="w-full bg-[#eb9142] hover:bg-[#d67f35] text-white">
                        Book an Appointment
                      </Button>
                    </Link>
                  </div>
                </div>

                {/* Directions & Landmarks */}
                <div className="space-y-6">
                  <h2 className="text-2xl md:text-3xl font-bold text-[#47145a] mb-6">How to Reach Us</h2>

                  <Card className="border-2 border-[#47145a]/10">
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 rounded-full bg-purple-100 flex items-center justify-center flex-shrink-0">
                          <Train className="w-6 h-6 text-purple-600" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-[#47145a] mb-2">By Train</h3>
                          <p className="text-gray-600 text-sm leading-relaxed">
                            <strong>Santacruz Railway Station (Western Line)</strong>
                            <br />
                            Just 5 minutes walk from the station. Exit from the west side and head towards Linking Road.
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="border-2 border-[#47145a]/10">
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0">
                          <Car className="w-6 h-6 text-blue-600" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-[#47145a] mb-2">By Car/Taxi</h3>
                          <p className="text-gray-600 text-sm leading-relaxed">
                            <strong>From Bandra:</strong> 10 minutes via Linking Road
                            <br />
                            <strong>From Andheri:</strong> 15 minutes via Western Express Highway
                            <br />
                            <strong>Parking:</strong> Street parking available nearby
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="border-2 border-[#47145a]/10">
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0">
                          <Building2 className="w-6 h-6 text-green-600" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-[#47145a] mb-2">Nearby Landmarks</h3>
                          <ul className="text-gray-600 text-sm space-y-1">
                            <li>• Santacruz Railway Station (5 min walk)</li>
                            <li>• Linking Road (2 min walk)</li>
                            <li>• Santacruz Market (3 min walk)</li>
                            <li>• Juhu Beach (10 min drive)</li>
                          </ul>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="border-2 border-[#47145a]/10 bg-gradient-to-br from-purple-50 to-orange-50">
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 rounded-full bg-[#eb9142] flex items-center justify-center flex-shrink-0">
                          <Navigation className="w-6 h-6 text-white" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-[#47145a] mb-2">Get Directions</h3>
                          <p className="text-gray-600 text-sm mb-3">
                            Use Google Maps for turn-by-turn navigation to our clinic
                          </p>
                          <a
                            href="https://share.google/qmWr06NBop9DGiMcF"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-block"
                          >
                            <Button size="sm" className="bg-[#47145a] hover:bg-[#5a1b71] text-white">
                              Open in Google Maps
                            </Button>
                          </a>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Other Locations */}
        <section className="py-12 md:py-16 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-2xl md:text-3xl font-bold text-[#47145a] mb-8 text-center">
                Other Practice Locations
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <Card className="border-2 border-[#47145a]/10">
                  <CardContent className="p-6">
                    <h3 className="font-semibold text-[#47145a] mb-2">Dr LH Hiranandani Hospital</h3>
                    <p className="text-gray-600 text-sm">Powai, Mumbai</p>
                  </CardContent>
                </Card>
                <Card className="border-2 border-[#47145a]/10">
                  <CardContent className="p-6">
                    <h3 className="font-semibold text-[#47145a] mb-2">Surya Hospital & Fertility Clinics</h3>
                    <p className="text-gray-600 text-sm">Santacruz (W), Mumbai</p>
                  </CardContent>
                </Card>
                <Card className="border-2 border-[#47145a]/10">
                  <CardContent className="p-6">
                    <h3 className="font-semibold text-[#47145a] mb-2">VLSR - The Clinic</h3>
                    <p className="text-gray-600 text-sm">Khar West, Mumbai</p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* SEO Content */}
        <section className="py-12 md:py-16 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto prose prose-lg">
              <h2 className="text-2xl md:text-3xl font-bold text-[#47145a] mb-6">
                Premier Fertility Clinic in Santacruz West, Mumbai
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Dr. Vrushni's Women's Care & Fertility Clinic is strategically located in the heart of Santacruz West,
                making it easily accessible for patients from across Mumbai. Our state-of-the-art facility is just a
                short walk from Santacruz Railway Station, providing convenient access via the Western Line.
              </p>
              <p className="text-gray-600 leading-relaxed mb-4">
                Serving patients from Bandra, Khar, Vile Parle, Andheri, Juhu, and surrounding areas, our clinic offers
                comprehensive fertility treatments and women's healthcare services in a comfortable, modern setting. The
                Santacruz location provides easy connectivity for patients traveling from South Mumbai, Central Mumbai,
                and the Western Suburbs.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Whether you're seeking IVF treatment, fertility consultation, or gynecological care, our Santacruz
                clinic is equipped with the latest technology and staffed by experienced professionals dedicated to
                helping you achieve your family planning goals.
              </p>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}
