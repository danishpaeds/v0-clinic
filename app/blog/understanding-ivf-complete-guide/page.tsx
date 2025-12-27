import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowLeft, Calendar, Clock, CheckCircle2, Info } from "lucide-react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "IVF Complete Guide Mumbai | Dr Vrushni Bhuta Clinic",
  description:
    "Expert IVF guide by Dr Vrushni Bhuta. Learn the process, success rates, costs & what to expect. Make informed fertility decisions in Mumbai.",
  keywords:
    "IVF guide Mumbai, IVF process explained, IVF success rates, fertility treatment Mumbai, Dr Vrushni Bhuta IVF, IVF step by step, IVF cost Mumbai, best IVF specialist Mumbai",
  openGraph: {
    title: "Understanding IVF: Complete Guide | Dr Vrushni Bhuta",
    description:
      "Expert IVF insights from Mumbai's leading fertility specialist. Process, success rates & realistic expectations.",
    type: "article",
    locale: "en_IN",
    url: "https://drvrushni.com/blog/understanding-ivf-complete-guide",
    images: [
      {
        url: "/images/doctor-purple-blazer-seated.jpg",
        width: 1200,
        height: 630,
        alt: "Dr Vrushni Bhuta - IVF Guide Mumbai",
      },
    ],
    publishedTime: "2025-12-20",
    modifiedTime: "2025-12-20",
    authors: ["Dr Vrushni Bhuta"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Understanding IVF: Complete Guide | Dr Vrushni Bhuta",
    description: "Expert IVF insights from Mumbai's leading fertility specialist.",
    images: ["/images/doctor-purple-blazer-seated.jpg"],
  },
  other: {
    "last-modified": "December 2025",
  },
}

export default function UnderstandingIVFBlogPost() {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: "Understanding IVF: A Complete Guide",
    description:
      "Comprehensive guide to IVF treatment explaining the process, success rates, and realistic expectations for patients in Mumbai.",
    image: "https://drvrushni.com/images/doctor-purple-suit.jpg",
    author: {
      "@type": "Person",
      name: "Dr. Vrushni Bhuta",
      jobTitle: "Fertility Specialist & Gynaecologist",
      affiliation: {
        "@type": "Organization",
        name: "Dr Vrushni's Women's Care & Fertility Clinic",
        url: "https://drvrushni.com",
      },
      alumniOf: "Homerton University, London",
      hasCredential: ["MS OBGY", "Fellowship in Endoscopy (ICOG)", "M.R.M (UK)"],
      sameAs: ["https://drvrushni.com/about"],
    },
    publisher: {
      "@type": "Organization",
      name: "Dr Vrushni's Women's Care & Fertility Clinic",
      logo: {
        "@type": "ImageObject",
        url: "https://drvrushni.com/images/dr-vrushni-bhuta-logo.png",
      },
    },
    datePublished: "2025-12-20",
    dateModified: "2025-12-20",
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": "https://drvrushni.com/blog/understanding-ivf-complete-guide",
    },
    keywords: [
      "IVF",
      "ICSI",
      "fertility treatment",
      "IVF process",
      "IVF success rate",
      "Mumbai IVF",
      "fertility specialist",
    ],
    articleSection: "Fertility Education",
    wordCount: 3500,
    inLanguage: "en-IN",
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />

      <div className="flex flex-col">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-[#47145a] to-[#5a1b71] text-white py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <div className="flex items-center justify-center gap-4 mb-6">
                <span className="inline-block px-4 py-2 text-xs font-semibold text-white bg-[#eb9142] rounded-full uppercase tracking-wider">
                  Fertility Education
                </span>
                <span className="flex items-center gap-1 text-sm">
                  <Calendar className="w-4 h-4" />
                  <span>December 20, 2025</span>
                </span>
                <span className="flex items-center gap-1 text-sm">
                  <Clock className="w-4 h-4" />
                  <span>12 min read</span>
                </span>
              </div>
              <Link
                href="/blog"
                className="inline-flex items-center text-[#eb9142] hover:text-[#d67f35] mb-6 transition-colors"
              >
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to blog
              </Link>
              <h1 className="text-4xl md:text-5xl font-extrabold mb-6">Understanding IVF: A Complete Guide</h1>
            </div>
          </div>
        </section>

        {/* Content */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
            {/* Author Info */}
            <Card className="border-2 border-[#47145a]/10 mb-12">
              <CardContent className="p-6">
                <div className="flex items-center gap-4">
                  <div className="relative w-16 h-16 rounded-full overflow-hidden flex-shrink-0">
                    <Image
                      src="/images/doctor-purple-blazer-seated.jpg"
                      alt="Dr Vrushni Bhuta"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <p className="font-bold text-[#47145a]">Dr Vrushni Bhuta</p>
                    <p className="text-sm text-gray-600">
                      MS OBGY, Fellowship in Endoscopy (ICOG), M.R.M (UK) - Fertility Specialist & Gynaecologist, Mumbai
                    </p>
                    <p className="text-xs text-gray-500 mt-1">
                      Dr Vrushni's Women's Care & Fertility Clinic, Santacruz West
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="prose prose-lg max-w-none">
              {/* Introduction */}
              <h2 className="text-3xl font-bold text-[#47145a] mb-4">
                Introduction: When Parenthood Becomes a Journey
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">Fertility struggles are rarely just medical.</p>
              <p className="text-gray-700 leading-relaxed mb-4">They are emotional, personal, and often silent.</p>
              <p className="text-gray-700 leading-relaxed mb-6">
                For many couples and individuals in Mumbai, the journey towards parenthood begins with hope, turns into
                months of waiting, and sometimes leads to questions no one prepares you for — Why isn't this happening?
                Is it too late? What should we do next?
              </p>
              <p className="text-gray-700 leading-relaxed mb-6">
                In vitro fertilization (IVF) is one of the most advanced and effective fertility treatments available
                today. Yet, despite how commonly it is discussed, IVF remains misunderstood — surrounded by myths, fear,
                and unrealistic expectations.
              </p>
              <p className="text-gray-700 leading-relaxed mb-6">
                At Dr Vrushni's Women's Care & Fertility Clinic, we meet patients every day who are not just looking for
                treatment, but for clarity, honesty, and reassurance.
              </p>
              <p className="text-gray-700 leading-relaxed mb-6 font-medium">
                This guide is written to offer exactly that.
              </p>

              <div className="bg-gradient-to-r from-[#47145a]/5 to-[#eb9142]/5 border-l-4 border-[#eb9142] p-6 my-8 rounded-r-lg">
                <p className="text-gray-700 leading-relaxed mb-2">No exaggeration.</p>
                <p className="text-gray-700 leading-relaxed mb-2">No false promises.</p>
                <p className="text-gray-700 leading-relaxed">No confusing medical jargon.</p>
              </div>

              <p className="text-gray-700 leading-relaxed mb-8">
                Just a clear, compassionate explanation of IVF — how it works, who it helps, and what it realistically
                looks like for patients in Mumbai.
              </p>

              {/* Quick Take */}
              <Card className="border-2 border-[#eb9142] bg-gradient-to-br from-[#47145a]/5 to-[#eb9142]/5 my-8">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold text-[#47145a] mb-6">Quick Take: IVF at a Glance</h3>
                  <ul className="space-y-3">
                    {[
                      "IVF helps when natural conception or simpler treatments are unlikely to work",
                      "One IVF cycle usually takes 4–6 weeks",
                      "Success depends largely on age, egg quality, and sperm health",
                      "IVF cannot guarantee pregnancy, but it can significantly improve chances",
                      "Choosing the right clinic is as important as the treatment itself",
                    ].map((item, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-[#eb9142] flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700">{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>

              {/* What is IVF */}
              <h2 className="text-3xl font-bold text-[#47145a] mb-4 mt-12">What Is IVF?</h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                IVF, or in vitro fertilization, is a fertility treatment where eggs and sperm are brought together
                outside the body in a laboratory to create embryos. One of these embryos is then placed into the uterus
                to try to achieve pregnancy.
              </p>
              <p className="text-gray-700 leading-relaxed mb-6">
                <strong>"In vitro"</strong> simply means "outside the body."
              </p>
              <p className="text-gray-700 leading-relaxed mb-6">
                But for patients, IVF is not just a laboratory process — it is a carefully planned medical journey that
                combines science, timing, and individual biology.
              </p>
              <p className="text-gray-700 leading-relaxed mb-6">
                In a natural cycle, the body usually releases one egg per month. IVF gently stimulates the ovaries to
                produce more eggs so doctors can identify embryos with the best potential for pregnancy.
              </p>

              <Card className="border-2 border-[#47145a]/20 bg-blue-50 my-8">
                <CardContent className="p-6">
                  <div className="flex gap-3">
                    <Info className="w-5 h-5 text-blue-600 flex-shrink-0 mt-1" />
                    <p className="text-gray-700 text-sm leading-relaxed">
                      In Mumbai, IVF is performed only at registered fertility clinics that follow India's Assisted
                      Reproductive Technology (ART) Act, ensuring ethical practices, safety, and informed consent.
                    </p>
                  </div>
                </CardContent>
              </Card>

              <p className="text-gray-700 leading-relaxed mb-8 font-medium italic">
                What is important to understand is this: IVF does not force pregnancy — it supports biology where nature
                needs help.
              </p>

              {/* Who Needs IVF */}
              <h2 className="text-3xl font-bold text-[#47145a] mb-4 mt-12">
                Who Actually Needs IVF? (And Who May Not)
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">One of the most common concerns patients express is:</p>
              <p className="text-gray-700 leading-relaxed mb-6 italic text-lg">
                "Do we really need IVF, or are we rushing into it?"
              </p>
              <p className="text-gray-700 leading-relaxed mb-6">It's a fair question.</p>
              <p className="text-gray-700 leading-relaxed mb-6">
                IVF is not the first step for everyone, and ethical fertility care means recommending it only when it is
                medically appropriate.
              </p>

              <h3 className="text-2xl font-bold text-[#47145a] mb-4 mt-8">IVF may be advised when:</h3>
              <ul className="space-y-3 mb-8">
                {[
                  "Fallopian tubes are blocked, damaged, or absent",
                  "There is significant male factor infertility",
                  "Ovulation disorders like PCOS do not respond to simpler treatments",
                  "Endometriosis affects fertility",
                  "Infertility remains unexplained despite normal reports",
                  "Ovarian reserve is reduced or age-related decline is present",
                  "Genetic testing of embryos is medically indicated",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-[#47145a] flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>

              <p className="text-gray-700 leading-relaxed mb-6">
                Most patients reach IVF after trying other options such as lifestyle changes, ovulation induction, or
                IUI.
              </p>

              <Card className="border-2 border-[#47145a]/20 bg-purple-50 my-8">
                <CardContent className="p-6">
                  <p className="text-gray-700 leading-relaxed">
                    At Dr Vrushni's Women's Care & Fertility Clinic, IVF is never suggested in isolation. It follows a
                    careful review of medical history, test results, emotional readiness, and personal priorities.
                  </p>
                  <p className="text-gray-700 leading-relaxed mt-4 font-medium">
                    Sometimes, the most responsible decision is not IVF — and a trustworthy clinic will say that too.
                  </p>
                </CardContent>
              </Card>

              {/* IVF Step by Step */}
              <h2 className="text-3xl font-bold text-[#47145a] mb-4 mt-12">IVF Step-by-Step Process</h2>
              <h3 className="text-xl font-semibold text-gray-800 mb-6">How We Usually Explain IVF to Our Patients</h3>
              <p className="text-gray-700 leading-relaxed mb-6">
                When patients ask, "Doctor, can you explain IVF step by step?", we don't begin with technical terms.
              </p>
              <p className="text-gray-700 leading-relaxed mb-8 font-medium">We begin with the timeline.</p>
              <p className="text-gray-700 leading-relaxed mb-8">
                IVF is not one procedure — it is a sequence of planned steps, spread over a few weeks, with close
                monitoring to ensure safety and comfort.
              </p>

              {/* Step 1 */}
              <div className="bg-gradient-to-r from-[#47145a]/5 to-white border-l-4 border-[#47145a] p-6 rounded-r-lg mb-6">
                <h4 className="text-xl font-bold text-[#47145a] mb-3">
                  1. Ovarian Stimulation – Helping the Body Produce More Eggs
                </h4>
                <p className="text-gray-700 leading-relaxed mb-3">
                  In a natural cycle, one egg usually matures. For IVF, we encourage the ovaries to develop multiple
                  eggs using hormone injections for about 8–12 days.
                </p>
                <p className="text-gray-700 leading-relaxed mb-2 font-medium">During this time:</p>
                <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                  <li>Ultrasound scans and blood tests monitor follicle growth</li>
                  <li>Medication doses are adjusted based on your response</li>
                  <li>The aim is quality, not overstimulation</li>
                </ul>
                <p className="text-gray-700 leading-relaxed mt-3">
                  When the follicles are ready, a trigger injection prepares the eggs for retrieval.
                </p>
              </div>

              {/* Step 2 */}
              <div className="bg-gradient-to-r from-[#eb9142]/5 to-white border-l-4 border-[#eb9142] p-6 rounded-r-lg mb-6">
                <h4 className="text-xl font-bold text-[#47145a] mb-3">2. Egg Retrieval – A Short, Planned Procedure</h4>
                <p className="text-gray-700 leading-relaxed mb-3">
                  Egg retrieval is a minor, controlled procedure done 34–36 hours after the trigger injection.
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                  <li>Performed under short anesthesia or deep sedation</li>
                  <li>Usually takes 15–20 minutes</li>
                  <li>Eggs are collected using ultrasound guidance</li>
                </ul>
                <p className="text-gray-700 leading-relaxed mt-3">
                  Most patients go home the same day and resume normal activities within 24 hours.
                </p>
              </div>

              {/* Step 3 */}
              <div className="bg-gradient-to-r from-[#47145a]/5 to-white border-l-4 border-[#47145a] p-6 rounded-r-lg mb-6">
                <h4 className="text-xl font-bold text-[#47145a] mb-3">3. Sperm Collection & Fertilization</h4>
                <p className="text-gray-700 leading-relaxed mb-3">
                  On the same day, a sperm sample is collected or thawed if frozen.
                </p>
                <p className="text-gray-700 leading-relaxed mb-2 font-medium">In the lab:</p>
                <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                  <li>The healthiest sperm are selected</li>
                  <li>Fertilization occurs via conventional IVF or ICSI, depending on sperm quality</li>
                </ul>
                <p className="text-gray-700 leading-relaxed mt-3">
                  The skill of the embryology team plays a major role at this stage.
                </p>
              </div>

              {/* Step 4 */}
              <div className="bg-gradient-to-r from-[#47145a]/5 to-white border-l-4 border-[#47145a] p-6 rounded-r-lg mb-6">
                <h4 className="text-xl font-bold text-[#47145a] mb-3">4. Embryo Culture – Careful Observation</h4>
                <p className="text-gray-700 leading-relaxed mb-3">
                  Fertilized eggs are cultured for 3–5 days in specialized incubators.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  Embryos are assessed for development and quality. In some cases, embryos are frozen and transferred
                  later when the uterus is more receptive — a strategy often chosen for safety and better outcomes.
                </p>
              </div>

              {/* Step 5 */}
              <div className="bg-gradient-to-r from-[#47145a]/5 to-white border-l-4 border-[#47145a] p-6 rounded-r-lg mb-6">
                <h4 className="text-xl font-bold text-[#47145a] mb-3">
                  5. Embryo Transfer – Simple and Usually Painless
                </h4>
                <p className="text-gray-700 leading-relaxed mb-3">
                  Embryo transfer does not require anesthesia and feels similar to a Pap smear.
                </p>
                <p className="text-gray-700 leading-relaxed mb-2 font-medium">After transfer:</p>
                <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                  <li>Normal activity is encouraged</li>
                  <li>Progesterone support is prescribed</li>
                  <li>A pregnancy test is done after 12–14 days</li>
                </ul>
                <p className="text-gray-700 leading-relaxed mt-3">
                  The waiting period can be emotionally challenging, and support during this phase is just as important
                  as the procedure itself.
                </p>
              </div>

              {/* FAQs */}
              <h2 className="text-3xl font-bold text-[#47145a] mb-6 mt-12">Doctor-Style FAQs About IVF</h2>

              <div className="space-y-6">
                <Card className="border-2 border-[#47145a]/10">
                  <CardContent className="p-6">
                    <h4 className="text-lg font-bold text-[#47145a] mb-2">Is IVF painful?</h4>
                    <p className="text-gray-700 leading-relaxed">
                      IVF is usually not painful. Injections may cause mild discomfort, and egg retrieval is done under
                      anesthesia. Temporary cramping or bloating can occur afterward.
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-2 border-[#47145a]/10">
                  <CardContent className="p-6">
                    <h4 className="text-lg font-bold text-[#47145a] mb-2">How long does one IVF cycle take?</h4>
                    <p className="text-gray-700 leading-relaxed">
                      One IVF cycle typically takes 4–6 weeks, from starting injections to the pregnancy test.
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-2 border-[#47145a]/10">
                  <CardContent className="p-6">
                    <h4 className="text-lg font-bold text-[#47145a] mb-2">Can IVF guarantee pregnancy?</h4>
                    <p className="text-gray-700 leading-relaxed">
                      No. IVF cannot ethically guarantee pregnancy. Average success rates in India are about 30–40% per
                      cycle, depending on age and medical factors.
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-2 border-[#47145a]/10">
                  <CardContent className="p-6">
                    <h4 className="text-lg font-bold text-[#47145a] mb-2">Is IVF safe for the mother and baby?</h4>
                    <p className="text-gray-700 leading-relaxed">
                      IVF is considered safe when performed at a regulated fertility clinic. Most IVF-conceived babies
                      are as healthy as naturally conceived children.
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-2 border-[#47145a]/10">
                  <CardContent className="p-6">
                    <h4 className="text-lg font-bold text-[#47145a] mb-2">How many IVF cycles are usually needed?</h4>
                    <p className="text-gray-700 leading-relaxed">
                      Some patients conceive in the first cycle, while others may need more than one. The number of
                      cycles varies for each individual.
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-2 border-[#47145a]/10">
                  <CardContent className="p-6">
                    <h4 className="text-lg font-bold text-[#47145a] mb-2">Is IVF suitable after 35 or 40?</h4>
                    <p className="text-gray-700 leading-relaxed">
                      Yes, but success rates decline with age. Early evaluation and timely planning are especially
                      important after 35.
                    </p>
                  </CardContent>
                </Card>
              </div>

              {/* About the Clinic */}
              <Card className="border-2 border-[#47145a] bg-gradient-to-br from-[#47145a]/5 to-[#eb9142]/5 mt-12">
                <CardContent className="p-8">
                  <h2 className="text-2xl font-bold text-[#47145a] mb-4">About the Clinic</h2>
                  <h3 className="text-lg font-semibold text-gray-800 mb-4">Author & Medical Review</h3>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    Dr Vrushni's Women's Care & Fertility Clinic is a Mumbai-based center dedicated to ethical,
                    evidence-based fertility and women's healthcare.
                  </p>
                  <p className="text-gray-700 leading-relaxed mb-3 font-medium">Our approach emphasizes:</p>
                  <ul className="space-y-2 mb-6">
                    {[
                      "Individualized treatment planning",
                      "Transparent communication",
                      "Compliance with India's ART regulations",
                      "Avoidance of unnecessary interventions or unrealistic promises",
                    ].map((item, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-[#eb9142] flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700">{item}</span>
                      </li>
                    ))}
                  </ul>
                  <p className="text-sm text-gray-600 italic">
                    This content is written and reviewed for educational purposes and does not replace a personalized
                    medical consultation. Patients are encouraged to consult a qualified fertility specialist for
                    individualized advice.
                  </p>
                </CardContent>
              </Card>

              {/* Medical Disclaimer */}
              <Card className="border-2 border-orange-300 bg-orange-50 mt-8">
                <CardContent className="p-6">
                  <div className="flex gap-3">
                    <Info className="w-5 h-5 text-orange-600 flex-shrink-0 mt-1" />
                    <div>
                      <p className="text-sm text-gray-700 leading-relaxed mb-2">
                        <strong>Medical Disclaimer:</strong> This article is for educational purposes only and does not
                        constitute medical advice. Individual results may vary based on personal health factors.
                      </p>
                      <p className="text-sm text-gray-700 leading-relaxed">
                        <strong>Registration:</strong> MMC Registration - 2009020251 (Dr Vrushni Bhuta). We strictly
                        adhere to the PCPNDT Act and do not perform gender determination or sex selection services.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* CTA Section */}
            <div className="mt-16 pt-12 border-t border-gray-200">
              <div className="text-center mb-8">
                <h3 className="text-2xl md:text-3xl font-bold text-[#47145a] mb-4">
                  Ready to Start Your Fertility Journey?
                </h3>
                <p className="text-gray-600 max-w-2xl mx-auto">
                  Schedule a consultation with Dr Vrushni Bhuta to discuss your personalized IVF treatment plan
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="lg" className="bg-[#eb9142] hover:bg-[#d67f35] text-white px-8">
                  <Link href="/contact">Book Consultation</Link>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="border-2 border-[#47145a] text-[#47145a] hover:bg-[#47145a] hover:text-white px-8 bg-transparent"
                >
                  <Link href="/treatments/ivf">View IVF Treatment Details</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}
