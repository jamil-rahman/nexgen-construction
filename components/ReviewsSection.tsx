"use client";

import { useCallback } from "react";
import Image from "next/image";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { Review } from "@/types";
import reviewsData from "@/data/reviews.json";

/** Reviews carousel section with testimonials */
export default function ReviewsSection() {
  const reviews: Review[] = reviewsData;

  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true, align: "start", slidesToScroll: 1, containScroll: "trimSnaps" },
    [Autoplay({ delay: 5000, stopOnInteraction: false, stopOnMouseEnter: true })]
  );

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  return (
    <section id="reviews" className="py-20 sm:py-24 bg-gray-100 scroll-mt-20" aria-labelledby="reviews-heading">
      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
        {/* Section header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <h2
            id="reviews-heading"
            className="font-oswald font-bold text-gray-800 text-3xl sm:text-4xl lg:text-5xl uppercase mb-4"
          >
            What Our <span className="text-orange-500">Clients Say</span>
          </h2>
          <p className="font-lato text-gray-600 text-base sm:text-lg leading-relaxed">
            Don't just take our word for it. Here's what our satisfied clients have to say about
            their experience working with us.
          </p>
        </div>

        {/* Carousel */}
        <div className="relative">
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex">
              {reviews.map((review) => (
                <div
                  key={review.id}
                  className="flex-[0_0_100%] min-w-0 sm:flex-[0_0_50%] lg:flex-[0_0_33.333%] pl-0 pr-6 lg:pr-8"
                >
                  <ReviewCard review={review} />
                </div>
              ))}
            </div>
          </div>

          {/* Navigation arrows */}
          <button
            type="button"
            onClick={scrollPrev}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-3 sm:-translate-x-5 z-10 flex items-center justify-center w-11 h-11 rounded-full bg-gray-800/80 text-white hover:bg-orange-500 transition-colors shadow-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-500"
            aria-label="Previous reviews"
          >
            <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            type="button"
            onClick={scrollNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-3 sm:translate-x-5 z-10 flex items-center justify-center w-11 h-11 rounded-full bg-gray-800/80 text-white hover:bg-orange-500 transition-colors shadow-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-500"
            aria-label="Next reviews"
          >
            <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}

/** Individual review card */
function ReviewCard({ review }: { review: Review }) {
  const initials = review.name
    .split(" ")
    .map((word) => word[0])
    .join("")
    .toUpperCase()
    .slice(0, 2);

  return (
    <article className="h-full flex flex-col bg-white rounded-xl p-6 sm:p-8 shadow-sm hover:shadow-md transition-shadow duration-200 border border-gray-200">
      {/* Star rating */}
      

      {/* Testimonial text */}
      <blockquote className="font-lato text-gray-700 text-sm sm:text-base leading-relaxed mb-6 flex-1">
        "{review.text}"
      </blockquote>

      {/* Author info */}
      <div className="flex items-center gap-3">
        {/* Avatar - image or initials */}
        {review.image ? (
          <Image
            src={review.image}
            alt={`${review.name}'s photo`}
            width={48}
            height={48}
            className="h-12 w-12 rounded-full object-cover"
          />
        ) : (
          <div className="flex items-center justify-center h-12 w-12 rounded-full bg-orange-500 text-white font-oswald font-bold text-lg">
            {initials}
          </div>
        )}

        {/* Name and location */}
        <div className="flex-1 min-w-0">
          <p className="font-oswald font-bold text-gray-800 text-base truncate">{review.name}</p>
          <p className="font-lato text-gray-500 text-sm truncate">{review.location}</p>
        </div>
      </div>
    </article>
  );
}
