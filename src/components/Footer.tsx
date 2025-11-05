import Link from "next/link"
import Image from "next/image"

export function Footer() {
  return (
    <footer className="bg-[#2d0a3d] text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Top decorative shape */}
        <div className="relative -mt-24 mb-12">
          <svg
            className="w-full h-32"
            viewBox="0 0 1440 100"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
          >
            <path d="M0,50 Q360,0 720,50 T1440,50 L1440,100 L0,100 Z" fill="#2d0a3d" />
            <path d="M720,60 Q900,40 1080,60 T1440,60 L1440,100 L720,100 Z" fill="#eb9142" opacity="0.3" />
            <circle cx="900" cy="70" r="40" fill="#eb9142" />
            <ellipse cx="1100" cy="50" rx="50" ry="30" fill="#e1a699" opacity="0.5" />
          </svg>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Brand Column */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="relative w-16 h-16 lg:w-20 lg:h-20 flex-shrink-0">
                <Image
                  src="/images/dr-vrushni-bhuta-logo.png"
                  alt="Dr. Vrushni Bhuta Logo"
                  width={80}
                  height={80}
                  className="object-contain drop-shadow-lg"
                />
              </div>
              <div className="flex flex-col">
                <h3 className="text-xl font-bold text-[#F29038]">Dr. Vrushni's Women's Care & Fertility Clinic</h3>
                <p className="text-xs text-gray-400 uppercase tracking-wider">Fertility Specialist</p>
              </div>
            </div>
            <p className="text-gray-300 text-sm">
              Your fertility expert and support in making your dreams of parenthood a reality.
            </p>
          </div>

          {/* Quick Links 1 */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-gray-300 hover:text-[#eb9142] transition-colors text-sm">
                  About
                </Link>
              </li>
              <li>
                <Link href="/about#commitment" className="text-gray-300 hover:text-[#eb9142] transition-colors text-sm">
                  Commitment
                </Link>
              </li>
              <li>
                <Link href="/about#experience" className="text-gray-300 hover:text-[#eb9142] transition-colors text-sm">
                  Experience
                </Link>
              </li>
              <li>
                <Link href="/faq" className="text-gray-300 hover:text-[#eb9142] transition-colors text-sm">
                  FAQ
                </Link>
              </li>
            </ul>
          </div>

          {/* Quick Links 2 */}
          <div>
            <h4 className="font-semibold mb-4">Services</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/treatments" className="text-gray-300 hover:text-[#eb9142] transition-colors text-sm">
                  Treatments
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-300 hover:text-[#eb9142] transition-colors text-sm">
                  Get In Touch
                </Link>
              </li>
              <li>
                <Link href="/testimonials" className="text-gray-300 hover:text-[#eb9142] transition-colors text-sm">
                  Testimonials
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-gray-300 hover:text-[#eb9142] transition-colors text-sm">
                  Blog & Resources
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold mb-4">Contact Us</h4>
            <ul className="space-y-3 text-sm text-gray-300">
              <li>
                <p className="font-medium text-white mb-1">Address:</p>
                <p>
                  Dilkhush CHS
                  <br />
                  1st Floor, Unit No.4
                  <br />
                  Santacruz (W), Mumbai - 400054
                </p>
              </li>
              <li>
                <p className="font-medium text-white mb-1">Phone:</p>
                <a href="tel:+919820086575" className="hover:text-[#eb9142] transition-colors">
                  +91 9820086575
                </a>
                <br />
                <a href="tel:+918591186575" className="hover:text-[#eb9142] transition-colors">
                  +91 8591186575
                </a>
              </li>
              <li>
                <p className="font-medium text-white mb-1">Email:</p>
                <a href="mailto:connect@drvrushni.com" className="hover:text-[#eb9142] transition-colors">
                  connect@drvrushni.com
                </a>
              </li>
              <li>
                <p className="font-medium text-white mb-1">Timings:</p>
                <p>
                  Mon-Sat: 11am - 9pm
                  <br />
                  Sun: 11am - 1pm
                  <br />
                  (With prior appointment)
                </p>
              </li>
            </ul>
          </div>
        </div>

        {/* Social Media & Treatments */}
        <div className="border-t border-gray-700 pt-8 mt-8">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">
            <div className="flex items-center gap-4">
              <a
                href="https://www.instagram.com/drvrushni"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-[#eb9142] transition-colors"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path
                    fillRule="evenodd"
                    d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.504.344-1.857.182-.466.399-.8.748-1.15.35-.35.566-.683.748-1.15.353-.137.882-.3 1.857-.344 1.054-.048 1.37-.058 4.041-.058h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 4.041v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 4.041v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>
              <a
                href="https://www.google.com/search?q=Dr+Vrushni+Bhuta"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-[#eb9142] transition-colors"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M12.48 10.92v3.28h7.84c-.24 1.84-.853 3.187-1.787 4.133-1.147 1.147-2.933 2.4-6.053 2.4-4.827 0-8.6-3.893-8.6-8.72s3.773-8.72 8.6-8.72c2.6 0 4.507 1.027 5.907 2.347l2.307-2.307C18.747 1.44 16.133 0 12.48 0 5.867 0 .307 5.387.307 12s5.56 12 12.173 12c3.573 0 6.267-1.173 8.373-3.36 2.16-2.16 2.84-5.213 2.84-7.667 0-.76-.053-1.467-.173-2.053H12.48z" />
                </svg>
              </a>
              <a
                href="https://www.linkedin.com/in/dr-vrushni-bhuta-2473b529a/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-[#eb9142] transition-colors"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Treatments List */}
          <div className="mb-8">
            <h4 className="font-semibold mb-4 text-lg">Treatments we can help you with</h4>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-x-6 gap-y-2 text-sm text-gray-300">
              <Link href="/treatments/pre-conceptional-counselling" className="hover:text-[#eb9142] transition-colors">
                Pre-conceptional Counselling
              </Link>
              <Link href="/treatments/follicular-monitoring" className="hover:text-[#eb9142] transition-colors">
                Follicular Monitoring
              </Link>
              <Link href="/treatments/iui" className="hover:text-[#eb9142] transition-colors">
                IUI (Intrauterine Insemination)
              </Link>
              <Link href="/treatments/ivf" className="hover:text-[#eb9142] transition-colors">
                IVF (In Vitro Fertilisation)
              </Link>
              <Link href="/treatments/icsi" className="hover:text-[#eb9142] transition-colors">
                ICSI (Intracytoplasmic Sperm Injection)
              </Link>
              <Link href="/treatments/testicular-sperm-aspiration" className="hover:text-[#eb9142] transition-colors">
                Testicular Sperm Aspiration & Biopsy
              </Link>
              <Link href="/treatments/fertility-surgery" className="hover:text-[#eb9142] transition-colors">
                Fertility Enhancing Surgery
              </Link>
              <Link href="/treatments/embryo-cryopreservation" className="hover:text-[#eb9142] transition-colors">
                Embryo Cryopreservation
              </Link>
              <Link href="/treatments/egg-freezing" className="hover:text-[#eb9142] transition-colors">
                Oocyte or Egg Freezing
              </Link>
              <Link href="/treatments/sperm-cryopreservation" className="hover:text-[#eb9142] transition-colors">
                Sperm Cryopreservation
              </Link>
              <Link href="/treatments/donor-oocyte" className="hover:text-[#eb9142] transition-colors">
                Donor Oocyte Program
              </Link>
              <Link href="/treatments/prp-ovary" className="hover:text-[#eb9142] transition-colors">
                PRP of the Ovary
              </Link>
              <Link href="/treatments/prp-endometrium" className="hover:text-[#eb9142] transition-colors">
                PRP of the Endometrium
              </Link>
              <Link href="/treatments/surrogacy" className="hover:text-[#eb9142] transition-colors">
                Surrogacy
              </Link>
              <Link href="/treatments/pgt" className="hover:text-[#eb9142] transition-colors">
                Preimplantation Genetic Testing
              </Link>
            </div>
          </div>

          {/* Copyright */}
          <div className="text-center text-sm text-gray-400 pt-8 border-t border-gray-700">
            <p>&copy; {new Date().getFullYear()} Dr Vrushni Bhuta. All Rights Reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
