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
const WHATSAPP_HREF = "https://wa.me/14163710546";
const FACEBOOK_HREF = "https://www.facebook.com/profile.php?id=61561801927181";
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
                <li className="pt-4">
                  <p className="font-oswald font-medium text-yellow-500 text-md uppercase tracking-wide mb-3">
                    Follow Us
                  </p>
                  <div className="flex items-center gap-3">
                    <a
                      href={FACEBOOK_HREF}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center h-10 w-10 rounded-full bg-gray-800 text-gray-400 hover:bg-blue-600 hover:text-white transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-500 focus-visible:ring-offset-2 focus-visible:ring-offset-gray-900"
                      aria-label="Follow us on Facebook"
                    >
                      <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
                      </svg>
                    </a>
                    <a
                      href={WHATSAPP_HREF}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center h-10 w-10 rounded-full bg-gray-800 text-gray-400 hover:bg-green-600 hover:text-white transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-500 focus-visible:ring-offset-2 focus-visible:ring-offset-gray-900"
                      aria-label="Message us on WhatsApp"
                    >
                      <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                      </svg>
                    </a>
                  </div>
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
