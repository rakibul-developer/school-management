import { Phone, Mail, MapPin, Clock } from "lucide-react";

export const TopNavbar = () => {
  return (
    <div className="top-nav">
      <div className="w-full bg-[#315AB2] text-white py-2 px-4">
        <div className="container mx-auto flex flex-wrap justify-between items-center text-sm">
          <div className="flex flex-wrap gap-6">
            <div className="flex items-center gap-1">
              <Phone className="h-4 w-4" />
              <span>123456789</span>
            </div>
            <div className="flex items-center gap-1">
              <Mail className="h-4 w-4" />
              <span>info@ddpublicschool.com</span>
            </div>
          </div>
          <div className="flex flex-wrap gap-6">
            <div className="flex items-center gap-1">
              <MapPin className="h-4 w-4" />
              <span>Jagdishpur, Kushinagar, Uttar Pradesh 274403</span>
            </div>
            <div className="flex items-center gap-1">
              <Clock className="h-4 w-4" />
              <span>Mon-Fri: 8:00 AM - 4:00 PM</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
