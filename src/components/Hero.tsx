import { useState } from "react";
import { Button } from "@/components/ui/button";
import { BookingModal } from "./BookingModal";
import heroImage from "@/assets/hero-beach-house.jpg";

export const Hero = () => {
  const [showBooking, setShowBooking] = useState(false);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      />
      <div className="absolute inset-0 hero-overlay" />
      
      {/* Content */}
      <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-6">
        <h1 className="text-6xl md:text-7xl font-display font-light mb-6 tracking-tight">
          <span className="block text-shimmer">Find Your</span>
          <span className="block">Moment of Peace</span>
        </h1>
        
        <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto font-light leading-relaxed opacity-90">
          Experience coastal luxury where modern design meets natural serenity. 
          Your perfect escape awaits on our pristine shoreline.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button 
            className="btn-hero glow-on-hover"
            size="lg"
            onClick={() => setShowBooking(true)}
          >
            Reserve Your Haven
          </Button>
          
          <Button 
            variant="outline" 
            size="lg"
            className="bg-white/10 border-white/30 text-white hover:bg-white/20 backdrop-blur-sm"
          >
            Explore Our Story
          </Button>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-white/70 animate-float">
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>

      <BookingModal open={showBooking} onOpenChange={setShowBooking} />
    </section>
  );
};