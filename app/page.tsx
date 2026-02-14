import Hero from '@/components/Hero';
import ServicesPreview from '@/components/ServicesPreview';
import ProjectsPreview from '@/components/ProjectsPreview';
import ReviewsSection from '@/components/ReviewsSection';
import AboutPreview from '@/components/AboutPreview';
import CertificationsSection from '@/components/CertificationsSection';
import FAQSection from '@/components/FAQSection';
import CTASection from '@/components/CTASection';

export default function Home() {
  return (
    <>
      <Hero />
      <ServicesPreview />
      <ProjectsPreview />
      <ReviewsSection />
      <AboutPreview />
      <CertificationsSection />
      <FAQSection />
      <CTASection />
    </>
  );
}
