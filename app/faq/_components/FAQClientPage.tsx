"use client"

import { Card, CardContent } from "@/components/ui/card"
import { ChevronDown } from "lucide-react"
import { useState } from "react"
import Link from "next/link"
import { InlineCallButton } from "@/components/InlineCallButton"

const faqs = [
  {
    category: "General",
    questions: [
      {
        question: "What is infertility?",
        answer: (
          <>
            Infertility is defined as the inability to conceive after one year of regular, unprotected intercourse. For
            women over 35, this period is reduced to six months. Infertility can affect both men and women and can be
            caused by various factors. Learn more about our{" "}
            <Link href="/treatments/fertility-assessment" className="text-[#eb9142] hover:underline font-semibold">
              Fertility Assessment & Counselling
            </Link>{" "}
            services.
          </>
        ),
      },
      {
        question: "When should I see a fertility specialist?",
        answer: (
          <>
            You should consider seeing a fertility specialist if you have been trying to conceive for over a year (or
            six months if you are over 35), have irregular periods, a history of pelvic infections, endometriosis, or if
            your partner has a low sperm count. Schedule a consultation with{" "}
            <Link href="/about" className="text-[#eb9142] hover:underline font-semibold">
              Dr. Vrushni Bhuta
            </Link>{" "}
            to discuss your concerns.
          </>
        ),
      },
      {
        question: "How do I prepare for my first consultation?",
        answer: (
          <>
            Before your first consultation, gather your medical history, including any previous pregnancies, surgeries,
            or medical conditions. Bring records of any fertility tests you have already done. Make a list of questions
            you want to ask, and if possible, bring your partner along.{" "}
            <Link href="/contact" className="text-[#eb9142] hover:underline font-semibold">
              Book your appointment
            </Link>{" "}
            today.
          </>
        ),
      },
    ],
  },
  {
    category: "IVF & ICSI",
    questions: [
      {
        question: "What is the difference between IVF and ICSI?",
        answer: (
          <>
            <Link href="/treatments/ivf-treatment" className="text-[#eb9142] hover:underline font-semibold">
              IVF (In Vitro Fertilisation)
            </Link>{" "}
            involves placing eggs and sperm together in a laboratory dish for natural fertilisation.{" "}
            <Link href="/treatments/icsi-treatment" className="text-[#eb9142] hover:underline font-semibold">
              ICSI (Intracytoplasmic Sperm Injection)
            </Link>{" "}
            involves injecting a single sperm directly into an egg. ICSI is typically used when there are male factor
            infertility issues or when previous IVF attempts have failed.
          </>
        ),
      },
      {
        question: "How long does the IVF process take?",
        answer: (
          <>
            A typical{" "}
            <Link href="/treatments/ivf-treatment" className="text-[#eb9142] hover:underline font-semibold">
              IVF cycle
            </Link>{" "}
            takes about 4-6 weeks from the start of ovarian stimulation to embryo transfer. This includes 10-14 days of
            hormone injections to stimulate egg production, egg retrieval, fertilisation, embryo culture (3-5 days), and
            embryo transfer. A pregnancy test is done about 2 weeks after the transfer.
          </>
        ),
      },
      {
        question: "What is the success rate of IVF?",
        answer: (
          <>
            IVF success rates vary depending on age, health factors, and the clinic's expertise. Generally, women under
            35 have a success rate of 40-50% per cycle, while women over 40 have a success rate of 10-20%. Dr Vrushni
            Bhuta's clinic maintains a success rate of approximately 85% across all age groups. Learn more about our{" "}
            <Link href="/treatments/ivf-treatment" className="text-[#eb9142] hover:underline font-semibold">
              IVF Treatment
            </Link>{" "}
            approach.
          </>
        ),
      },
      {
        question: "Is IVF painful?",
        answer: (
          <>
            Most{" "}
            <Link href="/treatments/ivf-treatment" className="text-[#eb9142] hover:underline font-semibold">
              IVF procedures
            </Link>{" "}
            are not particularly painful. The daily hormone injections may cause some discomfort. The egg retrieval is
            performed under sedation, so you won't feel pain during the procedure, though you may experience mild
            cramping afterward. The embryo transfer is generally painless.
          </>
        ),
      },
    ],
  },
  {
    category: "Other Treatments",
    questions: [
      {
        question: "What is IUI and when is it recommended?",
        answer: (
          <>
            <Link href="/treatments/iui-treatment" className="text-[#eb9142] hover:underline font-semibold">
              IUI (Intrauterine Insemination)
            </Link>{" "}
            involves placing washed sperm directly into the uterus around the time of ovulation. It is recommended for
            couples with unexplained infertility, mild male factor infertility, cervical mucus problems, or when using
            donor sperm.
          </>
        ),
      },
      {
        question: "What is egg freezing and who should consider it?",
        answer: (
          <>
            <Link href="/treatments/egg-freezing" className="text-[#eb9142] hover:underline font-semibold">
              Egg freezing (oocyte cryopreservation)
            </Link>{" "}
            is a process where a woman's eggs are extracted, frozen, and stored for future use. It is recommended for
            women who want to delay childbearing for personal or medical reasons, those undergoing cancer treatment, or
            women with a family history of early menopause.
          </>
        ),
      },
      {
        question: "What is surrogacy and when is it recommended?",
        answer: (
          <>
            <Link href="/treatments/surrogacy" className="text-[#eb9142] hover:underline font-semibold">
              Surrogacy
            </Link>{" "}
            is when another woman carries and delivers a baby for a couple. It is recommended when a woman cannot carry
            a pregnancy due to uterine abnormalities, repeated IVF failures, medical conditions that make pregnancy
            dangerous, or absence of a uterus.
          </>
        ),
      },
    ],
  },
  {
    category: "Costs & Insurance",
    questions: [
      {
        question: "How much does fertility treatment cost?",
        answer: (
          <>
            Costs vary depending on the type of treatment. Basic treatments like{" "}
            <Link href="/treatments/iui-treatment" className="text-[#eb9142] hover:underline font-semibold">
              IUI
            </Link>{" "}
            may cost less, while{" "}
            <Link href="/treatments/ivf-treatment" className="text-[#eb9142] hover:underline font-semibold">
              IVF
            </Link>{" "}
            and{" "}
            <Link href="/treatments/icsi-treatment" className="text-[#eb9142] hover:underline font-semibold">
              ICSI
            </Link>{" "}
            treatments are more expensive. The exact cost depends on medications, tests, and the number of cycles
            needed. Please{" "}
            <Link href="/contact" className="text-[#eb9142] hover:underline font-semibold">
              contact our clinic
            </Link>{" "}
            for a personalized cost estimate.
          </>
        ),
      },
      {
        question: "Is fertility treatment covered by insurance?",
        answer: (
          <>
            Insurance coverage for fertility treatments varies widely by policy and provider. Some insurance plans cover
            diagnostic testing and certain treatments, while others do not. We recommend checking with your insurance
            provider to understand your coverage. Our staff can help you with insurance-related queries.{" "}
            <Link href="/contact" className="text-[#eb9142] hover:underline font-semibold">
              Contact us
            </Link>{" "}
            for assistance.
          </>
        ),
      },
    ],
  },
  {
    category: "Lifestyle & Preparation",
    questions: [
      {
        question: "What lifestyle changes can improve fertility?",
        answer: (
          <>
            Maintaining a healthy weight, eating a balanced diet rich in fruits and vegetables, regular exercise,
            avoiding smoking and excessive alcohol, managing stress, and getting adequate sleep can all improve
            fertility. Both partners should adopt these habits for the best results. Learn more in our{" "}
            <Link href="/treatments/fertility-assessment" className="text-[#eb9142] hover:underline font-semibold">
              Fertility Assessment
            </Link>{" "}
            consultation.
          </>
        ),
      },
      {
        question: "Do I need to take any supplements?",
        answer: (
          <>
            Folic acid is essential for women trying to conceive, as it helps prevent neural tube defects. Other
            supplements like vitamin D, omega-3 fatty acids, and CoQ10 may also be beneficial. However, always consult
            with{" "}
            <Link href="/about" className="text-[#eb9142] hover:underline font-semibold">
              your doctor
            </Link>{" "}
            before starting any supplements.
          </>
        ),
      },
      {
        question: "How does age affect fertility?",
        answer: (
          <>
            Age is one of the most important factors affecting fertility. Women's fertility begins to decline in their
            early 30s and more rapidly after age 35. Men's fertility also decreases with age, though not as
            dramatically. Egg quality and quantity decrease with age, which affects the chances of conception and
            increases the risk of miscarriage. Consider{" "}
            <Link href="/treatments/egg-freezing" className="text-[#eb9142] hover:underline font-semibold">
              egg freezing
            </Link>{" "}
            if you wish to preserve your fertility.
          </>
        ),
      },
    ],
  },
]

export default function FAQClientPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  let questionIndex = 0

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[#47145a] to-[#5a1b71] text-white py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <span className="text-[#eb9142] font-bold text-sm tracking-wider uppercase">FAQ</span>
            <h1 className="text-4xl md:text-5xl font-extrabold mt-4 mb-6">Frequently Asked Questions</h1>
            <p className="text-xl text-gray-200">
              Find answers to common questions about fertility treatments and our clinic
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Content */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          {faqs.map((category, categoryIndex) => (
            <div key={categoryIndex} className="mb-12">
              <h2 className="text-2xl font-bold text-[#47145a] mb-6">{category.category}</h2>
              <div className="space-y-4">
                {category.questions.map((faq) => {
                  const currentIndex = questionIndex++
                  return (
                    <Card
                      key={currentIndex}
                      className="border-2 border-gray-100 hover:border-[#eb9142] transition-colors"
                    >
                      <CardContent className="p-0">
                        <button
                          onClick={() => toggleFAQ(currentIndex)}
                          className="w-full text-left p-6 flex justify-between items-start gap-4"
                        >
                          <span className="font-semibold text-[#47145a] pr-4">{faq.question}</span>
                          <ChevronDown
                            className={`w-5 h-5 text-[#eb9142] flex-shrink-0 transition-transform ${
                              openIndex === currentIndex ? "transform rotate-180" : ""
                            }`}
                          />
                        </button>
                        {openIndex === currentIndex && (
                          <div className="px-6 pb-6">
                            <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                          </div>
                        )}
                      </CardContent>
                    </Card>
                  )
                })}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Still Have Questions Section */}
      <section className="py-20 bg-gradient-to-b from-white to-[#fbf7f6]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-[#47145a] mb-6">Still have questions?</h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            We're here to help. Contact us to schedule a consultation and get personalized answers to your questions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-3 text-base font-medium rounded-md text-white bg-[#eb9142] hover:bg-[#d67f35] transition-colors"
            >
              Get in touch
            </a>
            <InlineCallButton variant="secondary" text="Or Call +91 9820086575" />
          </div>
        </div>
      </section>
    </div>
  )
}
