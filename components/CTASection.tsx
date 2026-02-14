"use client";

import ContactForm from "@/components/ContactForm";

const PHONE_NUMBER = "416-371-0546";
const PHONE_HREF = "tel:+14163710546";

/** Contact form section with phone CTA */
export default function CTASection() {
  return (
    <section id="contact" className="py-20 sm:py-24 bg-white scroll-mt-20" aria-labelledby="contact-heading">
      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
        {/* Section header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <h2
            id="contact-heading"
            className="font-oswald font-bold text-gray-800 text-3xl sm:text-4xl lg:text-5xl uppercase mb-4"
          >
            Get Your <span className="text-orange-500">Free Quote</span>
          </h2>
          <p className="font-lato text-gray-600 text-base sm:text-lg leading-relaxed">
            Ready to start your project? Fill out the form below or give us a call. We'll get back
            to you within 24 hours.
          </p>
        </div>

        {/* Two-column layout: form + contact info */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16">
          {/* Contact form - takes 3 columns */}
          <div className="lg:col-span-3">
            <ContactForm />
          </div>

          {/* Contact info sidebar - takes 2 columns */}
          <div className="lg:col-span-2 flex flex-col justify-center">
            <div className="bg-gray-900 rounded-xl p-8 sm:p-10 text-center lg:text-left">
              <h3 className="font-oswald font-bold text-white text-2xl sm:text-3xl uppercase mb-3">
                Prefer to <span className="text-yellow-500">Talk?</span>
              </h3>
              <p className="font-lato text-gray-400 text-base leading-relaxed mb-8">
                Give us a call and speak directly with our team. We're happy to discuss your project
                and provide a free estimate over the phone.
              </p>

              {/* Phone CTA */}
              <a
                href={PHONE_HREF}
                className="inline-flex items-center gap-3 font-oswald font-bold text-2xl sm:text-3xl text-orange-400 hover:text-orange-300 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-500 focus-visible:ring-offset-2 focus-visible:ring-offset-gray-900 rounded min-h-[44px] mb-8"
                aria-label={`Call us at ${PHONE_NUMBER}`}
              >
                <svg
                  className="h-8 w-8 shrink-0"
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
                {PHONE_NUMBER}
              </a>

              {/* Additional info */}
              <div className="space-y-4 border-t border-gray-700 pt-8">
                <div className="flex items-start gap-3 lg:justify-start justify-center">
                  <svg
                    className="h-5 w-5 text-orange-400 shrink-0 mt-0.5"
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
                  <a
                    href="mailto:info@nexgenconstructionca.com"
                    className="font-lato text-gray-300 hover:text-orange-400 text-sm transition-colors"
                  >
                    info@nexgenconstructionca.com
                  </a>
                </div>
                <div className="flex items-start gap-3 lg:justify-start justify-center">
                  <svg
                    className="h-5 w-5 text-orange-400 shrink-0 mt-0.5"
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
                  <span className="font-lato text-gray-300 text-sm">
                    Greater Toronto Area & Surrounding Communities
                  </span>
                </div>
                <div className="flex items-start gap-3 lg:justify-start justify-center">
                  <svg
                    className="h-5 w-5 text-orange-400 shrink-0 mt-0.5"
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
                  <span className="font-lato text-gray-300 text-sm">
                    Mon – Sat: 7:00 AM – 6:00 PM
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
