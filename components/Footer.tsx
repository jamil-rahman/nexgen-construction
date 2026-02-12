import Image from "next/image";

const QUICK_LINKS = [
  { href: "#hero", label: "Home" },
  { href: "#services", label: "Services" },
  { href: "#projects", label: "Projects" },
  { href: "#reviews", label: "Reviews" },
  { href: "#about", label: "About Us" },
  { href: "#contact", label: "Contact" },
] as const;

const SERVICES = [
  { href: "#services", label: "Kitchen Renovations" },
  { href: "#services", label: "Bathroom Remodeling" },
  { href: "#services", label: "Basement Finishing" },
  { href: "#services", label: "Flooring & Tile" },
  { href: "#services", label: "Deck & Outdoor" },
  { href: "#services", label: "General Contracting" },
] as const;

const PHONE_NUMBER = "(416) 371-0546";
const PHONE_HREF = "tel:+14163710546";
const EMAIL = "info@nexgenconstruction.ca";
const CURRENT_YEAR = new Date().getFullYear();

/** Site footer with navigation, services, and contact info */
export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300" role="contentinfo">
      {/* Main footer content */}
      <div className="border-b border-gray-800">
        <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12 py-12 sm:py-16">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            {/* Company info column */}
            <div className="sm:col-span-2 lg:col-span-1">
              <a
                href="#hero"
                className="inline-flex items-center gap-2 mb-4 focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-500 focus-visible:ring-offset-2 focus-visible:ring-offset-gray-900 rounded"
                aria-label="NexGen Construction - Home"
              >
                <Image
                  src="/images/logos/logo.png"
                  alt="NexGen Construction"
                  width={40}
                  height={40}
                  className="h-10 w-10 rounded"
                />
                <span className="font-oswald font-bold text-white text-xl uppercase">
                  <span className="text-orange-500">NexGen</span> Construction
                </span>
              </a>
              <p className="font-lato text-gray-400 text-sm leading-relaxed mb-4">
                Professional construction services for your home. Licensed, insured, and committed
                to quality craftsmanship in every project.
              </p>
              <p className="font-lato text-gray-400 text-sm">
                Serving the Greater City Area & Surrounding Communities
              </p>
            </div>

            {/* Quick Links column */}
            <div>
              <h3 className="font-oswald font-bold text-yellow-500 text-base uppercase tracking-wide mb-4">
                Quick Links
              </h3>
              <ul className="space-y-2.5" role="list">
                {QUICK_LINKS.map(({ href, label }) => (
                  <li key={label}>
                    <a
                      href={href}
                      className="font-lato text-gray-400 hover:text-orange-400 text-sm transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-500 focus-visible:ring-offset-2 focus-visible:ring-offset-gray-900 rounded inline-block"
                    >
                      {label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services column */}
            <div>
              <h3 className="font-oswald font-bold text-yellow-500 text-base uppercase tracking-wide mb-4">
                Our Services
              </h3>
              <ul className="space-y-2.5" role="list">
                {SERVICES.map(({ label }) => (
                  <li key={label}>
                    <a
                      href="#services"
                      className="font-lato text-gray-400 hover:text-orange-400 text-sm transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-500 focus-visible:ring-offset-2 focus-visible:ring-offset-gray-900 rounded inline-block"
                    >
                      {label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact column */}
            <div>
              <h3 className="font-oswald font-bold text-yellow-500 text-base uppercase tracking-wide mb-4">
                Get In Touch
              </h3>
              <ul className="space-y-3" role="list">
                <li>
                  <a
                    href={PHONE_HREF}
                    className="flex items-start gap-2 font-lato text-gray-400 hover:text-orange-400 text-sm transition-colors group focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-500 focus-visible:ring-offset-2 focus-visible:ring-offset-gray-900 rounded"
                  >
                    <svg
                      className="h-5 w-5 shrink-0 text-orange-500 group-hover:text-orange-400"
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
                    <span>{PHONE_NUMBER}</span>
                  </a>
                </li>
                <li>
                  <a
                    href={`mailto:${EMAIL}`}
                    className="flex items-start gap-2 font-lato text-gray-400 hover:text-orange-400 text-sm transition-colors group focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-500 focus-visible:ring-offset-2 focus-visible:ring-offset-gray-900 rounded"
                  >
                    <svg
                      className="h-5 w-5 shrink-0 text-orange-500 group-hover:text-orange-400"
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
                    <span className="break-all">{EMAIL}</span>
                  </a>
                </li>
                <li className="pt-2">
                  <p className="font-oswald font-medium text-yellow-500 text-md uppercase tracking-wide mb-1.5">
                    Business Hours
                  </p>
                  <p className="font-lato text-gray-400 text-sm">Mon – Sat: 7:00 AM – 6:00 PM</p>
                  <p className="font-lato text-gray-400 text-sm">Sunday: Closed</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar - copyright */}
      <div className="bg-gray-950">
        <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12 py-6">
          <div className="text-center space-y-2">
            <p className="font-lato text-gray-400 text-sm">
              © {CURRENT_YEAR} NexGen Construction. All rights reserved.
            </p>
            <p className="font-lato text-gray-600 text-xs">
             Developed by <a href="https://www.linkedin.com/in/jamilurrahman96/" target="_blank" rel="noopener noreferrer" className="text-yellow-500 hover:text-orange-400">Mohd Jamilur Rahman Shaan</a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
