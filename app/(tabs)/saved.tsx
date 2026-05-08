import { View, Text, StyleSheet } from 'react-native';

export default function SavedDealsScreen(): JSX.Element {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Saved Deals</Text>
      <Text style={styles.subtitle}>Your bookmarked deals will appear here.</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center', padding: 24 },
  title: { fontSize: 28, fontWeight: '700' },
  subtitle: { marginTop: 12, fontSize: 16, textAlign: 'center' },
});
