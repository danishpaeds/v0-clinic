import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Check, Phone, MessageCircle, Award, Clock, Heart, Shield, Star } from "lucide-react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "IVF Treatment Mumbai | 85% Success | Dr Vrushni Bhuta Powai Santacruz",
  description:
    "Best IVF clinic Mumbai with 85% success rate. Personalised IVF/ICSI treatment by Dr Vrushni Bhuta MS OBGY, MRM (UK). Hiranandani Hospital Powai & Santacruz West. Book consultation today.",
  keywords: [
    "IVF Mumbai",
    "IVF treatment Mumbai",
    "IVF doctor Powai",
    "IVF Santacruz",
    "IVF success rate Mumbai",
    "best IVF clinic Mumbai",
    "IVF specialist Mumbai",
    "ICSI Mumbai",
    "fertility specialist Mumbai",
    "Dr Vrushni Bhuta IVF",
  ],
  openGraph: {
    title: "IVF Treatment Mumbai | 85% Success | Dr Vrushni Bhuta",
    description: "Best IVF clinic Mumbai with 85% success rate. Expert IVF/ICSI treatment at Powai & Santacruz.",
    images: ["/images/doctor-purple-suit.jpg"],
    type: "website",
  },
}

export default function IVFLandingPage() {
  const phoneNumber = "919820086575"
  const whatsappMessage = encodeURIComponent(
    "Hello, I would like to book an IVF consultation at Dr. Vrushni's Fertility Clinic.",
  )

  return (
    <div className="flex flex-col">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "MedicalBusiness",
            name: "Dr Vrushni Bhuta Fertility Clinic",
            description:
              "Leading IVF and fertility clinic in Mumbai with 85% success rate. Personalized treatment by Dr Vrushni Bhuta MS OBGY, MRM (UK).",
            medicalSpecialty: ["Fertility Medicine", "IVF", "ICSI", "Reproductive Endocrinology"],
            address: [
              {
                "@type": "PostalAddress",
                streetAddress: "Dr LH Hiranandani Hospital",
                addressLocality: "Powai",
                addressRegion: "Mumbai, Maharashtra",
                addressCountry: "IN",
              },
              {
                "@type": "PostalAddress",
                streetAddress: "Dilkhush CHS, 1st Floor, Unit No.4",
                addressLocality: "Santacruz West",
                addressRegion: "Mumbai",
                postalCode: "400054",
                addressCountry: "IN",
              },
            ],
            telephone: "+918591186575",
            email: "connect@drvrushni.com",
            physician: {
              "@type": "Physician",
              name: "Dr. Vrushni Bhuta",
              medicalSpecialty: "Fertility Specialist & Gynaecologist",
              hasCredential: ["MS OBGY", "Fellowship in Endoscopy (ICOG)", "M.R.M (UK)"],
              alumniOf: "Homerton University, London",
            },
            aggregateRating: {
              "@type": "AggregateRating",
              ratingValue: "4.9",
              reviewCount: "150",
            },
            priceRange: "₹₹₹",
          }),
        }}
      />

      {/* Hero Section - Full viewport with gradient */}
      <section className="relative min-h-[85vh] bg-gradient-to-br from-[#47145a] via-[#66257B] to-[#eb9142] text-white overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-64 h-64 bg-white rounded-full blur-3xl" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#eb9142] rounded-full blur-3xl" />
        </div>

        <div className="container relative mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-block px-4 py-2 bg-white/10 backdrop-blur-md rounded-full text-[#eb9142] font-bold text-sm tracking-wider uppercase mb-6">
              MUMBAI'S TRUSTED FERTILITY CLINIC
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-6 leading-tight animate-fade-up">
              IVF Treatment in Mumbai
              <span className="block text-[#eb9142] mt-2">85% Success Rate</span>
            </h1>

            <p className="text-xl md:text-2xl text-gray-100 mb-8 leading-relaxed animate-fade-up">
              Personalised IVF at Dr Vrushni's boutique clinic in Powai & Santacruz West
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-12 animate-fade-up">
              {[
                "Custom protocols for your age & diagnosis",
                "Advanced ICSI, embryo testing, freezing",
                "Transparent costs & timelines from day 1",
              ].map((benefit, index) => (
                <div
                  key={index}
                  className="flex items-center justify-center gap-3 bg-white/10 backdrop-blur-md rounded-lg p-4"
                >
                  <Check className="w-5 h-5 text-[#eb9142] flex-shrink-0" />
                  <span className="text-sm font-medium text-left">{benefit}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-scale-in">
              <Button
                asChild
                size="lg"
                className="bg-[#eb9142] hover:bg-[#d67f35] text-white px-8 py-6 text-lg font-bold shadow-[0_0_30px_rgba(235,145,66,0.5)] hover:shadow-[0_0_50px_rgba(235,145,66,0.8)] hover:scale-105 transition-all duration-300 rounded-xl"
              >
                <Link href="/contact">
                  <Phone className="w-5 h-5 mr-2" />
                  Book Free IVF Consultation
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-2 border-white text-white hover:bg-white hover:text-[#47145a] px-8 py-6 text-lg font-bold rounded-xl transition-all duration-300 bg-transparent"
              >
                <a
                  href={`https://wa.me/${phoneNumber}?text=${whatsappMessage}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <MessageCircle className="w-5 h-5 mr-2" />
                  WhatsApp Us
                </a>
              </Button>
            </div>

            {/* Trust indicators */}
            <div className="mt-12 flex flex-wrap justify-center gap-6 text-sm text-gray-200">
              <div className="flex items-center gap-2">
                <Award className="w-4 h-4 text-[#eb9142]" />
                <span>15+ Years Experience</span>
              </div>
              <div className="flex items-center gap-2">
                <Star className="w-4 h-4 text-[#eb9142]" />
                <span>4.9/5 Patient Rating</span>
              </div>
              <div className="flex items-center gap-2">
                <Heart className="w-4 h-4 text-[#eb9142]" />
                <span>500+ Happy Families</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-[#47145a] mb-6 text-center">
              What Is IVF & When Should You Consider It?
            </h2>
            <div className="prose max-w-none text-gray-700 text-lg leading-relaxed space-y-6">
              <p>
                IVF (In Vitro Fertilisation) combines eggs and sperm in our advanced lab to create embryos transferred
                to your uterus. This cutting-edge treatment offers hope when natural conception hasn't been successful.
              </p>
              <p>
                IVF is recommended when tubes are blocked, sperm count is low, you have PCOS, previous IUI attempts have
                failed, or if you're over 35 and trying to conceive.
              </p>
            </div>

            <div className="mt-10">
              <h3 className="text-xl font-bold text-[#47145a] mb-6">IVF Is Recommended For:</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  "Blocked or damaged fallopian tubes",
                  "Male factor infertility (low sperm count/quality)",
                  "PCOS or ovulation disorders",
                  "Endometriosis affecting fertility",
                  "Unexplained infertility after 1+ years",
                  "Failed IUI attempts (3+ cycles)",
                  "Age-related fertility decline (35+)",
                  "Genetic disorder screening needed",
                ].map((indication, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-3 p-4 rounded-lg border-2 border-gray-100 hover:border-[#eb9142] transition-colors"
                  >
                    <Check className="w-5 h-5 text-[#eb9142] flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">{indication}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-b from-white to-[#fbf7f6]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-[#47145a] mb-4 text-center">Your IVF Journey</h2>
            <p className="text-center text-gray-600 mb-12 text-lg">
              A clear, step-by-step process designed around your unique needs
            </p>

            <div className="space-y-6">
              {[
                {
                  step: 1,
                  title: "Personalised Assessment",
                  description:
                    "Dr Vrushni reviews your complete medical history, test reports, and creates a customised IVF protocol based on your age, diagnosis, and fertility goals.",
                },
                {
                  step: 2,
                  title: "Ovarian Stimulation",
                  description:
                    "10-12 days of carefully monitored hormone injections to help your ovaries produce multiple mature eggs. Regular ultrasounds track follicle growth.",
                },
                {
                  step: 3,
                  title: "Egg Collection",
                  description:
                    "Quick 30-minute procedure under sedation using ultrasound guidance. You'll rest for a few hours and go home the same day with minimal discomfort.",
                },
                {
                  step: 4,
                  title: "Lab Fertilisation",
                  description:
                    "Eggs and sperm are combined in our advanced embryology lab. ICSI (direct sperm injection) is used if needed for better fertilisation rates.",
                },
                {
                  step: 5,
                  title: "Embryo Transfer",
                  description:
                    "Painless 5-minute procedure where the best quality embryo is gently placed in your uterus using a thin catheter. No anaesthesia needed.",
                },
                {
                  step: 6,
                  title: "Pregnancy Test",
                  description:
                    "Blood test 14 days after transfer reveals results. We support you every step with follow-up care whether trying again or celebrating success.",
                },
              ].map((item) => (
                <Card
                  key={item.step}
                  className="border-2 border-gray-100 hover:border-[#eb9142] hover:shadow-lg transition-all duration-300"
                >
                  <CardContent className="p-6 flex gap-6">
                    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#eb9142] text-white flex items-center justify-center font-bold text-lg shadow-lg">
                      {item.step}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-[#47145a] mb-2">{item.title}</h3>
                      <p className="text-gray-600 leading-relaxed">{item.description}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="mt-12 text-center">
              <Button
                asChild
                size="lg"
                className="bg-gradient-to-r from-[#47145a] to-[#eb9142] hover:opacity-90 text-white px-8 py-6 text-lg font-bold shadow-xl hover:scale-105 transition-all duration-300"
              >
                <Link href="/contact">
                  <Phone className="w-5 h-5 mr-2" />
                  Book Your IVF Consultation Now
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-[#47145a] mb-4 text-center">Our IVF Success Rates</h2>
            <p className="text-center text-gray-600 mb-12 text-lg">
              Transparent outcomes based on thousands of successful treatments
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
              <Card className="border-2 border-[#eb9142]/20 hover:border-[#eb9142] transition-all duration-300 hover:shadow-xl">
                <CardContent className="p-8 text-center">
                  <div className="text-5xl font-bold text-[#47145a] mb-2">40-50%</div>
                  <div className="text-gray-600 font-medium mb-4">Per Transfer</div>
                  <div className="text-lg font-bold text-[#eb9142]">Under 35 Years</div>
                  <p className="text-sm text-gray-500 mt-3">Highest success rates with optimal egg quality</p>
                </CardContent>
              </Card>

              <Card className="border-2 border-[#eb9142]/20 hover:border-[#eb9142] transition-all duration-300 hover:shadow-xl">
                <CardContent className="p-8 text-center">
                  <div className="text-5xl font-bold text-[#47145a] mb-2">30-40%</div>
                  <div className="text-gray-600 font-medium mb-4">Per Transfer</div>
                  <div className="text-lg font-bold text-[#eb9142]">35-40 Years</div>
                  <p className="text-sm text-gray-500 mt-3">Strong outcomes with personalised protocols</p>
                </CardContent>
              </Card>

              <Card className="border-2 border-[#47145a] bg-gradient-to-br from-[#47145a] to-[#66257B] text-white hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                <CardContent className="p-8 text-center">
                  <div className="text-5xl font-bold text-[#eb9142] mb-2">85%</div>
                  <div className="text-gray-100 font-medium mb-4">Cumulative</div>
                  <div className="text-lg font-bold text-white">Clinic Average</div>
                  <p className="text-sm text-gray-200 mt-3">With multiple attempts over treatment cycles</p>
                </CardContent>
              </Card>
            </div>

            {/* Age-based success table */}
            <Card className="border-2 border-gray-100">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-[#47145a] mb-4 text-center">Success Rates by Age Group</h3>
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b-2 border-gray-200">
                        <th className="text-left py-3 px-4 text-[#47145a] font-bold">Age Group</th>
                        <th className="text-center py-3 px-4 text-[#47145a] font-bold">Success Rate</th>
                        <th className="text-center py-3 px-4 text-[#47145a] font-bold">Live Birth Rate</th>
                      </tr>
                    </thead>
                    <tbody>
                      {[
                        { age: "Under 30", success: "45-55%", liveBirth: "40-50%" },
                        { age: "30-34", success: "40-50%", liveBirth: "35-45%" },
                        { age: "35-37", success: "35-40%", liveBirth: "30-38%" },
                        { age: "38-40", success: "25-35%", liveBirth: "22-32%" },
                        { age: "41-42", success: "15-25%", liveBirth: "12-20%" },
                        { age: "Over 42", success: "10-15%", liveBirth: "8-12%" },
                      ].map((row, index) => (
                        <tr key={index} className="border-b border-gray-100 hover:bg-[#fbf7f6]">
                          <td className="py-3 px-4 text-gray-700">{row.age}</td>
                          <td className="text-center py-3 px-4 text-[#eb9142] font-semibold">{row.success}</td>
                          <td className="text-center py-3 px-4 text-gray-700">{row.liveBirth}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <p className="text-sm text-gray-500 mt-4 text-center">
                  Success rates vary based on individual health factors, egg quality, sperm quality, and lifestyle.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-[#47145a] mb-4">Meet Your IVF Specialist</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Personalized fertility care from Mumbai's trusted specialist
              </p>
            </div>

            <Card className="border-2 border-[#47145a]/10 overflow-hidden">
              <CardContent className="p-0">
                <div className="grid grid-cols-1 lg:grid-cols-5 gap-0">
                  {/* Doctor Image */}
                  <div className="lg:col-span-2 relative h-80 lg:h-auto">
                    <img
                      src="/images/doctor-purple-suit.jpg"
                      alt="Dr Vrushni Bhuta - Fertility Specialist Mumbai"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-[#47145a] to-transparent p-6">
                      <img
                        src="/images/dr-vrushni-bhuta-logo.png"
                        alt="Dr Vrushni Bhuta Logo"
                        className="w-16 h-16 mb-2"
                      />
                    </div>
                  </div>

                  {/* Doctor Info */}
                  <div className="lg:col-span-3 p-8">
                    <div className="space-y-4">
                      <div>
                        <h3 className="text-2xl md:text-3xl font-bold text-[#47145a] mb-2">Dr Vrushni Bhuta</h3>
                        <p className="text-lg text-[#eb9142] font-semibold mb-1">
                          MS OBGY, Fellowship in Endoscopy (ICOG), M.R.M (UK)
                        </p>
                        <p className="text-gray-600">Fertility Specialist & Gynaecologist</p>
                        <p className="text-sm text-gray-500 mt-2">MMC Registration: 2009020251</p>
                      </div>

                      <div className="border-t border-gray-200 pt-4">
                        <p className="text-gray-700 leading-relaxed mb-4">
                          With over 15 years of specialized experience in Assisted Reproductive Techniques, Dr Vrushni
                          Bhuta has helped thousands of couples in Mumbai achieve their dream of parenthood through
                          personalized IVF treatment.
                        </p>
                        <p className="text-gray-700 leading-relaxed">
                          Trained at prestigious institutions including Homerton University London, Dr Vrushni combines
                          international expertise with compassionate care, offering evidence-based fertility solutions
                          tailored to each patient's unique needs.
                        </p>
                      </div>

                      <div className="border-t border-gray-200 pt-4">
                        <h4 className="font-semibold text-[#47145a] mb-3">Expertise:</h4>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                          {[
                            "IVF & ICSI Treatment",
                            "Egg Freezing",
                            "Embryo Transfer",
                            "Fertility Assessment",
                            "PCOS Management",
                            "Male Infertility Treatment",
                          ].map((expertise, index) => (
                            <div key={index} className="flex items-center gap-2">
                              <Check className="w-4 h-4 text-[#eb9142] flex-shrink-0" />
                              <span className="text-sm text-gray-700">{expertise}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div className="border-t border-gray-200 pt-4">
                        <h4 className="font-semibold text-[#47145a] mb-3">Practicing At:</h4>
                        <div className="space-y-2">
                          <div className="flex items-start gap-2">
                            <div className="w-2 h-2 rounded-full bg-[#eb9142] mt-2 flex-shrink-0" />
                            <div>
                              <p className="font-medium text-gray-800">Dr LH Hiranandani Hospital</p>
                              <p className="text-sm text-gray-600">Powai, Mumbai</p>
                            </div>
                          </div>
                          <div className="flex items-start gap-2">
                            <div className="w-2 h-2 rounded-full bg-[#eb9142] mt-2 flex-shrink-0" />
                            <div>
                              <p className="font-medium text-gray-800">Surya Hospital & Fertility Clinics</p>
                              <p className="text-sm text-gray-600">Santacruz West, Mumbai</p>
                            </div>
                          </div>
                          <div className="flex items-start gap-2">
                            <div className="w-2 h-2 rounded-full bg-[#eb9142] mt-2 flex-shrink-0" />
                            <div>
                              <p className="font-medium text-gray-800">Bookurdoc Nahar Business Centre</p>
                              <p className="text-sm text-gray-600">Chandivali, Powai, Mumbai</p>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="pt-4">
                        <Button asChild className="bg-[#eb9142] hover:bg-[#d67f35] text-white w-full sm:w-auto">
                          <Link href="/about">View Full Profile & Credentials</Link>
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-[#47145a] mb-4 text-center">
              Why Choose Dr Vrushni Bhuta's Clinic
            </h2>
            <p className="text-center text-gray-600 mb-12 text-lg">
              Personalised care that puts you first, every step of the way
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  icon: Heart,
                  title: "Doctor-Led Care",
                  description:
                    "Dr Vrushni personally oversees every case. No cookie-cutter protocols—your treatment is designed for you.",
                },
                {
                  icon: Award,
                  title: "2 Mumbai Locations",
                  description:
                    "Conveniently located in Powai and Santacruz West with modern facilities and easy access.",
                },
                {
                  icon: Shield,
                  title: "Full Fertility Spectrum",
                  description:
                    "From basic fertility testing to advanced IVF, ICSI, egg freezing, and genetic screening—all under one roof.",
                },
                {
                  icon: Clock,
                  title: "Private Appointments",
                  description:
                    "Dedicated time slots ensure Dr Vrushni gives you her complete attention without rushing.",
                },
                {
                  icon: Star,
                  title: "Transparent Pricing",
                  description:
                    "Clear cost breakdowns from day 1. No hidden fees. Payment plans available to make IVF accessible.",
                },
              ].map((feature, index) => (
                <Card
                  key={index}
                  className="border-2 border-gray-100 hover:border-[#eb9142] hover:shadow-xl transition-all duration-300 group"
                >
                  <CardContent className="p-6 text-center">
                    <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#47145a] to-[#eb9142] flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                      <feature.icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-[#47145a] mb-3">{feature.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-b from-white to-[#fbf7f6]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <Card className="border-2 border-[#47145a]/20 bg-gradient-to-r from-white to-[#fbf7f6]">
              <CardContent className="p-8">
                <div className="flex flex-col md:flex-row gap-6 items-center">
                  <div className="flex-shrink-0">
                    <div className="w-20 h-20 rounded-full bg-gradient-to-br from-[#47145a] to-[#eb9142] flex items-center justify-center">
                      <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                        />
                      </svg>
                    </div>
                  </div>
                  <div className="flex-1 text-center md:text-left">
                    <h3 className="text-2xl font-bold text-[#47145a] mb-2">Want to Learn More About IVF?</h3>
                    <p className="text-gray-600 mb-4">
                      Read our comprehensive guide written by Dr Vrushni Bhuta covering everything you need to know
                      about the IVF process, success rates, what to expect, and making informed decisions about your
                      fertility journey.
                    </p>
                    <Button
                      asChild
                      variant="outline"
                      className="border-2 border-[#47145a] text-[#47145a] hover:bg-[#47145a] hover:text-white bg-transparent"
                    >
                      <Link href="/blog/understanding-ivf-complete-guide">Read Complete IVF Guide →</Link>
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-[#47145a] via-[#66257B] to-[#5a1b71] text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 right-10 w-96 h-96 bg-[#eb9142] rounded-full blur-3xl" />
          <div className="absolute bottom-10 left-10 w-64 h-64 bg-white rounded-full blur-3xl" />
        </div>

        <div className="container relative mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-5xl font-extrabold mb-6">Ready to Start Your IVF Journey in Mumbai?</h2>
            <p className="text-xl text-gray-100 mb-8 leading-relaxed">
              Book a personalized IVF consultation with Dr Vrushni Bhuta at our Powai or Santacruz West clinic. Get
              clarity, honest advice, and a treatment plan designed specifically for you.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Button
                asChild
                size="lg"
                className="bg-[#eb9142] hover:bg-[#d67f35] text-white px-10 py-7 text-lg font-bold shadow-[0_0_30px_rgba(235,145,66,0.5)] hover:shadow-[0_0_50px_rgba(235,145,66,0.8)] hover:scale-105 transition-all duration-300"
              >
                <Link href="/contact">
                  <Phone className="w-6 h-6 mr-2" />
                  Book Free Consultation
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-2 border-white text-white hover:bg-white hover:text-[#47145a] px-10 py-7 text-lg font-bold transition-all duration-300 bg-transparent"
              >
                <a
                  href={`https://wa.me/${phoneNumber}?text=${whatsappMessage}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <MessageCircle className="w-6 h-6 mr-2" />
                  WhatsApp Us Now
                </a>
              </Button>
            </div>

            <Card className="border-2 border-white/20 bg-white/10 backdrop-blur-md">
              <CardContent className="p-6">
                <div className="flex items-start gap-3 text-left">
                  <Shield className="w-5 h-5 text-[#eb9142] flex-shrink-0 mt-1" />
                  <div className="text-sm text-gray-200 space-y-2">
                    <p>
                      <strong className="text-white">Medical Registration:</strong> MMC Registration - 2009020251 (Dr
                      Vrushni Bhuta)
                    </p>
                    <p>
                      <strong className="text-white">PCPNDT Compliance:</strong> We strictly adhere to the
                      Pre-Conception and Pre-Natal Diagnostic Techniques (PCPNDT) Act. We do not perform gender
                      determination, sex selection, or any services prohibited under Indian Medical Law.
                    </p>
                    <p>
                      <strong className="text-white">Disclaimer:</strong> IVF success rates vary based on individual
                      health factors including age, egg quality, sperm quality, medical history, and lifestyle. The
                      information provided is for educational purposes and does not guarantee specific outcomes. All
                      treatments are performed within the legal and ethical framework of Indian Medical Law.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="mt-8 flex flex-wrap justify-center gap-6 text-sm text-gray-300">
              <div className="flex items-center gap-2">
                <Award className="w-4 h-4 text-[#eb9142]" />
                <span>15+ Years Experience</span>
              </div>
              <div className="flex items-center gap-2">
                <Star className="w-4 h-4 text-[#eb9142]" />
                <span>2000+ Success Stories</span>
              </div>
              <div className="flex items-center gap-2">
                <Shield className="w-4 h-4 text-[#eb9142]" />
                <span>Ethical & Compliant</span>
              </div>
              <div className="flex items-center gap-2">
                <Heart className="w-4 h-4 text-[#eb9142]" />
                <span>Personalized Care</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
