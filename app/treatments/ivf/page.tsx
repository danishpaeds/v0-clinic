import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Check, Phone, MessageCircle, Award, Clock, Heart, Shield, Star, Info } from "lucide-react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "IVF Treatment Mumbai - 50-70% Success | Dr Vrushni Bhuta",
  description:
    "Advanced IVF treatment in Mumbai with 50-70% success rate. Expert care at Hiranandani Powai & Surya Santacruz. Free consultation with Dr Vrushni Bhuta.",
  keywords: [
    "IVF treatment Mumbai",
    "IVF specialist Powai",
    "Best IVF doctor Mumbai",
    "IVF cost Mumbai",
    "IVF success rate Mumbai",
    "Fertility clinic Hiranandani",
    "ICSI treatment Mumbai",
    "Advanced IVF Mumbai",
  ],
  openGraph: {
    title: "IVF Treatment Mumbai - 50-70% Success | Dr Vrushni",
    description:
      "Expert IVF treatment with Dr. Vrushni Bhuta MS OBGY, MRM UK. 50-70% success rate, 3 Mumbai locations. Free consultation.",
    type: "website",
    locale: "en_IN",
    url: "https://drvrushni.com/treatments/ivf",
    images: [
      {
        url: "/images/doctor-purple-suit.jpg",
        width: 1200,
        height: 630,
        alt: "IVF Treatment in Mumbai with Dr Vrushni Bhuta",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "IVF Treatment Mumbai - 50-70% Success | Dr Vrushni",
    description: "Expert IVF treatment with 50-70% success rate. 3 Mumbai locations. Free consultation.",
    images: ["/images/doctor-purple-suit.jpg"],
  },
  other: {
    "last-modified": "December 2025",
    "content-type": "Medical Treatment Information",
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
              "Leading IVF and fertility clinic in Mumbai with 50-70% success rate. Personalized treatment by Dr Vrushni Bhuta MS OBGY, MRM (UK).",
            medicalSpecialty: ["Fertility Medicine", "IVF", "ICSI", "Reproductive Endocrinology"],
            address: [
              {
                "@type": "PostalAddress",
                streetAddress: "Dr LH Hiranandani Hospital, Out Patient Department, 4th Floor, Tower B",
                addressLocality: "Powai",
                addressRegion: "Mumbai, Maharashtra",
                postalCode: "400076",
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
              reviewCount: "200+",
            },
            priceRange: "₹₹₹₹", // Increased price range to reflect advanced services
          }),
        }}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "HowTo",
            name: "IVF Treatment Process at Dr Vrushni's Fertility Clinic",
            description:
              "Complete step-by-step guide to IVF treatment from initial consultation to pregnancy confirmation",
            totalTime: "P4W",
            estimatedCost: {
              "@type": "MonetaryAmount",
              currency: "INR",
              value: "150000-250000",
            },
            supply: [
              {
                "@type": "HowToSupply",
                name: "Fertility medications and hormones",
              },
              {
                "@type": "HowToSupply",
                name: "Advanced embryology laboratory",
              },
            ],
            tool: [
              {
                "@type": "HowToTool",
                name: "Ultrasound monitoring equipment",
              },
              {
                "@type": "HowToTool",
                name: "Embryo culture incubators",
              },
            ],
            step: [
              {
                "@type": "HowToStep",
                position: 1,
                name: "Fertility Assessment & Tailor-Made Roadmap",
                text: "Comprehensive fertility evaluation of both partners including hormonal profile, ultrasound scans, and detailed semen analysis. A customized IVF treatment plan is created based on individual findings.",
                url: "https://drvrushni.com/treatments/ivf#step-1",
                image: "/placeholder.svg?height=400&width=600&text=Fertility+Assessment",
              },
              {
                "@type": "HowToStep",
                position: 2,
                name: "Ovarian Stimulation",
                text: "Ovaries are stimulated using hormonal injections (10-14 days). Subcutaneous injections are self-administered at home. Follicular growth monitored via ultrasound scans and blood tests.",
                url: "https://drvrushni.com/treatments/ivf#step-2",
                image: "/placeholder.svg?height=400&width=600&text=Ovarian+Stimulation",
              },
              {
                "@type": "HowToStep",
                position: 3,
                name: "Oocyte Retrieval (Ovum Pick Up)",
                text: "Safe, painless procedure under general anesthesia. Transvaginal ultrasound-guided fine needle aspiration of follicular fluid. Duration: 30 minutes. Same-day discharge.",
                url: "https://drvrushni.com/treatments/ivf#step-3",
                image: "/placeholder.svg?height=400&width=600&text=Egg+Retrieval",
              },
              {
                "@type": "HowToStep",
                position: 4,
                name: "Fertilization - IVF or ICSI",
                text: "Mature eggs fertilized using either conventional IVF (eggs and sperm together) or ICSI (single sperm injected into each egg). Fertilization rate: 65-75%.",
                url: "https://drvrushni.com/treatments/ivf#step-4",
                image: "/placeholder.svg?height=400&width=600&text=Fertilization",
              },
              {
                "@type": "HowToStep",
                position: 5,
                name: "Embryo Development",
                text: "Embryos cultured in advanced laboratory for 5-6 days. Daily quality assessment and monitoring. Optimal temperature control and specialized culture media used.",
                url: "https://drvrushni.com/treatments/ivf#step-5",
                image: "/placeholder.svg?height=400&width=600&text=Embryo+Development",
              },
              {
                "@type": "HowToStep",
                position: 6,
                name: "Embryo Transfer - Fresh or Frozen",
                text: "Gentle, painless procedure using soft catheter. Can be fresh (same cycle, day 2-5) or frozen (later cycle with prepared endometrium). No anesthesia required.",
                url: "https://drvrushni.com/treatments/ivf#step-6",
                image: "/placeholder.svg?height=400&width=600&text=Embryo+Transfer",
              },
              {
                "@type": "HowToStep",
                position: 7,
                name: "Luteal Phase Support & Pregnancy Confirmation",
                text: "Hormonal support (progesterone, estrogen) provided post-transfer. Beta HCG blood test performed 12-14 days after transfer to confirm pregnancy.",
                url: "https://drvrushni.com/treatments/ivf#step-7",
                image: "/placeholder.svg?height=400&width=600&text=Pregnancy+Test",
              },
            ],
            performer: {
              "@type": "MedicalOrganization",
              name: "Dr Vrushni's Women's Care & Fertility Clinic",
              address: {
                "@type": "PostalAddress",
                addressLocality: "Mumbai",
                addressRegion: "Maharashtra",
                addressCountry: "IN",
              },
            },
          }),
        }}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "MedicalWebPage",
            name: "IVF Treatment in Mumbai - Dr Vrushni Bhuta",
            description:
              "Comprehensive IVF treatment with 50-70% success rate at Dr Vrushni's Fertility Clinic in Mumbai",
            lastReviewed: "2025-12-28",
            dateModified: "2025-12-28",
            about: {
              "@type": "MedicalProcedure",
              name: "In Vitro Fertilization (IVF)",
              alternateName: "IVF Treatment",
              procedureType: "Fertility Treatment",
              bodyLocation: "Reproductive System",
            },
            mainEntity: {
              "@type": "MedicalBusiness",
              name: "Dr Vrushni's Women's Care & Fertility Clinic",
              medicalSpecialty: "Reproductive Medicine",
              priceRange: "₹₹₹",
            },
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
              Advanced Fertility Treatment in Mumbai
              <span className="block text-[#eb9142] mt-2">50-70% Success Rate</span>
            </h1>

            <p className="text-xl md:text-2xl text-gray-100 mb-4 leading-relaxed animate-fade-up">
              Compassionate, Evidence-Based Fertility Care at Dr Vrushni's Women's Care & Fertility Clinic
            </p>

            <p className="text-lg text-gray-200 mb-8 animate-fade-up">
              Santacruz West & Powai, Mumbai - Tailor-made treatment plans for every individual struggling on their
              journey to parenthood
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-12 animate-fade-up">
              {[
                "IVF/IUI/ICSI/PICSI Treatment",
                "Oocyte/Embryo Freezing & Genetic Testing",
                "Transparent costs & detailed guidance from day one",
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

      {/* What is IVF Section */}
      <section className="py-20 bg-gradient-to-b from-[#fbf7f6] to-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-[#47145a] mb-6 text-center">What is IVF/ICSI?</h2>
            <div className="prose max-w-none text-gray-700 text-lg leading-relaxed space-y-6">
              <p>
                IVF/ICSI is an advanced Assisted Reproductive Technique (ART) that offers hope to couples struggling
                with infertility. In this treatment, the ovaries are stimulated with carefully monitored hormonal
                injections to produce multiple eggs.
              </p>
              <p>
                The oocytes are then retrieved under anaesthesia in a safe, painless procedure. In ICSI
                (Intracytoplasmic Sperm Injection), a single healthy sperm is injected directly into the cytoplasm of
                each egg to maximise the chances of fertilization.
              </p>
              <p>
                The resulting embryos are cultured in an advanced embryology laboratory using precise and controlled
                techniques. The best quality embryo(s) are then carefully transferred into the uterus to achieve
                pregnancy.
              </p>
              <div className="bg-[#fbf7f6] border-l-4 border-[#eb9142] p-6 rounded-r-lg my-6">
                <p className="font-semibold text-[#47145a] mb-2">Dr Vrushni's Holistic Approach</p>
                <p className="text-gray-700">
                  Dr Vrushni meticulously plans advanced fertility treatments, blending science with compassion to help
                  her patients achieve the best possible outcomes. She places deep importance on the emotional &
                  physical wellbeing of the couple, believing that fertility outcomes are enhanced when both partners
                  are aligned in mind, body & soul.
                </p>
              </div>
            </div>

            <div className="mt-10">
              <h3 className="text-xl font-bold text-[#47145a] mb-6">Advanced Fertility Treatments Available:</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  "IVF - In Vitro Fertilisation",
                  "ICSI - Intracytoplasmic Sperm Injection",
                  "PICSI - Physiological ICSI",
                  "Oocyte (Egg) Freezing",
                  "Embryo Freezing & Storage",
                  "Blastocyst Culture",
                  "Genetic Testing (PGT)",
                  "Fertility Preservation",
                  "Recurrent Implantation Failure Treatment",
                  "IUI - Intrauterine Insemination",
                ].map((treatment, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-3 p-4 rounded-lg border-2 border-gray-100 hover:border-[#eb9142] transition-colors"
                  >
                    <Check className="w-5 h-5 text-[#eb9142] flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700 font-medium">{treatment}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* IVF Journey Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-[#47145a] mb-4 text-center">
              Your IVF Journey - From Fertility to Fulfilment
            </h2>
            <p className="text-center text-gray-600 mb-4 text-lg">
              A thoughtfully personalized pathway that blends Mother Nature's wisdom with advanced reproductive science
            </p>
            <p className="text-center text-gray-600 mb-12 max-w-3xl mx-auto">
              Each step is designed to support you medically and emotionally, helping you navigate this often
              challenging journey with clarity, compassion & confidence - towards the ultimate goal of parenthood.
            </p>

            <div className="space-y-6">
              {[
                {
                  step: 1,
                  title: "Fertility Assessment & Tailor-Made Roadmap",
                  description:
                    "Your journey begins with a comprehensive fertility evaluation of both partners, including hormonal profile, ultrasound scans & detailed semen analysis. Based on these findings, a customized IVF treatment plan is thoughtfully curated. Dr Vrushni places deep importance on the emotional & physical wellbeing of the couple, believing that fertility outcomes are enhanced when both partners are aligned in mind, body & soul. This holistic approach helps prepare you not just medically, but emotionally, to welcome new life & begin your journey toward parenthood with confidence & harmony.",
                },
                {
                  step: 2,
                  title: "Ovarian Stimulation",
                  description:
                    "During this stage the ovaries are stimulated using carefully prescribed hormonal injections. These injections are subcutaneous, gentle & easy for patients to self-administer at home after proper guidance. The goal is to help ovaries produce multiple mature eggs in a single cycle. Follicular growth is closely monitored through a series of painless ultrasound scans & blood tests, allowing the treatment to be adjusted as needed to ensure safe, controlled & optimal response. Dr Vrushni encourages couples to move through the IVF cycle as a united team - supporting one another & maintaining emotional balance, positivity and calm throughout the journey.",
                },
                {
                  step: 3,
                  title: "Oocyte Retrieval (Ovum Pick Up)",
                  description:
                    "Oocyte retrieval is a safe & painless procedure performed under general anaesthesia. There are no surgical cuts or stitches involved. Using a transvaginal ultrasound probe, the ovaries are carefully visualized. A fine needle, guided alongside the ultrasound probe, gently enters each ovarian follicle to aspirate the follicular fluid. This fluid is immediately collected in sterile tubes and sent to the embryology laboratory, where the embryologist identifies & retrieves the oocytes (eggs). The procedure typically takes around 30 minutes. After observation, patients are discharged the same day once the effects of anaesthesia wear off & they are medically stable. Rest is advised on the day of procedure with light activities resuming the next day.",
                },
                {
                  step: 4,
                  title: "Fertilization - IVF or ICSI",
                  description:
                    "On the day of egg retrieval, all mature eggs are identified & prepared for fertilization in the embryology laboratory. Fertilization is achieved using either IVF (In Vitro Fertilisation) where eggs and sperm are placed together in a specialized culture dish and fertilisation occurs naturally, or ICSI (Intracytoplasmic Sperm Injection) - a precise technique where a single healthy sperm is injected directly into each mature egg to optimize fertilization rates. Around 65%-75% of mature eggs successfully fertilize, creating embryos that will be carefully monitored over the coming days.",
                },
                {
                  step: 5,
                  title: "Embryo Development",
                  description:
                    "Following fertilization, the embryos are cultured & closely monitored in the embryology laboratory over the next 5 to 6 days. Our advanced lab uses precise temperature control, specialized culture media, and continuous monitoring to create optimal conditions for embryo development. Embryos are assessed daily for quality, growth patterns, and developmental milestones to identify the best candidates for transfer.",
                },
                {
                  step: 6,
                  title: "Embryo Transfer - Fresh or Frozen",
                  description:
                    "Fresh Embryo Transfer: Embryos are transferred in the same cycle as oocyte retrieval, usually on day 2, day 3, or day 5 (blastocyst stage) depending on development. Frozen Embryo Transfer: The embryos are cultured to the desired stage and cryopreserved in liquid nitrogen. They are transferred in a later cycle once the uterine lining is optimally prepared. The embryo transfer procedure is gentle and painless - a soft catheter places the embryo into the prepared endometrial lining. No anaesthesia is required, and you can resume normal activities immediately after.",
                },
                {
                  step: 7,
                  title: "Luteal Phase Support & Pregnancy Confirmation",
                  description:
                    "After embryo transfer, hormonal support is provided to promote successful embryo implantation. This usually includes progesterone (oral, vaginal or injectable) & estrogen in frozen cycles. Support typically starts on the day of oocyte retrieval (fresh cycles) or endometrial preparation (frozen cycles) & continues until the blood pregnancy test (Beta HCG) 12-14 days after transfer. If pregnancy is confirmed, hormonal support may continue for several weeks to ensure optimal pregnancy progression and support.",
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
                      <h3 className="text-xl font-bold text-[#47145a] mb-3">{item.title}</h3>
                      <p className="text-gray-600 leading-relaxed">{item.description}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="mt-12 p-6 bg-gradient-to-r from-[#fbf7f6] to-white rounded-xl border-2 border-[#eb9142]/20">
              <div className="flex items-start gap-4">
                <Info className="w-6 h-6 text-[#eb9142] flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-bold text-[#47145a] mb-2">Book Your Free Consultation</h4>
                  <p className="text-gray-700 mb-4">
                    Get transparent fertility treatment costs and detailed guidance from day one. Dr Vrushni will
                    personally review your case and create a customized treatment plan tailored to your unique needs.
                  </p>
                  <Button asChild className="bg-gradient-to-r from-[#47145a] to-[#eb9142] hover:opacity-90 text-white">
                    <Link href="/contact">
                      <Phone className="w-4 h-4 mr-2" />
                      Book Free Consultation
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Success Rates Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-[#47145a] mb-4 text-center">Our IVF Success Rates</h2>
            <p className="text-center text-gray-600 mb-12 text-lg">
              Transparent outcomes based on personalized treatment protocols and advanced techniques
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
              <Card className="border-2 border-[#eb9142]/20 hover:border-[#eb9142] transition-all duration-300 hover:shadow-xl">
                <CardContent className="p-8 text-center">
                  <div className="text-5xl font-bold text-[#47145a] mb-2">60-70%</div>
                  <div className="text-gray-600 font-medium mb-4">Per Transfer</div>
                  <div className="text-lg font-bold text-[#eb9142]">Under 35 Years</div>
                  <p className="text-sm text-gray-500 mt-3">Optimal success rates with personalized protocols</p>
                </CardContent>
              </Card>

              <Card className="border-2 border-[#eb9142]/20 hover:border-[#eb9142] transition-all duration-300 hover:shadow-xl">
                <CardContent className="p-8 text-center">
                  <div className="text-5xl font-bold text-[#47145a] mb-2">50-60%</div>
                  <div className="text-gray-600 font-medium mb-4">Per Transfer</div>
                  <div className="text-lg font-bold text-[#eb9142]">35-40 Years</div>
                  <p className="text-sm text-gray-500 mt-3">Strong outcomes with tailored treatment plans</p>
                </CardContent>
              </Card>

              <Card className="border-2 border-[#47145a] bg-gradient-to-br from-[#47145a] to-[#66257B] text-white hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                <CardContent className="p-8 text-center">
                  <div className="text-5xl font-bold text-[#eb9142] mb-2">50-70%</div>
                  <div className="text-gray-100 font-medium mb-4">Overall Success</div>
                  <div className="text-lg font-bold text-white">Clinic Average</div>
                  <p className="text-sm text-gray-200 mt-3">Evidence-based compassionate fertility care</p>
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
                        { age: "Under 30", success: "55-65%", liveBirth: "50-60%" },
                        { age: "30-34", success: "45-55%", liveBirth: "40-50%" },
                        { age: "35-37", success: "40-50%", liveBirth: "35-45%" },
                        { age: "38-40", success: "30-40%", liveBirth: "25-35%" },
                        { age: "41-42", success: "20-30%", liveBirth: "15-25%" },
                        { age: "Over 42", success: "10-20%", liveBirth: "8-15%" },
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
                  Success rates vary based on individual health factors, egg quality, sperm quality, and lifestyle. The
                  rates presented are indicative and can be discussed in detail during your consultation.
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
                      alt="Dr Vrushni Bhuta MS OBGY MRM - Leading IVF Fertility Specialist Mumbai Powai Hiranandani Santacruz Surya Hospital"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-[#47145a] to-transparent p-6">
                      <img
                        src="/images/dr-vrushni-bhuta-logo.png"
                        alt="Dr Vrushni's Women Care Fertility Clinic Mumbai Powai Santacruz Logo"
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

      <section className="py-20 bg-gradient-to-b from-white to-[#fbf7f6]">
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

      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-[#47145a] mb-4 text-center">
              Frequently Asked Questions About IVF
            </h2>
            <p className="text-center text-gray-600 mb-12">
              Get answers to common questions about IVF treatment, success rates, and what to expect
            </p>

            <dl className="space-y-6">
              <div className="bg-white p-6 rounded-xl border-2 border-gray-100">
                <dt className="text-xl font-bold text-[#47145a] mb-3">Is IVF painful?</dt>
                <dd className="text-gray-600 leading-relaxed">
                  The IVF process involves some discomfort but is generally not painful. Daily hormone injections are
                  subcutaneous (under the skin) and easy to self-administer. The egg retrieval is performed under
                  general anesthesia, so you won't feel anything during the procedure. Mild cramping may occur
                  afterward. The embryo transfer is painless and requires no anesthesia.
                </dd>
              </div>

              <div className="bg-white p-6 rounded-xl border-2 border-gray-100">
                <dt className="text-xl font-bold text-[#47145a] mb-3">How long does IVF treatment take?</dt>
                <dd className="text-gray-600 leading-relaxed">
                  A complete IVF cycle takes approximately 4-6 weeks from starting medication to the pregnancy test.
                  This includes 10-14 days of ovarian stimulation, egg retrieval, 3-5 days of embryo development, embryo
                  transfer, and a 12-14 day wait before the pregnancy test.
                </dd>
              </div>

              <div className="bg-white p-6 rounded-xl border-2 border-gray-100">
                <dt className="text-xl font-bold text-[#47145a] mb-3">What is the difference between IVF and ICSI?</dt>
                <dd className="text-gray-600 leading-relaxed">
                  IVF involves placing eggs and sperm together in a dish where fertilization occurs naturally. ICSI
                  involves injecting a single sperm directly into each egg using a microscopic needle. ICSI is used when
                  there are male factor issues (low count, poor motility) or previous IVF fertilization failures.
                  Success rates are comparable (50-60% per cycle).
                </dd>
              </div>

              <div className="bg-white p-6 rounded-xl border-2 border-gray-100">
                <dt className="text-xl font-bold text-[#47145a] mb-3">How much does IVF cost in Mumbai?</dt>
                <dd className="text-gray-600 leading-relaxed">
                  IVF treatment at Dr. Vrushni's clinic ranges from ₹1,50,000 to ₹2,50,000 per cycle, including
                  medications, procedures, and basic tests. Additional costs may include ICSI (+₹20-30K), embryo
                  freezing (₹20-30K), PGT testing (₹60K-1L), and frozen embryo transfer (₹40-60K). Free initial
                  consultation is provided.
                </dd>
              </div>

              <div className="bg-white p-6 rounded-xl border-2 border-gray-100">
                <dt className="text-xl font-bold text-[#47145a] mb-3">What are my chances of success with IVF?</dt>
                <dd className="text-gray-600 leading-relaxed">
                  Success rates at Dr. Vrushni's clinic are age-dependent: 60-70% clinical pregnancy rate for women
                  under 35, 50-60% for ages 35-37, 35-45% for ages 38-40, and 20-30% for ages 41-42. Overall live birth
                  rates range from 50-70% per cycle depending on age and individual factors. Cumulative success rates
                  increase significantly with multiple cycles.
                </dd>
              </div>

              <div className="bg-white p-6 rounded-xl border-2 border-gray-100">
                <dt className="text-xl font-bold text-[#47145a] mb-3">Is bed rest required after embryo transfer?</dt>
                <dd className="text-gray-600 leading-relaxed">
                  No prolonged bed rest is needed. Research shows that normal activity after transfer does not reduce
                  success rates. Rest for 15-20 minutes after the procedure, then resume normal activities. Avoid heavy
                  lifting, vigorous exercise, and sexual intercourse for 2 weeks until the pregnancy test.
                </dd>
              </div>
            </dl>

            <script
              type="application/ld+json"
              dangerouslySetInnerHTML={{
                __html: JSON.stringify({
                  "@context": "https://schema.org",
                  "@type": "FAQPage",
                  mainEntity: [
                    {
                      "@type": "Question",
                      name: "Is IVF painful?",
                      acceptedAnswer: {
                        "@type": "Answer",
                        text: "The IVF process involves some discomfort but is generally not painful. Daily hormone injections are subcutaneous and easy to self-administer. The egg retrieval is performed under general anesthesia, so you won't feel anything during the procedure. Mild cramping may occur afterward. The embryo transfer is painless and requires no anesthesia.",
                      },
                    },
                    {
                      "@type": "Question",
                      name: "How long does IVF treatment take?",
                      acceptedAnswer: {
                        "@type": "Answer",
                        text: "A complete IVF cycle takes approximately 4-6 weeks from starting medication to the pregnancy test. This includes 10-14 days of ovarian stimulation, egg retrieval, 3-5 days of embryo development, embryo transfer, and a 12-14 day wait before the pregnancy test.",
                      },
                    },
                    {
                      "@type": "Question",
                      name: "What is the difference between IVF and ICSI?",
                      acceptedAnswer: {
                        "@type": "Answer",
                        text: "IVF involves placing eggs and sperm together in a dish where fertilization occurs naturally. ICSI involves injecting a single sperm directly into each egg using a microscopic needle. ICSI is used when there are male factor issues or previous IVF fertilization failures. Success rates are comparable at 50-60% per cycle.",
                      },
                    },
                    {
                      "@type": "Question",
                      name: "How much does IVF cost in Mumbai?",
                      acceptedAnswer: {
                        "@type": "Answer",
                        text: "IVF treatment at Dr. Vrushni's clinic ranges from ₹1,50,000 to ₹2,50,000 per cycle, including medications, procedures, and basic tests. Additional costs may include ICSI, embryo freezing, PGT testing, and frozen embryo transfer. Free initial consultation is provided.",
                      },
                    },
                    {
                      "@type": "Question",
                      name: "What are my chances of success with IVF?",
                      acceptedAnswer: {
                        "@type": "Answer",
                        text: "Success rates at Dr. Vrushni's clinic are age-dependent: 60-70% clinical pregnancy rate for women under 35, 50-60% for ages 35-37, 35-45% for ages 38-40, and 20-30% for ages 41-42. Overall live birth rates range from 50-70% per cycle depending on age and individual factors.",
                      },
                    },
                    {
                      "@type": "Question",
                      name: "Is bed rest required after embryo transfer?",
                      acceptedAnswer: {
                        "@type": "Answer",
                        text: "No prolonged bed rest is needed. Research shows that normal activity after transfer does not reduce success rates. Rest for 15-20 minutes after the procedure, then resume normal activities. Avoid heavy lifting, vigorous exercise, and sexual intercourse for 2 weeks.",
                      },
                    },
                  ],
                }),
              }}
            />
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-[#47145a] mb-4 text-center">
              IVF vs Other Fertility Treatments
            </h2>
            <p className="text-center text-gray-600 mb-12">Compare treatment options to make an informed decision</p>

            <div className="overflow-x-auto">
              <table className="w-full border-collapse bg-white shadow-lg rounded-xl overflow-hidden">
                <thead>
                  <tr className="bg-gradient-to-r from-[#47145a] to-[#66257B] text-white">
                    <th className="px-6 py-4 text-left font-bold">Factor</th>
                    <th className="px-6 py-4 text-left font-bold">IVF</th>
                    <th className="px-6 py-4 text-left font-bold">IUI</th>
                    <th className="px-6 py-4 text-left font-bold">ICSI</th>
                    <th className="px-6 py-4 text-left font-bold">Egg Freezing</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-gray-100 hover:bg-gray-50">
                    <td className="px-6 py-4 font-semibold text-gray-700">Success Rate (per cycle)</td>
                    <td className="px-6 py-4 text-[#eb9142] font-bold">50-70%</td>
                    <td className="px-6 py-4">15-20%</td>
                    <td className="px-6 py-4">50-60%</td>
                    <td className="px-6 py-4">50-60% (age &lt;35)</td>
                  </tr>
                  <tr className="border-b border-gray-100 hover:bg-gray-50">
                    <td className="px-6 py-4 font-semibold text-gray-700">Cost Range (Mumbai)</td>
                    <td className="px-6 py-4">₹1.5-2.5L</td>
                    <td className="px-6 py-4">₹15-25K</td>
                    <td className="px-6 py-4">₹1.8-2.8L</td>
                    <td className="px-6 py-4">₹80K-1.5L</td>
                  </tr>
                  <tr className="border-b border-gray-100 hover:bg-gray-50">
                    <td className="px-6 py-4 font-semibold text-gray-700">Duration</td>
                    <td className="px-6 py-4">4-6 weeks</td>
                    <td className="px-6 py-4">2-3 weeks</td>
                    <td className="px-6 py-4">4-6 weeks</td>
                    <td className="px-6 py-4">2-3 weeks</td>
                  </tr>
                  <tr className="border-b border-gray-100 hover:bg-gray-50">
                    <td className="px-6 py-4 font-semibold text-gray-700">Invasiveness</td>
                    <td className="px-6 py-4">Moderate</td>
                    <td className="px-6 py-4">Minimal</td>
                    <td className="px-6 py-4">Moderate</td>
                    <td className="px-6 py-4">Moderate</td>
                  </tr>
                  <tr className="border-b border-gray-100 hover:bg-gray-50">
                    <td className="px-6 py-4 font-semibold text-gray-700">Male Factor</td>
                    <td className="px-6 py-4">Mild-Severe</td>
                    <td className="px-6 py-4">Mild Only</td>
                    <td className="px-6 py-4 text-[#eb9142] font-bold">Severe</td>
                    <td className="px-6 py-4">N/A</td>
                  </tr>
                  <tr className="border-b border-gray-100 hover:bg-gray-50">
                    <td className="px-6 py-4 font-semibold text-gray-700">Female Factor</td>
                    <td className="px-6 py-4 text-[#eb9142] font-bold">Yes</td>
                    <td className="px-6 py-4">Limited</td>
                    <td className="px-6 py-4">Yes</td>
                    <td className="px-6 py-4">Preservation</td>
                  </tr>
                  <tr className="border-b border-gray-100 hover:bg-gray-50">
                    <td className="px-6 py-4 font-semibold text-gray-700">Lab Required</td>
                    <td className="px-6 py-4">Advanced</td>
                    <td className="px-6 py-4">Basic</td>
                    <td className="px-6 py-4">Advanced</td>
                    <td className="px-6 py-4">Advanced</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 font-semibold text-gray-700">Anesthesia</td>
                    <td className="px-6 py-4">Yes (egg retrieval)</td>
                    <td className="px-6 py-4">No</td>
                    <td className="px-6 py-4">Yes (egg retrieval)</td>
                    <td className="px-6 py-4">Yes (egg retrieval)</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <script
              type="application/ld+json"
              dangerouslySetInnerHTML={{
                __html: JSON.stringify({
                  "@context": "https://schema.org",
                  "@type": "Table",
                  about: "Comparison of fertility treatment options",
                  description:
                    "Detailed comparison table of IVF, IUI, ICSI, and Egg Freezing treatments including success rates, costs, duration, and suitability factors",
                }),
              }}
            />
          </div>
        </div>
      </section>

      {/* Content Freshness Indicator */}
      <div className="py-6 text-center bg-gray-50 border-t border-gray-200">
        <p className="text-sm text-gray-600">
          <strong>Medical Information Last Reviewed:</strong> December 2025 by Dr Vrushni Bhuta, MS OBGY, MRM (UK)
        </p>
        <p className="text-xs text-gray-500 mt-2">
          MMC Registration: 2009020251 | Clinics: Hiranandani Hospital Powai, Surya Hospital Santacruz West, Bookurdoc
          Chandivali
        </p>
      </div>
    </div>
  )
}
