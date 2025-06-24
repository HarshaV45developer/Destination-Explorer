
import { Button } from "@/components/ui/button";

interface CategoryFiltersProps {
  activeCategory: string;
  onCategoryChange: (category: string) => void;
}

const CategoryFilters = ({ activeCategory, onCategoryChange }: CategoryFiltersProps) => {
  const categories = [
    { id: "All", label: "All Places", icon: "🌍" },
    { id: "Food", label: "Food", icon: "🍽️" },
    { id: "Heritage", label: "Heritage", icon: "🏛️" },
    { id: "Nature", label: "Nature", icon: "🌿" }
  ];

  console.log("CategoryFilters rendered with active category:", activeCategory);

  return (
    <div className="mb-8">
      <h2 className="text-2xl font-bold text-center mb-6 text-gray-800">
        Explore by Category
      </h2>
      <div className="flex flex-wrap justify-center gap-4">
        {categories.map((category) => (
          <Button
            key={category.id}
            onClick={() => onCategoryChange(category.id)}
            className={`category-button ${activeCategory === category.id ? 'active' : ''}`}
            variant="outline"
          >
            <span className="mr-2 text-lg">{category.icon}</span>
            {category.label}
          </Button>
        ))}
      </div>
    </div>
  );
};

export default CategoryFilters;
