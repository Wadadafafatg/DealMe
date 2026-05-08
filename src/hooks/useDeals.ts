import { useQuery } from '@tanstack/react-query';
import type { Deal } from '../types';

const placeholderDeals: Deal[] = [
  {
    id: 'deal-1',
    title: '50% Off Sushi Combo',
    description: 'Limited time offer for lunch hours.',
    price: 14.99,
    merchantName: 'Tokyo Bites',
    category: 'Food',
  },
];

export function useDeals() {
  return useQuery({
    queryKey: ['deals'],
    queryFn: async () => placeholderDeals,
  });
}
