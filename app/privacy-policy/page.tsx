import type { Metadata } from "next"
import Link from "next/link"
import { Shield, Lock, Eye, Database, UserCheck, FileText, AlertCircle, Mail } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

export const metadata: Metadata = {
  title: "Privacy Policy | Dr Vrushni Bhuta Fertility Clinic Mumbai",
  description:
    "Learn how Dr Vrushni Bhuta's Fertility Clinic protects your personal and medical information. Read our comprehensive privacy policy for patient data protection and confidentiality.",
  keywords:
    "privacy policy, patient confidentiality, medical data protection, HIPAA compliance, fertility clinic privacy, Mumbai",
  openGraph: {
    title: "Privacy Policy - Dr Vrushni Bhuta Fertility Clinic",
    description:
      "Your privacy and medical data security are our top priorities. Learn about our commitment to protecting your information.",
  },
}

export default function PrivacyPolicyPage() {
  const lastUpdated = "January 2025"

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[#47145a] via-[#5a1b71] to-[#47145a] text-white py-20 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 right-20 w-96 h-96 bg-[#eb9142] rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 left-20 w-96 h-96 bg-pink-400 rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full mb-6">
              <Shield className="w-5 h-5 text-[#eb9142]" />
              <span className="text-sm font-semibold tracking-wider uppercase">Your Privacy Matters</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">Privacy Policy</h1>
            <p className="text-xl text-gray-200 leading-relaxed">
              Dr Vrushni Bhuta's Women's Care & Fertility Clinic is committed to protecting your privacy and ensuring
              the security of your personal and medical information.
            </p>
            <p className="text-sm text-gray-300 mt-6">Last Updated: {lastUpdated}</p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 bg-gradient-to-b from-white to-[#fbf7f6]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            {/* Introduction */}
            <Card className="mb-8 border-2 border-[#eb9142]/20">
              <CardContent className="p-8">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#47145a] to-[#eb9142] flex items-center justify-center flex-shrink-0">
                    <FileText className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-[#47145a] mb-4">Introduction</h2>
                    <p className="text-gray-700 leading-relaxed mb-4">
                      This Privacy Policy explains how Dr Vrushni Bhuta's Women's Care & Fertility Clinic ("we," "us,"
                      or "our") collects, uses, discloses, and safeguards your information when you visit our website{" "}
                      <Link href="/" className="text-[#eb9142] hover:underline">
                        drvrushni.com
                      </Link>{" "}
                      or use our services.
                    </p>
                    <p className="text-gray-700 leading-relaxed">
                      We are committed to maintaining the highest standards of patient confidentiality and data
                      protection in accordance with Indian medical laws, including the Personal Data Protection Bill and
                      applicable regulations.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Information We Collect */}
            <div className="mb-12">
              <div className="flex items-center gap-3 mb-6">
                <Database className="w-8 h-8 text-[#eb9142]" />
                <h2 className="text-3xl font-bold text-[#47145a]">Information We Collect</h2>
              </div>

              <div className="space-y-6">
                <Card className="border-l-4 border-[#eb9142]">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold text-[#47145a] mb-3">Personal Information</h3>
                    <ul className="list-disc list-inside space-y-2 text-gray-700">
                      <li>Name, age, gender, and contact details (phone, email, address)</li>
                      <li>Marital status and family information</li>
                      <li>Government-issued identification documents</li>
                      <li>Emergency contact information</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="border-l-4 border-[#47145a]">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold text-[#47145a] mb-3">Medical Information</h3>
                    <ul className="list-disc list-inside space-y-2 text-gray-700">
                      <li>Medical history, including past treatments and surgeries</li>
                      <li>Fertility assessment results and diagnostic test reports</li>
                      <li>Treatment plans, medications, and prescriptions</li>
                      <li>Progress notes and consultation records</li>
                      <li>Laboratory results, ultrasound reports, and imaging studies</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="border-l-4 border-purple-400">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold text-[#47145a] mb-3">Technical Information</h3>
                    <ul className="list-disc list-inside space-y-2 text-gray-700">
                      <li>IP address, browser type, and device information</li>
                      <li>Website usage data and analytics</li>
                      <li>Cookies and similar tracking technologies</li>
                      <li>Form submissions and appointment requests</li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* How We Use Your Information */}
            <div className="mb-12">
              <div className="flex items-center gap-3 mb-6">
                <UserCheck className="w-8 h-8 text-[#eb9142]" />
                <h2 className="text-3xl font-bold text-[#47145a]">How We Use Your Information</h2>
              </div>

              <Card>
                <CardContent className="p-8">
                  <ul className="space-y-4 text-gray-700">
                    <li className="flex items-start gap-3">
                      <span className="w-2 h-2 rounded-full bg-[#eb9142] mt-2 flex-shrink-0"></span>
                      <span>
                        <strong>Medical Care:</strong> To provide fertility treatments, diagnosis, and ongoing medical
                        care
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="w-2 h-2 rounded-full bg-[#eb9142] mt-2 flex-shrink-0"></span>
                      <span>
                        <strong>Appointment Management:</strong> To schedule, confirm, and manage your appointments
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="w-2 h-2 rounded-full bg-[#eb9142] mt-2 flex-shrink-0"></span>
                      <span>
                        <strong>Communication:</strong> To send treatment updates, test results, and important medical
                        information
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="w-2 h-2 rounded-full bg-[#eb9142] mt-2 flex-shrink-0"></span>
                      <span>
                        <strong>Billing & Insurance:</strong> To process payments and insurance claims
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="w-2 h-2 rounded-full bg-[#eb9142] mt-2 flex-shrink-0"></span>
                      <span>
                        <strong>Legal Compliance:</strong> To comply with medical regulations and legal requirements
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="w-2 h-2 rounded-full bg-[#eb9142] mt-2 flex-shrink-0"></span>
                      <span>
                        <strong>Quality Improvement:</strong> To analyze treatment outcomes and improve our services
                        (anonymized data)
                      </span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>

            {/* Data Security */}
            <div className="mb-12">
              <div className="flex items-center gap-3 mb-6">
                <Lock className="w-8 h-8 text-[#eb9142]" />
                <h2 className="text-3xl font-bold text-[#47145a]">Data Security & Protection</h2>
              </div>

              <Card className="bg-gradient-to-br from-purple-50 to-orange-50 border-2 border-[#47145a]/20">
                <CardContent className="p-8">
                  <p className="text-gray-700 mb-4 leading-relaxed">
                    We implement industry-standard security measures to protect your personal and medical information:
                  </p>
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex items-start gap-3">
                      <Shield className="w-5 h-5 text-[#eb9142] mt-1 flex-shrink-0" />
                      <span>Encrypted data transmission using SSL/TLS protocols</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Shield className="w-5 h-5 text-[#eb9142] mt-1 flex-shrink-0" />
                      <span>Secure cloud storage with restricted access controls</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Shield className="w-5 h-5 text-[#eb9142] mt-1 flex-shrink-0" />
                      <span>Regular security audits and system updates</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Shield className="w-5 h-5 text-[#eb9142] mt-1 flex-shrink-0" />
                      <span>Staff training on patient confidentiality and data protection</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Shield className="w-5 h-5 text-[#eb9142] mt-1 flex-shrink-0" />
                      <span>Physical security measures at our clinic locations</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>

            {/* Information Sharing */}
            <div className="mb-12">
              <div className="flex items-center gap-3 mb-6">
                <Eye className="w-8 h-8 text-[#eb9142]" />
                <h2 className="text-3xl font-bold text-[#47145a]">Information Sharing & Disclosure</h2>
              </div>

              <Card>
                <CardContent className="p-8">
                  <p className="text-gray-700 mb-4 leading-relaxed">
                    We do not sell, trade, or rent your personal information. We may share your information only in the
                    following circumstances:
                  </p>
                  <div className="space-y-4">
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <h4 className="font-semibold text-[#47145a] mb-2">Healthcare Providers</h4>
                      <p className="text-gray-700 text-sm">
                        With other healthcare professionals involved in your care (hospitals, laboratories, specialists)
                      </p>
                    </div>
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <h4 className="font-semibold text-[#47145a] mb-2">Legal Requirements</h4>
                      <p className="text-gray-700 text-sm">
                        When required by law, court order, or regulatory authorities
                      </p>
                    </div>
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <h4 className="font-semibold text-[#47145a] mb-2">Your Consent</h4>
                      <p className="text-gray-700 text-sm">With your explicit written consent for specific purposes</p>
                    </div>
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <h4 className="font-semibold text-[#47145a] mb-2">Emergency Situations</h4>
                      <p className="text-gray-700 text-sm">To protect your vital interests in medical emergencies</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Your Rights */}
            <div className="mb-12">
              <div className="flex items-center gap-3 mb-6">
                <UserCheck className="w-8 h-8 text-[#eb9142]" />
                <h2 className="text-3xl font-bold text-[#47145a]">Your Rights & Choices</h2>
              </div>

              <Card className="border-2 border-[#eb9142]/30">
                <CardContent className="p-8">
                  <p className="text-gray-700 mb-6 leading-relaxed">As a patient, you have the following rights:</p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 rounded-full bg-[#eb9142]/10 flex items-center justify-center flex-shrink-0">
                        <span className="text-[#eb9142] font-bold">✓</span>
                      </div>
                      <div>
                        <h4 className="font-semibold text-[#47145a] mb-1">Access</h4>
                        <p className="text-sm text-gray-600">Request copies of your medical records</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 rounded-full bg-[#eb9142]/10 flex items-center justify-center flex-shrink-0">
                        <span className="text-[#eb9142] font-bold">✓</span>
                      </div>
                      <div>
                        <h4 className="font-semibold text-[#47145a] mb-1">Correction</h4>
                        <p className="text-sm text-gray-600">Request corrections to inaccurate information</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 rounded-full bg-[#eb9142]/10 flex items-center justify-center flex-shrink-0">
                        <span className="text-[#eb9142] font-bold">✓</span>
                      </div>
                      <div>
                        <h4 className="font-semibold text-[#47145a] mb-1">Deletion</h4>
                        <p className="text-sm text-gray-600">Request deletion of personal data (with limitations)</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 rounded-full bg-[#eb9142]/10 flex items-center justify-center flex-shrink-0">
                        <span className="text-[#eb9142] font-bold">✓</span>
                      </div>
                      <div>
                        <h4 className="font-semibold text-[#47145a] mb-1">Opt-Out</h4>
                        <p className="text-sm text-gray-600">Unsubscribe from marketing communications</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Cookies */}
            <div className="mb-12">
              <div className="flex items-center gap-3 mb-6">
                <AlertCircle className="w-8 h-8 text-[#eb9142]" />
                <h2 className="text-3xl font-bold text-[#47145a]">Cookies & Tracking Technologies</h2>
              </div>

              <Card>
                <CardContent className="p-8">
                  <p className="text-gray-700 mb-4 leading-relaxed">
                    Our website uses cookies and similar technologies to enhance your browsing experience and analyze
                    website traffic:
                  </p>
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex items-start gap-3">
                      <span className="text-[#eb9142] font-bold flex-shrink-0">•</span>
                      <span>
                        <strong>Essential Cookies:</strong> Required for website functionality
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-[#eb9142] font-bold flex-shrink-0">•</span>
                      <span>
                        <strong>Analytics Cookies:</strong> Help us understand how visitors use our website (Google
                        Analytics)
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-[#eb9142] font-bold flex-shrink-0">•</span>
                      <span>
                        <strong>Marketing Cookies:</strong> Track your interests for personalized content (with your
                        consent)
                      </span>
                    </li>
                  </ul>
                  <p className="text-sm text-gray-600 mt-4">
                    You can manage cookie preferences through your browser settings.
                  </p>
                </CardContent>
              </Card>
            </div>

            {/* Third Party Services */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-[#47145a] mb-6">Third-Party Services</h2>
              <Card>
                <CardContent className="p-8">
                  <p className="text-gray-700 leading-relaxed mb-4">
                    We use trusted third-party services for specific functions:
                  </p>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start gap-3">
                      <span className="text-[#eb9142] flex-shrink-0">→</span>
                      <span>Google Analytics for website analytics</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-[#eb9142] flex-shrink-0">→</span>
                      <span>Google Tag Manager for marketing optimization</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-[#eb9142] flex-shrink-0">→</span>
                      <span>Email service providers for appointment reminders</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-[#eb9142] flex-shrink-0">→</span>
                      <span>Payment processors for secure transactions</span>
                    </li>
                  </ul>
                  <p className="text-sm text-gray-600 mt-4">
                    These services have their own privacy policies and we ensure they maintain appropriate data
                    protection standards.
                  </p>
                </CardContent>
              </Card>
            </div>

            {/* Children's Privacy */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-[#47145a] mb-6">Children's Privacy</h2>
              <Card className="bg-amber-50 border-amber-200 border-2">
                <CardContent className="p-8">
                  <p className="text-gray-700 leading-relaxed">
                    Our website and services are not directed to individuals under the age of 18. We do not knowingly
                    collect personal information from children. If you believe we have inadvertently collected
                    information from a minor, please contact us immediately.
                  </p>
                </CardContent>
              </Card>
            </div>

            {/* Data Retention */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-[#47145a] mb-6">Data Retention</h2>
              <Card>
                <CardContent className="p-8">
                  <p className="text-gray-700 leading-relaxed mb-4">
                    We retain your medical records and personal information as required by:
                  </p>
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex items-start gap-3">
                      <span className="text-[#eb9142] font-bold flex-shrink-0">•</span>
                      <span>Indian medical record-keeping regulations (minimum 5 years after last visit)</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-[#eb9142] font-bold flex-shrink-0">•</span>
                      <span>Legal and regulatory requirements</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-[#eb9142] font-bold flex-shrink-0">•</span>
                      <span>Continuity of care and medical necessity</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>

            {/* Changes to Policy */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-[#47145a] mb-6">Changes to This Privacy Policy</h2>
              <Card>
                <CardContent className="p-8">
                  <p className="text-gray-700 leading-relaxed">
                    We may update this Privacy Policy from time to time to reflect changes in our practices or legal
                    requirements. We will notify you of significant changes by posting the updated policy on our website
                    with a revised "Last Updated" date. We encourage you to review this policy periodically.
                  </p>
                </CardContent>
              </Card>
            </div>

            {/* Contact Section */}
            <div className="mb-12">
              <div className="flex items-center gap-3 mb-6">
                <Mail className="w-8 h-8 text-[#eb9142]" />
                <h2 className="text-3xl font-bold text-[#47145a]">Contact Us</h2>
              </div>

              <Card className="bg-gradient-to-br from-[#47145a] to-[#5a1b71] text-white">
                <CardContent className="p-8">
                  <p className="text-white/90 mb-6 leading-relaxed">
                    If you have any questions, concerns, or requests regarding this Privacy Policy or your personal
                    information, please contact us:
                  </p>
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <span className="text-[#eb9142] font-bold">📍</span>
                      <div>
                        <p className="font-semibold mb-1">Dr. Vrushni's Women's Care & Fertility Clinic</p>
                        <p className="text-white/80">Dilkhush CHS, 1st Floor, Unit No.4</p>
                        <p className="text-white/80">Santacruz (W), Mumbai - 400054</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="text-[#eb9142] font-bold">📞</span>
                      <a href="tel:+918591186575" className="hover:text-[#eb9142] transition-colors">
                        +91 8591186575
                      </a>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="text-[#eb9142] font-bold">✉️</span>
                      <a href="mailto:connect@drvrushni.com" className="hover:text-[#eb9142] transition-colors">
                        connect@drvrushni.com
                      </a>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Legal Disclaimer */}
            <Card className="bg-purple-50 border-2 border-[#47145a]/20">
              <CardContent className="p-8">
                <h3 className="text-xl font-bold text-[#47145a] mb-4">Legal Compliance</h3>
                <p className="text-gray-700 leading-relaxed text-sm">
                  This Privacy Policy is designed to comply with the Indian Personal Data Protection Bill, Information
                  Technology Act 2000, and other applicable data protection regulations. We are committed to maintaining
                  the highest standards of patient confidentiality as mandated by the Medical Council of India and
                  Indian Medical Association guidelines.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  )
}
