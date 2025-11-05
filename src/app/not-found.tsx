import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Home } from "lucide-react"

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-[#fbf7f6] to-white flex items-center justify-center px-4">
      <div className="max-w-2xl mx-auto text-center">
        <div className="mb-8">
          <h1 className="text-9xl font-bold text-[#47145a] mb-4">404</h1>
          <h2 className="text-3xl md:text-4xl font-bold text-[#47145a] mb-4">Page Not Found</h2>
          <p className="text-xl text-gray-600 mb-8">The page you're looking for doesn't exist or has been moved.</p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button asChild size="lg" className="bg-[#47145a] hover:bg-[#5a1b71] text-white px-8">
            <Link href="/">
              <Home className="w-5 h-5 mr-2" />
              Go Home
            </Link>
          </Button>
          <Button
            asChild
            variant="outline"
            size="lg"
            className="border-[#47145a]/20 text-[#47145a] hover:border-[#47145a] hover:bg-[#47145a]/5 px-8 bg-transparent"
          >
            <Link href="/contact">Contact Us</Link>
          </Button>
        </div>

        <div className="mt-12 pt-12 border-t border-gray-200">
          <p className="text-gray-600 mb-4">Looking for something specific?</p>
          <div className="flex flex-wrap gap-3 justify-center">
            <Link href="/treatments" className="text-[#eb9142] hover:text-[#d67f35] font-medium">
              Treatments
            </Link>
            <span className="text-gray-300">•</span>
            <Link href="/about" className="text-[#eb9142] hover:text-[#d67f35] font-medium">
              About
            </Link>
            <span className="text-gray-300">•</span>
            <Link href="/gallery" className="text-[#eb9142] hover:text-[#d67f35] font-medium">
              Gallery
            </Link>
            <span className="text-gray-300">•</span>
            <Link href="/testimonials" className="text-[#eb9142] hover:text-[#d67f35] font-medium">
              Testimonials
            </Link>
            <span className="text-gray-300">•</span>
            <Link href="/faq" className="text-[#eb9142] hover:text-[#d67f35] font-medium">
              FAQ
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
