
import { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { placesData } from "@/data/placesData";

const TopPlacesCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const topPlaces = placesData.filter(place => place.isTopPick);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % topPlaces.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [topPlaces.length]);

  const handleDotClick = (index: number) => {
    setCurrentSlide(index);
    console.log("Carousel slide changed to:", index);
  };

  console.log("TopPlacesCarousel rendered, current slide:", currentSlide);

  if (topPlaces.length === 0) return null;

  return (
    <div className="mb-12">
      <h2 className="text-2xl font-bold text-center mb-8 text-gray-800">
        Top Picks Just for You
      </h2>
      
      <div className="relative max-w-4xl mx-auto">
        {/* Carousel Container */}
        <div className="overflow-hidden rounded-2xl">
          <div 
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${currentSlide * 100}%)` }}
          >
            {topPlaces.map((place, index) => (
              <div key={place.id} className="w-full flex-shrink-0">
                <Card className="border-0 shadow-lg">
                  <div className="relative h-80 md:h-96">
                    <img
                      src={place.image}
                      alt={place.name}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    
                    {/* Content Overlay */}
                    <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                      <div className="flex items-center gap-2 mb-2">
                        <Badge className="bg-travel-orange text-white">
                          Top Pick
                        </Badge>
                        <div className="flex items-center gap-1">
                          <span>⭐</span>
                          <span className="font-medium">{place.rating}</span>
                        </div>
                      </div>
                      <h3 className="text-2xl font-bold mb-2">{place.name}</h3>
                      <p className="text-white/90 text-sm md:text-base">
                        {place.description}
                      </p>
                    </div>
                  </div>
                </Card>
              </div>
            ))}
          </div>
        </div>

        {/* Navigation Dots */}
        <div className="flex justify-center gap-2 mt-6">
          {topPlaces.map((_, index) => (
            <Button
              key={index}
              variant="ghost"
              size="sm"
              className="w-3 h-3 rounded-full p-0"
              onClick={() => handleDotClick(index)}
            >
              <div 
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  currentSlide === index 
                    ? 'bg-travel-blue scale-125' 
                    : 'bg-gray-300 hover:bg-gray-400'
                }`}
              />
            </Button>
          ))}
        </div>

        {/* Navigation Arrows */}
        <Button
          variant="ghost"
          size="sm"
          className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/80 hover:bg-white shadow-lg"
          onClick={() => setCurrentSlide((prev) => (prev - 1 + topPlaces.length) % topPlaces.length)}
        >
          ←
        </Button>
        <Button
          variant="ghost"
          size="sm"
          className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/80 hover:bg-white shadow-lg"
          onClick={() => setCurrentSlide((prev) => (prev + 1) % topPlaces.length)}
        >
          →
        </Button>
      </div>
    </div>
  );
};

export default TopPlacesCarousel;
