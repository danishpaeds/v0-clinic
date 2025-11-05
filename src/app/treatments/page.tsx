import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight, Heart, Microscope, Snowflake, Users, Dna, Sparkles, Baby } from "lucide-react"
import Image from "next/image"

export const metadata = {
  title: "Fertility Treatments - IVF, ICSI, IUI & More | Dr Vrushni Bhuta",
  description:
    "Comprehensive range of fertility treatments including IVF, ICSI, IUI, egg freezing, surrogacy and more at Dr Vrushni's Women's Care & Fertility Clinic.",
}

export default function TreatmentsPage() {
  const treatmentCategories = [
    {
      category: "Foundation Treatments",
      icon: Heart,
      color: "from-rose-50 to-pink-50",
      borderColor: "border-rose-200",
      iconBg: "bg-rose-100",
      iconColor: "text-rose-600",
      treatments: [
        {
          title: "Pre-conceptional Counselling",
          description:
            "Comprehensive guidance and education with all necessary screening tests to ensure the healthiest outcomes for your journey to parenthood.",
          href: "/treatments/pre-conceptional-counselling",
        },
        {
          title: "Follicular Monitoring",
          description:
            "Series of painless ultrasounds performed at regular intervals to precisely assess the growth and development of ovarian follicles.",
          href: "/treatments/follicular-monitoring",
        },
      ],
    },
    {
      category: "Assisted Reproductive Techniques",
      icon: Microscope,
      color: "from-purple-50 to-violet-50",
      borderColor: "border-purple-200",
      iconBg: "bg-purple-100",
      iconColor: "text-[#47145a]",
      treatments: [
        {
          title: "IUI (Intrauterine Insemination)",
          description:
            "A minimally invasive procedure depositing processed semen in the upper uterine cavity around ovulation to maximize conception chances.",
          href: "/treatments/iui",
        },
        {
          title: "IVF (In Vitro Fertilisation)",
          description:
            "Advanced technique combining eggs and sperm in a controlled laboratory environment, offering hope when natural methods are unsuccessful.",
          href: "/treatments/ivf",
        },
        {
          title: "ICSI (Intracytoplasmic Sperm Injection)",
          description:
            "Precision technique injecting a single sperm directly into the egg using sophisticated micromanipulation equipment.",
          href: "/treatments/icsi",
        },
        {
          title: "Testicular Sperm Aspiration & Biopsy",
          description:
            "Specialized surgical techniques to retrieve sperm directly from the testicles for men with limited or no sperm in ejaculate.",
          href: "/treatments/testicular-sperm-aspiration",
        },
      ],
    },
    {
      category: "Fertility Preservation",
      icon: Snowflake,
      color: "from-sky-50 to-cyan-50",
      borderColor: "border-sky-200",
      iconBg: "bg-sky-100",
      iconColor: "text-sky-600",
      treatments: [
        {
          title: "Embryo Cryopreservation",
          description:
            "State-of-the-art freezing and storage of embryos for future use, ideal for preserving fertility before cancer treatment.",
          href: "/treatments/embryo-cryopreservation",
        },
        {
          title: "Oocyte or Egg Freezing",
          description:
            "Preserve your reproductive potential by freezing eggs at their highest quality for future family planning flexibility.",
          href: "/treatments/egg-freezing",
        },
        {
          title: "Sperm Cryopreservation",
          description:
            "Safe preservation of sperm for future use, particularly beneficial before medical treatments affecting fertility.",
          href: "/treatments/sperm-cryopreservation",
        },
      ],
    },
    {
      category: "Advanced Options",
      icon: Users,
      color: "from-amber-50 to-orange-50",
      borderColor: "border-amber-200",
      iconBg: "bg-amber-100",
      iconColor: "text-[#eb9142]",
      treatments: [
        {
          title: "Donor Oocyte Program",
          description:
            "When your eggs are not viable, carefully selected donor eggs offer an alternative path to experiencing pregnancy and childbirth.",
          href: "/treatments/donor-oocyte",
        },
        {
          title: "Surrogacy",
          description:
            "Compassionate surrogacy program where a gestational carrier helps bring your baby into the world.",
          href: "/treatments/surrogacy",
        },
      ],
    },
    {
      category: "Surgical Interventions",
      icon: Sparkles,
      color: "from-emerald-50 to-teal-50",
      borderColor: "border-emerald-200",
      iconBg: "bg-emerald-100",
      iconColor: "text-emerald-600",
      treatments: [
        {
          title: "Fertility Enhancing Surgery",
          description:
            "Advanced laparoscopy and hysteroscopy procedures to diagnose and treat conditions affecting female fertility.",
          href: "/treatments/fertility-surgery",
        },
        {
          title: "PRP of the Ovary",
          description:
            "Innovative platelet-rich plasma therapy to rejuvenate ovarian function and improve egg quality.",
          href: "/treatments/prp-ovary",
        },
        {
          title: "PRP of the Endometrium",
          description:
            "Cutting-edge PRP treatment to enhance endometrial thickness and receptivity for better implantation.",
          href: "/treatments/prp-endometrium",
        },
      ],
    },
    {
      category: "Genetic Testing",
      icon: Dna,
      color: "from-fuchsia-50 to-pink-50",
      borderColor: "border-fuchsia-200",
      iconBg: "bg-fuchsia-100",
      iconColor: "text-fuchsia-600",
      treatments: [
        {
          title: "Preimplantation Genetic Testing (PGT)",
          description:
            "Comprehensive genetic screening of embryos to identify the healthiest embryos for transfer, including PGT-A, PGT-M, and NICS.",
          href: "/treatments/pgt",
        },
      ],
    },
  ]

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[#47145a] via-[#5a1b71] to-[#47145a] text-white py-24 overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 right-20 w-64 h-64 bg-[#eb9142] rounded-full opacity-10 blur-3xl"></div>
          <div className="absolute bottom-20 left-20 w-96 h-96 bg-pink-400 rounded-full opacity-10 blur-3xl"></div>
        </div>

        {/* Pattern overlay */}
        <div className="absolute inset-0 opacity-5">
          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <pattern id="pattern-treatments" x="0" y="0" width="60" height="60" patternUnits="userSpaceOnUse">
              <circle cx="30" cy="30" r="2" fill="white" />
            </pattern>
            <rect x="0" y="0" width="100%" height="100%" fill="url(#pattern-treatments)" />
          </svg>
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-block mb-6">
                <span className="text-[#eb9142] font-bold text-sm tracking-widest uppercase bg-white/10 px-6 py-3 rounded-full backdrop-blur-sm">
                  COMPREHENSIVE FERTILITY SOLUTIONS
                </span>
              </div>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold mb-6 leading-tight">
                Our Wide Range of
                <span className="block text-[#eb9142] mt-2">Fertility Treatments</span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto leading-relaxed">
                From basic fertility assessments to advanced reproductive technologies, we offer personalized solutions
                for every stage of your journey
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12">
              <div className="text-center">
                <div className="text-4xl font-bold text-[#eb9142] mb-2">15+</div>
                <div className="text-sm text-gray-300">Treatment Options</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-[#eb9142] mb-2">85%</div>
                <div className="text-sm text-gray-300">Success Rate</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-[#eb9142] mb-2">10+</div>
                <div className="text-sm text-gray-300">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-[#eb9142] mb-2">1000+</div>
                <div className="text-sm text-gray-300">Happy Families</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Treatments by Category */}
      <section className="py-20 bg-gradient-to-b from-white via-[#fbf7f6] to-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-20">
            {treatmentCategories.map((category, categoryIndex) => (
              <div key={categoryIndex} className="relative">
                {/* Category Header */}
                <div className="flex items-center gap-4 mb-8">
                  <div className={`${category.iconBg} p-4 rounded-2xl`}>
                    <category.icon className={`w-8 h-8 ${category.iconColor}`} />
                  </div>
                  <div>
                    <h2 className="text-3xl md:text-4xl font-bold text-[#47145a]">{category.category}</h2>
                    <div className="h-1 w-20 bg-gradient-to-r from-[#eb9142] to-[#d67f35] rounded-full mt-2"></div>
                  </div>
                </div>

                {/* Treatments Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {category.treatments.map((treatment, treatmentIndex) => (
                    <Card
                      key={treatmentIndex}
                      className={`group relative overflow-hidden border-2 ${category.borderColor} hover:border-[#eb9142] transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 bg-gradient-to-br ${category.color}`}
                    >
                      {/* Decorative corner accent */}
                      <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-[#eb9142] to-[#d67f35] opacity-0 group-hover:opacity-10 transition-opacity rounded-bl-full"></div>

                      <CardContent className="p-6 relative z-10">
                        <div className="mb-4">
                          <div className="inline-block p-2 bg-white/80 rounded-lg mb-3">
                            <Baby className={`w-6 h-6 ${category.iconColor}`} />
                          </div>
                        </div>
                        <h3 className="text-xl font-bold text-[#47145a] mb-3 group-hover:text-[#eb9142] transition-colors">
                          {treatment.title}
                        </h3>
                        <p className="text-gray-700 mb-6 text-sm leading-relaxed">{treatment.description}</p>
                        <Link
                          href={treatment.href}
                          className="inline-flex items-center text-[#eb9142] hover:text-[#d67f35] font-semibold text-sm transition-all group-hover:gap-3 gap-2"
                        >
                          Learn more
                          <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                        </Link>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Expert Section with Photo */}
      <section className="py-20 bg-gradient-to-br from-[#47145a] to-[#5a1b71] text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <pattern id="pattern-expert" x="0" y="0" width="80" height="80" patternUnits="userSpaceOnUse">
              <circle cx="40" cy="40" r="3" fill="white" />
            </pattern>
            <rect x="0" y="0" width="100%" height="100%" fill="url(#pattern-expert)" />
          </svg>
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-br from-[#eb9142]/30 to-pink-400/30 rounded-3xl blur-2xl"></div>
              <div className="relative aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="/professional-female-doctor-in-blue-medical-attire.jpg"
                  alt="Dr Vrushni Bhuta - Fertility Specialist"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            </div>

            <div className="space-y-6">
              <div>
                <span className="text-[#eb9142] font-bold text-sm tracking-wider uppercase">EXPERT GUIDANCE</span>
                <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6">Personalized Care at Every Step</h2>
              </div>
              <p className="text-xl text-gray-200 leading-relaxed">
                Dr Vrushni Bhuta brings over a decade of expertise in assisted reproductive techniques, ensuring you
                receive the most advanced and compassionate care throughout your fertility journey.
              </p>
              <ul className="space-y-4">
                {[
                  "Comprehensive initial consultation and assessment",
                  "Customized treatment plans based on your unique needs",
                  "Latest technology and proven protocols",
                  "Ongoing support and monitoring throughout treatment",
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="mt-1 p-1 bg-[#eb9142] rounded-full">
                      <ArrowRight className="w-4 h-4" />
                    </div>
                    <span className="text-gray-200">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-b from-white to-[#fbf7f6]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto bg-gradient-to-br from-[#47145a] to-[#5a1b71] rounded-3xl p-12 text-center text-white shadow-2xl relative overflow-hidden">
            {/* Decorative elements */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#eb9142] rounded-full opacity-20 blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-pink-400 rounded-full opacity-20 blur-3xl"></div>

            <div className="relative z-10">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Not Sure Which Treatment is Right for You?</h2>
              <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
                Schedule a consultation with Dr Vrushni Bhuta to discuss your options and create a personalized
                treatment plan tailored to your unique situation.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-10 py-4 text-lg font-semibold rounded-full text-[#47145a] bg-white hover:bg-gray-100 transition-all shadow-lg hover:shadow-xl hover:scale-105"
              >
                Book a Consultation
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
