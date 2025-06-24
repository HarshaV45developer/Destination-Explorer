
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { toast } = useToast();

  const handleNavClick = (section: string) => {
    toast({
      title: `Navigating to ${section}`,
      description: "This feature will be available soon!",
    });
    setIsMenuOpen(false);
  };

  console.log("Header component rendered, menu open:", isMenuOpen);

  return (
    <header className="sticky top-0 z-50 bg-white shadow-md">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-r from-travel-blue to-travel-green rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-sm">DE</span>
            </div>
            <h1 className="text-xl font-bold text-gray-800">Destination Explorer</h1>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => handleNavClick("Home")}
              className="text-gray-600 hover:text-travel-blue transition-colors duration-200 font-medium"
            >
              Home
            </button>
            <button 
              onClick={() => handleNavClick("Categories")}
              className="text-gray-600 hover:text-travel-blue transition-colors duration-200 font-medium"
            >
              Categories
            </button>
            <button 
              onClick={() => handleNavClick("Bookmarks")}
              className="text-gray-600 hover:text-travel-blue transition-colors duration-200 font-medium"
            >
              Bookmarks
            </button>
            <button 
              onClick={() => handleNavClick("Contact")}
              className="text-gray-600 hover:text-travel-blue transition-colors duration-200 font-medium"
            >
              Contact
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="sm"
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <div className="w-6 h-6 flex flex-col justify-center space-y-1">
              <span className={`block h-0.5 w-6 bg-gray-600 transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-1.5' : ''}`}></span>
              <span className={`block h-0.5 w-6 bg-gray-600 transition-all duration-300 ${isMenuOpen ? 'opacity-0' : ''}`}></span>
              <span className={`block h-0.5 w-6 bg-gray-600 transition-all duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-1.5' : ''}`}></span>
            </div>
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t animate-fade-in">
            <nav className="flex flex-col space-y-4">
              <button 
                onClick={() => handleNavClick("Home")}
                className="text-left text-gray-600 hover:text-travel-blue transition-colors duration-200 font-medium py-2"
              >
                Home
              </button>
              <button 
                onClick={() => handleNavClick("Categories")}
                className="text-left text-gray-600 hover:text-travel-blue transition-colors duration-200 font-medium py-2"
              >
                Categories
              </button>
              <button 
                onClick={() => handleNavClick("Bookmarks")}
                className="text-left text-gray-600 hover:text-travel-blue transition-colors duration-200 font-medium py-2"
              >
                Bookmarks
              </button>
              <button 
                onClick={() => handleNavClick("Contact")}
                className="text-left text-gray-600 hover:text-travel-blue transition-colors duration-200 font-medium py-2"
              >
                Contact
              </button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
