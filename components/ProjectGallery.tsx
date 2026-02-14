"use client";

import { useState, useRef } from "react";
import Image from "next/image";
import { Project } from "@/types";
import projectsData from "@/data/projects.json";

const projects: Project[] = projectsData;

/** Project gallery with bento grid layout and lightbox viewer */
export default function ProjectGallery() {
  const [lightbox, setLightbox] = useState<{ project: Project; imageIdx: number } | null>(null);

  const openLightbox = (project: Project, imageIdx: number) => {
    setLightbox({ project, imageIdx });
    document.body.style.overflow = "hidden";
  };

  const closeLightbox = () => {
    setLightbox(null);
    document.body.style.overflow = "";
  };

  const navigateLightbox = (direction: number) => {
    if (!lightbox) return;
    const total = lightbox.project.images.length;
    const next = (lightbox.imageIdx + direction + total) % total;
    setLightbox({ ...lightbox, imageIdx: next });
  };

  const jumpToImage = (idx: number) => {
    if (!lightbox) return;
    setLightbox({ ...lightbox, imageIdx: idx });
  };

  return (
    <section className="py-20 sm:py-24 bg-gray-50" aria-labelledby="gallery-heading">
      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
        {/* Section header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <h2
            id="gallery-heading"
            className="font-oswald font-bold text-gray-800 text-3xl sm:text-4xl lg:text-5xl uppercase mb-4"
          >
            Our <span className="text-orange-500">Featured</span> Projects
          </h2>
          <p className="font-lato text-gray-600 text-base sm:text-lg leading-relaxed">
            Browse through our portfolio of completed projects. Each one showcases our commitment to
            quality craftsmanship and attention to detail.
          </p>
        </div>

        {/* Bento grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-5 auto-rows-[280px] sm:auto-rows-[300px]">
          {projects.map((project, idx) => (
            <ProjectCard
              key={project.id}
              project={project}
              isHero={idx === 0}
              onImageClick={(imgIdx) => openLightbox(project, imgIdx)}
            />
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {lightbox && (
        <Lightbox
          project={lightbox.project}
          imageIdx={lightbox.imageIdx}
          onClose={closeLightbox}
          onNavigate={navigateLightbox}
          onJump={jumpToImage}
        />
      )}
    </section>
  );
}

/** Project card with hover effects and image cycling */
function ProjectCard({
  project,
  isHero,
  onImageClick,
}: {
  project: Project;
  isHero: boolean;
  onImageClick: (imageIdx: number) => void;
}) {
  const [hoveredImg, setHoveredImg] = useState(0);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const startCycling = () => {
    if (project.images.length <= 1 || intervalRef.current) return;
    intervalRef.current = setInterval(() => {
      setHoveredImg((prev) => (prev + 1) % project.images.length);
    }, 1800);
  };

  const stopCycling = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
    setHoveredImg(0);
  };

  return (
    <article
      className={`group relative cursor-pointer overflow-hidden rounded-2xl bg-gray-200 shadow-md hover:shadow-2xl transition-shadow duration-300 ${
        isHero ? "sm:col-span-2 sm:row-span-2" : ""
      }`}
      onMouseEnter={startCycling}
      onMouseLeave={stopCycling}
      onClick={() => onImageClick(hoveredImg)}
    >
      {/* Image */}
      <Image
        src={project.images[hoveredImg].src}
        alt={project.images[hoveredImg].alt}
        fill
        className="object-cover transition-transform duration-700 group-hover:scale-105"
        sizes={isHero ? "(max-width: 640px) 100vw, 66vw" : "(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"}
      />

      {/* Persistent bottom gradient */}
      <div className="absolute inset-0 bg-linear-to-t from-black/70 via-transparent to-transparent" />

      {/* Category badge */}
      <div className="absolute top-4 left-4 bg-orange-500 text-white font-oswald font-bold text-xs uppercase px-3 py-1 rounded-full shadow-sm">
        {project.category}
      </div>

      {/* Image counter */}
      {project.images.length > 1 && (
        <div className="absolute top-4 right-4 bg-black/50 text-white font-lato text-xs px-2.5 py-1 rounded-full flex items-center gap-1">
          <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
          </svg>
          {hoveredImg + 1}/{project.images.length}
        </div>
      )}

      {/* Project info - always visible at bottom */}
      <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-6">
        <h3 className={`font-oswald font-bold text-white uppercase mb-1 ${isHero ? "text-xl sm:text-2xl" : "text-lg"}`}>
          {project.title}
        </h3>
        <p className={`font-lato text-gray-200 leading-relaxed line-clamp-2 ${isHero ? "text-sm sm:text-base" : "text-sm"}`}>
          {project.description}
        </p>
      </div>

      {/* Hover expand hint */}
      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <div className="bg-white/20 backdrop-blur-sm rounded-full p-3">
          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
          </svg>
        </div>
      </div>
    </article>
  );
}

/** Full-screen lightbox for viewing project images */
function Lightbox({
  project,
  imageIdx,
  onClose,
  onNavigate,
  onJump,
}: {
  project: Project;
  imageIdx: number;
  onClose: () => void;
  onNavigate: (direction: number) => void;
  onJump: (idx: number) => void;
}) {
  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/90"
      role="dialog"
      aria-modal="true"
      aria-label={`${project.title} image gallery`}
      onClick={onClose}
    >
      {/* Close button */}
      <button
        type="button"
        onClick={onClose}
        className="absolute top-4 right-4 z-10 flex items-center justify-center w-11 h-11 rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
        aria-label="Close gallery"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>

      {/* Project info */}
      <div className="absolute top-4 left-4 z-10">
        <h3 className="font-oswald font-bold text-white text-lg sm:text-xl uppercase">{project.title}</h3>
        <p className="font-lato text-gray-300 text-sm">
          {imageIdx + 1} of {project.images.length}
        </p>
      </div>

      {/* Image */}
      <div
        className="relative w-full max-w-5xl mx-4 sm:mx-8 aspect-4/3"
        onClick={(e) => e.stopPropagation()}
      >
        <Image
          src={project.images[imageIdx].src}
          alt={project.images[imageIdx].alt}
          fill
          className="object-contain"
          sizes="100vw"
          priority
        />
      </div>

      {/* Navigation arrows */}
      {project.images.length > 1 && (
        <>
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              onNavigate(-1);
            }}
            className="absolute left-3 sm:left-6 top-1/2 -translate-y-1/2 flex items-center justify-center w-11 h-11 rounded-full bg-white/10 text-white hover:bg-orange-500 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
            aria-label="Previous image"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              onNavigate(1);
            }}
            className="absolute right-3 sm:right-6 top-1/2 -translate-y-1/2 flex items-center justify-center w-11 h-11 rounded-full bg-white/10 text-white hover:bg-orange-500 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
            aria-label="Next image"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </>
      )}

      {/* Thumbnail strip */}
      {project.images.length > 1 && (
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2" onClick={(e) => e.stopPropagation()}>
          {project.images.map((img, idx) => (
            <button
              key={idx}
              type="button"
              onClick={() => onJump(idx)}
              className={`w-16 h-12 rounded-md overflow-hidden border-2 transition-all ${
                idx === imageIdx ? "border-orange-500 opacity-100" : "border-transparent opacity-50 hover:opacity-75"
              }`}
              aria-label={`View image ${idx + 1}`}
            >
              <Image
                src={img.src}
                alt=""
                width={64}
                height={48}
                className="w-full h-full object-cover"
              />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
