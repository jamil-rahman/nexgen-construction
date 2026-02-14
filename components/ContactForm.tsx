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

const FORMSPREE_ID = process.env.NEXT_PUBLIC_FORMSPREE_ID ?? "";

const INITIAL_FORM: ContactFormData = {
  name: "",
  email: "",
  phone: "",
  location: "",
  workType: "",
  message: "",
};

interface FormErrors {
  name?: string;
  email?: string;
  phone?: string;
  location?: string;
  workType?: string;
  message?: string;
}

/** Sanitize input by trimming whitespace and removing excessive spaces */
const sanitizeInput = (value: string): string => {
  return value.trim().replace(/\s+/g, " ");
};

/** Validate name - must be 2-50 characters, letters, spaces, hyphens, apostrophes only */
const validateName = (name: string): string | undefined => {
  const sanitized = sanitizeInput(name);
  if (!sanitized) return "Name is required";
  if (sanitized.length < 2) return "Name must be at least 2 characters";
  if (sanitized.length > 50) return "Name must be less than 50 characters";
  if (!/^[a-zA-Z\s'-]+$/.test(sanitized)) return "Name can only contain letters, spaces, hyphens, and apostrophes";
  return undefined;
};

/** Validate email format */
const validateEmail = (email: string): string | undefined => {
  const sanitized = sanitizeInput(email);
  if (!sanitized) return "Email is required";
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(sanitized)) return "Please enter a valid email address";
  if (sanitized.length > 100) return "Email is too long";
  return undefined;
};

/** Validate phone - North American format, 10-15 digits */
const validatePhone = (phone: string): string | undefined => {
  const sanitized = phone.replace(/\s+/g, "").trim();
  if (!sanitized) return "Phone number is required";
  // Remove common formatting characters
  const digitsOnly = sanitized.replace(/[\s\-().+]/g, "");
  if (!/^\d{10,15}$/.test(digitsOnly)) return "Please enter a valid phone number (10-15 digits)";
  return undefined;
};

/** Validate location - must be 2-100 characters */
const validateLocation = (location: string): string | undefined => {
  const sanitized = sanitizeInput(location);
  if (!sanitized) return "Location is required";
  if (sanitized.length < 2) return "Location must be at least 2 characters";
  if (sanitized.length > 100) return "Location is too long";
  if (!/^[a-zA-Z0-9\s,.-]+$/.test(sanitized)) return "Location contains invalid characters";
  return undefined;
};

/** Validate work type - must be one of the predefined types */
const validateWorkType = (workType: string): string | undefined => {
  if (!workType) return "Please select a type of work";
  if (!WORK_TYPES.includes(workType as any)) return "Please select a valid work type";
  return undefined;
};

/** Validate message - must be 10-1000 characters */
const validateMessage = (message: string): string | undefined => {
  const sanitized = sanitizeInput(message);
  if (!sanitized) return "Message is required";
  if (sanitized.length < 10) return "Message must be at least 10 characters";
  if (sanitized.length > 1000) return "Message is too long (max 1000 characters)";
  return undefined;
};

/** Validate all form fields */
const validateForm = (form: ContactFormData): FormErrors => {
  return {
    name: validateName(form.name),
    email: validateEmail(form.email),
    phone: validatePhone(form.phone),
    location: validateLocation(form.location),
    workType: validateWorkType(form.workType),
    message: validateMessage(form.message),
  };
};

/** Reusable contact form component with validation and error handling */
export default function ContactForm() {
  const [form, setForm] = useState<ContactFormData>(INITIAL_FORM);
  const [errors, setErrors] = useState<FormErrors>({});
  const [status, setStatus] = useState<FormStatus>("idle");
  const [touched, setTouched] = useState<Record<string, boolean>>({});

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    
    // Clear error for this field when user starts typing
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleBlur = (field: keyof ContactFormData) => {
    setTouched((prev) => ({ ...prev, [field]: true }));
    
    // Validate on blur
    let error: string | undefined;
    switch (field) {
      case "name":
        error = validateName(form.name);
        break;
      case "email":
        error = validateEmail(form.email);
        break;
      case "phone":
        error = validatePhone(form.phone);
        break;
      case "location":
        error = validateLocation(form.location);
        break;
      case "workType":
        error = validateWorkType(form.workType);
        break;
      case "message":
        error = validateMessage(form.message);
        break;
    }
    
    if (error) {
      setErrors((prev) => ({ ...prev, [field]: error }));
    }
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    // Mark all fields as touched
    setTouched({
      name: true,
      email: true,
      phone: true,
      location: true,
      workType: true,
      message: true,
    });

    // Validate all fields
    const validationErrors = validateForm(form);
    const hasErrors = Object.values(validationErrors).some((error) => error !== undefined);

    if (hasErrors) {
      setErrors(validationErrors);
      setStatus("idle");
      console.error("Form validation failed:", validationErrors);
      return;
    }

    setStatus("submitting");
    setErrors({});

    // Sanitize all form data before submission
    const sanitizedData: ContactFormData = {
      name: sanitizeInput(form.name),
      email: sanitizeInput(form.email),
      phone: form.phone.replace(/\s+/g, "").trim(),
      location: sanitizeInput(form.location),
      workType: form.workType,
      message: sanitizeInput(form.message),
    };

    try {
      console.log("Submitting form to Formspree:", { formId: FORMSPREE_ID, timestamp: new Date().toISOString() });
      
      const res = await fetch(`https://formspree.io/f/${FORMSPREE_ID}`, {
        method: "POST",
        headers: { 
          "Content-Type": "application/json", 
          Accept: "application/json" 
        },
        body: JSON.stringify(sanitizedData),
      });

      if (res.ok) {
        const responseData = await res.json();
        console.log("Form submitted successfully:", { 
          status: res.status, 
          timestamp: new Date().toISOString(),
          response: responseData 
        });
        setStatus("success");
        setForm(INITIAL_FORM);
        setTouched({});
        setErrors({});
      } else {
        const errorText = await res.text();
        console.error("Form submission failed:", { 
          status: res.status, 
          statusText: res.statusText,
          error: errorText,
          timestamp: new Date().toISOString() 
        });
        setStatus("error");
      }
    } catch (error) {
      console.error("Form submission error:", { 
        error: error instanceof Error ? error.message : "Unknown error",
        stack: error instanceof Error ? error.stack : undefined,
        timestamp: new Date().toISOString() 
      });
      setStatus("error");
    }
  };

  return (
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
            onBlur={() => handleBlur("name")}
            required
            autoComplete="name"
            aria-invalid={touched.name && !!errors.name}
            aria-describedby={errors.name ? "name-error" : undefined}
            className={`w-full rounded-lg border ${
              touched.name && errors.name ? "border-red-500" : "border-gray-300"
            } bg-gray-50 px-4 py-3 font-lato text-base text-gray-800 placeholder-gray-400 transition-colors focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 focus:outline-none`}
            placeholder="Your name"
          />
          {touched.name && errors.name && (
            <p id="name-error" className="mt-1 text-sm text-red-600" role="alert">
              {errors.name}
            </p>
          )}
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
            onBlur={() => handleBlur("email")}
            required
            autoComplete="email"
            aria-invalid={touched.email && !!errors.email}
            aria-describedby={errors.email ? "email-error" : undefined}
            className={`w-full rounded-lg border ${
              touched.email && errors.email ? "border-red-500" : "border-gray-300"
            } bg-gray-50 px-4 py-3 font-lato text-base text-gray-800 placeholder-gray-400 transition-colors focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 focus:outline-none`}
            placeholder="you@email.com"
          />
          {touched.email && errors.email && (
            <p id="email-error" className="mt-1 text-sm text-red-600" role="alert">
              {errors.email}
            </p>
          )}
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
            onBlur={() => handleBlur("phone")}
            required
            autoComplete="tel"
            aria-invalid={touched.phone && !!errors.phone}
            aria-describedby={errors.phone ? "phone-error" : undefined}
            className={`w-full rounded-lg border ${
              touched.phone && errors.phone ? "border-red-500" : "border-gray-300"
            } bg-gray-50 px-4 py-3 font-lato text-base text-gray-800 placeholder-gray-400 transition-colors focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 focus:outline-none`}
            placeholder="(555) 000-0000"
          />
          {touched.phone && errors.phone && (
            <p id="phone-error" className="mt-1 text-sm text-red-600" role="alert">
              {errors.phone}
            </p>
          )}
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
            onBlur={() => handleBlur("location")}
            required
            autoComplete="address-level2"
            aria-invalid={touched.location && !!errors.location}
            aria-describedby={errors.location ? "location-error" : undefined}
            className={`w-full rounded-lg border ${
              touched.location && errors.location ? "border-red-500" : "border-gray-300"
            } bg-gray-50 px-4 py-3 font-lato text-base text-gray-800 placeholder-gray-400 transition-colors focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 focus:outline-none`}
            placeholder="City, Province"
          />
          {touched.location && errors.location && (
            <p id="location-error" className="mt-1 text-sm text-red-600" role="alert">
              {errors.location}
            </p>
          )}
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
          onBlur={() => handleBlur("workType")}
          required
          aria-invalid={touched.workType && !!errors.workType}
          aria-describedby={errors.workType ? "workType-error" : undefined}
          className={`w-full rounded-lg border ${
            touched.workType && errors.workType ? "border-red-500" : "border-gray-300"
          } bg-gray-50 px-4 py-3 font-lato text-base text-gray-800 transition-colors focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 focus:outline-none appearance-none`}
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
        {touched.workType && errors.workType && (
          <p id="workType-error" className="mt-1 text-sm text-red-600" role="alert">
            {errors.workType}
          </p>
        )}
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
          onBlur={() => handleBlur("message")}
          required
          rows={5}
          aria-invalid={touched.message && !!errors.message}
          aria-describedby={errors.message ? "message-error" : undefined}
          className={`w-full rounded-lg border ${
            touched.message && errors.message ? "border-red-500" : "border-gray-300"
          } bg-gray-50 px-4 py-3 font-lato text-base text-gray-800 placeholder-gray-400 transition-colors focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 focus:outline-none resize-y`}
          placeholder="Tell us about your project..."
        />
        {touched.message && errors.message && (
          <p id="message-error" className="mt-1 text-sm text-red-600" role="alert">
            {errors.message}
          </p>
        )}
      </div>

      {/* Submit button */}
      <button
        type="submit"
        disabled={status === "submitting"}
        className="w-full sm:w-auto inline-flex items-center justify-center px-10 py-4 bg-orange-500 hover:bg-orange-600 disabled:bg-orange-300 disabled:cursor-not-allowed text-white font-oswald font-bold text-base uppercase tracking-wide rounded-lg transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-500 focus-visible:ring-offset-2 min-h-[48px] shadow-md hover:shadow-lg"
      >
        {status === "submitting" ? "Sending..." : "Send Message"}
      </button>

      {/* Status messages */}
      {status === "success" && (
        <div className="p-4 bg-green-50 border border-green-200 rounded-lg" role="status">
          <p className="font-lato text-green-800 text-sm">
            ✓ Thank you! Your message has been sent successfully. We'll get back to you within 24 hours.
          </p>
        </div>
      )}
      {status === "error" && (
        <div className="p-4 bg-red-50 border border-red-200 rounded-lg" role="alert">
          <p className="font-lato text-red-800 text-sm">
            ✗ Something went wrong. Please try again or call us directly at (519) 722-1595.
          </p>
        </div>
      )}
    </form>
  );
}
