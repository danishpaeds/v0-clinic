import Link from "next/link"
import Image from "next/image"

export function Footer() {
  return (
    <footer className="relative bg-gradient-to-br from-[#2d0a3d] via-[#47145a] to-[#2d0a3d] text-white overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-orange-400 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-400 rounded-full blur-3xl" />
      </div>

      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 py-16 border-b border-white/10">
          {/* Brand Section - Takes more space */}
          <div className="lg:col-span-4 space-y-6">
            <div className="flex items-center gap-4">
              <div className="relative w-20 h-20 flex-shrink-0">
                <Image
                  src="/images/dr-vrushni-bhuta-logo.png"
                  alt="Dr. Vrushni Bhuta Logo"
                  width={80}
                  height={80}
                  className="object-contain drop-shadow-2xl"
                />
              </div>
              <div className="space-y-1">
                <h3 className="text-xl md:text-2xl font-bold leading-tight bg-gradient-to-r from-orange-400 to-orange-300 bg-clip-text text-transparent">
                  Dr. Vrushni's
                </h3>
                <p className="text-base md:text-lg font-semibold text-white leading-tight">Women's Care &</p>
                <p className="text-base md:text-lg font-semibold text-orange-300/90 leading-tight">Fertility Clinic</p>
              </div>
            </div>
            <p className="text-gray-300 leading-relaxed max-w-md">
              Your trusted fertility specialist dedicated to making your dreams of parenthood a reality with
              compassionate care and advanced treatments.
            </p>
            <div className="pt-4">
              <p className="text-sm text-gray-400 mb-3 uppercase tracking-wider font-semibold">Connect With Us</p>
              <div className="flex items-center gap-4">
                <a
                  href="https://www.instagram.com/drvrushni"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group w-10 h-10 flex items-center justify-center rounded-full bg-white/10 hover:bg-gradient-to-r hover:from-purple-500 hover:to-orange-500 transition-all duration-300 transform hover:scale-110"
                >
                  <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg>
                </a>
                <a
                  href="https://www.google.com/search?q=Dr+Vrushni+Bhuta"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group w-10 h-10 flex items-center justify-center rounded-full bg-white/10 hover:bg-gradient-to-r hover:from-purple-500 hover:to-orange-500 transition-all duration-300 transform hover:scale-110"
                >
                  <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12.48 10.92v3.28h7.84c-.24 1.84-.853 3.187-1.787 4.133-1.147 1.147-2.933 2.4-6.053 2.4-4.827 0-8.6-3.893-8.6-8.72s3.773-8.72 8.6-8.72c2.6 0 4.507 1.027 5.907 2.347l2.307-2.307C18.747 1.44 16.133 0 12.48 0 5.867 0 .307 5.387.307 12s5.56 12 12.173 12c3.573 0 6.267-1.173 8.373-3.36 2.16-2.16 2.84-5.213 2.84-7.667 0-.76-.053-1.467-.173-2.053H12.48z" />
                  </svg>
                </a>
                <a
                  href="https://www.linkedin.com/in/dr-vrushni-bhuta-2473b529a/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group w-10 h-10 flex items-center justify-center rounded-full bg-white/10 hover:bg-gradient-to-r hover:from-purple-500 hover:to-orange-500 transition-all duration-300 transform hover:scale-110"
                >
                  <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-2">
            <h4 className="text-lg font-bold mb-6 text-orange-300">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/about"
                  className="text-gray-300 hover:text-orange-300 transition-colors inline-flex items-center group"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-orange-400 mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/treatments"
                  className="text-gray-300 hover:text-orange-300 transition-colors inline-flex items-center group"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-orange-400 mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                  Treatments
                </Link>
              </li>
              <li>
                <Link
                  href="/testimonials"
                  className="text-gray-300 hover:text-orange-300 transition-colors inline-flex items-center group"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-orange-400 mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                  Testimonials
                </Link>
              </li>
              <li>
                <Link
                  href="/blog"
                  className="text-gray-300 hover:text-orange-300 transition-colors inline-flex items-center group"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-orange-400 mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                  Blog & Resources
                </Link>
              </li>
              <li>
                <Link
                  href="/faq"
                  className="text-gray-300 hover:text-orange-300 transition-colors inline-flex items-center group"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-orange-400 mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                  FAQ
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div className="lg:col-span-3">
            <h4 className="text-lg font-bold mb-6 text-orange-300">Popular Treatments</h4>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/treatments/ivf"
                  className="text-gray-300 hover:text-orange-300 transition-colors inline-flex items-center group"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-orange-400 mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                  IVF (In Vitro Fertilisation)
                </Link>
              </li>
              <li>
                <Link
                  href="/treatments/iui"
                  className="text-gray-300 hover:text-orange-300 transition-colors inline-flex items-center group"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-orange-400 mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                  IUI (Intrauterine Insemination)
                </Link>
              </li>
              <li>
                <Link
                  href="/treatments/icsi"
                  className="text-gray-300 hover:text-orange-300 transition-colors inline-flex items-center group"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-orange-400 mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                  ICSI
                </Link>
              </li>
              <li>
                <Link
                  href="/treatments/egg-freezing"
                  className="text-gray-300 hover:text-orange-300 transition-colors inline-flex items-center group"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-orange-400 mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                  Egg Freezing
                </Link>
              </li>
              <li>
                <Link
                  href="/treatments/pgt"
                  className="text-gray-300 hover:text-orange-300 transition-colors inline-flex items-center group"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-orange-400 mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                  Genetic Testing (PGT)
                </Link>
              </li>
              <li>
                <Link
                  href="/treatments"
                  className="text-orange-300 hover:text-orange-200 transition-colors inline-flex items-center group font-medium"
                >
                  View All Treatments →
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="lg:col-span-3">
            <h4 className="text-lg font-bold mb-6 text-orange-300">Get In Touch</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <svg
                  className="w-5 h-5 text-orange-400 flex-shrink-0 mt-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
                <div className="text-sm">
                  <p className="text-gray-300 leading-relaxed">
                    Dilkhush CHS, 1st Floor, Unit No.4
                    <br />
                    Santacruz (W), Mumbai - 400054
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <svg
                  className="w-5 h-5 text-orange-400 flex-shrink-0 mt-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
                <div className="text-sm">
                  <a href="tel:+918591186575" className="text-gray-300 hover:text-orange-300 transition-colors block">
                    +91 8591186575
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <svg
                  className="w-5 h-5 text-orange-400 flex-shrink-0 mt-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2z"
                  />
                </svg>
                <a
                  href="mailto:connect@drvrushni.com"
                  className="text-sm text-gray-300 hover:text-orange-300 transition-colors"
                >
                  connect@drvrushni.com
                </a>
              </li>
              <li className="flex items-start gap-3">
                <svg
                  className="w-5 h-5 text-orange-400 flex-shrink-0 mt-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                <div className="text-sm text-gray-300">
                  <p className="font-medium text-white mb-1">Clinic Hours:</p>
                  <p>Mon-Sat: 11am - 9pm</p>
                  <p>Sun: 11am - 1pm</p>
                  <p className="text-xs text-gray-400 mt-1">(By appointment only)</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="py-8">
          <div className="mb-6 pb-6 border-b border-white/10">
            <div className="max-w-4xl mx-auto space-y-4">
              {/* Medical Registration */}
              <div className="text-center">
                <p className="text-sm text-gray-300">
                  <span className="font-semibold text-orange-300">Medical Registration:</span> MMC Registration -
                  2009020251 (Dr Vrushni Bhuta)
                </p>
              </div>

              {/* PCPNDT Disclaimer */}
              <div className="bg-white/5 backdrop-blur-sm rounded-lg p-4 border border-white/10">
                <p className="text-xs md:text-sm text-gray-300 text-center leading-relaxed">
                  <span className="font-semibold text-orange-300">Disclaimer:</span> We strictly adhere to the PCPNDT
                  Act. We do not perform gender determination or sex selection services. All treatments are performed
                  within the legal framework of Indian Medical Law.
                </p>
              </div>
            </div>
          </div>

          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-400">
            <p>&copy; {new Date().getFullYear()} Dr Vrushni Bhuta. All Rights Reserved.</p>
            <div className="flex items-center gap-6">
              <Link href="/contact" className="hover:text-orange-300 transition-colors">
                Contact
              </Link>
              <Link href="/location" className="hover:text-orange-300 transition-colors">
                Location
              </Link>
              <Link href="/gallery" className="hover:text-orange-300 transition-colors">
                Gallery
              </Link>
              <Link href="/privacy-policy" className="hover:text-orange-300 transition-colors">
                Privacy Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
