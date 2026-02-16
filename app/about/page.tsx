import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About NexGen Construction | Local Waterloo Region Contractor | Our Story & Values",
  description: "Meet the team behind NexGen Construction. A locally-owned construction company serving Waterloo Region with integrity, quality craftsmanship, and personalized service. Licensed, insured, and committed to excellence since day one.",
  keywords: [
    "about NexGen Construction",
    "local contractor Waterloo",
    "construction company Waterloo Region",
    "licensed contractor Ontario",
    "family owned construction business",
    "renovation contractor near me",
    "trusted builder Waterloo",
    "construction company history",
    "meet the contractor",
    "local construction services",
    "Waterloo Region builder",
    "residential contractor Ontario",
  ],
  openGraph: {
    title: "About NexGen Construction | Local Waterloo Region Contractor",
    description: "Meet the team behind NexGen Construction. Locally-owned, licensed, and committed to quality craftsmanship.",
    url: "https://nexgenconstruction.ca/about",
    siteName: "NexGen Construction",
    images: [
      {
        url: "/images/hero/hero-about.jpeg",
        width: 1200,
        height: 630,
        alt: "About NexGen Construction - Local Construction Contractor Team",
      },
    ],
    locale: "en_CA",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "About NexGen Construction | Local Waterloo Region Contractor",
    description: "Meet the team behind NexGen Construction. Locally-owned, licensed, and committed to quality.",
    images: ["/images/hero/hero-about.jpeg"],
  },
  alternates: {
    canonical: "/about",
  },
};

/** About page showcasing company values, owner, and commitment to quality */
export default function AboutPage() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[400px] sm:h-[500px] lg:h-[600px] overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/hero/hero-about.jpeg"
            alt="About NexGen Construction - Experienced construction professionals at work"
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
              About <span className="text-orange-500">NexGen </span>Construction
            </h1>
            <p className="font-lato text-lg sm:text-xl text-gray-200 leading-relaxed">
              Building dreams, one project at a time. We're a locally-owned construction company dedicated to delivering exceptional craftsmanship and personalized service throughout Waterloo Region.
            </p>
            </div>
          </div>
        </div>
      </section>



      {/* Company Values */}
      <section className="py-16 sm:py-20 lg:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="font-oswald font-bold text-3xl sm:text-4xl lg:text-5xl uppercase text-gray-800 mb-4">
              Our Core Values
            </h2>
            <p className="font-lato text-base sm:text-lg text-gray-600 max-w-2xl mx-auto">
              These principles guide every decision we make and every project we undertake.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Value 1: Quality */}
            <article className="bg-white rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-14 h-14 bg-orange-100 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-7 h-7 text-orange-500" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                  <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="font-oswald font-bold text-xl uppercase text-gray-800 mb-3">
                Uncompromising Quality
              </h3>
              <p className="font-lato text-gray-600 leading-relaxed">
                We never cut corners. Every project receives the same meticulous attention to detail, premium materials, and expert craftsmanship that we'd demand for our own homes.
              </p>
            </article>

            {/* Value 2: Integrity */}
            <article className="bg-white rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-14 h-14 bg-orange-100 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-7 h-7 text-orange-500" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                  <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="font-oswald font-bold text-xl uppercase text-gray-800 mb-3">
                Honest & Transparent
              </h3>
              <p className="font-lato text-gray-600 leading-relaxed">
                Clear communication, upfront pricing, and honest timelines. We believe in building trust through transparency and keeping our promises every step of the way.
              </p>
            </article>

            {/* Value 3: Local Focus */}
            <article className="bg-white rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-14 h-14 bg-orange-100 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-7 h-7 text-orange-500" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                  <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="font-oswald font-bold text-xl uppercase text-gray-800 mb-3">
                Community Focused
              </h3>
              <p className="font-lato text-gray-600 leading-relaxed">
                As a local business, we're invested in our community. We support local suppliers, employ local trades, and take pride in improving homes in our neighborhood.
              </p>
            </article>

            {/* Value 4: Reliability */}
            <article className="bg-white rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-14 h-14 bg-orange-100 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-7 h-7 text-orange-500" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="font-oswald font-bold text-xl uppercase text-gray-800 mb-3">
                Dependable Service
              </h3>
              <p className="font-lato text-gray-600 leading-relaxed">
                We show up on time, complete projects as scheduled, and stand behind our work. Your time is valuable, and we respect that with reliable, professional service.
              </p>
            </article>

            {/* Value 5: Customer First */}
            <article className="bg-white rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-14 h-14 bg-orange-100 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-7 h-7 text-orange-500" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                  <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z" />
                </svg>
              </div>
              <h3 className="font-oswald font-bold text-xl uppercase text-gray-800 mb-3">
                Client Satisfaction
              </h3>
              <p className="font-lato text-gray-600 leading-relaxed">
                Your vision drives our work. We listen carefully, offer expert guidance, and work tirelessly to exceed your expectations on every project, big or small.
              </p>
            </article>

            {/* Value 6: Safety */}
            <article className="bg-white rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-14 h-14 bg-orange-100 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-7 h-7 text-orange-500" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                  <path d="M10 3.5a1.5 1.5 0 013 0V4a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-.5a1.5 1.5 0 000 3h.5a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-.5a1.5 1.5 0 00-3 0v.5a1 1 0 01-1 1H6a1 1 0 01-1-1v-3a1 1 0 00-1-1h-.5a1.5 1.5 0 010-3H4a1 1 0 001-1V6a1 1 0 011-1h3a1 1 0 001-1v-.5z" />
                </svg>
              </div>
              <h3 className="font-oswald font-bold text-xl uppercase text-gray-800 mb-3">
                Safety First
              </h3>
              <p className="font-lato text-gray-600 leading-relaxed">
                WSIB compliant and fully insured. We maintain the highest safety standards to protect our team, your property, and your family throughout every project.
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 sm:py-20 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Image */}
            <div className="relative h-96 lg:h-[500px] rounded-2xl overflow-hidden shadow-xl">
              <Image
                src="/images/misc/workers-1.jpg"
                alt="NexGen Construction team working on a residential project"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>

            {/* Content */}
            <div>
              <h2 className="font-oswald font-bold text-3xl sm:text-4xl uppercase text-gray-800 mb-6">
                Why Homeowners Choose NexGen Construction
              </h2>
              <div className="space-y-6 font-lato text-base sm:text-lg text-gray-700 leading-relaxed">
                <p>
                  When you hire NexGen Construction, you're not just getting a contractor—you're gaining a dedicated partner committed to bringing your vision to life. We understand that your home is your most valuable investment, and we treat it with the respect and care it deserves.
                </p>
                <p>
                  Our approach is simple: listen first, plan carefully, execute flawlessly. We take the time to understand your goals, budget, and timeline, then create a detailed plan that ensures smooth execution from start to finish. Throughout the project, we maintain open communication, keeping you informed every step of the way.
                </p>
                <p>
                  What sets us apart is our commitment to going the extra mile. Whether it's sourcing the perfect materials, solving unexpected challenges with creative solutions, or ensuring every detail meets our exacting standards, we're dedicated to delivering results that exceed your expectations.
                </p>
                <p>
                  We're licensed, insured, and WSIB compliant, giving you complete peace of mind. Our work is backed by comprehensive warranties, and we stand behind every project long after completion. When you choose NexGen Construction, you're choosing quality, reliability, and a team that genuinely cares about your satisfaction.
                </p>
              </div>

              <div className="mt-8 flex flex-wrap gap-4">
                <Link
                  href="/services"
                  className="inline-flex items-center justify-center px-8 py-4 bg-orange-500 hover:bg-orange-600 text-white font-oswald font-bold text-base uppercase tracking-wide rounded-lg transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-500 focus-visible:ring-offset-2 min-h-[48px]"
                >
                  View Our Services
                </Link>
                <Link
                  href="/projects"
                  className="inline-flex items-center justify-center px-8 py-4 bg-transparent border-2 border-gray-800 hover:bg-gray-800 hover:text-white text-gray-800 font-oswald font-bold text-base uppercase tracking-wide rounded-lg transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-gray-800 focus-visible:ring-offset-2 min-h-[48px]"
                >
                  See Our Work
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section className="py-16 sm:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="text-center mb-12">
            <h2 className="font-oswald font-bold text-3xl sm:text-4xl uppercase text-gray-800 mb-4">
              Licensed, Insured & Certified
            </h2>
            <p className="font-lato text-base sm:text-lg text-gray-600 max-w-2xl mx-auto">
              Your peace of mind is our priority. We maintain all necessary certifications and insurance to protect you and your investment.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="bg-white rounded-xl p-8 flex flex-col items-center justify-center shadow-sm">
              <div className="relative w-32 h-32 mb-4">
                <Image
                  src="/images/logos/wsib.png"
                  alt="WSIB - Workplace Safety and Insurance Board certified"
                  fill
                  className="object-contain"
                  sizes="128px"
                />
              </div>
              <p className="font-oswald text-sm uppercase text-gray-600 text-center">WSIB Compliant</p>
            </div>

            <div className="bg-white rounded-xl p-8 flex flex-col items-center justify-center shadow-sm">
              <div className="relative w-32 h-32 mb-4">
                <Image
                  src="/images/logos/ihsa-black.png"
                  alt="IHSA - Infrastructure Health & Safety Association member"
                  fill
                  className="object-contain"
                  sizes="128px"
                />
              </div>
              <p className="font-oswald text-sm uppercase text-gray-600 text-center">IHSA Member</p>
            </div>

            <div className="bg-white rounded-xl p-8 flex flex-col items-center justify-center shadow-sm">
              <div className="relative w-32 h-32 mb-4">
                <Image
                  src="/images/logos/tig.png"
                  alt="Total Insurance Group - Fully insured contractor"
                  fill
                  className="object-contain"
                  sizes="128px"
                />
              </div>
              <p className="font-oswald text-sm uppercase text-gray-600 text-center">Fully Insured</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 sm:py-20 lg:py-24 bg-linear-to-br from-orange-500 to-orange-600 text-white">
        <div className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-12 text-center">
          <h2 className="font-oswald font-bold text-3xl sm:text-4xl lg:text-5xl uppercase mb-6">
            Ready to Work Together?
          </h2>
          <p className="font-lato text-lg sm:text-xl leading-relaxed mb-8">
            Let's discuss your project and how we can help bring your vision to life. Contact us today for a free, no-obligation consultation.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/#contact"
              className="inline-flex items-center justify-center px-8 py-4 bg-white text-orange-500 hover:bg-gray-100 font-oswald font-bold text-base uppercase tracking-wide rounded-lg transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-orange-500 min-h-[48px]"
            >
              Get a Free Quote
            </Link>
            <a
              href="tel:+15197221595"
              className="inline-flex items-center justify-center px-8 py-4 bg-transparent border-2 border-white hover:bg-white hover:text-orange-500 text-white font-oswald font-bold text-base uppercase tracking-wide rounded-lg transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-orange-500 min-h-[48px]"
            >
              <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
              </svg>
              (519) 722-1595
            </a>
          </div>
        </div>
      </section>

      {/* Organization Schema for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            name: "NexGen Construction",
            url: "https://nexgenconstruction.ca",
            logo: "https://nexgenconstruction.ca/images/logos/logo.png",
            description: "Locally-owned construction company serving Waterloo Region with quality craftsmanship and personalized service.",
            address: {
              "@type": "PostalAddress",
              addressLocality: "Waterloo",
              addressRegion: "ON",
              addressCountry: "CA",
            },
            telephone: "+1-519-722-1595",
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
            sameAs: [
              "https://www.facebook.com/profile.php?id=61561801927181",
            ],
          }),
        }}
      />
    </main>
  );
}
