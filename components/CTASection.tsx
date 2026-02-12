"use client";

import { useState, FormEvent } from "react";
import { ContactFormData, FormStatus } from "@/types";

const WORK_TYPES = [
  "Kitchen Renovation",
  "Bathroom Remodeling",
  "Basement Finishing",
  "Full Home Renovation",
  "Flooring & Tile Installation",
  "Deck & Outdoor Spaces",
  "Painting & Repainting",
  "Simple Installations",
  "General Contracting",
  "Other",
] as const;

const PHONE_NUMBER = "416-371-0546";
const PHONE_HREF = "tel:+14163710546";
const FORMSPREE_ID = process.env.NEXT_PUBLIC_FORMSPREE_ID ?? "";

const INITIAL_FORM: ContactFormData = {
  name: "",
  email: "",
  phone: "",
  location: "",
  workType: "",
  message: "",
};

/** Contact form section with phone CTA */
export default function CTASection() {
  const [form, setForm] = useState<ContactFormData>(INITIAL_FORM);
  const [status, setStatus] = useState<FormStatus>("idle");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("submitting");

    try {
      const res = await fetch(`https://formspree.io/f/${FORMSPREE_ID}`, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(form),
      });

      if (res.ok) {
        setStatus("success");
        setForm(INITIAL_FORM);
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <section id="contact" className="py-20 sm:py-24 bg-white scroll-mt-20" aria-labelledby="contact-heading">
      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
        {/* Section header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <h2
            id="contact-heading"
            className="font-oswald font-bold text-gray-800 text-3xl sm:text-4xl lg:text-5xl uppercase mb-4"
          >
            Get Your <span className="text-orange-500">Free Quote</span>
          </h2>
          <p className="font-lato text-gray-600 text-base sm:text-lg leading-relaxed">
            Ready to start your project? Fill out the form below or give us a call. We'll get back
            to you within 24 hours.
          </p>
        </div>

        {/* Two-column layout: form + contact info */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16">
          {/* Contact form - takes 3 columns */}
          <div className="lg:col-span-3">
            <form onSubmit={handleSubmit} className="space-y-5" noValidate>
              {/* Name & Email row */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label
                    htmlFor="contact-name"
                    className="block font-oswald font-medium text-gray-800 text-sm uppercase tracking-wide mb-1.5"
                  >
                    Name <span className="text-orange-500" aria-hidden="true">*</span>
                  </label>
                  <input
                    type="text"
                    id="contact-name"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    required
                    autoComplete="name"
                    className="w-full rounded-lg border border-gray-300 bg-gray-50 px-4 py-3 font-lato text-base text-gray-800 placeholder-gray-400 transition-colors focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 focus:outline-none"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label
                    htmlFor="contact-email"
                    className="block font-oswald font-medium text-gray-800 text-sm uppercase tracking-wide mb-1.5"
                  >
                    Email <span className="text-orange-500" aria-hidden="true">*</span>
                  </label>
                  <input
                    type="email"
                    id="contact-email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    required
                    autoComplete="email"
                    className="w-full rounded-lg border border-gray-300 bg-gray-50 px-4 py-3 font-lato text-base text-gray-800 placeholder-gray-400 transition-colors focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 focus:outline-none"
                    placeholder="you@email.com"
                  />
                </div>
              </div>

              {/* Phone & Location row */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label
                    htmlFor="contact-phone"
                    className="block font-oswald font-medium text-gray-800 text-sm uppercase tracking-wide mb-1.5"
                  >
                    Phone <span className="text-orange-500" aria-hidden="true">*</span>
                  </label>
                  <input
                    type="tel"
                    id="contact-phone"
                    name="phone"
                    value={form.phone}
                    onChange={handleChange}
                    required
                    autoComplete="tel"
                    className="w-full rounded-lg border border-gray-300 bg-gray-50 px-4 py-3 font-lato text-base text-gray-800 placeholder-gray-400 transition-colors focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 focus:outline-none"
                    placeholder="(555) 000-0000"
                  />
                </div>
                <div>
                  <label
                    htmlFor="contact-location"
                    className="block font-oswald font-medium text-gray-800 text-sm uppercase tracking-wide mb-1.5"
                  >
                    Location <span className="text-orange-500" aria-hidden="true">*</span>
                  </label>
                  <input
                    type="text"
                    id="contact-location"
                    name="location"
                    value={form.location}
                    onChange={handleChange}
                    required
                    autoComplete="address-level2"
                    className="w-full rounded-lg border border-gray-300 bg-gray-50 px-4 py-3 font-lato text-base text-gray-800 placeholder-gray-400 transition-colors focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 focus:outline-none"
                    placeholder="City, Province"
                  />
                </div>
              </div>

              {/* Work Type dropdown */}
              <div>
                <label
                  htmlFor="contact-workType"
                  className="block font-oswald font-medium text-gray-800 text-sm uppercase tracking-wide mb-1.5"
                >
                  Type of Work <span className="text-orange-500" aria-hidden="true">*</span>
                </label>
                <select
                  id="contact-workType"
                  name="workType"
                  value={form.workType}
                  onChange={handleChange}
                  required
                  className="w-full rounded-lg border border-gray-300 bg-gray-50 px-4 py-3 font-lato text-base text-gray-800 transition-colors focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 focus:outline-none appearance-none"
                  style={{
                    backgroundImage:
                      "url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3e%3cpath stroke='%236b7280' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='M6 8l4 4 4-4'/%3e%3c/svg%3e\")",
                    backgroundPosition: "right 0.75rem center",
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "1.25em 1.25em",
                  }}
                >
                  <option value="" disabled>
                    Select a service
                  </option>
                  {WORK_TYPES.map((type) => (
                    <option key={type} value={type}>
                      {type}
                    </option>
                  ))}
                </select>
              </div>

              {/* Message textarea */}
              <div>
                <label
                  htmlFor="contact-message"
                  className="block font-oswald font-medium text-gray-800 text-sm uppercase tracking-wide mb-1.5"
                >
                  Message <span className="text-orange-500" aria-hidden="true">*</span>
                </label>
                <textarea
                  id="contact-message"
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full rounded-lg border border-gray-300 bg-gray-50 px-4 py-3 font-lato text-base text-gray-800 placeholder-gray-400 transition-colors focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 focus:outline-none resize-y"
                  placeholder="Tell us about your project..."
                />
              </div>

              {/* Submit button */}
              <button
                type="submit"
                disabled={status === "submitting"}
                className="w-full sm:w-auto inline-flex items-center justify-center px-10 py-4 bg-orange-500 hover:bg-orange-600 disabled:bg-orange-300 text-white font-oswald font-bold text-base uppercase tracking-wide rounded-lg transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-500 focus-visible:ring-offset-2 min-h-[48px] shadow-md hover:shadow-lg"
              >
                {status === "submitting" ? "Sending..." : "Send Message"}
              </button>

              {/* Status messages */}
              {status === "success" && (
                <p className="font-lato text-green-600 text-sm mt-3" role="status">
                  Thank you! Your message has been sent. We'll get back to you within 24 hours.
                </p>
              )}
              {status === "error" && (
                <p className="font-lato text-red-600 text-sm mt-3" role="alert">
                  Something went wrong. Please try again or call us directly.
                </p>
              )}
            </form>
          </div>

          {/* Contact info sidebar - takes 2 columns */}
          <div className="lg:col-span-2 flex flex-col justify-center">
            <div className="bg-gray-900 rounded-xl p-8 sm:p-10 text-center lg:text-left">
              <h3 className="font-oswald font-bold text-white text-2xl sm:text-3xl uppercase mb-3">
                Prefer to <span className="text-yellow-500">Talk?</span>
              </h3>
              <p className="font-lato text-gray-400 text-base leading-relaxed mb-8">
                Give us a call and speak directly with our team. We're happy to discuss your project
                and provide a free estimate over the phone.
              </p>

              {/* Phone CTA */}
              <a
                href={PHONE_HREF}
                className="inline-flex items-center gap-3 font-oswald font-bold text-2xl sm:text-3xl text-orange-400 hover:text-orange-300 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-500 focus-visible:ring-offset-2 focus-visible:ring-offset-gray-900 rounded min-h-[44px] mb-8"
                aria-label={`Call us at ${PHONE_NUMBER}`}
              >
                <svg
                  className="h-8 w-8 shrink-0"
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
                {PHONE_NUMBER}
              </a>

              {/* Additional info */}
              <div className="space-y-4 border-t border-gray-700 pt-8">
                <div className="flex items-start gap-3 lg:justify-start justify-center">
                  <svg
                    className="h-5 w-5 text-orange-400 shrink-0 mt-0.5"
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
                  <a
                    href="mailto:info@nexgenconstruction.ca"
                    className="font-lato text-gray-300 hover:text-orange-400 text-sm transition-colors"
                  >
                    info@nexgenconstruction.ca
                  </a>
                </div>
                <div className="flex items-start gap-3 lg:justify-start justify-center">
                  <svg
                    className="h-5 w-5 text-orange-400 shrink-0 mt-0.5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                  <span className="font-lato text-gray-300 text-sm">
                    Greater Toronto Area & Surrounding Communities
                  </span>
                </div>
                <div className="flex items-start gap-3 lg:justify-start justify-center">
                  <svg
                    className="h-5 w-5 text-orange-400 shrink-0 mt-0.5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  <span className="font-lato text-gray-300 text-sm">
                    Mon – Sat: 7:00 AM – 6:00 PM
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
