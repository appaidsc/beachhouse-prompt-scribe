import { MapPin, Phone, Mail, Instagram, Twitter, Facebook } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-driftwood-dark text-white py-16">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div className="space-y-4">
            <h3 className="text-2xl font-display font-light">The Haven</h3>
            <p className="text-white/70 leading-relaxed">
              A coastal sanctuary where modern luxury meets natural serenity. 
              Your perfect escape awaits.
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-white/70 hover:text-white transition-colors duration-300">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-white/70 hover:text-white transition-colors duration-300">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-white/70 hover:text-white transition-colors duration-300">
                <Twitter size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-medium mb-4">Quick Links</h4>
            <ul className="space-y-3 text-white/70">
              <li><a href="#rooms" className="hover:text-white transition-colors duration-300">Our Rooms</a></li>
              <li><a href="#experience" className="hover:text-white transition-colors duration-300">Local Experiences</a></li>
              <li><a href="#contact" className="hover:text-white transition-colors duration-300">Contact Us</a></li>
              <li><a href="#" className="hover:text-white transition-colors duration-300">Special Offers</a></li>
              <li><a href="#" className="hover:text-white transition-colors duration-300">Gallery</a></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-medium mb-4">Services</h4>
            <ul className="space-y-3 text-white/70">
              <li><a href="#" className="hover:text-white transition-colors duration-300">Concierge</a></li>
              <li><a href="#" className="hover:text-white transition-colors duration-300">Spa & Wellness</a></li>
              <li><a href="#" className="hover:text-white transition-colors duration-300">Private Dining</a></li>
              <li><a href="#" className="hover:text-white transition-colors duration-300">Event Planning</a></li>
              <li><a href="#" className="hover:text-white transition-colors duration-300">Transportation</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-medium mb-4">Get in Touch</h4>
            <div className="space-y-3 text-white/70">
              <div className="flex items-start gap-3">
                <MapPin size={16} className="mt-1 flex-shrink-0" />
                <p className="text-sm">
                  1247 Coastal Highway<br />
                  Serene Bay, CA 93442
                </p>
              </div>
              <div className="flex items-center gap-3">
                <Phone size={16} />
                <p className="text-sm">+1 (805) 555-0123</p>
              </div>
              <div className="flex items-center gap-3">
                <Mail size={16} />
                <p className="text-sm">hello@thehaven.com</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-white/70 text-sm">
              © 2024 The Haven. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm text-white/70">
              <a href="#" className="hover:text-white transition-colors duration-300">Privacy Policy</a>
              <a href="#" className="hover:text-white transition-colors duration-300">Terms of Service</a>
              <a href="#" className="hover:text-white transition-colors duration-300">Accessibility</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};