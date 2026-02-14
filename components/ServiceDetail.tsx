import Link from "next/link";
import { Service } from "@/types";

const ICON_MAP: Record<string, React.ReactNode> = {
  kitchen: (
    <svg className="h-10 w-10" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 10h18M3 6h18M3 6v14a1 1 0 001 1h16a1 1 0 001-1V6M8 6V4a2 2 0 012-2h4a2 2 0 012 2v2M10 14h4M12 14v4" />
    </svg>
  ),
  basement: (
    <svg className="h-10 w-10" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 21h18M3 17h18M5 17V7l7-4 7 4v10M9 17v-4h6v4M12 7v2" />
    </svg>
  ),
  bathroom: (
    <svg className="h-10 w-10" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 12h18v4a4 4 0 01-4 4H7a4 4 0 01-4-4v-4zM5 12V6a3 3 0 016 0M17 20v2M7 20v2M12 12v-2M9 12v-1M15 12v-1" />
    </svg>
  ),
  home: (
    <svg className="h-10 w-10" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 12l9-8 9 8M5 10v10a1 1 0 001 1h3v-5a1 1 0 011-1h4a1 1 0 011 1v5h3a1 1 0 001-1V10" />
    </svg>
  ),
  flooring: (
    <svg className="h-10 w-10" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 4h16v16H4zM4 12h16M12 4v16M4 8h8M12 8h8M4 16h8M12 16h8" />
    </svg>
  ),
  contracting: (
    <svg className="h-10 w-10" fill="currentColor" viewBox="0 -32 576 576" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <path d="M571.31 193.94l-22.63-22.63c-6.25-6.25-16.38-6.25-22.63 0l-11.31 11.31-28.9-28.9c5.63-21.31.36-44.9-16.35-61.61l-45.25-45.25c-62.48-62.48-163.79-62.48-226.28 0l90.51 45.25v18.75c0 16.97 6.74 33.25 18.75 45.25l49.14 49.14c16.71 16.71 40.3 21.98 61.61 16.35l28.9 28.9-11.31 11.31c-6.25 6.25-6.25 16.38 0 22.63l22.63 22.63c6.25 6.25 16.38 6.25 22.63 0l90.51-90.51c6.23-6.24 6.23-16.37-.02-22.62zm-286.72-15.2c-3.7-3.7-6.84-7.79-9.85-11.95L19.64 404.96c-25.57 23.88-26.26 64.19-1.53 88.93s65.05 24.05 88.93-1.53l238.13-255.07c-3.96-2.91-7.9-5.87-11.44-9.41l-49.14-49.14z"/>
    </svg>
  ),
};

/** Detailed service card with expanded content */
export default function ServiceDetail({ service }: { service: Service }) {
  return (
    <article
      id={service.icon}
      className="bg-white rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow duration-200 overflow-hidden scroll-mt-24"
    >
      <div className="p-6 sm:p-8 lg:p-10">
        {/* Icon & title */}
        <div className="flex items-start gap-4 mb-5">
          <div className="flex items-center justify-center w-16 h-16 rounded-xl bg-orange-50 text-orange-500 shrink-0">
            {ICON_MAP[service.icon] ?? ICON_MAP.contracting}
          </div>
          <div className="flex-1 min-w-0">
            <h3 className="font-oswald font-bold text-gray-800 text-2xl sm:text-3xl uppercase mb-2">
              {service.title}
            </h3>
            <p className="font-lato text-orange-500 text-sm uppercase tracking-wide">
              Professional Service
            </p>
          </div>
        </div>

        {/* Short description */}
        <p className="font-lato text-gray-700 text-base sm:text-lg leading-relaxed mb-6">
          {service.description}
        </p>

        {/* Detailed description */}
        {service.detailedDescription && (
          <div className="mb-6 pb-6 border-b border-gray-200">
            <p className="font-lato text-gray-600 text-sm sm:text-base leading-relaxed">
              {service.detailedDescription}
            </p>
          </div>
        )}

        {/* Features list */}
        {service.features && service.features.length > 0 && (
          <div className="mb-6">
            <h4 className="font-oswald font-bold text-gray-800 text-lg uppercase mb-4">
              What's Included
            </h4>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3" role="list">
              {service.features.map((feature, index) => (
                <li key={index} className="flex items-start gap-2">
                  <svg
                    className="h-5 w-5 text-orange-500 shrink-0 mt-0.5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="font-lato text-gray-700 text-sm sm:text-base">{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* CTA */}
        <Link
          href="/#contact"
          className="inline-flex items-center justify-center px-6 py-3 bg-orange-500 hover:bg-orange-600 text-white font-oswald font-bold text-sm uppercase tracking-wide rounded-lg transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-500 focus-visible:ring-offset-2 min-h-[44px]"
        >
          Request a Quote
        </Link>
      </div>
    </article>
  );
}
