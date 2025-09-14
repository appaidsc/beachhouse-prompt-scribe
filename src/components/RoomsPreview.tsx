import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MapPin, Users, Wifi, Coffee, Waves, Bed } from "lucide-react";
import coastalRoom from "@/assets/coastal-room.jpg";
import suiteVeranda from "@/assets/suite-veranda.jpg";
import gardenCottage from "@/assets/garden-cottage.jpg";

const rooms = [
  {
    id: 1,
    name: "The Coastal View Room",
    shortDescription: "Wake to endless ocean vistas through floor-to-ceiling windows. Your private sanctuary features natural linen bedding, driftwood accents, and a reading nook that captures the morning light. Every detail whispers relaxation while waves provide your personal soundtrack.",
    price: 220,
    capacity: 2,
    image: coastalRoom,
    features: ["Ocean View", "King Bed", "Private Balcony", "Ensuite Bath"],
    amenities: [
      { icon: Waves, label: "Ocean View" },
      { icon: Bed, label: "King Bed" },
      { icon: Coffee, label: "Coffee Bar" },
      { icon: Wifi, label: "Free WiFi" }
    ]
  },
  {
    id: 2,
    name: "The Suite with Private Veranda",
    shortDescription: "Embrace coastal luxury in this spacious retreat featuring a private veranda overlooking secluded dunes. Hand-selected oak furnishings complement the sea breeze, while your outdoor sanctuary offers sunset dining and starlit evenings in complete privacy.",
    price: 350,
    capacity: 4,
    image: suiteVeranda,
    features: ["Private Veranda", "Separate Living Area", "Premium Amenities", "Panoramic Views"],
    amenities: [
      { icon: MapPin, label: "Private Veranda" },
      { icon: Users, label: "Up to 4 Guests" },
      { icon: Coffee, label: "Kitchenette" },
      { icon: Wifi, label: "High-Speed WiFi" }
    ]
  },
  {
    id: 3,
    name: "The Garden Cottage",
    shortDescription: "A charming standalone cottage nestled among native coastal flora. This intimate retreat features exposed beam ceilings, a stone fireplace, and French doors opening to your private garden. Perfect for those seeking complete tranquility.",
    price: 280,
    capacity: 2,
    image: gardenCottage,
    features: ["Private Cottage", "Garden Views", "Fireplace", "Secluded Setting"],
    amenities: [
      { icon: MapPin, label: "Private Garden" },
      { icon: Users, label: "2 Guests Max" },
      { icon: Coffee, label: "Full Kitchen" },
      { icon: Wifi, label: "Starlink WiFi" }
    ]
  }
];

export const RoomsPreview = () => {
  return (
    <section id="rooms" className="py-24 bg-sand-light">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-display font-light mb-6 text-foreground">
            Coastal Sanctuaries
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Each room is thoughtfully designed to blur the line between indoor comfort 
            and coastal beauty. Choose your perfect retreat.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {rooms.map((room, index) => (
            <Card 
              key={room.id} 
              className="card-floating group cursor-pointer"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <div className="relative overflow-hidden rounded-t-xl">
                <div 
                  className="h-64 bg-ocean-light bg-cover bg-center image-hover"
                  style={{ backgroundImage: `url(${room.image})` }}
                />
                <div className="absolute top-4 right-4">
                  <Badge className="bg-white/90 text-foreground">
                    ${room.price}/night
                  </Badge>
                </div>
              </div>

              <CardContent className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <h3 className="text-2xl font-display font-medium text-foreground">
                    {room.name}
                  </h3>
                  <div className="flex items-center text-muted-foreground">
                    <Users size={16} className="mr-1" />
                    <span className="text-sm">{room.capacity}</span>
                  </div>
                </div>

                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {room.shortDescription}
                </p>

                <div className="grid grid-cols-2 gap-3 mb-6">
                  {room.amenities.map((amenity, i) => (
                    <div key={i} className="flex items-center text-sm text-muted-foreground">
                      <amenity.icon size={16} className="mr-2 text-primary" />
                      {amenity.label}
                    </div>
                  ))}
                </div>

                <div className="flex gap-3">
                  <Button variant="outline" size="sm" className="flex-1">
                    View Details
                  </Button>
                  <Button className="btn-hero flex-1" size="sm">
                    Check Availability
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button className="btn-hero" size="lg">
            Explore All Rooms
          </Button>
        </div>
      </div>
    </section>
  );
};