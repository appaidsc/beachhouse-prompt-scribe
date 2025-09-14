import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

export const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { label: "Home", href: "#home" },
    { label: "Rooms", href: "#rooms" },
    { label: "Experience", href: "#experience" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <nav className="fixed top-0 w-full z-50 bg-white/90 backdrop-blur-md border-b border-sand">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="font-display text-2xl font-semibold text-foreground">
            The Haven
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-foreground hover:text-primary transition-colors duration-300 font-medium"
              >
                {item.label}
              </a>
            ))}
            <Button className="btn-secondary">
              Book Now
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-6 animate-slide-in">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="block py-3 text-foreground hover:text-primary transition-colors duration-300"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <Button className="btn-secondary mt-4 w-full">
              Book Now
            </Button>
          </div>
        )}
      </div>
    </nav>
  );
};