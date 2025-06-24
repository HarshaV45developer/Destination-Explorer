
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";

const HeroSection = () => {
  const { toast } = useToast();

  const handleSearch = () => {
    toast({
      title: "Search functionality coming soon!",
      description: "We're working on adding search capabilities.",
    });
  };

  console.log("HeroSection component rendered");

  return (
    <section className="relative h-[70vh] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1426604966848-d7adac402bff?w=1920&h=1080&fit=crop&crop=center')`
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
        <h1 className="text-5xl md:text-6xl font-bold mb-6 animate-fade-in">
          Explore Your Dream City
        </h1>
        <p className="text-xl md:text-2xl mb-8 opacity-90 animate-fade-in" style={{ animationDelay: '0.2s' }}>
          Discover the best places to eat, visit, and experience
        </p>
        
        {/* Search Bar */}
        <div className="flex flex-col sm:flex-row gap-4 max-w-2xl mx-auto animate-fade-in" style={{ animationDelay: '0.4s' }}>
          <Input
            type="text"
            placeholder="Search for destinations, food, or experiences..."
            className="flex-1 h-12 text-gray-800 bg-white/95 border-0 focus:ring-2 focus:ring-travel-blue"
          />
          <Button 
            onClick={handleSearch}
            className="h-12 px-8 bg-travel-orange hover:bg-travel-orange/90 text-white font-semibold transition-all duration-300 hover:scale-105"
          >
            Search
          </Button>
        </div>

        {/* Stats */}
        <div className="flex justify-center gap-8 md:gap-16 mt-12 animate-fade-in" style={{ animationDelay: '0.6s' }}>
          <div className="text-center">
            <div className="text-3xl font-bold">50+</div>
            <div className="text-sm opacity-80">Amazing Places</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold">10k+</div>
            <div className="text-sm opacity-80">Happy Travelers</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold">4.8★</div>
            <div className="text-sm opacity-80">Average Rating</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
