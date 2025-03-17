// src/types.ts
export interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: {
    rate: number;
    count: number;
  };
}

// src/types.ts
export interface CartItem {
  id: number;
  title: string;
  price: number;
  image: string;
  quantity: number; // Ensure this property is included
}
