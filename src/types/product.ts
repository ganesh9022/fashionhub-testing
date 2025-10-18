export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  category: 'men' | 'women' | 'kids';
  images: string[];
  sizes: string[];
  colors: string[];
  discount?: number;
  inStock: boolean;
  rating?: number;
  reviewCount?: number;
}

export interface CartItem extends Product {
  quantity: number;
  selectedSize: string;
  selectedColor: string;
}

export interface Review {
  id: string;
  productId: string;
  userId: string;
  userName: string;
  rating: number;
  comment: string;
  createdAt: Date;
}
