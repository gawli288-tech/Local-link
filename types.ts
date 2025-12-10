export enum UserRole {
  NONE = 'NONE',
  MERCHANT = 'MERCHANT',
  SHOPPER = 'SHOPPER',
}

export type StoreType = 'Kirana' | 'Clothing' | 'Electronics' | 'Medical' | 'Paints' | 'Shoes' | 'Bakery' | 'General' | 'Auto Parts' | 'Agriculture' | 'Restaurant';

export interface User {
  id: string;
  name: string;
  email: string;
  role: UserRole;
  phoneNumber?: string;
  address?: string;
  bio?: string;
  photoURL?: string;
}

export interface Store {
  id: string;
  ownerId: string;
  name: string;
  type: StoreType;
  address: string;
  phoneNumber: string;
}

export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  storeType: StoreType;
  category: string;
  imageUrl: string;
  stock: number;
  storeName?: string;
  storeId?: string;
  distance?: string;
}

export interface CartItem extends Product {
  quantity: number;
}

export interface Order {
  id: string;
  items: CartItem[];
  total: number;
  status: 'pending' | 'preparing' | 'delivering' | 'delivered' | 'cancelled';
  timestamp: number;
  customerName: string;
  address: string;
  phoneNumber: string;
  paymentMethod: string;
}

export interface Review {
  id: string;
  storeId: string;
  userId: string;
  userName: string;
  rating: number; // 1-5
  comment: string;
  timestamp: number;
}

export interface AIResponse {
  text: string;
  items?: string[]; // For recommendations
}

export interface Message {
  id: string;
  senderId: string;
  receiverId: string;
  content: string;
  timestamp: number;
  senderName?: string;
}