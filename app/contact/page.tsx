import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import ContactForm from "@/components/ContactForm";

const PHONE_NUMBER = "416-371-0546";
const PHONE_HREF = "tel:+14163710546";
const EMAIL = "info@nexgenconstructionca.com";
const ADDRESS = "360 Pitfield Rd, Toronto, ON M1S 3E6";
const GOOGLE_MAPS_EMBED = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2882.8564!2d-79.2789!3d43.7789!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89d4d2e7c5e5e5e5%3A0x5e5e5e5e5e5e5e5e!2s360%20Pitfield%20Rd%2C%20Scarborough%2C%20ON%20M1S%203E6!5e0!3m2!1sen!2sca!4v1234567890123!5m2!1sen!2sca";

export const metadata: Metadata = {
  title: "Contact NexGen Construction | Free Quote | Waterloo Region Contractor | (519) 722-1595",
  description: "Get in touch with NexGen Construction for a free quote on your renovation or construction project. Serving Waterloo, Kitchener, Cambridge, and surrounding areas. Call (519) 722-1595 or fill out our contact form. Licensed, insured, and ready to help.",
  keywords: [
    "contact NexGen Construction",
    "free construction quote Waterloo",
    "renovation estimate Kitchener",
    "construction contractor contact",
    "request quote renovation",
    "construction consultation",
    "contractor near me Waterloo",
    "home renovation quote",
    "construction services contact",
    "licensed contractor Waterloo",
    "free estimate construction",
    "renovation consultation Ontario",
  ],
  openGraph: {
    title: "Contact NexGen Construction | Free Quote | (519) 722-1595",
    description: "Get a free quote for your construction or renovation project. Serving Waterloo Region with quality craftsmanship.",
    url: "https://nexgenconstruction.ca/contact",
    siteName: "NexGen Construction",
    images: [
      {
        url: "/images/hero/hero-contact.jpg",
        width: 1200,
        height: 630,
        alt: "Contact NexGen Construction - Get Your Free Quote Today",
      },
    ],
    locale: "en_CA",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact NexGen Construction | Free Quote",
    description: "Get a free quote for your construction or renovation project in Waterloo Region.",
    images: ["/images/hero/hero-contact.jpg"],
  },
  alternates: {
    canonical: "/contact",
  },
};

/** Contact page with form and location map */
export default function ContactPage() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[400px] sm:h-[500px] lg:h-[600px] overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/hero/hero-contact.jpg"
            alt="Contact NexGen Construction - Professional contractors ready to help"
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
                Get Your <span className="text-yellow-500">Free </span>Quote
              </h1>
              <p className="font-lato text-lg sm:text-xl text-gray-200 leading-relaxed mb-8">
                Ready to transform your space? Contact us today for a free, no-obligation consultation. We're here to answer your questions and bring your vision to life.
              </p>
              <div className="flex flex-wrap gap-4">
              <a
                href={PHONE_HREF}
                className="inline-flex items-center justify-center px-8 py-4 bg-orange-500 hover:bg-orange-600 text-white font-oswald font-bold text-base uppercase tracking-wide rounded-lg transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-500 focus-visible:ring-offset-2 focus-visible:ring-offset-gray-900 min-h-[48px]"
              >
                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>
                Call {PHONE_NUMBER}
              </a>
              <a
                href={`mailto:${EMAIL}`}
                className="inline-flex items-center justify-center px-8 py-4 bg-transparent border-2 border-white hover:bg-white hover:text-gray-900 text-white font-oswald font-bold text-base uppercase tracking-wide rounded-lg transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-gray-900 min-h-[48px]"
              >
                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                </svg>
                Email Us
              </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form & Info Section */}
      <section className="py-16 sm:py-20 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16">
            {/* Contact Form - 3 columns */}
            <div className="lg:col-span-3">
              <div className="mb-8">
                <h2 className="font-oswald font-bold text-3xl sm:text-4xl uppercase text-gray-800 mb-4">
                  Send Us a Message
                </h2>
                <p className="font-lato text-base sm:text-lg text-gray-600 leading-relaxed">
                  Fill out the form below with details about your project, and we'll get back to you within 24 hours with a free estimate.
                </p>
              </div>
              <ContactForm />
            </div>

            {/* Contact Info Sidebar - 2 columns */}
            <div className="lg:col-span-2">
              <div className="bg-gray-900 rounded-xl p-8 sm:p-10 sticky top-24">
                <h3 className="font-oswald font-bold text-white text-2xl sm:text-3xl uppercase mb-6">
                  Contact <span className="text-orange-500">Information</span>
                </h3>

                {/* Phone */}
                <div className="mb-6 pb-6 border-b border-gray-700">
                  <div className="flex items-start gap-3 mb-2">
                    <svg
                      className="h-6 w-6 text-orange-400 shrink-0 mt-0.5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                      />
                    </svg>
                    <div>
                      <p className="font-oswald text-sm uppercase text-gray-400 mb-1">Phone</p>
                      <a
                        href={PHONE_HREF}
                        className="font-lato text-xl text-white hover:text-orange-400 transition-colors"
                      >
                        {PHONE_NUMBER}
                      </a>
                    </div>
                  </div>
                </div>

                {/* Email */}
                <div className="mb-6 pb-6 border-b border-gray-700">
                  <div className="flex items-start gap-3 mb-2">
                    <svg
                      className="h-6 w-6 text-orange-400 shrink-0 mt-0.5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                    <div>
                      <p className="font-oswald text-sm uppercase text-gray-400 mb-1">Email</p>
                      <a
                        href={`mailto:${EMAIL}`}
                        className="font-lato text-base text-white hover:text-orange-400 transition-colors break-all"
                      >
                        {EMAIL}
                      </a>
                    </div>
                  </div>
                </div>

                {/* Address */}
                <div className="mb-6 pb-6 border-b border-gray-700">
                  <div className="flex items-start gap-3 mb-2">
                    <svg
                      className="h-6 w-6 text-orange-400 shrink-0 mt-0.5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
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
                    <div>
                      <p className="font-oswald text-sm uppercase text-gray-400 mb-1">Address</p>
                      <address className="font-lato text-base text-white not-italic">
                        {ADDRESS}
                      </address>
                    </div>
                  </div>
                </div>

                {/* Business Hours */}
                <div>
                  <div className="flex items-start gap-3">
                    <svg
                      className="h-6 w-6 text-orange-400 shrink-0 mt-0.5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                    <div>
                      <p className="font-oswald text-sm uppercase text-gray-400 mb-1">Business Hours</p>
                      <p className="font-lato text-base text-white">Monday – Saturday</p>
                      <p className="font-lato text-base text-white">7:00 AM – 6:00 PM</p>
                      <p className="font-lato text-sm text-gray-400 mt-1">Sunday: Closed</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Google Maps Section */}
      <section className="py-16 sm:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="text-center mb-10">
            <h2 className="font-oswald font-bold text-3xl sm:text-4xl uppercase text-gray-800 mb-4">
              Find Us on the Map
            </h2>
            <p className="font-lato text-base sm:text-lg text-gray-600 max-w-2xl mx-auto">
              Visit our location or use the map to get directions to our office.
            </p>
          </div>

          <div className="relative w-full h-96 sm:h-[500px] rounded-2xl overflow-hidden shadow-xl border border-gray-200">
            <iframe
              src={GOOGLE_MAPS_EMBED}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="NexGen Construction Location - 360 Pitfield Rd, Toronto, ON M1S 3E6"
              className="absolute inset-0"
            />
          </div>

          <div className="mt-8 text-center">
            <a
              href="https://maps.app.goo.gl/Nng5Gk7qRh5EZwkz5"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-8 py-4 bg-orange-500 hover:bg-orange-600 text-white font-oswald font-bold text-base uppercase tracking-wide rounded-lg transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-500 focus-visible:ring-offset-2 min-h-[48px]"
            >
              <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
              </svg>
              Get Directions
            </a>
          </div>
        </div>
      </section>

      {/* Service Areas Section */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-oswald font-bold text-3xl sm:text-4xl uppercase text-gray-800 mb-6 text-center">
              Service Areas
            </h2>
            <p className="font-lato text-base sm:text-lg text-gray-700 leading-relaxed text-center mb-8">
              We proudly serve the Greater Toronto Area and surrounding communities, including:
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
                <div key={city} className="bg-gray-50 rounded-lg p-4 border border-gray-200">
                  <p className="font-lato font-bold text-gray-800">{city}</p>
                </div>
              ))}
            </div>
            <p className="font-lato text-sm text-gray-600 text-center mt-6">
              Don't see your area? Contact us—we may still be able to help!
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 sm:py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-12">
          <h2 className="font-oswald font-bold text-3xl sm:text-4xl uppercase text-gray-800 mb-10 text-center">
            Frequently Asked Questions
          </h2>
          <div className="space-y-6">
            <article className="bg-white rounded-xl p-6 sm:p-8 shadow-sm">
              <h3 className="font-oswald font-bold text-xl uppercase text-gray-800 mb-3">
                How quickly can you provide a quote?
              </h3>
              <p className="font-lato text-gray-700 leading-relaxed">
                We typically respond to all inquiries within 24 hours. For urgent projects, feel free to call us directly at {PHONE_NUMBER} for immediate assistance.
              </p>
            </article>

            <article className="bg-white rounded-xl p-6 sm:p-8 shadow-sm">
              <h3 className="font-oswald font-bold text-xl uppercase text-gray-800 mb-3">
                Do you charge for estimates?
              </h3>
              <p className="font-lato text-gray-700 leading-relaxed">
                No, all our quotes and consultations are completely free with no obligation. We believe in transparent pricing and want you to make an informed decision.
              </p>
            </article>

            <article className="bg-white rounded-xl p-6 sm:p-8 shadow-sm">
              <h3 className="font-oswald font-bold text-xl uppercase text-gray-800 mb-3">
                What areas do you serve?
              </h3>
              <p className="font-lato text-gray-700 leading-relaxed">
                We serve the Greater Toronto Area and surrounding communities. If you're unsure whether we cover your area, please contact us and we'll let you know right away.
              </p>
            </article>

            <article className="bg-white rounded-xl p-6 sm:p-8 shadow-sm">
              <h3 className="font-oswald font-bold text-xl uppercase text-gray-800 mb-3">
                Are you licensed and insured?
              </h3>
              <p className="font-lato text-gray-700 leading-relaxed">
                Yes, we are fully licensed, insured, and WSIB compliant. Your peace of mind and protection are our top priorities on every project.
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 sm:py-20 lg:py-24 bg-linear-to-br from-orange-500 to-orange-600 text-white">
        <div className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-12 text-center">
          <h2 className="font-oswald font-bold text-3xl sm:text-4xl lg:text-5xl uppercase mb-6">
            Ready to Get Started?
          </h2>
          <p className="font-lato text-lg sm:text-xl leading-relaxed mb-8">
            Don't wait to transform your space. Contact us today and let's discuss how we can bring your vision to life with quality craftsmanship and professional service.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/services"
              className="inline-flex items-center justify-center px-8 py-4 bg-white text-orange-500 hover:bg-gray-100 font-oswald font-bold text-base uppercase tracking-wide rounded-lg transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-orange-500 min-h-[48px]"
            >
              View Our Services
            </Link>
            <Link
              href="/projects"
              className="inline-flex items-center justify-center px-8 py-4 bg-transparent border-2 border-white hover:bg-white hover:text-orange-500 text-white font-oswald font-bold text-base uppercase tracking-wide rounded-lg transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-orange-500 min-h-[48px]"
            >
              See Our Work
            </Link>
          </div>
        </div>
      </section>

      {/* Local Business Schema for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            name: "NexGen Construction",
            image: "https://nexgenconstruction.ca/images/logos/logo.png",
            "@id": "https://nexgenconstruction.ca",
            url: "https://nexgenconstruction.ca",
            telephone: "+1-416-371-0546",
            address: {
              "@type": "PostalAddress",
              streetAddress: "360 Pitfield Rd",
              addressLocality: "Toronto",
              addressRegion: "ON",
              postalCode: "M1S 3E6",
              addressCountry: "CA",
            },
            geo: {
              "@type": "GeoCoordinates",
              latitude: 43.7789,
              longitude: -79.2789,
            },
            openingHoursSpecification: [
              {
                "@type": "OpeningHoursSpecification",
                dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
                opens: "07:00",
                closes: "18:00",
              },
            ],
            sameAs: ["https://www.facebook.com/profile.php?id=61561801927181"],
          }),
        }}
      />
    </main>
  );
}