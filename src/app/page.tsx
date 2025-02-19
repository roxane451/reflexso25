"use client";

import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import BenefitsSection from "../components/BenefitsSection";
import TherapistSection from "../components/TherapistSection";
import ServicesSection from "../components/ServicesSection";
import InsuranceSection from "../components/InsuranceSection";
import CertificationsSection from "../components/CertificationsSection";
import ContactSection from "../components/ContactSection";
import TestimonialsSection from "../components/TestimonialsSection";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-squash-background">
      <Navbar />
      <HeroSection />
      <BenefitsSection />
      <TherapistSection />
      <ServicesSection />
      <InsuranceSection />
      <CertificationsSection />
      <ContactSection />
      <TestimonialsSection />
      <Footer />
    </div>
  );
}
