import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import HeroSection from "@/components/sections/HeroSection";
import AboutSection from "@/components/sections/AboutSection";
import ProjectsSection from "@/components/sections/ProjectsSection";
import SkillsSection from "@/components/sections/SkillsSection";
import CertificatesSection from "@/components/sections/CertificatesSection";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import GithubSection from "@/components/sections/GithubSection";
import ContactSection from "@/components/sections/ContactSection";
import SectionDivider from "@/components/ui/SectionDivider";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <HeroSection />
      <SectionDivider />

      <AboutSection />
      <SectionDivider />

      <ProjectsSection />
      <SectionDivider />

      <SkillsSection />
      <SectionDivider />

      <CertificatesSection />
      <SectionDivider />

      <TestimonialsSection />
      <SectionDivider />

      <GithubSection />
      <SectionDivider />

      <ContactSection />
      <Footer />
    </main>
  );
}
