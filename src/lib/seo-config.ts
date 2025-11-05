export const siteConfig = {
  name: "Dr. Vrushni Bhuta - IVF & Fertility Clinic Mumbai",
  description:
    "Leading IVF and fertility clinic in Mumbai, India. Dr. Vrushni Bhuta offers personalized fertility treatments including IVF, IUI, ICSI, egg freezing, and comprehensive women's care with 85% success rate.",
  url: "https://drvrushni.com",
  ogImage: "/images/doctor-purple-suit.jpg",
  location: {
    city: "Mumbai",
    state: "Maharashtra",
    country: "India",
    areas: ["Powai", "Santacruz West", "Khar West"],
  },
  contact: {
    phone: "+91-XXXXXXXXXX",
    email: "info@drvrushni.com",
  },
  social: {
    twitter: "@drvrushni",
    facebook: "drvrushni",
    instagram: "drvrushni",
  },
}

export const jsonLdOrganization = {
  "@context": "https://schema.org",
  "@type": "MedicalBusiness",
  "@id": `${siteConfig.url}/#organization`,
  name: siteConfig.name,
  url: siteConfig.url,
  logo: `${siteConfig.url}/images/logo-full.jpg`,
  image: `${siteConfig.url}${siteConfig.ogImage}`,
  description: siteConfig.description,
  address: {
    "@type": "PostalAddress",
    addressLocality: siteConfig.location.city,
    addressRegion: siteConfig.location.state,
    addressCountry: siteConfig.location.country,
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: "19.0760",
    longitude: "72.8777",
  },
  telephone: siteConfig.contact.phone,
  email: siteConfig.contact.email,
  priceRange: "₹₹₹",
  medicalSpecialty: ["Fertility Medicine", "Reproductive Endocrinology", "Gynecology", "Obstetrics"],
  areaServed: {
    "@type": "City",
    name: "Mumbai",
    containedIn: {
      "@type": "State",
      name: "Maharashtra",
      containedIn: {
        "@type": "Country",
        name: "India",
      },
    },
  },
}

export const jsonLdPhysician = {
  "@context": "https://schema.org",
  "@type": "Physician",
  name: "Dr. Vrushni Bhuta",
  honorificPrefix: "Dr.",
  givenName: "Vrushni",
  familyName: "Bhuta",
  gender: "Female",
  jobTitle: "Fertility Specialist & Gynecologist",
  description:
    "Board-certified fertility specialist with over 10 years of experience in assisted reproductive techniques, IVF, IUI, ICSI, and comprehensive women's healthcare in Mumbai, India.",
  image: `${siteConfig.url}/images/doctor-purple-suit.jpg`,
  url: `${siteConfig.url}/about`,
  worksFor: {
    "@id": `${siteConfig.url}/#organization`,
  },
  alumniOf: [
    {
      "@type": "EducationalOrganization",
      name: "Homerton University Hospital, London",
    },
    {
      "@type": "EducationalOrganization",
      name: "Armed Forces Medical College",
    },
  ],
  medicalSpecialty: [
    "Fertility Medicine",
    "Reproductive Endocrinology",
    "In Vitro Fertilization (IVF)",
    "Intrauterine Insemination (IUI)",
    "Gynecology",
  ],
  knowsAbout: [
    "IVF Treatment",
    "IUI Procedure",
    "ICSI",
    "Egg Freezing",
    "Embryo Transfer",
    "Fertility Preservation",
    "Reproductive Medicine",
    "Women's Health",
  ],
}
