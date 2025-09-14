import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Calendar, Users, Mail, Phone, User } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface BookingModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export const BookingModal = ({ open, onOpenChange }: BookingModalProps) => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    checkIn: "",
    checkOut: "",
    guests: "2",
    roomType: "",
    name: "",
    email: "",
    phone: "",
    specialRequests: "",
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Simulate booking submission
    toast({
      title: "Booking Request Submitted!",
      description: "We'll confirm your reservation within 24 hours via email.",
    });
    
    onOpenChange(false);
    setStep(1);
    setFormData({
      checkIn: "",
      checkOut: "",
      guests: "2",
      roomType: "",
      name: "",
      email: "",
      phone: "",
      specialRequests: "",
    });
  };

  const handleNext = () => {
    if (step < 2) setStep(step + 1);
  };

  const handleBack = () => {
    if (step > 1) setStep(step - 1);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-2xl bg-card">
        <DialogHeader>
          <DialogTitle className="text-2xl font-display">Reserve Your Haven</DialogTitle>
          <DialogDescription>
            Step {step} of 2 - {step === 1 ? "Select your dates & preferences" : "Guest details"}
          </DialogDescription>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Step 1: Dates & Preferences */}
          <div className={`space-y-6 booking-step ${step === 1 ? 'active' : ''}`}>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="checkIn" className="flex items-center gap-2">
                  <Calendar size={16} />
                  Check-in Date
                </Label>
                <Input
                  id="checkIn"
                  type="date"
                  value={formData.checkIn}
                  onChange={(e) => setFormData({ ...formData, checkIn: e.target.value })}
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="checkOut" className="flex items-center gap-2">
                  <Calendar size={16} />
                  Check-out Date
                </Label>
                <Input
                  id="checkOut"
                  type="date"
                  value={formData.checkOut}
                  onChange={(e) => setFormData({ ...formData, checkOut: e.target.value })}
                  required
                />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label className="flex items-center gap-2">
                  <Users size={16} />
                  Number of Guests
                </Label>
                <Select value={formData.guests} onValueChange={(value) => setFormData({ ...formData, guests: value })}>
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="1">1 Guest</SelectItem>
                    <SelectItem value="2">2 Guests</SelectItem>
                    <SelectItem value="3">3 Guests</SelectItem>
                    <SelectItem value="4">4 Guests</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label>Room Preference</Label>
                <Select value={formData.roomType} onValueChange={(value) => setFormData({ ...formData, roomType: value })}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select room type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="coastal">The Coastal View Room</SelectItem>
                    <SelectItem value="suite">The Suite with Private Veranda</SelectItem>
                    <SelectItem value="cottage">The Garden Cottage</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>

          {/* Step 2: Guest Details */}
          <div className={`space-y-6 booking-step ${step === 2 ? 'active' : ''}`}>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="name" className="flex items-center gap-2">
                  <User size={16} />
                  Full Name
                </Label>
                <Input
                  id="name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email" className="flex items-center gap-2">
                  <Mail size={16} />
                  Email Address
                </Label>
                <Input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="phone" className="flex items-center gap-2">
                <Phone size={16} />
                Phone Number
              </Label>
              <Input
                id="phone"
                type="tel"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="requests">Special Requests (Optional)</Label>
              <Textarea
                id="requests"
                placeholder="Anniversary celebration, dietary requirements, accessibility needs..."
                value={formData.specialRequests}
                onChange={(e) => setFormData({ ...formData, specialRequests: e.target.value })}
                rows={3}
              />
            </div>
          </div>

          {/* Navigation Buttons */}
          <div className="flex justify-between pt-6">
            <div>
              {step > 1 && (
                <Button type="button" variant="outline" onClick={handleBack}>
                  Back
                </Button>
              )}
            </div>
            <div className="flex gap-3">
              <Button type="button" variant="outline" onClick={() => onOpenChange(false)}>
                Cancel
              </Button>
              {step < 2 ? (
                <Button type="button" className="btn-hero" onClick={handleNext}>
                  Continue
                </Button>
              ) : (
                <Button type="submit" className="btn-hero">
                  Submit Reservation
                </Button>
              )}
            </div>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};