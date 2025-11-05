import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowLeft, Phone, CheckCircle2 } from "lucide-react"
import { notFound } from "next/navigation"

const treatments: Record<
  string,
  {
    title: string
    subtitle: string
    description: string
    process?: string[]
    benefits?: string[]
    whoShouldConsider?: string[]
  }
> = {
  iui: {
    title: "IUI (Intrauterine Insemination)",
    subtitle: "Minimally Invasive Fertility Treatment",
    description:
      "IUI is a fertility treatment where washed and concentrated sperm is placed directly into the uterus around the time of ovulation. This procedure increases the number of sperm that reach the fallopian tubes and subsequently increases the chance of fertilization.",
    process: [
      "Ovulation monitoring through ultrasound and blood tests",
      "Sperm collection and preparation in the laboratory",
      "Sperm insertion into the uterus using a thin catheter",
      "Rest period of 10-15 minutes post-procedure",
      "Pregnancy test after two weeks",
    ],
    benefits: [
      "Less invasive than IVF",
      "Lower cost compared to other ART procedures",
      "Minimal discomfort during the procedure",
      "Can be combined with fertility medications",
      "Quick recovery time",
    ],
    whoShouldConsider: [
      "Couples with unexplained infertility",
      "Women with cervical mucus problems",
      "Men with mild male factor infertility",
      "Couples using donor sperm",
      "Women with ovulation disorders",
    ],
  },
  icsi: {
    title: "ICSI (Intracytoplasmic Sperm Injection)",
    subtitle: "Advanced Fertilization Technique",
    description:
      "ICSI is a specialized form of IVF where a single sperm is injected directly into an egg using sophisticated micromanipulation equipment. This technique is particularly useful for male factor infertility.",
    process: [
      "Ovarian stimulation and egg retrieval",
      "Sperm collection and preparation",
      "Selection of the best quality sperm",
      "Direct injection of sperm into each mature egg",
      "Embryo culture and monitoring",
      "Embryo transfer into the uterus",
    ],
    benefits: [
      "Overcomes severe male factor infertility",
      "Higher fertilization rates",
      "Requires only one sperm per egg",
      "Can use surgically retrieved sperm",
      "Effective for previous IVF failures",
    ],
    whoShouldConsider: [
      "Men with very low sperm count",
      "Men with poor sperm motility",
      "Men with abnormal sperm morphology",
      "Previous failed fertilization with IVF",
      "Use of surgically retrieved sperm",
    ],
  },
  "egg-freezing": {
    title: "Egg Freezing (Oocyte Cryopreservation)",
    subtitle: "Preserve Your Fertility for the Future",
    description:
      "Egg freezing allows women to preserve their eggs at their current age and quality for future use. This gives you the flexibility to delay childbearing while maintaining your fertility potential.",
    process: [
      "Initial consultation and fertility assessment",
      "Ovarian stimulation with hormone injections",
      "Regular monitoring through ultrasounds",
      "Egg retrieval procedure under sedation",
      "Vitrification (rapid freezing) of eggs",
      "Long-term storage in liquid nitrogen",
    ],
    benefits: [
      "Preserves fertility at current age",
      "Provides reproductive flexibility",
      "No time pressure for family planning",
      "Can be used before cancer treatment",
      "High survival rates with modern techniques",
    ],
    whoShouldConsider: [
      "Women wanting to delay childbearing",
      "Women facing cancer treatment",
      "Women with family history of early menopause",
      "Women with endometriosis",
      "Women pursuing career or education goals",
    ],
  },
  "pre-conceptional-counselling": {
    title: "Pre-conceptional Counselling",
    subtitle: "Prepare for a Healthy Pregnancy",
    description:
      "Comprehensive guidance and screening to optimize your health before conception, ensuring the best possible outcomes for both mother and baby.",
    benefits: [
      "Identify and address health risks",
      "Optimize nutrition and lifestyle",
      "Review medications and supplements",
      "Genetic counseling if needed",
      "Vaccination status review",
    ],
  },
  "follicular-monitoring": {
    title: "Follicular Monitoring",
    subtitle: "Track Your Ovulation Cycle",
    description:
      "Series of ultrasound scans performed at regular intervals to assess the growth and development of ovarian follicles, helping to time intercourse or procedures optimally.",
    benefits: [
      "Precise ovulation timing",
      "Non-invasive procedure",
      "Helps optimize treatment timing",
      "Monitors response to medications",
      "Increases success rates",
    ],
  },
  "testicular-sperm-aspiration": {
    title: "Testicular Sperm Aspiration & Biopsy",
    subtitle: "Surgical Sperm Retrieval",
    description:
      "Specialized surgical techniques to retrieve sperm directly from the testicles for men with obstructive or non-obstructive azoospermia.",
    whoShouldConsider: [
      "Men with no sperm in ejaculate",
      "Men with blocked vas deferens",
      "Men with failed vasectomy reversal",
      "Men with genetic conditions affecting sperm production",
    ],
  },
  "embryo-cryopreservation": {
    title: "Embryo Cryopreservation",
    subtitle: "Freeze Embryos for Future Use",
    description:
      "State-of-the-art freezing and storage of embryos for future use, allowing you to preserve high-quality embryos from your IVF cycle.",
    benefits: [
      "Preserve extra embryos from IVF",
      "Avoid repeated ovarian stimulation",
      "Plan family spacing",
      "Reduce treatment costs for future cycles",
      "High survival and success rates",
    ],
  },
  "sperm-cryopreservation": {
    title: "Sperm Cryopreservation",
    subtitle: "Preserve Male Fertility",
    description:
      "Safe preservation of sperm for future use, particularly beneficial before medical treatments that may affect fertility.",
    whoShouldConsider: [
      "Men facing cancer treatment",
      "Men with declining sperm quality",
      "Men in high-risk occupations",
      "Men undergoing vasectomy",
      "Sperm donors",
    ],
  },
  "donor-oocyte": {
    title: "Donor Oocyte Program",
    subtitle: "Alternative Path to Parenthood",
    description:
      "When your own eggs are not viable, carefully selected donor eggs offer an alternative path to experiencing pregnancy and childbirth.",
    whoShouldConsider: [
      "Women with premature ovarian failure",
      "Women with poor egg quality",
      "Women with genetic disorders",
      "Repeated IVF failures",
      "Advanced maternal age",
    ],
  },
  surrogacy: {
    title: "Surrogacy",
    subtitle: "Gestational Carrier Program",
    description:
      "Compassionate surrogacy program where a gestational carrier helps bring your baby into the world when you cannot carry a pregnancy.",
    whoShouldConsider: [
      "Women without a uterus",
      "Women with uterine abnormalities",
      "Medical conditions making pregnancy dangerous",
      "Repeated IVF implantation failures",
      "Same-sex male couples",
    ],
  },
  "fertility-surgery": {
    title: "Fertility Enhancing Surgery",
    subtitle: "Laparoscopy & Hysteroscopy",
    description:
      "Advanced minimally invasive surgical procedures to diagnose and treat conditions affecting female fertility, including endometriosis, fibroids, and tubal blockages.",
    benefits: [
      "Minimally invasive techniques",
      "Faster recovery time",
      "Improved fertility outcomes",
      "Diagnostic and therapeutic",
      "Reduced scarring",
    ],
  },
  "prp-ovary": {
    title: "PRP of the Ovary",
    subtitle: "Ovarian Rejuvenation Therapy",
    description:
      "Innovative platelet-rich plasma therapy to rejuvenate ovarian function and improve egg quality in women with diminished ovarian reserve.",
    benefits: [
      "Natural regenerative treatment",
      "May improve egg quality",
      "Minimal side effects",
      "Outpatient procedure",
      "Can be combined with IVF",
    ],
  },
  "prp-endometrium": {
    title: "PRP of the Endometrium",
    subtitle: "Endometrial Regeneration",
    description:
      "Cutting-edge PRP treatment to enhance endometrial thickness and receptivity, improving implantation rates for women with thin endometrium.",
    benefits: [
      "Improves endometrial thickness",
      "Enhances implantation rates",
      "Natural treatment option",
      "Minimal risks",
      "Can improve IVF success",
    ],
  },
  pgt: {
    title: "Preimplantation Genetic Testing (PGT)",
    subtitle: "Genetic Screening of Embryos",
    description:
      "Comprehensive genetic screening of embryos before transfer to identify the healthiest embryos and reduce the risk of genetic disorders.",
    benefits: [
      "Identifies chromosomally normal embryos",
      "Reduces miscarriage risk",
      "Screens for genetic disorders",
      "Improves IVF success rates",
      "Enables family balancing",
    ],
    whoShouldConsider: [
      "Advanced maternal age",
      "Recurrent pregnancy loss",
      "Previous child with genetic disorder",
      "Known genetic carrier status",
      "Repeated IVF failures",
    ],
  },
}

export function generateStaticParams() {
  return Object.keys(treatments).map((slug) => ({
    slug: slug,
  }))
}

export default function TreatmentDetailPage({ params }: { params: { slug: string } }) {
  const treatment = treatments[params.slug]

  if (!treatment) {
    notFound()
  }

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[#47145a] to-[#5a1b71] text-white py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl">
            <Link
              href="/treatments"
              className="inline-flex items-center text-[#eb9142] hover:text-[#d67f35] mb-6 transition-colors"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to all treatments
            </Link>
            <span className="text-[#eb9142] font-bold text-sm tracking-wider uppercase block mb-4">TREATMENT</span>
            <h1 className="text-4xl md:text-5xl font-extrabold mb-4">{treatment.title}</h1>
            <p className="text-xl text-[#eb9142] mb-6">{treatment.subtitle}</p>
            <p className="text-lg text-gray-200">{treatment.description}</p>
          </div>
        </div>
      </section>

      {/* Content Sections */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl space-y-12">
          {treatment.process && (
            <div>
              <h2 className="text-3xl font-bold text-[#47145a] mb-6">The Process</h2>
              <Card className="border-2 border-[#47145a]/10">
                <CardContent className="p-8">
                  <ol className="space-y-4">
                    {treatment.process.map((step, index) => (
                      <li key={index} className="flex gap-4">
                        <span className="flex-shrink-0 w-8 h-8 rounded-full bg-[#eb9142] text-white flex items-center justify-center font-bold text-sm">
                          {index + 1}
                        </span>
                        <span className="text-gray-700 pt-1">{step}</span>
                      </li>
                    ))}
                  </ol>
                </CardContent>
              </Card>
            </div>
          )}

          {treatment.benefits && (
            <div>
              <h2 className="text-3xl font-bold text-[#47145a] mb-6">Benefits</h2>
              <Card className="border-2 border-[#47145a]/10">
                <CardContent className="p-8">
                  <ul className="space-y-3">
                    {treatment.benefits.map((benefit, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-[#eb9142] flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>
          )}

          {treatment.whoShouldConsider && (
            <div>
              <h2 className="text-3xl font-bold text-[#47145a] mb-6">Who Should Consider This Treatment?</h2>
              <Card className="border-2 border-[#47145a]/10">
                <CardContent className="p-8">
                  <ul className="space-y-3">
                    {treatment.whoShouldConsider.map((item, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-[#eb9142] flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700">{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[#47145a] text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to explore this treatment?</h2>
          <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
            Schedule a consultation with Dr Vrushni Bhuta to discuss your options and create a personalized treatment
            plan
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-[#eb9142] hover:bg-[#d67f35] text-white px-8">
              <Link href="/contact">
                <Phone className="w-5 h-5 mr-2" />
                Book a consultation
              </Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-white text-white hover:bg-white hover:text-[#47145a] px-8 bg-transparent"
            >
              <Link href="/treatments">View all treatments</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
