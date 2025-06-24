
import { useState, useEffect } from "react";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import CategoryFilters from "@/components/CategoryFilters";
import PlacesGrid from "@/components/PlacesGrid";
import TopPlacesCarousel from "@/components/TopPlacesCarousel";
import ScrollToTopButton from "@/components/ScrollToTopButton";
import Footer from "@/components/Footer";
import { placesData } from "@/data/placesData";
import { Place } from "@/types/Place";

const Index = () => {
  const [activeCategory, setActiveCategory] = useState<string>("All");
  const [filteredPlaces, setFilteredPlaces] = useState<Place[]>(placesData);

  useEffect(() => {
    if (activeCategory === "All") {
      setFilteredPlaces(placesData);
    } else {
      setFilteredPlaces(placesData.filter(place => place.category === activeCategory));
    }
  }, [activeCategory]);

  console.log("Current active category:", activeCategory);
  console.log("Filtered places count:", filteredPlaces.length);

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <HeroSection />
      <main className="container mx-auto px-4 py-8">
        <CategoryFilters 
          activeCategory={activeCategory} 
          onCategoryChange={setActiveCategory} 
        />
        <PlacesGrid places={filteredPlaces} />
        <TopPlacesCarousel />
      </main>
      <Footer />
      <ScrollToTopButton />
    </div>
  );
};

export default Index;
