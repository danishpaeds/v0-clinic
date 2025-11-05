import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowLeft, Phone, CheckCircle2, Clock, AlertCircle, MapPin } from "lucide-react"
import { notFound } from "next/navigation"
import type { Metadata } from "next"

const treatments: Record<
  string,
  {
    title: string
    subtitle: string
    overview: string
    detailedDescription: string[]
    process?: { title: string; description: string }[]
    benefits?: string[]
    whoShouldConsider?: string[]
    successRate?: string
    duration?: string
    recovery?: string
    risks?: string[]
    faqs?: { question: string; answer: string }[]
  }
> = {
  iui: {
    title: "IUI (Intrauterine Insemination)",
    subtitle: "Minimally Invasive Fertility Treatment in Mumbai",
    overview:
      "IUI is a fertility treatment where washed and concentrated sperm is placed directly into the uterus around the time of ovulation. This procedure increases the number of sperm that reach the fallopian tubes and subsequently increases the chance of fertilization.",
    detailedDescription: [
      "Intrauterine Insemination (IUI) is one of the most commonly performed fertility treatments at our Mumbai clinic. This procedure involves placing specially prepared sperm directly into a woman's uterus during ovulation, bypassing the cervix and bringing the sperm closer to the egg.",
      "At Dr. Vrushni Bhuta's clinic in Powai and Santacruz, we use advanced sperm washing techniques to select the healthiest, most motile sperm for the procedure. This significantly increases the chances of successful fertilization compared to natural conception.",
      "The procedure is quick, relatively painless, and can be performed in our Mumbai clinic without anesthesia. Many couples choose IUI as their first line of fertility treatment due to its non-invasive nature and lower cost compared to IVF.",
    ],
    process: [
      {
        title: "Ovulation Monitoring",
        description:
          "We track your ovulation cycle using ultrasound scans and blood tests to determine the optimal time for insemination. This typically involves 2-3 clinic visits during your cycle.",
      },
      {
        title: "Sperm Collection & Preparation",
        description:
          "On the day of the procedure, sperm is collected and processed in our state-of-the-art laboratory in Mumbai. The washing process concentrates the healthiest sperm and removes impurities.",
      },
      {
        title: "Insemination Procedure",
        description:
          "Using a thin, flexible catheter, the prepared sperm is gently inserted through the cervix into the uterus. The procedure takes only a few minutes and causes minimal discomfort.",
      },
      {
        title: "Post-Procedure Rest",
        description:
          "You'll rest comfortably in our clinic for 10-15 minutes after the procedure. Most patients return to normal activities the same day.",
      },
      {
        title: "Pregnancy Test",
        description:
          "Two weeks after the procedure, we'll perform a blood test to check for pregnancy. We provide comprehensive support throughout this waiting period.",
      },
    ],
    benefits: [
      "Less invasive than IVF with no surgery required",
      "Lower cost compared to other assisted reproductive technologies",
      "Minimal discomfort during the procedure",
      "Can be combined with fertility medications for better results",
      "Quick recovery time - return to work the same day",
      "Natural fertilization process in the body",
      "Multiple cycles can be attempted if needed",
    ],
    whoShouldConsider: [
      "Couples with unexplained infertility",
      "Women with cervical mucus problems or cervical factor infertility",
      "Men with mild male factor infertility (low sperm count or motility)",
      "Couples using donor sperm",
      "Women with ovulation disorders (when combined with medication)",
      "Same-sex female couples",
      "Single women using donor sperm",
    ],
    successRate: "15-20% per cycle for women under 35, with cumulative success rates of 40-50% after 3-4 cycles",
    duration: "The procedure itself takes 10-15 minutes, with the full cycle taking about 2-3 weeks",
    recovery: "Immediate - most patients resume normal activities the same day",
    risks: [
      "Multiple pregnancy (if fertility medications are used)",
      "Mild cramping or spotting after the procedure",
      "Small risk of infection (less than 1%)",
      "Ovarian hyperstimulation syndrome (if medications are used)",
    ],
    faqs: [
      {
        question: "How many IUI cycles should I try before considering IVF?",
        answer:
          "Most fertility specialists, including Dr. Vrushni Bhuta, recommend trying 3-4 IUI cycles before moving to IVF. However, this depends on your age, diagnosis, and individual circumstances.",
      },
      {
        question: "Is IUI painful?",
        answer:
          "Most women experience minimal discomfort during IUI, similar to a pap smear. Some may feel mild cramping, but the procedure is generally well-tolerated without anesthesia.",
      },
      {
        question: "Can I travel after IUI?",
        answer:
          "Yes, you can travel after IUI. We recommend avoiding strenuous activities for 24 hours, but normal activities including travel are generally fine.",
      },
    ],
  },
  icsi: {
    title: "ICSI (Intracytoplasmic Sperm Injection)",
    subtitle: "Advanced Fertilization Technique for Male Factor Infertility",
    overview:
      "ICSI is a specialized form of IVF where a single sperm is injected directly into an egg using sophisticated micromanipulation equipment. This technique is particularly useful for male factor infertility and has revolutionized treatment for couples who previously had limited options.",
    detailedDescription: [
      "Intracytoplasmic Sperm Injection (ICSI) represents one of the most significant advances in assisted reproductive technology. At our Mumbai fertility clinic, we use state-of-the-art micromanipulation equipment to perform this delicate procedure with exceptional precision.",
      "ICSI was developed to overcome severe male factor infertility, but it's now also used in cases of previous fertilization failure, when using frozen sperm, or with preimplantation genetic testing. The technique requires only one viable sperm per egg, making it possible for men with very low sperm counts to father biological children.",
      "Dr. Vrushni Bhuta and our experienced embryologists in Powai and Santacruz have performed thousands of successful ICSI procedures, achieving fertilization rates of 70-80% and helping countless couples achieve their dream of parenthood.",
    ],
    process: [
      {
        title: "Ovarian Stimulation",
        description:
          "Similar to IVF, you'll receive hormone injections for 8-14 days to stimulate your ovaries to produce multiple eggs. We monitor your progress with regular ultrasounds and blood tests at our Mumbai clinic.",
      },
      {
        title: "Egg Retrieval",
        description:
          "Under light sedation, we collect mature eggs from your ovaries using ultrasound-guided aspiration. This 20-30 minute procedure is performed in our fully-equipped surgical suite.",
      },
      {
        title: "Sperm Collection & Selection",
        description:
          "On the same day as egg retrieval, sperm is collected and our embryologists carefully select the healthiest, most motile sperm for injection. Even with very low sperm counts, we can often find viable sperm.",
      },
      {
        title: "ICSI Procedure",
        description:
          "Using a specialized microscope and micromanipulation tools, a single sperm is injected directly into each mature egg. This delicate procedure is performed by our highly trained embryologists.",
      },
      {
        title: "Embryo Culture & Monitoring",
        description:
          "Fertilized eggs are cultured in our advanced laboratory for 3-5 days. We monitor their development daily to select the healthiest embryos for transfer.",
      },
      {
        title: "Embryo Transfer",
        description:
          "One or two high-quality embryos are transferred into your uterus using a thin catheter. This painless procedure takes just a few minutes.",
      },
      {
        title: "Pregnancy Test",
        description:
          "Two weeks after embryo transfer, we perform a blood test to confirm pregnancy. We provide comprehensive support throughout your journey.",
      },
    ],
    benefits: [
      "Overcomes severe male factor infertility",
      "Higher fertilization rates (70-80%) compared to conventional IVF",
      "Requires only one viable sperm per egg",
      "Can use surgically retrieved sperm (TESA/PESA)",
      "Effective for previous IVF fertilization failures",
      "Enables genetic testing of embryos (PGT)",
      "Similar pregnancy rates to conventional IVF",
      "Gives hope to couples with severe male infertility",
    ],
    whoShouldConsider: [
      "Men with very low sperm count (severe oligospermia)",
      "Men with poor sperm motility (asthenospermia)",
      "Men with abnormal sperm morphology (teratospermia)",
      "Previous failed fertilization with conventional IVF",
      "Use of surgically retrieved sperm (azoospermia)",
      "Couples using frozen sperm",
      "When preimplantation genetic testing is planned",
      "Unexplained infertility with previous IVF failure",
    ],
    successRate:
      "50-60% pregnancy rate per cycle for women under 35, with success rates comparable to conventional IVF",
    duration: "The full ICSI cycle takes approximately 4-6 weeks from start to pregnancy test",
    recovery: "2-3 days rest recommended after egg retrieval; embryo transfer requires no recovery time",
    risks: [
      "Ovarian hyperstimulation syndrome (OHSS) from hormone medications",
      "Multiple pregnancy if more than one embryo is transferred",
      "Ectopic pregnancy (1-2% risk)",
      "Miscarriage (similar to natural conception rates)",
      "Rare risk of damage to eggs during injection (less than 5%)",
      "Emotional and financial stress",
    ],
    faqs: [
      {
        question: "Is ICSI better than regular IVF?",
        answer:
          "ICSI is not necessarily 'better' but is specifically indicated for male factor infertility or previous fertilization failure. For couples without these issues, conventional IVF may be equally effective and is often the first choice.",
      },
      {
        question: "Will ICSI affect my baby's health?",
        answer:
          "Extensive research shows that children born through ICSI are as healthy as those conceived naturally or through conventional IVF. However, male infertility factors may be passed to male offspring.",
      },
      {
        question: "How much does ICSI cost in Mumbai?",
        answer:
          "ICSI typically adds ₹25,000-50,000 to the cost of IVF. We provide detailed cost breakdowns during your consultation and offer flexible payment options.",
      },
    ],
  },
  "egg-freezing": {
    title: "Egg Freezing (Oocyte Cryopreservation)",
    subtitle: "Preserve Your Fertility for the Future in Mumbai",
    overview:
      "Egg freezing allows women to preserve their eggs at their current age and quality for future use. This revolutionary technology gives you the flexibility to delay childbearing while maintaining your fertility potential, whether for medical, personal, or professional reasons.",
    detailedDescription: [
      "Egg freezing, also known as oocyte cryopreservation, has become increasingly popular among women in Mumbai who want to preserve their fertility. At Dr. Vrushni Bhuta's clinic in Powai and Santacruz, we use the latest vitrification technology, which has dramatically improved egg survival rates to over 90%.",
      "Whether you're focusing on your career, haven't found the right partner, or are facing medical treatments that may affect your fertility, egg freezing offers peace of mind and reproductive autonomy. The procedure is similar to the first half of an IVF cycle, involving ovarian stimulation and egg retrieval.",
      "Our Mumbai clinic has helped hundreds of women preserve their fertility. We provide comprehensive counseling to help you understand the process, success rates, and what to expect when you're ready to use your frozen eggs in the future.",
    ],
    process: [
      {
        title: "Initial Consultation & Testing",
        description:
          "We assess your ovarian reserve through blood tests (AMH, FSH) and ultrasound to determine how many eggs you're likely to retrieve. This helps us create a personalized treatment plan.",
      },
      {
        title: "Ovarian Stimulation",
        description:
          "You'll self-administer hormone injections for 10-14 days to stimulate your ovaries to produce multiple eggs. We monitor your progress with regular ultrasounds and blood tests at our Mumbai clinic.",
      },
      {
        title: "Trigger Injection",
        description:
          "When your eggs are mature, you'll receive a final 'trigger' injection to prepare them for retrieval. The egg collection is scheduled precisely 36 hours later.",
      },
      {
        title: "Egg Retrieval",
        description:
          "Under light sedation, we collect your eggs using ultrasound-guided aspiration. This 20-30 minute procedure is performed in our state-of-the-art facility in Mumbai.",
      },
      {
        title: "Vitrification (Flash Freezing)",
        description:
          "Mature eggs are immediately frozen using vitrification, a rapid freezing technique that prevents ice crystal formation and maximizes survival rates.",
      },
      {
        title: "Long-term Storage",
        description:
          "Your eggs are stored in liquid nitrogen at -196°C in our secure facility. They can remain frozen indefinitely without deterioration in quality.",
      },
    ],
    benefits: [
      "Preserves fertility at your current age",
      "Provides reproductive flexibility and autonomy",
      "No time pressure for finding a partner or starting a family",
      "Can be done before cancer treatment or surgery",
      "High egg survival rates (90%+) with modern vitrification",
      "Eggs don't age while frozen",
      "Can freeze eggs multiple times to increase numbers",
      "Peace of mind about future fertility",
    ],
    whoShouldConsider: [
      "Women in their late 20s to late 30s wanting to delay childbearing",
      "Women facing cancer treatment (chemotherapy/radiation)",
      "Women with family history of early menopause",
      "Women with endometriosis or other conditions affecting fertility",
      "Women pursuing career or education goals",
      "Women who haven't found the right partner",
      "Women with religious or ethical concerns about embryo freezing",
      "Women in high-risk professions or environments",
    ],
    successRate:
      "Success rates depend on age at freezing: 50-60% live birth rate per egg for women under 35, 30-40% for women 35-40",
    duration: "The full cycle takes 2-3 weeks from start to egg retrieval",
    recovery: "1-2 days rest after egg retrieval; most women return to work within 2-3 days",
    risks: [
      "Ovarian hyperstimulation syndrome (OHSS) - usually mild",
      "Bleeding or infection from egg retrieval (rare, less than 1%)",
      "Reaction to anesthesia (very rare)",
      "Emotional stress during the process",
      "No guarantee of future pregnancy",
      "Cost of storage fees over time",
    ],
    faqs: [
      {
        question: "What's the best age to freeze eggs?",
        answer:
          "The ideal age is late 20s to early 30s when egg quality is highest. However, women up to age 40 can benefit from egg freezing. Dr. Bhuta will assess your individual situation during consultation.",
      },
      {
        question: "How many eggs should I freeze?",
        answer:
          "We typically recommend freezing 15-20 mature eggs to have a good chance of future pregnancy. This may require 1-2 cycles depending on your age and ovarian reserve.",
      },
      {
        question: "How long can eggs stay frozen?",
        answer:
          "Eggs can remain frozen indefinitely without deterioration. Successful pregnancies have been achieved with eggs frozen for over 10 years.",
      },
      {
        question: "What's the cost of egg freezing in Mumbai?",
        answer:
          "The initial cycle costs approximately ₹1.5-2.5 lakhs, plus annual storage fees of ₹10,000-20,000. We provide detailed cost breakdowns and payment plans during consultation.",
      },
    ],
  },
  "pre-conceptional-counselling": {
    title: "Pre-conceptional Counselling",
    subtitle: "Prepare for a Healthy Pregnancy in Mumbai",
    overview:
      "Comprehensive guidance and screening to optimize your health before conception, ensuring the best possible outcomes for both mother and baby. Our pre-conceptional counselling in Mumbai covers medical history, lifestyle factors, genetic screening, and personalized recommendations.",
    detailedDescription: [
      "Pre-conceptional counselling is an essential first step in your fertility journey. At Dr. Vrushni Bhuta's clinic in Powai and Santacruz, we provide comprehensive assessments to identify and address any factors that might affect your ability to conceive or have a healthy pregnancy.",
      "This proactive approach allows us to optimize your health, address any medical conditions, review medications, and provide guidance on nutrition, supplements, and lifestyle modifications. We also conduct necessary screening tests to identify potential risks early.",
      "Our Mumbai clinic offers personalized counselling sessions where we discuss your medical history, family history, lifestyle factors, and any concerns you may have. This sets the foundation for a successful pregnancy journey.",
    ],
    process: [
      {
        title: "Comprehensive Medical History",
        description:
          "We review your complete medical history, including previous pregnancies, surgeries, chronic conditions, medications, and family history of genetic disorders.",
      },
      {
        title: "Physical Examination",
        description:
          "A thorough physical examination including BMI assessment, blood pressure check, and gynecological examination to identify any potential issues.",
      },
      {
        title: "Laboratory Testing",
        description:
          "Blood tests to check for anemia, blood type, immunity to infections (rubella, chickenpox), thyroid function, diabetes screening, and sexually transmitted infections.",
      },
      {
        title: "Genetic Screening",
        description:
          "Based on your family history and ethnicity, we may recommend genetic carrier screening for conditions like thalassemia, sickle cell disease, or cystic fibrosis.",
      },
      {
        title: "Lifestyle Counselling",
        description:
          "Personalized advice on nutrition, exercise, weight management, stress reduction, and avoiding harmful substances like alcohol and tobacco.",
      },
      {
        title: "Supplement Recommendations",
        description:
          "Guidance on essential supplements including folic acid, vitamin D, iron, and other nutrients important for conception and early pregnancy.",
      },
    ],
    benefits: [
      "Identifies and addresses health issues before pregnancy",
      "Optimizes nutrition and lifestyle for conception",
      "Reviews and adjusts medications for pregnancy safety",
      "Provides genetic counseling if needed",
      "Updates vaccination status",
      "Reduces risk of pregnancy complications",
      "Improves chances of healthy conception",
      "Provides peace of mind and preparation",
    ],
    whoShouldConsider: [
      "All couples planning to conceive",
      "Women with chronic medical conditions (diabetes, hypertension, thyroid disorders)",
      "Women taking regular medications",
      "Couples with family history of genetic disorders",
      "Women who have had previous pregnancy complications",
      "Women over 35 planning pregnancy",
      "Couples who have experienced recurrent miscarriages",
      "Anyone wanting to optimize their health before conception",
    ],
    duration: "Initial consultation takes 45-60 minutes; follow-up visits as needed",
    faqs: [
      {
        question: "When should I schedule pre-conceptional counselling?",
        answer:
          "Ideally 3-6 months before you plan to start trying to conceive. This gives enough time to address any issues and optimize your health.",
      },
      {
        question: "Is pre-conceptional counselling necessary if I'm healthy?",
        answer:
          "Yes, even healthy women benefit from pre-conceptional counselling. It ensures you're taking the right supplements, have updated vaccinations, and are aware of any hidden risk factors.",
      },
    ],
  },
  "follicular-monitoring": {
    title: "Follicular Monitoring",
    subtitle: "Precise Ovulation Tracking in Mumbai",
    overview:
      "Series of painless ultrasound scans performed at regular intervals to assess the growth and development of ovarian follicles, helping to time intercourse or fertility procedures optimally for maximum success.",
    detailedDescription: [
      "Follicular monitoring is a crucial component of many fertility treatments at our Mumbai clinic. Using transvaginal ultrasound, we track the development of follicles (fluid-filled sacs containing eggs) in your ovaries throughout your menstrual cycle.",
      "This precise monitoring allows us to identify the optimal time for conception, whether through natural intercourse, IUI, or IVF. At Dr. Vrushni Bhuta's clinic in Powai and Santacruz, we use high-resolution ultrasound equipment to provide accurate assessments.",
      "Follicular monitoring is particularly important when using fertility medications, as it helps us adjust dosages and timing to maximize your chances of success while minimizing risks like multiple pregnancy or ovarian hyperstimulation.",
    ],
    process: [
      {
        title: "Baseline Scan",
        description:
          "On day 2-3 of your menstrual cycle, we perform an initial ultrasound to assess your ovaries and ensure there are no cysts or abnormalities before starting treatment.",
      },
      {
        title: "Mid-Cycle Monitoring",
        description:
          "Starting around day 8-10, we perform regular ultrasounds (every 2-3 days) to measure follicle size and endometrial thickness. Each scan takes just 5-10 minutes.",
      },
      {
        title: "Hormone Level Checks",
        description:
          "We may also check blood hormone levels (estradiol, LH) to confirm follicle maturity and predict ovulation timing.",
      },
      {
        title: "Trigger Timing",
        description:
          "When follicles reach optimal size (18-22mm), we advise on the best timing for intercourse, IUI, or trigger injection for egg retrieval.",
      },
      {
        title: "Post-Ovulation Confirmation",
        description: "A final scan may be performed to confirm ovulation has occurred and assess the corpus luteum.",
      },
    ],
    benefits: [
      "Precise ovulation timing for optimal conception",
      "Non-invasive and painless procedure",
      "Helps optimize treatment timing",
      "Monitors response to fertility medications",
      "Reduces risk of multiple pregnancy",
      "Increases success rates of fertility treatments",
      "Identifies potential issues early",
      "Provides valuable information about ovarian function",
    ],
    whoShouldConsider: [
      "Women undergoing IUI treatment",
      "Women taking fertility medications (Clomid, Letrozole)",
      "Couples timing intercourse for conception",
      "Women with irregular menstrual cycles",
      "Women preparing for IVF",
      "Women with PCOS or ovulation disorders",
      "Couples with unexplained infertility",
    ],
    duration: "Each ultrasound scan takes 5-10 minutes; typically 3-4 scans per cycle",
    faqs: [
      {
        question: "Is follicular monitoring painful?",
        answer:
          "No, transvaginal ultrasound is generally painless. Some women may experience mild discomfort, but the procedure is quick and well-tolerated.",
      },
      {
        question: "How many scans will I need?",
        answer:
          "Typically 3-4 scans per cycle, but this varies based on your individual response and treatment protocol. We'll create a personalized monitoring schedule for you.",
      },
    ],
  },
  "testicular-sperm-aspiration": {
    title: "Testicular Sperm Aspiration & Biopsy",
    subtitle: "Surgical Sperm Retrieval in Mumbai",
    overview:
      "Specialized surgical techniques to retrieve sperm directly from the testicles for men with obstructive or non-obstructive azoospermia. This procedure offers a path to biological fatherhood for men who previously had limited options.",
    detailedDescription: [
      "Testicular Sperm Aspiration (TSA) and Testicular Sperm Extraction (TESE) are advanced surgical procedures performed at our Mumbai fertility clinic to obtain sperm directly from the testicular tissue.",
      "These techniques are vital for men diagnosed with azoospermia, a condition where no sperm is found in the ejaculate. This can be due to blockages in the reproductive tract (obstructive azoospermia) or issues with sperm production (non-obstructive azoospermia).",
      "Dr. Vrushni Bhuta and our team utilize minimally invasive techniques with high-resolution microscopes to maximize the chances of retrieving viable sperm, which can then be used for ICSI, offering hope to many couples.",
    ],
    process: [
      {
        title: "Pre-procedure Consultation",
        description:
          "We'll discuss your medical history, perform a physical examination, and explain the procedure in detail. Blood tests may be conducted.",
      },
      {
        title: "Anesthesia",
        description:
          "The procedure is typically performed under local anesthesia with sedation, ensuring your comfort.",
      },
      {
        title: "Sperm Retrieval",
        description:
          "Using a fine needle (TSA) or a small surgical incision (TESE), sperm is carefully retrieved from one or both testicles.",
      },
      {
        title: "Laboratory Analysis",
        description:
          "The retrieved tissue is processed in our lab to isolate any viable sperm. This is often done on the same day as egg retrieval for IVF/ICSI.",
      },
      {
        title: "Cryopreservation",
        description: "Any retrieved sperm can be frozen for future use in ICSI cycles.",
      },
    ],
    benefits: [
      "Enables biological fatherhood for men with azoospermia",
      "Can be used with ICSI to achieve fertilization",
      "Minimally invasive techniques",
      "High success rates in experienced hands",
      "Sperm can be cryopreserved for future use",
      "Provides a viable option for men with failed vasectomy reversal",
    ],
    whoShouldConsider: [
      "Men with obstructive azoospermia (blockage in reproductive tract)",
      "Men with non-obstructive azoospermia (sperm production issues)",
      "Men who have undergone vasectomy and wish to have biological children",
      "Men with genetic conditions affecting sperm production",
      "Men with previous failed attempts at sperm retrieval",
    ],
    successRate:
      "Success rates vary depending on the cause of azoospermia; can range from 30-70% for retrieval, with successful fertilization rates via ICSI being high.",
    duration: "The surgical procedure takes about 30-60 minutes",
    recovery: "Minor discomfort for a few days; most men can return to light activities within 2-3 days",
    risks: [
      "Bleeding or hematoma formation",
      "Infection at the site",
      "Damage to testicular tissue",
      "Temporary or permanent decrease in testosterone production (rare)",
      "Pain or swelling",
    ],
    faqs: [
      {
        question: "Can I have children naturally after sperm retrieval?",
        answer:
          "Sperm retrieval is typically performed when natural conception is not possible. If successful, the retrieved sperm is used for assisted reproductive technologies like ICSI.",
      },
      {
        question: "How is sperm retrieved from the testicles?",
        answer:
          "There are two main methods: aspiration (using a fine needle) and extraction (a small surgical biopsy). The choice depends on the individual case.",
      },
    ],
  },
  "embryo-cryopreservation": {
    title: "Embryo Cryopreservation",
    subtitle: "Freeze Embryos for Future Use in Mumbai",
    overview:
      "State-of-the-art freezing and storage of embryos for future use, allowing you to preserve high-quality embryos from your IVF cycle. This offers flexibility and reduces the need for repeated stimulation cycles.",
    detailedDescription: [
      "Embryo cryopreservation, or embryo freezing, is a standard and highly effective part of IVF treatment at our Mumbai fertility clinic. After an IVF cycle, any good-quality embryos not transferred can be frozen for use in subsequent cycles.",
      "This technology, known as vitrification, involves rapidly freezing embryos to prevent ice crystal formation, ensuring high survival rates when thawed. It provides a valuable option for couples who wish to have more than one child, or if the initial transfer is unsuccessful.",
      "Dr. Vrushni Bhuta and our embryology team in Powai and Santacruz ensure that embryos are meticulously handled and cryopreserved under optimal conditions, maintaining their viability for extended periods.",
    ],
    process: [
      {
        title: "Embryo Culture",
        description:
          "Embryos are cultured in our laboratory for 3-5 days following fertilization. We carefully monitor their development.",
      },
      {
        title: "Embryo Grading",
        description:
          "Embryos are graded based on their quality and developmental stage. The highest quality embryos are selected for freezing.",
      },
      {
        title: "Vitrification",
        description:
          "Selected embryos are flash-frozen using a rapid cooling technique to preserve their cellular structure.",
      },
      {
        title: "Cryopreservation Storage",
        description: "Frozen embryos are stored in liquid nitrogen at -196°C in our secure, state-of-the-art facility.",
      },
      {
        title: "Thawing and Transfer",
        description:
          "When you are ready for a future cycle, embryos are thawed, and the highest quality ones are transferred into your uterus.",
      },
    ],
    benefits: [
      "Preserves additional embryos from an IVF cycle",
      "Avoids the need for repeated ovarian stimulation and egg retrieval",
      "Allows for planned family spacing",
      "Reduces treatment costs for future cycles",
      "High survival and success rates with modern cryopreservation techniques",
      "Offers a chance for subsequent pregnancies",
      "Provides flexibility in family planning",
    ],
    whoShouldConsider: [
      "Couples who have undergone IVF and have surplus high-quality embryos",
      "Couples planning to have more than one child",
      "Individuals undergoing fertility preservation due to medical treatments",
      "Women who are not pregnant after their first IVF embryo transfer",
      "Couples who wish to delay pregnancy after an IVF cycle",
    ],
    successRate:
      "Survival rates after thawing are typically over 95%. Pregnancy rates per frozen embryo transfer cycle are comparable to fresh embryo transfers.",
    duration:
      "The freezing process is done after embryo culture (3-5 days post-fertilization); thawing and transfer occurs in a subsequent cycle.",
    recovery:
      "No specific recovery needed for the freezing process itself. Recovery after embryo transfer is similar to a fresh transfer.",
    risks: [
      "Small risk of embryo damage during freezing or thawing (less than 5%)",
      "Cost of storage fees over time",
      "No guarantee of pregnancy from a frozen embryo transfer",
    ],
    faqs: [
      {
        question: "How long can embryos be frozen?",
        answer:
          "Embryos can be stored indefinitely without significant loss of viability. Successful pregnancies have resulted from embryos frozen for over 10 years.",
      },
      {
        question: "What is the success rate of frozen embryo transfer?",
        answer:
          "Success rates are very good, often comparable to fresh embryo transfers, especially with the vitrification technique. It depends on the embryo quality, the woman's age, and uterine receptivity.",
      },
      {
        question: "Can I choose which embryos to freeze?",
        answer:
          "Yes, our embryologists will select the highest quality embryos for freezing based on established grading criteria to maximize your chances of success.",
      },
    ],
  },
  "sperm-cryopreservation": {
    title: "Sperm Cryopreservation",
    subtitle: "Preserve Male Fertility in Mumbai",
    overview:
      "Safe preservation of sperm for future use, particularly beneficial before medical treatments that may affect fertility. Our Mumbai clinic offers secure and reliable sperm freezing services.",
    detailedDescription: [
      "Sperm cryopreservation, or sperm freezing, is a straightforward procedure that allows men to preserve their fertility for the future. At Dr. Vrushni Bhuta's clinic in Powai and Santacruz, we provide secure storage and high-quality freezing techniques.",
      "This service is invaluable for men undergoing cancer treatments like chemotherapy or radiation, which can significantly impact sperm production. It also benefits men who may experience a decline in sperm quality due to age or medical conditions, or those planning gender reassignment surgery.",
      "We ensure a discreet and supportive environment for all our patients seeking sperm cryopreservation, offering peace of mind for their future reproductive plans.",
    ],
    process: [
      {
        title: "Initial Consultation",
        description:
          "We discuss your medical history, reasons for sperm banking, and the procedure. You'll receive counseling on the process and storage.",
      },
      {
        title: "Sperm Analysis",
        description:
          "A semen analysis is performed to assess sperm count, motility, and morphology. This helps determine the best freezing protocol.",
      },
      {
        title: "Sperm Collection",
        description:
          "Sperm is typically collected via masturbation in a private collection room at our clinic. If needed, surgical sperm retrieval can also be cryopreserved.",
      },
      {
        title: "Cryopreservation",
        description:
          "Sperm samples are processed and frozen using cryoprotective agents to prevent damage during freezing.",
      },
      {
        title: "Secure Storage",
        description:
          "Frozen sperm is stored in liquid nitrogen tanks (-196°C) at our secure facility, ensuring long-term viability.",
      },
    ],
    benefits: [
      "Preserves fertility before cancer treatment or other medical interventions",
      "Provides options for men with declining sperm quality",
      "Useful for men undergoing vasectomy or gender reassignment surgery",
      "Ensures availability of sperm for future IVF/IUI cycles",
      "Offers reproductive autonomy and peace of mind",
      "Can be used by sperm donors",
      "High success rates when used for assisted reproduction",
    ],
    whoShouldConsider: [
      "Men facing cancer treatment (chemotherapy, radiation)",
      "Men with declining sperm quality or quantity",
      "Men undergoing treatments that may impact fertility",
      "Men planning vasectomy",
      "Men considering gender reassignment surgery",
      "Sperm donors",
      "Men in high-risk occupations or environments",
    ],
    successRate:
      "Sperm survival rates after thawing are generally high (over 80%). Success in conception depends on the quality of the thawed sperm and the chosen fertility treatment.",
    duration: "The collection and freezing process typically takes 1-2 hours.",
    recovery: "No recovery period needed; you can resume normal activities immediately.",
    risks: [
      "Sperm damage during freezing/thawing (rare)",
      "Cost of storage fees over time",
      "No guarantee of future fertility or pregnancy",
    ],
    faqs: [
      {
        question: "How long can sperm be frozen?",
        answer:
          "Sperm can be stored indefinitely without significant loss of viability. Successful pregnancies have been achieved with sperm frozen for many years.",
      },
      {
        question: "What is the cost of sperm freezing in Mumbai?",
        answer:
          "The initial freezing process typically costs between ₹5,000-10,000, with annual storage fees of ₹3,000-6,000. We provide detailed cost breakdowns.",
      },
      {
        question: "Can frozen sperm be used for natural conception?",
        answer:
          "Frozen sperm is primarily used for assisted reproductive technologies like IUI or IVF/ICSI. Natural conception with thawed sperm is not typically recommended due to potential variability.",
      },
    ],
  },
  "donor-oocyte": {
    title: "Donor Oocyte Program",
    subtitle: "Alternative Path to Parenthood in Mumbai",
    overview:
      "When your own eggs are not viable, carefully selected donor eggs offer an alternative path to experiencing pregnancy and childbirth. Our comprehensive donor program in Mumbai connects you with healthy, screened donors.",
    detailedDescription: [
      "For women facing diminished ovarian reserve, poor egg quality, or genetic concerns, our Donor Oocyte Program provides a successful pathway to parenthood. At Dr. Vrushni Bhuta's clinic in Powai and Santacruz, we meticulously screen our egg donors to ensure their health and reproductive potential.",
      "We understand that using donor eggs is a significant decision. Our team provides compassionate guidance throughout the process, from selecting a donor who meets your criteria to coordinating the IVF cycle.",
      "Our Mumbai clinic has a high success rate with donor egg treatments, helping many individuals and couples build their families when other options are not viable.",
    ],
    process: [
      {
        title: "Consultation & Donor Selection",
        description:
          "We discuss your needs and preferences. You'll review profiles of carefully screened donors and select one who aligns with your criteria.",
      },
      {
        title: "Legal Agreements",
        description:
          "Comprehensive legal agreements are established to protect the rights and responsibilities of all parties involved.",
      },
      {
        title: "IVF Cycle Coordination",
        description:
          "The donor undergoes ovarian stimulation and egg retrieval. Concurrently, sperm is collected from the intended father or a donor.",
      },
      {
        title: "Fertilization",
        description: "Eggs from the donor are fertilized with sperm in our laboratory using ICSI.",
      },
      {
        title: "Embryo Transfer",
        description:
          "Resulting embryos are cultured, and one or more high-quality embryos are transferred into the intended mother's uterus.",
      },
      {
        title: "Pregnancy Test & Follow-up",
        description:
          "A pregnancy test is performed two weeks after transfer. We provide ongoing support throughout the pregnancy.",
      },
    ],
    benefits: [
      "Allows women with non-viable eggs to achieve pregnancy",
      "High success rates due to young, healthy donor eggs",
      "Reduces the risk of passing on genetic disorders",
      "Overcomes issues like premature ovarian failure or poor egg quality",
      "Provides a viable option for advanced maternal age",
      "Carefully screened and healthy donors",
      "Compassionate and supportive guidance",
    ],
    whoShouldConsider: [
      "Women with premature ovarian failure or early menopause",
      "Women with poor egg quality or quantity",
      "Women with genetic disorders they do not wish to pass on",
      "Women who have experienced repeated IVF failures with their own eggs",
      "Women with advanced maternal age",
      "Women undergoing fertility preservation due to medical treatments",
      "Single women or same-sex couples",
    ],
    successRate:
      "Success rates are high, typically 50-60% live birth rate per cycle for women under 40, due to the use of younger donor eggs.",
    duration: "The IVF cycle with donor eggs takes approximately 4-6 weeks.",
    recovery:
      "Recovery for the intended mother is minimal after embryo transfer. The donor has recovery similar to an IVF egg retrieval.",
    risks: [
      "Risks associated with the IVF procedure for the intended mother",
      "Potential emotional challenges related to using donor eggs",
      "Legal complexities if agreements are not clear",
      "The donor carries risks associated with egg retrieval",
    ],
    faqs: [
      {
        question: "How are egg donors screened?",
        answer:
          "Donors undergo extensive medical, genetic, and psychological screening, including infectious disease testing, to ensure their suitability.",
      },
      {
        question: "Can I choose my egg donor?",
        answer:
          "Yes, you can review anonymous donor profiles that include relevant medical history, physical characteristics, and personal background information to make an informed choice.",
      },
      {
        question: "What is the cost of donor egg treatment in Mumbai?",
        answer:
          "Donor egg cycles can range from ₹3.5 to ₹5 lakhs, including donor compensation, medications, IVF procedures, and storage. We provide detailed cost breakdowns.",
      },
    ],
  },
  surrogacy: {
    title: "Surrogacy",
    subtitle: "Gestational Carrier Program in Mumbai",
    overview:
      "Compassionate surrogacy program where a gestational carrier helps bring your baby into the world when you cannot carry a pregnancy. Our Mumbai clinic facilitates secure and ethical surrogacy arrangements.",
    detailedDescription: [
      "For individuals and couples who are unable to carry a pregnancy due to medical reasons, uterine abnormalities, or other factors, our Surrogacy program offers a path to parenthood. Dr. Vrushni Bhuta's clinic in Powai and Santacruz provides comprehensive support for intended parents throughout the surrogacy journey.",
      "We partner with ethical and reputable surrogacy agencies to ensure that gestational carriers are carefully screened, healthy, and fully understand the process. Our focus is on creating a secure, legally sound, and emotionally supportive environment for all parties involved.",
      "We facilitate the entire IVF process with the gestational carrier, ensuring adherence to all legal and medical guidelines in India.",
    ],
    process: [
      {
        title: "Initial Consultation & Eligibility",
        description:
          "We assess your medical history and discuss surrogacy as an option. We also connect you with legal counsel and a reputable surrogacy agency.",
      },
      {
        title: "Gestational Carrier Screening",
        description: "Potential gestational carriers undergo rigorous medical, psychological, and background checks.",
      },
      {
        title: "Legal Contracts",
        description:
          "Comprehensive legal agreements are established between intended parents and the gestational carrier.",
      },
      {
        title: "IVF Cycle for Gestational Carrier",
        description:
          "The gestational carrier undergoes ovarian stimulation and egg retrieval (if using her eggs, though typically intended parents' eggs are used).",
      },
      {
        title: "Fertilization & Embryo Transfer",
        description:
          "Embryos are created using intended parents' gametes (or donor gametes) and transferred into the gestational carrier's uterus.",
      },
      {
        title: "Pregnancy Management",
        description:
          "The gestational carrier receives medical care throughout her pregnancy, with regular updates provided to the intended parents.",
      },
      {
        title: "Birth and Legal Parentage",
        description: "Upon birth, legal parentage is established for the intended parents according to Indian law.",
      },
    ],
    benefits: [
      "Enables parenthood for individuals/couples unable to carry a pregnancy",
      "Provides a safe and healthy environment for pregnancy",
      "Legally secure process with comprehensive contracts",
      "Ethical screening of gestational carriers",
      "Experienced medical and legal support",
      "Fulfillment of the dream of parenthood",
    ],
    whoShouldConsider: [
      "Women without a uterus or with a non-functional uterus",
      "Women with uterine abnormalities that make pregnancy unsafe",
      "Women with medical conditions making pregnancy dangerous (e.g., severe heart disease)",
      "Women who have experienced recurrent miscarriages or implantation failures",
      "Same-sex male couples",
      "Single men",
      "Individuals who have undergone hysterectomy",
    ],
    successRate:
      "Success rates depend on the IVF cycle and gestational carrier's health, typically ranging from 50-60% per transfer.",
    duration: "The entire process, from finding a carrier to birth, can take 18-24 months.",
    recovery:
      "The gestational carrier undergoes recovery similar to any pregnant individual. Intended parents have no physical recovery.",
    risks: [
      "Risks associated with IVF and pregnancy for the gestational carrier",
      "Potential emotional challenges for all parties",
      "Legal complications if contracts are not properly executed",
      "Financial investment",
      "Potential for multiple pregnancies",
    ],
    faqs: [
      {
        question: "What is the legal status of surrogacy in India?",
        answer:
          "Surrogacy in India is governed by specific laws. We strictly adhere to these regulations, which currently permit altruistic surrogacy for Indian citizens. Commercial surrogacy is banned.",
      },
      {
        question: "How are gestational carriers selected?",
        answer:
          "Gestational carriers are thoroughly screened for medical health, psychological stability, and suitability for pregnancy, ensuring they are prepared for the journey.",
      },
      {
        question: "Can I choose my gestational carrier?",
        answer:
          "While we facilitate the process, reputable agencies typically present profiles of screened carriers for intended parents to review and choose from, ensuring a good match.",
      },
    ],
  },
  "fertility-surgery": {
    title: "Fertility Enhancing Surgery",
    subtitle: "Laparoscopy & Hysteroscopy in Mumbai",
    overview:
      "Advanced minimally invasive surgical procedures to diagnose and treat conditions affecting female fertility, including endometriosis, fibroids, and tubal blockages. Our Mumbai clinic offers expert surgical solutions.",
    detailedDescription: [
      "Fertility-enhancing surgery plays a critical role in addressing various gynecological conditions that impede conception. At Dr. Vrushni Bhuta's clinic in Powai and Santacruz, we specialize in minimally invasive laparoscopic and hysteroscopic procedures designed to improve your chances of getting pregnant.",
      "Laparoscopy (keyhole surgery) and hysteroscopy (camera inserted into the uterus) allow us to accurately diagnose and precisely treat issues such as endometriosis, ovarian cysts, uterine fibroids, polyps, and adhesions without large incisions.",
      "Our surgical team utilizes state-of-the-art equipment to ensure the safest and most effective treatment, leading to faster recovery times and improved fertility outcomes for our patients.",
    ],
    process: [
      {
        title: "Diagnosis and Assessment",
        description:
          "We conduct thorough evaluations, including ultrasounds, hormone tests, and sometimes diagnostic laparoscopy/hysteroscopy, to identify the underlying cause of infertility.",
      },
      {
        title: "Surgical Planning",
        description: "Based on the diagnosis, we plan the most appropriate minimally invasive surgical approach.",
      },
      {
        title: "Procedure (Laparoscopy/Hysteroscopy)",
        description:
          "Performed under general anesthesia, these procedures involve small incisions (laparoscopy) or access through the cervix (hysteroscopy) to address the specific condition.",
      },
      {
        title: "Treatment of Conditions",
        description:
          "Examples include removal of endometriosis implants, ovarian cysts, uterine fibroids, adhesions, and opening blocked fallopian tubes.",
      },
      {
        title: "Recovery",
        description:
          "Patients typically experience a shorter hospital stay and faster recovery compared to open surgery.",
      },
      {
        title: "Post-operative Care & Follow-up",
        description:
          "We provide detailed post-operative instructions and schedule follow-up appointments to monitor recovery and plan subsequent fertility treatments if needed.",
      },
    ],
    benefits: [
      "Minimally invasive techniques with smaller scars",
      "Faster recovery time and shorter hospital stays",
      "Improved fertility outcomes",
      "Accurate diagnosis and targeted treatment",
      "Reduced pain and discomfort",
      "Can often be combined with other fertility treatments",
      "Effective for treating common causes of infertility",
    ],
    whoShouldConsider: [
      "Women with endometriosis",
      "Women with uterine fibroids or polyps",
      "Women with ovarian cysts",
      "Women with pelvic adhesions or scarring",
      "Women with tubal factor infertility (blocked fallopian tubes)",
      "Women experiencing recurrent miscarriages",
      "Women undergoing IVF who have underlying uterine issues",
    ],
    successRate:
      "Success rates vary widely depending on the condition treated and individual factors, but surgical correction often significantly improves conception chances.",
    duration:
      "The surgical procedure duration varies (30 minutes to a few hours) depending on complexity. Recovery is typically a few days to a week.",
    recovery:
      "Most patients return to normal activities within 1-2 weeks. Some may require longer rest depending on the procedure.",
    risks: [
      "Risks associated with any surgery (bleeding, infection)",
      "Anesthesia risks",
      "Damage to surrounding organs (rare)",
      "Scar tissue formation (adhesions) post-surgery",
      "Incomplete removal of pathology",
    ],
    faqs: [
      {
        question: "What is the difference between laparoscopy and hysteroscopy?",
        answer:
          "Laparoscopy is used to view and treat conditions in the abdominal cavity and on the outside of the uterus and ovaries. Hysteroscopy is used to view and treat conditions inside the uterine cavity.",
      },
      {
        question: "How soon can I try to conceive after fertility surgery?",
        answer:
          "This depends on the type of surgery performed. We generally recommend waiting for 1-3 cycles to allow for healing, but Dr. Bhuta will advise you based on your specific situation.",
      },
    ],
  },
  "prp-ovary": {
    title: "PRP of the Ovary",
    subtitle: "Ovarian Rejuvenation Therapy in Mumbai",
    overview:
      "Innovative platelet-rich plasma (PRP) therapy to rejuvenate ovarian function and potentially improve egg quality in women with diminished ovarian reserve. Our Mumbai clinic offers this advanced treatment.",
    detailedDescription: [
      "Platelet-Rich Plasma (PRP) therapy is an emerging treatment aimed at improving ovarian function and egg quality in women experiencing diminished ovarian reserve (DOR). At Dr. Vrushni Bhuta's clinic in Powai and Santacruz, we are at the forefront of offering this innovative therapy.",
      "The procedure involves preparing a concentrated solution of growth factors from your own blood and injecting it directly into the ovaries. These growth factors are believed to stimulate the regeneration of ovarian tissue and potentially activate dormant follicles.",
      "While still considered experimental in some regions, PRP therapy shows promising results for some women, offering a new hope for conception when conventional treatments have not been successful.",
    ],
    process: [
      {
        title: "Consultation & Assessment",
        description:
          "We assess your ovarian reserve (AMH, FSH, antral follicle count) and discuss your medical history to determine suitability for PRP therapy.",
      },
      {
        title: "Blood Draw",
        description: "A small sample of your blood is drawn, similar to a routine blood test.",
      },
      {
        title: "PRP Preparation",
        description:
          "Your blood is processed in our lab using a centrifuge to concentrate the platelets and growth factors, creating the PRP solution.",
      },
      {
        title: "Ovarian Injection",
        description:
          "Under transvaginal ultrasound guidance, the PRP is carefully injected into each ovary. This is a quick outpatient procedure.",
      },
      {
        title: "Follow-up & IVF Cycle",
        description:
          "We monitor your response and plan an IVF cycle subsequently, aiming to retrieve more and potentially better quality eggs.",
      },
    ],
    benefits: [
      "May improve ovarian reserve and function",
      "Potential to enhance egg quality",
      "May stimulate the development of dormant follicles",
      "Uses your own blood components, minimizing risks",
      "Minimally invasive outpatient procedure",
      "Can be combined with IVF protocols",
      "Offers hope for women with DOR",
    ],
    whoShouldConsider: [
      "Women with diminished ovarian reserve (low AMH, low follicle count)",
      "Women experiencing premature ovarian aging",
      "Women with poor egg quality in previous IVF cycles",
      "Women who have not conceived despite multiple IVF attempts",
      "Women seeking alternative or complementary therapies for fertility",
    ],
    successRate:
      "Success rates are still being established and vary significantly. Some studies report improved IVF outcomes, but it's not a guaranteed treatment for pregnancy.",
    duration:
      "The PRP injection procedure is quick (about 30 minutes). The effects on ovarian function may take a few months to assess.",
    recovery: "Minimal discomfort; most women can resume normal activities the same day.",
    risks: [
      "Slight pain or bruising at the injection site",
      "Risk of infection (very low)",
      "No significant systemic side effects reported",
      "Effectiveness can vary greatly among individuals",
      "Not a guaranteed treatment for pregnancy",
    ],
    faqs: [
      {
        question: "Is PRP ovarian therapy safe?",
        answer:
          "Yes, PRP therapy is generally considered safe as it uses your own blood components. Potential risks are minimal and similar to other minimally invasive procedures.",
      },
      {
        question: "How soon can I expect results after PRP?",
        answer:
          "It may take a few months to observe changes in ovarian function. The effects are typically assessed when you undergo a subsequent IVF cycle.",
      },
      {
        question: "Can PRP therapy reverse menopause?",
        answer:
          "PRP therapy is not intended to reverse menopause. It aims to improve function in women with diminished ovarian reserve who still have some residual ovarian activity.",
      },
    ],
  },
  "prp-endometrium": {
    title: "PRP of the Endometrium",
    subtitle: "Endometrial Regeneration Therapy in Mumbai",
    overview:
      "Cutting-edge platelet-rich plasma (PRP) treatment to enhance endometrial thickness and receptivity, improving implantation rates for women with thin endometrium. Our Mumbai clinic offers this advanced therapy.",
    detailedDescription: [
      "A thin or unreceptive endometrium (the lining of the uterus) can be a significant barrier to successful implantation and pregnancy. Platelet-Rich Plasma (PRP) therapy is a revolutionary treatment offered at Dr. Vrushni Bhuta's clinic in Powai and Santacruz to address this issue.",
      "PRP involves injecting a concentration of your own blood's growth factors directly into the uterine cavity. These growth factors stimulate cellular repair and promote the growth of new blood vessels and endometrial tissue, thereby increasing endometrial thickness and improving its receptivity for embryo implantation.",
      "This therapy is particularly beneficial for women who have experienced recurrent implantation failure in previous IVF cycles or have a history of thin endometrium.",
    ],
    process: [
      {
        title: "Consultation & Assessment",
        description:
          "We evaluate your endometrial thickness and history of implantation failures through ultrasounds and medical records.",
      },
      {
        title: "Blood Draw",
        description: "A small blood sample is taken from your arm.",
      },
      {
        title: "PRP Preparation",
        description:
          "The blood sample is processed in our lab to concentrate the platelets and growth factors, creating the autologous PRP solution.",
      },
      {
        title: "Intrauterine PRP Infusion",
        description:
          "Under sterile conditions, the PRP is infused into the uterine cavity using a thin catheter, similar to an IUI procedure. This is usually done during the proliferative phase of your cycle.",
      },
      {
        title: "Follow-up & Embryo Transfer",
        description:
          "We monitor endometrial development and proceed with embryo transfer when optimal thickness and receptivity are achieved.",
      },
    ],
    benefits: [
      "Improves endometrial thickness and vascularity",
      "Enhances endometrial receptivity for embryo implantation",
      "Increases implantation and pregnancy rates",
      "Natural treatment using your own blood components",
      "Minimally invasive and generally well-tolerated",
      "Can be used in conjunction with IVF cycles",
      "Offers hope for patients with recurrent implantation failure",
    ],
    whoShouldConsider: [
      "Women with thin endometrium (<7-8mm) who have failed IVF",
      "Women with recurrent implantation failure",
      "Women with a history of Asherman's syndrome or uterine scarring",
      "Women undergoing frozen embryo transfer cycles",
      "Women seeking to improve uterine receptivity",
    ],
    successRate:
      "Success rates vary, but studies suggest a significant improvement in pregnancy rates for women with thin endometrium or recurrent implantation failure.",
    duration:
      "The infusion procedure is brief (about 10-15 minutes). Treatment protocols may involve one or more infusions per cycle.",
    recovery: "Minimal discomfort; most women can resume normal activities immediately after the procedure.",
    risks: [
      "Slight cramping or spotting after the procedure",
      "Risk of infection (very low)",
      "No significant systemic side effects reported",
      "Effectiveness can vary",
    ],
    faqs: [
      {
        question: "When is the best time to perform endometrial PRP?",
        answer:
          "It is typically performed during the proliferative phase of the menstrual cycle, aiming to enhance the endometrium before ovulation or embryo transfer.",
      },
      {
        question: "How many PRP treatments are needed?",
        answer:
          "The number of treatments can vary depending on the individual's response and endometrial thickness. It might involve one or two infusions per cycle, or it could be used across multiple cycles.",
      },
      {
        question: "Can PRP help if I have had previous uterine surgeries?",
        answer:
          "Yes, PRP therapy can be beneficial for women with scarred or thin endometrium resulting from previous surgeries like D&C or myomectomy.",
      },
    ],
  },
  pgt: {
    title: "Preimplantation Genetic Testing (PGT)",
    subtitle: "Genetic Screening of Embryos in Mumbai",
    overview:
      "Comprehensive genetic screening of embryos before transfer to identify the healthiest embryos and reduce the risk of genetic disorders. Our Mumbai clinic offers advanced PGT services.",
    detailedDescription: [
      "Preimplantation Genetic Testing (PGT) is a groundbreaking technology that allows us to screen embryos for genetic abnormalities before they are transferred to the uterus. At Dr. Vrushni Bhuta's clinic in Powai and Santacruz, we offer PGT as part of our advanced IVF services.",
      "PGT involves taking a few cells from an embryo and analyzing them for specific genetic conditions, chromosomal abnormalities (aneuploidy), or inherited disorders. This helps us select the most viable embryos, increasing the chances of a successful pregnancy and reducing the risk of miscarriage and genetic diseases in the offspring.",
      "We offer different types of PGT, including PGT-A (aneuploidy screening), PGT-M (monogenic/single gene defect testing), and PGT-SR (structural rearrangements testing), tailored to your specific needs.",
    ],
    process: [
      {
        title: "IVF Cycle",
        description:
          "A standard IVF cycle is performed, involving ovarian stimulation, egg retrieval, fertilization, and embryo culture.",
      },
      {
        title: "Embryo Biopsy",
        description:
          "Around day 5-6 of development, a few cells are carefully removed from each embryo by our skilled embryologists.",
      },
      {
        title: "Genetic Analysis",
        description: "The biopsied cells are sent to a specialized genetic laboratory for comprehensive testing.",
      },
      {
        title: "Embryo Selection",
        description: "Based on the PGT results, chromosomally normal (euploid) embryos are identified.",
      },
      {
        title: "Embryo Transfer",
        description:
          "One or more euploid embryos are transferred into the uterus in a subsequent frozen embryo transfer cycle.",
      },
    ],
    benefits: [
      "Identifies chromosomally normal (euploid) embryos",
      "Reduces the risk of miscarriage associated with aneuploidy",
      "Screens for specific inherited genetic disorders",
      "Increases IVF success rates by selecting viable embryos",
      "Enables family balancing (selection based on sex, if desired and legally permissible)",
      "Reduces the chance of transferring embryos with known genetic conditions",
      "Provides greater confidence in the chosen embryos",
    ],
    whoShouldConsider: [
      "Advanced maternal age (over 35)",
      "History of recurrent pregnancy loss",
      "History of previous child with a chromosomal abnormality or genetic disorder",
      "Known carrier of a specific genetic disorder",
      "Couples with multiple previous IVF failures",
      "Individuals or couples seeking to exclude specific inherited diseases",
      "Same-sex couples or single individuals seeking family balancing",
    ],
    successRate:
      "PGT itself does not guarantee pregnancy but significantly improves the chances by ensuring the transfer of chromosomally normal embryos. Success rates are highly dependent on embryo quality and uterine receptivity.",
    duration:
      "The PGT process adds time to the IVF cycle, with results typically available within 1-2 weeks after biopsy. Embryo transfer occurs in a subsequent cycle.",
    recovery:
      "Recovery from embryo transfer is similar to any IVF cycle. The biopsy procedure itself is performed on the embryo.",
    risks: [
      "Mosaicism (mixture of normal and abnormal cells in the embryo)",
      "Potential for biopsy error (rare)",
      "Embryo arrest or damage during biopsy (very rare)",
      "Cost of genetic testing",
      "Not all embryos may yield conclusive results",
    ],
    faqs: [
      {
        question: "What is the difference between PGT-A, PGT-M, and PGT-SR?",
        answer:
          "PGT-A screens for chromosomal aneuploidy (abnormal number of chromosomes). PGT-M tests for specific single-gene inherited disorders. PGT-SR detects structural rearrangements in chromosomes (like translocations).",
      },
      {
        question: "Can PGT guarantee a healthy baby?",
        answer:
          "PGT significantly reduces the risk of certain genetic disorders and chromosomal abnormalities but does not guarantee a perfectly healthy baby, as some conditions cannot be detected, or new mutations can occur.",
      },
      {
        question: "What is the cost of PGT in Mumbai?",
        answer:
          "PGT testing typically adds ₹70,000-1.5 lakhs per cycle, depending on the type of PGT and the number of embryos tested. We provide detailed cost breakdowns.",
      },
    ],
  },
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const treatment = treatments[params.slug]

  if (!treatment) {
    return {
      title: "Treatment Not Found",
    }
  }

  return {
    title: `${treatment.title} in Mumbai | Dr. Vrushni Bhuta - Powai & Santacruz`,
    description: `${treatment.overview} Expert fertility care in Mumbai by Dr. Vrushni Bhuta. Clinics in Powai, Santacruz & Khar.`,
    keywords: `${treatment.title} Mumbai, ${treatment.title} Powai, ${treatment.title} Santacruz, fertility treatment Mumbai, Dr Vrushni Bhuta, ${treatment.title} India, ${treatment.title} cost Mumbai`,
    openGraph: {
      title: `${treatment.title} - Dr. Vrushni Bhuta Mumbai`,
      description: treatment.overview,
      type: "website",
    },
  }
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
      <section className="relative bg-gradient-to-br from-[#47145a] via-[#5a1b71] to-[#47145a] text-white py-20 overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 right-20 w-64 h-64 bg-[#eb9142] rounded-full opacity-10 blur-3xl"></div>
          <div className="absolute bottom-20 left-20 w-96 h-96 bg-pink-400 rounded-full opacity-10 blur-3xl"></div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl">
            <Link
              href="/treatments"
              className="inline-flex items-center text-[#eb9142] hover:text-[#d67f35] mb-6 transition-colors group"
            >
              <ArrowLeft className="w-4 h-4 mr-2 transition-transform group-hover:-translate-x-1" />
              Back to all treatments
            </Link>
            <span className="text-[#eb9142] font-bold text-sm tracking-wider uppercase block mb-4">
              FERTILITY TREATMENT
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-4 leading-tight">{treatment.title}</h1>
            <p className="text-xl md:text-2xl text-[#eb9142] mb-6 font-semibold">{treatment.subtitle}</p>
            <p className="text-lg text-gray-200 leading-relaxed">{treatment.overview}</p>

            {/* Quick Info */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">
              {treatment.successRate && (
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <CheckCircle2 className="w-5 h-5 text-[#eb9142]" />
                    <span className="text-sm font-semibold">Success Rate</span>
                  </div>
                  <p className="text-sm text-gray-200">{treatment.successRate}</p>
                </div>
              )}
              {treatment.duration && (
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <Clock className="w-5 h-5 text-[#eb9142]" />
                    <span className="text-sm font-semibold">Duration</span>
                  </div>
                  <p className="text-sm text-gray-200">{treatment.duration}</p>
                </div>
              )}
              {treatment.recovery && (
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <AlertCircle className="w-5 h-5 text-[#eb9142]" />
                    <span className="text-sm font-semibold">Recovery</span>
                  </div>
                  <p className="text-sm text-gray-200">{treatment.recovery}</p>
                </div>
              )}
            </div>

            {/* Location Badge */}
            <div className="mt-6 inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2">
              <MapPin className="w-4 h-4 text-[#eb9142]" />
              <span className="text-sm">Available at our Powai, Santacruz & Khar clinics in Mumbai</span>
            </div>
          </div>
        </div>
      </section>

      {/* Detailed Overview */}
      {treatment.detailedDescription && (
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-[#47145a] mb-8">Understanding the Treatment</h2>
              <div className="space-y-6 text-gray-700 leading-relaxed">
                {treatment.detailedDescription.map((paragraph, index) => (
                  <p key={index} className="text-lg">
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Process Section */}
      {treatment.process && (
        <section className="py-20 bg-gradient-to-b from-white via-[#fbf7f6] to-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-[#47145a] mb-12 text-center">The Treatment Process</h2>
              <div className="space-y-6">
                {treatment.process.map((step, index) => (
                  <Card
                    key={index}
                    className="border-2 border-gray-100 hover:border-[#eb9142] transition-all duration-300 hover:shadow-lg"
                  >
                    <CardContent className="p-6 md:p-8 flex gap-6">
                      <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gradient-to-br from-[#47145a] to-[#5a1b71] text-white flex items-center justify-center font-bold text-lg shadow-lg">
                        {index + 1}
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-bold text-[#47145a] mb-3">{step.title}</h3>
                        <p className="text-gray-700 leading-relaxed">{step.description}</p>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Benefits Section */}
      {treatment.benefits && (
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-[#47145a] mb-8">Benefits of This Treatment</h2>
              <Card className="border-2 border-[#47145a]/10 shadow-lg">
                <CardContent className="p-8">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {treatment.benefits.map((benefit, index) => (
                      <div key={index} className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-[#eb9142] flex-shrink-0 mt-1" />
                        <span className="text-gray-700">{benefit}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      )}

      {/* Who Should Consider */}
      {treatment.whoShouldConsider && (
        <section className="py-20 bg-gradient-to-b from-white to-[#fbf7f6]">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-[#47145a] mb-8">
                Who Should Consider This Treatment?
              </h2>
              <Card className="border-2 border-[#47145a]/10 shadow-lg">
                <CardContent className="p-8">
                  <ul className="space-y-4">
                    {treatment.whoShouldConsider.map((item, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-[#eb9142] flex-shrink-0 mt-1" />
                        <span className="text-gray-700">{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      )}

      {/* Risks Section */}
      {treatment.risks && (
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-[#47145a] mb-8">Potential Risks & Considerations</h2>
              <Card className="border-2 border-amber-200 bg-amber-50/50">
                <CardContent className="p-8">
                  <div className="flex items-start gap-4 mb-6">
                    <AlertCircle className="w-6 h-6 text-amber-600 flex-shrink-0 mt-1" />
                    <p className="text-gray-700">
                      While this treatment is generally safe, it's important to be aware of potential risks. Dr. Vrushni
                      Bhuta will discuss these in detail during your consultation.
                    </p>
                  </div>
                  <ul className="space-y-3">
                    {treatment.risks.map((risk, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <span className="text-amber-600 font-bold">•</span>
                        <span className="text-gray-700">{risk}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      )}

      {/* FAQs Section */}
      {treatment.faqs && (
        <section className="py-20 bg-gradient-to-b from-white to-[#fbf7f6]">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-[#47145a] mb-12 text-center">
                Frequently Asked Questions
              </h2>
              <div className="space-y-6">
                {treatment.faqs.map((faq, index) => (
                  <Card key={index} className="border-2 border-gray-100 hover:border-[#eb9142] transition-colors">
                    <CardContent className="p-6 md:p-8">
                      <h3 className="text-lg font-bold text-[#47145a] mb-3">{faq.question}</h3>
                      <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-[#47145a] to-[#5a1b71] text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <pattern id="pattern-cta" x="0" y="0" width="80" height="80" patternUnits="userSpaceOnUse">
              <circle cx="40" cy="40" r="3" fill="white" />
            </pattern>
            <rect x="0" y="0" width="100%" height="100%" fill="url(#pattern-cta)" />
          </svg>
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Explore This Treatment?</h2>
          <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
            Schedule a consultation with Dr. Vrushni Bhuta at our Mumbai clinic to discuss your options and create a
            personalized treatment plan tailored to your unique needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-[#eb9142] hover:bg-[#d67f35] text-white px-8 text-lg shadow-xl">
              <Link href="/contact">
                <Phone className="w-5 h-5 mr-2" />
                Book a Consultation
              </Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-2 border-white text-white hover:bg-white hover:text-[#47145a] px-8 text-lg bg-transparent"
            >
              <Link href="/treatments">View All Treatments</Link>
            </Button>
          </div>

          <div className="mt-12 pt-8 border-t border-white/20">
            <p className="text-sm text-gray-300 mb-4">Visit us at our Mumbai locations:</p>
            <div className="flex flex-wrap justify-center gap-6 text-sm">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-[#eb9142]" />
                <span>Powai, Mumbai</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-[#eb9142]" />
                <span>Santacruz, Mumbai</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-[#eb9142]" />
                <span>Khar, Mumbai</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
