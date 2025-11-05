import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowLeft, Calendar, Clock } from "lucide-react"

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[#47145a] to-[#5a1b71] text-white py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <Link
              href="/blog"
              className="inline-flex items-center text-[#eb9142] hover:text-[#d67f35] mb-6 transition-colors"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to blog
            </Link>
            <span className="text-[#eb9142] font-bold text-sm tracking-wider uppercase block mb-4">BLOG POST</span>
            <h1 className="text-4xl md:text-5xl font-extrabold mb-6">
              {params.slug
                .split("-")
                .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
                .join(" ")}
            </h1>
            <div className="flex items-center gap-6 text-gray-300">
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                <span>Coming Soon</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                <span>5 min read</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
          <div className="prose prose-lg max-w-none">
            <p className="text-xl text-gray-600 leading-relaxed">
              This blog post is coming soon. We're working on creating comprehensive, informative content to help you on
              your fertility journey.
            </p>
            <p className="text-gray-600 leading-relaxed mt-6">
              In the meantime, feel free to explore our other resources or contact us directly with any questions you
              may have.
            </p>
          </div>

          <div className="mt-12 pt-12 border-t border-gray-200">
            <Button asChild size="lg" className="bg-[#eb9142] hover:bg-[#d67f35] text-white">
              <Link href="/contact">Contact Us for More Information</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
