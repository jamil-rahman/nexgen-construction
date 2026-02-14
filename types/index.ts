// Central TypeScript types for NexGen Construction

export interface Service {
  id: number;
  title: string;
  description: string;
  icon: string;
  detailedDescription?: string;
  features?: string[];
}

export interface Project {
  id: number;
  title: string;
  description: string;
  category: string;
  images: ProjectImage[];
}

export interface ProjectImage {
  src: string;
  alt: string;
}

export interface Review {
  id: number;
  name: string;
  text: string;
  location: string;
  image?: string;
}

export interface BeforeAfter {
  id: number;
  title: string;
  category: string;
  beforeImage: string;
  afterImage: string;
  description: string;
}

export interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  location: string;
  workType: string;
  message: string;
}

export type FormStatus = "idle" | "submitting" | "success" | "error";

export interface CompanyInfo {
  name: string;
  phone: string;
  email: string;
  location: string;
  serviceArea: string;
}
