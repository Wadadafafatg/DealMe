export type UserRole = 'customer' | 'merchant';

export interface Deal {
  id: string;
  title: string;
  description: string;
  price: number;
  merchantName: string;
  category: string;
}

export interface AuthUser {
  id: string;
  email: string;
  role: UserRole;
}
