import { View, Text, StyleSheet } from 'react-native';

export default function NewDealScreen(): JSX.Element {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Create New Deal</Text>
      <Text style={styles.subtitle}>Set up a new promotion for your customers.</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center', padding: 24 },
  title: { fontSize: 28, fontWeight: '700' },
  subtitle: { marginTop: 12, fontSize: 16, textAlign: 'center' },
});
