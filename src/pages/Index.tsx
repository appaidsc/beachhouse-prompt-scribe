import { Hero } from "@/components/Hero";
import { RoomsPreview } from "@/components/RoomsPreview";
import { InteractiveMap } from "@/components/InteractiveMap";
import { TestimonialsCarousel } from "@/components/TestimonialsCarousel";
import { ContactForm } from "@/components/ContactForm";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main>
        <Hero />
        <RoomsPreview />
        <InteractiveMap />
        <TestimonialsCarousel />
        <ContactForm />
      </main>
      <Footer />
    </div>
  );
};

export default Index;