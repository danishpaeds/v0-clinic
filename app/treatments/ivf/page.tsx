import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Check, ArrowLeft, Phone } from 'lucide-react';

export const metadata = {
  title: 'IVF (In Vitro Fertilisation) Treatment - Dr Vrushni Bhuta',
  description: 'Learn about IVF treatment at Dr Vrushni\'s clinic. Comprehensive IVF services with personalized care and high success rates.',
};

export default function IVFPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[#47145a] to-[#5a1b71] text-white py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl">
            <Link href="/treatments" className="inline-flex items-center text-[#eb9142] hover:text-[#d67f35] mb-6 transition-colors">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to all treatments
            </Link>
            <span className="text-[#eb9142] font-bold text-sm tracking-wider uppercase block mb-4">TREATMENT</span>
            <h1 className="text-4xl md:text-5xl font-extrabold mb-6">
              IVF (In Vitro Fertilisation)
            </h1>
            <p className="text-xl text-gray-200">
              Advanced fertility treatment offering hope for conception when natural methods are unsuccessful
            </p>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-[#47145a] mb-6">What is IVF?</h2>
            <div className="prose max-w-none text-gray-700 leading-relaxed space-y-4">
              <p>
                In Vitro Fertilisation (IVF) is an advanced assisted reproductive technique that combines eggs and sperm in a laboratory setting. This procedure offers hope for conception when natural methods have been unsuccessful or when other fertility treatments haven't worked.
              </p>
              <p>
                During IVF, eggs collected from the woman are placed in a specialized culture dish along with millions of sperm, allowing natural fertilisation to occur in a controlled laboratory environment. The resulting embryos are then carefully monitored and developed before being transferred back into the uterus.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-gradient-to-b from-white to-[#fbf7f6]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-[#47145a] mb-12 text-center">The IVF Process</h2>
            <div className="space-y-6">
              {[
                {
                  step: 1,
                  title: 'Ovarian Stimulation',
                  description: 'Medications are administered to stimulate the ovaries to produce multiple eggs instead of the single egg that normally develops each month.',
                },
                {
                  step: 2,
                  title: 'Egg Retrieval',
                  description: 'A minor surgical procedure is performed under sedation to collect the mature eggs from the ovaries using ultrasound guidance.',
                },
                {
                  step: 3,
                  title: 'Fertilisation',
                  description: 'The collected eggs are combined with sperm in the laboratory. Fertilisation typically occurs within a few hours.',
                },
                {
                  step: 4,
                  title: 'Embryo Development',
                  description: 'Fertilized eggs (embryos) are cultured in the laboratory for 3-5 days while being carefully monitored for proper development.',
                },
                {
                  step: 5,
                  title: 'Embryo Transfer',
                  description: 'One or more healthy embryos are transferred into the uterus through a thin catheter. This is a painless procedure that doesn\'t require anesthesia.',
                },
                {
                  step: 6,
                  title: 'Pregnancy Test',
                  description: 'About two weeks after embryo transfer, a blood test is performed to determine if the treatment was successful.',
                },
              ].map((item) => (
                <Card key={item.step} className="border-2 border-gray-100 hover:border-[#eb9142] transition-colors">
                  <CardContent className="p-6 flex gap-6">
                    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#eb9142] text-white flex items-center justify-center font-bold text-lg">
                      {item.step}
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-[#47145a] mb-2">{item.title}</h3>
                      <p className="text-gray-600 leading-relaxed">{item.description}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Who Should Consider */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-[#47145a] mb-8">Who Should Consider IVF?</h2>
            <Card className="border-2 border-[#47145a]/10">
              <CardContent className="p-8">
                <ul className="space-y-4">
                  {[
                    'Women with blocked or damaged fallopian tubes',
                    'Couples with male factor infertility',
                    'Women with ovulation disorders',
                    'Women with endometriosis',
                    'Couples with unexplained infertility',
                    'Women with genetic disorders',
                    'Couples who have not succeeded with other fertility treatments',
                    'Women who want to preserve fertility before cancer treatment',
                  ].map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-[#eb9142] flex-shrink-0 mt-1" />
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Success Rates */}
      <section className="py-20 bg-gradient-to-b from-white to-[#fbf7f6]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-[#47145a] mb-8 text-center">Success Rates</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card className="border-2 border-[#47145a]/10 text-center">
                <CardContent className="p-8">
                  <div className="text-4xl font-bold text-[#eb9142] mb-2">40-50%</div>
                  <div className="text-gray-600">Under 35 years</div>
                </CardContent>
              </Card>
              <Card className="border-2 border-[#47145a]/10 text-center">
                <CardContent className="p-8">
                  <div className="text-4xl font-bold text-[#eb9142] mb-2">30-40%</div>
                  <div className="text-gray-600">35-40 years</div>
                </CardContent>
              </Card>
              <Card className="border-2 border-[#47145a]/10 text-center">
                <CardContent className="p-8">
                  <div className="text-4xl font-bold text-[#eb9142] mb-2">85%</div>
                  <div className="text-gray-600">Our clinic average</div>
                </CardContent>
              </Card>
            </div>
            <p className="text-sm text-gray-600 text-center mt-6">
              Success rates vary based on individual factors including age, health conditions, and lifestyle.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[#47145a] text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to explore IVF treatment?
          </h2>
          <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
            Schedule a consultation with Dr Vrushni Bhuta to discuss your fertility options and create a personalized treatment plan
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-[#eb9142] hover:bg-[#d67f35] text-white px-8">
              <Link href="/contact">
                <Phone className="w-5 h-5 mr-2" />
                Book a consultation
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-[#47145a] px-8">
              <Link href="/treatments">
                View all treatments
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
