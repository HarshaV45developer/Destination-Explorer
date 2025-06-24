
import { Place } from "@/types/Place";

export const placesData: Place[] = [
  {
    id: 1,
    name: "Mountain View Restaurant",
    description: "Scenic dining with panoramic mountain views and local cuisine",
    image: "https://images.unsplash.com/photo-1472396961693-142e6e269027?w=400&h=300&fit=crop&crop=center",
    rating: 4.8,
    category: "Food",
    badge: "Top Pick",
    isTopPick: true,
    details: {
      address: "123 Mountain View Ave, Peak City",
      timings: "11:00 AM - 10:00 PM",
      tips: "Book ahead for sunset dining. Try their signature mountain trout!"
    }
  },
  {
    id: 2,
    name: "Ancient Heritage Temple",
    description: "Historic temple with stunning architecture and cultural significance",
    image: "https://images.unsplash.com/photo-1466442929976-97f336a657be?w=400&h=300&fit=crop&crop=center",
    rating: 4.9,
    category: "Heritage",
    badge: "Must Visit",
    isTopPick: true,
    details: {
      address: "456 Heritage St, Old Town",
      timings: "6:00 AM - 8:00 PM",
      tips: "Visit during early morning for peaceful atmosphere. Dress modestly."
    }
  },
  {
    id: 3,
    name: "Crystal Lake Park",
    description: "Pristine lake surrounded by walking trails and picnic areas",
    image: "https://images.unsplash.com/photo-1500673922987-e212871fec22?w=400&h=300&fit=crop&crop=center",
    rating: 4.7,
    category: "Nature",
    badge: "Family Friendly",
    isTopPick: true,
    details: {
      address: "789 Nature Trail, Green Valley",
      timings: "5:00 AM - 9:00 PM",
      tips: "Perfect for morning jogs. Bring a picnic basket for lakeside dining."
    }
  },
  {
    id: 4,
    name: "Gourmet Street Kitchen",
    description: "Authentic street food with modern twists and local flavors",
    image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=400&h=300&fit=crop&crop=center",
    rating: 4.6,
    category: "Food",
    details: {
      address: "321 Food Street, Culinary District",
      timings: "12:00 PM - 11:00 PM",
      tips: "Try the fusion tacos and artisanal ice cream. Cash only!"
    }
  },
  {
    id: 5,
    name: "Rocky Mountain Trail",
    description: "Challenging hiking trail with breathtaking summit views",
    image: "https://images.unsplash.com/photo-1426604966848-d7adac402bff?w=400&h=300&fit=crop&crop=center",
    rating: 4.9,
    category: "Nature",
    badge: "Adventure",
    isTopPick: true,
    details: {
      address: "Rocky Trail Head, Mountain Base",
      timings: "6:00 AM - 6:00 PM",
      tips: "Bring plenty of water and wear proper hiking boots. 4-hour round trip."
    }
  },
  {
    id: 6,
    name: "Cultural Heritage Museum",
    description: "Rich collection of artifacts and interactive cultural exhibits",
    image: "https://images.unsplash.com/photo-1472396961693-142e6e269027?w=400&h=300&fit=crop&crop=center&sat=-100&bright=120",
    rating: 4.5,
    category: "Heritage",
    details: {
      address: "100 Culture Blvd, Downtown",
      timings: "9:00 AM - 5:00 PM (Closed Mondays)",
      tips: "Free guided tours at 10 AM and 2 PM. Student discounts available."
    }
  },
  {
    id: 7,
    name: "Seaside Café",
    description: "Fresh seafood and ocean views in a relaxed coastal setting",
    image: "https://images.unsplash.com/photo-1500673922987-e212871fec22?w=400&h=300&fit=crop&crop=center&hue=180",
    rating: 4.4,
    category: "Food",
    details: {
      address: "555 Coastal Rd, Seaside",
      timings: "8:00 AM - 9:00 PM",
      tips: "Amazing sunrise breakfast. Try the catch of the day with local wine."
    }
  },
  {
    id: 8,
    name: "Botanical Garden Sanctuary",
    description: "Diverse plant collections and peaceful walking paths",
    image: "https://images.unsplash.com/photo-1472396961693-142e6e269027?w=400&h=300&fit=crop&crop=center&hue=120",
    rating: 4.6,
    category: "Nature",
    details: {
      address: "200 Garden Way, Green District",
      timings: "7:00 AM - 7:00 PM",
      tips: "Beautiful butterfly house opens at 10 AM. Photography workshops on weekends."
    }
  },
  {
    id: 9,
    name: "Historic Castle Ruins",
    description: "Medieval castle remains with guided tours and panoramic views",
    image: "https://images.unsplash.com/photo-1466442929976-97f336a657be?w=400&h=300&fit=crop&crop=center&brightness=90",
    rating: 4.7,
    category: "Heritage",
    badge: "Historic",
    isTopPick: true,
    details: {
      address: "Castle Hill, Historic Quarter",
      timings: "10:00 AM - 6:00 PM",
      tips: "Wear comfortable shoes for climbing. Medieval reenactments on weekends."
    }
  }
];
