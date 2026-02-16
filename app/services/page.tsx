import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import ServiceDetail from "@/components/ServiceDetail";
import services from "@/data/services.json";

export const metadata: Metadata = {
  title: "Professional Construction Services in Waterloo Region | Kitchen, Bathroom, Basement Renovations | NexGen Construction",
  description: "Expert residential construction services in Waterloo, Kitchener, Cambridge, and surrounding areas. Specializing in kitchen renovations, bathroom remodeling, basement finishing, flooring installation, and full home renovations. Licensed, insured, and WSIB compliant. Free quotes available.",
  keywords: [
    "construction services Waterloo",
    "kitchen renovation Kitchener",
    "bathroom remodeling Cambridge",
    "basement finishing Waterloo Region",
    "home renovation contractor",
    "flooring installation Ontario",
    "general contractor Waterloo",
    "residential construction services",
    "custom kitchen cabinets",
    "bathroom renovation contractor",
    "basement contractor near me",
    "home improvement services",
    "licensed contractor Waterloo",
    "WSIB contractor",
    "insured renovation contractor",
  ],
  openGraph: {
    title: "Professional Construction Services | NexGen Construction",
    description: "Expert kitchen, bathroom, basement renovations and more in Waterloo Region. Licensed, insured, and committed to quality.",
    url: "https://nexgenconstruction.ca/services",
    siteName: "NexGen Construction",
    images: [
      {
        url: "/images/hero/hero-services.jpg",
        width: 1200,
        height: 630,
        alt: "NexGen Construction Services - Professional Contractors",
      },
    ],
    locale: "en_CA",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Professional Construction Services | NexGen Construction",
    description: "Expert kitchen, bathroom, basement renovations and more in Waterloo Region.",
    images: ["/images/hero/hero-services.jpg"],
  },
  alternates: {
    canonical: "/services",
  },
};

/** Services page with comprehensive service details and SEO optimization */
export default function ServicesPage() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[400px] sm:h-[500px] lg:h-[600px] overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/hero/hero-services.jpg"
            alt="NexGen Construction professional services - Expert contractors at work"
            fill
            priority
            className="object-cover"
            sizes="100vw"
          />
        </div>
        
        {/* Overlay for better text contrast */}
        <div className="absolute inset-0 bg-linear-to-r from-black/70 via-black/50 to-black/30 z-10" aria-hidden="true" />
        
        {/* Content */}
        <div className="relative z-20 h-full flex items-center">
          <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 w-full">
            <div className="max-w-3xl">
            <h1 className="font-oswald font-bold text-4xl sm:text-5xl lg:text-6xl uppercase mb-6 leading-tight text-white">
              Professional Construction Services
            </h1>
            <p className="font-lato text-lg sm:text-xl text-gray-200 leading-relaxed mb-8">
              Expert residential construction and renovation services throughout Waterloo Region. From kitchen and bathroom remodels to complete home transformations, we deliver quality craftsmanship backed by years of experience.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/#contact"
                className="inline-flex items-center justify-center px-8 py-4 bg-orange-500 hover:bg-orange-600 text-white font-oswald font-bold text-base uppercase tracking-wide rounded-lg transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-500 focus-visible:ring-offset-2 focus-visible:ring-offset-gray-900 min-h-[48px]"
              >
                Get a Free Quote
              </Link>
              <a
                href="tel:+15197221595"
                className="inline-flex items-center justify-center px-8 py-4 bg-transparent border-2 border-white hover:bg-white hover:text-gray-900 text-white font-oswald font-bold text-base uppercase tracking-wide rounded-lg transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-gray-900 min-h-[48px]"
              >
                Call (519) 722-1595
              </a>
            </div>
            </div>
          </div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="font-oswald font-bold text-3xl sm:text-4xl uppercase text-gray-800 mb-6">
              Why Choose NexGen Construction?
            </h2>
            <p className="font-lato text-base sm:text-lg text-gray-700 leading-relaxed mb-8">
              As a locally-owned and operated construction company serving Waterloo, Kitchener, Cambridge, and surrounding communities, we pride ourselves on delivering exceptional results for every project. Our team of skilled professionals brings decades of combined experience to your home renovation or construction project.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8">
              <div className="bg-white rounded-lg p-6 shadow-sm">
                <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <svg className="w-6 h-6 text-orange-500" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                    <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                </div>
                <h3 className="font-oswald font-bold text-lg uppercase text-gray-800 mb-2">Licensed & Insured</h3>
                <p className="font-lato text-sm text-gray-600">WSIB compliant and fully insured for your peace of mind</p>
              </div>
              <div className="bg-white rounded-lg p-6 shadow-sm">
                <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <svg className="w-6 h-6 text-orange-500" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                    <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z" />
                  </svg>
                </div>
                <h3 className="font-oswald font-bold text-lg uppercase text-gray-800 mb-2">Local Experts</h3>
                <p className="font-lato text-sm text-gray-600">Proudly serving the Waterloo Region community</p>
              </div>
              <div className="bg-white rounded-lg p-6 shadow-sm">
                <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <svg className="w-6 h-6 text-orange-500" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                    <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd" />
                  </svg>
                </div>
                <h3 className="font-oswald font-bold text-lg uppercase text-gray-800 mb-2">Quality Guaranteed</h3>
                <p className="font-lato text-sm text-gray-600">Premium materials and expert craftsmanship on every project</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-12 sm:py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="font-oswald font-bold text-3xl sm:text-4xl lg:text-5xl uppercase text-gray-800 mb-4">
              Our Services
            </h2>
            <p className="font-lato text-base sm:text-lg text-gray-600 max-w-2xl mx-auto">
              Comprehensive construction and renovation services tailored to your needs. Click any service below to learn more about what we offer.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 lg:gap-10">
            {services.map((service) => (
              <ServiceDetail key={service.id} service={service} />
            ))}
          </div>
        </div>
      </section>

      {/* Service Areas Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-oswald font-bold text-3xl sm:text-4xl uppercase text-gray-800 mb-6 text-center">
              Areas We Serve
            </h2>
            <p className="font-lato text-base sm:text-lg text-gray-700 leading-relaxed text-center mb-8">
              NexGen Construction proudly provides professional construction and renovation services throughout Waterloo Region and surrounding areas, including:
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 text-center">
              {[
                "Toronto",
                "Scarborough",
                "North York",
                "Etobicoke",
                "Markham",
                "Richmond Hill",
                "Vaughan",
                "Mississauga",
                "Brampton",
                "Pickering",
                "Ajax",
                "Whitby",
              ].map((city) => (
                <div key={city} className="bg-white rounded-lg p-4 shadow-sm">
                  <p className="font-lato font-bold text-gray-800">{city}</p>
                </div>
              ))}
            </div>
            <p className="font-lato text-sm text-yellow-700 text-center mt-6">
              Don't see your area listed? Contact us to discuss your project location.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-linear-to-br from-orange-500 to-orange-600 text-white">
        <div className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-12 text-center">
          <h2 className="font-oswald font-bold text-3xl sm:text-4xl lg:text-5xl uppercase mb-6">
            Ready to Start Your Project?
          </h2>
          <p className="font-lato text-lg sm:text-xl leading-relaxed mb-8">
            Get a free, no-obligation quote for your construction or renovation project. Our team is ready to bring your vision to life with quality craftsmanship and professional service.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/#contact"
              className="inline-flex items-center justify-center px-8 py-4 bg-white text-orange-500 hover:bg-gray-100 font-oswald font-bold text-base uppercase tracking-wide rounded-lg transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-orange-500 min-h-[48px]"
            >
              Request a Free Quote
            </Link>
            <a
              href="tel:+15197221595"
              className="inline-flex items-center justify-center px-8 py-4 bg-transparent border-2 border-white hover:bg-white hover:text-orange-500 text-white font-oswald font-bold text-base uppercase tracking-wide rounded-lg transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-orange-500 min-h-[48px]"
            >
              <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
              </svg>
              Call Now
            </a>
          </div>
        </div>
      </section>

      {/* FAQ Schema for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: [
              {
                "@type": "Question",
                name: "What areas does NexGen Construction serve?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "We serve Waterloo, Kitchener, Cambridge, Guelph, and surrounding communities throughout Waterloo Region and beyond.",
                },
              },
              {
                "@type": "Question",
                name: "Is NexGen Construction licensed and insured?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Yes, we are fully licensed, insured, and WSIB compliant for your protection and peace of mind.",
                },
              },
              {
                "@type": "Question",
                name: "Do you offer free quotes?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Yes, we provide free, no-obligation quotes for all construction and renovation projects.",
                },
              },
            ],
          }),
        }}
      />

      {/* Service Schema for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            serviceType: "Construction and Renovation Services",
            provider: {
              "@type": "LocalBusiness",
              name: "NexGen Construction",
              telephone: "+1-519-722-1595",
              address: {
                "@type": "PostalAddress",
                addressLocality: "Waterloo",
                addressRegion: "ON",
                addressCountry: "CA",
              },
            },
            areaServed: [
              {
                "@type": "City",
                name: "Waterloo",
              },
              {
                "@type": "City",
                name: "Kitchener",
              },
              {
                "@type": "City",
                name: "Cambridge",
              },
            ],
            hasOfferCatalog: {
              "@type": "OfferCatalog",
              name: "Construction Services",
              itemListElement: services.map((service) => ({
                "@type": "Offer",
                itemOffered: {
                  "@type": "Service",
                  name: service.title,
                  description: service.description,
                },
              })),
            },
          }),
        }}
      />
    </main>
  );
}
