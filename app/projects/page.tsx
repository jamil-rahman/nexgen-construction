import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import ProjectGallery from "@/components/ProjectGallery";
import BeforeAfterSection from "@/components/BeforeAfterSection";

export const metadata: Metadata = {
  title: "Our Projects | NexGen Construction - GTA Construction Portfolio",
  description:
    "View our portfolio of completed construction projects in the Greater Toronto Area. Kitchen renovations, bathroom remodels, basement finishing, deck building & more. See before & after transformations.",
  keywords: [
    "construction portfolio GTA",
    "renovation projects Toronto",
    "before after construction",
    "kitchen renovation photos",
    "bathroom remodel gallery",
    "basement finishing examples",
    "deck building portfolio",
    "NexGen Construction projects",
  ],
  openGraph: {
    title: "Our Projects | NexGen Construction Portfolio",
    description:
      "View our portfolio of completed construction projects in the GTA. See before & after transformations of kitchens, bathrooms, basements, and more.",
    type: "website",
    images: [{ url: "/images/hero/hero-project.jpg", width: 1200, height: 630, alt: "NexGen Construction Projects Portfolio" }],
  },
};

export default function ProjectsPage() {
  return (
    <>
      {/* Hero section */}
      <section className="relative h-[400px] sm:h-[500px] lg:h-[600px] overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/hero/hero-project.jpg"
            alt="NexGen Construction completed projects - Quality craftsmanship showcase"
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
          <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12 text-center w-full">
            <h1 className="font-oswald font-bold text-4xl sm:text-5xl lg:text-6xl uppercase mb-4 text-white">
              Our <span className="text-orange-500">Projects</span>
            </h1>
            <p className="font-lato text-gray-200 text-base sm:text-lg leading-relaxed max-w-3xl mx-auto mb-8">
              Take a look at the transformations we've created for our clients. From concept to
              completion, every project reflects our dedication to quality and craftsmanship.
            </p>
            <Link
              href="/#contact"
              className="inline-flex items-center justify-center px-8 py-4 bg-orange-500 hover:bg-orange-600 text-white font-oswald font-bold text-base uppercase transition-colors rounded-lg shadow-lg hover:shadow-xl min-h-[48px]"
            >
              Start Your Project
            </Link>
          </div>
        </div>
      </section>

      <ProjectGallery />
      <BeforeAfterSection />
    </>
  );
}
