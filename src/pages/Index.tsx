import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/home/Hero";
import { ServicesRow } from "@/components/home/ServicesRow";
import { FeaturedWork } from "@/components/home/FeaturedWork";
import { Testimonials } from "@/components/home/Testimonials";
import { CTASection } from "@/components/home/CTASection";
import { MobileContactFAB } from "@/components/ui/MobileContactFAB";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <ServicesRow />
        <FeaturedWork />
        <Testimonials />
        <CTASection />
      </main>
      <Footer />
      <MobileContactFAB />
    </div>
  );
};

export default Index;
