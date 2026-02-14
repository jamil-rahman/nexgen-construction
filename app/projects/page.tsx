import type { Metadata } from "next";
import Link from "next/link";
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
    images: [{ url: "/images/projects/project_1.jpeg" }],
  },
};

export default function ProjectsPage() {
  return (
    <>
      {/* Hero section */}
      <section className="relative bg-gray-900 text-white py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12 text-center">
          <h1 className="font-oswald font-bold text-4xl sm:text-5xl lg:text-6xl uppercase mb-4">
            Our <span className="text-orange-500">Projects</span>
          </h1>
          <p className="font-lato text-gray-300 text-base sm:text-lg leading-relaxed max-w-3xl mx-auto mb-8">
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
      </section>

      <ProjectGallery />
      <BeforeAfterSection />
    </>
  );
}
