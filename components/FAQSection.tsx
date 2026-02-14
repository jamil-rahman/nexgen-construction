/** SEO-optimized FAQ section with structured data */
export default function FAQSection() {
  const faqs = [
    {
      question: "What areas does NexGen Construction serve in the Greater Toronto Area?",
      answer:
        "We proudly serve Toronto, Scarborough, North York, Etobicoke, Mississauga, Brampton, Markham, Richmond Hill, Vaughan, Pickering, Ajax, Whitby, and surrounding communities throughout the GTA. If you're located outside these areas, contact us to discuss your project—we may still be able to help.",
    },
    {
      question: "Is NexGen Construction licensed and insured?",
      answer:
        "Yes, we are fully licensed, insured, and WSIB-compliant. We maintain comprehensive liability insurance and workers' compensation coverage, ensuring complete protection for you, your property, and our team throughout every project. All work is performed to Ontario Building Code standards with proper permits and inspections.",
    },
    {
      question: "How long does a typical kitchen or bathroom renovation take?",
      answer:
        "Kitchen renovations typically take 4-8 weeks depending on scope and complexity. Bathroom remodels usually require 2-4 weeks. Basement finishing projects take 3-6 weeks on average. Timeline varies based on project size, custom work, material availability, and permit requirements. We provide detailed schedules during your free consultation.",
    },
    {
      question: "Do you provide free quotes and consultations?",
      answer:
        "Absolutely! We offer free, no-obligation quotes for all construction and renovation projects. Our team will visit your property, assess the scope of work, discuss your vision and budget, and provide a detailed written estimate. Contact us at (416) 371-0546 or fill out our online form to schedule your free consultation.",
    },
    {
      question: "What types of construction services does NexGen Construction offer?",
      answer:
        "We specialize in residential construction and renovation services including kitchen renovations, bathroom remodeling, basement finishing, full home renovations, flooring and tile installation, deck building, exterior siding, painting, and general contracting. Whether you need a single-room update or a complete home transformation, we have the expertise to deliver exceptional results.",
    },
    {
      question: "How do you handle permits and building code compliance?",
      answer:
        "We manage all necessary permits and ensure full compliance with Ontario Building Code regulations. Our team coordinates inspections, handles municipal paperwork, and maintains proper documentation throughout your project. This protects your investment and ensures all work meets legal requirements for safety and quality.",
    },
    {
      question: "What sets NexGen Construction apart from other contractors?",
      answer:
        "We're a locally-owned company with 20+ years of experience, combining professional craftsmanship with personalized service. We're fully licensed, insured, and WSIB-compliant. Every project includes clear communication, transparent pricing, quality materials, expert trades, and our commitment to exceeding expectations. We treat your home with the same care and respect we'd give our own.",
    },
    {
      question: "What is your payment structure for construction projects?",
      answer:
        "We offer flexible payment plans tailored to each project. Typically, we require a deposit to secure materials and schedule, with progress payments tied to project milestones. Final payment is due upon completion and your satisfaction. We provide detailed contracts outlining all costs, timelines, and payment terms before work begins. No hidden fees, no surprises.",
    },
  ];

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  return (
    <section className="py-20 sm:py-24 bg-gray-50" aria-labelledby="faq-heading">
      <div className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="text-center mb-12">
          <h2
            id="faq-heading"
            className="font-oswald font-bold text-3xl sm:text-4xl lg:text-5xl uppercase text-gray-800 mb-4"
          >
            Frequently Asked <span className="text-orange-500">Questions</span>
          </h2>
          <p className="font-lato text-base sm:text-lg text-gray-600 leading-relaxed">
            Get answers to common questions about our construction services, process, and what to expect when working with NexGen Construction.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <details
              key={index}
              className="group bg-white rounded-xl border border-gray-200 overflow-hidden shadow-sm hover:shadow-md transition-shadow"
            >
              <summary className="flex items-center justify-between cursor-pointer p-6 font-oswald font-bold text-lg text-gray-800 uppercase list-none">
                <span className="pr-8">{faq.question}</span>
                <svg
                  className="w-5 h-5 text-orange-500 shrink-0 transition-transform group-open:rotate-180"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-6 pb-6 pt-2">
                <p className="font-lato text-gray-700 text-base leading-relaxed">{faq.answer}</p>
              </div>
            </details>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="font-lato text-gray-600 text-base mb-4">
            Have more questions? We're here to help!
          </p>
          <a
            href="/contact"
            className="inline-flex items-center justify-center px-8 py-4 bg-orange-500 hover:bg-orange-600 text-white font-oswald font-bold text-base uppercase tracking-wide rounded-lg transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-500 focus-visible:ring-offset-2 min-h-[48px]"
          >
            Contact Us Today
          </a>
        </div>
      </div>

      {/* FAQ Schema for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
    </section>
  );
}
