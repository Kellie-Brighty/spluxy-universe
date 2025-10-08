// User Types
export interface User {
  id: string;
  email: string;
  name: string;
  phone?: string;
  role: 'customer' | 'provider' | 'admin';
  createdAt: Date;
  updatedAt: Date;
}

// Customer Types
export interface Customer extends User {
  role: 'customer';
  loyaltyPoints: number;
  referralCode: string;
  address?: Address;
}

// Provider Types
export interface Provider extends User {
  role: 'provider';
  businessName: string;
  businessDescription: string;
  logo?: string;
  pricing: Pricing;
  address: Address;
  isApproved: boolean;
  rating: number;
  totalOrders: number;
}

// Address Type
export interface Address {
  street: string;
  city: string;
  state: string;
  country: string;
  postalCode: string;
  coordinates?: {
    lat: number;
    lng: number;
  };
}

// Pricing Type
export interface Pricing {
  basePrice: number;
  pricePerItem: number;
  specialServices: {
    [key: string]: number;
  };
}

// Order Types
export interface Order {
  id: string;
  customerId: string;
  providerId: string;
  items: OrderItem[];
  status: OrderStatus;
  pickupDate: Date;
  deliveryDate: Date;
  totalAmount: number;
  paymentStatus: PaymentStatus;
  createdAt: Date;
  updatedAt: Date;
}

export interface OrderItem {
  id: string;
  name: string;
  image: string;
  category: string;
  quantity: number;
  price: number;
  specialInstructions?: string;
}

export type OrderStatus = 
  | 'pending'
  | 'confirmed'
  | 'picked_up'
  | 'in_progress'
  | 'ready'
  | 'out_for_delivery'
  | 'delivered'
  | 'cancelled';

export type PaymentStatus = 
  | 'pending'
  | 'paid'
  | 'failed'
  | 'refunded';

// Booking Types
export interface Booking {
  id: string;
  customerId: string;
  providerId: string;
  items: OrderItem[];
  pickupSlot: TimeSlot;
  deliverySlot: TimeSlot;
  totalAmount: number;
  status: 'pending' | 'confirmed' | 'cancelled';
  createdAt: Date;
}

export interface TimeSlot {
  date: Date;
  startTime: string;
  endTime: string;
  isAvailable: boolean;
}

// API Response Types
export interface ApiResponse<T> {
  success: boolean;
  data?: T;
  error?: string;
  message?: string;
}

// Form Types
export interface LoginForm {
  email: string;
  password: string;
}

export interface RegisterForm {
  name: string;
  email: string;
  password: string;
  phone?: string;
  role: 'customer' | 'provider';
}

export interface BookingForm {
  providerId: string;
  items: OrderItem[];
  pickupSlot: TimeSlot;
  deliverySlot: TimeSlot;
  specialInstructions?: string;
}
