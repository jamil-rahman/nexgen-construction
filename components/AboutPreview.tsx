import Image from "next/image";

const ABOUT_ITEMS = [
  {
    id: 1,
    title: "Local & Reliable",
    description:
      "We're not a corporate giant—we're your neighbors. As a local contractor, we understand the community we serve and take pride in building lasting relationships with every client.",
    image: "/images/misc/construction-worker-1.jpg",
    imageAlt: "Professional construction worker on site",
    reverse: false,
  },
  {
    id: 2,
    title: "Trusted Craftsmanship",
    description:
      "With years of hands-on experience and a proven track record, we deliver quality workmanship on every project. Our satisfied clients are our best testament to the care and expertise we bring to each job.",
    image: "/images/misc/building-1.jpg",
    imageAlt: "Quality construction building",
    reverse: true,
  },
  {
    id: 3,
    title: "Goes the Extra Mile",
    description:
      "We don't just complete projects—we exceed expectations. From the first consultation to the final walkthrough, we're committed to making your vision a reality with attention to detail and personalized service.",
    image: "/images/misc/workers-1.jpg",
    imageAlt: "Construction team working together",
    reverse: false,
  },
] as const;

/** About preview section showcasing company values */
export default function AboutPreview() {
  return (
    <section id="about" className="py-20 sm:py-24 bg-white scroll-mt-20" aria-labelledby="about-heading">
      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
        {/* Section header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2
            id="about-heading"
            className="font-oswald font-bold text-gray-800 text-3xl sm:text-4xl lg:text-5xl uppercase mb-4"
          >
            Why Choose <span className="text-orange-500">NexGen</span>
          </h2>
          <p className="font-lato text-gray-600 text-base sm:text-lg leading-relaxed">
            We're a local contractor dedicated to delivering exceptional results. Our commitment to
            quality, reliability, and customer satisfaction sets us apart.
          </p>
        </div>

        {/* Two-column rows with alternating layout */}
        <div className="space-y-16 lg:space-y-20">
          {ABOUT_ITEMS.map((item) => (
            <div
              key={item.id}
              className={`flex flex-col gap-8 lg:gap-12 ${
                item.reverse ? "lg:flex-row-reverse" : "lg:flex-row"
              } items-center`}
            >
              {/* Image */}
              <div className="w-full lg:w-1/2 shrink-0">
                <div className="relative aspect-4/3 rounded-xl overflow-hidden shadow-lg">
                  <Image
                    src={item.image}
                    alt={item.imageAlt}
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                </div>
              </div>

              {/* Text content */}
              <div className="w-full lg:w-1/2 flex flex-col justify-center">
                <h3 className="font-oswald font-bold text-gray-800 text-2xl sm:text-3xl lg:text-4xl uppercase mb-4">
                  {item.title}
                </h3>
                <p className="font-lato text-gray-600 text-base sm:text-lg leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA link */}
        <div className="mt-16 text-center">
          <a
            href="#contact"
            className="inline-flex items-center gap-2 font-oswald font-bold text-base sm:text-lg uppercase tracking-wide text-orange-500 hover:text-orange-600 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-500 focus-visible:ring-offset-2 min-h-[44px]"
          >
            Get In Touch
            <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
