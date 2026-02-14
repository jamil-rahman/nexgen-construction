import Image from "next/image";
import { BeforeAfter } from "@/types";
import beforeAfterData from "@/data/before-after.json";

/** Before & After section with two-column comparison layout */
export default function BeforeAfterSection() {
  const items: BeforeAfter[] = beforeAfterData;

  return (
    <section className="py-20 sm:py-24 bg-white" aria-labelledby="before-after-heading">
      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
        {/* Section header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <h2
            id="before-after-heading"
            className="font-oswald font-bold text-gray-800 text-3xl sm:text-4xl lg:text-5xl uppercase mb-4"
          >
            Before & <span className="text-orange-500">After</span>
          </h2>
          <p className="font-lato text-gray-600 text-base sm:text-lg leading-relaxed">
            See the incredible transformations we've achieved. Each project tells a story of
            dedication, skill, and attention to detail.
          </p>
        </div>

        {/* Before/After items */}
        <div className="space-y-16 lg:space-y-20">
          {items.map((item) => (
            <article key={item.id} className="bg-gray-50 rounded-2xl overflow-hidden shadow-md">
              {/* Title & category */}
              <div className="px-6 sm:px-8 pt-6 sm:pt-8 pb-4">
                <div className="flex items-center gap-3 mb-2">
                  <h3 className="font-oswald font-bold text-gray-800 text-2xl sm:text-3xl">
                    {item.title}
                  </h3>
                  <span className="bg-orange-500 text-white font-oswald font-bold text-xs uppercase px-3 py-1 rounded-full">
                    {item.category}
                  </span>
                </div>
                <p className="font-lato text-gray-600 text-sm sm:text-base leading-relaxed">
                  {item.description}
                </p>
              </div>

              {/* Two-column image comparison */}
              <div className="grid grid-cols-1 md:grid-cols-2">
                {/* Before */}
                <div className="relative">
                  <div className="absolute top-4 left-4 z-10 bg-gray-900/80 text-white font-oswald font-bold text-sm uppercase px-4 py-2 rounded-lg">
                    Before
                  </div>
                  <div className="relative aspect-4/3 w-full">
                    <Image
                      src={item.beforeImage}
                      alt={`Before - ${item.title}`}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                  </div>
                </div>

                {/* After */}
                <div className="relative">
                  <div className="absolute top-4 left-4 z-10 bg-orange-500 text-white font-oswald font-bold text-sm uppercase px-4 py-2 rounded-lg">
                    After
                  </div>
                  <div className="relative aspect-4/3 w-full">
                    <Image
                      src={item.afterImage}
                      alt={`After - ${item.title}`}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
