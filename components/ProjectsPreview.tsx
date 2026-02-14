"use client";

import { useCallback, useEffect, useRef } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { Project } from "@/types";
import projectsData from "@/data/projects.json";

/** Auto-playing project carousel showcasing 3 cards at a time */
export default function ProjectsPreview() {
  const projects: Project[] = projectsData;

  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true, align: "start", slidesToScroll: 1, containScroll: "trimSnaps" },
    [Autoplay({ delay: 4000, stopOnInteraction: false, stopOnMouseEnter: true })]
  );

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  return (
    <section id="projects" className="py-20 sm:py-24 bg-white scroll-mt-20" aria-labelledby="projects-heading">
      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
        {/* Section header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <h2
            id="projects-heading"
            className="font-oswald font-bold text-gray-800 text-3xl sm:text-4xl lg:text-5xl uppercase mb-4"
          >
            Featured <span className="text-orange-500">Projects</span>
          </h2>
          <p className="font-lato text-gray-600 text-base sm:text-lg leading-relaxed">
            Take a look at some of our recent work. Every project reflects our commitment to
            quality craftsmanship and attention to detail.
          </p>
        </div>

        {/* Carousel */}
        <div className="relative">
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex">
              {projects.map((project) => (
                <div
                  key={project.id}
                  className="flex-[0_0_100%] min-w-0 sm:flex-[0_0_50%] lg:flex-[0_0_33.333%] pl-0 pr-6 lg:pr-8"
                >
                  <ProjectCard project={project} />
                </div>
              ))}
            </div>
          </div>

          {/* Navigation arrows */}
          <button
            type="button"
            onClick={scrollPrev}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-3 sm:-translate-x-5 z-10 flex items-center justify-center w-11 h-11 rounded-full bg-gray-900/80 text-white hover:bg-orange-500 transition-colors shadow-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-500"
            aria-label="Previous projects"
          >
            <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            type="button"
            onClick={scrollNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-3 sm:translate-x-5 z-10 flex items-center justify-center w-11 h-11 rounded-full bg-gray-900/80 text-white hover:bg-orange-500 transition-colors shadow-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-500"
            aria-label="Next projects"
          >
            <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>

        {/* CTA link */}
        <div className="mt-12 text-center">
          <a
            href="/projects"
            className="inline-flex items-center gap-2 font-oswald font-bold text-base sm:text-lg uppercase tracking-wide text-orange-500 hover:text-orange-600 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-500 focus-visible:ring-offset-2 min-h-[44px]"
          >
            View All Projects
            <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}

/** Individual project card with hover-triggered image cycling */
function ProjectCard({ project }: { project: Project }) {
  const currentIndex = useRef(0);
  const imgRef = useRef<HTMLImageElement | null>(null);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const startCycling = () => {
    if (project.images.length <= 1 || intervalRef.current) return;

    intervalRef.current = setInterval(() => {
      currentIndex.current = (currentIndex.current + 1) % project.images.length;
      const nextImage = project.images[currentIndex.current];
      if (imgRef.current) {
        imgRef.current.style.opacity = "0";
        setTimeout(() => {
          if (imgRef.current) {
            imgRef.current.src = nextImage.src;
            imgRef.current.alt = nextImage.alt;
            imgRef.current.style.opacity = "1";
          }
        }, 300);
      }
    }, 2000);
  };

  const stopCycling = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
    currentIndex.current = 0;
    if (imgRef.current) {
      imgRef.current.style.opacity = "0";
      setTimeout(() => {
        if (imgRef.current) {
          imgRef.current.src = project.images[0].src;
          imgRef.current.alt = project.images[0].alt;
          imgRef.current.style.opacity = "1";
        }
      }, 300);
    }
  };

  return (
    <article
      className="group h-full flex flex-col bg-gray-900 rounded-xl overflow-hidden shadow-md hover:shadow-2xl transition-shadow duration-300"
      onMouseEnter={startCycling}
      onMouseLeave={stopCycling}
    >
      {/* Image */}
      <div className="relative w-full aspect-4/3 overflow-hidden bg-gray-800 cursor-pointer">
        <img
          ref={imgRef}
          src={project.images[0].src}
          alt={project.images[0].alt}
          className="absolute inset-0 w-full h-full object-cover transition-all duration-300 group-hover:scale-105"
          loading="lazy"
        />
      </div>

      {/* Content */}
      <div className="flex flex-col flex-1 p-5 sm:p-6">
        <h3 className="font-oswald font-bold text-white text-lg sm:text-xl mb-2">
          {project.title}
        </h3>
        <p className="font-lato text-gray-400 text-sm sm:text-base leading-relaxed mb-5 flex-1">
          {project.description}
        </p>
        <a
          href="#contact"
          className="inline-flex items-center justify-center self-start font-oswald font-bold text-sm uppercase tracking-wide text-gray-900 bg-orange-500 hover:bg-orange-400 px-5 py-2.5 rounded-full transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-500 focus-visible:ring-offset-2 focus-visible:ring-offset-gray-900 min-h-[44px]"
        >
          Learn More
        </a>
      </div>
    </article>
  );
}
