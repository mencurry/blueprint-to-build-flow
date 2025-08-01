import { Heart, Mail, MapPin, Phone } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary-dark text-primary-foreground">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
                <span className="text-primary font-bold text-sm">SB</span>
              </div>
              <span className="font-bold text-lg">Senior Blossom</span>
            </div>
            <p className="text-primary-foreground/80 text-sm leading-relaxed">
              Dedicated to empowering seniors and building stronger communities through compassionate care and meaningful connections.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg">Quick Links</h3>
            <div className="space-y-2">
              <a href="#home" className="block text-primary-foreground/80 hover:text-white transition-colors text-sm">Home</a>
              <a href="#about" className="block text-primary-foreground/80 hover:text-white transition-colors text-sm">About Us</a>
              <a href="#programs" className="block text-primary-foreground/80 hover:text-white transition-colors text-sm">Programs</a>
              <a href="#volunteer" className="block text-primary-foreground/80 hover:text-white transition-colors text-sm">Volunteer</a>
            </div>
          </div>

          {/* Support */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg">Support</h3>
            <div className="space-y-2">
              <a href="#donate" className="block text-primary-foreground/80 hover:text-white transition-colors text-sm">Donate</a>
              <a href="#monthly-giving" className="block text-primary-foreground/80 hover:text-white transition-colors text-sm">Monthly Giving</a>
              <a href="#sponsor" className="block text-primary-foreground/80 hover:text-white transition-colors text-sm">Corporate Sponsorship</a>
              <a href="#events" className="block text-primary-foreground/80 hover:text-white transition-colors text-sm">Events</a>
            </div>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg">Contact Us</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-2">
                <MapPin size={16} className="text-primary-foreground/60" />
                <span className="text-primary-foreground/80 text-sm">123 Community St, City, State 12345</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone size={16} className="text-primary-foreground/60" />
                <span className="text-primary-foreground/80 text-sm">(555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail size={16} className="text-primary-foreground/60" />
                <span className="text-primary-foreground/80 text-sm">hello@seniorblossom.org</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-primary-foreground/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex items-center space-x-2 text-sm text-primary-foreground/80">
              <span>© 2024 Senior Blossom. Made with</span>
              <Heart size={16} className="text-red-400" />
              <span>for our community</span>
            </div>
            <div className="flex space-x-6 text-sm">
              <a href="#privacy" className="text-primary-foreground/80 hover:text-white transition-colors">Privacy Policy</a>
              <a href="#terms" className="text-primary-foreground/80 hover:text-white transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;