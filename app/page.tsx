import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { AnimatedSection, FadeIn, ScaleIn, SlideInLeft, SlideInRight } from "@/components/AnimatedSection"
import { Heart, Award, Users, ArrowRight, Star, Calendar, Sparkles } from "lucide-react"
import { InlineCallButton } from "@/components/InlineCallButton"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Best Fertility Clinic in Mumbai | IVF Specialist Powai & Santacruz - Dr Vrushni",
  description:
    "Dr Vrushni Bhuta - Mumbai's trusted IVF & fertility specialist with 15+ years experience. Expert in IVF, IUI, ICSI, egg freezing. 85% success rate. Clinics in Powai (Hiranandani Hospital) & Santacruz West (Surya Hospital). Book your consultation today.",
  keywords:
    "best fertility clinic Mumbai, top IVF doctor Mumbai, IVF specialist Powai, fertility treatment Santacruz, Dr Vrushni Bhuta reviews, IVF success rate Mumbai, egg freezing Mumbai cost, best infertility doctor Mumbai, IUI treatment Mumbai, ICSI specialist India",
  openGraph: {
    title: "Dr Vrushni Bhuta - Mumbai's #1 Fertility & IVF Specialist",
    description:
      "Award-winning fertility specialist with 5000+ successful treatments. Personalized IVF care with 85% success rate. Two convenient locations in Mumbai.",
    type: "website",
    locale: "en_IN",
    siteName: "Dr Vrushni Bhuta Fertility Clinic",
  },
}

export default function Home() {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "MedicalClinic",
        "@id": "https://drvrushni.com/#clinic",
        name: "Dr. Vrushni's Women's Care & Fertility Clinic",
        alternateName: "Dr Vrushni Fertility Clinic",
        description:
          "Premier fertility clinic and women's healthcare center in Mumbai specializing in IVF, IUI, ICSI, and comprehensive reproductive medicine with personalized, compassionate care.",
        url: "https://drvrushni.com",
        telephone: "+91-8591186575",
        email: "connect@drvrushni.com",
        image: [
          "https://drvrushni.com/images/doctor-purple-blazer-seated.jpg",
          "https://drvrushni.com/images/dr-vrushni-bhuta-logo.png",
        ],
        logo: "https://drvrushni.com/images/dr-vrushni-bhuta-logo.png",
        address: {
          "@type": "PostalAddress",
          streetAddress: "Surya Hospital, 201 & 202, 2nd Floor, Dilkhush CHS, Juhu Tara Road, Next To Shoppers Stop",
          addressLocality: "Santacruz West",
          addressRegion: "Mumbai, Maharashtra",
          postalCode: "400054",
          addressCountry: "IN",
        },
        geo: {
          "@type": "GeoCoordinates",
          latitude: "19.0896",
          longitude: "72.8295",
        },
        openingHoursSpecification: [
          {
            "@type": "OpeningHoursSpecification",
            dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
            opens: "09:00",
            closes: "18:00",
          },
          {
            "@type": "OpeningHoursSpecification",
            dayOfWeek: "Sunday",
            opens: "11:00",
            closes: "13:00",
          },
        ],
        priceRange: "₹₹₹",
        medicalSpecialty: [
          "Reproductive Medicine",
          "Gynecology",
          "Fertility Treatment",
          "IVF",
          "Reproductive Endocrinology",
        ],
        availableService: [
          {
            "@type": "MedicalProcedure",
            name: "IVF Treatment",
            description: "In Vitro Fertilization - Advanced assisted reproductive technology",
          },
          {
            "@type": "MedicalProcedure",
            name: "IUI Treatment",
            description: "Intrauterine Insemination for fertility treatment",
          },
          {
            "@type": "MedicalProcedure",
            name: "ICSI Treatment",
            description: "Intracytoplasmic Sperm Injection for male factor infertility",
          },
          {
            "@type": "MedicalProcedure",
            name: "Egg Freezing",
            description: "Oocyte cryopreservation for fertility preservation",
          },
        ],
        aggregateRating: {
          "@type": "AggregateRating",
          ratingValue: "4.9",
          reviewCount: "320",
          bestRating: "5",
          worstRating: "1",
        },
        paymentAccepted: "Cash, Credit Card, Debit Card, UPI, Net Banking",
        currenciesAccepted: "INR",
      },
      {
        "@type": "Physician",
        "@id": "https://drvrushni.com/#physician",
        name: "Dr. Vrushni Bhuta",
        honorificPrefix: "Dr.",
        givenName: "Vrushni",
        familyName: "Bhuta",
        jobTitle: "Fertility Specialist & Gynaecologist",
        description:
          "Experienced fertility specialist with over 15 years of expertise in IVF, IUI, ICSI, and comprehensive reproductive medicine. Fellowship in Reproductive Medicine from Homerton University London.",
        image: "https://drvrushni.com/images/doctor-purple-blazer-seated.jpg",
        medicalSpecialty: ["Reproductive Medicine", "Gynecology", "Fertility Treatment", "IVF", "ICSI"],
        knowsLanguage: ["English", "Hindi", "Gujarati"],
        hasCredential: [
          "MS OBGY",
          "Fellowship in Endoscopy (ICOG)",
          "M.R.M (Masters in Reproductive Medicine)",
          "Fellowship in Reproductive Medicine",
          "Certified in Personal Counselling",
        ],
        worksFor: {
          "@id": "https://drvrushni.com/#clinic",
        },
        alumniOf: [
          {
            "@type": "EducationalOrganization",
            name: "Homerton University London",
          },
        ],
        memberOf: [
          {
            "@type": "MedicalOrganization",
            name: "Dr LH Hiranandani Hospital",
          },
          {
            "@type": "MedicalOrganization",
            name: "Surya Hospital & Surya Fertility Clinics",
          },
        ],
      },
      {
        "@type": "WebSite",
        "@id": "https://drvrushni.com/#website",
        url: "https://drvrushni.com",
        name: "Dr. Vrushni Bhuta - Fertility Clinic Mumbai",
        description:
          "Leading fertility specialist in Mumbai offering IVF, IUI, ICSI, and comprehensive women's healthcare services with compassionate, personalized care.",
        publisher: {
          "@id": "https://drvrushni.com/#clinic",
        },
        potentialAction: {
          "@type": "SearchAction",
          target: {
            "@type": "EntryPoint",
            urlTemplate: "https://drvrushni.com/search?q={search_term_string}",
          },
          "query-input": "required name=search_term_string",
        },
      },
    ],
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
      <div className="flex flex-col min-h-screen">
        {/* Hero Section */}
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-purple-50 via-white to-orange-50 dark:from-purple-950/20 dark:via-background dark:to-orange-950/20">
          <div
            className="absolute inset-0 bg-gradient-to-br from-purple-500/5 via-transparent to-orange-500/5 animate-pulse"
            style={{ animationDuration: "8s" }}
          />
          <div className="absolute inset-0 bg-[url('/placeholder.svg?height=1080&width=1920')] bg-cover bg-center opacity-5" />

          <div className="container relative z-10 px-4 py-16 md:py-24 mx-auto">
            <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center max-w-7xl mx-auto">
              {/* Left Content - Text */}
              <AnimatedSection
                delay={0.1}
                className="space-y-6 md:space-y-8 text-center lg:text-left order-2 lg:order-1"
              >
                {/* Clinic Name */}
                <FadeIn delay={0.2}>
                  <div className="space-y-3">
                    <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl text-balance leading-tight">
                      <span className="bg-gradient-to-r from-purple-600 via-purple-500 to-orange-500 bg-clip-text text-transparent">
                        DR VRUSHNI'S WOMEN'S CARE & FERTILITY CLINIC
                      </span>
                    </h1>
                  </div>
                </FadeIn>

                {/* Tagline */}
                <FadeIn delay={0.3}>
                  <div className="space-y-3">
                    <div className="flex items-center justify-center lg:justify-start gap-3">
                      <div className="h-px w-12 md:w-16 bg-gradient-to-r from-transparent to-purple-400" />
                      <Sparkles className="w-5 h-5 md:w-6 md:h-6 text-purple-500" />
                      <div className="h-px w-12 md:w-16 bg-gradient-to-l from-transparent to-orange-400" />
                    </div>
                    <p className="text-2xl md:text-3xl lg:text-4xl font-light italic text-muted-foreground">
                      From Fertility to{" "}
                      <span className="bg-gradient-to-r from-purple-600 to-orange-500 bg-clip-text text-transparent font-semibold">
                        Fulfilment
                      </span>
                    </p>
                  </div>
                </FadeIn>

                {/* Main Description */}
                <FadeIn delay={0.4}>
                  <div className="space-y-6 max-w-2xl mx-auto lg:mx-0">
                    <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                      Where science meets soul, and every patient's journey is embraced with compassion, personalized
                      care & scientific precision.
                    </p>

                    <div className="bg-gradient-to-br from-purple-50/80 to-orange-50/80 dark:from-purple-950/30 dark:to-orange-950/30 p-6 rounded-2xl backdrop-blur-sm border border-purple-200/50 dark:border-purple-800/50">
                      <p className="text-base md:text-lg text-foreground leading-relaxed font-medium">
                        To give birth to her life purpose, Dr Vrushni Bhuta has created her soul space —
                        <span className="bg-gradient-to-r from-purple-600 to-orange-500 bg-clip-text text-transparent font-bold">
                          {" "}
                          Dr. Vrushni's Women's Care & Fertility Clinic
                        </span>
                      </p>
                    </div>

                    <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                      A serene space in the heart of{" "}
                      <span className="font-semibold text-foreground">Santacruz West, Mumbai</span> — created with the
                      vision of blending <span className="font-semibold text-foreground">medical excellence</span> with{" "}
                      <span className="font-semibold text-foreground">soulful care</span>.
                    </p>

                    <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                      Led by <span className="font-semibold text-foreground">Dr. Vrushni Bhuta</span>, a trusted{" "}
                      <span className="font-semibold text-foreground">fertility specialist in Mumbai</span>, our clinic
                      offers comprehensive <span className="font-semibold text-foreground">IVF treatment</span>,{" "}
                      <span className="font-semibold text-foreground">ICSI</span>, and advanced reproductive care. We
                      support women through every stage — from hormonal imbalance and fertility planning to pregnancy,
                      motherhood, and holistic wellness.
                    </p>

                    <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                      As a leading center for <span className="font-semibold text-foreground">IVF in Mumbai</span>, we
                      combine cutting-edge fertility treatments with compassionate, personalized care tailored to your
                      unique journey.
                    </p>

                    <div className="bg-gradient-to-br from-purple-100/50 to-orange-100/50 dark:from-purple-900/20 dark:to-orange-900/20 p-6 rounded-2xl backdrop-blur-sm border border-purple-300/50 dark:border-purple-700/50">
                      <p className="text-base md:text-lg text-foreground leading-relaxed italic">
                        Here, healing is not just physical — it's <span className="font-semibold">emotional</span>,{" "}
                        <span className="font-semibold">spiritual</span>, and leading to a{" "}
                        <span className="font-semibold bg-gradient-to-r from-purple-600 to-orange-500 bg-clip-text text-transparent">
                          fulfilling life
                        </span>
                        .
                      </p>
                    </div>
                  </div>
                </FadeIn>

                {/* CTA Buttons */}
                <FadeIn delay={0.5}>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-4">
                    <Button
                      asChild
                      size="lg"
                      className="text-base md:text-lg px-8 py-6 bg-gradient-to-r from-purple-600 to-orange-500 hover:from-purple-700 hover:to-orange-600 shadow-xl shadow-purple-500/30 hover:shadow-2xl hover:shadow-purple-500/40 transition-all hover:scale-105 w-full sm:w-auto"
                    >
                      <Link href="/contact">
                        Book Consultation
                        <ArrowRight className="ml-2 h-5 w-5" />
                      </Link>
                    </Button>
                    <InlineCallButton variant="secondary" className="w-full sm:w-auto" />
                    <Button
                      asChild
                      variant="outline"
                      size="lg"
                      className="text-base md:text-lg px-8 py-6 bg-white/50 dark:bg-background/50 backdrop-blur-sm border border-purple-300/50 dark:border-purple-700/50 hover:bg-purple-50 dark:hover:bg-purple-950/20 hover:border-purple-400 hover:scale-105 transition-all shadow-lg w-full sm:w-auto"
                    >
                      <Link href="/treatments">Explore Treatments</Link>
                    </Button>
                  </div>
                </FadeIn>

                {/* Stats */}
                <FadeIn delay={0.6}>
                  <div className="grid grid-cols-3 gap-6 pt-8 border-t border-purple-200/50 dark:border-purple-800/50">
                    {[
                      { value: "15+", label: "Years Experience" },
                      { value: "5000+", label: "Happy Families" },
                      { value: "85%", label: "Success Rate" },
                    ].map((stat, index) => (
                      <div
                        key={index}
                        className="text-center lg:text-left group hover:scale-110 transition-transform duration-300"
                      >
                        <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-purple-600 to-orange-500 bg-clip-text text-transparent">
                          {stat.value}
                        </div>
                        <div className="text-sm md:text-base text-muted-foreground mt-1">{stat.label}</div>
                      </div>
                    ))}
                  </div>
                </FadeIn>
              </AnimatedSection>

              {/* Right Image */}
              <ScaleIn delay={0.3} className="relative order-1 lg:order-2">
                <div className="relative aspect-[3/4] md:aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl max-w-md mx-auto lg:max-w-none hover:scale-105 hover:shadow-3xl hover:shadow-purple-500/30 transition-all duration-500 border-4 border-white/50 dark:border-purple-900/50">
                  <Image
                    src="/images/doctor-purple-blazer-seated.jpg"
                    alt="Dr. Vrushni Bhuta - Leading Fertility Specialist in Mumbai"
                    fill
                    className="object-cover"
                    priority
                  />
                </div>

                {/* Floating Badge - Top Right */}
                <FadeIn delay={1}>
                  <div className="absolute -top-4 -right-4 md:-top-6 md:-right-6 bg-white/90 dark:bg-background/90 backdrop-blur-xl p-4 md:p-6 rounded-xl shadow-2xl shadow-purple-500/20 max-w-[200px] md:max-w-xs hidden sm:block border border-purple-200/50 dark:border-purple-800/50 z-10">
                    <div className="flex items-center gap-2 md:gap-3">
                      <div className="flex -space-x-2">
                        {[1, 2, 3, 4].map((i) => (
                          <div
                            key={i}
                            className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-gradient-to-br from-purple-400 to-orange-400 border-2 border-white dark:border-background"
                          />
                        ))}
                      </div>
                      <div>
                        <div className="flex items-center gap-1">
                          {[1, 2, 3, 4, 5].map((i) => (
                            <Star key={i} className="w-3 h-3 md:w-4 md:h-4 fill-orange-400 text-orange-400" />
                          ))}
                        </div>
                        <p className="text-xs md:text-sm text-muted-foreground font-medium">5000+ Happy Patients</p>
                      </div>
                    </div>
                  </div>
                </FadeIn>

                {/* Floating Name Badge - Bottom Right */}
                <FadeIn delay={0.5}>
                  <div className="absolute -right-4 bottom-20 md:-right-6 md:bottom-24 lg:bottom-28 bg-white/95 dark:bg-background/95 backdrop-blur-xl p-4 md:p-6 rounded-xl shadow-2xl shadow-purple-500/20 max-w-[220px] md:max-w-xs border border-purple-200/50 dark:border-purple-800/50 z-10">
                    <h3 className="text-xl md:text-2xl font-bold bg-gradient-to-r from-purple-600 to-orange-500 bg-clip-text text-transparent">
                      Dr Vrushni Bhuta
                    </h3>
                    <p className="text-xs md:text-sm text-muted-foreground mt-1 font-medium">
                      Fertility Specialist & IVF Expert
                    </p>
                  </div>
                </FadeIn>
              </ScaleIn>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section className="py-12 md:py-20 bg-gradient-to-br from-purple-50/50 via-white to-orange-50/50 dark:from-purple-950/10 dark:via-background dark:to-orange-950/10">
          <div className="container px-4 mx-auto">
            <div className="grid gap-8 md:gap-12 lg:grid-cols-2 lg:gap-16 items-center">
              <SlideInLeft delay={0.2} className="relative order-2 lg:order-1">
                <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-xl max-w-md mx-auto lg:max-w-none hover:scale-105 transition-transform duration-500">
                  <Image
                    src="/images/doctor-coral-suit.jpg"
                    alt="Dr. Vrushni Bhuta providing personalized fertility consultation"
                    fill
                    className="object-cover"
                  />
                </div>
              </SlideInLeft>

              <SlideInRight className="space-y-4 md:space-y-6 order-1 lg:order-2">
                <div className="space-y-4">
                  <Badge
                    variant="outline"
                    className="text-purple-700 dark:text-purple-300 border-purple-300 dark:border-purple-700 bg-purple-50/50 dark:bg-purple-950/20 text-lg md:text-xl px-6 py-2 font-semibold"
                  >
                    About Dr. Vrushni Bhuta
                  </Badge>
                  <h2 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl text-balance leading-tight">
                    Your Trusted partner in the Journey to Parenthood
                  </h2>
                  <p className="text-lg text-muted-foreground text-pretty">
                    With over 15 years of specialized experience in reproductive medicine, Dr. Vrushni Bhuta combines
                    cutting-edge fertility treatments with compassionate, personalized care.
                  </p>
                </div>

                <div className="space-y-4">
                  {[
                    {
                      icon: Award,
                      title: "Expert Credentials",
                      description:
                        "Fellowship in Reproductive Medicine, with specialized training in Advanced IVF Techniques, and certified in Personal Counselling based on Robert R. Carkhuff's Helping Model.",
                    },
                    {
                      icon: Heart,
                      title: "Compassionate Care",
                      description: "Personalized treatment plans tailored to your unique needs and circumstances",
                    },
                    {
                      icon: Users,
                      title: "Proven Success",
                      description: "Helped over 5000 couples achieve their dream of parenthood",
                    },
                  ].map((item, index) => (
                    <AnimatedSection key={index} delay={0.1 + index * 0.1}>
                      <div className="flex gap-4">
                        <div className="flex-shrink-0">
                          <div className="flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 hover:scale-110 transition-transform duration-300">
                            <item.icon className="w-6 h-6 text-primary" />
                          </div>
                        </div>
                        <div>
                          <h3 className="font-semibold text-lg mb-1">{item.title}</h3>
                          <p className="text-muted-foreground">{item.description}</p>
                        </div>
                      </div>
                    </AnimatedSection>
                  ))}
                </div>

                <FadeIn delay={0.5}>
                  <Button
                    asChild
                    size="lg"
                    variant="outline"
                    className="mt-6 bg-transparent hover:scale-105 transition-transform"
                  >
                    <Link href="/about">
                      Learn More About Dr. Bhuta
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Link>
                  </Button>
                </FadeIn>
              </SlideInRight>
            </div>
          </div>
        </section>

        {/* Treatments Section */}
        <section className="py-12 md:py-20 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-transparent via-purple-50/30 to-transparent dark:via-purple-950/10 pointer-events-none" />

          <div className="container px-4 mx-auto relative z-10">
            <div className="max-w-6xl mx-auto">
              <Card className="border-4 border-purple-200/50 dark:border-purple-800/50 shadow-2xl shadow-purple-500/20 bg-gradient-to-br from-white via-purple-50/30 to-orange-50/30 dark:from-background dark:via-purple-950/10 dark:to-orange-950/10 backdrop-blur-sm overflow-hidden hover:shadow-3xl hover:shadow-purple-500/30 transition-all duration-500">
                <CardContent className="p-12 md:p-16 lg:p-24">
                  <div className="flex flex-col items-center justify-center space-y-8 md:space-y-10 lg:space-y-12">
                    {/* Large Logo */}
                    <FadeIn delay={0.2}>
                      <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-[28rem] lg:h-[28rem] rounded-3xl overflow-hidden shadow-2xl shadow-purple-500/30 ring-4 ring-purple-200/50 dark:ring-purple-800/50 hover:scale-105 hover:ring-purple-400/50 transition-all duration-500">
                        <Image
                          src="/images/dr-vrushni-bhuta-logo.png"
                          alt="Dr. Vrushni Bhuta - Women's Care & Fertility Clinic Logo"
                          fill
                          className="object-contain p-8 md:p-12 lg:p-16"
                          priority
                        />
                      </div>
                    </FadeIn>

                    {/* Clinic Name and Tagline */}
                    <FadeIn delay={0.4} className="text-center space-y-4 md:space-y-6">
                      <h3 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold bg-gradient-to-r from-purple-600 to-orange-500 bg-clip-text text-transparent">
                        Dr Vrushni's Women's Care & Fertility Clinic
                      </h3>
                      <p className="text-xl md:text-2xl lg:text-3xl text-muted-foreground italic font-light">
                        "From Fertility to Fulfilment"
                      </p>
                      <div className="flex items-center justify-center gap-3 pt-2">
                        <div className="h-px w-16 md:w-20 lg:w-24 bg-gradient-to-r from-transparent to-purple-400" />
                        <Sparkles className="w-6 h-6 md:w-7 md:h-7 lg:w-8 lg:h-8 text-purple-500" />
                        <div className="h-px w-16 md:w-20 lg:w-24 bg-gradient-to-l from-transparent to-orange-400" />
                      </div>
                    </FadeIn>

                    {/* Description */}
                    <FadeIn delay={0.6} className="text-center max-w-3xl">
                      <p className="text-lg md:text-xl lg:text-2xl text-muted-foreground text-pretty leading-relaxed">
                        Mumbai's premier destination for comprehensive women's healthcare and advanced fertility
                        treatments. Led by Dr. Vrushni Bhuta, we provide compassionate, personalized care with
                        cutting-edge technology to help you achieve your dreams of parenthood.
                      </p>
                    </FadeIn>

                    {/* CTA Button */}
                    <FadeIn delay={0.8}>
                      <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center pt-2 md:pt-4">
                        <Button
                          asChild
                          size="lg"
                          className="text-lg md:text-xl px-10 md:px-12 lg:px-16 py-7 md:py-8 bg-gradient-to-r from-purple-600 to-orange-500 hover:from-purple-700 hover:to-orange-600 shadow-xl shadow-purple-500/30 hover:shadow-2xl hover:shadow-purple-500/40 transition-all hover:scale-105"
                        >
                          <Link href="/contact">
                            Start Your Journey Today
                            <ArrowRight className="ml-2 h-6 w-6" />
                          </Link>
                        </Button>
                        <InlineCallButton
                          variant="secondary"
                          className="text-base md:text-lg px-8 py-6"
                          text="Or Call Us Now"
                        />
                      </div>
                    </FadeIn>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-12 md:py-20 bg-gradient-to-br from-purple-600 via-purple-700 to-orange-600 text-primary-foreground relative overflow-hidden">
          <div
            className="absolute inset-0 bg-gradient-to-br from-purple-500/50 via-transparent to-orange-500/50 animate-pulse"
            style={{ animationDuration: "6s" }}
          />

          <div className="container px-4 mx-auto text-center relative z-10">
            <AnimatedSection className="max-w-3xl mx-auto space-y-4 md:space-y-6">
              <h2 className="text-2xl font-bold tracking-tight sm:text-3xl md:text-4xl lg:text-5xl text-balance drop-shadow-lg">
                Ready to Start Your Journey?
              </h2>
              <p className="text-base md:text-lg text-primary-foreground/90 text-pretty px-4 drop-shadow">
                Schedule a consultation with Dr. Vrushni Bhuta and take the first step towards building your family.
              </p>
              <FadeIn delay={0.3}>
                <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center pt-2 md:pt-4">
                  <Button
                    asChild
                    size="lg"
                    variant="secondary"
                    className="text-base md:text-lg px-6 md:px-8 py-5 md:py-6 bg-white text-purple-700 hover:bg-white/90 hover:scale-105 transition-all shadow-2xl w-full sm:w-auto"
                  >
                    <Link href="/contact">
                      <Calendar className="mr-2 h-4 w-4 md:h-5 md:w-5" />
                      Book Consultation
                    </Link>
                  </Button>
                  <InlineCallButton
                    variant="outline"
                    className="text-base md:text-lg px-6 md:px-8 py-5 md:py-6 w-full sm:w-auto"
                  />
                  <Button
                    asChild
                    size="lg"
                    variant="outline"
                    className="text-base md:text-lg px-6 md:px-8 py-5 md:py-6 bg-transparent border-2 border-white text-white hover:bg-white hover:text-purple-700 hover:scale-105 transition-all shadow-xl w-full sm:w-auto"
                  >
                    <Link href="/treatments">View Treatments</Link>
                  </Button>
                </div>
              </FadeIn>
            </AnimatedSection>
          </div>
        </section>
      </div>
    </>
  )
}
