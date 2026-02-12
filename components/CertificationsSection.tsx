import Image from "next/image";

const CERTIFICATIONS = [
  {
    id: 1,
    name: "WSIB",
    fullName: "Workplace Safety and Insurance Board",
    logo: "/images/logos/wsib.png",
    url: "https://www.wsib.ca",
  },
  {
    id: 2,
    name: "IHSA",
    fullName: "Infrastructure Health & Safety Association",
    logo: "/images/logos/ihsa-black.png",
    url: "https://www.ihsa.ca",
  },
  {
    id: 3,
    name: "Total Insurance Group",
    fullName: "Fully Insured & Bonded",
    logo: "/images/logos/tig.png",
    url: "#",
  },
] as const;

/** Certifications and Insurance Section */
export default function CertificationsSection() {
  return (
    <section className="py-16 sm:py-20 bg-gray-100" aria-labelledby="certifications-heading">
      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
        {/* Section header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2
            id="certifications-heading"
            className="font-oswald font-bold text-gray-800 text-2xl sm:text-3xl lg:text-4xl uppercase mb-3"
          >
            Licensed, Insured & <span className="text-orange-500">Certified</span>
          </h2>
          <p className="font-lato text-gray-600 text-sm sm:text-base leading-relaxed">
            Your peace of mind is our priority. We're fully insured and compliant with all industry
            safety standards.
          </p>
        </div>

        {/* Logos grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 sm:gap-10 lg:gap-12 items-center justify-items-center">
          {CERTIFICATIONS.map((cert) => (
            <a
              key={cert.id}
              href={cert.url}
              target={cert.url !== "#" ? "_blank" : undefined}
              rel={cert.url !== "#" ? "noopener noreferrer" : undefined}
              className="group flex flex-col items-center justify-center w-full max-w-[200px] sm:max-w-[180px] lg:max-w-[220px] focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-500 focus-visible:ring-offset-2 rounded-lg p-4"
              aria-label={`${cert.name} - ${cert.fullName}`}
            >
              <div className="relative w-full h-20 sm:h-24 mb-3 grayscale group-hover:grayscale-0 transition-all duration-300 opacity-70 group-hover:opacity-100">
                <Image
                  src={cert.logo}
                  alt={`${cert.name} logo`}
                  fill
                  className="object-contain"
                  sizes="(max-width: 640px) 200px, (max-width: 1024px) 180px, 220px"
                />
              </div>
              <p className="font-lato text-gray-600 text-xs sm:text-sm text-center">
                {cert.fullName}
              </p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
