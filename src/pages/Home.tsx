import AboutPreview from "../components/AboutPreview";
import CTASection from "../components/CTASection";
import ExpertiseSection from "../components/ExpertiseSection";
import HeroSection from "../components/HeroSection";
import { Navbar } from "../components/Navbar";
import ProcessSection from "../components/ProcessSection";
import ServicesSection from "../components/ServicesSection";
import TestimonialsSection from "../components/TestimonialsSection";
import WhyChooseUs from "../components/WhyChooseUs";


export default function Home() {
  return (
    <div className="home">
      <Navbar />
      <HeroSection />
      <AboutPreview />
      <ServicesSection />
      <ExpertiseSection />
      <ProcessSection />
      <WhyChooseUs />
      <TestimonialsSection/>
      <CTASection />
    </div>
  );
}
