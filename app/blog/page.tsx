import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { Calendar, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export const metadata = {
  title: "Fertility Blog & Resources - Dr Vrushni Bhuta",
  description:
    "Read informative articles about fertility, IVF, pregnancy, and reproductive health from Dr Vrushni Bhuta.",
  keywords:
    "fertility blog, IVF articles, pregnancy tips, fertility resources, reproductive health blog, Dr Vrushni Bhuta blog, fertility advice Mumbai",
  openGraph: {
    title: "Fertility Blog & Resources | Dr. Vrushni Bhuta",
    description:
      "Expert insights, tips, and resources about fertility, IVF, pregnancy, and reproductive health from Mumbai's leading fertility specialist.",
    type: "website",
    locale: "en_IN",
    url: "https://drvrushni.com/blog",
    siteName: "Dr. Vrushni's Women's Care & Fertility Clinic",
    images: [
      {
        url: "/images/doctor-purple-blazer-seated.jpg",
        width: 1200,
        height: 630,
        alt: "Dr. Vrushni Bhuta - Fertility Specialist Blog",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Fertility Blog & Resources | Dr. Vrushni Bhuta",
    description: "Expert fertility insights and resources from Mumbai's leading fertility specialist.",
    images: ["/images/doctor-purple-blazer-seated.jpg"],
  },
}

export default function BlogPage() {
  const blogPosts = [
    {
      title: "Understanding IVF: A Complete Guide",
      excerpt:
        "Fertility struggles are emotional and personal. Learn everything about IVF treatment in Mumbai - the process, success rates, costs, and realistic expectations from Dr Vrushni Bhuta.",
      date: "2024-01-15",
      category: "IVF",
      slug: "understanding-ivf-complete-guide",
    },
    {
      title: "10 Natural Ways to Boost Fertility",
      excerpt: "Discover lifestyle changes and natural methods that can help improve your chances of conception.",
      date: "2024-10-10",
      category: "Lifestyle",
      slug: "natural-ways-boost-fertility",
    },
    {
      title: "PCOS and Fertility: What You Need to Know",
      excerpt:
        "Polycystic Ovary Syndrome affects many women. Learn how it impacts fertility and what treatment options are available.",
      date: "2024-10-05",
      category: "Conditions",
      slug: "pcos-and-fertility",
    },
    {
      title: "Egg Freezing: Preserving Your Future",
      excerpt:
        "A comprehensive guide to egg freezing, including who should consider it, the process, and success rates.",
      date: "2024-09-30",
      category: "Fertility Preservation",
      slug: "egg-freezing-guide",
    },
    {
      title: "Male Factor Infertility: Causes and Solutions",
      excerpt:
        "Infertility affects men too. Understand the common causes and available treatments for male infertility.",
      date: "2024-09-25",
      category: "Male Fertility",
      slug: "male-factor-infertility",
    },
    {
      title: "Preparing for Your First IVF Cycle",
      excerpt:
        "Essential tips and information to help you prepare physically and emotionally for your first IVF treatment.",
      date: "2024-09-20",
      category: "IVF",
      slug: "preparing-first-ivf-cycle",
    },
    {
      title: "Endometriosis and Your Fertility",
      excerpt: "How endometriosis affects fertility and the latest treatment options to help you conceive.",
      date: "2024-09-15",
      category: "Conditions",
      slug: "endometriosis-fertility",
    },
    {
      title: "The Role of Nutrition in Fertility",
      excerpt: "Learn about the best foods and nutrients to support reproductive health and improve fertility.",
      date: "2024-09-10",
      category: "Lifestyle",
      slug: "nutrition-fertility",
    },
    {
      title: "Understanding Your Fertility Window",
      excerpt: "Master the art of timing with this guide to understanding ovulation and your most fertile days.",
      date: "2024-09-05",
      category: "Getting Pregnant",
      slug: "understanding-fertility-window",
    },
  ]

  const categories = [
    "All",
    "IVF",
    "Lifestyle",
    "Conditions",
    "Fertility Preservation",
    "Male Fertility",
    "Getting Pregnant",
  ]

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[#47145a] to-[#5a1b71] text-white py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <span className="text-[#eb9142] font-bold text-sm tracking-wider uppercase">BLOG & RESOURCES</span>
            <h1 className="text-4xl md:text-5xl font-extrabold mt-4 mb-6">Fertility Knowledge Hub</h1>
            <p className="text-xl text-gray-200">
              Expert insights, tips, and resources to support your fertility journey
            </p>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-8 bg-white border-b border-gray-200">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-3 justify-center">
            {categories.map((category, index) => (
              <button
                key={index}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-colors ${
                  index === 0
                    ? "bg-[#eb9142] text-white"
                    : "bg-gray-100 text-gray-700 hover:bg-[#eb9142]/10 hover:text-[#eb9142]"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <Card
                key={index}
                className="border-2 border-gray-100 hover:border-[#eb9142] transition-all hover:shadow-xl group"
              >
                <CardContent className="p-0">
                  <div className="h-48 bg-gradient-to-br from-[#47145a] to-[#5a1b71] relative overflow-hidden">
                    <div className="absolute inset-0 bg-[#eb9142] opacity-0 group-hover:opacity-20 transition-opacity" />
                    <div className="absolute bottom-4 left-4">
                      <span className="inline-block px-3 py-1 text-xs font-semibold text-white bg-[#eb9142] rounded-full">
                        {post.category}
                      </span>
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-2 text-sm text-gray-500 mb-3">
                      <Calendar className="w-4 h-4" />
                      <span>
                        {new Date(post.date).toLocaleDateString("en-US", {
                          month: "long",
                          day: "numeric",
                          year: "numeric",
                        })}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold text-[#47145a] mb-3 group-hover:text-[#eb9142] transition-colors">
                      {post.title}
                    </h3>
                    <p className="text-gray-600 mb-4 text-sm leading-relaxed">{post.excerpt}</p>
                    <Link
                      href={`/blog/${post.slug}`}
                      className="inline-flex items-center text-[#eb9142] hover:text-[#d67f35] font-semibold text-sm transition-colors"
                    >
                      Read more
                      <ArrowRight className="w-4 h-4 ml-1" />
                    </Link>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-20 bg-gradient-to-b from-white to-[#fbf7f6]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="max-w-2xl mx-auto border-2 border-[#47145a]/10">
            <CardContent className="p-8 text-center">
              <h2 className="text-3xl font-bold text-[#47145a] mb-4">Stay Informed</h2>
              <p className="text-gray-600 mb-6">
                Subscribe to our newsletter for the latest fertility tips, success stories, and updates from Dr Vrushni
                Bhuta
              </p>
              <form className="flex flex-col sm:flex-row gap-4">
                <input
                  type="email"
                  placeholder="Enter your email address"
                  className="flex-1 px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#eb9142] focus:border-transparent"
                />
                <button
                  type="submit"
                  className="px-8 py-3 bg-[#eb9142] hover:bg-[#d67f35] text-white font-medium rounded-md transition-colors"
                >
                  Subscribe
                </button>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto bg-gradient-to-br from-[#47145a] to-[#5a1b71] rounded-3xl p-12 text-center text-white shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#eb9142] rounded-full opacity-20 blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-pink-400 rounded-full opacity-20 blur-3xl"></div>

            <div className="relative z-10">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Take the Next Step?</h2>
              <p className="text-lg text-gray-200 mb-8 max-w-2xl mx-auto">
                Schedule a consultation with Dr Vrushni Bhuta to discuss your personalized fertility treatment plan
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  asChild
                  size="lg"
                  className="bg-white text-[#47145a] hover:bg-gray-100 px-8 py-6 text-lg shadow-lg hover:shadow-xl hover:scale-105 transition-all"
                >
                  <Link href="/contact">
                    <Calendar className="mr-2 h-5 w-5" />
                    Book Consultation
                  </Link>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="border-2 border-white text-white hover:bg-white hover:text-[#47145a] px-8 py-6 text-lg hover:scale-105 transition-all bg-transparent"
                >
                  <Link href="/treatments">
                    View Treatments
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
