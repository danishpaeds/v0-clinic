import type React from "react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Fertility Treatment FAQ - Common Questions Answered | Dr. Vrushni Bhuta",
  description:
    "Find answers to frequently asked questions about IVF, IUI, ICSI, egg freezing, and other fertility treatments. Expert guidance from Dr. Vrushni Bhuta in Mumbai.",
  keywords:
    "fertility FAQ, IVF questions, IUI answers, fertility treatment cost, success rates, egg freezing questions, Mumbai fertility clinic FAQ",
  openGraph: {
    title: "Fertility Treatment FAQ - Dr. Vrushni Bhuta",
    description:
      "Comprehensive answers to your fertility treatment questions from Mumbai's leading fertility specialist.",
    type: "website",
  },
}

export default function FAQLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "What is infertility?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Infertility is defined as the inability to conceive after one year of regular, unprotected intercourse. For women over 35, this period is reduced to six months. Infertility can affect both men and women and can be caused by various factors.",
        },
      },
      {
        "@type": "Question",
        name: "When should I see a fertility specialist?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "You should consider seeing a fertility specialist if you have been trying to conceive for over a year (or six months if you are over 35), have irregular periods, a history of pelvic infections, endometriosis, or if your partner has a low sperm count.",
        },
      },
      {
        "@type": "Question",
        name: "What is the difference between IVF and ICSI?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "IVF (In Vitro Fertilisation) involves placing eggs and sperm together in a laboratory dish for natural fertilisation. ICSI (Intracytoplasmic Sperm Injection) involves injecting a single sperm directly into an egg. ICSI is typically used when there are male factor infertility issues or when previous IVF attempts have failed.",
        },
      },
      {
        "@type": "Question",
        name: "How long does the IVF process take?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "A typical IVF cycle takes about 4-6 weeks from the start of ovarian stimulation to embryo transfer. This includes 10-14 days of hormone injections to stimulate egg production, egg retrieval, fertilisation, embryo culture (3-5 days), and embryo transfer. A pregnancy test is done about 2 weeks after the transfer.",
        },
      },
      {
        "@type": "Question",
        name: "What is the success rate of IVF?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "IVF success rates vary depending on age, health factors, and the clinic's expertise. Generally, women under 35 have a success rate of 40-50% per cycle, while women over 40 have a success rate of 10-20%. Dr Vrushni Bhuta's clinic maintains a success rate of approximately 85% across all age groups.",
        },
      },
      {
        "@type": "Question",
        name: "Is IVF painful?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Most IVF procedures are not particularly painful. The daily hormone injections may cause some discomfort. The egg retrieval is performed under sedation, so you won't feel pain during the procedure, though you may experience mild cramping afterward. The embryo transfer is generally painless.",
        },
      },
      {
        "@type": "Question",
        name: "What is IUI and when is it recommended?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "IUI (Intrauterine Insemination) involves placing washed sperm directly into the uterus around the time of ovulation. It is recommended for couples with unexplained infertility, mild male factor infertility, cervical mucus problems, or when using donor sperm.",
        },
      },
      {
        "@type": "Question",
        name: "What is egg freezing and who should consider it?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Egg freezing (oocyte cryopreservation) is a process where a woman's eggs are extracted, frozen, and stored for future use. It is recommended for women who want to delay childbearing for personal or medical reasons, those undergoing cancer treatment, or women with a family history of early menopause.",
        },
      },
      {
        "@type": "Question",
        name: "How much does fertility treatment cost?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Costs vary depending on the type of treatment. Basic treatments like IUI may cost less, while IVF and ICSI treatments are more expensive. The exact cost depends on medications, tests, and the number of cycles needed. Contact the clinic for a personalized cost estimate.",
        },
      },
      {
        "@type": "Question",
        name: "What lifestyle changes can improve fertility?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Maintaining a healthy weight, eating a balanced diet rich in fruits and vegetables, regular exercise, avoiding smoking and excessive alcohol, managing stress, and getting adequate sleep can all improve fertility. Both partners should adopt these habits for the best results.",
        },
      },
      {
        "@type": "Question",
        name: "How does age affect fertility?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Age is one of the most important factors affecting fertility. Women's fertility begins to decline in their early 30s and more rapidly after age 35. Men's fertility also decreases with age, though not as dramatically. Egg quality and quantity decrease with age, which affects the chances of conception and increases the risk of miscarriage.",
        },
      },
    ],
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      {children}
    </>
  )
}
