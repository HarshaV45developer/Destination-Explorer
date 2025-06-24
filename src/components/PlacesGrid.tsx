
import { useState } from "react";
import PlaceCard from "@/components/PlaceCard";
import { Place } from "@/types/Place";

interface PlacesGridProps {
  places: Place[];
}

const PlacesGrid = ({ places }: PlacesGridProps) => {
  const [expandedCard, setExpandedCard] = useState<number | null>(null);

  const handleCardExpand = (placeId: number) => {
    setExpandedCard(expandedCard === placeId ? null : placeId);
    console.log("Card expanded/collapsed:", placeId);
  };

  console.log("PlacesGrid rendered with", places.length, "places");

  return (
    <div className="mb-12">
      <h2 className="text-2xl font-bold text-center mb-8 text-gray-800">
        Featured Destinations
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {places.map((place) => (
          <PlaceCard
            key={place.id}
            place={place}
            isExpanded={expandedCard === place.id}
            onToggleExpand={() => handleCardExpand(place.id)}
          />
        ))}
      </div>
      {places.length === 0 && (
        <div className="text-center py-12">
          <p className="text-gray-500 text-lg">No places found in this category.</p>
        </div>
      )}
    </div>
  );
};

export default PlacesGrid;
