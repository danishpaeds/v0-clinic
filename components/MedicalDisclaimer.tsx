import { AlertCircle } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

export function MedicalDisclaimer() {
  return (
    <section className="py-12 bg-gradient-to-b from-amber-50/50 to-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <Card className="border-2 border-amber-200 bg-amber-50/80 shadow-lg">
            <CardContent className="p-8">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-full bg-amber-100 flex items-center justify-center">
                    <AlertCircle className="w-6 h-6 text-amber-600" />
                  </div>
                </div>
                <div className="flex-1 space-y-4">
                  <h3 className="text-2xl font-bold text-[#47145a] mb-4">Important Medical Disclaimer</h3>

                  <div className="space-y-3 text-gray-700 leading-relaxed">
                    <p>
                      <strong>For Informational Purposes Only:</strong> The information provided on this page is for
                      educational purposes only and should not be considered as medical advice, diagnosis, or treatment
                      recommendation. Every individual's medical situation is unique.
                    </p>

                    <p>
                      <strong>Consult Your Healthcare Provider:</strong> Before making any decisions about fertility
                      treatments, medications, or procedures, please consult with Dr. Vrushni Bhuta or another qualified
                      healthcare professional. A thorough medical evaluation and personalized consultation are essential
                      to determine the most appropriate treatment plan for your specific circumstances.
                    </p>

                    <p>
                      <strong>Individual Results May Vary:</strong> Treatment outcomes, success rates, and experiences
                      vary significantly from patient to patient based on numerous factors including age, medical
                      history, underlying conditions, and individual response to treatment. The success rates and
                      information provided are general estimates and should not be considered a guarantee of results.
                    </p>

                    <p>
                      <strong>Risks and Side Effects:</strong> All medical treatments carry potential risks and side
                      effects. During your consultation, Dr. Vrushni Bhuta will discuss the specific risks, benefits,
                      and alternatives relevant to your situation to help you make an informed decision.
                    </p>

                    <p>
                      <strong>Medical Emergency:</strong> If you are experiencing a medical emergency, please call your
                      local emergency services immediately. This website is not intended for urgent medical situations.
                    </p>

                    <p className="text-sm text-gray-600 pt-2 border-t border-amber-200">
                      <strong>Regulatory Compliance:</strong> Dr. Vrushni's Women's Care & Fertility Clinic adheres to
                      all applicable medical regulations and ethical guidelines established by the Medical Council of
                      India and relevant healthcare authorities.
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
