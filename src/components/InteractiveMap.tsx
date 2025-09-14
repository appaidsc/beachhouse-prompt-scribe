import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MapPin, Clock, Star } from "lucide-react";

const attractions = [
  {
    id: 1,
    name: "Sunset Cove Beach",
    description: "A secluded, half-mile stretch of white sand perfect for evening walks and romantic sunsets.",
    category: "Beach",
    distance: "2 min walk",
    rating: 4.9,
    coordinates: { x: 20, y: 60 },
  },
  {
    id: 2,
    name: "Lighthouse Walk",
    description: "Historic lighthouse with panoramic coastal views and charming seaside trails.",
    category: "Landmark",
    distance: "5 min drive",
    rating: 4.7,
    coordinates: { x: 75, y: 25 },
  },
  {
    id: 3,
    name: "Tide Market",
    description: "Artisanal local market featuring fresh seafood, coastal crafts, and morning coffee.",
    category: "Market",
    distance: "3 min walk",
    rating: 4.8,
    coordinates: { x: 50, y: 80 },
  },
];

export const InteractiveMap = () => {
  const [selectedAttraction, setSelectedAttraction] = useState(attractions[0]);
  const [hoveredPin, setHoveredPin] = useState<number | null>(null);

  return (
    <section id="experience" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-display font-light mb-6 text-foreground">
            Discover Your Surroundings
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            The Haven is perfectly positioned to explore the coast's hidden gems. 
            Every adventure is just moments away.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Interactive Map */}
          <div className="relative">
            <div className="aspect-square bg-ocean-light/20 rounded-xl overflow-hidden relative">
              {/* Stylized Map Background */}
              <svg
                viewBox="0 0 100 100"
                className="w-full h-full"
                style={{
                  background: "linear-gradient(135deg, hsl(var(--ocean-light) / 0.3), hsl(var(--sand) / 0.8))"
                }}
              >
                {/* Coast Line */}
                <path
                  d="M 0 70 Q 30 60 60 65 T 100 70 L 100 100 L 0 100 Z"
                  fill="hsl(var(--ocean) / 0.3)"
                  className="animate-pulse"
                />
                
                {/* Hotel Location */}
                <circle
                  cx="40"
                  cy="70"
                  r="3"
                  fill="hsl(var(--primary))"
                  className="animate-float"
                />
                <text
                  x="40"
                  y="85"
                  textAnchor="middle"
                  className="text-xs font-medium fill-foreground"
                >
                  The Haven
                </text>

                {/* Attraction Pins */}
                {attractions.map((attraction) => (
                  <g key={attraction.id}>
                    <circle
                      cx={attraction.coordinates.x}
                      cy={attraction.coordinates.y}
                      r={hoveredPin === attraction.id ? "2.5" : "2"}
                      fill="hsl(var(--accent))"
                      className="interactive-map-pin cursor-pointer transition-all duration-300"
                      onMouseEnter={() => setHoveredPin(attraction.id)}
                      onMouseLeave={() => setHoveredPin(null)}
                      onClick={() => setSelectedAttraction(attraction)}
                    />
                    <circle
                      cx={attraction.coordinates.x}
                      cy={attraction.coordinates.y}
                      r="1"
                      fill="white"
                      className="pointer-events-none"
                    />
                  </g>
                ))}
              </svg>

              {/* Legend */}
              <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm rounded-lg p-3">
                <div className="flex items-center gap-2 text-sm">
                  <div className="w-3 h-3 rounded-full bg-primary"></div>
                  <span>The Haven</span>
                </div>
                <div className="flex items-center gap-2 text-sm mt-1">
                  <div className="w-3 h-3 rounded-full bg-accent"></div>
                  <span>Attractions</span>
                </div>
              </div>
            </div>
          </div>

          {/* Attraction Details */}
          <div className="space-y-6">
            <Card className="card-ocean">
              <CardContent className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-2xl font-display font-medium mb-2">
                      {selectedAttraction.name}
                    </h3>
                    <div className="flex items-center gap-4 text-sm text-muted-foreground mb-3">
                      <Badge variant="secondary">{selectedAttraction.category}</Badge>
                      <div className="flex items-center gap-1">
                        <Clock size={14} />
                        {selectedAttraction.distance}
                      </div>
                      <div className="flex items-center gap-1">
                        <Star size={14} fill="currentColor" />
                        {selectedAttraction.rating}
                      </div>
                    </div>
                  </div>
                  <MapPin className="text-primary" size={24} />
                </div>
                
                <p className="text-muted-foreground leading-relaxed mb-6">
                  {selectedAttraction.description}
                </p>

                <div className="flex gap-3">
                  <button 
                    className="btn-secondary flex-1 px-4 py-2 rounded-lg text-sm font-medium"
                  >
                    Get Directions
                  </button>
                  <button 
                    className="btn-hero flex-1 px-4 py-2 rounded-lg text-sm font-medium"
                  >
                    Learn More
                  </button>
                </div>
              </CardContent>
            </Card>

            {/* Attraction List */}
            <div className="space-y-3">
              {attractions.map((attraction) => (
                <button
                  key={attraction.id}
                  onClick={() => setSelectedAttraction(attraction)}
                  className={`w-full p-4 rounded-lg border text-left transition-all duration-300 ${
                    selectedAttraction.id === attraction.id
                      ? 'border-primary bg-primary/5'
                      : 'border-border hover:border-primary/50 hover:bg-sand/30'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="font-medium mb-1">{attraction.name}</h4>
                      <p className="text-sm text-muted-foreground">{attraction.distance}</p>
                    </div>
                    <div className="flex items-center gap-1 text-sm">
                      <Star size={12} fill="currentColor" />
                      {attraction.rating}
                    </div>
                  </div>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};