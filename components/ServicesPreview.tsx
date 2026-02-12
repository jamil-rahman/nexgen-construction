import { Service } from "@/types";
import servicesData from "@/data/services.json";

const ICON_MAP: Record<string, React.ReactNode> = {
  kitchen: (
    <svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 10h18M3 6h18M3 6v14a1 1 0 001 1h16a1 1 0 001-1V6M8 6V4a2 2 0 012-2h4a2 2 0 012 2v2M10 14h4M12 14v4" />
    </svg>
  ),
  basement: (
    <svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 21h18M3 17h18M5 17V7l7-4 7 4v10M9 17v-4h6v4M12 7v2" />
    </svg>
  ),
  bathroom: (
    <svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 12h18v4a4 4 0 01-4 4H7a4 4 0 01-4-4v-4zM5 12V6a3 3 0 016 0M17 20v2M7 20v2M12 12v-2M9 12v-1M15 12v-1" />
    </svg>
  ),
  home: (
    <svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 12l9-8 9 8M5 10v10a1 1 0 001 1h3v-5a1 1 0 011-1h4a1 1 0 011 1v5h3a1 1 0 001-1V10" />
    </svg>
  ),
  flooring: (
    <svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 4h16v16H4zM4 12h16M12 4v16M4 8h8M12 8h8M4 16h8M12 16h8" />
    </svg>
  ),
  contracting: (
    <svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11.42 15.17l-5.66-5.66a2 2 0 010-2.83l.71-.71a2 2 0 012.83 0l5.66 5.66M19.07 4.93a2 2 0 010 2.83l-7.07 7.07M14 11l2.83 2.83M3 21h18" />
    </svg>
  ),
};

/** Homepage services preview section with 3x2 card grid */
export default function ServicesPreview() {
  const services: Service[] = servicesData;

  return (
    <section id="services" className="py-20 sm:py-24 bg-gray-100 scroll-mt-20" aria-labelledby="services-heading">
      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
        {/* Section header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <h2
            id="services-heading"
            className="font-oswald font-bold text-gray-800 text-3xl sm:text-4xl lg:text-5xl uppercase mb-4"
          >
            Our Services
          </h2>
          <p className="font-lato text-gray-600 text-base sm:text-lg leading-relaxed">
            From kitchens and bathrooms to full home renovations, we deliver quality craftsmanship
            on every project. Licensed, insured, and committed to exceeding your expectations.
          </p>
        </div>

        {/* 3x2 card grid */}
        <ul
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 list-none"
          role="list"
        >
          {services.map((service) => (
            <li key={service.id}>
              <article className="group h-full bg-white rounded-lg border border-gray-200 p-6 sm:p-8 shadow-sm hover:shadow-lg hover:border-orange-300 transition-all duration-200">
                {/* Icon */}
                <div className="flex items-center justify-center w-14 h-14 rounded-lg bg-orange-50 text-orange-500 group-hover:bg-orange-500 group-hover:text-white transition-colors duration-200 mb-5">
                  {ICON_MAP[service.icon] ?? ICON_MAP.contracting}
                </div>

                {/* Title */}
                <h3 className="font-oswald font-bold text-gray-800 text-lg sm:text-xl uppercase mb-3">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="font-lato text-gray-600 text-sm sm:text-base leading-relaxed">
                  {service.description}
                </p>
              </article>
            </li>
          ))}
        </ul>

        {/* CTA link */}
        <div className="mt-12 text-center">
          <a
            href="#contact"
            className="inline-flex items-center gap-2 font-oswald font-bold text-base sm:text-lg uppercase tracking-wide text-orange-500 hover:text-orange-600 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-500 focus-visible:ring-offset-2 min-h-[44px]"
          >
            Get a Free Quote
            <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
