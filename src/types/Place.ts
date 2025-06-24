
export interface Place {
  id: number;
  name: string;
  description: string;
  image: string;
  rating: number;
  category: "Food" | "Heritage" | "Nature";
  badge?: string;
  details: {
    address: string;
    timings: string;
    tips: string;
  };
  isTopPick?: boolean;
}
