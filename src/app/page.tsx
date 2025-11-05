import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Phone, ArrowRight, Award, Star, Sparkles, ChevronRight } from "lucide-react"
import Image from "next/image"

export const metadata = {
  title: "Best IVF & Fertility Clinic in Mumbai | Dr. Vrushni Bhuta | 85% Success Rate",
  description:
    "Leading IVF and fertility clinic in Mumbai with 85% success rate. Dr. Vrushni Bhuta offers personalized IVF, IUI, ICSI, egg freezing treatments in Powai, Santacruz & Khar. Book consultation today.",
  keywords:
    "IVF Mumbai, fertility clinic Mumbai, best IVF doctor Mumbai, IVF treatment Powai, fertility specialist Santacruz, IUI Mumbai, ICSI treatment, egg freezing Mumbai, infertility treatment India",
  openGraph: {
    title: "Best IVF & Fertility Clinic in Mumbai | Dr. Vrushni Bhuta",
    description:
      "Transform your dream of parenthood into reality with Mumbai's leading fertility specialist. 85% success rate, 1000+ happy families, 10+ years of excellence.",
    images: ["/images/doctor-purple-suit.jpg"],
  },
}

export default function Home() {
  const treatments = [
    {
      title: "IVF Treatment",
      subtitle: "In Vitro Fertilisation",
      description: "Advanced reproductive technology combining eggs and sperm in our state-of-the-art laboratory",
      icon: "✨",
      href: "/treatments/ivf",
    },
    {
      title: "IUI Procedure",
      subtitle: "Intrauterine Insemination",
      description: "Minimally invasive procedure to maximize your chances of natural conception",
      icon: "💫",
      href: "/treatments/iui",
    },
    {
      title: "Egg Freezing",
      subtitle: "Fertility Preservation",
      description: "Preserve your fertility potential with our advanced cryopreservation technology",
      icon: "❄️",
      href: "/treatments/egg-freezing",
    },
  ]

  const stats = [
    { value: "1000+", label: "Dreams Fulfilled", sublabel: "Happy Families" },
    { value: "10+", label: "Years of Excellence", sublabel: "Dedicated Service" },
    { value: "85%", label: "Success Rate", sublabel: "Industry Leading" },
    { value: "24/7", label: "Patient Support", sublabel: "Always Available" },
  ]

  const expertise = [
    { title: "Personalized Protocols", description: "Tailored treatment plans designed for your unique journey" },
    { title: "Advanced Technology", description: "State-of-the-art laboratory and equipment" },
    { title: "Compassionate Care", description: "Emotional support throughout your fertility journey" },
    { title: "Proven Excellence", description: "Track record of successful outcomes" },
  ]

  return (
    <div className="flex flex-col">
      {/* Hero Section - Luxury Boutique Style */}
      <section className="relative min-h-screen bg-gradient-to-b from-white via-[#fdf9f8] to-white overflow-hidden">
        {/* Premium Pattern Background */}
        <div className="absolute inset-0 opacity-[0.03]">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `radial-gradient(circle at 20px 20px, #47145a 1px, transparent 1px),
                              radial-gradient(circle at 60px 60px, #eb9142 1px, transparent 1px)`,
              backgroundSize: "80px 80px",
            }}
          ></div>
        </div>

        {/* Luxury Gradient Orbs */}
        <div className="absolute top-20 right-10 w-[500px] h-[500px] bg-gradient-radial from-[#eb9142]/10 via-[#eb9142]/5 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute bottom-40 left-20 w-[400px] h-[400px] bg-gradient-radial from-[#47145a]/10 via-[#47145a]/5 to-transparent rounded-full blur-3xl"></div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-20 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center min-h-[calc(100vh-200px)]">
            {/* Left Content - Refined Typography */}
            <div className="space-y-8 order-2 lg:order-1">
              {/* Logo Badge */}
              <div className="flex items-center gap-6">
                <div className="w-20 h-20 relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-[#47145a] to-[#eb9142] rounded-full opacity-20 blur-xl"></div>
                  <div className="relative w-full h-full bg-white rounded-full flex items-center justify-center shadow-lg">
                    <div className="w-16 h-16 bg-gradient-to-br from-[#47145a] to-[#eb9142] rounded-full flex items-center justify-center">
                      <span className="text-white text-2xl font-light">VB</span>
                    </div>
                  </div>
                </div>
                <div className="h-px flex-1 bg-gradient-to-r from-[#47145a]/20 to-transparent"></div>
              </div>

              {/* Luxury Tag */}
              <div className="inline-block">
                <div className="flex items-center gap-2 text-[#eb9142] text-sm font-medium tracking-[0.3em] uppercase">
                  <Star className="w-4 h-4 fill-current" />
                  <span>Premier Fertility Specialist</span>
                  <Star className="w-4 h-4 fill-current" />
                </div>
              </div>

              {/* Main Heading - Elegant Typography */}
              <div className="space-y-4">
                <h1 className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-light text-[#47145a] leading-[0.9] tracking-tight">
                  From
                  <span className="block font-extralight italic text-[#eb9142] ml-12">Fertility</span>
                </h1>
                <div className="flex items-center gap-6">
                  <div className="h-[2px] w-20 bg-gradient-to-r from-[#47145a] to-[#eb9142]"></div>
                  <h2 className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-light text-[#47145a] leading-[0.9] tracking-tight">
                    to <span className="font-medium">Fulfilment</span>
                  </h2>
                </div>
              </div>

              {/* Refined Description */}
              <div className="space-y-4 max-w-xl">
                <p className="text-lg text-gray-700 leading-relaxed font-light">
                  Dr Vrushni Bhuta combines medical excellence with compassionate care, creating a sanctuary where
                  dreams of parenthood become reality.
                </p>
                <div className="flex items-center gap-3 text-sm text-gray-600">
                  <span className="font-medium text-[#47145a]">MS OBGY</span>
                  <span className="text-[#eb9142]">•</span>
                  <span className="font-medium text-[#47145a]">Fellowship ICOG</span>
                  <span className="text-[#eb9142]">•</span>
                  <span className="font-medium text-[#47145a]">M.R.M (UK)</span>
                </div>
              </div>

              {/* Premium CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 pt-6">
                <Button
                  asChild
                  size="lg"
                  className="group bg-[#47145a] hover:bg-[#5a1b71] text-white px-10 py-7 text-base font-light tracking-wide shadow-xl hover:shadow-2xl transition-all duration-300"
                >
                  <Link href="/contact">
                    <Phone className="w-5 h-5 mr-3 opacity-80" />
                    Begin Your Journey
                    <ChevronRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
                  </Link>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="group border-2 border-[#47145a]/20 text-[#47145a] hover:border-[#47145a] hover:bg-[#47145a]/5 px-10 py-7 text-base font-light tracking-wide transition-all duration-300 bg-transparent"
                >
                  <Link href="/treatments">
                    Explore Treatments
                    <Sparkles className="w-4 h-4 ml-3 opacity-60 group-hover:opacity-100" />
                  </Link>
                </Button>
              </div>

              {/* Trust Indicators - Luxury Style */}
              <div className="flex items-center gap-8 pt-8">
                <div className="flex -space-x-3">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <div
                      key={i}
                      className="w-12 h-12 rounded-full bg-gradient-to-br from-[#fdf9f8] to-white border-2 border-[#47145a]/10 shadow-md"
                    ></div>
                  ))}
                </div>
                <div className="text-sm space-y-1">
                  <p className="font-medium text-[#47145a]">Join 1000+ families</p>
                  <p className="text-gray-500 font-light">who found their happiness with us</p>
                </div>
              </div>
            </div>

            {/* Right Image - Premium Presentation */}
            <div className="relative order-1 lg:order-2">
              {/* Decorative Frame */}
              <div className="absolute -inset-4 bg-gradient-to-br from-[#47145a]/5 via-transparent to-[#eb9142]/5 rounded-[3rem] blur-2xl"></div>

              {/* Main Image Container */}
              <div className="relative">
                {/* Premium border effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#47145a] to-[#eb9142] rounded-[2.5rem] opacity-10"></div>

                <div className="relative aspect-[3/4] rounded-[2.5rem] overflow-hidden shadow-2xl border border-white/50">
                  <Image
                    src="/images/doctor-purple-suit.jpg"
                    alt="Dr Vrushni Bhuta - Premier Fertility Specialist"
                    fill
                    className="object-cover"
                    priority
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 600px"
                  />

                  {/* Elegant Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#47145a]/20 via-transparent to-transparent"></div>
                </div>

                {/* Floating Accolades */}
                <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-2xl shadow-2xl border border-[#47145a]/10">
                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 rounded-full bg-gradient-to-br from-[#eb9142] to-[#d67f35] flex items-center justify-center shadow-lg">
                      <Award className="w-7 h-7 text-white" />
                    </div>
                    <div>
                      <p className="font-medium text-[#47145a] text-lg">Excellence</p>
                      <p className="text-sm text-gray-500 font-light">10+ Years</p>
                    </div>
                  </div>
                </div>

                {/* Success Rate Badge */}
                <div className="absolute -top-4 -left-4 bg-white p-4 rounded-2xl shadow-xl border border-[#eb9142]/10">
                  <div className="text-center">
                    <p className="text-2xl font-light text-[#eb9142]">85%</p>
                    <p className="text-xs text-gray-600 font-light tracking-wide">SUCCESS</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section - Luxury Minimalist */}
      <section className="py-20 bg-gradient-to-b from-white via-[#fdf9f8] to-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 lg:gap-12">
            {stats.map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="relative inline-block mb-4">
                  <div className="absolute inset-0 bg-gradient-to-br from-[#eb9142]/20 to-[#47145a]/20 rounded-full blur-2xl group-hover:blur-3xl transition-all"></div>
                  <p className="relative text-4xl lg:text-5xl font-extralight text-[#47145a]">{stat.value}</p>
                </div>
                <p className="text-sm font-medium text-[#47145a] tracking-wider uppercase mb-1">{stat.label}</p>
                <p className="text-xs text-gray-500 font-light">{stat.sublabel}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Treatments - Boutique Cards */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-4 mb-6">
              <div className="h-px w-12 bg-gradient-to-r from-transparent to-[#47145a]/30"></div>
              <span className="text-[#eb9142] font-light text-sm tracking-[0.3em] uppercase">Signature Treatments</span>
              <div className="h-px w-12 bg-gradient-to-l from-transparent to-[#47145a]/30"></div>
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-light text-[#47145a]">
              Pathways to <span className="italic font-extralight">Parenthood</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {treatments.map((treatment, index) => (
              <Card
                key={index}
                className="group relative overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-500 bg-gradient-to-b from-white to-[#fdf9f8]"
              >
                {/* Luxury hover effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#47145a]/5 to-[#eb9142]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                <CardContent className="p-10 relative z-10">
                  {/* Icon */}
                  <div className="text-4xl mb-6">{treatment.icon}</div>

                  {/* Content */}
                  <h3 className="text-2xl font-light text-[#47145a] mb-2 group-hover:text-[#eb9142] transition-colors">
                    {treatment.title}
                  </h3>
                  <p className="text-sm text-[#eb9142] font-light tracking-wider uppercase mb-4">
                    {treatment.subtitle}
                  </p>
                  <p className="text-gray-600 font-light leading-relaxed mb-6">{treatment.description}</p>

                  {/* Link */}
                  <Link
                    href={treatment.href}
                    className="inline-flex items-center text-[#47145a] hover:text-[#eb9142] font-light transition-all group-hover:gap-4 gap-2"
                  >
                    <span className="tracking-wide">Discover More</span>
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-2" />
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-[#47145a]/20 text-[#47145a] hover:border-[#47145a] hover:bg-[#47145a]/5 px-12 py-6 font-light tracking-wide bg-transparent"
            >
              <Link href="/treatments">
                View All Treatments
                <ChevronRight className="w-4 h-4 ml-2" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* About Preview - Luxury Magazine Style */}
      <section className="py-24 bg-gradient-to-b from-white via-[#fdf9f8] to-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              {/* Image Side */}
              <div className="relative">
                <div className="absolute -inset-8 bg-gradient-to-br from-[#47145a]/10 to-[#eb9142]/10 rounded-[3rem] blur-3xl"></div>
                <div className="relative aspect-[4/5] rounded-[2rem] overflow-hidden shadow-2xl">
                  <Image
                    src="/images/doctor-coral-suit.jpg"
                    alt="Dr Vrushni Bhuta"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#47145a]/30 via-transparent to-transparent"></div>
                </div>
              </div>

              {/* Content Side */}
              <div className="space-y-8">
                <div className="inline-flex items-center gap-4">
                  <div className="h-px w-12 bg-gradient-to-r from-transparent to-[#eb9142]/30"></div>
                  <span className="text-[#eb9142] font-light text-sm tracking-[0.3em] uppercase">Meet Your Doctor</span>
                </div>

                <div className="space-y-4">
                  <h2 className="text-4xl md:text-5xl font-light text-[#47145a] leading-tight">
                    Dr Vrushni <span className="font-normal">Bhuta</span>
                  </h2>
                  <p className="text-lg text-[#eb9142] font-light">Fertility Specialist & Gynaecologist</p>
                </div>

                <div className="prose prose-lg max-w-none">
                  <p className="text-gray-700 font-light leading-relaxed">
                    With over a decade of expertise in Assisted Reproductive Techniques, Dr Vrushni Bhuta has
                    transformed countless dreams into reality. Her approach combines cutting-edge medical technology
                    with deeply personalized care, ensuring every patient receives treatment tailored to their unique
                    journey.
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-6">
                  {expertise.slice(0, 2).map((item, index) => (
                    <div key={index} className="space-y-2">
                      <h4 className="text-[#47145a] font-medium">{item.title}</h4>
                      <p className="text-sm text-gray-600 font-light">{item.description}</p>
                    </div>
                  ))}
                </div>

                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="border-[#47145a]/20 text-[#47145a] hover:border-[#47145a] hover:bg-[#47145a]/5 px-10 py-6 font-light tracking-wide bg-transparent"
                >
                  <Link href="/about">
                    Discover Her Story
                    <ArrowRight className="w-4 h-4 ml-3" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose - Luxury Grid */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-4 mb-6">
              <div className="h-px w-12 bg-gradient-to-r from-transparent to-[#47145a]/30"></div>
              <span className="text-[#eb9142] font-light text-sm tracking-[0.3em] uppercase">Why Choose</span>
              <div className="h-px w-12 bg-gradient-to-l from-transparent to-[#47145a]/30"></div>
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-light text-[#47145a]">
              Excellence in <span className="italic">Care</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {expertise.map((item, index) => (
              <div key={index} className="group">
                <div className="relative p-8 h-full">
                  {/* Number */}
                  <div className="absolute top-0 left-0 text-8xl font-extralight text-[#47145a]/5">
                    {(index + 1).toString().padStart(2, "0")}
                  </div>

                  <div className="relative z-10 space-y-4">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#eb9142]/20 to-[#47145a]/20 flex items-center justify-center">
                      <Sparkles className="w-6 h-6 text-[#47145a]" />
                    </div>
                    <h3 className="text-xl font-medium text-[#47145a]">{item.title}</h3>
                    <p className="text-gray-600 font-light text-sm leading-relaxed">{item.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section - Luxury Minimal */}
      <section className="py-24 bg-gradient-to-br from-[#47145a] via-[#5a1b71] to-[#47145a] relative overflow-hidden">
        {/* Elegant pattern */}
        <div className="absolute inset-0 opacity-10">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `radial-gradient(circle at 40px 40px, white 1px, transparent 1px)`,
              backgroundSize: "80px 80px",
            }}
          ></div>
        </div>

        {/* Gradient orbs */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#eb9142]/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-white/10 rounded-full blur-3xl"></div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-4 mb-8">
              <Star className="w-5 h-5 text-[#eb9142] fill-current" />
              <span className="text-white/80 font-light text-sm tracking-[0.3em] uppercase">Begin Today</span>
              <Star className="w-5 h-5 text-[#eb9142] fill-current" />
            </div>

            <h2 className="text-4xl md:text-5xl lg:text-6xl font-light text-white mb-6 leading-tight">
              Your Journey to
              <br />
              <span className="font-normal italic">Parenthood</span> Awaits
            </h2>

            <p className="text-xl text-white/80 mb-12 font-light max-w-2xl mx-auto leading-relaxed">
              Take the first step towards your dream with Mumbai's premier fertility specialist
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                asChild
                size="lg"
                className="bg-white text-[#47145a] hover:bg-gray-100 px-12 py-7 text-base font-light tracking-wide shadow-2xl hover:shadow-xl transition-all"
              >
                <Link href="/contact">
                  <Phone className="w-5 h-5 mr-3" />
                  Schedule Consultation
                  <ChevronRight className="w-4 h-4 ml-2" />
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="border-2 border-white/30 bg-white/10 text-white hover:bg-white/20 hover:border-white/50 px-12 py-7 text-base font-light tracking-wide backdrop-blur-sm transition-all"
              >
                <Link href="/treatments">
                  Explore Options
                  <Sparkles className="w-4 h-4 ml-3" />
                </Link>
              </Button>
            </div>

            {/* Trust badges */}
            <div className="flex items-center justify-center gap-8 mt-12 pt-12 border-t border-white/10">
              <div className="text-center">
                <p className="text-3xl font-light text-[#eb9142]">10+</p>
                <p className="text-xs text-white/60 font-light tracking-wider uppercase mt-1">Years Experience</p>
              </div>
              <div className="w-px h-12 bg-white/20"></div>
              <div className="text-center">
                <p className="text-3xl font-light text-[#eb9142]">1000+</p>
                <p className="text-xs text-white/60 font-light tracking-wider uppercase mt-1">Happy Families</p>
              </div>
              <div className="w-px h-12 bg-white/20"></div>
              <div className="text-center">
                <p className="text-3xl font-light text-[#eb9142]">85%</p>
                <p className="text-xs text-white/60 font-light tracking-wider uppercase mt-1">Success Rate</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
