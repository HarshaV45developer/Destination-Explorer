
import { useToast } from "@/hooks/use-toast";

const Footer = () => {
  const { toast } = useToast();

  const handleLinkClick = (section: string) => {
    toast({
      title: `${section} section`,
      description: "This feature will be available soon!",
    });
  };

  console.log("Footer component rendered");

  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand Section */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-r from-travel-blue to-travel-green rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-sm">DE</span>
              </div>
              <h3 className="text-xl font-bold">Destination Explorer</h3>
            </div>
            <p className="text-gray-300 text-sm">
              Discover amazing places, food, and experiences around the world. 
              Your journey starts here.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <div className="space-y-2 text-sm">
              <button 
                onClick={() => handleLinkClick("About")}
                className="block text-gray-300 hover:text-white transition-colors duration-200"
              >
                About Us
              </button>
              <button 
                onClick={() => handleLinkClick("Contact")}
                className="block text-gray-300 hover:text-white transition-colors duration-200"
              >
                Contact
              </button>
              <button 
                onClick={() => handleLinkClick("Terms")}
                className="block text-gray-300 hover:text-white transition-colors duration-200"
              >
                Terms of Service
              </button>
              <button 
                onClick={() => handleLinkClick("Privacy")}
                className="block text-gray-300 hover:text-white transition-colors duration-200"
              >
                Privacy Policy
              </button>
            </div>
          </div>

          {/* Social Links */}
          <div>
            <h4 className="font-semibold mb-4">Follow Us</h4>
            <div className="flex space-x-4">
              {["Facebook", "Twitter", "Instagram", "YouTube"].map((social) => (
                <button
                  key={social}
                  onClick={() => handleLinkClick(social)}
                  className="w-10 h-10 bg-gray-700 hover:bg-travel-blue rounded-full flex items-center justify-center transition-colors duration-200"
                >
                  <span className="text-sm font-bold">
                    {social.charAt(0)}
                  </span>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-700 pt-6 mt-8 text-center">
          <p className="text-gray-400 text-sm">
            © 2024 Destination Explorer. All rights reserved. Made with ❤️ for travelers.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
