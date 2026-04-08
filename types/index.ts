// Types pour le projet Bouillon Baron

export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: number;
  category: 'entree' | 'plat' | 'dessert' | 'boisson';
  image?: string;
  allergens?: string[];
}

export interface Reservation {
  id: string;
  date: Date;
  time: string;
  guests: number;
  name: string;
  email: string;
  phone: string;
  specialRequests?: string;
  confirmed: boolean;
}

export interface Service {
  id: string;
  title: string;
  description: string;
  icon?: string;
  details?: string[];
}

export interface Testimonial {
  id: string;
  author: string;
  content: string;
  rating: number; // 1-5
  date: Date;
}

export interface ContactMessage {
  id: string;
  name: string;
  email: string;
  subject: string;
  message: string;
  date: Date;
  read: boolean;
}

export interface RestaurantInfo {
  name: string;
  address: string;
  phone: string;
  email: string;
  website: string;
  hours: {
    day: string;
    open: string;
    close: string;
  }[];
  capacity: number;
}
