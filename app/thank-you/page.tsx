import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle, Calendar, Phone, Mail, ArrowRight } from "lucide-react"

export const metadata = {
  title: "Thank You - Message Received | Dr Vrushni Bhuta Fertility Clinic",
  description: "Thank you for contacting Dr. Vrushni's Women's Care & Fertility Clinic. We'll get back to you soon.",
  robots: "noindex, nofollow",
}

export default function ThankYouPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[#47145a] to-[#5a1b71] text-white py-20 flex-grow flex items-center">
        {/* Decorative elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 right-20 w-64 h-64 bg-[#eb9142] rounded-full opacity-10 blur-3xl"></div>
          <div className="absolute bottom-20 left-20 w-96 h-96 bg-pink-400 rounded-full opacity-10 blur-3xl"></div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            {/* Success Icon */}
            <div className="mb-8 inline-block">
              <div className="w-24 h-24 bg-green-500/20 rounded-full flex items-center justify-center mx-auto animate-pulse">
                <CheckCircle className="w-16 h-16 text-green-400" />
              </div>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6">Thank You!</h1>
            <p className="text-xl md:text-2xl text-gray-200 mb-8 max-w-2xl mx-auto">
              Your message has been received successfully. Our team will get back to you within 24 hours.
            </p>

            {/* Info Card */}
            <Card className="max-w-2xl mx-auto mb-12 border-2 border-white/20 bg-white/10 backdrop-blur-sm">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold text-white mb-6">What Happens Next?</h2>
                <div className="space-y-4 text-left">
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 rounded-full bg-[#eb9142] flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-white font-bold text-sm">1</span>
                    </div>
                    <div>
                      <h3 className="font-semibold text-white mb-1">We'll Review Your Message</h3>
                      <p className="text-gray-300 text-sm">
                        Our team will carefully review your inquiry and medical history.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 rounded-full bg-[#eb9142] flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-white font-bold text-sm">2</span>
                    </div>
                    <div>
                      <h3 className="font-semibold text-white mb-1">Personal Response</h3>
                      <p className="text-gray-300 text-sm">
                        A member of our team will contact you within 24 hours via phone or email.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 rounded-full bg-[#eb9142] flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-white font-bold text-sm">3</span>
                    </div>
                    <div>
                      <h3 className="font-semibold text-white mb-1">Schedule Your Consultation</h3>
                      <p className="text-gray-300 text-sm">
                        We'll help you schedule an appointment at a time convenient for you.
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Quick Actions */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
              <Card className="border-2 border-white/20 bg-white/10 backdrop-blur-sm hover:bg-white/20 transition-all">
                <CardContent className="p-6 text-center">
                  <Phone className="w-8 h-8 text-[#eb9142] mx-auto mb-3" />
                  <h3 className="font-semibold text-white mb-2">Call Us</h3>
                  <a href="tel:+918591186575" className="text-gray-300 hover:text-[#eb9142] transition-colors text-sm">
                    +91 8591186575
                  </a>
                </CardContent>
              </Card>

              <Card className="border-2 border-white/20 bg-white/10 backdrop-blur-sm hover:bg-white/20 transition-all">
                <CardContent className="p-6 text-center">
                  <Mail className="w-8 h-8 text-[#eb9142] mx-auto mb-3" />
                  <h3 className="font-semibold text-white mb-2">Email Us</h3>
                  <a
                    href="mailto:connect@drvrushni.com"
                    className="text-gray-300 hover:text-[#eb9142] transition-colors text-sm"
                  >
                    connect@drvrushni.com
                  </a>
                </CardContent>
              </Card>

              <Card className="border-2 border-white/20 bg-white/10 backdrop-blur-sm hover:bg-white/20 transition-all">
                <CardContent className="p-6 text-center">
                  <Calendar className="w-8 h-8 text-[#eb9142] mx-auto mb-3" />
                  <h3 className="font-semibold text-white mb-2">Clinic Hours</h3>
                  <p className="text-gray-300 text-sm">Mon-Sat: 11am-9pm</p>
                  <p className="text-gray-300 text-sm">Sun: 11am-1pm</p>
                </CardContent>
              </Card>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-white text-[#47145a] hover:bg-gray-100 px-8 py-6 text-lg">
                <Link href="/">
                  <ArrowRight className="mr-2 h-5 w-5 rotate-180" />
                  Back to Home
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-2 border-white text-white hover:bg-white hover:text-[#47145a] px-8 py-6 text-lg bg-transparent"
              >
                <Link href="/treatments">
                  Explore Treatments
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Additional Resources */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-[#47145a] mb-6">While You Wait...</h2>
            <p className="text-gray-600 mb-8">
              Learn more about our treatments and read success stories from families we've helped
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Link
                href="/treatments"
                className="p-6 border-2 border-gray-200 rounded-lg hover:border-[#eb9142] hover:shadow-lg transition-all group"
              >
                <h3 className="font-semibold text-[#47145a] group-hover:text-[#eb9142] mb-2">Our Treatments</h3>
                <p className="text-gray-600 text-sm">Explore 23+ fertility treatment options</p>
              </Link>
              <Link
                href="/testimonials"
                className="p-6 border-2 border-gray-200 rounded-lg hover:border-[#eb9142] hover:shadow-lg transition-all group"
              >
                <h3 className="font-semibold text-[#47145a] group-hover:text-[#eb9142] mb-2">Success Stories</h3>
                <p className="text-gray-600 text-sm">Read inspiring patient testimonials</p>
              </Link>
              <Link
                href="/blog"
                className="p-6 border-2 border-gray-200 rounded-lg hover:border-[#eb9142] hover:shadow-lg transition-all group"
              >
                <h3 className="font-semibold text-[#47145a] group-hover:text-[#eb9142] mb-2">Fertility Blog</h3>
                <p className="text-gray-600 text-sm">Expert insights and resources</p>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
