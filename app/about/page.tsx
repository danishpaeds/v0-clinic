import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import {
  Award,
  Heart,
  Users,
  GraduationCap,
  Briefcase,
  Target,
  ArrowRight,
  Phone,
  CheckCircle2,
  Sparkles,
} from "lucide-react"
import Image from "next/image"

export const metadata = {
  title: "About Dr. Vrushni Bhuta - Leading Fertility Specialist in Mumbai | MS OBGY, MRM (UK)",
  description:
    "Meet Dr. Vrushni Bhuta, Mumbai's trusted fertility specialist with 10+ years experience in IVF, IUI, ICSI. MS OBGY, Fellowship ICOG, MRM (UK). Practicing at Hiranandani Hospital Powai, Surya Hospital Santacruz.",
  keywords:
    "Dr Vrushni Bhuta, fertility doctor Mumbai, IVF specialist Powai, gynecologist Santacruz, reproductive medicine Mumbai, fertility expert India, IVF doctor Hiranandani Hospital",
  openGraph: {
    title: "About Dr. Vrushni Bhuta - Leading Fertility Specialist Mumbai",
    description:
      "Board-certified fertility specialist with expertise in IVF, IUI, ICSI, and comprehensive reproductive medicine. Serving Mumbai for over a decade.",
    images: ["/images/doctor-purple-blazer-seated.jpg"],
  },
}

export default function AboutPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[#47145a] via-[#5a1b71] to-[#47145a] text-white py-24 overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 right-20 w-96 h-96 bg-[#eb9142] rounded-full opacity-10 blur-3xl"></div>
          <div className="absolute bottom-20 left-20 w-96 h-96 bg-pink-400 rounded-full opacity-10 blur-3xl"></div>
        </div>

        {/* Pattern overlay */}
        <div className="absolute inset-0 opacity-5">
          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <pattern id="pattern-about" x="0" y="0" width="60" height="60" patternUnits="userSpaceOnUse">
              <circle cx="30" cy="30" r="2" fill="white" />
            </pattern>
            <rect x="0" y="0" width="100%" height="100%" fill="url(#pattern-about)" />
          </svg>
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Image Side */}
            <div className="relative order-2 lg:order-1">
              <div className="absolute -inset-6 bg-gradient-to-br from-[#eb9142]/30 to-pink-400/30 rounded-[3rem] blur-3xl"></div>
              <div className="relative aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl">
                <Image
                  src="/images/doctor-purple-suit.jpg"
                  alt="Dr Vrushni Bhuta - Fertility Specialist"
                  fill
                  className="object-cover"
                  priority
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
              {/* Floating badge */}
              <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-2xl shadow-2xl">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#eb9142] to-[#d67f35] flex items-center justify-center">
                    <Award className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <p className="font-bold text-[#47145a] text-xl">10+ Years</p>
                    <p className="text-sm text-gray-600">Excellence</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Content Side */}
            <div className="space-y-6 order-1 lg:order-2">
              <div className="inline-block">
                <span className="text-[#eb9142] font-bold text-sm tracking-widest uppercase bg-white/10 px-6 py-3 rounded-full backdrop-blur-sm">
                  ABOUT DR VRUSHNI BHUTA  
                </span>
              </div>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight">
                Compassionate
                <span className="block text-[#eb9142] mt-2">Fertility Care</span>
              </h1>
              <div className="space-y-3">
                <p className="text-2xl md:text-3xl font-bold">Dr Vrushni Bhuta</p>
                <p className="text-lg md:text-xl text-[#eb9142] font-semibold">
                  MS OBGY, Fellowship in Endoscopy (ICOG), M.R.M (UK)
                </p>
                <p className="text-lg text-gray-200">Fertility Specialist & Gynaecologist</p>
              </div>
              <p className="text-xl text-gray-200 leading-relaxed">
                With over a decade of expertise in Assisted Reproductive Techniques, Dr Vrushni Bhuta transforms dreams
                of parenthood into reality through personalized, compassionate care.
              </p>
              <Button
                asChild
                size="lg"
                className="bg-[#eb9142] hover:bg-[#d67f35] text-white px-10 py-6 text-lg shadow-lg hover:shadow-xl"
              >
                <Link href="/contact">
                  <Phone className="w-5 h-5 mr-2" />
                  Book an Appointment
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Journey Section */}
      <section className="py-20 bg-gradient-to-b from-white via-[#fbf7f6] to-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <span className="text-[#eb9142] font-bold text-sm tracking-wider uppercase">THE JOURNEY</span>
            <h2 className="text-4xl md:text-5xl font-bold text-[#47145a] mt-4 mb-6">
              Empowering Your Parenthood Chapter
            </h2>
            <p className="text-xl text-gray-700 leading-relaxed">
              Every family's path to parenthood is unique. Dr Vrushni Bhuta believes in providing personalized care that
              honors your individual journey while leveraging the latest advances in reproductive medicine.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                number: "01",
                title: "Personalized Assessment",
                description:
                  "Comprehensive evaluation tailored to your unique fertility challenges and medical history.",
                icon: Users,
                gradient: "from-rose-100 to-pink-100",
                iconColor: "text-rose-600",
              },
              {
                number: "02",
                title: "Customized Treatment",
                description: "Evidence-based protocols combined with compassionate care for optimal outcomes.",
                icon: Heart,
                gradient: "from-purple-100 to-violet-100",
                iconColor: "text-[#47145a]",
              },
              {
                number: "03",
                title: "Ongoing Support",
                description: "Continuous monitoring and emotional support throughout your entire fertility journey.",
                icon: Sparkles,
                gradient: "from-amber-100 to-orange-100",
                iconColor: "text-[#eb9142]",
              },
            ].map((step, index) => (
              <Card
                key={index}
                className={`relative overflow-hidden border-2 border-gray-200 hover:border-[#eb9142] transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 bg-gradient-to-br ${step.gradient}`}
              >
                <div className="absolute top-0 right-0 text-8xl font-bold text-white/50 -mr-4 -mt-4">{step.number}</div>
                <CardContent className="p-8 relative z-10">
                  <div className="w-16 h-16 rounded-2xl bg-white shadow-lg flex items-center justify-center mb-6">
                    <step.icon className={`w-8 h-8 ${step.iconColor}`} />
                  </div>
                  <h3 className="text-2xl font-bold text-[#47145a] mb-4">{step.title}</h3>
                  <p className="text-gray-700 leading-relaxed">{step.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Commitment Section */}
      <section id="commitment" className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-[#eb9142] font-bold text-sm tracking-wider uppercase">CORE VALUES</span>
            <h2 className="text-4xl md:text-5xl font-bold text-[#47145a] mt-4 mb-6">Why Choose Dr Vrushni Bhuta?</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Experience compassionate care and dedicated support at every step, ensuring you feel informed, empowered,
              and fully supported.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <Card className="group relative overflow-hidden border-2 border-[#47145a]/10 hover:border-[#eb9142] transition-all duration-300 hover:shadow-2xl hover:-translate-y-2">
              <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-[#47145a] to-[#d67f35] opacity-0 group-hover:opacity-10 transition-opacity rounded-bl-full"></div>
              <CardContent className="p-8 relative z-10">
                <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-rose-100 to-pink-100 flex items-center justify-center mb-6">
                  <Target className="w-10 h-10 text-rose-600" />
                </div>
                <h3 className="text-2xl font-bold text-[#47145a] mb-4 group-hover:text-[#eb9142] transition-colors">
                  Mission
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Dr Bhuta's mission is to build a compassionate community that not only supports but also fosters an
                  empathetic and understanding environment. This community is designed to act as a sacred space where
                  both men and women facing fertility challenges can find solace, guidance, and hope.
                </p>
              </CardContent>
            </Card>

            <Card className="group relative overflow-hidden border-2 border-[#47145a]/10 hover:border-[#eb9142] transition-all duration-300 hover:shadow-2xl hover:-translate-y-2">
              <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-[#47145a] to-[#d67f35] opacity-0 group-hover:opacity-10 transition-opacity rounded-bl-full"></div>
              <CardContent className="p-8 relative z-10">
                <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-purple-100 to-violet-100 flex items-center justify-center mb-6">
                  <Heart className="w-10 h-10 text-[#47145a]" />
                </div>
                <h3 className="text-2xl font-bold text-[#47145a] mb-4 group-hover:text-[#eb9142] transition-colors">
                  Values
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Inspired by the verse from the Bhagwad Gita, "Karmanye Vadhikaraste, Ma Phaleshou Kada Chana, Ma Karma
                  Phala Hetur Bhurmatey Sangostva Akarmani," Dr Vrushni focuses on providing the best possible care,
                  maintaining patient confidentiality, and upholding ethical standards and integrity in her practice.
                </p>
              </CardContent>
            </Card>

            <Card className="group relative overflow-hidden border-2 border-[#47145a]/10 hover:border-[#eb9142] transition-all duration-300 hover:shadow-2xl hover:-translate-y-2">
              <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-[#47145a] to-[#d67f35] opacity-0 group-hover:opacity-10 transition-opacity rounded-bl-full"></div>
              <CardContent className="p-8 relative z-10">
                <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-amber-100 to-orange-100 flex items-center justify-center mb-6">
                  <Users className="w-10 h-10 text-[#eb9142]" />
                </div>
                <h3 className="text-2xl font-bold text-[#47145a] mb-4 group-hover:text-[#eb9142] transition-colors">
                  Belief
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Dr Vrushni believes that fertility is controlled by Mother Nature on a higher plane. She considers all
                  patients seeking treatment her soul families. With positive energy, advances in medical science and
                  technology, couples as well as individuals can bring new life into the world.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Large Logo Card Section */}
      <section className="py-0 bg-gradient-to-b from-white via-[#fbf7f6] to-white">
        <div className="container mx-auto px-0">
          <div className="max-w-full mx-auto">
            <Card className="relative overflow-hidden border-0 rounded-none hover:shadow-2xl group bg-gradient-to-br from-white via-purple-50/30 to-orange-50/30">
              {/* Decorative gradient background */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#47145a]/5 via-transparent to-[#eb9142]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

              <CardContent className="p-0">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 min-h-[600px] lg:min-h-[800px]">
                  {/* Left Side - Logo */}
                  <div className="flex items-center justify-center p-0 bg-gradient-to-br from-purple-50 to-white relative">
                    <div className="absolute inset-0 bg-gradient-to-br from-[#47145a]/5 to-[#eb9142]/5"></div>
                    <div className="relative z-10 w-full h-full flex items-center justify-center">
                      <div className="relative w-full h-full max-w-3xl max-h-3xl transform group-hover:scale-105 transition-all duration-500">
                        <Image
                          src="/images/dr-vrushni-bhuta-logo.png"
                          alt="Dr. Vrushni Bhuta Logo"
                          fill
                          className="object-contain p-8 lg:p-16"
                          priority
                        />
                      </div>
                    </div>
                  </div>

                  {/* Right Side - Content */}
                  <div className="flex flex-col items-center justify-center p-12 md:p-16 lg:p-24 text-center relative z-10">
                    {/* Clinic Name */}
                    <h3 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-6">
                      <span className="bg-gradient-to-r from-[#47145a] via-purple-600 to-[#eb9142] bg-clip-text text-transparent">
                        Dr Vrushni's Women's Care & Fertility Clinic
                      </span>
                    </h3>

                    {/* Tagline */}
                    <p className="text-2xl md:text-3xl lg:text-4xl font-semibold text-[#47145a] mb-8 italic">
                      From Fertility to Fulfilment
                    </p>

                    {/* Decorative separator */}
                    <div className="flex items-center justify-center gap-3 mb-8">
                      <div className="h-px w-20 md:w-24 bg-gradient-to-r from-transparent to-purple-400" />
                      <Sparkles className="w-7 h-7 md:w-8 md:h-8 text-purple-500" />
                      <div className="h-px w-20 md:w-24 bg-gradient-to-l from-transparent to-orange-400" />
                    </div>

                    {/* Description */}
                    <p className="text-xl md:text-2xl text-gray-700 leading-relaxed mb-10">
                      A sanctuary of hope, compassion, and advanced medical care where dreams of parenthood become
                      reality through personalized treatment and unwavering support.
                    </p>

                    {/* CTA Button */}
                    <Button
                      asChild
                      size="lg"
                      className="bg-gradient-to-r from-[#47145a] to-purple-700 hover:from-purple-700 hover:to-[#eb9142] text-white px-12 md:px-16 py-8 md:py-10 text-xl md:text-2xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
                    >
                      <Link href="/contact">
                        <Phone className="w-6 h-6 md:w-7 md:h-7 mr-3" />
                        Schedule Your Consultation
                      </Link>
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section
        id="experience"
        className="relative py-20 bg-gradient-to-br from-[#47145a] to-[#5a1b71] text-white overflow-hidden"
      >
        {/* Pattern overlay */}
        <div className="absolute inset-0 opacity-5">
          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <pattern id="pattern-exp" x="0" y="0" width="80" height="80" patternUnits="userSpaceOnUse">
              <circle cx="40" cy="40" r="3" fill="white" />
            </pattern>
            <rect x="0" y="0" width="100%" height="100%" fill="url(#pattern-exp)" />
          </svg>
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <span className="text-[#eb9142] font-bold text-sm tracking-wider uppercase">CREDENTIALS</span>
            <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6">Expertise You Can Trust</h2>
            <p className="text-xl text-gray-200 max-w-3xl mx-auto">
              Years of specialized training and continuous learning ensure the highest standard of care for your
              fertility journey.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto mb-12">
            <Card className="bg-white/10 backdrop-blur-sm border-2 border-white/20 hover:bg-white/15 transition-all duration-300 hover:shadow-2xl">
              <CardContent className="p-8">
                <div className="w-20 h-20 rounded-2xl bg-[#eb9142]/20 flex items-center justify-center mb-6">
                  <GraduationCap className="w-10 h-10 text-[#eb9142]" />
                </div>
                <h3 className="text-2xl font-bold mb-4">Training & Experience</h3>
                <p className="text-gray-200 leading-relaxed mb-4">
                  A decade of specialized experience in Assisted Reproductive Techniques, including IUI, IVF, ICSI,
                  frozen embryo transfers, oocyte donation, and surrogacy programs.
                </p>
                <ul className="space-y-2">
                  {["IUI & IVF Specialist", "ICSI Expert", "Embryo Transfer Procedures", "Comprehensive ART Care"].map(
                    (item, i) => (
                      <li key={i} className="flex items-center gap-2 text-gray-300">
                        <CheckCircle2 className="w-5 h-5 text-[#eb9142] flex-shrink-0" />
                        <span>{item}</span>
                      </li>
                    ),
                  )}
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-white/10 backdrop-blur-sm border-2 border-white/20 hover:bg-white/15 transition-all duration-300 hover:shadow-2xl">
              <CardContent className="p-8">
                <div className="w-20 h-20 rounded-2xl bg-[#eb9142]/20 flex items-center justify-center mb-6">
                  <Award className="w-10 h-10 text-[#eb9142]" />
                </div>
                <h3 className="text-2xl font-bold mb-4">Advanced Specialization</h3>
                <p className="text-gray-200 leading-relaxed mb-4">
                  Continuous professional development through training at prestigious institutions and completion of
                  advanced degrees in reproductive medicine.
                </p>
                <ul className="space-y-2">
                  {[
                    "M.R.M from Homerton University, London",
                    "Command Hospital (SC) - AFMC",
                    "Ruby Hall Clinic, Pune",
                    "Ongoing Medical Education",
                  ].map((item, i) => (
                    <li key={i} className="flex items-center gap-2 text-gray-300">
                      <CheckCircle2 className="w-5 h-5 text-[#eb9142] flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>

          {/* Professional Affiliations */}
          <div className="max-w-4xl mx-auto">
            <Card className="bg-white/10 backdrop-blur-sm border-2 border-white/20">
              <CardContent className="p-10">
                <div className="flex items-center justify-center gap-4 mb-8">
                  <div className="w-20 h-20 rounded-2xl bg-[#eb9142]/20 flex items-center justify-center">
                    <Briefcase className="w-10 h-10 text-[#eb9142]" />
                  </div>
                  <h3 className="text-3xl font-bold">Professional Affiliations</h3>
                </div>
                <p className="text-gray-200 leading-relaxed text-center mb-8 text-lg">
                  Associated with Mumbai's leading hospitals and fertility centers, ensuring access to world-class
                  facilities and comprehensive care.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {["Dr LH Hiranandani Hospital, Powai", "Surya Hospital & Surya Fertility Clinics, Santacruz (W)"].map(
                    (hospital, i) => (
                      <div key={i} className="bg-white/5 rounded-xl p-6 text-center border border-white/10">
                        <p className="text-white font-semibold">{hospital}</p>
                      </div>
                    ),
                  )}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-b from-white to-[#fbf7f6]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto bg-gradient-to-br from-[#47145a] to-[#5a1b71] rounded-3xl p-12 md:p-16 text-center text-white shadow-2xl relative overflow-hidden">
            {/* Decorative elements */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#eb9142] rounded-full opacity-20 blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-pink-400 rounded-full opacity-20 blur-3xl"></div>

            <div className="relative z-10">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Start Your Journey?</h2>
              <p className="text-xl text-gray-200 mb-10 max-w-2xl mx-auto leading-relaxed">
                Schedule a consultation with Dr Vrushni Bhuta and take the first step towards achieving your dream of
                becoming a parent.
              </p>
              <Button
                asChild
                size="lg"
                className="bg-white hover:bg-gray-100 px-12 py-6 text-lg font-semibold shadow-lg hover:shadow-xl hover:scale-105 transition-all"
              >
                <Link href="/contact" className="text-white">
                  Book an Appointment
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
