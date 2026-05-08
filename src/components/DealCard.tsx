import { View, Text, StyleSheet } from 'react-native';
import type { Deal } from '../types';

interface DealCardProps {
  deal: Deal;
}

export function DealCard({ deal }: DealCardProps): JSX.Element {
  return (
    <View style={styles.card}>
      <Text style={styles.title}>{deal.title}</Text>
      <Text style={styles.merchant}>{deal.merchantName}</Text>
      <Text>{deal.description}</Text>
      <Text style={styles.price}>${deal.price.toFixed(2)}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: { borderWidth: 1, borderColor: '#e5e7eb', borderRadius: 12, padding: 16, gap: 4 },
  title: { fontSize: 18, fontWeight: '700' },
  merchant: { color: '#4b5563' },
  price: { marginTop: 8, fontWeight: '700' },
});
