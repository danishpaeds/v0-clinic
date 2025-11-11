import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { AnimatedSection, AnimatedCard, FadeIn, ScaleIn, SlideInLeft, SlideInRight } from "@/components/AnimatedSection"
import {
  Heart,
  Award,
  Users,
  Clock,
  ArrowRight,
  Star,
  Calendar,
  Shield,
  Sparkles,
  Microscope,
  Baby,
  Stethoscope,
} from "lucide-react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Dr. Vrushni Bhuta - Leading IVF Specialist in Mumbai | Fertility Clinic Powai",
  description:
    "Dr. Vrushni Bhuta is Mumbai's trusted IVF specialist offering personalized fertility treatments in Powai and Santacruz. Expert in IVF, IUI, egg freezing, and advanced reproductive care with high success rates.",
  keywords:
    "IVF specialist Mumbai, fertility doctor Powai, best IVF clinic Mumbai, Dr Vrushni Bhuta, fertility treatment Santacruz, IVF success rates Mumbai, egg freezing Mumbai, fertility specialist India",
  openGraph: {
    title: "Dr. Vrushni Bhuta - Premier IVF & Fertility Specialist in Mumbai",
    description:
      "Experience world-class fertility care with Dr. Vrushni Bhuta. Personalized IVF treatments, high success rates, and compassionate care in Mumbai.",
    type: "website",
    locale: "en_IN",
    siteName: "Dr. Vrushni Bhuta Fertility Clinic",
  },
}

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-[80vh] md:min-h-[90vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-purple-50 via-white to-orange-50 dark:from-purple-950/20 dark:via-background dark:to-orange-950/20">
        <div
          className="absolute inset-0 bg-gradient-to-br from-purple-500/5 via-transparent to-orange-500/5 animate-pulse"
          style={{ animationDuration: "8s" }}
        />
        <div className="absolute inset-0 bg-[url('/placeholder.svg?height=1080&width=1920')] bg-cover bg-center opacity-5" />

        <div className="container relative z-10 px-4 py-12 md:py-20 mx-auto">
          <div className="grid gap-8 lg:grid-cols-2 lg:gap-16 items-center">
            {/* Left Content */}
            <AnimatedSection delay={0.1} className="space-y-6 md:space-8 text-center lg:text-left">
              <FadeIn delay={0.2}>
                <Badge className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium bg-gradient-to-r from-purple-500/10 to-orange-500/10 text-purple-700 dark:text-purple-300 border-purple-200 dark:border-purple-800 shadow-lg shadow-purple-500/20">
                  <Sparkles className="w-4 h-4" />
                  Mumbai's Trusted Fertility Specialist
                </Badge>
              </FadeIn>

              <AnimatedSection delay={0.3}>
                <div className="space-y-3 md:space-y-4">
                  <div className="space-y-2">
                    <p className="text-sm md:text-base font-medium text-purple-600 dark:text-purple-400 uppercase tracking-wider">
                      Welcome to
                    </p>
                    <h1 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-balance leading-tight">
                      Dr Vrushni's Women's Care & Fertility Clinic
                    </h1>
                    <p className="text-xl md:text-2xl lg:text-3xl font-light text-muted-foreground mt-4">
                      From Fertility to{" "}
                      <span className="bg-gradient-to-r from-purple-600 to-orange-500 bg-clip-text text-transparent font-semibold">
                        Fulfilment
                      </span>
                    </p>
                  </div>
                  {/* </CHANGE> */}
                  <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto lg:mx-0 leading-relaxed">
                    Expert fertility care with personalized treatment plans, advanced technology, and compassionate
                    support throughout your journey to parenthood.
                  </p>
                </div>
              </AnimatedSection>

              <AnimatedSection delay={0.5}>
                <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center lg:justify-start">
                  <Button
                    asChild
                    size="lg"
                    className="text-base md:text-lg px-6 md:px-8 py-5 md:py-6 bg-gradient-to-r from-purple-600 to-orange-500 hover:from-purple-700 hover:to-orange-600 shadow-xl shadow-purple-500/30 hover:shadow-2xl hover:shadow-purple-500/40 transition-all hover:scale-105 w-full sm:w-auto"
                  >
                    <Link href="/contact">
                      Book Consultation
                      <ArrowRight className="ml-2 h-4 w-4 md:h-5 md:w-5" />
                    </Link>
                  </Button>
                  <Button
                    asChild
                    variant="outline"
                    size="lg"
                    className="text-base md:text-lg px-6 md:px-8 py-5 md:py-6 bg-white/50 dark:bg-background/50 backdrop-blur-sm border-2 border-purple-200 dark:border-purple-800 hover:bg-purple-50 dark:hover:bg-purple-950/20 hover:border-purple-400 hover:scale-105 transition-all shadow-lg w-full sm:w-auto"
                  >
                    <Link href="/treatments">Explore Treatments</Link>
                  </Button>
                </div>
              </AnimatedSection>

              {/* Stats */}
              <FadeIn delay={0.7}>
                <div className="grid grid-cols-3 gap-4 md:gap-6 pt-6 md:pt-8 border-t border-purple-200/50 dark:border-purple-800/50">
                  {[
                    { value: "15+", label: "Years Experience" },
                    { value: "5000+", label: "Happy Families" },
                    { value: "85%", label: "Success Rate" },
                  ].map((stat, index) => (
                    <div
                      key={index}
                      className="text-center lg:text-left group hover:scale-110 transition-transform duration-300"
                    >
                      <div className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-purple-600 to-orange-500 bg-clip-text text-transparent">
                        {stat.value}
                      </div>
                      <div className="text-xs md:text-sm text-muted-foreground">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </FadeIn>
            </AnimatedSection>

            {/* Right Image */}
            <ScaleIn delay={0.3} className="relative order-first lg:order-last">
              <div className="relative aspect-[3/4] md:aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl max-w-md mx-auto lg:max-w-none hover:scale-105 hover:shadow-3xl hover:shadow-purple-500/30 transition-all duration-500 border-4 border-white/50 dark:border-purple-900/50">
                <Image
                  src="/images/doctor-purple-blazer-seated.jpg"
                  alt="Dr. Vrushni Bhuta - Leading Fertility Specialist in Mumbai"
                  fill
                  className="object-cover"
                  priority
                />
              </div>

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
                  className="text-purple-700 dark:text-purple-300 border-purple-300 dark:border-purple-700 bg-purple-50/50 dark:bg-purple-950/20"
                >
                  About Dr. Vrushni Bhuta
                </Badge>
                <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl text-balance">
                  Your Partner in the Journey to Parenthood
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
                    description: "Fellowship in Reproductive Medicine, specialized training in advanced IVF techniques",
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
          <AnimatedSection className="text-center space-y-3 md:space-y-4 mb-8 md:mb-12 drop-shadow-lg">
            <Badge
              variant="outline"
              className="text-purple-700 dark:text-purple-300 border-purple-300 dark:border-purple-700 bg-purple-50/50 dark:bg-purple-950/20"
            >
              Our Services
            </Badge>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl text-balance">
              Comprehensive{" "}
              <span className="bg-gradient-to-r from-purple-600 to-orange-500 bg-clip-text text-transparent">
                Fertility Treatments
              </span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty leading-relaxed">
              Advanced reproductive solutions tailored to your unique journey
            </p>
          </AnimatedSection>

          <div className="grid gap-4 md:gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "IVF Treatment",
                description: "Advanced in-vitro fertilization with high success rates and personalized protocols",
                icon: Microscope,
                href: "/treatments/ivf",
                gradient: "from-purple-500/10 via-purple-400/5 to-transparent",
                iconBg: "bg-gradient-to-br from-purple-500/20 to-purple-600/10",
                borderColor: "border-purple-200/50 hover:border-purple-400",
                shadowColor: "shadow-purple-500/10 hover:shadow-purple-500/30",
              },
              {
                title: "IUI Treatment",
                description: "Intrauterine insemination for couples seeking less invasive fertility solutions",
                icon: Stethoscope,
                href: "/treatments/iui",
                gradient: "from-blue-500/10 via-blue-400/5 to-transparent",
                iconBg: "bg-gradient-to-br from-blue-500/20 to-blue-600/10",
                borderColor: "border-blue-200/50 hover:border-blue-400",
                shadowColor: "shadow-blue-500/10 hover:shadow-blue-500/30",
              },
              {
                title: "Egg Freezing",
                description: "Preserve your fertility for the future with advanced cryopreservation",
                icon: Clock,
                href: "/treatments/egg-freezing",
                gradient: "from-pink-500/10 via-pink-400/5 to-transparent",
                iconBg: "bg-gradient-to-br from-pink-500/20 to-pink-600/10",
                borderColor: "border-pink-200/50 hover:border-pink-400",
                shadowColor: "shadow-pink-500/10 hover:shadow-pink-500/30",
              },
              {
                title: "ICSI",
                description: "Intracytoplasmic sperm injection for male factor infertility",
                icon: Award,
                href: "/treatments",
                gradient: "from-orange-500/10 via-orange-400/5 to-transparent",
                iconBg: "bg-gradient-to-br from-orange-500/20 to-orange-600/10",
                borderColor: "border-orange-200/50 hover:border-orange-400",
                shadowColor: "shadow-orange-500/10 hover:shadow-orange-500/30",
              },
              {
                title: "Fertility Surgery",
                description: "Minimally invasive surgical solutions for reproductive health",
                icon: Shield,
                href: "/treatments",
                gradient: "from-teal-500/10 via-teal-400/5 to-transparent",
                iconBg: "bg-gradient-to-br from-teal-500/20 to-teal-600/10",
                borderColor: "border-teal-200/50 hover:border-teal-400",
                shadowColor: "shadow-teal-500/10 hover:shadow-teal-500/30",
              },
              {
                title: "Donor Programs",
                description: "Comprehensive egg and sperm donor programs with careful screening",
                icon: Baby,
                href: "/treatments",
                gradient: "from-rose-500/10 via-rose-400/5 to-transparent",
                iconBg: "bg-gradient-to-br from-rose-500/20 to-rose-600/10",
                borderColor: "border-rose-200/50 hover:border-rose-400",
                shadowColor: "shadow-rose-500/10 hover:shadow-rose-500/30",
              },
            ].map((treatment, index) => (
              <AnimatedCard key={index} delay={index * 0.1}>
                <Card
                  className={`group h-full hover:shadow-2xl transition-all duration-500 border-2 ${treatment.borderColor} bg-gradient-to-br ${treatment.gradient} backdrop-blur-sm ${treatment.shadowColor} shadow-xl`}
                >
                  <CardContent className="p-4 md:p-6 space-y-3 md:space-y-4">
                    <div
                      className={`flex items-center justify-center w-12 h-12 md:w-14 md:h-14 rounded-full ${treatment.iconBg} group-hover:scale-110 group-hover:rotate-12 transition-all duration-300 shadow-lg`}
                    >
                      <treatment.icon className="w-6 h-6 md:w-7 md:h-7 text-primary" />
                    </div>
                    <div className="space-y-1 md:space-y-2">
                      <h3 className="text-lg md:text-xl font-semibold group-hover:text-primary transition-colors">
                        {treatment.title}
                      </h3>
                      <p className="text-sm md:text-base text-muted-foreground text-pretty">{treatment.description}</p>
                    </div>
                    <Button
                      asChild
                      variant="ghost"
                      className="w-full group-hover:bg-primary/10 transition-colors text-sm md:text-base"
                    >
                      <Link href={treatment.href}>
                        Learn More
                        <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              </AnimatedCard>
            ))}
          </div>

          <FadeIn delay={0.7} className="text-center mt-8 md:mt-12">
            <Button
              asChild
              size="lg"
              className="bg-gradient-to-r from-purple-600 to-orange-500 hover:from-purple-700 hover:to-orange-600 shadow-xl shadow-purple-500/30 hover:shadow-2xl hover:shadow-purple-500/40 hover:scale-105 transition-all w-full sm:w-auto"
            >
              <Link href="/treatments">
                View All Treatments
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </FadeIn>
        </div>
      </section>

      {/* Excellence in Care Section */}
      <section className="py-12 md:py-20 bg-gradient-to-br from-orange-50/50 via-white to-purple-50/50 dark:from-orange-950/10 dark:via-background dark:to-purple-950/10">
        <div className="container px-4 mx-auto">
          <AnimatedSection className="text-center space-y-4 mb-12">
            <Badge variant="outline" className="text-primary border-primary">
              Excellence in Care
            </Badge>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl text-balance">
              Why Choose Dr. Vrushni Bhuta
            </h2>
          </AnimatedSection>

          <div className="grid gap-4 md:gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                icon: Award,
                title: "Expert Care",
                description: "15+ years of specialized experience in reproductive medicine",
                gradient: "from-amber-500/10 to-transparent",
                iconBg: "bg-gradient-to-br from-amber-500/20 to-amber-600/10",
              },
              {
                icon: Heart,
                title: "Personalized Approach",
                description: "Customized treatment plans for your unique situation",
                gradient: "from-red-500/10 to-transparent",
                iconBg: "bg-gradient-to-br from-red-500/20 to-red-600/10",
              },
              {
                icon: Shield,
                title: "Advanced Technology",
                description: "State-of-the-art equipment and latest techniques",
                gradient: "from-indigo-500/10 to-transparent",
                iconBg: "bg-gradient-to-br from-indigo-500/20 to-indigo-600/10",
              },
              {
                icon: Users,
                title: "Holistic Support",
                description: "Comprehensive care including emotional and psychological support",
                gradient: "from-emerald-500/10 to-transparent",
                iconBg: "bg-gradient-to-br from-emerald-500/20 to-emerald-600/10",
              },
            ].map((feature, index) => (
              <AnimatedCard key={index} delay={index * 0.15}>
                <Card
                  className={`text-center border-2 h-full hover:shadow-xl transition-all duration-500 bg-gradient-to-br ${feature.gradient} backdrop-blur-sm`}
                >
                  <CardContent className="p-4 md:p-6 space-y-3 md:space-y-4">
                    <div
                      className={`flex items-center justify-center w-14 h-14 md:w-16 md:h-16 mx-auto rounded-full ${feature.iconBg} shadow-lg hover:scale-110 hover:rotate-12 transition-all duration-300`}
                    >
                      <feature.icon className="w-7 h-7 md:w-8 md:h-8 text-primary" />
                    </div>
                    <h3 className="text-lg md:text-xl font-semibold">{feature.title}</h3>
                    <p className="text-sm md:text-base text-muted-foreground text-pretty">{feature.description}</p>
                  </CardContent>
                </Card>
              </AnimatedCard>
            ))}
          </div>
        </div>
      </section>

      {/* Large Logo Card Section */}
      <section className="py-16 md:py-24 lg:py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-50 via-white to-orange-50 dark:from-purple-950/20 dark:via-background dark:to-orange-950/20" />

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
                  className="text-base md:text-lg px-6 md:px-8 py-5 md:py-6 bg-white text-purple-700 hover:bg-white/90 hover:scale-105 transition-all shadow-2xl shadow-black/20 w-full sm:w-auto"
                >
                  <Link href="/contact">
                    <Calendar className="mr-2 h-4 w-4 md:h-5 md:w-5" />
                    Book Consultation
                  </Link>
                </Button>
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
  )
}
