import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Heart, Award, Users, Clock, ArrowRight, Star, Calendar, Shield, Sparkles } from "lucide-react"
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
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-primary/5 via-background to-accent/5">
        <div className="absolute inset-0 bg-[url('/placeholder.svg?height=1080&width=1920')] bg-cover bg-center opacity-5" />

        <div className="container relative z-10 px-4 py-20 mx-auto">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
            {/* Left Content */}
            <div className="space-y-8 text-center lg:text-left">
              <Badge className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium bg-primary/10 text-primary border-primary/20">
                <Sparkles className="w-4 h-4" />
                Mumbai's Trusted Fertility Specialist
              </Badge>

              <div className="space-y-4">
                <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl text-balance">
                  From Fertility to <span className="text-primary">Fulfilment</span>
                </h1>
                <p className="text-xl text-muted-foreground max-w-2xl text-pretty">
                  Expert fertility care with personalized treatment plans, advanced technology, and compassionate
                  support throughout your journey to parenthood.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Button asChild size="lg" className="text-lg px-8 py-6 shadow-lg hover:shadow-xl transition-all">
                  <Link href="/contact">
                    Book Consultation
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="text-lg px-8 py-6 bg-transparent">
                  <Link href="/treatments">Explore Treatments</Link>
                </Button>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-6 pt-8 border-t">
                <div className="text-center lg:text-left">
                  <div className="text-3xl font-bold text-primary">15+</div>
                  <div className="text-sm text-muted-foreground">Years Experience</div>
                </div>
                <div className="text-center lg:text-left">
                  <div className="text-3xl font-bold text-primary">5000+</div>
                  <div className="text-sm text-muted-foreground">Happy Families</div>
                </div>
                <div className="text-center lg:text-left">
                  <div className="text-3xl font-bold text-primary">85%</div>
                  <div className="text-sm text-muted-foreground">Success Rate</div>
                </div>
              </div>
            </div>

            {/* Right Image */}
            <div className="relative">
              <div className="relative aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="/images/doctor-1.jpg"
                  alt="Dr. Vrushni Bhuta - Leading Fertility Specialist in Mumbai"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-xl shadow-xl max-w-xs">
                <div className="flex items-center gap-3">
                  <div className="flex -space-x-2">
                    {[1, 2, 3, 4].map((i) => (
                      <div key={i} className="w-10 h-10 rounded-full bg-primary/20 border-2 border-white" />
                    ))}
                  </div>
                  <div>
                    <div className="flex items-center gap-1">
                      {[1, 2, 3, 4, 5].map((i) => (
                        <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                      ))}
                    </div>
                    <p className="text-sm text-muted-foreground">5000+ Happy Patients</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-muted/30">
        <div className="container px-4 mx-auto">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
            <div className="relative order-2 lg:order-1">
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-xl">
                <Image
                  src="/images/doctor-2.jpg"
                  alt="Dr. Vrushni Bhuta providing personalized fertility consultation"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            <div className="space-y-6 order-1 lg:order-2">
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
                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center w-12 h-12 rounded-full bg-primary/10">
                      <Award className="w-6 h-6 text-primary" />
                    </div>
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">Expert Credentials</h3>
                    <p className="text-muted-foreground">
                      Fellowship in Reproductive Medicine, specialized training in advanced IVF techniques
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center w-12 h-12 rounded-full bg-primary/10">
                      <Heart className="w-6 h-6 text-primary" />
                    </div>
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">Compassionate Care</h3>
                    <p className="text-muted-foreground">
                      Personalized treatment plans tailored to your unique needs and circumstances
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center w-12 h-12 rounded-full bg-primary/10">
                      <Users className="w-6 h-6 text-primary" />
                    </div>
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">Proven Success</h3>
                    <p className="text-muted-foreground">Helped over 5000 couples achieve their dream of parenthood</p>
                  </div>
                </div>
              </div>

              <Button asChild size="lg" variant="outline" className="mt-6 bg-transparent">
                <Link href="/about">
                  Learn More About Dr. Bhuta
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Treatments Section */}
      <section className="py-20">
        <div className="container px-4 mx-auto">
          <div className="text-center space-y-4 mb-12">
            <Badge variant="outline" className="text-primary border-primary">
              Our Services
            </Badge>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl text-balance">
              Comprehensive Fertility Treatments
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
              Advanced reproductive solutions tailored to your unique journey
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "IVF Treatment",
                description: "Advanced in-vitro fertilization with high success rates and personalized protocols",
                icon: Heart,
                href: "/treatments/ivf",
              },
              {
                title: "IUI Treatment",
                description: "Intrauterine insemination for couples seeking less invasive fertility solutions",
                icon: Users,
                href: "/treatments/iui",
              },
              {
                title: "Egg Freezing",
                description: "Preserve your fertility for the future with advanced cryopreservation",
                icon: Clock,
                href: "/treatments/egg-freezing",
              },
              {
                title: "ICSI",
                description: "Intracytoplasmic sperm injection for male factor infertility",
                icon: Award,
                href: "/treatments",
              },
              {
                title: "Fertility Surgery",
                description: "Minimally invasive surgical solutions for reproductive health",
                icon: Shield,
                href: "/treatments",
              },
              {
                title: "Donor Programs",
                description: "Comprehensive egg and sperm donor programs with careful screening",
                icon: Heart,
                href: "/treatments",
              },
            ].map((treatment, index) => (
              <Card
                key={index}
                className="group hover:shadow-lg transition-all duration-300 border-2 hover:border-primary/50"
              >
                <CardContent className="p-6 space-y-4">
                  <div className="flex items-center justify-center w-14 h-14 rounded-full bg-primary/10 group-hover:bg-primary/20 transition-colors">
                    <treatment.icon className="w-7 h-7 text-primary" />
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-xl font-semibold">{treatment.title}</h3>
                    <p className="text-muted-foreground text-pretty">{treatment.description}</p>
                  </div>
                  <Button asChild variant="ghost" className="w-full group-hover:bg-primary/10">
                    <Link href={treatment.href}>
                      Learn More
                      <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button asChild size="lg">
              <Link href="/treatments">
                View All Treatments
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Excellence in Care Section */}
      <section className="py-20 bg-muted/30">
        <div className="container px-4 mx-auto">
          <div className="text-center space-y-4 mb-12">
            <Badge variant="outline" className="text-primary border-primary">
              Excellence in Care
            </Badge>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl text-balance">
              Why Choose Dr. Vrushni Bhuta
            </h2>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {[
              {
                icon: Award,
                title: "Expert Care",
                description: "15+ years of specialized experience in reproductive medicine",
              },
              {
                icon: Heart,
                title: "Personalized Approach",
                description: "Customized treatment plans for your unique situation",
              },
              {
                icon: Shield,
                title: "Advanced Technology",
                description: "State-of-the-art equipment and latest techniques",
              },
              {
                icon: Users,
                title: "Holistic Support",
                description: "Comprehensive care including emotional and psychological support",
              },
            ].map((feature, index) => (
              <Card key={index} className="text-center border-2">
                <CardContent className="p-6 space-y-4">
                  <div className="flex items-center justify-center w-16 h-16 mx-auto rounded-full bg-primary/10">
                    <feature.icon className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold">{feature.title}</h3>
                  <p className="text-muted-foreground text-pretty">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container px-4 mx-auto text-center">
          <div className="max-w-3xl mx-auto space-y-6">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl text-balance">
              Ready to Start Your Journey?
            </h2>
            <p className="text-lg text-primary-foreground/90 text-pretty">
              Schedule a consultation with Dr. Vrushni Bhuta and take the first step towards building your family.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <Button asChild size="lg" variant="secondary" className="text-lg px-8 py-6">
                <Link href="/contact">
                  <Calendar className="mr-2 h-5 w-5" />
                  Book Consultation
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="text-lg px-8 py-6 bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary"
              >
                <Link href="/treatments">View Treatments</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
