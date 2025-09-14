import { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, Star, Quote } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Sarah Chen",
    location: "San Francisco, CA",
    rating: 5,
    text: "The Haven exceeded every expectation. Our coastal view room was a sanctuary of peace, and waking up to the sound of waves was pure magic. The attention to detail in every corner made our anniversary unforgettable.",
    image: "/api/placeholder/80/80",
  },
  {
    id: 2,
    name: "Michael Rodriguez",
    location: "Austin, TX",
    rating: 5,
    text: "Rarely have I experienced such thoughtful hospitality. From the moment we arrived, every need was anticipated. The suite's private veranda became our favorite spot for morning coffee and evening wine.",
    image: "/api/placeholder/80/80",
  },
  {
    id: 3,
    name: "Emma Thompson",
    location: "London, UK",
    rating: 5,
    text: "The Haven is a masterclass in coastal luxury. The design seamlessly blends modern comfort with natural beauty. I've stayed at many boutique hotels, but none captured my heart quite like this.",
    image: "/api/placeholder/80/80",
  },
  {
    id: 4,
    name: "James Park",
    location: "Seattle, WA",
    rating: 5,
    text: "Our garden cottage felt like a private retreat. The peaceful setting and exceptional service created the perfect escape from city life. We're already planning our return visit.",
    image: "/api/placeholder/80/80",
  },
];

export const TestimonialsCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const handlePrevious = () => {
    setIsAutoPlaying(false);
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const handleNext = () => {
    setIsAutoPlaying(false);
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const handleDotClick = (index: number) => {
    setIsAutoPlaying(false);
    setCurrentIndex(index);
  };

  return (
    <section className="py-24 ocean-gradient">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-display font-light mb-6 text-white">
            Guest Stories
          </h2>
          <p className="text-xl text-white/80 max-w-3xl mx-auto leading-relaxed">
            Discover what makes The Haven special through the eyes of our cherished guests.
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          {/* Main Testimonial */}
          <div className="relative overflow-hidden">
            <div 
              className="flex transition-transform duration-500 ease-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {testimonials.map((testimonial) => (
                <div key={testimonial.id} className="w-full flex-shrink-0 px-4">
                  <Card className="bg-white/95 backdrop-blur-sm border-0 shadow-float">
                    <CardContent className="p-8 md:p-12 text-center">
                      <Quote className="w-12 h-12 text-primary mx-auto mb-6 opacity-20" />
                      
                      <blockquote className="text-lg md:text-xl text-foreground leading-relaxed mb-8 font-light">
                        "{testimonial.text}"
                      </blockquote>

                      <div className="flex items-center justify-center mb-4">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star key={i} size={20} className="text-primary fill-current" />
                        ))}
                      </div>

                      <div className="flex items-center justify-center gap-4">
                        <div 
                          className="w-16 h-16 rounded-full bg-sand bg-cover bg-center"
                          style={{ backgroundImage: `url(${testimonial.image})` }}
                        />
                        <div className="text-left">
                          <p className="font-medium text-foreground">{testimonial.name}</p>
                          <p className="text-sm text-muted-foreground">{testimonial.location}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Controls */}
          <div className="flex items-center justify-center gap-6 mt-8">
            <Button
              variant="ghost"
              size="icon"
              onClick={handlePrevious}
              className="text-white hover:bg-white/20 rounded-full"
            >
              <ChevronLeft size={24} />
            </Button>

            {/* Dots Indicator */}
            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => handleDotClick(index)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    index === currentIndex 
                      ? 'bg-white w-8' 
                      : 'bg-white/40 hover:bg-white/60'
                  }`}
                />
              ))}
            </div>

            <Button
              variant="ghost"
              size="icon"
              onClick={handleNext}
              className="text-white hover:bg-white/20 rounded-full"
            >
              <ChevronRight size={24} />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};