import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
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
import { AnimatedSection, AnimatedCard, FadeIn, ScaleIn } from "@/components/AnimatedSection"

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
      <section className="relative min-h-[80vh] md:min-h-[90vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-primary/5 via-background to-accent/5">
        <div className="absolute inset-0 bg-[url('/placeholder.svg?height=1080&width=1920')] bg-cover bg-center opacity-5" />

        <div className="container relative z-10 px-4 py-12 md:py-20 mx-auto">
          <div className="grid gap-8 lg:grid-cols-2 lg:gap-16 items-center">
            {/* Left Content */}
            <AnimatedSection className="space-y-6 md:space-y-8 text-center lg:text-left">
              <Badge className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium bg-primary/10 text-primary border-primary/20">
                <Sparkles className="w-4 h-4" />
                Mumbai's Trusted Fertility Specialist
              </Badge>

              <div className="space-y-3 md:space-y-4">
                <h1 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-balance leading-tight">
                  From Fertility to <span className="text-primary">Fulfilment</span>
                </h1>
                <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto lg:mx-0 text-pretty">
                  Expert fertility care with personalized treatment plans, advanced technology, and compassionate
                  support throughout your journey to parenthood.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center lg:justify-start">
                <Button
                  asChild
                  size="lg"
                  className="text-base md:text-lg px-6 md:px-8 py-5 md:py-6 shadow-lg hover:shadow-xl transition-all hover:scale-105 w-full sm:w-auto"
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
                  className="text-base md:text-lg px-6 md:px-8 py-5 md:py-6 bg-transparent hover:scale-105 transition-transform w-full sm:w-auto"
                >
                  <Link href="/treatments">Explore Treatments</Link>
                </Button>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-4 md:gap-6 pt-6 md:pt-8 border-t">
                {[
                  { value: "15+", label: "Years Experience" },
                  { value: "5000+", label: "Happy Families" },
                  { value: "85%", label: "Success Rate" },
                ].map((stat, index) => (
                  <FadeIn key={index} delay={0.2 + index * 0.1} className="text-center lg:text-left">
                    <div className="text-2xl md:text-3xl font-bold text-primary">{stat.value}</div>
                    <div className="text-xs md:text-sm text-muted-foreground">{stat.label}</div>
                  </FadeIn>
                ))}
              </div>
            </AnimatedSection>

            {/* Right Image */}
            <ScaleIn delay={0.3} className="relative order-first lg:order-last">
              <div className="relative aspect-[3/4] md:aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl max-w-md mx-auto lg:max-w-none">
                <Image
                  src="/images/doctor-purple-suit.jpg"
                  alt="Dr. Vrushni Bhuta - Leading Fertility Specialist in Mumbai"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
              <FadeIn
                delay={0.6}
                className="absolute -bottom-4 -right-4 md:-bottom-6 md:-right-6 bg-white p-4 md:p-6 rounded-xl shadow-xl max-w-[200px] md:max-w-xs hidden sm:block"
              >
                <div className="flex items-center gap-2 md:gap-3">
                  <div className="flex -space-x-2">
                    {[1, 2, 3, 4].map((i) => (
                      <div
                        key={i}
                        className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-primary/20 border-2 border-white"
                      />
                    ))}
                  </div>
                  <div>
                    <div className="flex items-center gap-1">
                      {[1, 2, 3, 4, 5].map((i) => (
                        <Star key={i} className="w-3 h-3 md:w-4 md:h-4 fill-primary text-primary" />
                      ))}
                    </div>
                    <p className="text-xs md:text-sm text-muted-foreground">5000+ Happy Patients</p>
                  </div>
                </div>
              </FadeIn>
            </ScaleIn>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-12 md:py-20 bg-muted/30">
        <div className="container px-4 mx-auto">
          <div className="grid gap-8 md:gap-12 lg:grid-cols-2 lg:gap-16 items-center">
            <AnimatedSection delay={0.2} className="relative order-2 lg:order-1">
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-xl max-w-md mx-auto lg:max-w-none">
                <Image
                  src="/images/doctor-coral-suit.jpg"
                  alt="Dr. Vrushni Bhuta providing personalized fertility consultation"
                  fill
                  className="object-cover"
                />
              </div>
            </AnimatedSection>

            <AnimatedSection className="space-y-4 md:space-y-6 order-1 lg:order-2">
              <div className="space-y-4">
                <Badge variant="outline" className="text-primary border-primary">
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
                  <FadeIn key={index} delay={0.1 + index * 0.1} className="flex gap-4">
                    <div className="flex-shrink-0">
                      <div className="flex items-center justify-center w-12 h-12 rounded-full bg-primary/10">
                        <item.icon className="w-6 h-6 text-primary" />
                      </div>
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-1">{item.title}</h3>
                      <p className="text-muted-foreground">{item.description}</p>
                    </div>
                  </FadeIn>
                ))}
              </div>

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
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Treatments Section */}
      <section className="py-12 md:py-20">
        <div className="container px-4 mx-auto">
          <AnimatedSection className="text-center space-y-3 md:space-y-4 mb-8 md:mb-12">
            <Badge variant="outline" className="text-primary border-primary">
              Our Services
            </Badge>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl text-balance">
              Comprehensive Fertility Treatments
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
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
                borderColor: "border-purple-200/50 hover:border-purple-400/50",
              },
              {
                title: "IUI Treatment",
                description: "Intrauterine insemination for couples seeking less invasive fertility solutions",
                icon: Stethoscope,
                href: "/treatments/iui",
                gradient: "from-blue-500/10 via-blue-400/5 to-transparent",
                iconBg: "bg-gradient-to-br from-blue-500/20 to-blue-600/10",
                borderColor: "border-blue-200/50 hover:border-blue-400/50",
              },
              {
                title: "Egg Freezing",
                description: "Preserve your fertility for the future with advanced cryopreservation",
                icon: Clock,
                href: "/treatments/egg-freezing",
                gradient: "from-pink-500/10 via-pink-400/5 to-transparent",
                iconBg: "bg-gradient-to-br from-pink-500/20 to-pink-600/10",
                borderColor: "border-pink-200/50 hover:border-pink-400/50",
              },
              {
                title: "ICSI",
                description: "Intracytoplasmic sperm injection for male factor infertility",
                icon: Award,
                href: "/treatments",
                gradient: "from-orange-500/10 via-orange-400/5 to-transparent",
                iconBg: "bg-gradient-to-br from-orange-500/20 to-orange-600/10",
                borderColor: "border-orange-200/50 hover:border-orange-400/50",
              },
              {
                title: "Fertility Surgery",
                description: "Minimally invasive surgical solutions for reproductive health",
                icon: Shield,
                href: "/treatments",
                gradient: "from-teal-500/10 via-teal-400/5 to-transparent",
                iconBg: "bg-gradient-to-br from-teal-500/20 to-teal-600/10",
                borderColor: "border-teal-200/50 hover:border-teal-400/50",
              },
              {
                title: "Donor Programs",
                description: "Comprehensive egg and sperm donor programs with careful screening",
                icon: Baby,
                href: "/treatments",
                gradient: "from-rose-500/10 via-rose-400/5 to-transparent",
                iconBg: "bg-gradient-to-br from-rose-500/20 to-rose-600/10",
                borderColor: "border-rose-200/50 hover:border-rose-400/50",
              },
            ].map((treatment, index) => (
              <AnimatedCard key={index} delay={index * 0.1}>
                <Card
                  className={`group h-full hover:shadow-2xl transition-all duration-500 border-2 ${treatment.borderColor} bg-gradient-to-br ${treatment.gradient} backdrop-blur-sm hover:scale-105`}
                >
                  <CardContent className="p-4 md:p-6 space-y-3 md:space-y-4">
                    <div
                      className={`flex items-center justify-center w-12 h-12 md:w-14 md:h-14 rounded-full ${treatment.iconBg} group-hover:scale-110 transition-all duration-300 shadow-lg`}
                    >
                      <treatment.icon className="w-6 h-6 md:w-7 md:h-7 text-primary" />
                    </div>
                    <div className="space-y-1 md:space-y-2">
                      <h3 className="text-lg md:text-xl font-semibold">{treatment.title}</h3>
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

          <AnimatedSection delay={0.4} className="text-center mt-8 md:mt-12">
            <Button asChild size="lg" className="hover:scale-105 transition-transform w-full sm:w-auto">
              <Link href="/treatments">
                View All Treatments
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </AnimatedSection>
        </div>
      </section>

      {/* Excellence in Care Section */}
      <section className="py-12 md:py-20 bg-muted/30">
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
              <AnimatedCard key={index} delay={index * 0.1}>
                <Card
                  className={`text-center border-2 h-full hover:shadow-xl transition-all duration-500 bg-gradient-to-br ${feature.gradient} backdrop-blur-sm hover:scale-105`}
                >
                  <CardContent className="p-4 md:p-6 space-y-3 md:space-y-4">
                    <div
                      className={`flex items-center justify-center w-14 h-14 md:w-16 md:h-16 mx-auto rounded-full ${feature.iconBg} shadow-lg`}
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

      {/* CTA Section */}
      <AnimatedSection>
        <section className="py-12 md:py-20 bg-primary text-primary-foreground">
          <div className="container px-4 mx-auto text-center">
            <div className="max-w-3xl mx-auto space-y-4 md:space-y-6">
              <h2 className="text-2xl font-bold tracking-tight sm:text-3xl md:text-4xl lg:text-5xl text-balance">
                Ready to Start Your Journey?
              </h2>
              <p className="text-base md:text-lg text-primary-foreground/90 text-pretty px-4">
                Schedule a consultation with Dr. Vrushni Bhuta and take the first step towards building your family.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center pt-2 md:pt-4">
                <Button
                  asChild
                  size="lg"
                  variant="secondary"
                  className="text-base md:text-lg px-6 md:px-8 py-5 md:py-6 hover:scale-105 transition-transform w-full sm:w-auto"
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
                  className="text-base md:text-lg px-6 md:px-8 py-5 md:py-6 bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary hover:scale-105 transition-all w-full sm:w-auto"
                >
                  <Link href="/treatments">View Treatments</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </AnimatedSection>
    </div>
  )
}
