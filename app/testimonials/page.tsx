import { Card, CardContent } from "@/components/ui/card"
import { Quote, Calendar, ArrowRight } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export const metadata = {
  title: "Patient Success Stories | Dr Vrushni Bhuta IVF Mumbai",
  description:
    "Read real IVF success stories & testimonials from patients who achieved parenthood with Dr Vrushni Bhuta. Real reviews from Mumbai fertility clinic.",
  keywords:
    "fertility testimonials Mumbai, IVF success stories, patient reviews Dr Vrushni Bhuta, fertility clinic reviews Mumbai, IVF testimonials India, successful fertility treatment stories",
  openGraph: {
    title: "Real Patient Success Stories - Dr Vrushni Bhuta",
    description: "Inspiring stories from families who achieved their parenthood dreams through expert fertility care.",
    type: "website",
    locale: "en_IN",
    url: "https://drvrushni.com/testimonials",
    images: [
      {
        url: "/images/doctor-purple-suit.jpg",
        width: 1200,
        height: 630,
        alt: "Patient Success Stories - Dr Vrushni Bhuta Fertility Clinic",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Real Patient Success Stories - Dr Vrushni Bhuta",
    description: "Inspiring stories from families who achieved their parenthood dreams.",
    images: ["/images/doctor-purple-suit.jpg"],
  },
}

export default function TestimonialsPage() {
  const testimonials = [
    {
      name: "Anonymous",
      treatment: "IVF Treatment",
      text: "Dr Vrushni has been a guiding angel, genuinely understanding our issues. She has been extremely supportive since our first interaction. She genuinely takes the effort to understand patient issues and suggests thoughtful treatment courses. She has been a guiding angel in our pregnancy journey.",
      rating: 5,
    },
    {
      name: "Anonymous",
      treatment: "Fertility Treatment",
      text: "Our sincere thanks and gratitude to Dr Vrushni, who was there with us before, during, and after the treatment. She is very professional and dynamic, guiding us throughout our journey to becoming parents after 14 long years.",
      rating: 5,
    },
    {
      name: "Anonymous",
      treatment: "Surrogacy",
      text: "Empathy is not often considered in IVF and surrogacy research, but it should be. Dr Vrushni's empathy, patience, and kindness stand out as much as her professionalism. I wholeheartedly recommend her to anyone considering reproductive assistance.",
      rating: 5,
    },
    {
      name: "Mrs. Sharma",
      treatment: "ICSI Treatment",
      text: "After years of trying to conceive, we were losing hope. Dr Vrushni not only provided us with the best medical treatment but also the emotional support we needed. Today, we are blessed with a beautiful baby girl. Thank you, Dr Vrushni!",
      rating: 5,
    },
    {
      name: "Mr. & Mrs. Patel",
      treatment: "IUI Treatment",
      text: "Dr Vrushni made our journey to parenthood smooth and stress-free. Her thorough explanations and caring approach made us feel comfortable throughout the entire process. We highly recommend her services.",
      rating: 5,
    },
    {
      name: "Anonymous",
      treatment: "Egg Freezing",
      text: "I was nervous about egg freezing, but Dr Vrushni explained everything in detail and made sure I was comfortable with every step. Her expertise and compassionate care made all the difference.",
      rating: 5,
    },
    {
      name: "Mrs. Khan",
      treatment: "Laparoscopy",
      text: "Dr Vrushni diagnosed and treated my endometriosis through laparoscopy. The procedure was successful, and I conceived naturally within six months. I am forever grateful for her expertise and care.",
      rating: 5,
    },
    {
      name: "Mr. & Mrs. Desai",
      treatment: "Frozen Embryo Transfer",
      text: "Our frozen embryo transfer was successful on the first attempt, thanks to Dr Vrushni's meticulous planning and care. We now have twins! She truly is an expert in her field.",
      rating: 5,
    },
    {
      name: "Anonymous",
      treatment: "Pre-conceptional Counselling",
      text: "The pre-conceptional counselling sessions with Dr Vrushni were incredibly helpful. She addressed all our concerns and helped us prepare physically and emotionally for pregnancy. We are now expecting our first child!",
      rating: 5,
    },
  ]

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[#47145a] to-[#5a1b71] text-white py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <span className="text-[#eb9142] font-bold text-sm tracking-wider uppercase">TESTIMONIALS</span>
            <h1 className="text-4xl md:text-5xl font-extrabold mt-4 mb-6">Here's what my patients say</h1>
            <p className="text-xl text-gray-200">Stories of hope, success, and fulfilled dreams of parenthood</p>
          </div>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card
                key={index}
                className="border-2 border-gray-100 hover:border-[#eb9142] transition-all hover:shadow-xl relative"
              >
                <CardContent className="p-6">
                  <div className="absolute top-4 right-4">
                    <Quote className="w-8 h-8 text-[#eb9142]/20" />
                  </div>
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <svg key={i} className="w-5 h-5 text-[#eb9142]" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <p className="text-gray-700 mb-4 italic leading-relaxed">{testimonial.text}</p>
                  <div className="border-t border-gray-200 pt-4">
                    <p className="font-semibold text-[#47145a]">{testimonial.name}</p>
                    <p className="text-sm text-[#eb9142]">{testimonial.treatment}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gradient-to-b from-white to-[#fbf7f6]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-4xl font-bold text-[#47145a] mb-2">1000+</div>
              <div className="text-sm text-gray-600">Happy Families</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-[#47145a] mb-2">10+</div>
              <div className="text-sm text-gray-600">Years Experience</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-[#47145a] mb-2">85%</div>
              <div className="text-sm text-gray-600">Success Rate</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-[#47145a] mb-2">24/7</div>
              <div className="text-sm text-gray-600">Support</div>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced CTA Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto bg-gradient-to-br from-[#47145a] to-[#5a1b71] rounded-3xl p-12 text-center text-white shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#eb9142] rounded-full opacity-20 blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-pink-400 rounded-full opacity-20 blur-3xl"></div>

            <div className="relative z-10">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Start Your Own Success Story?</h2>
              <p className="text-lg text-gray-200 mb-8 max-w-2xl mx-auto">
                Join hundreds of families who have achieved their dream of parenthood with Dr Vrushni Bhuta. Your
                journey begins with a simple consultation.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  asChild
                  size="lg"
                  className="bg-white text-[#47145a] hover:bg-gray-100 px-8 py-6 text-lg shadow-lg hover:shadow-xl hover:scale-105 transition-all"
                >
                  <Link href="/contact">
                    <Calendar className="mr-2 h-5 w-5" />
                    Book Your Consultation
                  </Link>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="border-2 border-white text-white hover:bg-white hover:text-[#47145a] px-8 py-6 text-lg hover:scale-105 transition-all bg-transparent"
                >
                  <Link href="/treatments">
                    Explore Treatment Options
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
