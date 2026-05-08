import { View, Text, StyleSheet } from 'react-native';

interface CategoryFilterProps {
  selectedCategory?: string;
}

export function CategoryFilter({ selectedCategory = 'All' }: CategoryFilterProps): JSX.Element {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>Category: {selectedCategory}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { padding: 12, backgroundColor: '#f3f4f6', borderRadius: 8 },
  label: { fontWeight: '600' },
});
