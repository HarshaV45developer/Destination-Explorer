
import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { Place } from "@/types/Place";

interface PlaceCardProps {
  place: Place;
  isExpanded: boolean;
  onToggleExpand: () => void;
}

const PlaceCard = ({ place, isExpanded, onToggleExpand }: PlaceCardProps) => {
  const [isBookmarked, setIsBookmarked] = useState(false);
  const { toast } = useToast();

  const handleBookmark = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsBookmarked(!isBookmarked);
    toast({
      title: isBookmarked ? "Removed from bookmarks" : "Added to bookmarks",
      description: `${place.name} ${isBookmarked ? 'removed from' : 'added to'} your bookmarks.`,
    });
    console.log("Bookmark toggled for:", place.name);
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case "Food": return "bg-travel-orange text-white";
      case "Heritage": return "bg-travel-blue text-white";
      case "Nature": return "bg-travel-green text-white";
      default: return "bg-gray-500 text-white";
    }
  };

  console.log("PlaceCard rendered for:", place.name, "expanded:", isExpanded);

  return (
    <Card className="card-hover cursor-pointer overflow-hidden">
      <div onClick={onToggleExpand}>
        {/* Image Container */}
        <div className="relative h-48 overflow-hidden">
          <img
            src={place.image}
            alt={place.name}
            className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
          />
          
          {/* Bookmark Button */}
          <Button
            variant="ghost"
            size="sm"
            className="absolute top-2 right-2 w-8 h-8 rounded-full bg-white/80 hover:bg-white p-0"
            onClick={handleBookmark}
          >
            <span className={`text-lg ${isBookmarked ? 'text-red-500' : 'text-gray-400'}`}>
              {isBookmarked ? '❤️' : '🤍'}
            </span>
          </Button>

          {/* Badges */}
          <div className="absolute top-2 left-2 flex gap-2">
            <Badge className={getCategoryColor(place.category)}>
              {place.category}
            </Badge>
            {place.badge && (
              <Badge variant="secondary" className="bg-white text-gray-800">
                {place.badge}
              </Badge>
            )}
          </div>
        </div>

        <CardContent className="p-4">
          {/* Header */}
          <div className="flex justify-between items-start mb-2">
            <h3 className="font-semibold text-lg text-gray-800 line-clamp-1">
              {place.name}
            </h3>
            <div className="flex items-center gap-1 bg-yellow-100 px-2 py-1 rounded-full">
              <span className="text-yellow-600">⭐</span>
              <span className="text-sm font-medium text-yellow-700">{place.rating}</span>
            </div>
          </div>

          {/* Description */}
          <p className="text-gray-600 text-sm mb-4 line-clamp-2">
            {place.description}
          </p>

          {/* Expanded Details */}
          {isExpanded && (
            <div className="mt-4 pt-4 border-t border-gray-200 animate-fade-in">
              <div className="space-y-3 text-sm">
                <div>
                  <span className="font-medium text-gray-700">📍 Address:</span>
                  <p className="text-gray-600 mt-1">{place.details.address}</p>
                </div>
                <div>
                  <span className="font-medium text-gray-700">🕒 Timings:</span>
                  <p className="text-gray-600 mt-1">{place.details.timings}</p>
                </div>
                <div>
                  <span className="font-medium text-gray-700">💡 Tips:</span>
                  <p className="text-gray-600 mt-1">{place.details.tips}</p>
                </div>
              </div>
            </div>
          )}

          {/* Toggle Button */}
          <div className="mt-4 text-center">
            <span className="text-travel-blue text-sm font-medium">
              {isExpanded ? 'Click to show less ↑' : 'Click to show more ↓'}
            </span>
          </div>
        </CardContent>
      </div>
    </Card>
  );
};

export default PlaceCard;
