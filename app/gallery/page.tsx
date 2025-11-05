import { Card, CardContent } from '@/components/ui/card';
import Image from 'next/image';

export const metadata = {
  title: 'Clinic Gallery - Dr Vrushni\'s Women\'s Care & Fertility Clinic',
  description: 'View photos of our state-of-the-art fertility clinic, facilities, and happy families.',
};

export default function GalleryPage() {
  const galleryItems = [
    {
      title: 'Dr Vrushni Bhuta',
      category: 'Team',
      image: 'https://ext.same-assets.com/3773510777/4116934596.jpeg',
    },
    {
      title: 'Reception Area',
      category: 'Facilities',
      image: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=800&q=80',
    },
    {
      title: 'Consultation Room',
      category: 'Facilities',
      image: 'https://images.unsplash.com/photo-1631217868264-e5b90bb7e133?w=800&q=80',
    },
    {
      title: 'State-of-the-art Lab',
      category: 'Facilities',
      image: 'https://images.unsplash.com/photo-1582719471384-894fbb16e074?w=800&q=80',
    },
    {
      title: 'Ultrasound Room',
      category: 'Facilities',
      image: 'https://images.unsplash.com/photo-1579154341055-7f82d7f8a3ee?w=800&q=80',
    },
    {
      title: 'Waiting Area',
      category: 'Facilities',
      image: 'https://images.unsplash.com/photo-1512678080530-7760d81faba6?w=800&q=80',
    },
    {
      title: 'IVF Laboratory',
      category: 'Technology',
      image: 'https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?w=800&q=80',
    },
    {
      title: 'Advanced Equipment',
      category: 'Technology',
      image: 'https://images.unsplash.com/photo-1581594549595-35f6edc7b762?w=800&q=80',
    },
    {
      title: 'Happy Family',
      category: 'Success Stories',
      image: 'https://images.unsplash.com/photo-1511895426328-dc8714191300?w=800&q=80',
    },
    {
      title: 'New Parents',
      category: 'Success Stories',
      image: 'https://images.unsplash.com/photo-1476703993599-0035a21b17a9?w=800&q=80',
    },
    {
      title: 'Baby Announcement',
      category: 'Success Stories',
      image: 'https://images.unsplash.com/photo-1515488042361-ee00e0ddd4e4?w=800&q=80',
    },
    {
      title: 'Family Joy',
      category: 'Success Stories',
      image: 'https://images.unsplash.com/photo-1467452572984-711bdf4f8f17?w=800&q=80',
    },
  ];

  const categories = ['All', 'Team', 'Facilities', 'Technology', 'Success Stories'];

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[#47145a] to-[#5a1b71] text-white py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <span className="text-[#eb9142] font-bold text-sm tracking-wider uppercase">GALLERY</span>
            <h1 className="text-4xl md:text-5xl font-extrabold mt-4 mb-6">
              Our Clinic & Success Stories
            </h1>
            <p className="text-xl text-gray-200">
              Explore our state-of-the-art facilities and celebrate the joy of families we've helped create
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
                    ? 'bg-[#eb9142] text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-[#eb9142]/10 hover:text-[#eb9142]'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {galleryItems.map((item, index) => (
              <Card key={index} className="border-2 border-gray-100 hover:border-[#eb9142] transition-all hover:shadow-xl group overflow-hidden">
                <CardContent className="p-0">
                  <div className="relative aspect-square overflow-hidden">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                      <div className="absolute bottom-0 left-0 right-0 p-4">
                        <span className="inline-block px-2 py-1 text-xs font-semibold text-white bg-[#eb9142] rounded mb-2">
                          {item.category}
                        </span>
                        <h3 className="text-white font-semibold">{item.title}</h3>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Video Section */}
      <section className="py-20 bg-gradient-to-b from-white to-[#fbf7f6]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#47145a] mb-4">
              Virtual Tour
            </h2>
            <p className="text-lg text-gray-600">
              Take a virtual tour of our clinic and see our state-of-the-art facilities
            </p>
          </div>
          <div className="max-w-4xl mx-auto">
            <div className="aspect-video bg-gradient-to-br from-[#47145a] to-[#5a1b71] rounded-2xl shadow-2xl flex items-center justify-center">
              <div className="text-center text-white">
                <svg className="w-20 h-20 mx-auto mb-4 opacity-50" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" />
                </svg>
                <p className="text-gray-300">Virtual tour video coming soon</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-[#47145a] mb-6">
            Experience our clinic in person
          </h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Schedule a visit to tour our facilities and meet with Dr Vrushni Bhuta
          </p>
          <a
            href="/contact"
            className="inline-flex items-center justify-center px-8 py-3 text-base font-medium rounded-md text-white bg-[#eb9142] hover:bg-[#d67f35] transition-colors"
          >
            Book a consultation
          </a>
        </div>
      </section>
    </div>
  );
}
